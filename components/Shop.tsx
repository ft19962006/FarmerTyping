import React, { useState, useMemo } from 'react';
import { usePlayerStore } from '../stores/usePlayerStore';
import { useFarmStore } from '../stores/useFarmStore';
import { useUIStore } from '../stores/useUIStore';
import { ShopItem, getShopItemsByType } from '../constants/shop';
import { economySystem } from '../game/EconomySystem';

type ShopTab = 'seeds' | 'tools' | 'upgrades';

interface ShopProps {
  onClose?: () => void;
}

export const Shop: React.FC<ShopProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<ShopTab>('seeds');
  const [selectedItem, setSelectedItem] = useState<ShopItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  
  const { 
    gold, 
    gems, 
    level, 
    addToInventory, 
    spendGold, 
    unlockCrop,
    hasPurchasedUpgrade,
    addPurchasedUpgrade,
    hasPurchasedTool,
    addPurchasedTool,
  } = usePlayerStore();
  
  const { expandFarm, canExpand, getNextExpansion, setSprinkler, setScarecrow } = useFarmStore();
  const { addNotification, setScreen } = useUIStore();
  
  // Get items for current tab
  const items = useMemo(() => {
    switch (activeTab) {
      case 'seeds':
        return getShopItemsByType('seed');
      case 'tools':
        return getShopItemsByType('tool');
      case 'upgrades':
        return getShopItemsByType('upgrade');
      default:
        return [];
    }
  }, [activeTab]);
  
  // Check if item is available (unlocked and not already purchased for unique items)
  const isItemAvailable = (item: ShopItem): boolean => {
    if (!economySystem.isUnlockedAtLevel(item, level)) {
      return false;
    }
    if (item.type === 'upgrade' && hasPurchasedUpgrade(item.id)) {
      return false;
    }
    // Some tools can only be purchased once
    if (item.type === 'tool' && (item.effect === 'autoWater' || item.effect === 'reduceCrows')) {
      if (hasPurchasedTool(item.id)) {
        return false;
      }
    }
    return true;
  };
  
  // Check if player can afford item
  const canAfford = (item: ShopItem, qty: number = 1): boolean => {
    const totalPrice = item.price * qty;
    return economySystem.canAfford(totalPrice, item.currency, gold, gems);
  };
  
  // Handle purchase
  const handlePurchase = (item: ShopItem, qty: number = 1) => {
    const totalPrice = item.price * qty;
    
    if (!canAfford(item, qty)) {
      addNotification('金幣不足！', 'error');
      return;
    }
    
    // Spend currency
    const spent = item.currency === 'gold' ? spendGold(totalPrice) : false;
    if (!spent) {
      addNotification('購買失敗！', 'error');
      return;
    }
    
    // Process purchase based on item type
    switch (item.type) {
      case 'seed':
        if (item.cropTypeId) {
          addToInventory({
            type: 'seed',
            cropTypeId: item.cropTypeId,
            quantity: qty,
          });
          // Unlock crop if not already unlocked
          unlockCrop(item.cropTypeId);
          addNotification(`購買了 ${qty}x ${item.name}！`, 'success');
        }
        break;
        
      case 'tool':
        handleToolPurchase(item);
        break;
        
      case 'upgrade':
        handleUpgradePurchase(item);
        break;
        
      default:
        addToInventory({
          type: item.type as 'seed' | 'crop' | 'tool',
          quantity: qty,
        });
        addNotification(`購買了 ${item.name}！`, 'success');
    }
    
    // Reset selection
    setSelectedItem(null);
    setQuantity(1);
  };
  
  // Handle tool purchase
  const handleToolPurchase = (item: ShopItem) => {
    switch (item.effect) {
      case 'autoWater':
        setSprinkler(true);
        addPurchasedTool(item.id);
        addNotification('安裝了自動灑水器！作物會自動澆水', 'success');
        break;
        
      case 'reduceCrows':
        setScarecrow(true);
        addPurchasedTool(item.id);
        addNotification('安裝了稻草人！烏鴉出現機率減少 50%', 'success');
        break;
        
      case 'fertilize':
        addToInventory({ type: 'tool', cropTypeId: 'fertilizer', quantity: 5 });
        addNotification('購買了肥料包 x5！', 'success');
        break;
        
      case 'qualityBoost':
        addToInventory({ type: 'tool', cropTypeId: 'quality_boost', quantity: 3 });
        addNotification('購買了優質種子增強劑 x3！', 'success');
        break;
        
      default:
        addToInventory({ type: 'tool', quantity: 1 });
        addNotification(`購買了 ${item.name}！`, 'success');
    }
  };
  
  // Handle upgrade purchase
  const handleUpgradePurchase = (item: ShopItem) => {
    if (item.effect?.startsWith('expandTo')) {
      const nextExpansion = getNextExpansion();
      if (nextExpansion && canExpand()) {
        expandFarm(nextExpansion.rows, nextExpansion.cols);
        addPurchasedUpgrade(item.id);
        addNotification(`農場擴建至 ${nextExpansion.rows}×${nextExpansion.cols}！`, 'success');
      } else {
        addNotification('無法擴建！', 'error');
      }
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
  
  return (
    <div className="shop-container">
      <div className="shop-panel">
        {/* Header */}
        <div className="shop-header">
          <h2>🏪 商店</h2>
          <div className="shop-currency">
            <span className="gold">🪙 {gold.toLocaleString()}</span>
            <span className="gems">💎 {gems}</span>
          </div>
          <button className="close-btn" onClick={handleClose}>✕</button>
        </div>
        
        {/* Tabs */}
        <div className="shop-tabs">
          <button 
            className={`tab ${activeTab === 'seeds' ? 'active' : ''}`}
            onClick={() => setActiveTab('seeds')}
          >
            🌱 種子
          </button>
          <button 
            className={`tab ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            🔧 工具
          </button>
          <button 
            className={`tab ${activeTab === 'upgrades' ? 'active' : ''}`}
            onClick={() => setActiveTab('upgrades')}
          >
            📐 升級
          </button>
        </div>
        
        {/* Items Grid */}
        <div className="shop-items">
          {items.map((item) => {
            const available = isItemAvailable(item);
            const affordable = canAfford(item);
            const locked = !economySystem.isUnlockedAtLevel(item, level);
            const alreadyPurchased = item.type === 'upgrade' && hasPurchasedUpgrade(item.id);
            
            return (
              <div 
                key={item.id}
                className={`shop-item ${!available ? 'unavailable' : ''} ${selectedItem?.id === item.id ? 'selected' : ''}`}
                onClick={() => available && setSelectedItem(item)}
              >
                <div className="item-icon">{item.icon}</div>
                <div className="item-info">
                  <span className="item-name">{item.name}</span>
                  <span className="item-desc">{item.description}</span>
                  <span className={`item-price ${!affordable ? 'cant-afford' : ''}`}>
                    {item.currency === 'gold' ? '🪙' : '💎'} {item.price}
                  </span>
                </div>
                {locked && (
                  <div className="item-lock">
                    🔒 Lv.{item.unlockLevel}
                  </div>
                )}
                {alreadyPurchased && (
                  <div className="item-purchased">
                    ✓ 已購買
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Purchase Panel */}
        {selectedItem && (
          <div className="purchase-panel">
            <div className="purchase-info">
              <span className="purchase-icon">{selectedItem.icon}</span>
              <span className="purchase-name">{selectedItem.name}</span>
            </div>
            
            {selectedItem.type === 'seed' && (
              <div className="quantity-selector">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >-</button>
                <span>{quantity}</span>
                <button 
                  onClick={() => setQuantity(Math.min(99, quantity + 1))}
                  disabled={!canAfford(selectedItem, quantity + 1)}
                >+</button>
              </div>
            )}
            
            <div className="purchase-total">
              總價: {selectedItem.currency === 'gold' ? '🪙' : '💎'} {selectedItem.price * quantity}
            </div>
            
            <button 
              className="buy-btn"
              onClick={() => handlePurchase(selectedItem, quantity)}
              disabled={!canAfford(selectedItem, quantity)}
            >
              購買
            </button>
          </div>
        )}
      </div>
      
      <style>{`
        .shop-container {
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
        
        .shop-panel {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 3px solid #4a5568;
          border-radius: 1rem;
          padding: 1.5rem;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          color: white;
          font-family: 'Press Start 2P', monospace;
        }
        
        .shop-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #4a5568;
        }
        
        .shop-header h2 {
          margin: 0;
          font-size: 1.25rem;
        }
        
        .shop-currency {
          display: flex;
          gap: 1rem;
          font-size: 0.875rem;
        }
        
        .shop-currency .gold {
          color: #ffd700;
        }
        
        .shop-currency .gems {
          color: #60a5fa;
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
        
        .shop-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .tab {
          flex: 1;
          padding: 0.75rem;
          background: rgba(255,255,255,0.1);
          border: 2px solid transparent;
          border-radius: 0.5rem;
          color: white;
          cursor: pointer;
          font-size: 0.75rem;
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
        
        .shop-items {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 0.75rem;
          margin-bottom: 1rem;
          max-height: 300px;
          overflow-y: auto;
          padding: 0.5rem;
        }
        
        .shop-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(255,255,255,0.05);
          border: 2px solid rgba(255,255,255,0.1);
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
        }
        
        .shop-item:hover:not(.unavailable) {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.3);
        }
        
        .shop-item.selected {
          background: rgba(74, 222, 128, 0.2);
          border-color: #4ade80;
        }
        
        .shop-item.unavailable {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .item-icon {
          font-size: 2rem;
        }
        
        .item-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex: 1;
        }
        
        .item-name {
          font-size: 0.75rem;
          font-weight: bold;
        }
        
        .item-desc {
          font-size: 0.5rem;
          color: #9ca3af;
        }
        
        .item-price {
          font-size: 0.625rem;
          color: #ffd700;
        }
        
        .item-price.cant-afford {
          color: #ef4444;
        }
        
        .item-lock, .item-purchased {
          position: absolute;
          top: 0.25rem;
          right: 0.25rem;
          font-size: 0.5rem;
          padding: 0.25rem;
          border-radius: 0.25rem;
        }
        
        .item-lock {
          background: rgba(239, 68, 68, 0.5);
        }
        
        .item-purchased {
          background: rgba(74, 222, 128, 0.5);
        }
        
        .purchase-panel {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255,255,255,0.1);
          border-radius: 0.5rem;
          flex-wrap: wrap;
        }
        
        .purchase-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .purchase-icon {
          font-size: 1.5rem;
        }
        
        .purchase-name {
          font-size: 0.75rem;
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
        
        .purchase-total {
          font-size: 0.75rem;
          color: #ffd700;
          margin-left: auto;
        }
        
        .buy-btn {
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #4ade80, #22c55e);
          border: none;
          border-radius: 0.5rem;
          color: white;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.75rem;
          transition: transform 0.2s;
        }
        
        .buy-btn:hover:not(:disabled) {
          transform: scale(1.05);
        }
        
        .buy-btn:disabled {
          background: #4a5568;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default Shop;
