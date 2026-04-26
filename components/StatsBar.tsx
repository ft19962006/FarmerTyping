import React, { useEffect, useState, useRef } from 'react';
import { usePlayerStore } from '../stores/usePlayerStore';
import { useUIStore } from '../stores/useUIStore';
import { XP_PER_LEVEL } from '../constants/shop';

interface StatsBarProps {
  className?: string;
}

export const StatsBar: React.FC<StatsBarProps> = ({ className = '' }) => {
  const { gold, gems, reputation, level, xp } = usePlayerStore();
  const { setScreen } = useUIStore();
  
  // Animation state for gold changes
  const [displayGold, setDisplayGold] = useState(gold);
  const [goldDelta, setGoldDelta] = useState(0);
  const [showGoldDelta, setShowGoldDelta] = useState(false);
  const [goldFlash, setGoldFlash] = useState<'positive' | 'negative' | null>(null);
  
  // Animation state for XP changes
  const [displayXP, setDisplayXP] = useState(xp);
  const [xpDelta, setXpDelta] = useState(0);
  const [showXPDelta, setShowXPDelta] = useState(false);
  const [xpGlow, setXpGlow] = useState(false);
  
  // Level up animation
  const [levelUpBurst, setLevelUpBurst] = useState(false);
  const prevLevel = useRef(level);
  
  // Animate gold changes
  useEffect(() => {
    if (gold !== displayGold) {
      const delta = gold - displayGold;
      setGoldDelta(delta);
      setShowGoldDelta(true);
      setGoldFlash(delta > 0 ? 'positive' : 'negative');
      
      // Animate to new value
      const steps = 10;
      const stepValue = delta / steps;
      let current = displayGold;
      let step = 0;
      
      const interval = setInterval(() => {
        step++;
        if (step >= steps) {
          setDisplayGold(gold);
          clearInterval(interval);
        } else {
          current += stepValue;
          setDisplayGold(Math.round(current));
        }
      }, 50);
      
      // Hide delta after animation
      const timeout = setTimeout(() => {
        setShowGoldDelta(false);
        setGoldFlash(null);
      }, 1500);
      
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [gold, displayGold]);
  
  // Animate XP changes
  useEffect(() => {
    if (xp !== displayXP) {
      const delta = xp - displayXP;
      if (delta > 0) {
        setXpDelta(delta);
        setShowXPDelta(true);
        setXpGlow(true);
      }
      
      // Animate to new value
      const steps = 15;
      const stepValue = (xp - displayXP) / steps;
      let current = displayXP;
      let step = 0;
      
      const interval = setInterval(() => {
        step++;
        if (step >= steps) {
          setDisplayXP(xp);
          clearInterval(interval);
        } else {
          current += stepValue;
          setDisplayXP(Math.round(current));
        }
      }, 40);
      
      // Hide effects after animation
      const timeout = setTimeout(() => {
        setShowXPDelta(false);
        setXpGlow(false);
      }, 1500);
      
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [xp, displayXP]);
  
  // Level up detection
  useEffect(() => {
    if (level > prevLevel.current) {
      setLevelUpBurst(true);
      setTimeout(() => setLevelUpBurst(false), 1000);
    }
    prevLevel.current = level;
  }, [level]);
  
  // Calculate XP progress percentage
  const xpNeeded = XP_PER_LEVEL * level;
  const xpProgress = (displayXP / xpNeeded) * 100;
  
  return (
    <div className={`stats-bar ${className}`}>
      {/* Gold */}
      <div className={`stat-item gold-stat ${goldFlash ? `flash-${goldFlash}` : ''}`}>
        <span className="stat-icon coin-icon">🪙</span>
        <span className="stat-value">{displayGold.toLocaleString()}</span>
        {showGoldDelta && (
          <span className={`stat-delta ${goldDelta >= 0 ? 'positive' : 'negative'}`}>
            {goldDelta >= 0 ? '+' : ''}{goldDelta}
          </span>
        )}
        {/* Floating coins animation */}
        {showGoldDelta && goldDelta > 0 && (
          <div className="floating-coins">
            <span className="floating-coin fc1">🪙</span>
            <span className="floating-coin fc2">🪙</span>
            <span className="floating-coin fc3">🪙</span>
          </div>
        )}
      </div>
      
      {/* Gems */}
      <div className="stat-item gems-stat">
        <span className="stat-icon gem-icon">💎</span>
        <span className="stat-value">{gems}</span>
      </div>
      
      {/* Reputation */}
      <div className="stat-item reputation-stat">
        <span className="stat-icon star-icon">🌟</span>
        <span className="stat-value">{reputation}</span>
      </div>
      
      {/* Level & XP */}
      <div className={`stat-item level-stat ${levelUpBurst ? 'level-up-burst' : ''}`}>
        <div className="level-header">
          <span className="stat-icon">📊</span>
          <span className="stat-label">Lv.{level}</span>
          {levelUpBurst && <span className="level-up-text">LEVEL UP!</span>}
        </div>
        <div className={`xp-bar ${xpGlow ? 'xp-glow' : ''}`}>
          <div 
            className="xp-fill" 
            style={{ width: `${Math.min(100, xpProgress)}%` }}
          />
          <span className="xp-text">{displayXP}/{xpNeeded}</span>
        </div>
        {showXPDelta && (
          <span className="xp-delta">+{xpDelta} XP</span>
        )}
      </div>
      
      {/* Quick buttons */}
      <div className="stat-buttons">
        <button
          className="stat-btn shop-btn"
          onClick={() => setScreen('shop')}
          title="商店"
        >
          🏪
        </button>
        <button
          className="stat-btn inventory-btn"
          onClick={() => setScreen('inventory')}
          title="背包"
        >
          🎒
        </button>
      </div>
      
      <style>{`
        .stats-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem 1rem;
          background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5));
          border-radius: 0.5rem;
          color: white;
          font-family: 'Press Start 2P', 'Comic Sans MS', monospace;
          font-size: 0.75rem;
          flex-wrap: wrap;
          position: relative;
          z-index: 100;
        }
        
        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .stat-icon {
          font-size: 1.25rem;
          transition: transform 0.3s ease;
        }
        
        .stat-value {
          font-weight: bold;
          min-width: 3rem;
          transition: all 0.3s ease;
        }
        
        /* Gold stat styles */
        .gold-stat .stat-value {
          color: #ffd700;
        }
        
        .gold-stat.flash-positive {
          animation: flash-green 0.5s ease-out;
        }
        
        .gold-stat.flash-negative {
          animation: flash-red 0.5s ease-out;
        }
        
        .gold-stat.flash-positive .coin-icon {
          animation: coin-bounce 0.5s ease-out;
        }
        
        @keyframes flash-green {
          0%, 100% { background: transparent; }
          50% { background: rgba(74, 222, 128, 0.3); }
        }
        
        @keyframes flash-red {
          0%, 100% { background: transparent; }
          50% { background: rgba(248, 113, 113, 0.3); }
        }
        
        @keyframes coin-bounce {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.3) rotate(-10deg); }
          50% { transform: scale(1.2) rotate(10deg); }
          75% { transform: scale(1.1) rotate(-5deg); }
        }
        
        /* Floating coins */
        .floating-coins {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }
        
        .floating-coin {
          position: absolute;
          font-size: 0.875rem;
          animation: float-up 1s ease-out forwards;
        }
        
        .floating-coin.fc1 { animation-delay: 0s; left: -10px; }
        .floating-coin.fc2 { animation-delay: 0.15s; left: 0px; }
        .floating-coin.fc3 { animation-delay: 0.3s; left: 10px; }
        
        @keyframes float-up {
          0% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
          100% { 
            opacity: 0; 
            transform: translateY(-30px) scale(0.5); 
          }
        }
        
        .stat-delta {
          position: absolute;
          top: -1.25rem;
          right: 0;
          font-size: 0.75rem;
          font-weight: bold;
          animation: floatUp 1.5s ease-out forwards;
          white-space: nowrap;
        }
        
        .stat-delta.positive {
          color: #4ade80;
          text-shadow: 0 0 8px rgba(74, 222, 128, 0.6);
        }
        
        .stat-delta.negative {
          color: #f87171;
          text-shadow: 0 0 8px rgba(248, 113, 113, 0.6);
        }
        
        @keyframes floatUp {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-1.5rem);
          }
        }
        
        /* Gems stat */
        .gems-stat .stat-value {
          color: #60a5fa;
        }
        
        .gem-icon {
          animation: gem-shimmer 3s ease-in-out infinite;
        }
        
        @keyframes gem-shimmer {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.3); }
        }
        
        /* Reputation stat */
        .reputation-stat .stat-value {
          color: #fbbf24;
        }
        
        .star-icon {
          animation: star-pulse 2s ease-in-out infinite;
        }
        
        @keyframes star-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        /* Level stat */
        .level-stat {
          flex-direction: column;
          align-items: flex-start;
          gap: 0.125rem;
          position: relative;
        }
        
        .level-header {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        
        .level-stat.level-up-burst {
          animation: level-burst 1s ease-out;
        }
        
        @keyframes level-burst {
          0% { 
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.8);
          }
          50% { 
            transform: scale(1.1);
            box-shadow: 0 0 0 15px rgba(255, 215, 0, 0);
          }
          100% { 
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 215, 0, 0);
          }
        }
        
        .level-up-text {
          font-size: 0.625rem;
          color: #ffd700;
          animation: level-text-pop 1s ease-out forwards;
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
        }
        
        @keyframes level-text-pop {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(1); opacity: 0; }
        }
        
        .stat-label {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        
        .xp-bar {
          width: 5rem;
          height: 0.625rem;
          background: rgba(255,255,255,0.2);
          border-radius: 0.25rem;
          overflow: hidden;
          position: relative;
          transition: box-shadow 0.3s ease;
        }
        
        .xp-bar.xp-glow {
          box-shadow: 0 0 10px rgba(138, 43, 226, 0.6), 0 0 20px rgba(138, 43, 226, 0.3);
        }
        
        .xp-fill {
          height: 100%;
          background: linear-gradient(90deg, #9b59b6 0%, #8e44ad 50%, #a569bd 100%);
          border-radius: 0.25rem;
          transition: width 0.3s ease;
          position: relative;
        }
        
        .xp-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%);
        }
        
        .xp-bar.xp-glow .xp-fill {
          animation: xp-fill-pulse 0.5s ease-out;
        }
        
        @keyframes xp-fill-pulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.5); }
        }
        
        .xp-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 0.5rem;
          text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
          white-space: nowrap;
        }
        
        .xp-delta {
          position: absolute;
          top: -1rem;
          right: 0;
          font-size: 0.625rem;
          color: #a78bfa;
          text-shadow: 0 0 8px rgba(167, 139, 250, 0.6);
          animation: xp-float 1.5s ease-out forwards;
        }
        
        @keyframes xp-float {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-1rem); }
        }
        
        /* Quick buttons */
        .stat-buttons {
          display: flex;
          gap: 0.5rem;
          margin-left: auto;
        }
        
        .stat-btn {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.5rem;
          border: 2px solid rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.1);
          cursor: pointer;
          font-size: 1.25rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .stat-btn:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        .stat-btn:active {
          transform: translateY(0);
          box-shadow: none;
        }
        
        .shop-btn:hover {
          border-color: #ffd700;
          box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
        }
        
        .inventory-btn:hover {
          border-color: #a78bfa;
          box-shadow: 0 0 10px rgba(167, 139, 250, 0.4);
        }
      `}</style>
    </div>
  );
};
