import { CropSlot, CropType, GrowthStage } from '../types';
import { useFarmStore } from '../stores/useFarmStore';
import { CROPS } from '../constants/crops';

/**
 * CropSystem manages crop lifecycles including growth, watering, fertilizing, and harvesting.
 * Growth stages progression:
 * - seed: 0-20% growth
 * - sprout: 20-40% growth
 * - growing: 40-80% growth
 * - mature: 80-100% growth (harvestable!)
 * - overripe: 100%+ for too long (reduced sell price)
 * - withered: If left too long or no water (worthless)
 */
export class CropSystem {
  private updateInterval: number | null = null;
  private lastUpdateTime: number = 0;
  private isRunning: boolean = false;

  /**
   * Start the growth update loop (updates every tick)
   */
  start(): void {
    if (this.isRunning) return;
    
    this.isRunning = true;
    this.lastUpdateTime = Date.now();
    console.log('[CropSystem] Started');
  }

  /**
   * Stop the growth update loop
   */
  stop(): void {
    this.isRunning = false;
    if (this.updateInterval !== null) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
    console.log('[CropSystem] Stopped');
  }

  /**
   * Update all crops - called every tick (1 second)
   */
  updateCrops(): void {
    if (!this.isRunning) return;

    const now = Date.now();
    const deltaTime = now - this.lastUpdateTime;
    this.lastUpdateTime = now;

    // Update crop growth via the farm store
    const farmStore = useFarmStore.getState();
    farmStore.updateCropGrowth(deltaTime);
  }

  /**
   * Plant a crop in a specific slot
   */
  plantCrop(row: number, col: number, cropType: CropType): CropSlot | null {
    const farmStore = useFarmStore.getState();
    const success = farmStore.plantCrop(row, col, cropType);
    
    if (success) {
      return farmStore.getCropAt(row, col);
    }
    return null;
  }

  /**
   * Calculate current growth stage based on growth progress
   */
  calculateGrowthStage(crop: CropSlot): GrowthStage {
    if (crop.health <= 0) return 'withered';
    
    const progress = crop.growthProgress;
    
    // Overripe threshold: stayed at mature for 2x growth time
    // This is tracked by progress exceeding 120%
    if (progress >= 140) return 'withered'; // Too long, completely dead
    if (progress >= 120) return 'overripe';
    if (progress >= 80) return 'mature';
    if (progress >= 40) return 'growing';
    if (progress >= 20) return 'sprout';
    return 'seed';
  }

  /**
   * Calculate growth progress (0-100, can exceed for overripe)
   */
  calculateGrowthProgress(crop: CropSlot): number {
    const elapsed = Date.now() - crop.plantedAt;
    const growthTime = crop.cropType.growthTime;
    
    // Base progress
    let progress = (elapsed / growthTime) * 100;
    
    // Apply water effect
    if (crop.waterLevel < 20) {
      progress *= 0.5; // Growth slows by 50% if low water
    }
    
    // Apply fertilizer boost
    if (crop.fertilizerLevel > 0) {
      progress *= 1 + (crop.fertilizerLevel / 400); // Up to 25% boost
    }
    
    return Math.min(150, progress); // Cap at 150% for tracking overripe/withered
  }

  /**
   * Check if crop is ready to harvest (mature stage)
   */
  isHarvestable(crop: CropSlot): boolean {
    return crop.growthStage === 'mature';
  }

  /**
   * Check if crop can still be harvested (mature or overripe)
   */
  canHarvest(crop: CropSlot): boolean {
    return crop.growthStage === 'mature' || crop.growthStage === 'overripe';
  }

  /**
   * Get the sell price multiplier based on crop state
   */
  getSellPriceMultiplier(crop: CropSlot): number {
    switch (crop.growthStage) {
      case 'mature':
        return 1.0;
      case 'overripe':
        return 0.5; // 50% price
      case 'withered':
        return 0; // Worthless
      default:
        return 0; // Not ready
    }
  }

  /**
   * Calculate the actual sell price for a crop
   */
  calculateSellPrice(crop: CropSlot): number {
    const basePrice = crop.cropType.sellPrice;
    const multiplier = this.getSellPriceMultiplier(crop);
    return Math.floor(basePrice * multiplier);
  }

  /**
   * Attempt to harvest (returns success and crop data)
   */
  harvestCrop(row: number, col: number): { success: boolean; crop?: CropSlot; price?: number } {
    const farmStore = useFarmStore.getState();
    const crop = farmStore.getCropAt(row, col);
    
    if (!crop) {
      return { success: false };
    }

    if (!this.canHarvest(crop)) {
      return { success: false };
    }

    const price = this.calculateSellPrice(crop);
    const harvestedCrop = farmStore.harvestCrop(row, col);
    
    if (harvestedCrop) {
      return { success: true, crop: harvestedCrop, price };
    }
    
    return { success: false };
  }

  /**
   * Water a crop at the specified position
   */
  waterCrop(row: number, col: number): void {
    const farmStore = useFarmStore.getState();
    farmStore.waterCrop(row, col);
  }

  /**
   * Fertilize a crop at the specified position
   */
  fertilizeCrop(row: number, col: number): void {
    const farmStore = useFarmStore.getState();
    farmStore.fertilizeCrop(row, col);
  }

  /**
   * Get time until next growth stage
   */
  getTimeToNextStage(crop: CropSlot): number {
    const progress = crop.growthProgress;
    let targetProgress: number;
    
    if (progress < 20) targetProgress = 20;
    else if (progress < 40) targetProgress = 40;
    else if (progress < 80) targetProgress = 80;
    else if (progress < 100) targetProgress = 100;
    else return 0; // Already mature or beyond
    
    const remainingProgress = targetProgress - progress;
    const growthRate = 100 / crop.cropType.growthTime; // % per ms
    
    // Adjust for water level
    let effectiveRate = growthRate;
    if (crop.waterLevel < 20) {
      effectiveRate *= 0.5;
    }
    if (crop.fertilizerLevel > 0) {
      effectiveRate *= 1 + (crop.fertilizerLevel / 400);
    }
    
    return remainingProgress / effectiveRate / 1000; // Convert to seconds
  }

  /**
   * Get all crops that need attention (low water, overripe, etc.)
   */
  getCropsNeedingAttention(): { row: number; col: number; crop: CropSlot; reason: string }[] {
    const farmStore = useFarmStore.getState();
    const { grid } = farmStore;
    const result: { row: number; col: number; crop: CropSlot; reason: string }[] = [];
    
    grid.forEach((gridRow, row) => {
      gridRow.forEach((crop, col) => {
        if (!crop) return;
        
        if (crop.waterLevel < 20) {
          result.push({ row, col, crop, reason: 'needs_water' });
        }
        if (crop.growthStage === 'overripe') {
          result.push({ row, col, crop, reason: 'overripe' });
        }
        if (crop.growthStage === 'mature') {
          result.push({ row, col, crop, reason: 'ready_harvest' });
        }
      });
    });
    
    return result;
  }

  /**
   * Get crop by ID
   */
  getCropById(cropTypeId: string): CropType | undefined {
    return CROPS[cropTypeId];
  }
}

// Export singleton instance
export const cropSystem = new CropSystem();
