import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ChevronDown } from 'lucide-react';
import logoRoseImg from '../assets/images/wedding_logo_rose.png';
import floralBannerImg from '../assets/images/envelope_floral_frame_1787042304335.jpg';
import cornerFloralImg from '../assets/images/floral_corner_rose_1787042316490.jpg';
import { GoldFlourishDivider, SubtleFloralDivider } from './FloralDecor';
import { FloatingRosePetals } from './FloatingRosePetals';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-between pt-16 sm:pt-20 pb-8 px-4 sm:px-6 overflow-hidden paper-texture bg-[#F4ECE1]"
    >
      {/* Subtle Floating Rose Petals across the backdrop */}
      <FloatingRosePetals count={14} className="z-0 opacity-75" />

      {/* Background Floral Frame Accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-36 sm:h-48 pointer-events-none opacity-30 select-none overflow-hidden"
      >
        <img
          src={floralBannerImg}
          alt="Floral Frame Banner"
          className="w-full h-full object-cover sm:object-contain object-top"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Subtle Corner Florals */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={{ opacity: 0.45, x: 0, y: 0 }}
        transition={{ duration: 1.6, delay: 0.3 }}
        className="absolute -top-4 -left-4 sm:top-2 sm:left-2 w-28 sm:w-44 pointer-events-none select-none"
      >
        <img
          src={cornerFloralImg}
          alt="Corner Floral Accent"
          className="w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 0.45, x: 0, y: 0 }}
        transition={{ duration: 1.6, delay: 0.3 }}
        className="absolute -top-4 -right-4 sm:top-2 sm:right-2 w-28 sm:w-44 pointer-events-none select-none scale-x-[-1]"
      >
        <img
          src={cornerFloralImg}
          alt="Corner Floral Accent"
          className="w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Main Royal Wedding Presentation - Continuous Soft Pastel Canvas (No white boxes) */}
      <div className="w-full max-w-3xl my-auto flex flex-col items-center text-center relative z-10 py-4 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative flex flex-col items-center"
        >
          {/* 1. Subtle Badge: The wedding celebration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#EADCCB]/80 border border-[#D4AF7A]/60 text-[#8C6228] text-xs sm:text-sm tracking-[0.22em] uppercase font-heading-caps font-bold mb-4 sm:mb-6 shadow-2xs backdrop-blur-xs relative z-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B38747]" />
            <span>The wedding celebration</span>
            <Sparkles className="w-3.5 h-3.5 text-[#B38747]" />
          </motion.div>

          {/* 2. Wedding Logo - Royal Rose Calligraphy Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.35, ease: "easeOut" }}
            className="relative mx-auto mb-2 sm:mb-3 z-10 flex items-center justify-center"
          >
            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-88 md:h-88 mx-auto flex items-center justify-center relative">
              <img
                src={logoRoseImg}
                alt="Alefiyah & Aliasgar Rose Calligraphy Wedding Logo"
                className="w-full h-full object-contain select-none transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* 3. Directly Below Logo: Alefiyah Weds Aliasgar with Luxury Shaded Wedding Typography */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="w-full text-center my-3 sm:my-4 px-2"
          >
            <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide text-[#5B1A24] leading-tight drop-shadow-[0_2px_8px_rgba(91,26,36,0.14)]">
              <span className="shimmer-gold">Alefiyah</span>
              <span className="font-script-luxury text-3xl sm:text-5xl md:text-6xl text-[#B38747] font-normal mx-2 sm:mx-3 inline-block -rotate-2">
                Weds
              </span>
              <span className="shimmer-gold">Aliasgar</span>
            </h1>

            {/* Subtle Gold Underline Flourish */}
            <div className="w-28 sm:w-40 h-[1.5px] bg-gradient-to-r from-transparent via-[#C29B5D] to-transparent mx-auto mt-2 opacity-80" />
          </motion.div>

          <GoldFlourishDivider className="my-4 sm:my-6 max-w-sm" />

          {/* 4. Sacred Benediction / Dua Inscription - Direct on Continuous Soft Canvas */}
          <div className="max-w-2xl mx-auto my-3 px-3 sm:px-6">
            <p className="font-serif-luxury text-sm sm:text-base md:text-lg text-[#451019] leading-relaxed sm:leading-loose font-medium italic tracking-wide">
              By the Grace of Allah Ta&apos;ala, Vasila-e-Panjatan Pak (A.S.), Aimmat Taherein (A.S.), Immam-uz-Zamaan (A.S.), Duat Mutalaqin (R.A.), Syedna Moahmmed Burhanuddin (R.A.), and with the kind benedictions of Syedna Aali Qadar Mufaddal Saifuddin (T.U.S.)
            </p>
          </div>

          <SubtleFloralDivider className="my-3 sm:my-4 w-28 mx-auto" />

          {/* 5. Host Parents */}
          <div className="my-2 sm:my-3 space-y-1">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-bold text-[#5B1A24] tracking-wide">
              Mr Taher &amp; Mrs Rashida Tinwala
            </h2>
          </div>

          {/* 6. Cordial Invitation Request */}
          <div className="my-3 sm:my-4 max-w-2xl mx-auto px-3 sm:px-6">
            <p className="font-serif-luxury text-base sm:text-xl md:text-2xl text-[#2A080E] leading-relaxed sm:leading-loose font-normal">
              Cordially invite you and request the honor of your gracious presence on the auspicious occasion of the Wedding Ceremony of our daughter.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator to Countdown */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 pt-2 pb-1 text-center"
      >
        <a
          href="#countdown"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#countdown')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group inline-flex flex-col items-center gap-1 text-[#8C6228] hover:text-[#5B1A24] transition-colors"
        >
          <span className="font-heading-caps text-[11px] sm:text-xs tracking-[0.2em] uppercase font-medium">
            Scroll to celebrations
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-[#B38747] group-hover:text-[#5B1A24]" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
