import { WeatherType, WeatherEffect } from '../types';
import { useGameStore } from '../stores/useGameStore';

// Weather probabilities (total = 100)
const WEATHER_WEIGHTS: Record<WeatherType, number> = {
  sunny: 40,
  rainy: 25,
  stormy: 10,
  snowy: 5,
  foggy: 15,
  rainbow: 5,
};

// Weather effect configurations
const WEATHER_EFFECTS: Record<WeatherType, WeatherEffect> = {
  sunny: { 
    growthMultiplier: 1.0, 
    harvestTimeMultiplier: 1.0, 
    wateringEffect: 'none', 
    typingEffect: 'normal' 
  },
  rainy: { 
    growthMultiplier: 1.2, 
    harvestTimeMultiplier: 1.0, 
    wateringEffect: 'auto', 
    typingEffect: 'normal' 
  },
  stormy: { 
    growthMultiplier: 1.0, 
    harvestTimeMultiplier: 1.0, 
    wateringEffect: 'auto', 
    typingEffect: 'shaking' 
  },
  snowy: { 
    growthMultiplier: 0.8, 
    harvestTimeMultiplier: 0.5, 
    wateringEffect: 'none', 
    typingEffect: 'normal' 
  },
  foggy: { 
    growthMultiplier: 1.0, 
    harvestTimeMultiplier: 1.0, 
    wateringEffect: 'none', 
    typingEffect: 'foggy' 
  },
  rainbow: { 
    growthMultiplier: 1.0, 
    harvestTimeMultiplier: 2.0, 
    wateringEffect: 'none', 
    typingEffect: 'normal' 
  },
};

// Weather descriptions for UI
export const WEATHER_DESCRIPTIONS: Record<WeatherType, { emoji: string; name: string; effect: string }> = {
  sunny: { 
    emoji: '☀️', 
    name: 'Sunny', 
    effect: 'Normal conditions' 
  },
  rainy: { 
    emoji: '🌧️', 
    name: 'Rainy', 
    effect: 'Crops grow 20% faster, auto-water' 
  },
  stormy: { 
    emoji: '⛈️', 
    name: 'Stormy', 
    effect: 'Text shakes while typing!' 
  },
  snowy: { 
    emoji: '❄️', 
    name: 'Snowy', 
    effect: 'Time limits reduced by 50%' 
  },
  foggy: { 
    emoji: '🌫️', 
    name: 'Foggy', 
    effect: 'Some letters hidden/blurred' 
  },
  rainbow: { 
    emoji: '🌈', 
    name: 'Rainbow', 
    effect: 'Harvest time doubled!' 
  },
};

/**
 * WeatherSystem manages weather changes and their effects on gameplay.
 * Weather affects crop growth, typing challenges, and harvest timers.
 */
export class WeatherSystem {
  private weatherChangeInterval: number | null = null;
  private isRunning: boolean = false;
  private lastWeatherChange: number = 0;
  
  // Minimum and maximum time between weather changes (2-5 minutes)
  private readonly MIN_CHANGE_INTERVAL = 2 * 60 * 1000; // 2 minutes
  private readonly MAX_CHANGE_INTERVAL = 5 * 60 * 1000; // 5 minutes

  /**
   * Start automatic weather changes
   */
  start(): void {
    if (this.isRunning) return;
    
    this.isRunning = true;
    this.lastWeatherChange = Date.now();
    this.scheduleNextWeatherChange();
    console.log('[WeatherSystem] Started');
  }

  /**
   * Stop weather system
   */
  stop(): void {
    this.isRunning = false;
    if (this.weatherChangeInterval !== null) {
      clearTimeout(this.weatherChangeInterval);
      this.weatherChangeInterval = null;
    }
    console.log('[WeatherSystem] Stopped');
  }

  /**
   * Schedule the next weather change
   */
  private scheduleNextWeatherChange(): void {
    if (!this.isRunning) return;
    
    const interval = this.MIN_CHANGE_INTERVAL + 
      Math.random() * (this.MAX_CHANGE_INTERVAL - this.MIN_CHANGE_INTERVAL);
    
    this.weatherChangeInterval = window.setTimeout(() => {
      this.changeWeather();
      this.scheduleNextWeatherChange();
    }, interval);
  }

  /**
   * Change to a new random weather
   */
  private changeWeather(): void {
    const newWeather = this.getRandomWeather();
    this.setWeather(newWeather);
    this.lastWeatherChange = Date.now();
    console.log(`[WeatherSystem] Weather changed to: ${newWeather}`);
  }

  /**
   * Manually change weather
   */
  setWeather(weather: WeatherType): void {
    useGameStore.getState().setWeather(weather);
  }

  /**
   * Get current weather from store
   */
  getCurrentWeather(): WeatherType {
    return useGameStore.getState().weather;
  }

  /**
   * Get current weather effects
   */
  getCurrentEffects(): WeatherEffect {
    const weather = this.getCurrentWeather();
    return WEATHER_EFFECTS[weather];
  }

  /**
   * Get effects for a specific weather type
   */
  getEffectsForWeather(weather: WeatherType): WeatherEffect {
    return WEATHER_EFFECTS[weather];
  }

  /**
   * Get weather description
   */
  getWeatherDescription(weather: WeatherType): { emoji: string; name: string; effect: string } {
    return WEATHER_DESCRIPTIONS[weather];
  }

  /**
   * Get random next weather (weighted probabilities)
   */
  getRandomWeather(): WeatherType {
    const totalWeight = Object.values(WEATHER_WEIGHTS).reduce((sum, w) => sum + w, 0);
    let random = Math.random() * totalWeight;
    
    for (const [weather, weight] of Object.entries(WEATHER_WEIGHTS)) {
      random -= weight;
      if (random <= 0) {
        return weather as WeatherType;
      }
    }
    
    return 'sunny'; // Fallback
  }

  /**
   * Get likely next weather (for forecast)
   * Returns top 3 most likely weather types
   */
  getForecast(): { weather: WeatherType; probability: number }[] {
    const totalWeight = Object.values(WEATHER_WEIGHTS).reduce((sum, w) => sum + w, 0);
    
    return Object.entries(WEATHER_WEIGHTS)
      .map(([weather, weight]) => ({
        weather: weather as WeatherType,
        probability: Math.round((weight / totalWeight) * 100),
      }))
      .sort((a, b) => b.probability - a.probability)
      .slice(0, 3);
  }

  /**
   * Get time until next weather change (approximate)
   */
  getTimeUntilChange(): number {
    const elapsed = Date.now() - this.lastWeatherChange;
    const remaining = this.MIN_CHANGE_INTERVAL - elapsed;
    return Math.max(0, remaining);
  }

  /**
   * Check if weather has auto-watering effect
   */
  hasAutoWatering(): boolean {
    return this.getCurrentEffects().wateringEffect === 'auto';
  }

  /**
   * Get growth multiplier for current weather
   */
  getGrowthMultiplier(): number {
    return this.getCurrentEffects().growthMultiplier;
  }

  /**
   * Get harvest time multiplier for current weather
   */
  getHarvestTimeMultiplier(): number {
    return this.getCurrentEffects().harvestTimeMultiplier;
  }

  /**
   * Get typing effect for current weather
   */
  getTypingEffect(): 'normal' | 'shaking' | 'foggy' {
    return this.getCurrentEffects().typingEffect;
  }
}

// Singleton instance
export const weatherSystem = new WeatherSystem();
