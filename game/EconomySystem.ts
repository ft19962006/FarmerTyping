import { CropSlot, InventoryItem } from '../types';
import { CROPS, SEED_PRICES } from '../constants/crops';
import { 
  ShopItem, 
  SHOP_ITEMS, 
  getShopItemById,
  NPC_CUSTOMERS,
  XP_REWARDS,
} from '../constants/shop';

// Order system types
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

export type OrderDifficulty = 'easy' | 'medium' | 'hard';

// Transaction result
export interface TransactionResult {
  success: boolean;
  message: string;
  amount?: number;
}

// Sell price calculation factors
interface SellPriceFactors {
  basePrice: number;
  healthBonus: number;
  qualityBonus: number;
  comboBonus: number;
  total: number;
}

class EconomySystem {
  // Get all shop items
  getShopItems(): ShopItem[] {
    return SHOP_ITEMS;
  }

  // Get shop items by type
  getShopItemsByType(type: ShopItem['type']): ShopItem[] {
    return SHOP_ITEMS.filter((item) => item.type === type);
  }

  // Get a specific shop item
  getShopItem(itemId: string): ShopItem | undefined {
    return getShopItemById(itemId);
  }

  // Check if player can afford an item
  canAfford(price: number, currency: 'gold' | 'gems', playerGold: number, playerGems: number = 0): boolean {
    if (currency === 'gold') {
      return playerGold >= price;
    }
    return playerGems >= price;
  }

  // Calculate sell price for a crop with bonuses
  calculateSellPrice(crop: CropSlot, comboMultiplier: number = 1): SellPriceFactors {
    const basePrice = crop.cropType.sellPrice;
    
    // Health bonus (0-20% based on health)
    const healthMultiplier = crop.health >= 90 ? 1.2 : crop.health >= 70 ? 1.1 : 1.0;
    const healthBonus = Math.round(basePrice * (healthMultiplier - 1));
    
    // Quality bonus based on growth stage at harvest
    const qualityMultiplier = crop.growthStage === 'mature' ? 1.0 : 
                              crop.growthStage === 'overripe' ? 0.7 : 0.5;
    const qualityBonus = Math.round(basePrice * (qualityMultiplier - 1));
    
    // Combo bonus (increases with typing combo)
    const comboBonus = Math.round(basePrice * (comboMultiplier - 1) * 0.1);
    
    const total = Math.max(1, Math.round(
      basePrice * healthMultiplier * qualityMultiplier + comboBonus
    ));
    
    return {
      basePrice,
      healthBonus,
      qualityBonus,
      comboBonus,
      total,
    };
  }

  // Calculate sell price for inventory item (harvested crop)
  calculateInventorySellPrice(cropTypeId: string, quantity: number = 1): number {
    const cropType = CROPS[cropTypeId];
    if (!cropType) return 0;
    return cropType.sellPrice * quantity;
  }

  // Get seed price for a crop type
  getSeedPrice(cropTypeId: string): number {
    return SEED_PRICES[cropTypeId] || 5;
  }

