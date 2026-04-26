import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PlayerStats, InventoryItem, Order } from '../types';
import { 
  STARTING_GOLD, 
  STARTING_SEEDS, 
  DEFAULT_UNLOCKED_CROPS 
} from '../constants/crops';
import { XP_PER_LEVEL } from '../constants/shop';

interface PlayerState {
  // State
  gold: number;
  gems: number;
  reputation: number;
  level: number;
  xp: number;
  stats: PlayerStats;
  inventory: InventoryItem[];
  unlockedCrops: string[];
  
  // Economic state
  activeOrders: Order[];
  completedOrdersCount: number;
  totalEarnings: number;
  purchasedUpgrades: string[];
  purchasedTools: string[];

  // Actions
  addGold: (amount: number) => void;
  spendGold: (amount: number) => boolean;
  addGems: (amount: number) => void;
  spendGems: (amount: number) => boolean;
  addReputation: (amount: number) => void;
  addXP: (amount: number) => void;
  updateStats: (updates: Partial<PlayerStats>) => void;
  addToInventory: (item: Omit<InventoryItem, 'id'>) => void;
  removeFromInventory: (itemId: string, quantity?: number) => boolean;
  removeFromInventoryByType: (type: InventoryItem['type'], cropTypeId: string, quantity: number) => boolean;
  getInventoryItem: (type: InventoryItem['type'], cropTypeId?: string) => InventoryItem | undefined;
  getInventoryItemsByType: (type: InventoryItem['type']) => InventoryItem[];
  unlockCrop: (cropId: string) => void;
  
  // Order actions
  addOrder: (order: Order) => void;
  removeOrder: (orderId: string) => void;
  completeOrder: (orderId: string, reward: number, bonus?: number) => void;
  failOrder: (orderId: string) => void;
  
  // Upgrade actions
  addPurchasedUpgrade: (upgradeId: string) => void;
  hasPurchasedUpgrade: (upgradeId: string) => boolean;
  addPurchasedTool: (toolId: string) => void;
  hasPurchasedTool: (toolId: string) => boolean;
  
  // Reset
  resetPlayer: () => void;
}

const initialStats: PlayerStats = {
  wpm: 0,
  accuracy: 100,
  totalWordsTyped: 0,
  totalCropsHarvested: 0,
  bestCombo: 0,
  totalGoldEarned: 0,
};

// Convert starting seeds to inventory items
function createInitialInventory(): InventoryItem[] {
  return Object.entries(STARTING_SEEDS).map(([cropTypeId, quantity], index) => ({
    id: `seed-${cropTypeId}-${index}`,
    type: 'seed' as const,
    cropTypeId,
    quantity,
  }));
}

