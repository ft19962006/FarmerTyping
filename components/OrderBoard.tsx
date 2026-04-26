import React, { useState, useEffect, useCallback } from 'react';
import { usePlayerStore } from '../stores/usePlayerStore';
import { useUIStore } from '../stores/useUIStore';
import { CROPS } from '../constants/crops';
import { economySystem, Order, OrderDifficulty } from '../game/EconomySystem';
import { XP_REWARDS } from '../constants/shop';

interface OrderBoardProps {
  maxOrders?: number;
  onClose?: () => void;
}

export const OrderBoard: React.FC<OrderBoardProps> = ({ 
  maxOrders = 3,
  onClose,
}) => {
  const {
    activeOrders,
    inventory,
    addOrder,
    removeOrder,
    completeOrder,
    failOrder,
    removeFromInventoryByType,
    addXP,
    addReputation,
  } = usePlayerStore();
  
  const { addNotification, setScreen } = useUIStore();
  
  // Timer state for updates
  const [, setTick] = useState(0);
  
  // Force re-render every second for countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
      
      // Check for expired orders
      activeOrders.forEach((order) => {
        if (economySystem.isOrderExpired(order)) {
          failOrder(order.id);
          addNotification(`訂單已過期！${order.customerEmoji} ${order.customerName} 很失望...`, 'warning');
        }
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [activeOrders, failOrder, addNotification]);
  
  // Generate new orders if needed
  useEffect(() => {
    if (activeOrders.length < maxOrders) {
      const difficulty: OrderDifficulty = 
        activeOrders.length === 0 ? 'easy' : 
        Math.random() < 0.6 ? 'easy' : 
        Math.random() < 0.8 ? 'medium' : 'hard';
      
      const newOrder = economySystem.generateOrder(difficulty);
      addOrder(newOrder);
    }
  }, [activeOrders.length, maxOrders, addOrder]);
  
  // Check if order can be fulfilled
  const canFulfill = useCallback((order: Order): boolean => {
    return economySystem.canFulfillOrder(order, inventory);
  }, [inventory]);
  
  // Handle order delivery
  const handleDeliver = (order: Order) => {
    if (!canFulfill(order)) {
      addNotification('材料不足！', 'error');
      return;
    }
    
    // Remove items from inventory
    let success = true;
    order.items.forEach((item) => {
      const removed = removeFromInventoryByType('crop', item.cropId, item.quantity);
      if (!removed) success = false;
    });
    
    if (!success) {
      addNotification('交付失敗！', 'error');
      return;
    }
    
    // Calculate rewards
    const { reward, bonus, timeBonus } = economySystem.calculateOrderReward(order);
    
    // Complete order
    completeOrder(order.id, reward, bonus + timeBonus);
    
    // Add XP and reputation
    addXP(XP_REWARDS.orderComplete);
    if (order.isUrgent) {
      addXP(XP_REWARDS.orderBonus);
      addReputation(2);
    } else {
      addReputation(1);
    }
    
    // Show success notification
    let message = `訂單完成！獲得 🪙 ${reward}`;
    if (bonus > 0) message += ` + 緊急獎勵 ${bonus}`;
    if (timeBonus > 0) message += ` + 時間獎勵 ${timeBonus}`;
    addNotification(message, 'success');
  };
  
  // Handle order skip/cancel
  const handleSkip = (orderId: string) => {
    removeOrder(orderId);
    addNotification('已跳過訂單', 'info');
  };
  
  // Handle refresh orders
  const handleRefreshOrders = () => {
    // Remove all current orders
    activeOrders.forEach((order) => removeOrder(order.id));
    addNotification('訂單已刷新！', 'info');
  };
  
  // Close handler
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setScreen('game');
    }
  };
  
  // Get crop display info
  const getCropInfo = (cropId: string) => {
    return CROPS[cropId];
  };
  
  return (
    <div className="order-board-container">
      <div className="order-board-panel">
        {/* Header */}
        <div className="order-header">
          <h2>📋 訂單看板</h2>
          <button className="refresh-btn" onClick={handleRefreshOrders} title="刷新訂單">
            🔄
          </button>
          <button className="close-btn" onClick={handleClose}>✕</button>
        </div>
        
        {/* Orders List */}
        <div className="orders-list">
          {activeOrders.length === 0 ? (
            <div className="no-orders">
              沒有訂單，稍等一下...
            </div>
          ) : (
            activeOrders.map((order) => {
              const timeRemaining = economySystem.getOrderTimeRemaining(order);
              const canDeliver = canFulfill(order);
              const isExpiring = timeRemaining < 30;
              
              return (
                <div 
                  key={order.id} 
                  className={`order-card ${order.isUrgent ? 'urgent' : ''} ${isExpiring ? 'expiring' : ''}`}
                >
                  {/* Customer */}
                  <div className="order-customer">
                    <span className="customer-emoji">{order.customerEmoji}</span>
                    <span className="customer-name">{order.customerName}</span>
                    {order.isUrgent && <span className="urgent-badge">🔥 緊急</span>}
                  </div>
                  
                  {/* Items Required */}
                  <div className="order-items">
                    {order.items.map((item, idx) => {
                      const cropInfo = getCropInfo(item.cropId);
                      const playerHas = inventory.find(
                        (i) => i.type === 'crop' && i.cropTypeId === item.cropId
                      )?.quantity || 0;
                      const hasEnough = playerHas >= item.quantity;
                      
                      return (
                        <div 
                          key={idx} 
                          className={`order-item ${hasEnough ? 'has-enough' : 'missing'}`}
                        >
                          <span className="item-emoji">{cropInfo?.emoji || '❓'}</span>
                          <span className="item-name">{cropInfo?.name || '未知'}</span>
                          <span className="item-qty">
                            {playerHas}/{item.quantity}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Reward */}
                  <div className="order-reward">
                    <span className="reward-label">獎勵:</span>
                    <span className="reward-amount">🪙 {order.reward}</span>
                    {order.bonusReward && (
                      <span className="bonus-amount">+{order.bonusReward}</span>
                    )}
                  </div>
                  
                  {/* Time Remaining */}
                  <div className={`order-time ${isExpiring ? 'warning' : ''}`}>
                    ⏱️ {economySystem.formatTime(timeRemaining)}
                  </div>
                  
                  {/* Actions */}
                  <div className="order-actions">
                    <button 
                      className={`deliver-btn ${canDeliver ? 'ready' : ''}`}
                      onClick={() => handleDeliver(order)}
                      disabled={!canDeliver}
                    >
                      {canDeliver ? '✓ 交付' : '材料不足'}
                    </button>
                    <button 
                      className="skip-btn"
                      onClick={() => handleSkip(order.id)}
                    >
                      跳過
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        
        {/* Help Text */}
        <div className="order-help">
          💡 收穫農作物後可以在這裡交付訂單獲得金幣獎勵！
        </div>
      </div>
      
      <style>{`
        .order-board-container {
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
        
        .order-board-panel {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 3px solid #4a5568;
          border-radius: 1rem;
          padding: 1.5rem;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          color: white;
          font-family: 'Press Start 2P', monospace;
        }
        
        .order-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #4a5568;
        }
        
        .order-header h2 {
          margin: 0;
          font-size: 1.125rem;
          flex: 1;
        }
        
        .refresh-btn {
          background: #3b82f6;
          border: none;
          color: white;
          width: 2rem;
          height: 2rem;
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 1rem;
          transition: transform 0.2s;
        }
        
        .refresh-btn:hover {
          transform: rotate(180deg);
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
        
        .orders-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .no-orders {
          text-align: center;
          color: #9ca3af;
          padding: 2rem;
          font-size: 0.75rem;
        }
        
        .order-card {
          background: rgba(255,255,255,0.05);
          border: 2px solid rgba(255,255,255,0.1);
          border-radius: 0.75rem;
          padding: 1rem;
          transition: all 0.2s;
        }
        
        .order-card:hover {
          border-color: rgba(255,255,255,0.3);
        }
        
        .order-card.urgent {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
          animation: urgentPulse 2s infinite;
        }
        
        .order-card.expiring {
          animation: expiringFlash 0.5s infinite;
        }
        
        @keyframes urgentPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
          50% { box-shadow: 0 0 10px 5px rgba(239, 68, 68, 0.2); }
        }
        
        @keyframes expiringFlash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .order-customer {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        
        .customer-emoji {
          font-size: 1.5rem;
        }
        
        .customer-name {
          font-size: 0.75rem;
          font-weight: bold;
        }
        
        .urgent-badge {
          font-size: 0.5rem;
          background: #ef4444;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          margin-left: auto;
        }
        
        .order-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        
        .order-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem;
          background: rgba(0,0,0,0.2);
          border-radius: 0.5rem;
          font-size: 0.625rem;
        }
        
        .order-item.has-enough {
          background: rgba(74, 222, 128, 0.2);
          border: 1px solid #4ade80;
        }
        
        .order-item.missing {
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid #ef4444;
        }
        
        .item-emoji {
          font-size: 1rem;
        }
        
        .item-name {
          color: #e5e7eb;
        }
        
        .item-qty {
          font-weight: bold;
          color: #fbbf24;
        }
        
        .order-reward {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 0.75rem;
        }
        
        .reward-label {
          color: #9ca3af;
        }
        
        .reward-amount {
          color: #ffd700;
          font-weight: bold;
        }
        
        .bonus-amount {
          color: #4ade80;
          font-size: 0.625rem;
        }
        
        .order-time {
          font-size: 0.75rem;
          margin-bottom: 0.75rem;
        }
        
        .order-time.warning {
          color: #ef4444;
          animation: timeWarning 0.5s infinite;
        }
        
        @keyframes timeWarning {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .order-actions {
          display: flex;
          gap: 0.5rem;
        }
        
        .deliver-btn {
          flex: 1;
          padding: 0.5rem;
          background: #4a5568;
          border: none;
          border-radius: 0.5rem;
          color: white;
          cursor: not-allowed;
          font-family: inherit;
          font-size: 0.625rem;
          transition: all 0.2s;
        }
        
        .deliver-btn.ready {
          background: linear-gradient(135deg, #4ade80, #22c55e);
          cursor: pointer;
        }
        
        .deliver-btn.ready:hover {
          transform: scale(1.02);
        }
        
        .skip-btn {
          padding: 0.5rem 1rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 0.5rem;
          color: white;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.625rem;
          transition: all 0.2s;
        }
        
        .skip-btn:hover {
          background: rgba(255,255,255,0.2);
        }
        
        .order-help {
          text-align: center;
          font-size: 0.5rem;
          color: #9ca3af;
          padding-top: 0.5rem;
          border-top: 1px solid #4a5568;
        }
      `}</style>
    </div>
  );
};

export default OrderBoard;
