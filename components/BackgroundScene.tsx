import React, { useMemo } from 'react';
import { WeatherType } from '../types';

// ============================================
// Background Scene Component
// Animated farm background with parallax layers
// ============================================

interface BackgroundSceneProps {
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
  weather: WeatherType;
}

// Time-based sky gradients
const SKY_GRADIENTS = {
  morning: 'linear-gradient(180deg, #FFE4B5 0%, #FFDAB9 20%, #87CEEB 60%, #ADD8E6 100%)',
  afternoon: 'linear-gradient(180deg, #87CEEB 0%, #ADD8E6 50%, #B0E0E6 100%)',
  evening: 'linear-gradient(180deg, #FF7F50 0%, #FF6347 15%, #DA70D6 45%, #8A2BE2 80%, #4B0082 100%)',
  night: 'linear-gradient(180deg, #191970 0%, #000033 40%, #0C0C2E 100%)',
};

// Weather overlay effects
const WEATHER_OVERLAYS = {
  sunny: 'transparent',
  rainy: 'rgba(100, 100, 120, 0.3)',
  stormy: 'rgba(50, 50, 70, 0.5)',
  foggy: 'rgba(200, 200, 200, 0.4)',
  snowy: 'rgba(220, 230, 240, 0.3)',
  rainbow: 'transparent',
};

// Generate stars for night sky
const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 40,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
    duration: 1.5 + Math.random() * 2,
  }));
};

// Generate clouds
const generateClouds = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: 5 + Math.random() * 25,
    size: 40 + Math.random() * 60,
    opacity: 0.6 + Math.random() * 0.4,
    duration: 60 + Math.random() * 40,
    delay: Math.random() * -100,
  }));
};

