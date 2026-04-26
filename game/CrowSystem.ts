import { Crow } from '../types';
import { useFarmStore } from '../stores/useFarmStore';
import { useGameStore } from '../stores/useGameStore';

// Short words for crow chase (4-6 letters)
const CROW_WORDS = [
  'crow', 'bird', 'shoo', 'away', 'scat', 'flee',
  'chase', 'scary', 'quick', 'fast', 'guard', 'help',
  'watch', 'alert', 'save', 'crops', 'farm', 'pest',
];

/**
 * CrowSystem manages crow disasters that attack mature crops.
 * Players must type words quickly to chase crows away before they steal crops.
 */
export class CrowSystem {
  private crows: Crow[] = [];
  private spawnInterval: number | null = null;
  private updateInterval: number | null = null;
  private isRunning: boolean = false;
  
  // Spawn interval: every 30-60 seconds (can be reduced by scarecrow)
  private readonly MIN_SPAWN_INTERVAL = 30 * 1000;
  private readonly MAX_SPAWN_INTERVAL = 60 * 1000;
  
  // Time before crow steals crop
  private readonly STEAL_TIME = 10 * 1000; // 10 seconds

  /**
   * Start spawning crows
   */
  start(): void {
    if (this.isRunning) return;
    
    this.isRunning = true;
    this.scheduleNextSpawn();
    this.startUpdateLoop();
    console.log('[CrowSystem] Started');
  }

  /**
   * Stop crow spawning
   */
  stop(): void {
    this.isRunning = false;
    
    if (this.spawnInterval !== null) {
      clearTimeout(this.spawnInterval);
      this.spawnInterval = null;
    }
    
    if (this.updateInterval !== null) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
    
    console.log('[CrowSystem] Stopped');
  }

  /**
   * Schedule next crow spawn
   */
  private scheduleNextSpawn(): void {
    if (!this.isRunning) return;
    
    let interval = this.MIN_SPAWN_INTERVAL + 
      Math.random() * (this.MAX_SPAWN_INTERVAL - this.MIN_SPAWN_INTERVAL);
    
    // Check for scarecrow - reduces spawn rate by 50%
    const hasScarecrow = useGameStore.getState().hasScarecrow;
    if (hasScarecrow) {
      interval *= 2; // Double the interval (spawn half as often)
    }
    
    this.spawnInterval = window.setTimeout(() => {
      this.spawnCrow();
      this.scheduleNextSpawn();
    }, interval);
  }

  /**
   * Start the update loop for checking crow timeouts
   */
  private startUpdateLoop(): void {
    this.updateInterval = window.setInterval(() => {
      this.update();
    }, 1000);
  }

  /**
   * Spawn a crow on a random mature crop
   */
  spawnCrow(): Crow | null {
    const farmStore = useFarmStore.getState();
    const matureCrops = farmStore.getMatureCrops();
    
    if (matureCrops.length === 0) {
      console.log('[CrowSystem] No mature crops to attack');
      return null;
    }
    
    // Pick a random mature crop
    const target = matureCrops[Math.floor(Math.random() * matureCrops.length)];
    
    // Check if there's already a crow on this slot
    const existingCrow = this.crows.find(
      c => c.targetSlot.row === target.row && c.targetSlot.col === target.col
    );
    if (existingCrow) {
      console.log('[CrowSystem] Slot already has a crow');
      return null;
    }
    
    // Create new crow
    const crow: Crow = {
      id: `crow-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      targetSlot: { row: target.row, col: target.col },
      landedAt: Date.now(),
      wordToChase: CROW_WORDS[Math.floor(Math.random() * CROW_WORDS.length)],
      isBeingChased: false,
    };
    
    this.crows.push(crow);
    
    // Update store
    useGameStore.getState().addCrow(crow);
    
    console.log(`[CrowSystem] Crow spawned at (${target.row}, ${target.col})`);
    return crow;
  }

  /**
   * Get all active crows
   */
  getCrows(): Crow[] {
    return [...this.crows];
  }

  /**
   * Get crow by ID
   */
  getCrow(crowId: string): Crow | undefined {
    return this.crows.find(c => c.id === crowId);
  }

  /**
   * Get crow at a specific slot
   */
  getCrowAtSlot(row: number, col: number): Crow | undefined {
    return this.crows.find(
      c => c.targetSlot.row === row && c.targetSlot.col === col
    );
  }

  /**
   * Start chasing a crow (triggers typing challenge)
   */
  startChasing(crowId: string): void {
    const crow = this.crows.find(c => c.id === crowId);
    if (crow) {
      crow.isBeingChased = true;
      console.log(`[CrowSystem] Started chasing crow ${crowId}`);
    }
  }

  /**
   * Successfully chased crow away
   */
  chaseCrow(crowId: string): void {
    const index = this.crows.findIndex(c => c.id === crowId);
    if (index !== -1) {
      this.crows.splice(index, 1);
      useGameStore.getState().removeCrow(crowId);
      console.log(`[CrowSystem] Crow ${crowId} chased away!`);
    }
  }

  /**
   * Crow steals crop (after timeout)
   */
  crowSteals(crowId: string): void {
    const crow = this.crows.find(c => c.id === crowId);
    if (!crow) return;
    
    // Remove the crop
    const farmStore = useFarmStore.getState();
    farmStore.removeCrop(crow.targetSlot.row, crow.targetSlot.col);
    
    // Remove the crow
    this.crows = this.crows.filter(c => c.id !== crowId);
    useGameStore.getState().removeCrow(crowId);
    
    console.log(`[CrowSystem] Crow ${crowId} stole crop at (${crow.targetSlot.row}, ${crow.targetSlot.col})!`);
  }

  /**
   * Check and process crow timeouts
   */
  update(): void {
    if (!this.isRunning) return;
    
    const now = Date.now();
    
    for (const crow of [...this.crows]) {
      // Skip if being actively chased
      if (crow.isBeingChased) continue;
      
      // Check if steal time has passed
      const elapsed = now - crow.landedAt;
      if (elapsed >= this.STEAL_TIME) {
        this.crowSteals(crow.id);
      }
    }
  }

  /**
   * Get remaining time before crow steals (in seconds)
   */
  getTimeRemaining(crowId: string): number {
    const crow = this.crows.find(c => c.id === crowId);
    if (!crow) return 0;
    
    const elapsed = Date.now() - crow.landedAt;
    const remaining = this.STEAL_TIME - elapsed;
    return Math.max(0, Math.ceil(remaining / 1000));
  }

  /**
   * Clear all crows
   */
  clearAllCrows(): void {
    this.crows = [];
    // Clear from store
    const gameStore = useGameStore.getState();
    for (const crow of gameStore.activeCrows) {
      gameStore.removeCrow(crow.id);
    }
    console.log('[CrowSystem] All crows cleared');
  }

  /**
   * Check if there are any active crows
   */
  hasActiveCrows(): boolean {
    return this.crows.length > 0;
  }
}

// Singleton instance
export const crowSystem = new CrowSystem();
