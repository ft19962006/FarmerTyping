import { useEffect, useRef, useCallback } from 'react';
import { cropSystem } from '../game/CropSystem';
import { weatherSystem } from '../game/WeatherSystem';
import { crowSystem } from '../game/CrowSystem';
import { useGameStore } from '../stores/useGameStore';
import { useFarmStore } from '../stores/useFarmStore';

/**
 * A hook that manages the main game loop.
 * Handles crop growth updates, time progression, weather, and disasters.
 */
export function useGameLoop() {
  const phase = useGameStore((state) => state.phase);
  const isPaused = useGameStore((state) => state.isPaused);
  const updateTimeOfDay = useGameStore((state) => state.updateTimeOfDay);
  
  const frameRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const accumulatedTimeRef = useRef<number>(0);

  // Game tick interval (1 second in ms)
  const TICK_INTERVAL = 1000;
  // Time of day increment per tick (day lasts about 5 minutes)
  const TIME_INCREMENT = 100 / 300; // ~0.33% per second

  const gameLoop = useCallback((timestamp: number) => {
    if (lastTimeRef.current === 0) {
      lastTimeRef.current = timestamp;
    }
    
    const deltaTime = timestamp - lastTimeRef.current;
    accumulatedTimeRef.current += deltaTime;
    lastTimeRef.current = timestamp;

    // Update every second
    if (accumulatedTimeRef.current >= TICK_INTERVAL) {
      const ticks = Math.floor(accumulatedTimeRef.current / TICK_INTERVAL);
      accumulatedTimeRef.current %= TICK_INTERVAL;

      // Update crops (applies weather effects internally)
      cropSystem.updateCrops();
      
      // Update crow system (check for steals)
      crowSystem.update();
      
      // Update time of day
      updateTimeOfDay(TIME_INCREMENT * ticks);
    }

    frameRef.current = requestAnimationFrame(gameLoop);
  }, [updateTimeOfDay]);

  useEffect(() => {
    // Only run game loop when playing and not paused
    if (phase !== 'playing' || isPaused) {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = undefined;
      }
      cropSystem.stop();
      weatherSystem.stop();
      crowSystem.stop();
      return;
    }

    // Start all systems
    cropSystem.start();
    weatherSystem.start();
    crowSystem.start();
    
    lastTimeRef.current = 0;
    accumulatedTimeRef.current = 0;
    frameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      cropSystem.stop();
      weatherSystem.stop();
      crowSystem.stop();
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = undefined;
      }
    };
  }, [phase, isPaused, gameLoop]);

  return {
    isRunning: phase === 'playing' && !isPaused,
  };
}

/**
 * Hook to get real-time crop updates
 * Triggers re-render on farm grid changes
 */
export function useCropUpdates() {
  const grid = useFarmStore((state) => state.grid);
  const selectedSlot = useFarmStore((state) => state.selectedSlot);
  
  return {
    grid,
    selectedSlot,
    getMatureCrops: useFarmStore.getState().getMatureCrops,
    getCropAt: useFarmStore.getState().getCropAt,
  };
}
