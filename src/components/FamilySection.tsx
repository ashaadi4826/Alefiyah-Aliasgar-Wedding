import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { FAMILY_DATA } from '../data/weddingData';
import { GoldFlourishDivider, SubtleFloralDivider } from './FloralDecor';
import { BotanicalWatercolorDecor, CardWatercolorDecor } from './BotanicalWatercolorDecor';

export const FamilySection: React.FC = () => {
  return (
    <section id="families" className="py-16 sm:py-24 px-4 relative overflow-hidden paper-texture">
      {/* Soft Watercolor Pastel Background with Hand-Drawn Edge Botanicals */}
      <BotanicalWatercolorDecor variant="family" />

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
            <span className="font-heading-caps text-xs uppercase tracking-[0.25em] text-[#7A2837] font-bold">
              Elders &amp; Loved Ones
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#451019]">
              With the Blessings of Our Families
            </h2>
            <p className="font-serif-luxury text-base sm:text-xl text-[#2D1117] max-w-lg mx-auto italic font-medium">
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
              className="p-6 sm:p-9 rounded-3xl bg-[#FAF5EE]/95 border border-[#D4AF7A] shadow-[0_8px_24px_-6px_rgba(91,26,36,0.08)] relative overflow-hidden flex flex-col justify-between backdrop-blur-2xs"
            >
              {/* Botanical and floral watercolor details inside the family card */}
              <CardWatercolorDecor theme={idx === 0 ? 'champagne-blush' : 'peach-lavender'} />

              <div className="relative z-10 flex flex-col justify-between h-full">
                {/* Top Crest */}
                <div className="flex flex-col items-center justify-center pb-2">
                  <div className="w-8 h-8 rounded-full bg-[#FAF4ED] border border-[#D4AF7A] flex items-center justify-center text-[#B38747] shadow-2xs mb-1">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <SubtleFloralDivider className="my-1 w-20" />
                </div>

                <div>
                  {/* Family Side Badge & Title */}
                  <div className="text-center pb-4 mb-4 border-b border-[#D4AF7A]/60">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF4ED] border border-[#D4AF7A] text-[#7A2837] text-xs font-heading-caps font-bold uppercase tracking-wider mb-2 shadow-2xs">
                      <Heart className="w-3.5 h-3.5 text-[#8C1D2F] fill-[#8C1D2F]" />
                      <span>{family.side}</span>
                    </span>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#451019] tracking-wide">
                      {family.side === "Bride's Family" ? "Tinwala Family" : "Shakir Family"}
                    </h3>
                  </div>

                  {/* Family Members List with Delicate Dividers */}
                  <div className="space-y-3.5">
                    {family.members.map((member, mIdx) => (
                      <div key={`${member.relation}-${member.name}`}>
                        <div className="text-center group">
                          <span className="text-[11px] font-heading-caps text-[#7A2837] uppercase tracking-[0.2em] font-bold block">
                            {member.relation}
                          </span>
                          <span className="font-serif-luxury text-lg sm:text-xl md:text-2xl font-bold text-[#24080D] block mt-0.5 group-hover:text-[#451019] transition-colors">
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
                <div className="mt-6 pt-3 border-t border-[#D4AF7A]/60 text-center">
                  <span className="font-script-luxury text-2xl sm:text-3xl font-bold text-[#7A2837]">
                    With immense joy &amp; prayers
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
