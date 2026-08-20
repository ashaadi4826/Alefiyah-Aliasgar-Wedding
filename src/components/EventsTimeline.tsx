import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, Sparkles, Heart } from 'lucide-react';
import { WEDDING_EVENTS } from '../data/weddingData';
import { GoldFlourishDivider, SubtleFloralDivider } from './FloralDecor';
import { BotanicalWatercolorDecor, CardWatercolorDecor, CardAccentTheme } from './BotanicalWatercolorDecor';

// Helper to format event titles in beautiful title case for luxury calligraphy display
const formatEventTitle = (rawTitle: string): string => {
  const map: Record<string, string> = {
    'MEHENDI': 'Mehendi',
    'MITHI SHITABI & JAMAN': 'Mithi Shitabi & Jaman',
    'KATHA NI RASAM': 'Katha ni Rasam',
    'DAREES & KHUSHI NU JAMAN': 'Darees & Khushi nu Jaman',
    'NIKAH NI MAJLIS & KHUSHI NU JAMAN': 'Nikah ni Majlis & Khushi nu Jaman',
  };
  return map[rawTitle] || rawTitle;
};

// Map each event to a tailored pastel botanical theme
const EVENT_CARD_THEMES: CardAccentTheme[] = [
  'blush-sage',      // Mehendi
  'peach-lavender',  // Mithi Shitabi & Jaman
  'champagne-blush', // Katha ni Rasam
  'lavender-sage',   // Darees & Khushi nu Jaman
  'coral-yellow',    // Nikah ni Majlis & Khushi nu Jaman
];