export const BackgroundScene: React.FC<BackgroundSceneProps> = ({
  timeOfDay,
  weather,
}) => {
  // Memoize generated elements
  const stars = useMemo(() => generateStars(50), []);
  const clouds = useMemo(() => generateClouds(5), []);

  const isNight = timeOfDay === 'night';
  const showSun = !isNight && weather !== 'stormy' && weather !== 'rainy';
  const showMoon = isNight;
  const showClouds = weather !== 'sunny' || timeOfDay === 'morning';
  const showStars = isNight && weather !== 'stormy' && weather !== 'foggy';
  const showRainbow = weather === 'rainbow';

  // Sun/Moon position based on time
  const celestialPosition = useMemo(() => {
    switch (timeOfDay) {
      case 'morning': return { x: 20, y: 30 };
      case 'afternoon': return { x: 70, y: 15 };
      case 'evening': return { x: 85, y: 40 };
      case 'night': return { x: 80, y: 20 };
      default: return { x: 50, y: 20 };
    }
  }, [timeOfDay]);

  return (
    <div className="background-scene">
      {/* Sky Layer */}
      <div 
        className="sky-layer"
        style={{ background: SKY_GRADIENTS[timeOfDay] }}
      />

      {/* Weather Overlay */}
      <div 
        className="weather-overlay-bg"
        style={{ backgroundColor: WEATHER_OVERLAYS[weather] }}
      />

      {/* Stars (Night only) */}
      {showStars && (
        <div className="stars-layer">
          {stars.map(star => (
            <div
              key={star.id}
              className="star"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Sun */}
      {showSun && (
        <div 
          className="sun"
          style={{
            left: `${celestialPosition.x}%`,
            top: `${celestialPosition.y}%`,
          }}
        >
          <div className="sun-core" />
          <div className="sun-rays" />
        </div>
      )}

      {/* Moon */}
      {showMoon && (
        <div 
          className="moon"
          style={{
            left: `${celestialPosition.x}%`,
            top: `${celestialPosition.y}%`,
          }}
        >
          <div className="moon-surface" />
          <div className="moon-glow" />
        </div>
      )}

      {/* Rainbow */}
      {showRainbow && (
        <div className="rainbow">
          <div className="rainbow-arc" />
        </div>
      )}

      {/* Clouds Layer */}
      {showClouds && (
        <div className="clouds-layer">
          {clouds.map(cloud => (
            <div
              key={cloud.id}
              className={`cloud ${weather === 'stormy' ? 'storm-cloud' : ''}`}
              style={{
                top: `${cloud.top}%`,
                width: `${cloud.size}px`,
                opacity: cloud.opacity,
                animationDuration: `${cloud.duration}s`,
                animationDelay: `${cloud.delay}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Mountains Layer (Distant) */}
      <div className="mountains-layer">
        <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="mountains-svg">
          <path
            d="M0,200 L0,120 Q100,80 200,100 T400,90 T600,110 T800,85 T1000,100 T1200,95 L1200,200 Z"
            className={`mountain-back ${isNight ? 'night' : ''}`}
          />
          <path
            d="M0,200 L0,140 Q150,100 300,130 T600,115 T900,135 T1200,120 L1200,200 Z"
            className={`mountain-front ${isNight ? 'night' : ''}`}
          />
        </svg>
      </div>

      {/* Trees Layer */}
      <div className="trees-layer">
        <div className="tree tree-1" />
        <div className="tree tree-2" />
        <div className="tree tree-3" />
        <div className="tree tree-4" />
        <div className="tree tree-5" />
      </div>

      {/* Ground Layer */}
      <div className="ground-layer">
        <div className="grass-strip" />
        <div className="dirt-path" />
      </div>

      <style>{`
        .background-scene {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        .sky-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: background 2s ease;
        }

        .weather-overlay-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: background-color 1s ease;
          pointer-events: none;
        }

        /* Stars */
        .stars-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 50%;
        }

        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: star-twinkle ease-in-out infinite;
        }

        @keyframes star-twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        /* Sun */
        .sun {
          position: absolute;
          width: 80px;
          height: 80px;
          transform: translate(-50%, -50%);
          transition: left 2s ease, top 2s ease;
        }

        .sun-core {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, #FFD700 0%, #FFA500 70%, transparent 100%);
          border-radius: 50%;
          animation: sun-pulse 3s ease-in-out infinite;
        }

        .sun-rays {
          position: absolute;
          width: 150%;
          height: 150%;
          top: -25%;
          left: -25%;
          background: radial-gradient(circle, rgba(255, 200, 50, 0.3) 0%, transparent 70%);
          animation: sun-rays-rotate 20s linear infinite;
        }

        @keyframes sun-pulse {
          0%, 100% { 
            transform: scale(1);
            filter: drop-shadow(0 0 20px rgba(255, 200, 50, 0.6));
          }
          50% { 
            transform: scale(1.05);
            filter: drop-shadow(0 0 30px rgba(255, 200, 50, 0.8));
          }
        }

        @keyframes sun-rays-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Moon */
        .moon {
          position: absolute;
          width: 60px;
          height: 60px;
          transform: translate(-50%, -50%);
          transition: left 2s ease, top 2s ease;
        }

        .moon-surface {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 30%, #F5F5F5 0%, #D3D3D3 50%, #A9A9A9 100%);
          border-radius: 50%;
          box-shadow: inset -10px -5px 20px rgba(0, 0, 0, 0.3);
        }

        .moon-glow {
          position: absolute;
          width: 150%;
          height: 150%;
          top: -25%;
          left: -25%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
        }

        /* Rainbow */
        .rainbow {
          position: absolute;
          top: 10%;
          left: 10%;
          width: 80%;
          height: 40%;
          pointer-events: none;
        }

        .rainbow-arc {
          position: absolute;
          width: 100%;
          height: 200%;
          border-radius: 50%;
          background: conic-gradient(
            from 180deg,
            transparent 0deg,
            red 0deg,
            orange 30deg,
            yellow 60deg,
            green 90deg,
            blue 120deg,
            indigo 150deg,
            violet 180deg,
            transparent 180deg
          );
          opacity: 0.4;
          mask: radial-gradient(
            ellipse 50% 100% at 50% 100%,
            transparent 70%,
            black 70%,
            black 75%,
            transparent 75%
          );
          -webkit-mask: radial-gradient(
            ellipse 50% 100% at 50% 100%,
            transparent 70%,
            black 70%,
            black 75%,
            transparent 75%
          );
        }

        /* Clouds */
        .clouds-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 50%;
          overflow: hidden;
        }

        .cloud {
          position: absolute;
          left: -20%;
          height: 40px;
          background: white;
          border-radius: 50px;
          animation: cloud-drift linear infinite;
          filter: blur(2px);
        }

        .cloud::before,
        .cloud::after {
          content: '';
          position: absolute;
          background: white;
          border-radius: 50%;
        }

        .cloud::before {
          width: 50%;
          height: 120%;
          top: -50%;
          left: 20%;
        }

        .cloud::after {
          width: 40%;
          height: 100%;
          top: -40%;
          left: 55%;
        }

        .storm-cloud {
          background: #4A4A4A;
        }

        .storm-cloud::before,
        .storm-cloud::after {
          background: #4A4A4A;
        }

        @keyframes cloud-drift {
          from { transform: translateX(-100%); }
          to { transform: translateX(calc(100vw + 100%)); }
        }

        /* Mountains */
        .mountains-layer {
          position: absolute;
          bottom: 25%;
          left: 0;
          width: 100%;
          height: 30%;
        }

        .mountains-svg {
          width: 100%;
          height: 100%;
        }

        .mountain-back {
          fill: #6B8E23;
          opacity: 0.6;
        }

        .mountain-back.night {
          fill: #2F4F4F;
        }

        .mountain-front {
          fill: #556B2F;
          opacity: 0.8;
        }

        .mountain-front.night {
          fill: #1C3A1C;
        }

        /* Trees */
        .trees-layer {
          position: absolute;
          bottom: 15%;
          left: 0;
          width: 100%;
          height: 20%;
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
        }

        .tree {
          width: 30px;
          height: 60px;
          position: relative;
          animation: tree-sway 4s ease-in-out infinite;
        }

        .tree::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 20px;
          background: #8B4513;
          border-radius: 2px;
        }

        .tree::after {
          content: '';
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 50px solid #228B22;
          filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.2));
        }

        .tree-1 { height: 50px; animation-delay: 0s; }
        .tree-2 { height: 70px; animation-delay: 0.5s; }
        .tree-3 { height: 55px; animation-delay: 1s; }
        .tree-4 { height: 65px; animation-delay: 1.5s; }
        .tree-5 { height: 45px; animation-delay: 2s; }

        @keyframes tree-sway {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }

        /* Ground */
        .ground-layer {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 20%;
        }

        .grass-strip {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 40%;
          background: linear-gradient(180deg, #7CB342 0%, #689F38 100%);
        }

        .dirt-path {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60%;
          background: linear-gradient(180deg, #8D6E63 0%, #6D4C41 100%);
        }
      `}</style>
    </div>
  );
};

export default BackgroundScene;
