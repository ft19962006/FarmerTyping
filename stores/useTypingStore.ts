import { create } from 'zustand';
import { TypingSession } from '../types';
import { checkWordMatch, calculateTypingStats } from '../utils/wordGenerator';

// Session history entry
export interface SessionHistoryEntry {
  word: string;
  wpm: number;
  accuracy: number;
  time: number;
  success: boolean;
  timestamp: number;
}

// Sound effect types
export type SoundEffectType =
  | 'keyPress'
  | 'correct'
  | 'wrong'
  | 'complete'
  | 'timeout'
  | 'comboMilestone'
  | 'perfect';

interface TypingState {
  // State
  activeSession: TypingSession | null;
  currentWPM: number;
  currentAccuracy: number;
  combo: number;
  maxCombo: number;
  errorCount: number;
  recentWPMs: number[]; // Track recent WPMs for averaging
  sessionHistory: SessionHistoryEntry[]; // Track session history
  pendingSoundEffect: SoundEffectType | null; // Sound effect to play (audio not implemented yet)

  // Actions
  startSession: (targetWord: string, timeLimit: number, cropSlotId: string) => void;
  updateTypedText: (text: string) => { isComplete: boolean; isCorrect: boolean };
  endSession: (success: boolean) => { wpm: number; accuracy: number } | null;
  cancelSession: () => void;
  incrementCombo: () => void;
  resetCombo: () => void;
  getSessionTimeRemaining: () => number;
  resetTypingState: () => void;
  
  // New methods for stats
  calculateAverageWPM: () => number;
  calculateOverallAccuracy: () => number;
  getSessionHistory: () => SessionHistoryEntry[];
  clearSessionHistory: () => void;
  triggerSoundEffect: (effect: SoundEffectType) => void;
  clearSoundEffect: () => void;
}

export const useTypingStore = create<TypingState>((set, get) => ({
  // Initial state
  activeSession: null,
  currentWPM: 0,
  currentAccuracy: 100,
  combo: 0,
  maxCombo: 0,
  errorCount: 0,
  recentWPMs: [],
  sessionHistory: [],
  pendingSoundEffect: null,

  // Actions
  startSession: (targetWord, timeLimit, cropSlotId) => {
    const session: TypingSession = {
      targetWord,
      typedText: '',
      startTime: Date.now(),
      timeLimit,
      cropSlotId,
    };
    set({ 
      activeSession: session, 
      errorCount: 0,
    });
  },

  updateTypedText: (text) => {
    const { activeSession, errorCount } = get();
    
    if (!activeSession) {
      return { isComplete: false, isCorrect: false };
    }

    const result = checkWordMatch(activeSession.targetWord, text);
    
    // Count new errors (characters that don't match)
    let newErrors = 0;
    const prevLength = activeSession.typedText.length;
    if (text.length > prevLength) {
      // Only count errors for newly typed characters
      for (let i = prevLength; i < text.length; i++) {
        if (text[i] !== activeSession.targetWord[i]) {
          newErrors++;
        }
      }
    }

    set({
      activeSession: { ...activeSession, typedText: text },
      errorCount: errorCount + newErrors,
    });

    return result;
  },

  endSession: (success) => {
    const { activeSession, errorCount, combo, maxCombo, recentWPMs, sessionHistory } = get();
    
    if (!activeSession) return null;

    const endTime = Date.now();
    const stats = calculateTypingStats(
      activeSession.startTime,
      endTime,
      activeSession.targetWord.length,
      errorCount
    );

    // Create session history entry
    const historyEntry: SessionHistoryEntry = {
      word: activeSession.targetWord,
      wpm: stats.wpm,
      accuracy: stats.accuracy,
      time: (endTime - activeSession.startTime) / 1000,
      success,
      timestamp: endTime,
    };

    // Update recent WPMs for rolling average
    const newRecentWPMs = [...recentWPMs, stats.wpm].slice(-10);
    const averageWPM = Math.round(
      newRecentWPMs.reduce((a, b) => a + b, 0) / newRecentWPMs.length
    );

    // Add to session history (keep last 100 entries)
    const newSessionHistory = [...sessionHistory, historyEntry].slice(-100);

    if (success) {
      const newCombo = combo + 1;
      set({
        activeSession: null,
        currentWPM: averageWPM,
        currentAccuracy: stats.accuracy,
        combo: newCombo,
        maxCombo: Math.max(maxCombo, newCombo),
        errorCount: 0,
        recentWPMs: newRecentWPMs,
        sessionHistory: newSessionHistory,
        pendingSoundEffect: errorCount === 0 ? 'perfect' : 'complete',
      });
    } else {
      set({
        activeSession: null,
        currentWPM: averageWPM,
        currentAccuracy: stats.accuracy,
        combo: 0,
        errorCount: 0,
        recentWPMs: newRecentWPMs,
        sessionHistory: newSessionHistory,
        pendingSoundEffect: 'timeout',
      });
    }

    return stats;
  },

  cancelSession: () => {
    set({ 
      activeSession: null, 
      errorCount: 0,
    });
  },

  incrementCombo: () => {
    const { combo, maxCombo } = get();
    const newCombo = combo + 1;
    set({
      combo: newCombo,
      maxCombo: Math.max(maxCombo, newCombo),
    });
  },

  resetCombo: () => {
    set({ combo: 0 });
  },

  getSessionTimeRemaining: () => {
    const { activeSession } = get();
    if (!activeSession) return 0;
    
    const elapsed = (Date.now() - activeSession.startTime) / 1000;
    return Math.max(0, activeSession.timeLimit - elapsed);
  },

  resetTypingState: () => {
    set({
      activeSession: null,
      currentWPM: 0,
      currentAccuracy: 100,
      combo: 0,
      maxCombo: 0,
      errorCount: 0,
      recentWPMs: [],
      sessionHistory: [],
      pendingSoundEffect: null,
    });
  },

  // Calculate average WPM from session history
  calculateAverageWPM: () => {
    const { sessionHistory } = get();
    if (sessionHistory.length === 0) return 0;
    
    const successfulSessions = sessionHistory.filter(s => s.success);
    if (successfulSessions.length === 0) return 0;
    
    const totalWPM = successfulSessions.reduce((sum, s) => sum + s.wpm, 0);
    return Math.round(totalWPM / successfulSessions.length);
  },

  // Calculate overall accuracy from session history
  calculateOverallAccuracy: () => {
    const { sessionHistory } = get();
    if (sessionHistory.length === 0) return 100;
    
    const totalAccuracy = sessionHistory.reduce((sum, s) => sum + s.accuracy, 0);
    return Math.round(totalAccuracy / sessionHistory.length);
  },

  // Get session history
  getSessionHistory: () => {
    return get().sessionHistory;
  },

  // Clear session history
  clearSessionHistory: () => {
    set({ sessionHistory: [] });
  },

  // Trigger a sound effect (audio not implemented yet, just sets the flag)
  triggerSoundEffect: (effect: SoundEffectType) => {
    set({ pendingSoundEffect: effect });
  },

  // Clear the pending sound effect
  clearSoundEffect: () => {
    set({ pendingSoundEffect: null });
  },
}));
