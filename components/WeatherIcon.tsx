import React, { useState } from 'react';
import { WeatherType } from '../types';
import { WEATHER_DESCRIPTIONS } from '../game/WeatherSystem';

interface WeatherIconProps {
  weather: WeatherType;
  showForecast?: boolean;
  forecast?: { weather: WeatherType; probability: number }[];
}

/**
 * Small weather indicator for HUD.
 * Shows current weather emoji with tooltip and optional forecast.
 */
export const WeatherIcon: React.FC<WeatherIconProps> = ({ 
  weather, 
  showForecast = true,
  forecast = [],
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showForecastPanel, setShowForecastPanel] = useState(false);

  const weatherInfo = WEATHER_DESCRIPTIONS[weather];

  return (
    <div 
      className="weather-icon-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowForecastPanel(false);
      }}
      onClick={() => showForecast && setShowForecastPanel(!showForecastPanel)}
    >
      <div className={`weather-icon weather-${weather}`}>
        <span className="weather-emoji">{weatherInfo.emoji}</span>
      </div>

      {/* Tooltip on hover */}
      {isHovered && !showForecastPanel && (
        <div className="weather-tooltip">
          <div className="tooltip-header">
            <span className="tooltip-emoji">{weatherInfo.emoji}</span>
            <span className="tooltip-name">{weatherInfo.name}</span>
          </div>
          <div className="tooltip-effect">{weatherInfo.effect}</div>
          {showForecast && (
            <div className="tooltip-hint">Click for forecast</div>
          )}
        </div>
      )}

      {/* Forecast panel on click */}
      {showForecastPanel && forecast.length > 0 && (
        <div className="forecast-panel">
          <div className="forecast-title">Weather Forecast</div>
          <div className="forecast-list">
            {forecast.map(({ weather: w, probability }) => {
              const info = WEATHER_DESCRIPTIONS[w];
              return (
                <div key={w} className="forecast-item">
                  <span className="forecast-emoji">{info.emoji}</span>
                  <span className="forecast-name">{info.name}</span>
                  <span className="forecast-probability">{probability}%</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <style>{`
        .weather-icon-container {
          position: relative;
          cursor: pointer;
        }

        .weather-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.9);
          border: 3px solid #8B7355;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .weather-icon:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .weather-sunny {
          background: linear-gradient(135deg, #fff8dc, #ffeeba);
        }

        .weather-rainy {
          background: linear-gradient(135deg, #e0e8f0, #c8d8e8);
        }

        .weather-stormy {
          background: linear-gradient(135deg, #6c7a89, #4a5568);
        }

        .weather-snowy {
          background: linear-gradient(135deg, #ffffff, #e0e8ff);
        }

        .weather-foggy {
          background: linear-gradient(135deg, #f0f0f0, #d0d0d0);
        }

        .weather-rainbow {
          background: linear-gradient(135deg, 
            rgba(255,0,0,0.2),
            rgba(255,127,0,0.2),
            rgba(255,255,0,0.2),
            rgba(0,255,0,0.2),
            rgba(0,0,255,0.2),
            rgba(148,0,211,0.2)
          );
        }

        .weather-emoji {
          font-size: 28px;
        }

        .weather-tooltip {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 8px;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid #8B7355;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          white-space: nowrap;
          z-index: 1000;
          animation: tooltip-fade-in 0.2s ease;
        }

        @keyframes tooltip-fade-in {
          from { opacity: 0; transform: translateX(-50%) translateY(-5px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .tooltip-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: bold;
          color: #5a4a3a;
          margin-bottom: 4px;
        }

        .tooltip-emoji {
          font-size: 24px;
        }

        .tooltip-name {
          font-size: 16px;
        }

        .tooltip-effect {
          font-size: 14px;
          color: #666;
        }

        .tooltip-hint {
          font-size: 12px;
          color: #999;
          margin-top: 8px;
          font-style: italic;
        }

        .forecast-panel {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 8px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid #8B7355;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          z-index: 1000;
          min-width: 180px;
          animation: tooltip-fade-in 0.2s ease;
        }

        .forecast-title {
          font-weight: bold;
          color: #5a4a3a;
          margin-bottom: 12px;
          text-align: center;
          font-size: 14px;
        }

        .forecast-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .forecast-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 8px;
          background: rgba(139, 115, 85, 0.1);
          border-radius: 4px;
        }

        .forecast-emoji {
          font-size: 20px;
        }

        .forecast-name {
          flex: 1;
          font-size: 14px;
          color: #5a4a3a;
        }

        .forecast-probability {
          font-size: 14px;
          font-weight: bold;
          color: #2d5a27;
        }
      `}</style>
    </div>
  );
};

export default WeatherIcon;
