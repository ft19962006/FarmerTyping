# 🌾 耕種收割 - Farm Typing Game

A typing game where you plant crops, type to harvest, and build your farming empire!

一個結合打字練習和農場經營的遊戲 - 種植作物、打字收成、打造你的農場帝國！

## 📸 Features

- **🌱 Plant & Grow**: Plant various crops with different growth times and rewards
- **⌨️ Type to Harvest**: Practice typing by harvesting mature crops
- **🌦️ Dynamic Weather**: Weather affects crop growth and typing challenges
- **🐦 Crow Events**: Chase away crows by typing quickly
- **🛒 Shop System**: Buy seeds, tools, and farm upgrades
- **📋 Orders**: Complete customer orders for bonus rewards
- **📊 Stats Tracking**: Track your WPM, accuracy, and progress
- **🔄 Auto-Save**: Progress is automatically saved to localStorage

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository (if applicable)
git clone <repository-url>
cd TypingGame

# Navigate to the src directory
cd src

# Install dependencies
npm install

# Start development server
npm run dev
```

The game will be available at `http://localhost:5173`

### Build for Production

```bash
cd src
npm run build
```

The built files will be in `src/dist/` directory.

## 🎮 How to Play

1. **Start Game**: Click "Start Game" from the title screen
2. **Plant Crops**: Click on empty farm slots to plant seeds
3. **Wait for Growth**: Crops grow over time (rain helps!)
4. **Harvest**: When crops are mature (glowing), click to start harvest
5. **Type Correctly**: Type the displayed word within the time limit
6. **Sell Crops**: Open inventory to sell harvested crops for gold
7. **Buy & Expand**: Use gold to buy more seeds and expand your farm

### Controls

| Action | Control |
|--------|---------|
| Select farm slot | Mouse Click |
| Harvest crop | Type the word |
| Pause game | Press `ESC` |
| Navigate menus | Mouse Click |

## 🏗️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **State Management**: Zustand with persistence
- **Styling**: CSS with CSS Variables
- **Animations**: CSS Animations + Framer Motion concepts

## 📁 Project Structure

```
src/
├── components/           # React UI components
│   ├── BackgroundScene.tsx    # Animated farm background
│   ├── CropInfoCard.tsx       # Crop information display
│   ├── CropSlotView.tsx       # Individual farm slot
│   ├── CrowAlert.tsx          # Crow warning notifications
│   ├── CrowOverlay.tsx        # Crow attack overlay
│   ├── FarmGrid.tsx           # Main farm grid component
│   ├── HarvestModal.tsx       # Harvest typing interface
│   ├── Inventory.tsx          # Player inventory screen
│   ├── OrderBoard.tsx         # Customer orders display
│   ├── ParticleEffects.tsx    # Particle system
│   ├── PlantingModal.tsx      # Crop selection modal
│   ├── Shop.tsx               # Shop interface
│   ├── StatsBar.tsx           # Player stats display
│   ├── ToastNotification.tsx  # Toast messages
│   ├── TypingArea.tsx         # Core typing input
│   ├── TypingFeedback.tsx     # Typing feedback display
│   ├── WeatherIcon.tsx        # Weather indicator
│   └── WeatherOverlay.tsx     # Weather visual effects
├── constants/            # Game constants
│   ├── crops.ts              # Crop definitions
│   └── shop.ts               # Shop items
├── game/                 # Core game systems
│   ├── CropSystem.ts         # Crop growth logic
│   ├── CrowSystem.ts         # Crow event system
│   ├── EconomySystem.ts      # Economic calculations
│   └── WeatherSystem.ts      # Weather system
├── hooks/                # Custom React hooks
│   ├── useGameLoop.ts        # Main game loop
│   └── useTypingEngine.ts    # Typing engine hook
├── stores/               # Zustand state stores
│   ├── useFarmStore.ts       # Farm state
│   ├── useGameStore.ts       # Game state
│   ├── usePlayerStore.ts     # Player state
│   ├── useTypingStore.ts     # Typing session state
│   └── useUIStore.ts         # UI state
├── styles/               # CSS styles
│   ├── animations.css        # Animation definitions
│   ├── index.css             # Main styles
│   └── theme.css             # Theme variables
├── types/                # TypeScript types
│   └── index.ts              # Type definitions
├── utils/                # Utility functions
│   └── wordGenerator.ts      # Word generation
├── App.tsx               # Main App component
├── main.tsx              # Entry point
└── index.html            # HTML template
```

## 🌾 Crops

| Crop | Growth Time | Difficulty | Sell Price |
|------|-------------|------------|------------|
| 🥕 Carrot | 30s | ★☆☆☆☆ | 15💰 |
| 🥬 Lettuce | 45s | ★☆☆☆☆ | 20💰 |
| 🍅 Tomato | 60s | ★★☆☆☆ | 30💰 |
| 🌽 Corn | 90s | ★★★☆☆ | 50💰 |
| 🍓 Strawberry | 120s | ★★★★☆ | 80💰 |
| 🍆 Eggplant | 150s | ★★★★☆ | 100💰 |
| 🎃 Pumpkin | 180s | ★★★★★ | 150💰 |

## 🌦️ Weather Effects

| Weather | Growth Effect | Typing Effect |
|---------|---------------|---------------|
| ☀️ Sunny | Normal | Normal |
| 🌧️ Rainy | +20% faster | Normal |
| ⛈️ Stormy | +50% faster | Screen shaking |
| ❄️ Snowy | -30% slower | Normal |
| 🌫️ Foggy | Normal | Blurred text |
| 🌈 Rainbow | +100% faster | Normal |

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### Adding New Crops

1. Add crop definition in `src/constants/crops.ts`
2. Add seed to shop in `src/constants/shop.ts`
3. Words are auto-generated based on difficulty

### Customizing Weather

Edit weather effects in `src/game/WeatherSystem.ts`

## 📝 License

This project is for educational purposes.

## 🙏 Acknowledgments

- Built with React and TypeScript
- State management by Zustand
- Inspired by typing games and farm simulators

---

Made with ❤️ for typing practice
