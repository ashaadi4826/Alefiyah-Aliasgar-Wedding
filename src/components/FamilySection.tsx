import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { FAMILY_DATA } from '../data/weddingData';
import { GoldFlourishDivider, SubtleFloralDivider } from './FloralDecor';
import cornerFloralImg from '../assets/images/floral_corner_rose_1787042316490.jpg';

export const FamilySection: React.FC = () => {
  return (
    <section id="families" className="py-16 sm:py-24 px-4 bg-[#F4ECE1] relative overflow-hidden paper-texture">
      {/* Subtle Corner Florals */}
      <div className="absolute top-0 left-0 w-36 sm:w-44 opacity-25 pointer-events-none select-none">
        <img
          src={cornerFloralImg}
          alt=""
          className="w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute top-0 right-0 w-36 sm:w-44 opacity-25 pointer-events-none select-none scale-x-[-1]">
        <img
          src={cornerFloralImg}
          alt=""
          className="w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <span className="font-heading-caps text-xs uppercase tracking-[0.25em] text-[#8C6228] font-bold">
              Elders &amp; Loved Ones
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#5B1A24]">
              With the Blessings of Our Families
            </h2>
            <p className="font-serif-luxury text-base sm:text-lg text-[#5C4549] max-w-lg mx-auto italic">
              United in joy, love, and gratitude as we welcome you to our celebration.
            </p>
            <GoldFlourishDivider className="mt-3 max-w-xs" />
          </motion.div>
        </div>

        {/* Two Columns for Bride's and Groom's Families - Continuous Soft Pastel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-9">
          {FAMILY_DATA.map((family, idx) => (
            <motion.div
              key={family.side}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="p-6 sm:p-9 rounded-3xl bg-[#EADCCB]/50 border border-[#D4AF7A]/70 shadow-[0_8px_24px_-6px_rgba(91,26,36,0.06)] relative overflow-hidden flex flex-col justify-between"
            >
              {/* Top Crest */}
              <div className="flex flex-col items-center justify-center pb-2">
                <div className="w-7 h-7 rounded-full bg-[#F4ECE1] border border-[#D4AF7A] flex items-center justify-center text-[#B38747] shadow-2xs mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <SubtleFloralDivider className="my-1 w-20" />
              </div>

              <div>
                {/* Family Side Badge & Title */}
                <div className="text-center pb-4 mb-4 border-b border-[#E3C594]/50">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4ECE1]/80 border border-[#D4AF7A]/60 text-[#8C6228] text-xs font-heading-caps font-bold uppercase tracking-wider mb-2">
                    <Heart className="w-3 h-3 text-[#8C1D2F] fill-[#8C1D2F]/20" />
                    <span>{family.side}</span>
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#5B1A24] tracking-wide">
                    {family.side === "Bride's Family" ? "Tinwala Family" : "Shakir Family"}
                  </h3>
                </div>

                {/* Family Members List with Delicate Dividers */}
                <div className="space-y-3.5">
                  {family.members.map((member, mIdx) => (
                    <div key={`${member.relation}-${member.name}`}>
                      <div className="text-center group">
                        <span className="text-[10px] font-heading-caps text-[#8C6228] uppercase tracking-[0.2em] font-bold block">
                          {member.relation}
                        </span>
                        <span className="font-serif-luxury text-lg sm:text-xl font-bold text-[#5B1A24] block mt-0.5 group-hover:text-[#7A2837] transition-colors">
                          {member.name}
                        </span>
                      </div>

                      {/* Floral divider between members */}
                      {mIdx < family.members.length - 1 && (
                        <SubtleFloralDivider className="my-2.5" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom auspicious accent */}
              <div className="mt-6 pt-3 border-t border-[#E3C594]/50 text-center">
                <span className="font-script-luxury text-2xl sm:text-3xl text-[#8C6228]">
                  With immense joy &amp; prayers
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
