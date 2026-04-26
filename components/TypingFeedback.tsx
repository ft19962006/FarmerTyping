import React, { useEffect, useState } from 'react';

interface TypingFeedbackProps {
  message: 'perfect' | 'good' | 'miss' | null;
  combo: number;
  showCombo?: boolean;
  onAnimationEnd?: () => void;
}

const feedbackStyles: Record<string, React.CSSProperties> = {
  perfect: {
    color: '#FFD700',
    textShadow: '0 0 10px #FFD700, 0 0 20px #FFA500',
  },
  good: {
    color: '#4CAF50',
    textShadow: '0 0 10px #4CAF50',
  },
  miss: {
    color: '#FF4444',
    textShadow: '0 0 10px #FF4444',
  },
};

const feedbackText: Record<string, string> = {
  perfect: '✨ Perfect! ✨',
  good: '👍 Good!',
  miss: '❌ Miss!',
};

export const TypingFeedback: React.FC<TypingFeedbackProps> = ({
  message,
  combo,
  showCombo = true,
  onAnimationEnd,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [comboBump, setComboBump] = useState(false);
  const [prevCombo, setPrevCombo] = useState(combo);

  // Handle message visibility
  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        onAnimationEnd?.();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [message, onAnimationEnd]);

  // Handle combo bump animation
  useEffect(() => {
    if (combo > prevCombo && combo > 0) {
      setComboBump(true);
      const timer = setTimeout(() => setComboBump(false), 150);
      setPrevCombo(combo);
      return () => clearTimeout(timer);
    }
    setPrevCombo(combo);
  }, [combo, prevCombo]);

  return (
    <div className="typing-feedback-container">
      {/* Feedback message */}
      {message && isVisible && (
        <div
          className="feedback-message"
          style={{
            ...feedbackStyles[message],
            animation: 'feedbackPop 0.5s ease-out forwards',
          }}
        >
          {feedbackText[message]}
        </div>
      )}

      {/* Combo display */}
      {showCombo && combo > 0 && (
        <div
          className={`combo-display ${comboBump ? 'bump' : ''}`}
          style={{
            color: combo >= 50 ? '#FFD700' : combo >= 25 ? '#FFA500' : combo >= 10 ? '#4CAF50' : '#666',
          }}
        >
          <span className="combo-icon">🔥</span>
          <span className="combo-text">Combo x{combo}</span>
          {combo >= 10 && <span className="combo-milestone">
            {combo >= 100 ? '🏆' : combo >= 50 ? '⭐' : combo >= 25 ? '🌟' : '✨'}
          </span>}
        </div>
      )}

      <style>{`
        .typing-feedback-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          min-height: 80px;
        }

        .feedback-message {
          font-size: 32px;
          font-weight: bold;
          text-align: center;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        @keyframes feedbackPop {
          0% {
            opacity: 0;
            transform: translateX(-50%) scale(0.5) translateY(20px);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scale(1.2) translateY(-10px);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) scale(1) translateY(-30px);
          }
        }

        .combo-display {
          font-size: 24px;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.1s ease-out;
          padding: 8px 16px;
          border-radius: 20px;
          background: rgba(0, 0, 0, 0.1);
        }

        .combo-display.bump {
          transform: scale(1.2);
        }

        .combo-icon {
          animation: flame 0.5s infinite alternate;
        }

        @keyframes flame {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        .combo-milestone {
          animation: sparkle 0.8s infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Screen shake effect for errors */
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
      `}</style>
    </div>
  );
};

export default TypingFeedback;
