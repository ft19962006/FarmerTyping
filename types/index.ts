// Game phases
export type GamePhase = 'menu' | 'playing' | 'paused' | 'gameover';
export type GrowthStage = 'seed' | 'sprout' | 'growing' | 'mature' | 'overripe' | 'withered';
export type WeatherType = 'sunny' | 'rainy' | 'stormy' | 'snowy' | 'foggy' | 'rainbow';
export type ScreenType = 'title' | 'game' | 'shop' | 'inventory' | 'settings';

// Crop related
export interface CropType {
  id: string;
  name: string;
  emoji: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  minWordLength: number;
  maxWordLength: number;
  growthTime: number;      // milliseconds
  harvestTimeLimit: number; // seconds
  sellPrice: number;
  specialMechanic?: string;
}

export interface CropSlot {
  id: string;
  cropType: CropType;
  plantedAt: number;
  growthStage: GrowthStage;
  waterLevel: number;
  fertilizerLevel: number;
  health: number;
  wordToHarvest: string;
  growthProgress: number;  // 0-100
}

// Farm
export interface Farm {
  grid: (CropSlot | null)[][];
  gridSize: { rows: number; cols: number };
}

// Player stats
export interface PlayerStats {
  wpm: number;
  accuracy: number;
  totalWordsTyped: number;
  totalCropsHarvested: number;
  bestCombo: number;
  totalGoldEarned: number;
}

// Inventory item
export interface InventoryItem {
  id: string;
  type: 'seed' | 'crop' | 'tool';
  cropTypeId?: string;
  quantity: number;
}

// Typing session
export interface TypingSession {
  targetWord: string;
  typedText: string;
  startTime: number;
  timeLimit: number;
  cropSlotId: string;
}

// Store state interfaces
export interface GameState {
  phase: GamePhase;
  weather: WeatherType;
  dayNumber: number;
  timeOfDay: number; // 0-100 representing day progress
  isPaused: boolean;
}

export interface PlayerState {
  gold: number;
  stats: PlayerStats;
  inventory: InventoryItem[];
  unlockedCrops: string[];
}

export interface FarmState {
  grid: (CropSlot | null)[][];
  gridSize: { rows: number; cols: number };
  selectedSlot: { row: number; col: number } | null;
}

export interface TypingState {
  activeSession: TypingSession | null;
  currentWPM: number;
  currentAccuracy: number;
  combo: number;
  maxCombo: number;
}

export interface UIState {
  currentScreen: ScreenType;
  isModalOpen: boolean;
  modalContent: string | null;
  notifications: string[];
}

// Crow disaster system
export interface Crow {
  id: string;
  targetSlot: { row: number; col: number };
  landedAt: number;
  wordToChase: string;
  isBeingChased: boolean;
}

// Weather effects
export interface WeatherEffect {
  growthMultiplier: number;      // 1.0 = normal, 1.2 = 20% faster
  harvestTimeMultiplier: number; // 1.0 = normal, 0.5 = half time
  wateringEffect: 'none' | 'auto';
  typingEffect: 'normal' | 'shaking' | 'foggy';
}

// Economic system
export interface Order {
  id: string;
  customerName: string;
  customerEmoji: string;
  items: { cropId: string; quantity: number }[];
  reward: number;
  bonusReward?: number;
  timeLimit: number;  // seconds
  startedAt: number;
  isUrgent: boolean;
}

export interface ShopItem {
  id: string;
  type: 'seed' | 'tool' | 'upgrade' | 'decoration';
  name: string;
  description: string;
  price: number;
  currency: 'gold' | 'gems';
  icon: string;
  cropTypeId?: string;
  effect?: string;
  unlockLevel?: number;
}

// Extended player state with economy
export interface ExtendedPlayerState extends PlayerState {
  gems: number;
  reputation: number;
  level: number;
  xp: number;
  activeOrders: Order[];
  completedOrdersCount: number;
  totalEarnings: number;
  purchasedUpgrades: string[];
  purchasedTools: string[];
}
