import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { COUPLE } from '../data/weddingData';
import { Sparkles, Heart } from 'lucide-react';
import { GoldFlourishDivider } from './FloralDecor';
import { BotanicalWatercolorDecor } from './BotanicalWatercolorDecor';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const target = COUPLE.targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
      setIsCalculated(true);
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-14 sm:py-20 px-4 relative overflow-hidden border-y border-[#E3C594]/50 paper-texture">
      {/* Soft Watercolor Pastel Background with Subtle Botanical Accents */}
      <BotanicalWatercolorDecor variant="countdown" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          {/* Header */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-[#B38747]">
              <Sparkles className="w-3.5 h-3.5 text-[#B38747]" />
              <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-bold text-[#451019] tracking-wider uppercase">
                The Countdown Begins
              </h2>
              <Sparkles className="w-3.5 h-3.5 text-[#B38747]" />
            </div>

            {/* Exactly Two Separate Lines for the Date */}
            <div className="space-y-1 pt-1">
              <p className="font-serif-luxury text-xl sm:text-2xl md:text-3xl text-[#24080D] font-bold tracking-wider">
                24 — 26 Rabi al-Akhar 1448 H
              </p>
              <p className="font-serif-luxury text-lg sm:text-xl md:text-2xl text-[#6B1B29] font-bold tracking-wider">
                6 — 8 October 2026 · Rajkot
              </p>
            </div>
          </div>

          <GoldFlourishDivider className="my-2 max-w-xs" />

          {/* Time Counter Continuous Soft Pastel Tiles (Bolder text, high mobile readability) */}
          <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-lg mx-auto pt-2">
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className="py-3.5 px-2 sm:py-5 sm:px-4 rounded-2xl sm:rounded-3xl bg-[#EFE3D5] border border-[#D4AF7A] shadow-[0_4px_16px_rgba(91,26,36,0.08)] flex flex-col items-center justify-center relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:border-[#B38747]"
              >
                <span className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-bold text-[#451019] tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {isCalculated ? String(unit.value).padStart(2, '0') : '--'}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7A2837] font-heading-caps font-bold mt-1">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Line: Until our forever… */}
          <div className="flex items-center justify-center gap-2 pt-2 text-[#451019] font-serif-luxury italic text-lg sm:text-xl font-bold">
            <Heart className="w-4 h-4 text-[#B38747] fill-[#B38747]" />
            <span>Until our forever…</span>
            <Heart className="w-4 h-4 text-[#B38747] fill-[#B38747]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
