import React from 'react';
import { motion } from 'motion/react';
import floralBannerImg from '../assets/images/envelope_floral_frame_1787042304335.jpg';
import { GoldFlourishDivider } from './FloralDecor';
import { Heart } from 'lucide-react';

export const FinalClosing: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 bg-[#F4ECE1] relative overflow-hidden paper-texture">
      {/* Background floral framing */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-44 opacity-25 pointer-events-none select-none">
        <img
          src={floralBannerImg}
          alt=""
          className="w-full h-full object-contain object-bottom scale-y-[-1]"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="card-royal-arch p-8 sm:p-14 relative overflow-hidden space-y-6"
        >
          {/* Rose Logo Asset - Transparent Standalone Wedding Emblem (No box) */}
          <div className="w-40 h-40 sm:w-52 sm:h-52 mx-auto flex items-center justify-center relative">
            <img
              src="/IMG_20260818_135503.png"
              alt=""
              className="w-full h-full object-contain select-none transition-transform duration-500 hover:scale-105"
              loading="eager"
            />
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#5B1A24] tracking-wide">
              <span className="shimmer-gold font-semibold">Alefiyah</span>
              <span className="font-script-luxury text-3xl sm:text-4xl md:text-5xl text-[#B38747] font-normal mx-2">
                &amp;
              </span>
              <span className="shimmer-gold font-semibold">Aliasgar</span>
            </h2>

            <GoldFlourishDivider className="my-4" />

            <p className="font-serif-luxury text-xl sm:text-2xl text-[#4A3236] leading-relaxed max-w-md mx-auto italic">
              We can't wait to celebrate these beautiful moments with you.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-center gap-2 text-[#8C6228]">
            <Heart className="w-3.5 h-3.5 fill-[#B38747]/20 text-[#B38747]" />
            <span className="font-heading-caps text-xs uppercase tracking-[0.25em] font-semibold">
              With Love, Blessings &amp; Warmth
            </span>
            <Heart className="w-3.5 h-3.5 fill-[#B38747]/20 text-[#B38747]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
