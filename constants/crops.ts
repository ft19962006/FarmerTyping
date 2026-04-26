import { CropType } from '../types';

export const CROPS: Record<string, CropType> = {
  carrot: {
    id: 'carrot',
    name: '紅蘿蔔',
    emoji: '🥕',
    difficulty: 1,
    minWordLength: 3,
    maxWordLength: 4,
    growthTime: 30000,  // 30 seconds
    harvestTimeLimit: 8,
    sellPrice: 5,
  },
  onion: {
    id: 'onion',
    name: '洋蔥',
    emoji: '🧅',
    difficulty: 1,
    minWordLength: 3,
    maxWordLength: 5,
    growthTime: 45000,
    harvestTimeLimit: 8,
    sellPrice: 8,
  },
  tomato: {
    id: 'tomato',
    name: '番茄',
    emoji: '🍅',
    difficulty: 2,
    minWordLength: 4,
    maxWordLength: 5,
    growthTime: 60000,
    harvestTimeLimit: 7,
    sellPrice: 10,
  },
  lettuce: {
    id: 'lettuce',
    name: '生菜',
    emoji: '🥬',
    difficulty: 2,
    minWordLength: 4,
    maxWordLength: 6,
    growthTime: 50000,
    harvestTimeLimit: 7,
    sellPrice: 12,
  },
  corn: {
    id: 'corn',
    name: '粟米',
    emoji: '🌽',
    difficulty: 3,
    minWordLength: 5,
    maxWordLength: 7,
    growthTime: 90000,
    harvestTimeLimit: 6,
    sellPrice: 20,
  },
  pumpkin: {
    id: 'pumpkin',
    name: '南瓜',
    emoji: '🎃',
    difficulty: 3,
    minWordLength: 6,
    maxWordLength: 8,
    growthTime: 150000,
    harvestTimeLimit: 5,
    sellPrice: 40,
  },
};

// Seed prices (cost to buy seeds)
export const SEED_PRICES: Record<string, number> = {
  carrot: 2,
  onion: 3,
  tomato: 5,
  lettuce: 6,
  corn: 10,
  pumpkin: 20,
};

// Default unlocked crops for new players
export const DEFAULT_UNLOCKED_CROPS = ['carrot', 'onion'];

// Grid configuration
export const DEFAULT_GRID_SIZE = { rows: 3, cols: 4 };
export const MAX_GRID_SIZE = { rows: 5, cols: 6 };

// Starting resources
export const STARTING_GOLD = 50;
export const STARTING_SEEDS: Record<string, number> = {
  carrot: 5,
  onion: 3,
};
