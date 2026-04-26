import React, { useEffect, useState, useCallback, useRef } from 'react';

// ============================================
// Particle Effects Component
// CSS-only particle system for performance
// ============================================

interface Particle {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  emoji?: string;
  duration: number;
  delay: number;
  tx: number;  // translate X
  ty: number;  // translate Y
}

interface ParticleEffectsProps {
  type: 'harvest' | 'levelUp' | 'combo' | 'gold' | 'confetti' | 'sparkle';
  position?: { x: number; y: number };
  count?: number;
  onComplete?: () => void;
}

// Max particles for performance
const MAX_PARTICLES = 50;

// Generate random number in range
const random = (min: number, max: number) => Math.random() * (max - min) + min;

// Generate unique ID
const generateId = () => `particle-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

// Particle configurations by type
const getParticleConfig = (type: ParticleEffectsProps['type']) => {
  switch (type) {
    case 'harvest':
      return {
        count: 12,
        colors: ['#FFD700', '#FFA500', '#90EE90', '#32CD32'],
        emojis: ['✨', '⭐', '🌟', '💫'],
        duration: { min: 600, max: 1000 },
        spread: { x: 80, y: 80 },
        size: { min: 12, max: 20 },
      };
    case 'levelUp':
      return {
        count: 20,
        colors: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'],
        emojis: ['⭐', '🌟', '✨', '💫', '🎉'],
        duration: { min: 800, max: 1200 },
        spread: { x: 150, y: 200 },
        size: { min: 16, max: 28 },
      };
    case 'combo':
      return {
        count: 8,
        colors: ['#FF4500', '#FF6600', '#FF8C00', '#FFA500'],
        emojis: ['🔥', '💥', '⚡', '✨'],
        duration: { min: 400, max: 800 },
        spread: { x: 60, y: 60 },
        size: { min: 14, max: 22 },
      };
    case 'gold':
      return {
        count: 6,
        colors: ['#FFD700', '#FFC800', '#FFB700'],
        emojis: ['🪙', '💰', '✨'],
        duration: { min: 600, max: 900 },
        spread: { x: 40, y: 100 },
        size: { min: 16, max: 24 },
      };
    case 'confetti':
      return {
        count: 30,
        colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'],
        emojis: [],
        duration: { min: 1000, max: 2000 },
        spread: { x: 200, y: 300 },
        size: { min: 8, max: 14 },
      };
    case 'sparkle':
    default:
      return {
        count: 8,
        colors: ['#FFD700', '#FFFFFF', '#FFF8DC'],
        emojis: ['✨', '⭐'],
        duration: { min: 400, max: 700 },
        spread: { x: 50, y: 50 },
        size: { min: 10, max: 18 },
      };
  }
};

export const ParticleEffects: React.FC<ParticleEffectsProps> = ({
  type,
  position = { x: 50, y: 50 },
  count: customCount,
  onComplete,
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  // Generate particles
  const generateParticles = useCallback(() => {
    const config = getParticleConfig(type);
    const particleCount = Math.min(customCount ?? config.count, MAX_PARTICLES);
    
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const useEmoji = config.emojis.length > 0 && Math.random() > 0.3;
      
      newParticles.push({
        id: generateId(),
        x: position.x + random(-20, 20),
        y: position.y + random(-20, 20),
        size: random(config.size.min, config.size.max),
        color: config.colors[Math.floor(Math.random() * config.colors.length)],
        emoji: useEmoji ? config.emojis[Math.floor(Math.random() * config.emojis.length)] : undefined,
        duration: random(config.duration.min, config.duration.max),
        delay: random(0, 200),
        tx: random(-config.spread.x, config.spread.x),
        ty: random(-config.spread.y, -config.spread.y / 4), // Mostly upward
      });
    }
    
    setParticles(newParticles);
    
    // Clean up after longest animation
    const maxDuration = Math.max(...newParticles.map(p => p.duration + p.delay));
    timeoutRef.current = window.setTimeout(() => {
      setParticles([]);
      onComplete?.();
    }, maxDuration + 100);
  }, [type, position, customCount, onComplete]);

  // Generate particles on mount
  useEffect(() => {
    generateParticles();
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [generateParticles]);

  if (particles.length === 0) return null;

  return (
    <div 
      ref={containerRef}
      className="particle-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        overflow: 'hidden',
      }}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.emoji ? 'auto' : `${particle.size}px`,
            height: particle.emoji ? 'auto' : `${particle.size}px`,
            fontSize: particle.emoji ? `${particle.size}px` : undefined,
            backgroundColor: particle.emoji ? 'transparent' : particle.color,
            borderRadius: particle.emoji ? undefined : '50%',
            opacity: 0,
            transform: 'translate(-50%, -50%) scale(0)',
            animation: `particle-burst ${particle.duration}ms ease-out ${particle.delay}ms forwards`,
            // CSS custom properties for animation
            ['--tx' as string]: `${particle.tx}px`,
            ['--ty' as string]: `${particle.ty}px`,
          }}
        >
          {particle.emoji}
        </div>
      ))}
      
      <style>{`
        @keyframes particle-burst {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
          }
          20% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translate(
              calc(-50% + var(--tx, 50px)), 
              calc(-50% + var(--ty, -50px))
            ) scale(0.5);
          }
        }
      `}</style>
    </div>
  );
};

// ============================================
// Particle Manager Hook
// For managing multiple particle effects
// ============================================

interface ParticleInstance {
  id: string;
  type: ParticleEffectsProps['type'];
  position: { x: number; y: number };
}

export const useParticleEffects = () => {
  const [instances, setInstances] = useState<ParticleInstance[]>([]);

  const emit = useCallback((
    type: ParticleEffectsProps['type'],
    position: { x: number; y: number }
  ) => {
    const id = generateId();
    setInstances(prev => [...prev, { id, type, position }]);
  }, []);

  const remove = useCallback((id: string) => {
    setInstances(prev => prev.filter(p => p.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setInstances([]);
  }, []);

  // Render all particle instances
  const ParticleLayer = useCallback(() => (
    <>
      {instances.map(instance => (
        <ParticleEffects
          key={instance.id}
          type={instance.type}
          position={instance.position}
          onComplete={() => remove(instance.id)}
        />
      ))}
    </>
  ), [instances, remove]);

  return {
    emit,
    clearAll,
    ParticleLayer,
    activeCount: instances.length,
  };
};

// ============================================
// Preset Particle Bursts
// ============================================

export const ParticleBurst: React.FC<{
  type: ParticleEffectsProps['type'];
  trigger: boolean;
  position?: { x: number; y: number };
  onComplete?: () => void;
}> = ({ type, trigger, position = { x: 50, y: 50 }, onComplete }) => {
  const [show, setShow] = useState(false);
  const prevTrigger = useRef(trigger);

  useEffect(() => {
    // Trigger on rising edge
    if (trigger && !prevTrigger.current) {
      setShow(true);
    }
    prevTrigger.current = trigger;
  }, [trigger]);

  if (!show) return null;

  return (
    <ParticleEffects
      type={type}
      position={position}
      onComplete={() => {
        setShow(false);
        onComplete?.();
      }}
    />
  );
};

export default ParticleEffects;
