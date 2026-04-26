import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useGameStore } from './stores/useGameStore';
import { useUIStore } from './stores/useUIStore';
import { useFarmStore } from './stores/useFarmStore';
import { usePlayerStore } from './stores/usePlayerStore';
import { useTypingStore } from './stores/useTypingStore';
import { TypingArea } from './components/TypingArea';
import { FarmGrid } from './components/FarmGrid';
import { WeatherOverlay } from './components/WeatherOverlay';
import { WeatherIcon } from './components/WeatherIcon';
import { CrowAlert } from './components/CrowAlert';
import { StatsBar } from './components/StatsBar';
import { Shop } from './components/Shop';
import { Inventory } from './components/Inventory';
import { OrderBoard } from './components/OrderBoard';
import { BackgroundScene } from './components/BackgroundScene';
import { ToastProvider } from './components/ToastNotification';
import { useParticleEffects } from './components/ParticleEffects';
import { useGameLoop } from './hooks/useGameLoop';
import { CROPS } from './constants/crops';
import { generateWordForCrop } from './utils/wordGenerator';
import { weatherSystem } from './game/WeatherSystem';
import { crowSystem } from './game/CrowSystem';
import { Crow } from './types';

// Check if there's saved game data
const hasSavedGame = (): boolean => {
  try {
    const playerData = localStorage.getItem('farm-typing-player');
    // Check if any substantial data exists
    if (playerData) {
      const parsed = JSON.parse(playerData);
      // Has saved if player has earned any gold or harvested any crops
      return parsed.state?.stats?.totalCropsHarvested > 0 || parsed.state?.stats?.totalGoldEarned > 0;
    }
    return false;
  } catch {
    return false;
  }
};

// Tutorial Overlay Component
const TutorialOverlay: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  
  const steps = [
    {
      title: '🌾 歡迎來到耕種收割!',
      content: '這是一個結合打字練習和農場經營的遊戲。讓我們開始教學吧！',
      icon: '👋',
    },
    {
      title: '🌱 種植作物',
      content: '點擊空的農田格子來種植作物。不同作物有不同的生長時間和獎勵。',
      icon: '🌱',
    },
    {
      title: '⏳ 等待生長',
      content: '作物需要時間生長。當它們成熟時會發光提示你收成。',
      icon: '⏳',
    },
    {
      title: '⌨️ 打字收成',
      content: '點擊成熟的作物，然後正確打出顯示的文字來收成。打字越快越準確，獎勵越多！',
      icon: '⌨️',
    },
    {
      title: '💰 賺取金幣',
      content: '收成的作物會自動加入背包。你可以在背包中賣掉它們換取金幣。',
      icon: '💰',
    },
    {
      title: '🛒 商店購物',
      content: '用金幣購買更多種子、工具和農場升級。升級你的農場來種植更多作物！',
      icon: '🛒',
    },
    {
      title: '🎮 準備開始',
      content: '小提示：連續正確打字可以建立連擊，獲得額外獎勵！祝你農耕愉快！',
      icon: '🎉',
    },
  ];
  
  const currentStep = steps[step];
  const isLastStep = step === steps.length - 1;
  
  return (
    <div className="tutorial-overlay">
      <div className="tutorial-modal">
        <div className="tutorial-icon">{currentStep.icon}</div>
        <h2>{currentStep.title}</h2>
        <p>{currentStep.content}</p>
        
        <div className="tutorial-progress">
          {steps.map((_, idx) => (
            <span
              key={idx}
              className={`progress-dot ${idx === step ? 'active' : ''} ${idx < step ? 'completed' : ''}`}
            />
          ))}
        </div>
        
        <div className="tutorial-buttons">
          {step > 0 && (
            <button className="btn btn-secondary" onClick={() => setStep(s => s - 1)}>
              ← 上一步
            </button>
          )}
          <button
            className="btn btn-primary"
            onClick={() => isLastStep ? onComplete() : setStep(s => s + 1)}
          >
            {isLastStep ? '開始遊戲！' : '下一步 →'}
          </button>
        </div>
        
        <button className="skip-tutorial" onClick={onComplete}>
          跳過教學
        </button>
      </div>
    </div>
  );
};

