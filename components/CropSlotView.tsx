import React, { useMemo, useState, useEffect } from 'react';
import { CropSlot, GrowthStage } from '../types';

interface CropSlotViewProps {
  crop: CropSlot | null;
  row: number;
  col: number;
  isSelected: boolean;
  onClick: () => void;
  onHarvest?: () => void;
}

// Growth stage visual configurations with animations
const STAGE_CONFIG: Record<GrowthStage, { 
  icon: string; 
  bgColor: string; 
  animation: string;
  label: string;
  particleColor?: string;
}> = {
  seed: { 
    icon: '🟤', 
    bgColor: '#8B4513',
    animation: 'animate-seed-wiggle',
    label: '種子'
  },
  sprout: { 
    icon: '🌱', 
    bgColor: '#90EE90',
    animation: 'animate-sprout-grow',
    label: '發芽'
  },
  growing: { 
    icon: '🌿', 
    bgColor: '#32CD32',
    animation: 'animate-leaf-sway',
    label: '生長中'
  },
  mature: { 
    icon: '', // Will use crop emoji
    bgColor: '#FFD700',
    animation: 'animate-mature-glow',
    label: '成熟!',
    particleColor: '#FFD700',
  },
  overripe: { 
    icon: '', // Will use crop emoji with warning
    bgColor: '#FFA500',
    animation: 'animate-overripe-shake',
    label: '過熟!'
  },
  withered: { 
    icon: '🥀', 
    bgColor: '#808080',
    animation: 'animate-wither-fade',
    label: '枯萎'
  },
};

