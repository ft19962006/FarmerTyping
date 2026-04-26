import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CropSlot, CropType, GrowthStage } from '../types';
import { DEFAULT_GRID_SIZE, MAX_GRID_SIZE } from '../constants/crops';
import { generateWordForCrop } from '../utils/wordGenerator';
import { weatherSystem } from '../game/WeatherSystem';

// Expansion levels and their grid sizes
export const EXPANSION_LEVELS: { rows: number; cols: number }[] = [
  { rows: 3, cols: 4 },  // Level 0: 3x4 = 12 slots (default)
  { rows: 3, cols: 5 },  // Level 1: 3x5 = 15 slots
  { rows: 4, cols: 5 },  // Level 2: 4x5 = 20 slots
  { rows: 5, cols: 6 },  // Level 3: 5x6 = 30 slots (max)
];

interface FarmState {
  // State
  grid: (CropSlot | null)[][];
  gridSize: { rows: number; cols: number };
  selectedSlot: { row: number; col: number } | null;
  expansionLevel: number;
  hasSprinkler: boolean;
  hasScarecrow: boolean;

  // Actions
  initializeGrid: (rows?: number, cols?: number) => void;
  plantCrop: (row: number, col: number, cropType: CropType) => boolean;
  harvestCrop: (row: number, col: number) => CropSlot | null;
  removeCrop: (row: number, col: number) => void;
  updateCropGrowth: (deltaTime: number) => void;
  waterCrop: (row: number, col: number) => void;
  fertilizeCrop: (row: number, col: number) => void;
  selectSlot: (row: number, col: number) => void;
  clearSelection: () => void;
  getCropAt: (row: number, col: number) => CropSlot | null;
  getMatureCrops: () => { row: number; col: number; crop: CropSlot }[];
  expandFarm: (newRows: number, newCols: number) => boolean;
  canExpand: () => boolean;
  getNextExpansion: () => { rows: number; cols: number } | null;
  setSprinkler: (active: boolean) => void;
  setScarecrow: (active: boolean) => void;
  resetFarm: () => void;
}

// Helper to create empty grid
function createEmptyGrid(rows: number, cols: number): (CropSlot | null)[][] {
  return Array(rows).fill(null).map(() => Array(cols).fill(null));
}

// Helper to calculate growth stage based on progress
function getGrowthStage(progress: number, health: number): GrowthStage {
  if (health <= 0) return 'withered';
  if (progress >= 120) return 'overripe'; // Past optimal harvest time
  if (progress >= 100) return 'mature';
  if (progress >= 60) return 'growing';
  if (progress >= 30) return 'sprout';
  return 'seed';
}