  // Generate a random NPC order
  generateOrder(difficulty: OrderDifficulty): Order {
    const customer = NPC_CUSTOMERS[Math.floor(Math.random() * NPC_CUSTOMERS.length)];
    const cropIds = Object.keys(CROPS);
    
    let itemCount: number;
    let quantityRange: [number, number];
    let timeLimit: number;
    let isUrgent: boolean;
    let rewardMultiplier: number;
    
    switch (difficulty) {
      case 'easy':
        itemCount = Math.random() < 0.5 ? 1 : 2;
        quantityRange = [3, 5];
        timeLimit = 300; // 5 minutes
        isUrgent = false;
        rewardMultiplier = 1.0;
        break;
      case 'medium':
        itemCount = 2 + Math.floor(Math.random() * 2); // 2-3
        quantityRange = [5, 10];
        timeLimit = 180; // 3 minutes
        isUrgent = Math.random() < 0.3;
        rewardMultiplier = 1.5;
        break;
      case 'hard':
        itemCount = 3 + Math.floor(Math.random() * 2); // 3-4
        quantityRange = [10, 20];
        timeLimit = 120; // 2 minutes
        isUrgent = Math.random() < 0.5;
        rewardMultiplier = 2.0;
        break;
    }

    // Select random crops for the order
    const shuffledCrops = [...cropIds].sort(() => Math.random() - 0.5);
    const selectedCrops = shuffledCrops.slice(0, Math.min(itemCount, cropIds.length));
    
    // Generate order items
    const items = selectedCrops.map((cropId) => ({
      cropId,
      quantity: quantityRange[0] + Math.floor(Math.random() * (quantityRange[1] - quantityRange[0] + 1)),
    }));

    // Calculate reward based on items
    const baseReward = items.reduce((sum, item) => {
      const cropPrice = CROPS[item.cropId]?.sellPrice || 10;
      return sum + cropPrice * item.quantity;
    }, 0);
    
    const reward = Math.round(baseReward * rewardMultiplier);
    const bonusReward = isUrgent ? Math.round(reward * 0.5) : undefined;

    return {
      id: `order-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      customerName: customer.name,
      customerEmoji: customer.emoji,
      items,
      reward,
      bonusReward,
      timeLimit,
      startedAt: Date.now(),
      isUrgent,
    };
  }

  // Check if an order can be fulfilled with current inventory
  canFulfillOrder(order: Order, inventory: InventoryItem[]): boolean {
    return order.items.every((orderItem) => {
      const inventoryItem = inventory.find(
        (inv) => inv.type === 'crop' && inv.cropTypeId === orderItem.cropId
      );
      return inventoryItem && inventoryItem.quantity >= orderItem.quantity;
    });
  }

  // Get missing items for an order
  getMissingItems(order: Order, inventory: InventoryItem[]): { cropId: string; needed: number; have: number }[] {
    return order.items.map((orderItem) => {
      const inventoryItem = inventory.find(
        (inv) => inv.type === 'crop' && inv.cropTypeId === orderItem.cropId
      );
      const have = inventoryItem?.quantity || 0;
      return {
        cropId: orderItem.cropId,
        needed: orderItem.quantity,
        have,
      };
    }).filter((item) => item.have < item.needed);
  }

  // Calculate order reward (including time bonus)
  calculateOrderReward(order: Order): { reward: number; bonus: number; timeBonus: number } {
    const now = Date.now();
    const elapsed = (now - order.startedAt) / 1000;
    const timeRemaining = order.timeLimit - elapsed;
    const timeRatio = timeRemaining / order.timeLimit;
    
    // Time bonus: extra 20% if completed with >50% time remaining
    const timeBonus = timeRatio > 0.5 ? Math.round(order.reward * 0.2) : 0;
    
    const bonus = order.bonusReward || 0;
    
    return {
      reward: order.reward,
      bonus,
      timeBonus,
    };
  }

  // Check if order has expired
  isOrderExpired(order: Order): boolean {
    const now = Date.now();
    const elapsed = (now - order.startedAt) / 1000;
    return elapsed > order.timeLimit;
  }

  // Get time remaining for an order
  getOrderTimeRemaining(order: Order): number {
    const now = Date.now();
    const elapsed = (now - order.startedAt) / 1000;
    return Math.max(0, order.timeLimit - elapsed);
  }

  // Format time as MM:SS
  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  // Get XP reward for an action
  getXPReward(action: keyof typeof XP_REWARDS): number {
    return XP_REWARDS[action];
  }

  // Calculate level from total XP
  calculateLevel(totalXP: number, currentLevel: number, xpPerLevel: number = 100): { level: number; xpProgress: number } {
    // XP needed increases each level
    let level = currentLevel;
    let remainingXP = totalXP;
    
    while (remainingXP >= xpPerLevel) {
      remainingXP -= xpPerLevel;
      level++;
    }
    
    return {
      level,
      xpProgress: remainingXP,
    };
  }

  // Check if item is unlocked at level
  isUnlockedAtLevel(item: ShopItem, playerLevel: number): boolean {
    return (item.unlockLevel || 1) <= playerLevel;
  }

  // Get items unlocked at a specific level
  getItemsUnlockedAtLevel(level: number): ShopItem[] {
    return SHOP_ITEMS.filter((item) => item.unlockLevel === level);
  }
}

// Export singleton instance
export const economySystem = new EconomySystem();
