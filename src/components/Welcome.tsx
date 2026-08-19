import React from 'react';
import { motion } from 'motion/react';
import { GoldFlourishDivider, SubtleFloralDivider } from './FloralDecor';
import cornerFloralImg from '../assets/images/floral_corner_rose_1787042316490.jpg';

export const Welcome: React.FC = () => {
  return (
    <section id="welcome" className="py-16 sm:py-24 px-4 bg-[#F4ECE1] relative overflow-hidden paper-texture">
      {/* Decorative background accents */}
      <div className="absolute top-0 right-0 w-36 sm:w-56 opacity-25 pointer-events-none select-none">
        <img
          src={cornerFloralImg}
          alt=""
          className="w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-36 sm:w-56 opacity-25 pointer-events-none select-none scale-[-1]">
        <img
          src={cornerFloralImg}
          alt=""
          className="w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Royal Arch Shaped Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1 }}
          className="card-royal-arch p-7 sm:p-12 md:p-14 text-center relative overflow-hidden"
        >
          {/* Top Royal Arch Filigree & Seal */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#F4ECE1] border-2 border-[#D4AF7A]/70 flex items-center justify-center shadow-xs text-[#B38747] mb-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="rgba(194, 155, 93, 0.25)" />
                <circle cx="12" cy="12" r="2" fill="#B38747" />
              </svg>
            </div>
            <GoldFlourishDivider className="my-2" />
          </div>

          {/* 1. Sacred Benediction / Dua Inscription */}
          <div className="mb-8 px-2 sm:px-6">
            <p className="font-serif-luxury text-sm sm:text-base md:text-lg text-[#451019] leading-relaxed sm:leading-loose font-medium italic tracking-wide">
              By the Grace of Allah Ta&apos;ala, Vasila-e-Panjatan Pak (A.S.), Aimmat Taherein (A.S.), Immam-uz-Zamaan (A.S.), Duat Mutalaqin (R.A.), Syedna Moahmmed Burhanuddin (R.A.), and with the kind benedictions of Syedna Aali Qadar Mufaddal Saifuddin (T.U.S.)
            </p>
          </div>

          <SubtleFloralDivider className="my-6" />

          {/* 2. Parents' Host Names */}
          <div className="my-6 space-y-1">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-bold text-[#5B1A24] tracking-wide">
              Mr Taher &amp; Mrs Rashida Tinwala
            </h3>
          </div>

          {/* 3. Official Invitation Request */}
          <div className="my-6 px-2 sm:px-8">
            <p className="font-serif-luxury text-lg sm:text-xl md:text-2xl text-[#2A080E] leading-relaxed sm:leading-loose font-normal">
              Cordially invite you and request the honor of your gracious presence on the auspicious occasion of the Wedding Ceremony of our daughter.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

