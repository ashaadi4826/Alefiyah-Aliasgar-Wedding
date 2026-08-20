import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Copy, Check, Home } from 'lucide-react';
import { VENUES, HOME_LOCATION } from '../data/weddingData';
import { GoldFlourishDivider, SubtleFloralDivider } from './FloralDecor';
import { BotanicalWatercolorDecor, CardWatercolorDecor } from './BotanicalWatercolorDecor';

export const VenuesSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyAddress = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="venues" className="py-16 sm:py-24 px-4 relative overflow-hidden paper-texture">
      {/* Soft Watercolor Pastel Background with Hand-Drawn Edge Botanicals */}
      <BotanicalWatercolorDecor variant="venues" />

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
              Destinations
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#451019]">
              Venues &amp; Locations
            </h2>
            <p className="font-serif-luxury text-base sm:text-xl text-[#2D1117] max-w-lg mx-auto italic font-medium">
              Find your way effortlessly to the celebration venue in Rajkot.
            </p>
            <GoldFlourishDivider className="mt-3 max-w-xs" />
          </motion.div>
        </div>

        {/* Location Cards List / Grid - Continuous Soft Pastel Stationery */}
        <div className="space-y-7 sm:space-y-9">
          {/* Card 1: Family Residence / Our Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-6 sm:p-9 rounded-3xl bg-[#FAF5EE]/95 border border-[#D4AF7A] shadow-[0_8px_24px_-6px_rgba(91,26,36,0.08)] relative overflow-hidden text-center backdrop-blur-2xs"
          >
            {/* Interior floral & watercolor accents */}
            <CardWatercolorDecor theme="blush-sage" />

            <div className="relative z-10">
              <div className="flex flex-col items-center justify-center pb-2">
                <div className="w-8 h-8 rounded-full bg-[#FAF4ED] border border-[#D4AF7A] flex items-center justify-center text-[#B38747] shadow-2xs mb-1">
                  <Home className="w-4 h-4 text-[#8C1D2F]" />
                </div>
                <SubtleFloralDivider className="my-1 w-20" />
              </div>

              <div className="text-center">
                <span className="text-xs font-heading-caps px-3.5 py-1 rounded-full bg-[#FAF4ED] border border-[#D4AF7A] text-[#7A2837] font-bold uppercase tracking-wider inline-block mb-3 shadow-2xs">
                  Family Residence
                </span>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-bold text-[#451019] mb-2 tracking-wide">
                  Our Home
                </h3>

                <p className="font-serif-luxury text-sm sm:text-base md:text-lg text-[#2D1117] mb-4 italic max-w-md mx-auto font-medium">
                  For guests visiting our family residence during the festivities.
                </p>

                <div className="p-4 rounded-2xl bg-[#FFFDF9]/95 border border-[#D4AF7A] max-w-md mx-auto mb-5 text-center space-y-0.5 shadow-2xs">
                  <p className="font-serif-luxury text-lg sm:text-xl md:text-2xl font-bold text-[#451019]">
                    201 Maimoon Apartment,
                  </p>
                  <p className="font-serif-luxury text-base sm:text-lg md:text-xl text-[#24080D] font-semibold">
                    Sadar Bazar, Rajkot
                  </p>
                  <p className="text-xs font-heading-caps text-[#7A2837] uppercase tracking-wider font-bold pt-1">
                    Gujarat, India
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-[#D4AF7A]/60 flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto">
                  <a
                    href={HOME_LOCATION.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#5B1A24] hover:bg-[#451019] text-[#FAF4ED] text-xs font-bold uppercase tracking-wider font-heading-caps transition-all shadow-xs"
                  >
                    <Navigation className="w-4 h-4 text-[#D4AF7A]" />
                    <span>VIEW ON GOOGLE MAPS →</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopyAddress('home', HOME_LOCATION.address + ', Sadar Bazar, Rajkot, Gujarat, India')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-[#FAF4ED] hover:bg-[#EFE3D5] border border-[#D4AF7A] text-[#451019] text-xs font-heading-caps font-bold uppercase tracking-wider transition-colors shadow-2xs"
                    title="Copy address"
                  >
                    {copiedId === 'home' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        <span className="text-emerald-700 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#B38747]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cards 2 & 3: Celebration Venues Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {VENUES.map((venue, index) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.12 }}
                className="p-6 sm:p-8 rounded-3xl bg-[#FAF5EE]/95 border border-[#D4AF7A] shadow-[0_8px_24px_-6px_rgba(91,26,36,0.08)] flex flex-col justify-between relative overflow-hidden backdrop-blur-2xs"
              >
                {/* Interior floral & watercolor accents with alternating themes */}
                <CardWatercolorDecor theme={index % 2 === 0 ? 'peach-lavender' : 'champagne-blush'} />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="w-9 h-9 rounded-2xl bg-[#FAF4ED] border border-[#D4AF7A] flex items-center justify-center text-[#451019] shrink-0 shadow-2xs">
                        <MapPin className="w-4 h-4 text-[#B38747]" />
                      </div>
                      {venue.note && (
                        <span className="text-[10px] font-heading-caps px-2.5 py-1 rounded-full bg-[#FAF4ED] border border-[#D4AF7A] text-[#7A2837] font-bold uppercase tracking-wider text-right shadow-2xs">
                          {venue.note}
                        </span>
                      )}
                    </div>

                    {/* Venue Name */}
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#451019] mb-1 tracking-wide">
                      {venue.name}
                    </h3>

                    <p className="text-sm text-[#2D1117] mb-4 flex items-center gap-1.5 font-bold">
                      <span>{venue.city}</span>
                    </p>

                    {/* Associated Events List */}
                    <div className="mb-5 p-3 rounded-2xl bg-[#FFFDF9]/95 border border-[#D4AF7A]/80 shadow-2xs">
                      <span className="text-[10px] font-heading-caps text-[#7A2837] font-bold uppercase tracking-wider block mb-1.5">
                        Hosting Ceremonies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {venue.associatedEvents.map((evt) => (
                          <span
                            key={evt}
                            className="text-xs px-2 py-0.5 rounded-lg bg-[#FAF4ED] border border-[#D4AF7A] text-[#451019] font-bold shadow-2xs"
                          >
                            {evt}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons: View Location & Copy */}
                  <div className="pt-3 border-t border-[#D4AF7A]/60 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <a
                      href={venue.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#5B1A24] hover:bg-[#451019] text-[#FAF4ED] text-xs font-bold uppercase tracking-wider font-heading-caps transition-all shadow-xs"
                    >
                      <Navigation className="w-4 h-4 text-[#D4AF7A]" />
                      <span>VIEW ON GOOGLE MAPS →</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleCopyAddress(venue.id, venue.fullAddress || venue.name)}
                      className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-[#FAF4ED] hover:bg-[#EFE3D5] border border-[#D4AF7A] text-[#451019] text-xs font-heading-caps font-bold uppercase tracking-wider transition-colors shadow-2xs"
                      title="Copy address"
                    >
                      {copiedId === venue.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-700" />
                          <span className="text-emerald-700 font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#B38747]" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
