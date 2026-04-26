import React from 'react';
import { CropSlot, GrowthStage } from '../types';
import { cropSystem } from '../game/CropSystem';

interface CropInfoCardProps {
  crop: CropSlot;
  onHarvest: () => void;
  onWater: () => void;
  onFertilize: () => void;
  onClose?: () => void;
}

// Stage display configurations
const STAGE_DISPLAY: Record<GrowthStage, { label: string; color: string; emoji: string }> = {
  seed: { label: '種子', color: '#8B4513', emoji: '🟤' },
  sprout: { label: '發芽', color: '#90EE90', emoji: '🌱' },
  growing: { label: '生長中', color: '#32CD32', emoji: '🌿' },
  mature: { label: '成熟', color: '#FFD700', emoji: '✨' },
  overripe: { label: '過熟', color: '#FFA500', emoji: '⚠️' },
  withered: { label: '枯萎', color: '#808080', emoji: '💀' },
};

export const CropInfoCard: React.FC<CropInfoCardProps> = ({
  crop,
  onHarvest,
  onWater,
  onFertilize,
  onClose,
}) => {
  const stageInfo = STAGE_DISPLAY[crop.growthStage];
  const sellPrice = cropSystem.calculateSellPrice(crop);
  const canHarvest = cropSystem.canHarvest(crop);
  const timeToNextStage = cropSystem.getTimeToNextStage(crop);
  const needsWater = crop.waterLevel < 20;

  // Format time in mm:ss
  const formatTime = (seconds: number): string => {
    if (seconds <= 0) return '準備完成!';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Get difficulty stars
  const getDifficultyStars = (): string => {
    return '⭐'.repeat(crop.cropType.difficulty);
  };

  return (
    <div className="crop-info-card">
      {/* Header */}
      <div className="card-header">
        <div className="crop-identity">
          <span className="crop-emoji-large">{crop.cropType.emoji}</span>
          <div className="crop-details">
            <h3 className="crop-name">{crop.cropType.name}</h3>
            <span className="difficulty">{getDifficultyStars()}</span>
          </div>
        </div>
        {onClose && (
          <button className="close-btn" onClick={onClose}>✕</button>
        )}
      </div>

      {/* Growth Stage */}
      <div className="info-section">
        <div className="section-label">生長階段</div>
        <div className="growth-stage" style={{ color: stageInfo.color }}>
          <span className="stage-emoji">{stageInfo.emoji}</span>
          <span className="stage-label">{stageInfo.label}</span>
        </div>
        
        {/* Progress bar */}
        <div className="progress-container">
          <div className="progress-track">
            <div 
              className="progress-fill"
              style={{ 
                width: `${Math.min(100, crop.growthProgress)}%`,
                backgroundColor: stageInfo.color 
              }}
            />
          </div>
          <span className="progress-text">{Math.floor(crop.growthProgress)}%</span>
        </div>

        {/* Time to next stage */}
        {crop.growthStage !== 'mature' && crop.growthStage !== 'overripe' && crop.growthStage !== 'withered' && (
          <div className="time-remaining">
            <span className="time-icon">⏱️</span>
            <span>下一階段: {formatTime(timeToNextStage)}</span>
          </div>
        )}
      </div>

      {/* Status Indicators */}
      <div className="info-section">
        <div className="section-label">狀態</div>
        
        {/* Water level */}
        <div className={`status-row ${needsWater ? 'warning' : ''}`}>
          <span className="status-icon">💧</span>
          <span className="status-label">水分</span>
          <div className="status-bar">
            <div 
              className="status-fill water"
              style={{ width: `${crop.waterLevel}%` }}
            />
          </div>
          <span className="status-value">{Math.floor(crop.waterLevel)}%</span>
        </div>

        {/* Fertilizer level */}
        <div className="status-row">
          <span className="status-icon">🌿</span>
          <span className="status-label">肥料</span>
          <div className="status-bar">
            <div 
              className="status-fill fertilizer"
              style={{ width: `${crop.fertilizerLevel}%` }}
            />
          </div>
          <span className="status-value">{Math.floor(crop.fertilizerLevel)}%</span>
        </div>

        {/* Health */}
        <div className={`status-row ${crop.health < 50 ? 'warning' : ''}`}>
          <span className="status-icon">❤️</span>
          <span className="status-label">健康</span>
          <div className="status-bar">
            <div 
              className="status-fill health"
              style={{ width: `${crop.health}%` }}
            />
          </div>
          <span className="status-value">{Math.floor(crop.health)}%</span>
        </div>
      </div>

      {/* Sell Info */}
      <div className="info-section">
        <div className="section-label">收成資訊</div>
        <div className="sell-info">
          <span className="sell-icon">💰</span>
          <span className="sell-label">預計售價:</span>
          <span className={`sell-price ${crop.growthStage === 'overripe' ? 'reduced' : ''}`}>
            {sellPrice} 金幣
            {crop.growthStage === 'overripe' && <span className="price-note">(減半)</span>}
          </span>
        </div>
        
        {/* Harvest word preview */}
        {canHarvest && (
          <div className="harvest-word">
            <span className="word-label">收成打字:</span>
            <span className="word-preview">{crop.wordToHarvest}</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button 
          className="action-btn water-btn"
          onClick={onWater}
          disabled={crop.waterLevel >= 100}
        >
          💧 澆水
        </button>
        
        <button 
          className="action-btn fertilize-btn"
          onClick={onFertilize}
          disabled={crop.fertilizerLevel >= 100}
        >
          🌿 施肥
        </button>
        
        {canHarvest && (
          <button 
            className="action-btn harvest-btn"
            onClick={onHarvest}
          >
            🌾 收成
          </button>
        )}
      </div>

      {/* Warnings */}
      {needsWater && (
        <div className="warning-banner water-warning">
          💧 需要澆水！生長速度已減慢
        </div>
      )}
      {crop.growthStage === 'overripe' && (
        <div className="warning-banner overripe-warning">
          ⚠️ 過熟中！快收成否則會枯萎
        </div>
      )}
      {crop.growthStage === 'withered' && (
        <div className="warning-banner withered-warning">
          💀 已枯萎，無法收成
        </div>
      )}

      <style>{`
        .crop-info-card {
          background: linear-gradient(135deg, #f5e6d3 0%, #e8d5b7 100%);
          border: 3px solid #8B7355;
          border-radius: 12px;
          padding: 16px;
          width: 280px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 2px solid rgba(139, 115, 85, 0.3);
        }

        .crop-identity {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .crop-emoji-large {
          font-size: 48px;
        }

        .crop-details {
          display: flex;
          flex-direction: column;
        }

        .crop-name {
          margin: 0;
          font-size: 18px;
          color: #5D4037;
        }

        .difficulty {
          font-size: 14px;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: #8B7355;
          padding: 4px 8px;
        }

        .close-btn:hover {
          color: #5D4037;
        }

        .info-section {
          margin-bottom: 12px;
          padding: 8px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 8px;
        }

        .section-label {
          font-size: 12px;
          color: #8B7355;
          font-weight: bold;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .growth-stage {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .stage-emoji {
          font-size: 20px;
        }

        .progress-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .progress-track {
          flex: 1;
          height: 12px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 6px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          transition: width 0.3s ease;
          border-radius: 6px;
        }

        .progress-text {
          font-size: 12px;
          font-weight: bold;
          color: #5D4037;
          min-width: 40px;
        }

        .time-remaining {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 8px;
          font-size: 13px;
          color: #666;
        }

        .status-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .status-row.warning {
          animation: pulse-warning 1s infinite;
        }

        .status-icon {
          font-size: 16px;
          width: 20px;
        }

        .status-label {
          font-size: 12px;
          color: #666;
          width: 36px;
        }

        .status-bar {
          flex: 1;
          height: 8px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          overflow: hidden;
        }

        .status-fill {
          height: 100%;
          transition: width 0.3s ease;
          border-radius: 4px;
        }

        .status-fill.water {
          background: linear-gradient(90deg, #87CEEB, #4169E1);
        }

        .status-fill.fertilizer {
          background: linear-gradient(90deg, #90EE90, #228B22);
        }

        .status-fill.health {
          background: linear-gradient(90deg, #FF6B6B, #FF4444);
        }

        .status-value {
          font-size: 11px;
          font-weight: bold;
          color: #5D4037;
          min-width: 32px;
          text-align: right;
        }

        .sell-info {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .sell-icon {
          font-size: 18px;
        }

        .sell-label {
          font-size: 13px;
          color: #666;
        }

        .sell-price {
          font-size: 16px;
          font-weight: bold;
          color: #FFD700;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .sell-price.reduced {
          color: #FFA500;
        }

        .price-note {
          font-size: 11px;
          color: #FF6B6B;
          margin-left: 4px;
        }

        .harvest-word {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .word-label {
          font-size: 12px;
          color: #666;
        }

        .word-preview {
          font-family: 'Courier New', monospace;
          font-size: 14px;
          font-weight: bold;
          color: #5D4037;
          background: rgba(255, 255, 255, 0.5);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .action-buttons {
          display: flex;
          gap: 8px;
          margin-top: 12px;
        }

        .action-btn {
          flex: 1;
          padding: 10px 12px;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .action-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .water-btn {
          background: linear-gradient(135deg, #87CEEB, #4169E1);
          color: white;
        }

        .water-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(65, 105, 225, 0.4);
        }

        .fertilize-btn {
          background: linear-gradient(135deg, #90EE90, #228B22);
          color: white;
        }

        .fertilize-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(34, 139, 34, 0.4);
        }

        .harvest-btn {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #5D4037;
        }

        .harvest-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(255, 165, 0, 0.4);
        }

        .warning-banner {
          margin-top: 12px;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: bold;
          text-align: center;
        }

        .water-warning {
          background: rgba(65, 105, 225, 0.2);
          color: #4169E1;
        }

        .overripe-warning {
          background: rgba(255, 165, 0, 0.2);
          color: #FF8C00;
        }

        .withered-warning {
          background: rgba(128, 128, 128, 0.2);
          color: #666;
        }

        @keyframes pulse-warning {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};
