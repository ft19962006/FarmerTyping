import { useState, useEffect, useCallback, useRef } from 'react';
import { useTypingStore } from '../stores/useTypingStore';
import { calculateTypingStats } from '../utils/wordGenerator';

export interface TypingEngineConfig {
  targetWord: string;
  timeLimit: number;
  cropSlotId: string;
  onComplete?: (stats: { wpm: number; accuracy: number; combo: number }) => void;
  onTimeout?: () => void;
  onComboMilestone?: (milestone: number) => void;
}

export interface TypingEngineState {
  typedChars: string;
  charStatuses: ('correct' | 'wrong' | 'pending' | 'current')[];
  timeRemaining: number;
  wpm: number;
  accuracy: number;
  combo: number;
  isComplete: boolean;
  isTimeout: boolean;
  feedbackMessage: 'perfect' | 'good' | 'miss' | null;
}

export interface TypingEngineActions {
  handleKeyPress: (key: string) => void;
  reset: () => void;
  start: () => void;
}

const COMBO_MILESTONES = [10, 25, 50, 100];

export function useTypingEngine(config: TypingEngineConfig): [TypingEngineState, TypingEngineActions] {
  const { targetWord, timeLimit, cropSlotId, onComplete, onTimeout, onComboMilestone } = config;
  
  const typingStore = useTypingStore();
  
  const [typedChars, setTypedChars] = useState('');
  const [charStatuses, setCharStatuses] = useState<TypingEngineState['charStatuses']>([]);
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isComplete, setIsComplete] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<TypingEngineState['feedbackMessage']>(null);
  const [isActive, setIsActive] = useState(false);
  
  const startTimeRef = useRef<number>(0);
  const errorCountRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastComboMilestoneRef = useRef<number>(0);

  // Calculate character statuses
  const calculateCharStatuses = useCallback((typed: string): TypingEngineState['charStatuses'] => {
    return targetWord.split('').map((targetChar, index) => {
      if (index < typed.length) {
        return typed[index] === targetChar ? 'correct' : 'wrong';
      } else if (index === typed.length) {
        return 'current';
      }
      return 'pending';
    });
  }, [targetWord]);

  // Calculate real-time WPM
  const calculateRealtimeWPM = useCallback((charsTyped: number) => {
    if (startTimeRef.current === 0 || charsTyped === 0) return 0;
    const elapsedMs = Date.now() - startTimeRef.current;
    const elapsedMinutes = elapsedMs / 60000;
    if (elapsedMinutes === 0) return 0;
    // Standard WPM: (characters typed / 5) / minutes
    return Math.round((charsTyped / 5) / elapsedMinutes);
  }, []);

  // Calculate real-time accuracy
  const calculateRealtimeAccuracy = useCallback((correctChars: number, totalChars: number) => {
    if (totalChars === 0) return 100;
    return Math.round((correctChars / totalChars) * 100);
  }, []);

  // Start the typing session
  const start = useCallback(() => {
    setIsActive(true);
    startTimeRef.current = Date.now();
    errorCountRef.current = 0;
    lastComboMilestoneRef.current = 0;
    setTypedChars('');
    setCharStatuses(calculateCharStatuses(''));
    setTimeRemaining(timeLimit);
    setWpm(0);
    setAccuracy(100);
    setIsComplete(false);
    setIsTimeout(false);
    setFeedbackMessage(null);
    
    typingStore.startSession(targetWord, timeLimit, cropSlotId);
  }, [targetWord, timeLimit, cropSlotId, typingStore, calculateCharStatuses]);

  // Handle key press - character-by-character validation
  const handleKeyPress = useCallback((key: string) => {
    if (!isActive || isComplete || isTimeout) return;
    if (key.length !== 1) return; // Ignore special keys
    
    const newTypedChars = typedChars + key;
    const currentIndex = typedChars.length;
    const isCorrect = key === targetWord[currentIndex];
    
    if (!isCorrect) {
      errorCountRef.current += 1;
      // Show miss feedback briefly
      setFeedbackMessage('miss');
      setTimeout(() => setFeedbackMessage(null), 300);
    }
    
    setTypedChars(newTypedChars);
    setCharStatuses(calculateCharStatuses(newTypedChars));
    
    // Update store
    typingStore.updateTypedText(newTypedChars);
    
    // Calculate stats
    const correctChars = newTypedChars.split('').filter((c, i) => c === targetWord[i]).length;
    const currentWpm = calculateRealtimeWPM(newTypedChars.length);
    const currentAccuracy = calculateRealtimeAccuracy(correctChars, newTypedChars.length);
    
    setWpm(currentWpm);
    setAccuracy(currentAccuracy);
    
    // Check for word completion
    if (newTypedChars.length === targetWord.length) {
      const allCorrect = newTypedChars === targetWord;
      setIsComplete(true);
      setIsActive(false);
      
      // Stop timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      
      // Calculate final stats
      const finalStats = calculateTypingStats(
        startTimeRef.current,
        Date.now(),
        targetWord.length,
        errorCountRef.current
      );
      
      // End session in store
      const sessionStats = typingStore.endSession(allCorrect);
      
      if (allCorrect) {
        // Perfect if no errors, Good otherwise
        setFeedbackMessage(errorCountRef.current === 0 ? 'perfect' : 'good');
        
        // Check combo milestones
        const newCombo = typingStore.combo;
        for (const milestone of COMBO_MILESTONES) {
          if (newCombo >= milestone && lastComboMilestoneRef.current < milestone) {
            lastComboMilestoneRef.current = milestone;
            onComboMilestone?.(milestone);
          }
        }
        
        onComplete?.({
          wpm: sessionStats?.wpm ?? finalStats.wpm,
          accuracy: sessionStats?.accuracy ?? finalStats.accuracy,
          combo: newCombo,
        });
      } else {
        setFeedbackMessage('miss');
        typingStore.resetCombo();
        onTimeout?.();
      }
    }
  }, [
    isActive, isComplete, isTimeout, typedChars, targetWord,
    calculateCharStatuses, calculateRealtimeWPM, calculateRealtimeAccuracy,
    typingStore, onComplete, onComboMilestone, onTimeout
  ]);

  // Reset the engine
  const reset = useCallback(() => {
    setIsActive(false);
    setTypedChars('');
    setCharStatuses(calculateCharStatuses(''));
    setTimeRemaining(timeLimit);
    setWpm(0);
    setAccuracy(100);
    setIsComplete(false);
    setIsTimeout(false);
    setFeedbackMessage(null);
    startTimeRef.current = 0;
    errorCountRef.current = 0;
    
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    typingStore.cancelSession();
  }, [timeLimit, calculateCharStatuses, typingStore]);

  // Timer effect
  useEffect(() => {
    if (!isActive || isComplete || isTimeout) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const remaining = Math.max(0, timeLimit - elapsed);
      setTimeRemaining(remaining);

      if (remaining <= 0) {
        setIsTimeout(true);
        setIsActive(false);
        setFeedbackMessage('miss');
        
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        
        typingStore.endSession(false);
        typingStore.resetCombo();
        onTimeout?.();
      }
    }, 100);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isActive, isComplete, isTimeout, timeLimit, typingStore, onTimeout]);

  // Initialize char statuses on mount
  useEffect(() => {
    setCharStatuses(calculateCharStatuses(''));
  }, [calculateCharStatuses]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const state: TypingEngineState = {
    typedChars,
    charStatuses,
    timeRemaining,
    wpm,
    accuracy,
    combo: typingStore.combo,
    isComplete,
    isTimeout,
    feedbackMessage,
  };

  const actions: TypingEngineActions = {
    handleKeyPress,
    reset,
    start,
  };

  return [state, actions];
}