export const usePlayerStore = create<PlayerState>()(
  persist(
    (set, get) => ({
      // Initial state
      gold: STARTING_GOLD,
      gems: 0,
      reputation: 0,
      level: 1,
      xp: 0,
      stats: { ...initialStats },
      inventory: createInitialInventory(),
      unlockedCrops: [...DEFAULT_UNLOCKED_CROPS],
      activeOrders: [],
      completedOrdersCount: 0,
      totalEarnings: 0,
      purchasedUpgrades: [],
      purchasedTools: [],

      // Actions
      addGold: (amount) => set((state) => ({
        gold: state.gold + amount,
        totalEarnings: state.totalEarnings + amount,
        stats: {
          ...state.stats,
          totalGoldEarned: state.stats.totalGoldEarned + amount,
        },
      })),

      spendGold: (amount) => {
        const { gold } = get();
        if (gold >= amount) {
          set({ gold: gold - amount });
          return true;
        }
        return false;
      },

      addGems: (amount) => set((state) => ({
        gems: state.gems + amount,
      })),

      spendGems: (amount) => {
        const { gems } = get();
        if (gems >= amount) {
          set({ gems: gems - amount });
          return true;
        }
        return false;
      },

      addReputation: (amount) => set((state) => ({
        reputation: state.reputation + amount,
      })),

      addXP: (amount) => set((state) => {
        let newXP = state.xp + amount;
        let newLevel = state.level;
        
        // Check for level up (XP needed increases with level)
        const xpNeeded = XP_PER_LEVEL * newLevel;
        while (newXP >= xpNeeded) {
          newXP -= xpNeeded;
          newLevel++;
        }
        
        return {
          xp: newXP,
          level: newLevel,
        };
      }),

      updateStats: (updates) => set((state) => ({
        stats: { ...state.stats, ...updates },
      })),

      addToInventory: (item) => set((state) => {
        // Check if item already exists
        const existingIndex = state.inventory.findIndex(
          (i) => i.type === item.type && i.cropTypeId === item.cropTypeId
        );

        if (existingIndex >= 0) {
          // Update existing item quantity
          const newInventory = [...state.inventory];
          newInventory[existingIndex] = {
            ...newInventory[existingIndex],
            quantity: newInventory[existingIndex].quantity + item.quantity,
          };
          return { inventory: newInventory };
        }

        // Add new item
        const newItem: InventoryItem = {
          ...item,
          id: `${item.type}-${item.cropTypeId || 'generic'}-${Date.now()}`,
        };
        return { inventory: [...state.inventory, newItem] };
      }),

      removeFromInventory: (itemId, quantity = 1) => {
        const { inventory } = get();
        const itemIndex = inventory.findIndex((i) => i.id === itemId);
        
        if (itemIndex < 0) return false;
        
        const item = inventory[itemIndex];
        if (item.quantity < quantity) return false;

        const newInventory = [...inventory];
        if (item.quantity === quantity) {
          // Remove item entirely
          newInventory.splice(itemIndex, 1);
        } else {
          // Decrease quantity
          newInventory[itemIndex] = {
            ...item,
            quantity: item.quantity - quantity,
          };
        }
        
        set({ inventory: newInventory });
        return true;
      },

      removeFromInventoryByType: (type, cropTypeId, quantity) => {
        const { inventory } = get();
        const itemIndex = inventory.findIndex(
          (i) => i.type === type && i.cropTypeId === cropTypeId
        );
        
        if (itemIndex < 0) return false;
        
        const item = inventory[itemIndex];
        if (item.quantity < quantity) return false;

        const newInventory = [...inventory];
        if (item.quantity === quantity) {
          newInventory.splice(itemIndex, 1);
        } else {
          newInventory[itemIndex] = {
            ...item,
            quantity: item.quantity - quantity,
          };
        }
        
        set({ inventory: newInventory });
        return true;
      },

      getInventoryItem: (type, cropTypeId) => {
        const { inventory } = get();
        return inventory.find(
          (i) => i.type === type && (cropTypeId ? i.cropTypeId === cropTypeId : true)
        );
      },

      getInventoryItemsByType: (type) => {
        const { inventory } = get();
        return inventory.filter((i) => i.type === type);
      },

      unlockCrop: (cropId) => set((state) => {
        if (state.unlockedCrops.includes(cropId)) return state;
        return { unlockedCrops: [...state.unlockedCrops, cropId] };
      }),

      // Order actions
      addOrder: (order) => set((state) => ({
        activeOrders: [...state.activeOrders, order],
      })),

      removeOrder: (orderId) => set((state) => ({
        activeOrders: state.activeOrders.filter((o) => o.id !== orderId),
      })),

      completeOrder: (orderId, reward, bonus = 0) => set((state) => {
        const totalReward = reward + bonus;
        return {
          activeOrders: state.activeOrders.filter((o) => o.id !== orderId),
          gold: state.gold + totalReward,
          totalEarnings: state.totalEarnings + totalReward,
          completedOrdersCount: state.completedOrdersCount + 1,
          stats: {
            ...state.stats,
            totalGoldEarned: state.stats.totalGoldEarned + totalReward,
          },
        };
      }),

      failOrder: (orderId) => set((state) => ({
        activeOrders: state.activeOrders.filter((o) => o.id !== orderId),
      })),

      // Upgrade actions
      addPurchasedUpgrade: (upgradeId) => set((state) => ({
        purchasedUpgrades: [...state.purchasedUpgrades, upgradeId],
      })),

      hasPurchasedUpgrade: (upgradeId) => {
        return get().purchasedUpgrades.includes(upgradeId);
      },

      addPurchasedTool: (toolId) => set((state) => ({
        purchasedTools: [...state.purchasedTools, toolId],
      })),

      hasPurchasedTool: (toolId) => {
        return get().purchasedTools.includes(toolId);
      },

      resetPlayer: () => set({
        gold: STARTING_GOLD,
        gems: 0,
        reputation: 0,
        level: 1,
        xp: 0,
        stats: { ...initialStats },
        inventory: createInitialInventory(),
        unlockedCrops: [...DEFAULT_UNLOCKED_CROPS],
        activeOrders: [],
        completedOrdersCount: 0,
        totalEarnings: 0,
        purchasedUpgrades: [],
        purchasedTools: [],
      }),
    }),
    {
      name: 'farm-typing-player',
      partialize: (state) => ({
        gold: state.gold,
        gems: state.gems,
        reputation: state.reputation,
        level: state.level,
        xp: state.xp,
        stats: state.stats,
        inventory: state.inventory,
        unlockedCrops: state.unlockedCrops,
        activeOrders: state.activeOrders,
        completedOrdersCount: state.completedOrdersCount,
        totalEarnings: state.totalEarnings,
        purchasedUpgrades: state.purchasedUpgrades,
        purchasedTools: state.purchasedTools,
      }),
    }
  )
);
