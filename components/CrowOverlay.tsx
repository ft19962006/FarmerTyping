import React, { useEffect, useState } from 'react';
import { Crow } from '../types';
import { crowSystem } from '../game/CrowSystem';

interface CrowOverlayProps {
  crow: Crow;
  slotPosition: { x: number; y: number };
  slotSize: { width: number; height: number };
}

/**
 * Visual crow overlay on the farm grid.
 * Shows crow emoji on top of the target crop slot with animation.
 */
export const CrowOverlay: React.FC<CrowOverlayProps> = ({ 
  crow,
  slotPosition,
  slotSize,
}) => {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // Update countdown
  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = crowSystem.getTimeRemaining(crow.id);
      setTimeRemaining(remaining);
    }, 100);

    return () => clearInterval(interval);
  }, [crow.id]);

  const isUrgent = timeRemaining <= 3;

  return (
    <div 
      className={`crow-overlay ${isUrgent ? 'urgent' : ''} ${crow.isBeingChased ? 'chased' : ''}`}
      style={{
        left: slotPosition.x,
        top: slotPosition.y,
        width: slotSize.width,
        height: slotSize.height,
      }}
    >
      {/* Warning pulse around slot */}
      <div className="warning-pulse"></div>
      
      {/* Crow emoji */}
      <div className="crow-emoji">🐦</div>
      
      {/* Timer badge */}
      <div className="crow-timer">{timeRemaining}s</div>

      <style>{`
        .crow-overlay {
          position: absolute;
          pointer-events: none;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .warning-pulse {
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border: 3px solid #ff6b6b;
          border-radius: 12px;
          animation: pulse-warning 1s ease-in-out infinite;
        }

        .crow-overlay.urgent .warning-pulse {
          border-color: #ff0000;
          animation: pulse-warning 0.3s ease-in-out infinite;
        }

        @keyframes pulse-warning {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.8; 
          }
          50% { 
            transform: scale(1.1); 
            opacity: 0.4; 
          }
        }

        .crow-emoji {
          font-size: 48px;
          animation: crow-peck 0.5s ease infinite;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }

        .crow-overlay.chased .crow-emoji {
          animation: crow-flee 0.3s ease infinite;
        }

        @keyframes crow-peck {
          0%, 100% { 
            transform: translateY(0) rotate(0deg); 
          }
          30% { 
            transform: translateY(5px) rotate(10deg); 
          }
          60% { 
            transform: translateY(-2px) rotate(-5deg); 
          }
        }

        @keyframes crow-flee {
          0%, 100% { 
            transform: translateX(0) translateY(0); 
          }
          25% { 
            transform: translateX(-5px) translateY(-3px); 
          }
          75% { 
            transform: translateX(5px) translateY(-3px); 
          }
        }

        .crow-timer {
          position: absolute;
          top: -10px;
          right: -10px;
          background: #ff6b6b;
          color: white;
          font-size: 12px;
          font-weight: bold;
          padding: 4px 8px;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .crow-overlay.urgent .crow-timer {
          background: #ff0000;
          animation: timer-pulse 0.3s ease-in-out infinite;
        }

        @keyframes timer-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default CrowOverlay;
