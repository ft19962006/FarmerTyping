import React, { useEffect, useState } from 'react';
import { Crow } from '../types';
import { crowSystem } from '../game/CrowSystem';
import { useFarmStore } from '../stores/useFarmStore';

interface CrowAlertProps {
  crow: Crow;
  onChase: (crowId: string) => void;
  onDismiss?: (crowId: string) => void;
}

/**
 * Alert popup when a crow lands on a crop.
 * Shows countdown timer and chase button.
 */
export const CrowAlert: React.FC<CrowAlertProps> = ({ 
  crow, 
  onChase,
  onDismiss,
}) => {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const crop = useFarmStore((state) => state.getCropAt(crow.targetSlot.row, crow.targetSlot.col));

  // Update countdown
  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = crowSystem.getTimeRemaining(crow.id);
      setTimeRemaining(remaining);
      
      if (remaining <= 0) {
        clearInterval(interval);
        onDismiss?.(crow.id);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [crow.id, onDismiss]);

  const cropName = crop?.cropType.name || 'crop';
  const cropEmoji = crop?.cropType.emoji || '🌱';

  return (
    <div className={`crow-alert ${timeRemaining <= 3 ? 'urgent' : ''}`}>
      <div className="alert-header">
        <span className="alert-icon">🐦</span>
        <span className="alert-title">Crow Attack!</span>
      </div>
      
      <div className="alert-message">
        A crow is attacking your {cropEmoji} {cropName}!
      </div>

      <div className="alert-timer">
        <div 
          className="timer-bar"
          style={{ width: `${(timeRemaining / 10) * 100}%` }}
        />
        <span className="timer-text">{timeRemaining}s</span>
      </div>

      <div className="alert-word">
        Type "<span className="word">{crow.wordToChase}</span>" to chase!
      </div>

      <button 
        className="chase-button"
        onClick={() => onChase(crow.id)}
      >
        🏃 Chase Crow
      </button>

      <style>{`
        .crow-alert {
          background: linear-gradient(135deg, #fff8dc, #ffeeba);
          border: 3px solid #d4a520;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          animation: alert-bounce 0.5s ease;
          max-width: 280px;
        }

        .crow-alert.urgent {
          border-color: #ff4444;
          animation: alert-shake 0.3s infinite;
        }

        @keyframes alert-bounce {
          0% { transform: scale(0.8) translateY(-20px); opacity: 0; }
          50% { transform: scale(1.05) translateY(0); }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }

        @keyframes alert-shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-3px); }
          75% { transform: translateX(3px); }
        }

        .alert-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .alert-icon {
          font-size: 28px;
          animation: crow-hop 0.5s ease infinite;
        }

        @keyframes crow-hop {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .alert-title {
          font-size: 18px;
          font-weight: bold;
          color: #8b4513;
        }

        .alert-message {
          font-size: 14px;
          color: #5a4a3a;
          margin-bottom: 12px;
        }

        .alert-timer {
          position: relative;
          height: 24px;
          background: rgba(0,0,0,0.1);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .timer-bar {
          height: 100%;
          background: linear-gradient(90deg, #ff6b6b, #feca57);
          border-radius: 12px;
          transition: width 0.1s linear;
        }

        .crow-alert.urgent .timer-bar {
          background: linear-gradient(90deg, #ff0000, #ff4444);
        }

        .timer-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-weight: bold;
          color: #333;
          font-size: 12px;
        }

        .alert-word {
          text-align: center;
          font-size: 14px;
          color: #5a4a3a;
          margin-bottom: 12px;
        }

        .alert-word .word {
          font-family: 'Courier New', monospace;
          font-size: 18px;
          font-weight: bold;
          color: #2d5a27;
          background: rgba(45, 90, 39, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .chase-button {
          width: 100%;
          padding: 12px 24px;
          font-size: 16px;
          font-weight: bold;
          color: white;
          background: linear-gradient(135deg, #4CAF50, #45a049);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .chase-button:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
        }

        .chase-button:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
};

export default CrowAlert;
