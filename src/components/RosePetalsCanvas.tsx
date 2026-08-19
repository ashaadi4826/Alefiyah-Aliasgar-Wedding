import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  colorType: 'rose-blush' | 'rose-crimson' | 'gold-petal' | 'soft-pink';
  flip: number;
  flipSpeed: number;
}

export const RosePetalsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Color palettes for authentic wedding rose petals
    const petalColors = {
      'rose-blush': ['#EAA8B4', '#F4C2CC', '#D68C9B'],
      'rose-crimson': ['#852033', '#6A1524', '#992B40'],
      'gold-petal': ['#E5C38E', '#D4AF7A', '#C29B5D'],
      'soft-pink': ['#FDE8EC', '#F8D1DA', '#F3B4C2'],
    };

    const petalCount = window.innerWidth < 768 ? 20 : 36;
    const petals: Petal[] = [];

    const types: ('rose-blush' | 'rose-crimson' | 'gold-petal' | 'soft-pink')[] = [
      'rose-blush',
      'rose-blush',
      'rose-crimson',
      'soft-pink',
      'gold-petal',
    ];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 10 + 10, // 10px to 20px
        speedX: Math.random() * 1.5 - 0.75,
        speedY: Math.random() * 1.2 + 0.8,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        opacity: Math.random() * 0.4 + 0.5,
        colorType: types[Math.floor(Math.random() * types.length)],
        flip: Math.random() * Math.PI,
        flipSpeed: Math.random() * 0.03 + 0.01,
      });
    }

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.scale(Math.sin(p.flip), 1);

      const colors = petalColors[p.colorType];
      const grad = ctx.createLinearGradient(-p.size / 2, -p.size, p.size / 2, p.size);
      grad.addColorStop(0, colors[0]);
      grad.addColorStop(0.7, colors[1]);
      grad.addColorStop(1, colors[2] || colors[0]);

      ctx.beginPath();
      ctx.fillStyle = grad;
      ctx.globalAlpha = p.opacity;

      // Realistic curved rose petal geometry
      ctx.moveTo(0, -p.size);
      ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.8, p.size, p.size * 0.3, 0, p.size);
      ctx.bezierCurveTo(-p.size, p.size * 0.3, -p.size * 0.8, -p.size * 0.8, 0, -p.size);
      ctx.fill();

      // Delicate petal center vein
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 0.8;
      ctx.moveTo(0, -p.size * 0.8);
      ctx.lineTo(0, p.size * 0.8);
      ctx.stroke();

      ctx.restore();
    };

    let windAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      windAngle += 0.015;
      const windEffect = Math.sin(windAngle) * 0.7;

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.speedY;
        p.x += p.speedX + windEffect;
        p.rotation += p.rotationSpeed;
        p.flip += p.flipSpeed;

        // Wrap around bottom/top & sides
        if (p.y > height + 40) {
          p.y = -30;
          p.x = Math.random() * width;
        }
        if (p.x > width + 40) p.x = -30;
        if (p.x < -40) p.x = width + 30;

        drawPetal(p);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive]);

  return (
    <>
      {/* Floating Canvas across entire screen */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-30 w-full h-full"
        style={{ display: isActive ? 'block' : 'none' }}
      />

      {/* Gentle Floating Controls */}
      <button
        onClick={() => setIsActive(!isActive)}
        className="fixed top-20 right-4 z-40 p-2 rounded-full bg-[#FFFDF9]/85 backdrop-blur-md border border-[#E3C594]/80 shadow-md text-[#5B1A24] hover:text-[#B38747] transition-all text-xs flex items-center gap-1.5 px-3"
        title={isActive ? "Pause rose petals animation" : "Play rose petals animation"}
      >
        <Sparkles className={`w-3.5 h-3.5 ${isActive ? 'text-[#B38747] animate-spin-slow' : 'text-stone-400'}`} />
        <span className="text-[10px] font-heading-caps tracking-wider uppercase font-semibold hidden sm:inline">
          {isActive ? "Rose Petals: On" : "Petals: Off"}
        </span>
      </button>
    </>
  );
};
