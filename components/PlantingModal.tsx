import React from 'react';
import { CropType } from '../types';
import { CROPS, SEED_PRICES } from '../constants/crops';
import { usePlayerStore } from '../stores/usePlayerStore';

interface PlantingModalProps {
  row: number;
  col: number;
  onPlant: (cropType: CropType) => void;
  onClose: () => void;
}

export const PlantingModal: React.FC<PlantingModalProps> = ({
  row,
  col,
  onPlant,
  onClose,
}) => {
  const { gold, inventory, unlockedCrops } = usePlayerStore();

  // Get seeds from inventory
  const getSeedCount = (cropId: string): number => {
    const seedItem = inventory.find(
      item => item.type === 'seed' && item.cropTypeId === cropId
    );
    return seedItem?.quantity || 0;
  };

  // Check if player can plant this crop
  const canPlant = (cropId: string): boolean => {
    if (!unlockedCrops.includes(cropId)) return false;
    
    const seedCount = getSeedCount(cropId);
    if (seedCount > 0) return true;
    
    // Can buy seed with gold
    const seedPrice = SEED_PRICES[cropId] || 0;
    return gold >= seedPrice;
  };

  // Get difficulty stars
  const getDifficultyStars = (difficulty: number): string => {
    return '⭐'.repeat(difficulty);
  };

  // Format growth time
  const formatGrowthTime = (ms: number): string => {
    const seconds = ms / 1000;
    if (seconds < 60) return `${seconds}秒`;
    const minutes = Math.floor(seconds / 60);
    return `${minutes}分鐘`;
  };

  // Handle crop selection
  const handleSelect = (crop: CropType) => {
    if (!canPlant(crop.id)) return;
    onPlant(crop);
  };

  // Get all available crops sorted by difficulty
  const availableCrops = Object.values(CROPS)
    .filter(crop => unlockedCrops.includes(crop.id))
    .sort((a, b) => a.difficulty - b.difficulty);

  // Get locked crops
  const lockedCrops = Object.values(CROPS)
    .filter(crop => !unlockedCrops.includes(crop.id))
    .sort((a, b) => a.difficulty - b.difficulty);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <h2>🌱 選擇種子</h2>
          <span className="slot-info">種植位置: ({row + 1}, {col + 1})</span>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Gold display */}
        <div className="gold-display">
          <span className="gold-icon">💰</span>
          <span className="gold-amount">{gold} 金幣</span>
        </div>

        {/* Crop grid */}
        <div className="crop-grid">
          {availableCrops.map(crop => {
            const seedCount = getSeedCount(crop.id);
            const seedPrice = SEED_PRICES[crop.id] || 0;
            const canAfford = seedCount > 0 || gold >= seedPrice;
            const isPlantable = canPlant(crop.id);

            return (
              <div
                key={crop.id}
                className={`crop-card ${isPlantable ? '' : 'disabled'}`}
                onClick={() => handleSelect(crop)}
              >
                {/* Crop emoji */}
                <span className="crop-emoji">{crop.emoji}</span>
                
                {/* Crop name */}
                <span className="crop-name">{crop.name}</span>
                
                {/* Difficulty */}
                <span className="difficulty">{getDifficultyStars(crop.difficulty)}</span>
                
                {/* Stats */}
                <div className="crop-stats">
                  <div className="stat">
                    <span className="stat-icon">⏱️</span>
                    <span>{formatGrowthTime(crop.growthTime)}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-icon">💰</span>
                    <span>{crop.sellPrice}</span>
                  </div>
                </div>

                {/* Seed info */}
                <div className="seed-info">
                  {seedCount > 0 ? (
                    <span className="seed-count">
                      🌱 擁有: {seedCount}
                    </span>
                  ) : (
                    <span className={`seed-price ${canAfford ? '' : 'expensive'}`}>
                      購買: {seedPrice} 💰
                    </span>
                  )}
                </div>

                {/* Plant button indicator */}
                {isPlantable && (
                  <div className="plant-indicator">
                    點擊種植
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Locked crops section */}
        {lockedCrops.length > 0 && (
          <>
            <div className="section-divider">
              <span>🔒 未解鎖的作物</span>
            </div>
            <div className="crop-grid locked">
              {lockedCrops.map(crop => (
                <div key={crop.id} className="crop-card locked">
                  <span className="crop-emoji">{crop.emoji}</span>
                  <span className="crop-name">{crop.name}</span>
                  <span className="difficulty">{getDifficultyStars(crop.difficulty)}</span>
                  <div className="lock-overlay">
                    <span className="lock-icon">🔒</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Footer tip */}
        <div className="modal-footer">
          <span className="tip">💡 提示: 難度越高的作物，打字時間越短但售價越高！</span>
        </div>

        <style>{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            animation: fade-in 0.2s ease;
          }

          .modal-content {
            background: linear-gradient(135deg, #f5e6d3 0%, #e8d5b7 100%);
            border: 4px solid #8B7355;
            border-radius: 16px;
            padding: 24px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            animation: slide-up 0.3s ease;
          }

          .modal-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;
            padding-bottom: 12px;
            border-bottom: 2px solid rgba(139, 115, 85, 0.3);
          }

          .modal-header h2 {
            margin: 0;
            font-size: 24px;
            color: #5D4037;
            flex: 1;
          }

          .slot-info {
            font-size: 12px;
            color: #8B7355;
            background: rgba(255, 255, 255, 0.5);
            padding: 4px 8px;
            border-radius: 4px;
          }

          .close-btn {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #8B7355;
            padding: 4px 8px;
            transition: color 0.2s;
          }

          .close-btn:hover {
            color: #5D4037;
          }

          .gold-display {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-bottom: 16px;
            padding: 8px;
            background: rgba(255, 215, 0, 0.2);
            border-radius: 8px;
          }

          .gold-icon {
            font-size: 24px;
          }

          .gold-amount {
            font-size: 20px;
            font-weight: bold;
            color: #B8860B;
          }

          .crop-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 12px;
            margin-bottom: 16px;
          }

          .crop-card {
            background: rgba(255, 255, 255, 0.5);
            border: 2px solid #8B7355;
            border-radius: 12px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
          }

          .crop-card:hover:not(.disabled):not(.locked) {
            transform: translateY(-4px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            border-color: #FFD700;
          }

          .crop-card.disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .crop-card.locked {
            opacity: 0.6;
            cursor: not-allowed;
          }

          .crop-emoji {
            font-size: 40px;
          }

          .crop-name {
            font-size: 14px;
            font-weight: bold;
            color: #5D4037;
          }

          .difficulty {
            font-size: 12px;
          }

          .crop-stats {
            display: flex;
            gap: 12px;
            margin-top: 4px;
          }

          .stat {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 11px;
            color: #666;
          }

          .stat-icon {
            font-size: 12px;
          }

          .seed-info {
            margin-top: 8px;
            font-size: 12px;
          }

          .seed-count {
            color: #228B22;
            font-weight: bold;
          }

          .seed-price {
            color: #B8860B;
          }

          .seed-price.expensive {
            color: #CC0000;
          }

          .plant-indicator {
            position: absolute;
            bottom: -2px;
            left: 50%;
            transform: translateX(-50%);
            background: #4CAF50;
            color: white;
            font-size: 10px;
            padding: 2px 8px;
            border-radius: 4px;
            opacity: 0;
            transition: opacity 0.2s;
          }

          .crop-card:hover:not(.disabled) .plant-indicator {
            opacity: 1;
          }

          .lock-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .lock-icon {
            font-size: 32px;
          }

          .section-divider {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 16px 0;
            color: #8B7355;
            font-size: 14px;
          }

          .section-divider::before,
          .section-divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background: rgba(139, 115, 85, 0.3);
            margin: 0 12px;
          }

          .modal-footer {
            margin-top: 16px;
            padding-top: 12px;
            border-top: 2px solid rgba(139, 115, 85, 0.3);
            text-align: center;
          }

          .tip {
            font-size: 12px;
            color: #8B7355;
          }

          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
};
