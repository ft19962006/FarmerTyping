import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

// ============================================
// Toast Notification System
// Animated notifications for game events
// ============================================

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'reward' | 'levelUp' | 'achievement';
  icon?: string;
  amount?: number;  // For gold/xp rewards
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
  clearAll: () => void;
}

// Generate unique ID
const generateId = () => `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

// Default durations by type (ms)
const DEFAULT_DURATIONS: Record<Toast['type'], number> = {
  success: 3000,
  error: 4000,
  info: 3000,
  reward: 3500,
  levelUp: 5000,
  achievement: 5000,
};

// Icons by type
const DEFAULT_ICONS: Record<Toast['type'], string> = {
  success: '✅',
  error: '❌',
  info: 'ℹ️',
  reward: '🪙',
  levelUp: '🎉',
  achievement: '🏆',
};

// Create context
const ToastContext = createContext<ToastContextType | null>(null);

// ============================================
// Toast Provider
// ============================================

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const newToast: Toast = {
      ...toast,
      id: generateId(),
      icon: toast.icon || DEFAULT_ICONS[toast.type],
      duration: toast.duration || DEFAULT_DURATIONS[toast.type],
    };
    
    setToasts(prev => [...prev, newToast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, clearAll }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

// ============================================
// Toast Hook
// ============================================

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// Convenience hooks for common toast types
export const useGameToasts = () => {
  const { addToast } = useToast();

  return {
    showSuccess: (message: string) => addToast({ type: 'success', message }),
    showError: (message: string) => addToast({ type: 'error', message }),
    showInfo: (message: string) => addToast({ type: 'info', message }),
    showGoldReward: (amount: number, message?: string) => 
      addToast({ 
        type: 'reward', 
        message: message || `Earned gold!`, 
        icon: '🪙',
        amount 
      }),
    showXPReward: (amount: number, message?: string) => 
      addToast({ 
        type: 'reward', 
        message: message || `Gained XP!`, 
        icon: '⭐',
        amount 
      }),
    showLevelUp: (level: number) => 
      addToast({ 
        type: 'levelUp', 
        message: `Level Up!`, 
        icon: '🎉',
        amount: level 
      }),
    showAchievement: (name: string, icon?: string) => 
      addToast({ 
        type: 'achievement', 
        message: name, 
        icon: icon || '🏆' 
      }),
    showHarvest: (cropName: string, amount: number) => 
      addToast({ 
        type: 'success', 
        message: `Harvested ${cropName}!`, 
        icon: '🌾',
        amount 
      }),
    showComboMilestone: (combo: number) => 
      addToast({ 
        type: 'reward', 
        message: `${combo}x Combo!`, 
        icon: '🔥',
        amount: combo 
      }),
  };
};

// ============================================
// Toast Container
// ============================================

interface ToastContainerProps {
  toasts: Toast[];
  removeToast: (id: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, removeToast }) => {
  return (
    <div className="toast-container">
      {toasts.map((toast, index) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          index={index}
          onRemove={() => removeToast(toast.id)}
        />
      ))}
      
      <style>{`
        .toast-container {
          position: fixed;
          top: 80px;
          right: 20px;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 350px;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

// ============================================
// Individual Toast Item
// ============================================

interface ToastItemProps {
  toast: Toast;
  index: number;
  onRemove: () => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, index, onRemove }) => {
  const [isExiting, setIsExiting] = useState(false);

  // Auto dismiss
  useEffect(() => {
    const dismissTimer = setTimeout(() => {
      setIsExiting(true);
    }, (toast.duration || 3000) - 300);

    const removeTimer = setTimeout(() => {
      onRemove();
    }, toast.duration || 3000);

    return () => {
      clearTimeout(dismissTimer);
      clearTimeout(removeTimer);
    };
  }, [toast.duration, onRemove]);

  // Type-specific styles
  const getTypeStyles = () => {
    switch (toast.type) {
      case 'success':
        return {
          background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
          borderColor: '#1e8449',
        };
      case 'error':
        return {
          background: 'linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)',
          borderColor: '#922b21',
        };
      case 'info':
        return {
          background: 'linear-gradient(135deg, #2980b9 0%, #3498db 100%)',
          borderColor: '#1a5276',
        };
      case 'reward':
        return {
          background: 'linear-gradient(135deg, #d4a017 0%, #f1c40f 100%)',
          borderColor: '#9a7d0a',
        };
      case 'levelUp':
        return {
          background: 'linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)',
          borderColor: '#6c3483',
        };
      case 'achievement':
        return {
          background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
          borderColor: '#b9770e',
        };
      default:
        return {
          background: 'linear-gradient(135deg, #34495e 0%, #5d6d7e 100%)',
          borderColor: '#283747',
        };
    }
  };

  const styles = getTypeStyles();

  return (
    <div
      className={`toast-item ${isExiting ? 'exiting' : ''} toast-${toast.type}`}
      style={{
        ...styles,
        animationDelay: `${index * 50}ms`,
      }}
      onClick={() => {
        setIsExiting(true);
        setTimeout(onRemove, 300);
      }}
    >
      <div className="toast-content">
        <span className="toast-icon">{toast.icon}</span>
        <div className="toast-text">
          <span className="toast-message">{toast.message}</span>
          {toast.amount !== undefined && (
            <span className="toast-amount">
              {toast.type === 'reward' || toast.type === 'levelUp' 
                ? `+${toast.amount}` 
                : toast.amount}
            </span>
          )}
        </div>
      </div>
      
      {/* Floating number for rewards */}
      {toast.amount !== undefined && (toast.type === 'reward' || toast.type === 'levelUp') && (
        <div className="toast-float-number">
          +{toast.amount}
        </div>
      )}

      <style>{`
        .toast-item {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          border-radius: 12px;
          border: 3px solid;
          box-shadow: 
            0 4px 12px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          color: white;
          font-family: 'Comic Sans MS', cursive, sans-serif;
          cursor: pointer;
          pointer-events: auto;
          animation: toast-bounce-in 0.4s ease-out forwards;
          position: relative;
          overflow: visible;
          transform-origin: right center;
        }

        .toast-item.exiting {
          animation: toast-slide-out 0.3s ease-in forwards;
        }

        @keyframes toast-bounce-in {
          0% { 
            transform: translateX(100%) scale(0.8);
            opacity: 0;
          }
          50% {
            transform: translateX(-10%) scale(1.05);
            opacity: 1;
          }
          100% { 
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes toast-slide-out {
          0% { 
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          100% { 
            transform: translateX(100%) scale(0.8);
            opacity: 0;
          }
        }

        .toast-content {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: 1;
        }

        .toast-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        .toast-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .toast-message {
          font-size: 14px;
          font-weight: bold;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .toast-amount {
          font-size: 18px;
          font-weight: bold;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .toast-float-number {
          position: absolute;
          top: -10px;
          right: 10px;
          font-size: 20px;
          font-weight: bold;
          color: #FFD700;
          text-shadow: 
            0 0 10px rgba(255, 215, 0, 0.8),
            2px 2px 2px rgba(0, 0, 0, 0.5);
          animation: reward-float 1s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        @keyframes reward-float {
          0% { 
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% { 
            transform: translateY(-30px) scale(1.3);
            opacity: 0;
          }
        }

        /* Type-specific animations */
        .toast-levelUp .toast-icon {
          animation: level-up-bounce 0.5s ease-out infinite;
        }

        @keyframes level-up-bounce {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.2) rotate(-10deg); }
          75% { transform: scale(1.2) rotate(10deg); }
        }

        .toast-achievement {
          animation: toast-bounce-in 0.4s ease-out forwards, achievement-glow 1s ease-in-out infinite;
        }

        @keyframes achievement-glow {
          0%, 100% { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 20px rgba(243, 156, 18, 0.3); }
          50% { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 30px rgba(243, 156, 18, 0.6); }
        }

        .toast-reward .toast-icon {
          animation: coin-spin 1s ease-in-out infinite;
        }

        @keyframes coin-spin {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
        }
      `}</style>
    </div>
  );
};

export default ToastProvider;
