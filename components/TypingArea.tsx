import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { useTypingEngine, TypingEngineConfig } from '../hooks/useTypingEngine';
import { TypingFeedback } from './TypingFeedback';
import { CropType, WeatherType } from '../types';
import { useGameStore } from '../stores/useGameStore';
import { weatherSystem } from '../game/WeatherSystem';

interface TypingAreaProps {
  targetWord: string;
  timeLimit: number;
  cropSlotId: string;
  cropType?: CropType;
  autoStart?: boolean;
  weatherOverride?: WeatherType; // Allow override for testing
  onComplete?: (stats: { wpm: number; accuracy: number; combo: number }) => void;
  onTimeout?: () => void;
  onComboMilestone?: (milestone: number) => void;
}

export const TypingArea: React.FC<TypingAreaProps> = ({
  targetWord,
  timeLimit,
  cropSlotId,
  cropType,
  autoStart = true,
  weatherOverride,
  onComplete,
  onTimeout,
  onComboMilestone,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Get current weather and its effects
  const currentWeather = useGameStore((state) => state.weather);
  const weather = weatherOverride || currentWeather;
  const weatherEffects = useMemo(() => weatherSystem.getEffectsForWeather(weather), [weather]);
  
  // Apply weather time multiplier to time limit
  const adjustedTimeLimit = timeLimit * weatherEffects.harvestTimeMultiplier;

  const config: TypingEngineConfig = {
    targetWord,
    timeLimit: adjustedTimeLimit,
    cropSlotId,
    onComplete,
    onTimeout,
    onComboMilestone,
  };

  const [state, actions] = useTypingEngine(config);

  // Auto-focus input
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Auto-start if enabled
  useEffect(() => {
    if (autoStart) {
      actions.start();
    }
  }, [autoStart, actions]);

  // Handle keyboard input
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent default for most keys to avoid unwanted behavior
    if (e.key !== 'Tab' && e.key !== 'Escape') {
      e.preventDefault();
    }

    // Only process single character keys
    if (e.key.length === 1) {
      actions.handleKeyPress(e.key);
      
      // Add shake effect on wrong character
      const currentIndex = state.typedChars.length;
      if (e.key !== targetWord[currentIndex] && containerRef.current) {
        containerRef.current.classList.add('screen-shake');
        setTimeout(() => {
          containerRef.current?.classList.remove('screen-shake');
        }, 300);
      }
    }
  }, [actions, state.typedChars.length, targetWord]);

  // Click to focus
  const handleContainerClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  // Format time remaining
  const formatTime = (seconds: number): string => {
    return seconds.toFixed(1);
  };

  // Timer warning (below 3 seconds)
  const isTimerWarning = state.timeRemaining <= 3 && state.timeRemaining > 0;

  return (
    <div
      ref={containerRef}
      className="typing-area"
      onClick={handleContainerClick}
    >
      {/* Crop info header */}
      {cropType && (
        <div className="crop-header">
          <span className="crop-emoji">{cropType.emoji}</span>
          <span className="crop-label">目前作物：</span>
          <span className="crop-name">{cropType.name}</span>
        </div>
      )}

      {/* Target word display */}
      <div className={`word-container ${weatherEffects.typingEffect === 'shaking' ? 'weather-shaking' : ''} ${weather === 'rainbow' ? 'rainbow-shimmer' : ''}`}>
        <div className="target-word">
          {targetWord.split('').map((char, index) => {
            // Foggy weather: randomly blur some characters
            const isFoggyHidden = weatherEffects.typingEffect === 'foggy' &&
              index > state.typedChars.length && // Only hide untyped chars
              Math.random() < 0.3; // 30% chance to hide
            
            return (
              <span
                key={index}
                className={`char char-${state.charStatuses[index] || 'pending'} ${isFoggyHidden ? 'foggy-hidden' : ''}`}
              >
                {isFoggyHidden ? '█' : char}
              </span>
            );
          })}
        </div>
        
        {/* Hint text */}
        <div className={`hint-text ${weatherEffects.typingEffect === 'foggy' ? 'foggy-hint' : ''}`}>
          {weatherEffects.typingEffect === 'foggy' ? '(some letters hidden)' : targetWord}
        </div>
      </div>

      {/* Invisible input for capturing keystrokes */}
      <input
        ref={inputRef}
        type="text"
        className="hidden-input"
        onKeyDown={handleKeyDown}
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        aria-label="Type the word"
      />

      {/* Feedback component */}
      <TypingFeedback
        message={state.feedbackMessage}
        combo={state.combo}
        showCombo={true}
      />

      {/* Stats display */}
      {/* Weather indicator */}
      {weather !== 'sunny' && (
        <div className={`weather-indicator weather-${weather}`}>
          <span className="weather-emoji">
            {weather === 'rainy' && '🌧️'}
            {weather === 'stormy' && '⛈️'}
            {weather === 'snowy' && '❄️'}
            {weather === 'foggy' && '🌫️'}
            {weather === 'rainbow' && '🌈'}
          </span>
          <span className="weather-effect">
            {weather === 'stormy' && 'Text shaking!'}
            {weather === 'snowy' && `Time: ${Math.round(weatherEffects.harvestTimeMultiplier * 100)}%`}
            {weather === 'foggy' && 'Letters hidden!'}
            {weather === 'rainbow' && `Time: x${weatherEffects.harvestTimeMultiplier}`}
            {weather === 'rainy' && 'Growth +20%'}
          </span>
        </div>
      )}

      <div className="stats-row">
        <div className={`stat timer ${isTimerWarning ? 'timer-warning' : ''}`}>
          <span className="stat-icon">⏱️</span>
          <span className="stat-label">剩餘</span>
          <span className="stat-value">{formatTime(state.timeRemaining)} 秒</span>
        </div>
        <div className="stat accuracy">
          <span className="stat-icon">✅</span>
          <span className="stat-label">正確率</span>
          <span className="stat-value">{state.accuracy}%</span>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat combo">
          <span className="stat-icon">🔥</span>
          <span className="stat-label">Combo</span>
          <span className="stat-value">x{state.combo}</span>
        </div>
        <div className="stat wpm">
          <span className="stat-icon">⚡</span>
          <span className="stat-label">WPM</span>
          <span className="stat-value">{state.wpm}</span>
        </div>
      </div>

      {/* Status indicators */}
      {state.isComplete && (
        <div className="status-complete">
          ✅ 完成!
        </div>
      )}
      {state.isTimeout && (
        <div className="status-timeout">
          ⏰ 時間到!
        </div>
      )}

      <style>{`
        .typing-area {
          background: linear-gradient(135deg, #f5e6d3 0%, #e8d5b7 100%);
          border: 4px solid #8B7355;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 
            inset 0 2px 4px rgba(0,0,0,0.1),
            0 4px 12px rgba(0,0,0,0.2);
          cursor: text;
          user-select: none;
          min-width: 400px;
          max-width: 600px;
          margin: 0 auto;
        }

        .crop-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          font-size: 18px;
          color: #5a4a3a;
        }

        .crop-emoji {
          font-size: 32px;
        }

        .crop-label {
          color: #8B7355;
        }

        .crop-name {
          font-weight: bold;
          color: #2d5a27;
        }

        .word-container {
          background: rgba(255, 255, 255, 0.8);
          border: 2px solid #c4b59d;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 16px;
          text-align: center;
        }

        .target-word {
          font-family: 'Courier New', monospace;
          font-size: 48px;
          letter-spacing: 8px;
          text-align: center;
          margin-bottom: 8px;
        }

        .hint-text {
          font-family: 'Courier New', monospace;
          font-size: 16px;
          color: #999;
          letter-spacing: 4px;
        }

        .char {
          display: inline-block;
          padding: 4px 2px;
          transition: all 0.1s ease;
        }

        .char-correct {
          color: #2d5a27;
        }

        .char-wrong {
          color: #8b0000;
          text-decoration: underline;
          text-decoration-color: #8b0000;
        }

        .char-pending {
          color: #999;
        }

        .char-current {
          background: rgba(76, 175, 80, 0.3);
          animation: cursor-blink 1s infinite;
          border-radius: 4px;
        }

        @keyframes cursor-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.5; }
        }

        .hidden-input {
          position: absolute;
          left: -9999px;
          opacity: 0;
          width: 1px;
          height: 1px;
        }

        .stats-row {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
          gap: 16px;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 16px;
          color: #5a4a3a;
          background: rgba(255, 255, 255, 0.5);
          padding: 8px 12px;
          border-radius: 8px;
          flex: 1;
        }

        .stat-icon {
          font-size: 20px;
        }

        .stat-label {
          color: #8B7355;
        }

        .stat-value {
          font-weight: bold;
          margin-left: auto;
        }

        .timer-warning {
          color: #ff4444;
          animation: pulse 0.5s infinite;
          background: rgba(255, 68, 68, 0.1);
        }

        .timer-warning .stat-value {
          color: #ff4444;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .status-complete {
          text-align: center;
          font-size: 24px;
          color: #2d5a27;
          font-weight: bold;
          margin-top: 16px;
          animation: fadeIn 0.3s ease;
        }

        .status-timeout {
          text-align: center;
          font-size: 24px;
          color: #ff4444;
          font-weight: bold;
          margin-top: 16px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Screen shake effect */
        .screen-shake {
          animation: shake 0.3s ease-in-out;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-5px); }
          40% { transform: translateX(5px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
        }

        /* Weather effects */
        .weather-shaking {
          animation: text-shake 0.1s infinite;
        }

        @keyframes text-shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-3px) rotate(-1deg); }
          75% { transform: translateX(3px) rotate(1deg); }
        }

        .foggy-hidden {
          color: #999 !important;
          filter: blur(2px);
          user-select: none;
        }

        .foggy-hint {
          font-style: italic;
          color: #bbb;
        }

        .rainbow-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.8),
            rgba(255,200,200,0.8),
            rgba(255,255,200,0.8),
            rgba(200,255,200,0.8),
            rgba(200,200,255,0.8),
            rgba(255,200,255,0.8),
            rgba(255,255,255,0.8)
          );
          background-size: 200% 100%;
          animation: rainbow-slide 3s linear infinite;
        }

        @keyframes rainbow-slide {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        .weather-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 16px;
          margin-bottom: 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: bold;
        }

        .weather-rainy {
          background: linear-gradient(135deg, rgba(100,150,200,0.3), rgba(80,120,180,0.3));
          color: #4a6a8a;
        }

        .weather-stormy {
          background: linear-gradient(135deg, rgba(80,80,100,0.4), rgba(60,60,80,0.4));
          color: #4a4a6a;
          animation: stormy-flash 3s infinite;
        }

        @keyframes stormy-flash {
          0%, 90%, 100% { opacity: 1; }
          92%, 94% { opacity: 0.6; }
        }

        .weather-snowy {
          background: linear-gradient(135deg, rgba(200,220,255,0.4), rgba(180,200,240,0.4));
          color: #5a6a8a;
        }

        .weather-foggy {
          background: linear-gradient(135deg, rgba(180,180,180,0.4), rgba(160,160,160,0.4));
          color: #6a6a6a;
        }

        .weather-rainbow {
          background: linear-gradient(
            90deg,
            rgba(255,0,0,0.2),
            rgba(255,127,0,0.2),
            rgba(255,255,0,0.2),
            rgba(0,255,0,0.2),
            rgba(0,0,255,0.2),
            rgba(148,0,211,0.2)
          );
          color: #6a4a8a;
        }

        .weather-emoji {
          font-size: 20px;
        }

        .weather-effect {
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};

export default TypingArea;
