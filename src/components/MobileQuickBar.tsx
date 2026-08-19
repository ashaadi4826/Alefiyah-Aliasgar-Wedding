import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Navigation } from 'lucide-react';
import { RSVP_CONTACTS } from '../data/weddingData';

export const MobileQuickBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating quick bar after scrolling past top hero area
      setIsVisible(window.scrollY > 220);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 md:hidden animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-[#FAF3EB]/95 backdrop-blur-md border border-[#E3C594]/80 shadow-[0_10px_30px_rgba(91,26,36,0.15)] rounded-2xl p-2 grid grid-cols-4 items-center gap-1">
        {/* Call Host Quick Action */}
        <a
          href={`tel:${RSVP_CONTACTS[0].phone}`}
          className="flex flex-col items-center justify-center gap-0.5 py-1 px-1 rounded-xl text-[#5B1A24] hover:bg-[#F4ECE1] active:scale-95 transition-all text-center group"
          title="Call Host"
        >
          <div className="w-7 h-7 rounded-lg bg-[#F4ECE1] border border-[#E3C594]/70 flex items-center justify-center text-[#B38747] group-hover:border-[#B38747] group-hover:text-[#5B1A24] transition-colors shadow-2xs">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9px] font-heading-caps font-bold uppercase tracking-wider whitespace-nowrap leading-tight text-[#5B1A24]">
            Call Host
          </span>
        </a>

        {/* Events Schedule Jump */}
        <a
          href="#events"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center justify-center gap-0.5 py-1 px-1 rounded-xl text-[#5B1A24] hover:bg-[#F4ECE1] active:scale-95 transition-all text-center group"
          title="Wedding Events"
        >
          <div className="w-7 h-7 rounded-lg bg-[#F4ECE1] border border-[#E3C594]/70 flex items-center justify-center text-[#B38747] group-hover:border-[#B38747] group-hover:text-[#5B1A24] transition-colors shadow-2xs">
            <Calendar className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9px] font-heading-caps font-bold uppercase tracking-wider whitespace-nowrap leading-tight text-[#5B1A24]">
            Events
          </span>
        </a>

        {/* Venues Jump */}
        <a
          href="#venues"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#venues')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center justify-center gap-0.5 py-1 px-1 rounded-xl text-[#5B1A24] hover:bg-[#F4ECE1] active:scale-95 transition-all text-center group"
          title="Venues & Locations"
        >
          <div className="w-7 h-7 rounded-lg bg-[#F4ECE1] border border-[#E3C594]/70 flex items-center justify-center text-[#B38747] group-hover:border-[#B38747] group-hover:text-[#5B1A24] transition-colors shadow-2xs">
            <Navigation className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9px] font-heading-caps font-bold uppercase tracking-wider whitespace-nowrap leading-tight text-[#5B1A24]">
            Venues
          </span>
        </a>

        {/* RSVP Primary Button */}
        <a
          href="#rsvp"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#rsvp')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center justify-center gap-0.5 py-1 px-1 rounded-xl bg-[#5B1A24] text-white hover:bg-[#7A2837] active:scale-95 transition-all text-center shadow-xs group"
          title="RSVP Contacts"
        >
          <div className="w-7 h-7 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center text-[#E3C594]">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9px] font-heading-caps font-bold uppercase tracking-wider whitespace-nowrap leading-tight text-[#FAF3EB]">
            RSVP
          </span>
        </a>
      </div>
    </div>
  );
};
