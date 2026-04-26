import React, { useState, useMemo } from 'react';
import { usePlayerStore } from '../stores/usePlayerStore';
import { useUIStore } from '../stores/useUIStore';
import { CROPS } from '../constants/crops';
import { economySystem } from '../game/EconomySystem';
import { InventoryItem } from '../types';

type InventoryTab = 'seeds' | 'crops' | 'tools';

interface InventoryProps {
  onClose?: () => void;
}

export const Inventory: React.FC<InventoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<InventoryTab>('seeds');
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [sellQuantity, setSellQuantity] = useState(1);
  
  const {
    inventory,
    gold,
    addGold,
    removeFromInventoryByType,
    getInventoryItemsByType,
  } = usePlayerStore();
  
  const { addNotification, setScreen } = useUIStore();
  
  // Filter items by tab
  const items = useMemo(() => {
    return getInventoryItemsByType(activeTab === 'seeds' ? 'seed' : activeTab === 'crops' ? 'crop' : 'tool');
  }, [activeTab, inventory, getInventoryItemsByType]);
  
  // Get crop info for display
  const getCropInfo = (cropTypeId: string | undefined) => {
    if (!cropTypeId) return null;
    return CROPS[cropTypeId];
  };
  
  // Calculate sell price for a crop
  const getSellPrice = (item: InventoryItem, qty: number = 1): number => {
    if (item.type !== 'crop' || !item.cropTypeId) return 0;
    return economySystem.calculateInventorySellPrice(item.cropTypeId, qty);
  };
  
  // Handle selling crops
  const handleSell = (item: InventoryItem, qty: number) => {
    if (item.type !== 'crop' || !item.cropTypeId) {
      addNotification('只能出售農作物！', 'error');
      return;
    }
    
    if (qty > item.quantity) {
      addNotification('數量不足！', 'error');
      return;
    }
    
    const totalPrice = getSellPrice(item, qty);
    const cropInfo = getCropInfo(item.cropTypeId);
    
    // Remove from inventory
    const removed = removeFromInventoryByType('crop', item.cropTypeId, qty);
    if (removed) {
      addGold(totalPrice);
      addNotification(`賣出 ${qty}x ${cropInfo?.emoji || ''} ${cropInfo?.name || '農作物'} 獲得 ${totalPrice} 金幣！`, 'success');
      
      // Reset selection if sold all
      if (qty >= item.quantity) {
        setSelectedItem(null);
      }
      setSellQuantity(1);
    } else {
      addNotification('出售失敗！', 'error');
    }
  };
  
  // Handle sell all of a type
  const handleSellAll = (item: InventoryItem) => {
    handleSell(item, item.quantity);
  };
  
  // Handle sell all crops
  const handleSellAllCrops = () => {
    const cropItems = getInventoryItemsByType('crop');
    let totalEarned = 0;
    
    cropItems.forEach((item) => {
      if (item.cropTypeId) {
        const price = getSellPrice(item, item.quantity);
        const removed = removeFromInventoryByType('crop', item.cropTypeId, item.quantity);
        if (removed) {
          totalEarned += price;
        }
      }
    });
    
    if (totalEarned > 0) {
      addGold(totalEarned);
      addNotification(`賣出所有農作物獲得 ${totalEarned} 金幣！`, 'success');
      setSelectedItem(null);
    } else {
      addNotification('沒有可出售的農作物！', 'info');
    }
  };
  
  // Close handler
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setScreen('game');
    }
  };
  
  // Get item display info
  const getItemDisplay = (item: InventoryItem) => {
    const cropInfo = getCropInfo(item.cropTypeId);
    
    switch (item.type) {
      case 'seed':
        return {
          icon: cropInfo?.emoji || '🌱',
          name: `${cropInfo?.name || '未知'}種子`,
          subtitle: cropInfo ? `難度 ${'⭐'.repeat(cropInfo.difficulty)}` : '',
        };
      case 'crop':
        return {
          icon: cropInfo?.emoji || '🥬',
          name: cropInfo?.name || '農作物',
          subtitle: `售價: 🪙 ${cropInfo?.sellPrice || 0}`,
        };
      case 'tool':
        if (item.cropTypeId === 'fertilizer') {
          return { icon: '🧪', name: '肥料', subtitle: '加速生長' };
        }
        if (item.cropTypeId === 'quality_boost') {
          return { icon: '✨', name: '優質增強劑', subtitle: '+50% 售價' };
        }
        return { icon: '🔧', name: '工具', subtitle: '' };
      default:
        return { icon: '❓', name: '未知物品', subtitle: '' };
    }
  };
  
  return (
    <div className="inventory-container">
      <div className="inventory-panel">
        {/* Header */}
        <div className="inventory-header">
          <h2>🎒 背包</h2>
          <div className="inventory-gold">
            🪙 {gold.toLocaleString()}
          </div>
          <button className="close-btn" onClick={handleClose}>✕</button>
        </div>
        
        {/* Tabs */}
        <div className="inventory-tabs">
          <button 
            className={`tab ${activeTab === 'seeds' ? 'active' : ''}`}
            onClick={() => { setActiveTab('seeds'); setSelectedItem(null); }}
          >
            🌱 種子 ({getInventoryItemsByType('seed').reduce((s, i) => s + i.quantity, 0)})
          </button>
          <button 
            className={`tab ${activeTab === 'crops' ? 'active' : ''}`}
            onClick={() => { setActiveTab('crops'); setSelectedItem(null); }}
          >
            🥬 農作物 ({getInventoryItemsByType('crop').reduce((s, i) => s + i.quantity, 0)})
          </button>
          <button 
            className={`tab ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => { setActiveTab('tools'); setSelectedItem(null); }}
          >
            🔧 工具 ({getInventoryItemsByType('tool').reduce((s, i) => s + i.quantity, 0)})
          </button>
        </div>
        
        {/* Items Grid */}
        <div className="inventory-items">
          {items.length === 0 ? (
            <div className="empty-message">
              {activeTab === 'seeds' && '沒有種子，去商店購買吧！'}
              {activeTab === 'crops' && '沒有農作物，收穫後會出現在這裡！'}
              {activeTab === 'tools' && '沒有工具，去商店購買吧！'}
            </div>
          ) : (
            items.map((item) => {
              const display = getItemDisplay(item);
              const isSelected = selectedItem?.id === item.id;
              
              return (
                <div 
                  key={item.id}
                  className={`inventory-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="item-icon">{display.icon}</div>
                  <div className="item-info">
                    <span className="item-name">{display.name}</span>
                    <span className="item-subtitle">{display.subtitle}</span>
                  </div>
                  <div className="item-quantity">×{item.quantity}</div>
                </div>
              );
            })
          )}
        </div>
        
        {/* Sell Panel (only for crops) */}
        {activeTab === 'crops' && items.length > 0 && (
          <div className="sell-panel">
            {selectedItem && selectedItem.type === 'crop' ? (
              <>
                <div className="sell-info">
                  <span className="sell-icon">{getItemDisplay(selectedItem).icon}</span>
                  <span className="sell-name">{getItemDisplay(selectedItem).name}</span>
                  <span className="sell-owned">擁有: {selectedItem.quantity}</span>
                </div>
                
                <div className="quantity-selector">
                  <button 
                    onClick={() => setSellQuantity(Math.max(1, sellQuantity - 1))}
                    disabled={sellQuantity <= 1}
                  >-</button>
                  <span>{sellQuantity}</span>
                  <button 
                    onClick={() => setSellQuantity(Math.min(selectedItem.quantity, sellQuantity + 1))}
                    disabled={sellQuantity >= selectedItem.quantity}
                  >+</button>
                </div>
                
                <div className="sell-total">
                  獲得: 🪙 {getSellPrice(selectedItem, sellQuantity)}
                </div>
                
                <button 
                  className="sell-btn"
                  onClick={() => handleSell(selectedItem, sellQuantity)}
                >
                  出售
                </button>
                
                <button 
                  className="sell-all-btn"
                  onClick={() => handleSellAll(selectedItem)}
                >
                  全部出售
                </button>
              </>
            ) : (
              <div className="sell-hint">
                選擇農作物進行出售
              </div>
            )}
            
            <button 
              className="sell-all-crops-btn"
              onClick={handleSellAllCrops}
            >
              💰 出售所有農作物
            </button>
          </div>
        )}
      </div>
      
      <style>{`
        .inventory-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 1rem;
        }
        
        .inventory-panel {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 3px solid #4a5568;
          border-radius: 1rem;
          padding: 1.5rem;
          max-width: 550px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          color: white;
          font-family: 'Press Start 2P', monospace;
        }
        
        .inventory-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #4a5568;
        }
        
        .inventory-header h2 {
          margin: 0;
          font-size: 1.25rem;
        }
        
        .inventory-gold {
          font-size: 0.875rem;
          color: #ffd700;
        }
        
        .close-btn {
          background: #ef4444;
          border: none;
          color: white;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1rem;
          transition: transform 0.2s;
        }
        
        .close-btn:hover {
          transform: scale(1.1);
        }
        
        .inventory-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .tab {
          flex: 1;
          padding: 0.75rem 0.5rem;
          background: rgba(255,255,255,0.1);
          border: 2px solid transparent;
          border-radius: 0.5rem;
          color: white;
          cursor: pointer;
          font-size: 0.625rem;
          font-family: inherit;
          transition: all 0.2s;
        }
        
        .tab:hover {
          background: rgba(255,255,255,0.2);
        }
        
        .tab.active {
          background: rgba(74, 222, 128, 0.2);
          border-color: #4ade80;
        }
        
        .inventory-items {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 0.5rem;
          margin-bottom: 1rem;
          max-height: 250px;
          overflow-y: auto;
          padding: 0.5rem;
        }
        
        .empty-message {
          grid-column: 1 / -1;
          text-align: center;
          color: #9ca3af;
          padding: 2rem;
          font-size: 0.75rem;
        }
        
        .inventory-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: rgba(255,255,255,0.05);
          border: 2px solid rgba(255,255,255,0.1);
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .inventory-item:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.3);
        }
        
        .inventory-item.selected {
          background: rgba(74, 222, 128, 0.2);
          border-color: #4ade80;
        }
        
        .item-icon {
          font-size: 1.75rem;
        }
        
        .item-info {
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
          flex: 1;
        }
        
        .item-name {
          font-size: 0.625rem;
          font-weight: bold;
        }
        
        .item-subtitle {
          font-size: 0.5rem;
          color: #9ca3af;
        }
        
        .item-quantity {
          font-size: 0.875rem;
          font-weight: bold;
          color: #fbbf24;
        }
        
        .sell-panel {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(255,255,255,0.1);
          border-radius: 0.5rem;
          flex-wrap: wrap;
        }
        
        .sell-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .sell-icon {
          font-size: 1.5rem;
        }
        
        .sell-name {
          font-size: 0.625rem;
        }
        
        .sell-owned {
          font-size: 0.5rem;
          color: #9ca3af;
        }
        
        .sell-hint {
          font-size: 0.625rem;
          color: #9ca3af;
          flex: 1;
        }
        
        .quantity-selector {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .quantity-selector button {
          width: 1.5rem;
          height: 1.5rem;
          background: #4a5568;
          border: none;
          border-radius: 0.25rem;
          color: white;
          cursor: pointer;
          font-family: inherit;
        }
        
        .quantity-selector button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .sell-total {
          font-size: 0.625rem;
          color: #ffd700;
        }
        
        .sell-btn, .sell-all-btn {
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border: none;
          border-radius: 0.5rem;
          color: white;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.625rem;
          transition: transform 0.2s;
        }
        
        .sell-btn:hover, .sell-all-btn:hover {
          transform: scale(1.05);
        }
        
        .sell-all-crops-btn {
          width: 100%;
          margin-top: 0.5rem;
          padding: 0.75rem;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          border: none;
          border-radius: 0.5rem;
          color: white;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.75rem;
          transition: transform 0.2s;
        }
        
        .sell-all-crops-btn:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default Inventory;
