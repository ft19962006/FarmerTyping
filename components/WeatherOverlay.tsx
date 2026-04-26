import React from 'react';
import { WeatherType } from '../types';

interface WeatherOverlayProps {
  weather: WeatherType;
}

/**
 * WeatherOverlay renders visual weather effects on top of the game.
 * Uses CSS-only animations for performance.
 */
export const WeatherOverlay: React.FC<WeatherOverlayProps> = ({ weather }) => {
  return (
    <div className={`weather-overlay weather-${weather}`}>
      {/* Sunny - Light rays and particles */}
      {weather === 'sunny' && (
        <div className="sunny-effects">
          <div className="sun-rays"></div>
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="sun-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Rainy - Rain drops */}
      {weather === 'rainy' && (
        <div className="rain-effects">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i} 
              className="raindrop"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${0.5 + Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Stormy - Dark overlay + diagonal rain + lightning */}
      {weather === 'stormy' && (
        <div className="storm-effects">
          <div className="storm-overlay"></div>
          {[...Array(150)].map((_, i) => (
            <div 
              key={i} 
              className="storm-rain"
              style={{
                left: `${Math.random() * 120}%`,
                animationDelay: `${Math.random() * 1}s`,
                animationDuration: `${0.3 + Math.random() * 0.3}s`,
              }}
            />
          ))}
          <div className="lightning"></div>
        </div>
      )}

      {/* Snowy - Snowflakes */}
      {weather === 'snowy' && (
        <div className="snow-effects">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i} 
              className="snowflake"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                fontSize: `${8 + Math.random() * 12}px`,
              }}
            >
              ❄
            </div>
          ))}
        </div>
      )}

      {/* Foggy - Semi-transparent white gradient overlay */}
      {weather === 'foggy' && (
        <div className="fog-effects">
          <div className="fog-layer fog-layer-1"></div>
          <div className="fog-layer fog-layer-2"></div>
          <div className="fog-layer fog-layer-3"></div>
        </div>
      )}

      {/* Rainbow - Gradient arc */}
      {weather === 'rainbow' && (
        <div className="rainbow-effects">
          <div className="rainbow-arc"></div>
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className="sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>
      )}

      <style>{`
        .weather-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 100;
          overflow: hidden;
        }

        /* ============ SUNNY ============ */
        .sunny-effects {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .sun-rays {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,200,50,0.4) 0%, transparent 70%);
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .sun-particle {
          position: absolute;
          top: -20px;
          width: 4px;
          height: 4px;
          background: rgba(255, 200, 50, 0.6);
          border-radius: 50%;
          animation: float-down 5s linear infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 1; }
        }

        @keyframes float-down {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }

        /* ============ RAINY ============ */
        .rain-effects {
          width: 100%;
          height: 100%;
          position: relative;
          background: linear-gradient(180deg, rgba(100,100,120,0.1) 0%, transparent 50%);
        }

        .raindrop {
          position: absolute;
          top: -20px;
          width: 2px;
          height: 20px;
          background: linear-gradient(180deg, transparent, rgba(150,180,255,0.6));
          animation: rain-fall linear infinite;
        }

        @keyframes rain-fall {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0.5; }
        }

        /* ============ STORMY ============ */
        .storm-effects {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .storm-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(30, 30, 50, 0.3);
        }

        .storm-rain {
          position: absolute;
          top: -30px;
          width: 2px;
          height: 30px;
          background: linear-gradient(180deg, transparent, rgba(150,180,255,0.8));
          transform: rotate(15deg);
          animation: storm-rain-fall linear infinite;
        }

        @keyframes storm-rain-fall {
          0% { transform: translateY(0) translateX(0) rotate(15deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(100vh) translateX(-50px) rotate(15deg); opacity: 0; }
        }

        .lightning {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
          opacity: 0;
          animation: lightning-flash 8s infinite;
        }

        @keyframes lightning-flash {
          0%, 89%, 91%, 93%, 100% { opacity: 0; }
          90%, 92% { opacity: 0.3; }
        }

        /* ============ SNOWY ============ */
        .snow-effects {
          width: 100%;
          height: 100%;
          position: relative;
          background: linear-gradient(180deg, rgba(200,210,255,0.1) 0%, transparent 30%);
        }

        .snowflake {
          position: absolute;
          top: -20px;
          color: white;
          text-shadow: 0 0 5px rgba(255,255,255,0.8);
          animation: snow-fall linear infinite;
        }

        @keyframes snow-fall {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.9; }
          100% { 
            transform: translateY(100vh) translateX(50px) rotate(720deg); 
            opacity: 0; 
          }
        }

        /* ============ FOGGY ============ */
        .fog-effects {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .fog-layer {
          position: absolute;
          width: 200%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent 0%,
            rgba(255,255,255,0.3) 30%,
            rgba(255,255,255,0.5) 50%,
            rgba(255,255,255,0.3) 70%,
            transparent 100%
          );
        }

        .fog-layer-1 {
          animation: fog-drift 15s linear infinite;
          opacity: 0.3;
        }

        .fog-layer-2 {
          animation: fog-drift 20s linear infinite reverse;
          opacity: 0.2;
          top: 30%;
        }

        .fog-layer-3 {
          animation: fog-drift 25s linear infinite;
          opacity: 0.4;
          top: 60%;
        }

        @keyframes fog-drift {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* ============ RAINBOW ============ */
        .rainbow-effects {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .rainbow-arc {
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          border-radius: 300px 300px 0 0;
          background: linear-gradient(
            180deg,
            rgba(255,0,0,0.2) 0%,
            rgba(255,127,0,0.2) 16%,
            rgba(255,255,0,0.2) 33%,
            rgba(0,255,0,0.2) 50%,
            rgba(0,0,255,0.2) 66%,
            rgba(75,0,130,0.2) 83%,
            rgba(148,0,211,0.2) 100%
          );
          animation: rainbow-pulse 3s ease-in-out infinite;
        }

        @keyframes rainbow-pulse {
          0%, 100% { opacity: 0.5; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.8; transform: translateX(-50%) scale(1.05); }
        }

        .sparkle {
          position: absolute;
          font-size: 16px;
          animation: sparkle-twinkle 2s ease-in-out infinite;
        }

        @keyframes sparkle-twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default WeatherOverlay;