// Title Screen Component
const TitleScreen: React.FC = () => {
  const { startGame } = useGameStore();
  const { setScreen, showTutorial, setShowTutorial } = useUIStore();
  const [hasProgress, setHasProgress] = useState(false);

  useEffect(() => {
    setHasProgress(hasSavedGame());
  }, []);

  const handleStartGame = () => {
    // Check if this is first time (no saved data)
    if (!hasProgress && showTutorial) {
      // Will show tutorial, then start game
      setScreen('game');
      startGame();
    } else {
      startGame();
      setScreen('game');
    }
  };

  const handleContinue = () => {
    startGame();
    setScreen('game');
    setShowTutorial(false); // Don't show tutorial for returning players
  };

  return (
    <div className="screen title-screen">
      <div className="title-content">
        <div className="title-logo">
          <span className="logo-icon">🌾</span>
          <h1 className="game-title">耕種收割</h1>
          <span className="logo-icon">🌾</span>
        </div>
        <p className="game-subtitle">Farm Typing Game</p>
        <p className="game-description">
          Plant crops, type to harvest, and build your farming empire!
          <br />
          種植作物、打字收成，打造你的農場帝國！
        </p>
        <div className="menu-buttons">
          {hasProgress && (
            <button className="btn btn-primary btn-large" onClick={handleContinue}>
              ▶️ 繼續遊戲 Continue
            </button>
          )}
          <button
            className={`btn ${hasProgress ? 'btn-secondary' : 'btn-primary btn-large'}`}
            onClick={handleStartGame}
          >
            🚜 {hasProgress ? '新遊戲 New Game' : '開始遊戲 Start Game'}
          </button>
          <button className="btn btn-secondary" onClick={() => setScreen('settings')}>
            ⚙️ 設定 Settings
          </button>
        </div>
        <div className="instructions">
          <h3>🎮 How to Play 遊戲方式:</h3>
          <ul>
            <li>🌱 Plant seeds in empty farm plots 在空格種植種子</li>
            <li>⏳ Wait for crops to grow 等待作物生長</li>
            <li>⌨️ Type correctly to harvest 正確打字來收成</li>
            <li>💰 Sell crops to earn gold 賣出作物賺取金幣</li>
            <li>🌟 Build combos for bonus rewards! 連擊獲得額外獎勵!</li>
          </ul>
        </div>
        <div className="version-info">v1.0.0 MVP</div>
      </div>
    </div>
  );
};