export const EventsTimeline: React.FC = () => {
  return (
    <section id="events" className="py-16 sm:py-24 px-4 relative overflow-hidden paper-texture">
      {/* Soft Watercolor Pastel Background with Hand-Drawn Edge Botanicals */}
      <BotanicalWatercolorDecor variant="events" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE3D5] border border-[#D4AF7A] text-[#7A2837] text-xs uppercase tracking-[0.22em] font-heading-caps font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#B38747]" />
              <span>Program of Celebrations</span>
              <Sparkles className="w-3.5 h-3.5 text-[#B38747]" />
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#451019] tracking-wide">
              Wedding Events
            </h2>
            <p className="font-serif-luxury text-base sm:text-xl text-[#2D1117] max-w-lg mx-auto italic font-medium">
              Please join us in celebrating each auspicious ceremony with prayers, love, and joy.
            </p>
            <GoldFlourishDivider className="mt-3 max-w-xs" />
          </motion.div>
        </div>

        {/* Continuous Soft Pastel Stationery Cards with Floral Botanical Details */}
        <div className="space-y-7 sm:space-y-9">
          {WEDDING_EVENTS.map((event, index) => {
            const formattedTitle = formatEventTitle(event.title);
            const cardTheme = EVENT_CARD_THEMES[index % EVENT_CARD_THEMES.length];

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="w-full"
              >
                <div className="p-6 sm:p-9 rounded-3xl bg-[#FAF5EE]/95 border border-[#D4AF7A] shadow-[0_8px_24px_-6px_rgba(91,26,36,0.08)] text-center flex flex-col items-center relative overflow-hidden backdrop-blur-2xs">
                  {/* Subtle Botanical & Floral Watercolor details inside the card */}
                  <CardWatercolorDecor theme={cardTheme} />

                  {/* Relative Content Layer on top of Card Watercolor Details */}
                  <div className="relative z-10 w-full flex flex-col items-center">
                    {/* Subtle top emblem */}
                    <div className="flex flex-col items-center justify-center pt-1 pb-1">
                      <div className="w-8 h-8 rounded-full bg-[#FAF4ED] border border-[#D4AF7A] flex items-center justify-center text-[#B38747] mb-1 shadow-2xs">
                        <Heart className="w-4 h-4 fill-[#B38747] text-[#8C1D2F]" />
                      </div>
                      <SubtleFloralDivider className="my-1 w-20" />
                    </div>

                    {/* 1. EVENT TITLE - Creative Fancy Luxury Wedding Display Font with Shaded Depth */}
                    <div className="mt-1 mb-2.5 px-2">
                      <h3 className="event-title-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide py-0.5">
                        {formattedTitle}
                      </h3>
                    </div>

                    {/* 2. POETIC TWO-LINE DESCRIPTION (Bold, legible on mobile) */}
                    {event.description && (
                      <div className="w-full max-w-md mb-4 px-4 py-3 rounded-2xl bg-[#FFFDF9]/95 border border-[#D4AF7A]/75 text-center shadow-2xs">
                        <div className="flex flex-col items-center justify-center space-y-0.5">
                          {event.description.split('\n').map((line, lIdx) => (
                            <p
                              key={lIdx}
                              className="font-serif-luxury text-sm sm:text-base md:text-lg text-[#24080D] font-bold leading-relaxed italic tracking-wide"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 3 & 4. DATES (Strictly on Two Separate Lines, High Contrast) */}
                    <div className="w-full max-w-md mb-3 flex flex-col items-center justify-center gap-1.5 p-3.5 rounded-2xl bg-[#FFFDF9]/95 border border-[#D4AF7A] shadow-2xs">
                      <span className="font-serif-luxury text-base sm:text-lg md:text-xl font-bold text-[#451019] tracking-wide block">
                        {event.gregorianDate} · {event.dayOfWeek}
                      </span>
                      <div className="w-16 h-[1.5px] bg-[#D4AF7A] my-0.5" />
                      <span className="font-serif-luxury text-lg sm:text-xl md:text-2xl font-bold text-[#6B1B29] tracking-wide block">
                        {event.hijriDate.replace('1448 H', '1448\u00A0H')}
                      </span>
                    </div>

                    {/* 5. TIME (Mobile-friendly layout, bold typography) */}
                    {event.processionTime && event.majlisTime ? (
                      <div className="w-full max-w-md mb-2.5 p-3 rounded-2xl bg-[#FFFDF9]/95 border border-[#D4AF7A]/80 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-6 shadow-2xs">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#FAF4ED] border border-[#D4AF7A] flex items-center justify-center text-[#6B1B29] shrink-0 shadow-2xs">
                            <Clock className="w-4 h-4" />
                          </div>
                          <div className="text-left">
                            <span className="text-[10px] uppercase tracking-wider font-heading-caps text-[#7A2837] font-bold block">
                              Procession Time
                            </span>
                            <span className="font-serif-luxury text-base sm:text-lg font-bold text-[#24080D]">
                              {event.processionTime}
                            </span>
                          </div>
                        </div>

                        <div className="hidden sm:block w-[1px] h-7 bg-[#D4AF7A]" />

                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#FAF4ED] border border-[#D4AF7A] flex items-center justify-center text-[#6B1B29] shrink-0 shadow-2xs">
                            <Clock className="w-4 h-4" />
                          </div>
                          <div className="text-left">
                            <span className="text-[10px] uppercase tracking-wider font-heading-caps text-[#7A2837] font-bold block">
                              Majlis Time
                            </span>
                            <span className="font-serif-luxury text-base sm:text-lg font-bold text-[#24080D]">
                              {event.majlisTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full max-w-md mb-2.5 p-3 rounded-2xl bg-[#FFFDF9]/95 border border-[#D4AF7A]/80 flex items-center justify-center gap-2.5 shadow-2xs">
                        <div className="w-8 h-8 rounded-lg bg-[#FAF4ED] border border-[#D4AF7A] flex items-center justify-center text-[#6B1B29] shrink-0 shadow-2xs">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div className="text-center">
                          <span className="text-[10px] uppercase tracking-wider font-heading-caps text-[#7A2837] font-bold block">
                            Time
                          </span>
                          <span className="font-serif-luxury text-base sm:text-lg font-bold text-[#24080D]">
                            {event.time}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* 6. VENUE */}
                    <div className="w-full max-w-md p-3 rounded-2xl bg-[#FFFDF9]/95 border border-[#D4AF7A]/80 flex items-center justify-center gap-2.5 shadow-2xs">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF4ED] border border-[#D4AF7A] flex items-center justify-center text-[#6B1B29] shrink-0 shadow-2xs">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="text-center">
                        <span className="text-[10px] uppercase tracking-wider font-heading-caps text-[#7A2837] font-bold block">
                          Venue
                        </span>
                        <span className="font-serif-luxury text-base sm:text-lg font-bold text-[#24080D]">
                          {event.venueName}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
