import { CROPS, SEED_PRICES } from './crops';

export interface ShopItem {
  id: string;
  type: 'seed' | 'tool' | 'upgrade' | 'decoration';
  name: string;
  description: string;
  price: number;
  currency: 'gold' | 'gems';
  icon: string;
  cropTypeId?: string;  // For seeds
  effect?: string;      // For tools/upgrades
  unlockLevel?: number;
}

// Generate seed items from crops
const SEED_ITEMS: ShopItem[] = Object.values(CROPS).map((crop) => ({
  id: `seed_${crop.id}`,
  type: 'seed' as const,
  name: `${crop.emoji} ${crop.name}種子`,
  description: `難度 ${'⭐'.repeat(crop.difficulty)} · 成長時間 ${Math.round(crop.growthTime / 1000)}秒`,
  price: SEED_PRICES[crop.id] || Math.round(crop.sellPrice / 2),
  currency: 'gold' as const,
  icon: crop.emoji,
  cropTypeId: crop.id,
  unlockLevel: crop.difficulty <= 1 ? 1 : crop.difficulty <= 2 ? 2 : 5,
}));

// Tool items
const TOOL_ITEMS: ShopItem[] = [
  {
    id: 'scarecrow',
    type: 'tool',
    name: '🎃 稻草人',
    description: '減少 50% 烏鴉出現機率',
    price: 100,
    currency: 'gold',
    icon: '🎃',
    effect: 'reduceCrows',
    unlockLevel: 1,
  },
  {
    id: 'sprinkler',
    type: 'tool',
    name: '💧 自動灑水器',
    description: '自動保持作物水分',
    price: 200,
    currency: 'gold',
    icon: '💧',
    effect: 'autoWater',
    unlockLevel: 3,
  },
  {
    id: 'fertilizer_pack',
    type: 'tool',
    name: '🧪 肥料包',
    description: '加速作物生長 20%',
    price: 50,
    currency: 'gold',
    icon: '🧪',
    effect: 'fertilize',
    unlockLevel: 1,
  },
  {
    id: 'quality_seeds',
    type: 'tool',
    name: '✨ 優質種子增強劑',
    description: '下次收穫價值 +50%',
    price: 30,
    currency: 'gold',
    icon: '✨',
    effect: 'qualityBoost',
    unlockLevel: 2,
  },
];

// Farm upgrade items
const UPGRADE_ITEMS: ShopItem[] = [
  {
    id: 'expand_3x5',
    type: 'upgrade',
    name: '📐 擴建 3×5',
    description: '將農田擴大至 15 格',
    price: 500,
    currency: 'gold',
    icon: '📐',
    effect: 'expandTo3x5',
    unlockLevel: 2,
  },
  {
    id: 'expand_4x5',
    type: 'upgrade',
    name: '📐 擴建 4×5',
    description: '將農田擴大至 20 格',
    price: 1200,
    currency: 'gold',
    icon: '📐',
    effect: 'expandTo4x5',
    unlockLevel: 5,
  },
  {
    id: 'expand_5x6',
    type: 'upgrade',
    name: '📐 擴建 5×6',
    description: '將農田擴大至 30 格（最大）',
    price: 2500,
    currency: 'gold',
    icon: '📐',
    effect: 'expandTo5x6',
    unlockLevel: 8,
  },
];

// Decoration items (for future expansion)
const DECORATION_ITEMS: ShopItem[] = [
  {
    id: 'lantern',
    type: 'decoration',
    name: '🏮 燈籠',
    description: '農場裝飾，增添氣氛',
    price: 50,
    currency: 'gold',
    icon: '🏮',
    unlockLevel: 1,
  },
  {
    id: 'windmill',
    type: 'decoration',
    name: '🎡 風車',
    description: '農場裝飾，轉啊轉',
    price: 150,
    currency: 'gold',
    icon: '🎡',
    unlockLevel: 3,
  },
];

// Combined shop catalog
export const SHOP_ITEMS: ShopItem[] = [
  ...SEED_ITEMS,
  ...TOOL_ITEMS,
  ...UPGRADE_ITEMS,
  ...DECORATION_ITEMS,
];

// Get items by type
export const getShopItemsByType = (type: ShopItem['type']): ShopItem[] => {
  return SHOP_ITEMS.filter((item) => item.type === type);
};

// Get item by ID
export const getShopItemById = (id: string): ShopItem | undefined => {
  return SHOP_ITEMS.find((item) => item.id === id);
};

// NPC customers for orders
export const NPC_CUSTOMERS = [
  { name: '王大媽', emoji: '👵' },
  { name: '李廚師', emoji: '👨‍🍳' },
  { name: '陳老闆', emoji: '🧑‍💼' },
  { name: '小明', emoji: '👦' },
  { name: '美美阿姨', emoji: '👩' },
  { name: '餐廳經理', emoji: '🧑‍💼' },
  { name: '市場攤販', emoji: '🧑‍🌾' },
  { name: '學校廚房', emoji: '🏫' },
];

// Level unlock requirements
export const LEVEL_UNLOCKS: Record<number, string[]> = {
  1: ['carrot', 'onion'],
  2: ['tomato', 'lettuce', 'expand_3x5'],
  3: ['sprinkler'],
  5: ['corn', 'expand_4x5'],
  8: ['pumpkin', 'expand_5x6'],
};

// XP requirements
export const XP_PER_LEVEL = 100;
export const XP_REWARDS = {
  harvest: 5,
  perfectHarvest: 20,
  orderComplete: 10,
  orderBonus: 5,
};
