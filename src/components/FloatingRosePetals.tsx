import React, { useMemo } from 'react';
import { motion } from 'motion/react';

interface PetalConfig {
  id: number;
  startX: number; // percentage across container (0 - 100)
  driftX: number; // horizontal sway distance (px)
  startY: number;
  duration: number; // seconds
  delay: number; // seconds
  size: number; // px width/height
  rotationStart: number;
  rotationEnd: number;
  opacity: number;
  colorType: 'crimson' | 'rose' | 'deepRuby' | 'goldKissed';
}

export const FloatingRosePetals: React.FC<{ count?: number; className?: string }> = ({
  count = 14,
  className = '',
}) => {
  // Generate deterministic randomized petal properties to avoid re-render recalculation
  const petals: PetalConfig[] = useMemo(() => {
    const types: ('crimson' | 'rose' | 'deepRuby' | 'goldKissed')[] = [
      'crimson',
      'rose',
      'deepRuby',
      'crimson',
      'rose',
      'goldKissed',
    ];

    return Array.from({ length: count }, (_, i) => {
      // Concentrate petals mostly across the center-left to center-right (20% to 80%) over the names
      const startX = 15 + (i * 70) / count + (Math.sin(i * 3.7) * 8);
      const driftX = (i % 2 === 0 ? 1 : -1) * (20 + (i * 5) % 35);
      const duration = 6.5 + (i % 5) * 1.5;
      const delay = (i * 0.8) % 7;
      const size = 14 + (i % 4) * 4; // 14px to 26px
      const rotationStart = (i * 45) % 360;
      const rotationEnd = rotationStart + (i % 2 === 0 ? 360 : -360) + 90;
      const opacity = 0.55 + (i % 3) * 0.15;
      const colorType = types[i % types.length];

      return {
        id: i,
        startX: Math.max(5, Math.min(95, startX)),
        driftX,
        startY: -20,
        duration,
        delay,
        size,
        rotationStart,
        rotationEnd,
        opacity,
        colorType,
      };
    });
  }, [count]);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden z-20 select-none ${className}`}
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            y: '-10%',
            x: `${petal.startX}%`,
            rotate: petal.rotationStart,
            scale: 0.7,
            opacity: 0,
          }}
          animate={{
            y: ['0%', '25%', '60%', '115%'],
            x: [
              `${petal.startX}%`,
              `${petal.startX + petal.driftX * 0.05}%`,
              `${petal.startX - petal.driftX * 0.04}%`,
              `${petal.startX + petal.driftX * 0.08}%`,
            ],
            rotate: [petal.rotationStart, petal.rotationStart + 90, petal.rotationStart + 220, petal.rotationEnd],
            rotateX: [0, 45, 180, 270],
            rotateY: [0, 90, 180, 360],
            opacity: [0, petal.opacity, petal.opacity * 0.9, 0],
            scale: [0.75, 1, 0.95, 0.7],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            width: petal.size,
            height: petal.size * 1.3,
            top: 0,
            left: 0,
          }}
        >
          <svg
            viewBox="0 0 30 40"
            className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(91,26,36,0.15)]"
          >
            <defs>
              <linearGradient id={`petal-grad-${petal.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                {petal.colorType === 'goldKissed' ? (
                  <>
                    <stop offset="0%" stopColor="#C29B5D" stopOpacity="0.9" />
                    <stop offset="40%" stopColor="#8A1C2C" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#5B1A24" stopOpacity="0.9" />
                  </>
                ) : petal.colorType === 'deepRuby' ? (
                  <>
                    <stop offset="0%" stopColor="#801826" />
                    <stop offset="60%" stopColor="#5B1A24" />
                    <stop offset="100%" stopColor="#3D0B12" />
                  </>
                ) : petal.colorType === 'rose' ? (
                  <>
                    <stop offset="0%" stopColor="#D97B88" />
                    <stop offset="50%" stopColor="#9E2738" />
                    <stop offset="100%" stopColor="#6E1B27" />
                  </>
                ) : (
                  <>
                    <stop offset="0%" stopColor="#B32B3E" />
                    <stop offset="60%" stopColor="#7A1D2B" />
                    <stop offset="100%" stopColor="#4A0E17" />
                  </>
                )}
              </linearGradient>
            </defs>
            {/* Elegant organic curved rose petal path */}
            <path
              d="M15,2 C22,4 28,12 28,24 C28,33 21,38 15,38 C9,38 2,33 2,24 C2,12 8,4 15,2 Z"
              fill={`url(#petal-grad-${petal.id})`}
            />
            {/* Subtle inner petal vein highlight */}
            <path
              d="M15,6 Q16,20 15,34"
              stroke="#FFF"
              strokeWidth="0.5"
              strokeOpacity="0.2"
              fill="none"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