// Generate unique ID for crop slots
function generateSlotId(): string {
  return `crop-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export const useFarmStore = create<FarmState>()(
  persist(
    (set, get) => ({
      // Initial state
      grid: createEmptyGrid(DEFAULT_GRID_SIZE.rows, DEFAULT_GRID_SIZE.cols),
      gridSize: { ...DEFAULT_GRID_SIZE },
      selectedSlot: null,
      expansionLevel: 0,
      hasSprinkler: false,
      hasScarecrow: false,

      // Actions
      initializeGrid: (rows = DEFAULT_GRID_SIZE.rows, cols = DEFAULT_GRID_SIZE.cols) => {
        set({
          grid: createEmptyGrid(rows, cols),
          gridSize: { rows, cols },
          selectedSlot: null,
        });
      },

      plantCrop: (row, col, cropType) => {
        const { grid, gridSize } = get();
        
        // Validate position
        if (row < 0 || row >= gridSize.rows || col < 0 || col >= gridSize.cols) {
          return false;
        }
        
        // Check if slot is empty
        if (grid[row][col] !== null) {
          return false;
        }

        const newCrop: CropSlot = {
          id: generateSlotId(),
          cropType,
          plantedAt: Date.now(),
          growthStage: 'seed',
          waterLevel: 50,
          fertilizerLevel: 0,
          health: 100,
          wordToHarvest: generateWordForCrop(cropType),
          growthProgress: 0,
        };

        const newGrid = grid.map((gridRow, r) =>
          gridRow.map((slot, c) => (r === row && c === col ? newCrop : slot))
        );

        set({ grid: newGrid });
        return true;
      },

      harvestCrop: (row, col) => {
        const { grid, gridSize } = get();
        
        if (row < 0 || row >= gridSize.rows || col < 0 || col >= gridSize.cols) {
          return null;
        }
        
        const crop = grid[row][col];
        if (!crop || crop.growthStage !== 'mature') {
          return null;
        }

        // Remove crop from grid
        const newGrid = grid.map((gridRow, r) =>
          gridRow.map((slot, c) => (r === row && c === col ? null : slot))
        );

        set({ grid: newGrid, selectedSlot: null });
        return crop;
      },

      removeCrop: (row, col) => {
        const { grid, gridSize } = get();
        
        if (row < 0 || row >= gridSize.rows || col < 0 || col >= gridSize.cols) {
          return;
        }

        const newGrid = grid.map((gridRow, r) =>
          gridRow.map((slot, c) => (r === row && c === col ? null : slot))
        );

        set({ grid: newGrid });
      },

      updateCropGrowth: (deltaTime) => {
        const { grid, hasSprinkler } = get();
        
        // Get weather effects
        const weatherEffects = weatherSystem.getCurrentEffects();
        const weatherGrowthMultiplier = weatherEffects.growthMultiplier;
        const hasAutoWatering = weatherEffects.wateringEffect === 'auto' || hasSprinkler;
        
        const newGrid = grid.map((gridRow) =>
          gridRow.map((slot) => {
            if (!slot) return null;

            // Calculate growth increment based on delta time
            // Growth is affected by water, fertilizer, AND weather
            const waterMultiplier = slot.waterLevel > 30 ? 1 : 0.5;
            const fertilizerMultiplier = 1 + (slot.fertilizerLevel / 200);
            const growthIncrement = (deltaTime / slot.cropType.growthTime) * 100 * waterMultiplier * fertilizerMultiplier * weatherGrowthMultiplier;

            // Decrease water level over time (slower if auto-watering from weather)
            const waterDecrement = hasAutoWatering
              ? deltaTime / 20000 // Half the decrease rate when raining
              : deltaTime / 10000; // Decrease by 1 per 10 seconds
            
            // Auto-watering effect: slowly increase water level during rain/storm
            const waterIncrement = hasAutoWatering ? deltaTime / 15000 : 0;
            
            // Calculate new values
            const newProgress = Math.min(150, slot.growthProgress + growthIncrement);
            const newWaterLevel = Math.min(100, Math.max(0, slot.waterLevel - waterDecrement + waterIncrement));
            const newFertilizer = Math.max(0, slot.fertilizerLevel - (deltaTime / 60000)); // Slow decrease
            
            // Health decreases if water is too low or if overripe
            let newHealth = slot.health;
            if (newWaterLevel <= 0) {
              newHealth = Math.max(0, slot.health - (deltaTime / 5000));
            }
            if (newProgress > 120) {
              newHealth = Math.max(0, slot.health - (deltaTime / 10000));
            }

            return {
              ...slot,
              growthProgress: newProgress,
              waterLevel: newWaterLevel,
              fertilizerLevel: newFertilizer,
              health: newHealth,
              growthStage: getGrowthStage(newProgress, newHealth),
            };
          })
        );

        set({ grid: newGrid });
      },

      waterCrop: (row, col) => {
        const { grid, gridSize } = get();
        
        if (row < 0 || row >= gridSize.rows || col < 0 || col >= gridSize.cols) {
          return;
        }
        
        const crop = grid[row][col];
        if (!crop) return;

        const newGrid = grid.map((gridRow, r) =>
          gridRow.map((slot, c) => {
            if (r === row && c === col && slot) {
              return { ...slot, waterLevel: Math.min(100, slot.waterLevel + 30) };
            }
            return slot;
          })
        );

        set({ grid: newGrid });
      },

      fertilizeCrop: (row, col) => {
        const { grid, gridSize } = get();
        
        if (row < 0 || row >= gridSize.rows || col < 0 || col >= gridSize.cols) {
          return;
        }
        
        const crop = grid[row][col];
        if (!crop) return;

        const newGrid = grid.map((gridRow, r) =>
          gridRow.map((slot, c) => {
            if (r === row && c === col && slot) {
              return { ...slot, fertilizerLevel: Math.min(100, slot.fertilizerLevel + 25) };
            }
            return slot;
          })
        );

        set({ grid: newGrid });
      },

      selectSlot: (row, col) => {
        set({ selectedSlot: { row, col } });
      },

      clearSelection: () => {
        set({ selectedSlot: null });
      },

      getCropAt: (row, col) => {
        const { grid, gridSize } = get();
        if (row < 0 || row >= gridSize.rows || col < 0 || col >= gridSize.cols) {
          return null;
        }
        return grid[row][col];
      },

      getMatureCrops: () => {
        const { grid } = get();
        const matureCrops: { row: number; col: number; crop: CropSlot }[] = [];
        
        grid.forEach((gridRow, row) => {
          gridRow.forEach((slot, col) => {
            if (slot && slot.growthStage === 'mature') {
              matureCrops.push({ row, col, crop: slot });
            }
          });
        });
        
        return matureCrops;
      },

      expandFarm: (newRows, newCols) => {
        const { grid, gridSize, expansionLevel } = get();
        
        // Validate expansion
        if (newRows < gridSize.rows || newCols < gridSize.cols) {
          return false;
        }
        if (newRows > MAX_GRID_SIZE.rows || newCols > MAX_GRID_SIZE.cols) {
          return false;
        }
        
        // Create new grid, preserving existing crops
        const newGrid: (CropSlot | null)[][] = [];
        for (let r = 0; r < newRows; r++) {
          const row: (CropSlot | null)[] = [];
          for (let c = 0; c < newCols; c++) {
            if (r < gridSize.rows && c < gridSize.cols) {
              row.push(grid[r][c]);
            } else {
              row.push(null);
            }
          }
          newGrid.push(row);
        }
        
        // Find new expansion level
        const newExpansionLevel = EXPANSION_LEVELS.findIndex(
          (exp) => exp.rows === newRows && exp.cols === newCols
        );
        
        set({
          grid: newGrid,
          gridSize: { rows: newRows, cols: newCols },
          expansionLevel: newExpansionLevel >= 0 ? newExpansionLevel : expansionLevel + 1,
        });
        
        return true;
      },

      canExpand: () => {
        const { expansionLevel } = get();
        return expansionLevel < EXPANSION_LEVELS.length - 1;
      },

      getNextExpansion: () => {
        const { expansionLevel } = get();
        if (expansionLevel < EXPANSION_LEVELS.length - 1) {
          return EXPANSION_LEVELS[expansionLevel + 1];
        }
        return null;
      },

      setSprinkler: (active) => {
        set({ hasSprinkler: active });
      },

      setScarecrow: (active) => {
        set({ hasScarecrow: active });
      },

      resetFarm: () => {
        set({
          grid: createEmptyGrid(DEFAULT_GRID_SIZE.rows, DEFAULT_GRID_SIZE.cols),
          gridSize: { ...DEFAULT_GRID_SIZE },
          selectedSlot: null,
          expansionLevel: 0,
          hasSprinkler: false,
          hasScarecrow: false,
        });
      },
    }),
    {
      name: 'farm-typing-farm',
      partialize: (state) => ({
        grid: state.grid,
        gridSize: state.gridSize,
        expansionLevel: state.expansionLevel,
        hasSprinkler: state.hasSprinkler,
        hasScarecrow: state.hasScarecrow,
      }),
    }
  )
);
