import React, { useState, useCallback } from 'react';
import { useFarmStore } from '../stores/useFarmStore';
import { usePlayerStore } from '../stores/usePlayerStore';
import { CropSlotView } from './CropSlotView';
import { CropInfoCard } from './CropInfoCard';
import { PlantingModal } from './PlantingModal';
import { HarvestModal } from './HarvestModal';
import { CropType, CropSlot } from '../types';
import { cropSystem } from '../game/CropSystem';
import { SEED_PRICES } from '../constants/crops';

export const FarmGrid: React.FC = () => {
  const { grid, gridSize, selectedSlot, selectSlot, clearSelection, plantCrop, waterCrop, fertilizeCrop } = useFarmStore();
  const { spendGold, inventory, removeFromInventory } = usePlayerStore();
  
  const [showPlantingModal, setShowPlantingModal] = useState(false);
  const [showHarvestModal, setShowHarvestModal] = useState(false);
  const [plantingPosition, setPlantingPosition] = useState<{ row: number; col: number } | null>(null);
  const [harvestingCrop, setHarvestingCrop] = useState<{ crop: CropSlot; row: number; col: number } | null>(null);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  // Show notification with auto-dismiss
  const showNotification = useCallback((message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  }, []);

  // Handle slot click
  const handleSlotClick = useCallback((row: number, col: number) => {
    const crop = grid[row][col];
    
    if (!crop) {
      // Empty slot - open planting modal
      setPlantingPosition({ row, col });
      setShowPlantingModal(true);
    } else {
      // Has crop - select it
      if (selectedSlot?.row === row && selectedSlot?.col === col) {
        clearSelection();
      } else {
        selectSlot(row, col);
      }
    }
  }, [grid, selectedSlot, selectSlot, clearSelection]);

  // Handle planting
  const handlePlant = useCallback((cropType: CropType) => {
    if (!plantingPosition) return;
    
    const { row, col } = plantingPosition;
    
    // Check for seeds in inventory first
    const seedItem = inventory.find(
      item => item.type === 'seed' && item.cropTypeId === cropType.id
    );
    
    if (seedItem && seedItem.quantity > 0) {
      // Use seed from inventory
      removeFromInventory(seedItem.id, 1);
    } else {
      // Buy seed with gold
      const seedPrice = SEED_PRICES[cropType.id] || 0;
      if (!spendGold(seedPrice)) {
        showNotification('金幣不足!', 'error');
        return;
      }
    }
    
    // Plant the crop
    const success = plantCrop(row, col, cropType);
    
    if (success) {
      showNotification(`種植了 ${cropType.emoji} ${cropType.name}!`, 'success');
    } else {
      showNotification('種植失敗!', 'error');
    }
    
    setShowPlantingModal(false);
    setPlantingPosition(null);
  }, [plantingPosition, inventory, removeFromInventory, spendGold, plantCrop, showNotification]);

  // Handle water action
  const handleWater = useCallback(() => {
    if (!selectedSlot) return;
    waterCrop(selectedSlot.row, selectedSlot.col);
    showNotification('💧 澆水完成!', 'info');
  }, [selectedSlot, waterCrop, showNotification]);

  // Handle fertilize action
  const handleFertilize = useCallback(() => {
    if (!selectedSlot) return;
    
    // Could add fertilizer cost here
    fertilizeCrop(selectedSlot.row, selectedSlot.col);
    showNotification('🌿 施肥完成!', 'info');
  }, [selectedSlot, fertilizeCrop, showNotification]);

  // Handle harvest button click
  const handleHarvestClick = useCallback(() => {
    if (!selectedSlot) return;
    
    const crop = grid[selectedSlot.row][selectedSlot.col];
    if (!crop || !cropSystem.canHarvest(crop)) return;
    
    setHarvestingCrop({ crop, row: selectedSlot.row, col: selectedSlot.col });
    setShowHarvestModal(true);
  }, [selectedSlot, grid]);

  // Handle harvest success
  const handleHarvestSuccess = useCallback((gold: number, crop: CropSlot) => {
    showNotification(`🎉 收成 ${crop.cropType.emoji} 獲得 ${gold} 金幣!`, 'success');
    clearSelection();
  }, [showNotification, clearSelection]);

  // Handle harvest fail
  const handleHarvestFail = useCallback(() => {
    showNotification('😢 收成失敗，下次加油!', 'error');
  }, [showNotification]);

  // Close harvest modal
  const closeHarvestModal = useCallback(() => {
    setShowHarvestModal(false);
    setHarvestingCrop(null);
  }, []);

  // Get selected crop
  const selectedCrop = selectedSlot ? grid[selectedSlot.row][selectedSlot.col] : null;

  return (
    <div className="farm-container">
      {/* Notification */}
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      <div className="farm-layout">
        {/* Farm Grid */}
        <div className="farm-grid-container">
          <h2 className="farm-title">🌾 我的農場</h2>
          <div 
            className="farm-grid"
            style={{
              gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
              gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
            }}
          >
            {grid.map((row, rowIndex) =>
              row.map((crop, colIndex) => (
                <CropSlotView
                  key={`${rowIndex}-${colIndex}`}
                  crop={crop}
                  row={rowIndex}
                  col={colIndex}
                  isSelected={selectedSlot?.row === rowIndex && selectedSlot?.col === colIndex}
                  onClick={() => handleSlotClick(rowIndex, colIndex)}
                />
              ))
            )}
          </div>
        </div>

        {/* Crop Info Panel */}
        <div className="info-panel">
          {selectedCrop ? (
            <CropInfoCard
              crop={selectedCrop}
              onHarvest={handleHarvestClick}
              onWater={handleWater}
              onFertilize={handleFertilize}
              onClose={clearSelection}
            />
          ) : (
            <div className="no-selection">
              <div className="hint-icon">👆</div>
              <p>選擇一個農田格子</p>
              <p className="hint">點擊空格子種植<br/>點擊作物查看資訊</p>
            </div>
          )}
        </div>
      </div>

      {/* Planting Modal */}
      {showPlantingModal && plantingPosition && (
        <PlantingModal
          row={plantingPosition.row}
          col={plantingPosition.col}
          onPlant={handlePlant}
          onClose={() => {
            setShowPlantingModal(false);
            setPlantingPosition(null);
          }}
        />
      )}

      {/* Harvest Modal */}
      {showHarvestModal && harvestingCrop && (
        <HarvestModal
          crop={harvestingCrop.crop}
          row={harvestingCrop.row}
          col={harvestingCrop.col}
          onClose={closeHarvestModal}
          onSuccess={handleHarvestSuccess}
          onFail={handleHarvestFail}
        />
      )}

      <style>{`
        .farm-container {
          width: 100%;
          padding: 20px;
          position: relative;
        }

        .notification {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: bold;
          z-index: 1100;
          animation: slide-down 0.3s ease, fade-out 0.3s ease 2.7s;
        }

        .notification.success {
          background: linear-gradient(135deg, #4CAF50, #388E3C);
          color: white;
        }

        .notification.error {
          background: linear-gradient(135deg, #f44336, #c62828);
          color: white;
        }

        .notification.info {
          background: linear-gradient(135deg, #2196F3, #1976D2);
          color: white;
        }

        .farm-layout {
          display: flex;
          gap: 24px;
          justify-content: center;
          align-items: flex-start;
        }

        .farm-grid-container {
          background: linear-gradient(180deg, #87CEEB 0%, #98D8C8 50%, #90EE90 100%);
          padding: 24px;
          border-radius: 16px;
          border: 4px solid #8B7355;
          box-shadow: 
            inset 0 2px 4px rgba(255, 255, 255, 0.3),
            0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .farm-title {
          margin: 0 0 16px 0;
          text-align: center;
          color: #5D4037;
          font-size: 24px;
          text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
        }

        .farm-grid {
          display: grid;
          gap: 8px;
        }

        .info-panel {
          min-width: 280px;
        }

        .no-selection {
          background: linear-gradient(135deg, #f5e6d3 0%, #e8d5b7 100%);
          border: 3px solid #8B7355;
          border-radius: 12px;
          padding: 32px 24px;
          text-align: center;
          color: #8B7355;
        }

        .hint-icon {
          font-size: 48px;
          margin-bottom: 12px;
        }

        .no-selection p {
          margin: 8px 0;
          font-size: 16px;
        }

        .hint {
          font-size: 13px !important;
          color: #A0826D;
          line-height: 1.5;
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes fade-out {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