// Game Screen Component with integrated Crop System
const GameScreen: React.FC = () => {
  const { phase, weather, dayNumber, timeOfDay, togglePause, activeCrows } = useGameStore();
  const { setScreen, showTutorial, setShowTutorial } = useUIStore();
  const { stats } = usePlayerStore();
  const { currentWPM, currentAccuracy, combo, calculateAverageWPM, calculateOverallAccuracy } = useTypingStore();
  
  // Modal states
  const [showOrderBoard, setShowOrderBoard] = useState(false);
  const [showShopModal, setShowShopModal] = useState(false);
  const [showInventoryModal, setShowInventoryModal] = useState(false);
  
  // Initialize the game loop
  const { isRunning } = useGameLoop();
  
  // Tab state for game content
  const [activeTab, setActiveTab] = useState<'farm' | 'typing-test'>('farm');
  
  // Typing test state
  const [isTypingTest, setIsTypingTest] = useState(false);
  const [testWord, setTestWord] = useState('tomato');
  const [testCrop, setTestCrop] = useState(CROPS.tomato);
  const [completedWords, setCompletedWords] = useState(0);
  
  // Crow chase state
  const [activeCrowChase, setActiveCrowChase] = useState<Crow | null>(null);
  
  // Get weather forecast
  const forecast = weatherSystem.getForecast();
  
  // Particle effects hook
  const { emit: emitParticles, ParticleLayer } = useParticleEffects();
  
  // ESC key to toggle pause
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't pause if typing in an input or during typing test/harvest
      const isTyping = document.activeElement?.tagName === 'INPUT' ||
                       document.activeElement?.classList.contains('typing-input');
      
      if (e.key === 'Escape' && !isTyping && !activeCrowChase) {
        togglePause();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePause, activeCrowChase]);
  
  // Handle completing tutorial
  const handleTutorialComplete = useCallback(() => {
    setShowTutorial(false);
  }, [setShowTutorial]);
  
  // Get time of day string for background
  const getTimeOfDayString = useMemo(() => {
    if (timeOfDay < 25) return 'morning';
    if (timeOfDay < 50) return 'afternoon';
    if (timeOfDay < 75) return 'evening';
    return 'night';
  }, [timeOfDay]);

  const startTypingTest = () => {
    const newWord = generateWordForCrop(testCrop);
    setTestWord(newWord);
    setIsTypingTest(true);
  };

  const handleTypingComplete = (stats: { wpm: number; accuracy: number; combo: number }) => {
    console.log('Typing complete!', stats);
    setCompletedWords(prev => prev + 1);
    setTimeout(() => {
      const newWord = generateWordForCrop(testCrop);
      setTestWord(newWord);
    }, 1500);
  };

  const handleTypingTimeout = () => {
    console.log('Typing timeout!');
    setTimeout(() => {
      const newWord = generateWordForCrop(testCrop);
      setTestWord(newWord);
    }, 1500);
  };

  const handleComboMilestone = useCallback((milestone: number) => {
    console.log(`Combo milestone reached: ${milestone}!`);
    // Emit particle effect for combo milestones
    emitParticles('combo', { x: 50, y: 50 });
  }, [emitParticles]);

  const changeCrop = (cropId: string) => {
    const crop = CROPS[cropId];
    if (crop) {
      setTestCrop(crop);
      setTestWord(generateWordForCrop(crop));
    }
  };

  // Handle crow chase start
  const handleCrowChase = useCallback((crowId: string) => {
    const crow = crowSystem.getCrow(crowId);
    if (crow) {
      crowSystem.startChasing(crowId);
      setActiveCrowChase(crow);
    }
  }, []);
  
  // Handle crow chase complete (word typed correctly)
  const handleCrowChaseComplete = useCallback(() => {
    if (activeCrowChase) {
      crowSystem.chaseCrow(activeCrowChase.id);
      setActiveCrowChase(null);
    }
  }, [activeCrowChase]);
  
  // Handle crow chase timeout
  const handleCrowChaseTimeout = useCallback(() => {
    if (activeCrowChase) {
      crowSystem.crowSteals(activeCrowChase.id);
      setActiveCrowChase(null);
    }
  }, [activeCrowChase]);

  // Format time of day
  const getTimeIcon = () => {
    if (timeOfDay < 25) return '🌅'; // Dawn
    if (timeOfDay < 50) return '☀️'; // Day
    if (timeOfDay < 75) return '🌇'; // Dusk
    return '🌙'; // Night
  };

  return (
    <div className="screen game-screen">
      {/* Background Scene - animated farm background */}
      <BackgroundScene timeOfDay={getTimeOfDayString} weather={weather} />
      
      {/* Particle Effects Layer */}
      <ParticleLayer />
      
      {/* Weather Overlay - visual effects */}
      <WeatherOverlay weather={weather} />
      
      {/* Stats Bar - always visible */}
      <StatsBar className="game-stats-bar" />
      
      {/* Header Bar */}
      <header className="game-header">
        <div className="header-left">
          <span className="day-counter">🗓️ Day {dayNumber}</span>
          <span className="time-indicator">{getTimeIcon()}</span>
          <WeatherIcon weather={weather} forecast={forecast} showForecast={true} />
        </div>
        <div className="header-center">
          <button className="btn btn-small order-btn" onClick={() => setShowOrderBoard(true)}>
            📋 Orders
          </button>
        </div>
        <div className="header-right">
          {isRunning && <span className="running-indicator">🟢</span>}
          <button className="btn btn-small" onClick={togglePause}>
            {phase === 'paused' ? '▶️' : '⏸️'}
          </button>
          <button className="btn btn-small" onClick={() => setScreen('title')}>
            🏠
          </button>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="game-tabs">
        <button 
          className={`tab-btn ${activeTab === 'farm' ? 'active' : ''}`}
          onClick={() => setActiveTab('farm')}
        >
          🌾 Farm
        </button>
        <button 
          className={`tab-btn ${activeTab === 'typing-test' ? 'active' : ''}`}
          onClick={() => setActiveTab('typing-test')}
        >
          ⌨️ Typing Test
        </button>
      </nav>

      {/* Main Content */}
      <main className="game-main">
        {/* Farm Tab */}
        {activeTab === 'farm' && (
          <FarmGrid />
        )}

        {/* Typing Test Tab */}
        {activeTab === 'typing-test' && (
          <div className="typing-test-container">
            {!isTypingTest ? (
              <div className="typing-test-start">
                <h2>⌨️ Typing Test Demo</h2>
                <p>Test the typing engine with different crop difficulties:</p>
                <div className="crop-selector">
                  {Object.values(CROPS).map((crop) => (
                    <button
                      key={crop.id}
                      className={`btn crop-btn ${testCrop.id === crop.id ? 'active' : ''}`}
                      onClick={() => changeCrop(crop.id)}
                    >
                      {crop.emoji} {crop.name} (Lv.{crop.difficulty})
                    </button>
                  ))}
                </div>
                <button className="btn btn-primary btn-large" onClick={startTypingTest}>
                  🚀 Start Typing Test
                </button>
              </div>
            ) : (
              <div className="typing-test-active">
                <TypingArea
                  targetWord={testWord}
                  timeLimit={testCrop.harvestTimeLimit}
                  cropSlotId="test-slot"
                  cropType={testCrop}
                  autoStart={true}
                  onComplete={handleTypingComplete}
                  onTimeout={handleTypingTimeout}
                  onComboMilestone={handleComboMilestone}
                />
                <div className="typing-test-controls">
                  <button className="btn btn-secondary" onClick={() => setIsTypingTest(false)}>
                    ⏹️ Stop Test
                  </button>
                  <span className="completed-count">✅ Completed: {completedWords}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Stats Sidebar */}
        <aside className="game-sidebar">
          <div className="stats-panel">
            <h3>📊 Stats</h3>
            <div className="stat-row">
              <span>Current WPM:</span>
              <span className="stat-value">{currentWPM}</span>
            </div>
            <div className="stat-row">
              <span>Accuracy:</span>
              <span className="stat-value">{currentAccuracy}%</span>
            </div>
            <div className="stat-row">
              <span>Combo:</span>
              <span className="stat-value combo">x{combo}</span>
            </div>
            <hr />
            <div className="stat-row">
              <span>Avg WPM:</span>
              <span className="stat-value">{calculateAverageWPM()}</span>
            </div>
            <div className="stat-row">
              <span>Overall:</span>
              <span className="stat-value">{calculateOverallAccuracy()}%</span>
            </div>
          </div>

          <div className="player-stats-panel">
            <h3>🏆 Progress</h3>
            <div className="stat-row">
              <span>Crops Harvested:</span>
              <span className="stat-value">{stats.totalCropsHarvested}</span>
            </div>
            <div className="stat-row">
              <span>Words Typed:</span>
              <span className="stat-value">{stats.totalWordsTyped}</span>
            </div>
            <div className="stat-row">
              <span>Best Combo:</span>
              <span className="stat-value">x{stats.bestCombo}</span>
            </div>
            <div className="stat-row">
              <span>Total Earned:</span>
              <span className="stat-value gold">{stats.totalGoldEarned} 💰</span>
            </div>
          </div>
        </aside>
      </main>

      {/* Crow Alerts */}
      {activeCrows.length > 0 && !activeCrowChase && (
        <div className="crow-alerts-container">
          {activeCrows.map((crow) => (
            <CrowAlert
              key={crow.id}
              crow={crow}
              onChase={handleCrowChase}
            />
          ))}
        </div>
      )}
      
      {/* Crow Chase Modal */}
      {activeCrowChase && (
        <div className="crow-chase-modal">
          <div className="crow-chase-content">
            <div className="crow-chase-header">
              <span className="crow-icon">🐦</span>
              <h3>Chase the Crow!</h3>
            </div>
            <TypingArea
              targetWord={activeCrowChase.wordToChase}
              timeLimit={5}
              cropSlotId={`crow-${activeCrowChase.id}`}
              autoStart={true}
              onComplete={handleCrowChaseComplete}
              onTimeout={handleCrowChaseTimeout}
            />
            <button
              className="btn btn-secondary"
              onClick={() => setActiveCrowChase(null)}
            >
              Give Up 😢
            </button>
          </div>
        </div>
      )}

      {/* Order Board Modal */}
      {showOrderBoard && (
        <OrderBoard onClose={() => setShowOrderBoard(false)} />
      )}

      {/* Shop Modal */}
      {showShopModal && (
        <Shop onClose={() => {
          setShowShopModal(false);
          togglePause(); // Resume after closing shop
        }} />
      )}
      
      {/* Inventory Modal */}
      {showInventoryModal && (
        <Inventory onClose={() => {
          setShowInventoryModal(false);
          togglePause(); // Resume after closing inventory
        }} />
      )}

      {/* Pause Overlay */}
      {phase === 'paused' && !showShopModal && !showInventoryModal && (
        <div className="pause-overlay">
          <div className="pause-menu">
            <h2>⏸️ 暫停 Paused</h2>
            <p className="pause-hint">按 ESC 繼續遊戲</p>
            <button className="btn btn-primary" onClick={togglePause}>
              ▶️ 繼續 Resume
            </button>
            <button className="btn btn-secondary" onClick={() => {
              setShowShopModal(true);
            }}>
              🏪 商店 Shop
            </button>
            <button className="btn btn-secondary" onClick={() => {
              setShowInventoryModal(true);
            }}>
              🎒 背包 Inventory
            </button>
            <button className="btn btn-secondary" onClick={() => setShowOrderBoard(true)}>
              📋 訂單 Orders
            </button>
            <button className="btn btn-secondary" onClick={() => setScreen('settings')}>
              ⚙️ 設定 Settings
            </button>
            <button className="btn btn-danger" onClick={() => setScreen('title')}>
              🏠 退出 Quit to Menu
            </button>
          </div>
        </div>
      )}
      
      {/* Tutorial Overlay for first-time players */}
      {showTutorial && phase === 'playing' && (
        <TutorialOverlay onComplete={handleTutorialComplete} />
      )}
    </div>
  );
};

// Settings Screen Component
const SettingsScreen: React.FC = () => {
  const { setScreen, setShowTutorial } = useUIStore();
  const { resetPlayer, stats, level, gold } = usePlayerStore();
  const { resetFarm, gridSize } = useFarmStore();
  const { resetGame, dayNumber } = useGameStore();
  
  // Local settings state
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const handleResetProgress = () => {
    resetPlayer();
    resetFarm();
    resetGame();
    setShowTutorial(true); // Show tutorial again for new game
    setShowConfirmReset(false);
    setScreen('title');
  };

  return (
    <div className="screen settings-screen">
      <div className="settings-header">
        <h2>⚙️ 設定 Settings</h2>
      </div>
      
      <div className="settings-content">
        {/* Game Stats Summary */}
        <div className="settings-section stats-summary">
          <h3>📊 遊戲統計 Game Stats</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">Level 等級</span>
              <span className="stat-value">{level}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Day 天數</span>
              <span className="stat-value">{dayNumber}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Gold 金幣</span>
              <span className="stat-value gold">🪙 {gold.toLocaleString()}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Farm Size 農場大小</span>
              <span className="stat-value">{gridSize.rows}×{gridSize.cols}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Harvested 已收成</span>
              <span className="stat-value">{stats.totalCropsHarvested}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Best Combo 最佳連擊</span>
              <span className="stat-value">x{stats.bestCombo}</span>
            </div>
          </div>
        </div>
        
        {/* Audio Settings */}
        <div className="settings-section">
          <h3>🔊 音效 Audio</h3>
          <div className="setting-row">
            <span>音效 Sound Effects</span>
            <button
              className={`toggle-btn ${soundEnabled ? 'active' : ''}`}
              onClick={() => setSoundEnabled(!soundEnabled)}
            >
              {soundEnabled ? '🔊 On' : '🔇 Off'}
            </button>
          </div>
          <p className="setting-note">⚠️ 音效功能尚未實現 (Sound not yet implemented)</p>
        </div>
        
        {/* Accessibility */}
        <div className="settings-section">
          <h3>♿ 無障礙 Accessibility</h3>
          <div className="setting-row">
            <span>減少動態效果 Reduced Motion</span>
            <button
              className={`toggle-btn ${reducedMotion ? 'active' : ''}`}
              onClick={() => setReducedMotion(!reducedMotion)}
            >
              {reducedMotion ? '✓ On' : '✗ Off'}
            </button>
          </div>
        </div>
        
        {/* Game Controls Help */}
        <div className="settings-section">
          <h3>🎮 操作說明 Controls</h3>
          <div className="controls-list">
            <div className="control-item">
              <span className="key">Click 點擊</span>
              <span>Select farm slot 選擇農田格子</span>
            </div>
            <div className="control-item">
              <span className="key">Type 打字</span>
              <span>Harvest mature crops 收成成熟作物</span>
            </div>
            <div className="control-item">
              <span className="key">ESC</span>
              <span>Pause game 暫停遊戲</span>
            </div>
          </div>
        </div>
        
        {/* Tutorial Replay */}
        <div className="settings-section">
          <h3>📖 教學 Tutorial</h3>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setShowTutorial(true);
              setScreen('game');
            }}
          >
            🔄 重新觀看教學 Replay Tutorial
          </button>
        </div>
        
        {/* Danger Zone */}
        <div className="settings-section danger-zone">
          <h3>⚠️ 危險區域 Danger Zone</h3>
          {!showConfirmReset ? (
            <button className="btn btn-danger" onClick={() => setShowConfirmReset(true)}>
              🗑️ 重置進度 Reset All Progress
            </button>
          ) : (
            <div className="confirm-reset">
              <p className="warning-text">
                ⚠️ 確定要刪除所有遊戲進度嗎？此操作無法撤銷！
                <br />
                Are you sure? This cannot be undone!
              </p>
              <div className="confirm-buttons">
                <button className="btn btn-danger" onClick={handleResetProgress}>
                  ✓ 確定刪除 Yes, Reset
                </button>
                <button className="btn btn-secondary" onClick={() => setShowConfirmReset(false)}>
                  ✗ 取消 Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        <button className="btn btn-primary back-btn" onClick={() => setScreen('title')}>
          ← 返回主選單 Back to Menu
        </button>
      </div>
    </div>
  );
};

// Inner App Component (with access to Toast context)
const AppContent: React.FC = () => {
  const { currentScreen, setScreen } = useUIStore();
  const { initializeGrid } = useFarmStore();

  // Initialize farm grid on first mount
  useEffect(() => {
    initializeGrid();
  }, []);

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'title':
        return <TitleScreen />;
      case 'game':
        return <GameScreen />;
      case 'settings':
        return <SettingsScreen />;
      case 'shop':
        return <Shop onClose={() => setScreen('game')} />;
      case 'inventory':
        return <Inventory onClose={() => setScreen('game')} />;
      default:
        return <TitleScreen />;
    }
  };

  return (
    <div className="app-container">
      {renderScreen()}
      
      <style>{`
        /* Crow alerts container */
        .crow-alerts-container {
          position: fixed;
          top: 80px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 200;
          max-height: calc(100vh - 100px);
          overflow-y: auto;
        }
        
        /* Crow chase modal */
        .crow-chase-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 300;
          animation: fade-in 0.2s ease;
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .crow-chase-content {
          background: linear-gradient(135deg, #fff8dc, #ffeeba);
          border: 4px solid #8B7355;
          border-radius: 16px;
          padding: 24px;
          max-width: 500px;
          width: 90%;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          animation: slide-up 0.3s ease;
        }
        
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .crow-chase-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .crow-chase-header .crow-icon {
          font-size: 48px;
          animation: crow-flap 0.3s infinite alternate;
        }
        
        @keyframes crow-flap {
          from { transform: rotate(-10deg); }
          to { transform: rotate(10deg); }
        }
        
        .crow-chase-header h3 {
          font-size: 24px;
          color: #5a4a3a;
          margin: 0;
        }
        
        .crow-chase-content .btn-secondary {
          margin-top: 16px;
          width: 100%;
        }
        
        /* Tutorial Overlay Styles */
        .tutorial-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 500;
          animation: fade-in 0.3s ease;
        }
        
        .tutorial-modal {
          background: linear-gradient(135deg, #fff8dc, #ffeeba);
          border: 4px solid #4a7c59;
          border-radius: 20px;
          padding: 32px;
          max-width: 500px;
          width: 90%;
          text-align: center;
          box-shadow: 0 12px 48px rgba(0,0,0,0.4);
          animation: slide-up 0.4s ease;
        }
        
        .tutorial-icon {
          font-size: 64px;
          margin-bottom: 16px;
          animation: bounce 0.5s ease infinite alternate;
        }
        
        @keyframes bounce {
          from { transform: translateY(0); }
          to { transform: translateY(-10px); }
        }
        
        .tutorial-modal h2 {
          color: #4a7c59;
          margin-bottom: 16px;
          font-size: 24px;
        }
        
        .tutorial-modal p {
          color: #5a4a3a;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        
        .tutorial-progress {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 24px;
        }
        
        .progress-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ccc;
          transition: all 0.3s ease;
        }
        
        .progress-dot.active {
          background: #4a7c59;
          transform: scale(1.3);
        }
        
        .progress-dot.completed {
          background: #8bc34a;
        }
        
        .tutorial-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
        }
        
        .skip-tutorial {
          margin-top: 16px;
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          font-size: 14px;
          text-decoration: underline;
        }
        
        .skip-tutorial:hover {
          color: #666;
        }
        
        /* Pause Menu Enhanced Styles */
        .pause-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 400;
          animation: fade-in 0.2s ease;
        }
        
        .pause-menu {
          background: linear-gradient(135deg, #fff8dc, #ffeeba);
          border: 4px solid #8B7355;
          border-radius: 16px;
          padding: 32px;
          min-width: 300px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        
        .pause-menu h2 {
          color: #5a4a3a;
          margin-bottom: 8px;
        }
        
        .pause-hint {
          color: #888;
          font-size: 14px;
          margin-bottom: 16px;
        }
        
        /* Title Screen Enhanced Styles */
        .title-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        
        .logo-icon {
          font-size: 48px;
          animation: sway 2s ease-in-out infinite;
        }
        
        @keyframes sway {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        
        .btn-large {
          padding: 16px 32px;
          font-size: 18px;
        }
        
        .btn-danger {
          background-color: #e74c3c;
          color: white;
        }
        
        .btn-danger:hover {
          background-color: #c0392b;
        }
        
        .version-info {
          margin-top: 24px;
          color: #888;
          font-size: 12px;
        }
        
        /* Settings Screen Enhanced Styles */
        .settings-screen {
          max-width: 600px;
        }
        
        .settings-header {
          text-align: center;
          margin-bottom: 24px;
        }
        
        .settings-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .settings-section {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .settings-section h3 {
          color: #4a7c59;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 2px solid #e8dcc4;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        
        .stat-item {
          text-align: center;
          padding: 12px;
          background: #f8f4e8;
          border-radius: 8px;
        }
        
        .stat-item .stat-label {
          display: block;
          font-size: 12px;
          color: #888;
          margin-bottom: 4px;
        }
        
        .stat-item .stat-value {
          display: block;
          font-size: 18px;
          font-weight: bold;
          color: #4a7c59;
        }
        
        .stat-item .stat-value.gold {
          color: #daa520;
        }
        
        .setting-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #eee;
        }
        
        .setting-row:last-child {
          border-bottom: none;
        }
        
        .toggle-btn {
          padding: 8px 16px;
          border: 2px solid #4a7c59;
          border-radius: 20px;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .toggle-btn.active {
          background: #4a7c59;
          color: white;
        }
        
        .setting-note {
          font-size: 12px;
          color: #888;
          margin-top: 8px;
          font-style: italic;
        }
        
        .controls-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .control-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .control-item .key {
          background: #333;
          color: white;
          padding: 4px 12px;
          border-radius: 4px;
          font-family: monospace;
          font-size: 14px;
          min-width: 80px;
          text-align: center;
        }
        
        .danger-zone {
          border: 2px solid #e74c3c;
        }
        
        .danger-zone h3 {
          color: #e74c3c;
          border-color: #f8d7da;
        }
        
        .confirm-reset {
          text-align: center;
        }
        
        .warning-text {
          color: #e74c3c;
          margin-bottom: 16px;
          font-weight: bold;
        }
        
        .confirm-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
        }
        
        .back-btn {
          margin-top: 8px;
        }
        
        /* Responsive adjustments */
        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .tutorial-modal {
            padding: 24px 16px;
          }
          
          .pause-menu {
            min-width: 260px;
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
};

// Main App Component - wraps with ToastProvider
const App: React.FC = () => {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
};

export default App;
