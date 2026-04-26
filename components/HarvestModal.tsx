import React, { useCallback, useState } from 'react';
import { CropSlot } from '../types';
import { TypingArea } from './TypingArea';
import { cropSystem } from '../game/CropSystem';
import { usePlayerStore } from '../stores/usePlayerStore';
import { useFarmStore } from '../stores/useFarmStore';

interface HarvestModalProps {
  crop: CropSlot;
  row: number;
  col: number;
  onClose: () => void;
  onSuccess: (gold: number, crop: CropSlot) => void;
  onFail: () => void;
}

type HarvestState = 'ready' | 'typing' | 'success' | 'failed';

export const HarvestModal: React.FC<HarvestModalProps> = ({
  crop,
  row,
  col,
  onClose,
  onSuccess,
  onFail,
}) => {
  const [state, setState] = useState<HarvestState>('ready');
  const [earnedGold, setEarnedGold] = useState(0);
  const [stats, setStats] = useState({ wpm: 0, accuracy: 0, combo: 0 });
  
  const { addGold, updateStats, addToInventory, addXP } = usePlayerStore();
  const { removeCrop } = useFarmStore();

  const sellPrice = cropSystem.calculateSellPrice(crop);

  // Handle successful typing completion
  const handleComplete = useCallback((typingStats: { wpm: number; accuracy: number; combo: number }) => {
    setState('success');
    setStats(typingStats);
    
    // Calculate bonus based on combo
    const comboBonus = Math.floor(sellPrice * (typingStats.combo * 0.1));
    const totalGold = sellPrice + comboBonus;
    setEarnedGold(totalGold);
    
    // Award gold
    addGold(totalGold);
    
    // Award XP - 5 for normal harvest, 20 for perfect (100% accuracy)
    const isPerfect = typingStats.accuracy >= 100;
    const xpReward = isPerfect ? 20 : 5;
    addXP(xpReward);
    
    // Update player stats
    updateStats({
      totalWordsTyped: usePlayerStore.getState().stats.totalWordsTyped + 1,
      totalCropsHarvested: usePlayerStore.getState().stats.totalCropsHarvested + 1,
      bestCombo: Math.max(usePlayerStore.getState().stats.bestCombo, typingStats.combo),
    });
    
    // Add harvested crop to inventory
    addToInventory({
      type: 'crop',
      cropTypeId: crop.cropType.id,
      quantity: 1,
    });
    
    // Remove crop from farm
    removeCrop(row, col);
    
    // Notify parent of success
    onSuccess(totalGold, crop);
  }, [sellPrice, addGold, addXP, updateStats, addToInventory, removeCrop, row, col, crop, onSuccess]);

  // Handle timeout
  const handleTimeout = useCallback(() => {
    setState('failed');
    
    // Update crop to overripe/withered state
    const farmStore = useFarmStore.getState();
    const currentCrop = farmStore.getCropAt(row, col);
    
    if (currentCrop) {
      // The crop gets damaged - if mature becomes overripe, if overripe becomes withered
      // This is handled by the growth system naturally
    }
    
    onFail();
  }, [row, col, onFail]);

  // Handle combo milestone
  const handleComboMilestone = useCallback((milestone: number) => {
    // Could trigger special effects or bonuses here
    console.log(`Combo milestone reached: ${milestone}!`);
  }, []);

  // Start typing when ready
  const handleStartTyping = () => {
    setState('typing');
  };

  return (
    <div className="modal-overlay">
      <div className="harvest-modal">
        {/* Ready state */}
        {state === 'ready' && (
          <div className="ready-content">
            <div className="crop-preview">
              <span className="crop-emoji-large">{crop.cropType.emoji}</span>
              <h2>{crop.cropType.name}</h2>
            </div>
            
            <div className="harvest-info">
              <p className="word-preview">
                打字收成: <strong>{crop.wordToHarvest}</strong>
              </p>
              <p className="time-limit">
                時間限制: <strong>{crop.cropType.harvestTimeLimit}秒</strong>
              </p>
              <p className="reward">
                獎勵: <strong>{sellPrice} 💰</strong>
              </p>
            </div>
            
            <div className="action-buttons">
              <button className="start-btn" onClick={handleStartTyping}>
                🌾 開始收成!
              </button>
              <button className="cancel-btn" onClick={onClose}>
                取消
              </button>
            </div>
          </div>
        )}

        {/* Typing state */}
        {state === 'typing' && (
          <div className="typing-content">
            <TypingArea
              targetWord={crop.wordToHarvest}
              timeLimit={crop.cropType.harvestTimeLimit}
              cropSlotId={crop.id}
              cropType={crop.cropType}
              autoStart={true}
              onComplete={handleComplete}
              onTimeout={handleTimeout}
              onComboMilestone={handleComboMilestone}
            />
          </div>
        )}

        {/* Success state */}
        {state === 'success' && (
          <div className="success-content">
            <div className="success-icon">🎉</div>
            <h2>收成成功!</h2>
            
            <div className="crop-harvested">
              <span className="crop-emoji-large">{crop.cropType.emoji}</span>
            </div>
            
            <div className="rewards-summary">
              <div className="reward-row">
                <span>基本獎勵:</span>
                <span className="gold">{sellPrice} 💰</span>
              </div>
              {stats.combo > 1 && (
                <div className="reward-row bonus">
                  <span>連擊加成 (x{stats.combo}):</span>
                  <span className="gold">+{earnedGold - sellPrice} 💰</span>
                </div>
              )}
              <div className="reward-row total">
                <span>總計:</span>
                <span className="gold">{earnedGold} 💰</span>
              </div>
            </div>
            
            <div className="typing-stats">
              <div className="stat">
                <span className="stat-label">速度</span>
                <span className="stat-value">{stats.wpm} WPM</span>
              </div>
              <div className="stat">
                <span className="stat-label">正確率</span>
                <span className="stat-value">{stats.accuracy}%</span>
              </div>
              <div className="stat">
                <span className="stat-label">連擊</span>
                <span className="stat-value">x{stats.combo}</span>
              </div>
            </div>
            
            <button className="close-btn-primary" onClick={onClose}>
              繼續
            </button>
          </div>
        )}

        {/* Failed state */}
        {state === 'failed' && (
          <div className="failed-content">
            <div className="failed-icon">😢</div>
            <h2>時間到!</h2>
            
            <p className="failed-message">
              收成失敗，作物狀態已下降
            </p>
            
            <button className="close-btn-primary" onClick={onClose}>
              再試一次
            </button>
          </div>
        )}

        <style>{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            animation: fade-in 0.2s ease;
          }

          .harvest-modal {
            background: linear-gradient(135deg, #f5e6d3 0%, #e8d5b7 100%);
            border: 4px solid #8B7355;
            border-radius: 16px;
            padding: 24px;
            min-width: 420px;
            max-width: 600px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            animation: slide-up 0.3s ease;
          }

          .ready-content,
          .success-content,
          .failed-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .crop-preview {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
          }

          .crop-emoji-large {
            font-size: 80px;
            margin-bottom: 8px;
          }

          .crop-preview h2 {
            margin: 0;
            color: #5D4037;
            font-size: 28px;
          }

          .harvest-info {
            background: rgba(255, 255, 255, 0.5);
            padding: 16px 24px;
            border-radius: 12px;
            margin-bottom: 20px;
          }

          .harvest-info p {
            margin: 8px 0;
            font-size: 16px;
            color: #666;
          }

          .harvest-info strong {
            color: #5D4037;
            font-size: 18px;
          }

          .word-preview strong {
            font-family: 'Courier New', monospace;
            background: rgba(0, 0, 0, 0.1);
            padding: 4px 12px;
            border-radius: 6px;
            display: inline-block;
            margin-left: 8px;
          }

          .action-buttons {
            display: flex;
            gap: 12px;
          }

          .start-btn {
            background: linear-gradient(135deg, #FFD700, #FFA500);
            color: #5D4037;
            border: none;
            padding: 14px 32px;
            font-size: 18px;
            font-weight: bold;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .start-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 165, 0, 0.4);
          }

          .cancel-btn {
            background: rgba(0, 0, 0, 0.1);
            color: #666;
            border: none;
            padding: 14px 24px;
            font-size: 16px;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .cancel-btn:hover {
            background: rgba(0, 0, 0, 0.2);
          }

          .typing-content {
            width: 100%;
          }

          .success-icon,
          .failed-icon {
            font-size: 64px;
            margin-bottom: 12px;
          }

          .success-content h2,
          .failed-content h2 {
            margin: 0 0 16px 0;
            color: #5D4037;
            font-size: 28px;
          }

          .crop-harvested {
            margin: 16px 0;
            animation: bounce-in 0.5s ease;
          }

          .rewards-summary {
            background: rgba(255, 255, 255, 0.5);
            padding: 16px 24px;
            border-radius: 12px;
            margin-bottom: 16px;
            width: 100%;
          }

          .reward-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            font-size: 16px;
            color: #666;
          }

          .reward-row.bonus {
            color: #4CAF50;
          }

          .reward-row.total {
            border-top: 2px solid rgba(0, 0, 0, 0.1);
            margin-top: 8px;
            padding-top: 12px;
            font-weight: bold;
            font-size: 20px;
            color: #5D4037;
          }

          .gold {
            color: #B8860B;
            font-weight: bold;
          }

          .typing-stats {
            display: flex;
            gap: 24px;
            margin-bottom: 20px;
          }

          .typing-stats .stat {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .stat-label {
            font-size: 12px;
            color: #8B7355;
            text-transform: uppercase;
          }

          .stat-value {
            font-size: 20px;
            font-weight: bold;
            color: #5D4037;
          }

          .close-btn-primary {
            background: linear-gradient(135deg, #4CAF50, #388E3C);
            color: white;
            border: none;
            padding: 14px 48px;
            font-size: 18px;
            font-weight: bold;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .close-btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
          }

          .failed-message {
            font-size: 16px;
            color: #666;
            margin-bottom: 20px;
          }

          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
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

          @keyframes bounce-in {
            0% { transform: scale(0); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
        `}</style>
      </div>
    </div>
  );
};