export const CropSlotView: React.FC<CropSlotViewProps> = ({
  crop,
  row,
  col,
  isSelected,
  onClick,
  onHarvest,
}) => {
  // Track previous stage for transition animations
  const [prevStage, setPrevStage] = useState<GrowthStage | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHarvesting, setIsHarvesting] = useState(false);
  
  // Detect stage changes for transition effects
  useEffect(() => {
    if (crop && prevStage !== crop.growthStage) {
      if (prevStage !== null) {
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 500);
      }
      setPrevStage(crop.growthStage);
    }
  }, [crop?.growthStage, prevStage]);

  // Calculate derived values
  const stageConfig = crop ? STAGE_CONFIG[crop.growthStage] : null;
  
  const displayEmoji = useMemo(() => {
    if (!crop) return null;
    
    if (crop.growthStage === 'mature' || crop.growthStage === 'overripe') {
      return crop.cropType.emoji;
    }
    if (crop.growthStage === 'withered') {
      return '🥀';
    }
    return stageConfig?.icon || '🟤';
  }, [crop, stageConfig]);

  const needsWater = crop && crop.waterLevel < 20;
  const isReady = crop?.growthStage === 'mature';
  const isWarning = crop?.growthStage === 'overripe';

  // Handle harvest animation
  const handleClick = () => {
    if (isReady && onHarvest) {
      setIsHarvesting(true);
      setTimeout(() => {
        onHarvest();
        setIsHarvesting(false);
      }, 800);
    } else {
      onClick();
    }
  };

  // Get animation class based on stage
  const getAnimationClass = () => {
    if (isHarvesting) return 'harvesting';
    if (isTransitioning) return 'transitioning';
    return stageConfig?.animation || '';
  };

  return (
    <div
      className={`crop-slot ${isSelected ? 'selected' : ''} ${crop ? 'has-crop' : 'empty'}`}
      onClick={handleClick}
      data-row={row}
      data-col={col}
    >
      {/* Empty slot */}
      {!crop && (
        <div className="empty-slot">
          <span className="plus-icon">+</span>
          <span className="dirt-texture">🟫</span>
        </div>
      )}

      {/* Crop display */}
      {crop && (
        <div className={`crop-display ${getAnimationClass()}`}>
          {/* Sparkle particles for mature crops */}
          {isReady && (
            <div className="sparkle-container">
              <span className="sparkle s1">✨</span>
              <span className="sparkle s2">⭐</span>
              <span className="sparkle s3">✨</span>
            </div>
          )}
          
          {/* Crop emoji */}
          <span className={`crop-emoji ${isHarvesting ? 'harvest-fly' : ''}`}>
            {displayEmoji}
          </span>
          
          {/* Growth progress bar */}
          <div className="progress-bar-container">
            <div 
              className={`progress-bar ${crop.growthStage}`}
              style={{ width: `${Math.min(100, crop.growthProgress)}%` }}
            />
          </div>
          
          {/* Stage label */}
          <span className={`stage-label ${isTransitioning ? 'stage-change' : ''}`}>
            {stageConfig?.label}
          </span>

          {/* Water indicator */}
          {needsWater && (
            <div className="water-warning">
              💧
            </div>
          )}

          {/* Ready to harvest indicator */}
          {isReady && !isHarvesting && (
            <div className="ready-indicator">
              <span className="harvest-text">Click!</span>
            </div>
          )}

          {/* Overripe warning */}
          {isWarning && (
            <div className="warning-indicator">
              ⚠️
            </div>
          )}
        </div>
      )}

      <style>{`
        .crop-slot {
          width: 100px;
          height: 120px;
          border: 3px solid var(--color-earth-brown, #8B7355);
          border-radius: 8px;
          background: linear-gradient(180deg, #D2B48C 0%, #8B7355 100%);
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .crop-slot:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .crop-slot.selected {
          border-color: #FFD700;
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.6);
        }

        .crop-slot.empty:hover .plus-icon {
          opacity: 1;
          transform: scale(1.2);
        }

        .empty-slot {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .plus-icon {
          font-size: 32px;
          color: rgba(255, 255, 255, 0.5);
          opacity: 0;
          transition: all 0.2s ease;
          position: absolute;
          z-index: 1;
        }

        .dirt-texture {
          font-size: 40px;
          opacity: 0.7;
        }

        .crop-display {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          padding: 8px;
          position: relative;
        }

        .crop-display.transitioning {
          animation: stage-transition 0.5s ease-out;
        }

        @keyframes stage-transition {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }

        .crop-emoji {
          font-size: 40px;
          margin-bottom: 4px;
          transition: transform 0.3s ease;
        }

        .crop-emoji.harvest-fly {
          animation: harvest-fly 0.8s ease-out forwards;
        }

        @keyframes harvest-fly {
          0% { 
            transform: scale(1) translateY(0) rotate(0deg); 
            opacity: 1; 
          }
          30% {
            transform: scale(1.3) translateY(-20px) rotate(-10deg);
            opacity: 1;
          }
          100% { 
            transform: scale(0.3) translateY(-150px) translateX(80px) rotate(360deg); 
            opacity: 0; 
          }
        }

        /* Sparkle container for mature crops */
        .sparkle-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .sparkle {
          position: absolute;
          font-size: 14px;
          opacity: 0;
          animation: sparkle-float 2s ease-in-out infinite;
        }

        .sparkle.s1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .sparkle.s2 {
          top: 20%;
          right: 15%;
          animation-delay: 0.7s;
        }

        .sparkle.s3 {
          bottom: 30%;
          left: 20%;
          animation-delay: 1.4s;
        }

        @keyframes sparkle-float {
          0%, 100% { 
            opacity: 0; 
            transform: translateY(0) scale(0.5); 
          }
          50% { 
            opacity: 1; 
            transform: translateY(-10px) scale(1); 
          }
        }

        .progress-bar-container {
          width: 80%;
          height: 8px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
          overflow: hidden;
          margin: 4px 0;
        }

        .progress-bar {
          height: 100%;
          transition: width 0.3s ease;
          border-radius: 4px;
          position: relative;
        }

        .progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%);
        }

        .progress-bar.seed {
          background: linear-gradient(90deg, #6B4423 0%, #8B4513 100%);
        }

        .progress-bar.sprout {
          background: linear-gradient(90deg, #7CCD7C 0%, #90EE90 100%);
        }

        .progress-bar.growing {
          background: linear-gradient(90deg, #228B22 0%, #32CD32 100%);
        }

        .progress-bar.mature {
          background: linear-gradient(90deg, #FFD700 0%, #FFA500 50%, #FFD700 100%);
          animation: shimmer 1.5s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .progress-bar.overripe {
          background: linear-gradient(90deg, #FF8C00 0%, #FFA500 100%);
        }

        .progress-bar.withered {
          background: linear-gradient(90deg, #696969 0%, #808080 100%);
        }

        .stage-label {
          font-size: 12px;
          color: #FFF;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .stage-label.stage-change {
          animation: label-pop 0.5s ease-out;
        }

        @keyframes label-pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); color: #FFD700; }
          100% { transform: scale(1); }
        }

        .water-warning {
          position: absolute;
          top: 4px;
          left: 4px;
          font-size: 16px;
          animation: water-bounce 0.6s infinite alternate;
        }

        @keyframes water-bounce {
          from {
            transform: translateY(0) scale(1);
          }
          to {
            transform: translateY(-4px) scale(1.1);
          }
        }

        .ready-indicator {
          position: absolute;
          top: 4px;
          right: 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .harvest-text {
          font-size: 10px;
          color: #FFD700;
          font-weight: bold;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          animation: pulse-text 0.8s ease-in-out infinite;
        }

        @keyframes pulse-text {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }

        .warning-indicator {
          position: absolute;
          top: 4px;
          right: 4px;
          font-size: 16px;
          animation: warning-shake 0.3s infinite;
        }

        @keyframes warning-shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }

        /* Growth stage animations */
        .animate-seed-wiggle {
          animation: seed-wiggle 2s ease-in-out infinite;
        }

        @keyframes seed-wiggle {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }

        .animate-sprout-grow .crop-emoji {
          animation: sprout-emerge 0.5s ease-out;
        }

        @keyframes sprout-emerge {
          0% { transform: scaleY(0.3) translateY(10px); opacity: 0.3; }
          100% { transform: scaleY(1) translateY(0); opacity: 1; }
        }

        .animate-leaf-sway .crop-emoji {
          animation: leaf-sway 3s ease-in-out infinite;
          transform-origin: bottom center;
        }

        @keyframes leaf-sway {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }

        .animate-mature-glow {
          animation: mature-glow-bg 1.5s ease-in-out infinite;
        }

        @keyframes mature-glow-bg {
          0%, 100% { 
            box-shadow: inset 0 0 10px rgba(255, 215, 0, 0.3);
          }
          50% { 
            box-shadow: inset 0 0 20px rgba(255, 215, 0, 0.6);
          }
        }

        .animate-mature-glow .crop-emoji {
          animation: mature-glow-emoji 1.5s ease-in-out infinite;
        }

        @keyframes mature-glow-emoji {
          0%, 100% { 
            filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.6)); 
          }
          50% { 
            filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.9)); 
          }
        }

        .animate-overripe-shake {
          animation: overripe-shake 0.5s ease-in-out infinite;
        }

        @keyframes overripe-shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          75% { transform: translateX(2px); }
        }

        .animate-wither-fade {
          filter: saturate(0.3) brightness(0.7);
        }

        .animate-wither-fade .crop-emoji {
          animation: wither-droop 2s ease-in-out infinite;
        }

        @keyframes wither-droop {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        /* Harvesting state */
        .harvesting {
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};
