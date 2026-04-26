import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GamePhase, WeatherType, Crow } from '../types';

interface GameState {
  // State
  phase: GamePhase;
  weather: WeatherType;
  dayNumber: number;
  timeOfDay: number; // 0-100 representing day progress
  isPaused: boolean;
  lastUpdateTime: number;
  
  // Crow disaster state
  activeCrows: Crow[];
  hasScarecrow: boolean; // Reduces crow spawn rate by 50%

  // Actions
  setPhase: (phase: GamePhase) => void;
  setWeather: (weather: WeatherType) => void;
  advanceDay: () => void;
  updateTimeOfDay: (delta: number) => void;
  togglePause: () => void;
  startGame: () => void;
  endGame: () => void;
  resetGame: () => void;
  
  // Crow actions
  addCrow: (crow: Crow) => void;
  removeCrow: (crowId: string) => void;
  updateCrow: (crowId: string, updates: Partial<Crow>) => void;
  clearCrows: () => void;
  setScarecrow: (has: boolean) => void;
}

// Weather probabilities (total = 100)
const WEATHER_WEIGHTS: Record<WeatherType, number> = {
  sunny: 40,
  rainy: 25,
  stormy: 10,
  snowy: 5,
  foggy: 15,
  rainbow: 5,
};

// Helper function to get random weather based on weights
function getRandomWeather(): WeatherType {
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

export const useGameStore = create<GameState>()(
  persist(
    (set, _get) => ({
      // Initial state
      phase: 'menu',
      weather: 'sunny',
      dayNumber: 1,
      timeOfDay: 0,
      isPaused: false,
      lastUpdateTime: Date.now(),
      
      // Crow state
      activeCrows: [],
      hasScarecrow: false,

      // Actions
      setPhase: (phase) => set({ phase }),

      setWeather: (weather) => set({ weather }),

      advanceDay: () => set((state) => ({
        dayNumber: state.dayNumber + 1,
        timeOfDay: 0,
        // Randomize weather for new day
        weather: getRandomWeather(),
      })),

      updateTimeOfDay: (delta) => set((state) => {
        const newTime = state.timeOfDay + delta;
        if (newTime >= 100) {
          // Day has ended, advance to next day
          return {
            timeOfDay: 0,
            dayNumber: state.dayNumber + 1,
            weather: getRandomWeather(),
          };
        }
        return { timeOfDay: newTime };
      }),

      togglePause: () => set((state) => ({
        isPaused: !state.isPaused,
        phase: state.isPaused ? 'playing' : 'paused',
      })),

      startGame: () => set({
        phase: 'playing',
        isPaused: false,
        lastUpdateTime: Date.now(),
      }),

      endGame: () => set({
        phase: 'gameover',
        isPaused: false,
      }),

      resetGame: () => set({
        phase: 'menu',
        weather: 'sunny',
        dayNumber: 1,
        timeOfDay: 0,
        isPaused: false,
        lastUpdateTime: Date.now(),
        activeCrows: [],
      }),
      
      // Crow actions
      addCrow: (crow) => set((state) => ({
        activeCrows: [...state.activeCrows, crow],
      })),
      
      removeCrow: (crowId) => set((state) => ({
        activeCrows: state.activeCrows.filter(c => c.id !== crowId),
      })),
      
      updateCrow: (crowId, updates) => set((state) => ({
        activeCrows: state.activeCrows.map(c =>
          c.id === crowId ? { ...c, ...updates } : c
        ),
      })),
      
      clearCrows: () => set({ activeCrows: [] }),
      
      setScarecrow: (has) => set({ hasScarecrow: has }),
    }),
    {
      name: 'game-storage',
      partialize: (state) => ({
        weather: state.weather,
        dayNumber: state.dayNumber,
        hasScarecrow: state.hasScarecrow,
      }),
    }
  )
);
