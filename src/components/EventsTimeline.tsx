import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, Sparkles, Heart } from 'lucide-react';
import { WEDDING_EVENTS } from '../data/weddingData';
import { GoldFlourishDivider, SubtleFloralDivider } from './FloralDecor';
import cornerFloralImg from '../assets/images/floral_corner_rose_1787042316490.jpg';

export const EventsTimeline: React.FC = () => {
  return (
    <section id="events" className="py-16 sm:py-24 px-4 bg-[#F4ECE1] relative overflow-hidden paper-texture">
      {/* Background Floral Watermarks */}
      <div className="absolute top-0 right-0 w-36 sm:w-48 opacity-25 pointer-events-none select-none">
        <img
          src={cornerFloralImg}
          alt=""
          className="w-full h-auto object-contain scale-x-[-1]"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-36 sm:w-48 opacity-25 pointer-events-none select-none scale-y-[-1]">
        <img
          src={cornerFloralImg}
          alt=""
          className="w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EADCCB]/80 border border-[#D4AF7A]/70 text-[#8C6228] text-xs uppercase tracking-[0.22em] font-heading-caps font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#B38747]" />
              <span>Program of Celebrations</span>
              <Sparkles className="w-3.5 h-3.5 text-[#B38747]" />
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#5B1A24] tracking-wide">
              Wedding Events
            </h2>
            <p className="font-serif-luxury text-base sm:text-lg text-[#451019] max-w-lg mx-auto italic">
              Please join us in celebrating each auspicious ceremony with prayers, love, and joy.
            </p>
            <GoldFlourishDivider className="mt-3 max-w-xs" />
          </motion.div>
        </div>

        {/* Continuous Soft Pastel Stationery Cards (No harsh white boxes) */}
        <div className="space-y-7 sm:space-y-9">
          {WEDDING_EVENTS.map((event, index) => {
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="w-full"
              >
                <div className="p-6 sm:p-9 rounded-3xl bg-[#EADCCB]/50 border border-[#D4AF7A]/70 shadow-[0_8px_24px_-6px_rgba(91,26,36,0.06)] text-center flex flex-col items-center relative overflow-hidden backdrop-blur-2xs">
                  {/* Subtle top emblem */}
                  <div className="flex flex-col items-center justify-center pt-1 pb-1">
                    <div className="w-7 h-7 rounded-full bg-[#F4ECE1] border border-[#D4AF7A] flex items-center justify-center text-[#B38747] mb-1 shadow-2xs">
                      <Heart className="w-3.5 h-3.5 fill-[#B38747]/20 text-[#8C1D2F]" />
                    </div>
                    <SubtleFloralDivider className="my-1 w-20" />
                  </div>

                  {/* 1. EVENT TITLE */}
                  <div className="mt-1 mb-2.5">
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-bold text-[#5B1A24] tracking-wide">
                      {event.title}
                    </h3>
                  </div>

                  {/* 2. POETIC TWO-LINE DESCRIPTION (Immediately underneath event title) */}
                  {event.description && (
                    <div className="w-full max-w-md mb-4 px-3 py-2.5 sm:py-3 rounded-2xl bg-[#F4ECE1]/80 border border-[#D4AF7A]/50 text-center">
                      <div className="flex flex-col items-center justify-center space-y-0.5">
                        {event.description.split('\n').map((line, lIdx) => (
                          <p
                            key={lIdx}
                            className="font-serif-luxury text-[13px] sm:text-base md:text-lg text-[#3D0B12] font-semibold leading-snug sm:leading-relaxed italic tracking-wide"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 3 & 4. DATES (Strictly on Two Separate Lines) */}
                  <div className="w-full max-w-md mb-3 flex flex-col items-center justify-center gap-1.5 p-3.5 rounded-2xl bg-[#F4ECE1]/80 border border-[#D4AF7A]/60">
                    <span className="font-serif-luxury text-base sm:text-lg md:text-xl font-bold text-[#5B1A24] tracking-wide block">
                      {event.gregorianDate} · {event.dayOfWeek}
                    </span>
                    <div className="w-14 h-[1px] bg-[#D4AF7A]/60 my-0.5" />
                    <span className="font-serif-luxury text-lg sm:text-xl md:text-2xl font-bold text-[#5B1A24] tracking-wide block">
                      {event.hijriDate.replace('1448 H', '1448\u00A0H')}
                    </span>
                  </div>

                  {/* 5. TIME (Mobile-friendly layout) */}
                  {event.processionTime && event.majlisTime ? (
                    <div className="w-full max-w-md mb-2.5 p-3 rounded-2xl bg-[#F4ECE1]/80 border border-[#E3C594]/60 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-6">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#FAF3EB] border border-[#D4AF7A]/80 flex items-center justify-center text-[#8C1D2F] shrink-0 shadow-2xs">
                          <Clock className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-left">
                          <span className="text-[10px] uppercase tracking-wider font-heading-caps text-[#8C6228] font-bold block -mb-0.5">
                            Procession Time
                          </span>
                          <span className="font-serif-luxury text-base sm:text-lg font-bold text-[#5B1A24]">
                            {event.processionTime}
                          </span>
                        </div>
                      </div>

                      <div className="hidden sm:block w-[1px] h-7 bg-[#D4AF7A]/50" />

                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#FAF3EB] border border-[#D4AF7A]/80 flex items-center justify-center text-[#8C1D2F] shrink-0 shadow-2xs">
                          <Clock className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-left">
                          <span className="text-[10px] uppercase tracking-wider font-heading-caps text-[#8C6228] font-bold block -mb-0.5">
                            Majlis Time
                          </span>
                          <span className="font-serif-luxury text-base sm:text-lg font-bold text-[#5B1A24]">
                            {event.majlisTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full max-w-md mb-2.5 p-3 rounded-2xl bg-[#F4ECE1]/80 border border-[#E3C594]/60 flex items-center justify-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#FAF3EB] border border-[#D4AF7A]/80 flex items-center justify-center text-[#8C1D2F] shrink-0 shadow-2xs">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-center">
                        <span className="text-[10px] uppercase tracking-wider font-heading-caps text-[#8C6228] font-bold block -mb-0.5">
                          Time
                        </span>
                        <span className="font-serif-luxury text-base sm:text-lg font-bold text-[#5B1A24]">
                          {event.time}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 6. VENUE */}
                  <div className="w-full max-w-md p-3 rounded-2xl bg-[#F4ECE1]/80 border border-[#E3C594]/60 flex items-center justify-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#FAF3EB] border border-[#D4AF7A]/80 flex items-center justify-center text-[#8C1D2F] shrink-0 shadow-2xs">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-center">
                      <span className="text-[10px] uppercase tracking-wider font-heading-caps text-[#8C6228] font-bold block -mb-0.5">
                        Venue
                      </span>
                      <span className="font-serif-luxury text-base sm:text-lg font-bold text-[#5B1A24]">
                        {event.venueName}
                      </span>
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
