import React, { useState, useEffect } from 'react';
import { Phone, Calendar, MapPin } from 'lucide-react';

export const MobileQuickBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating quick bar after scrolling past top hero area
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-3 left-4 right-4 z-40 md:hidden animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-[#FAF4ED]/95 backdrop-blur-md border border-[#E3C594] shadow-[0_10px_30px_rgba(91,26,36,0.18)] rounded-2xl p-1.5 grid grid-cols-3 items-center gap-1.5">
        {/* 1. Events */}
        <a
          href="#events"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center justify-center gap-0.5 py-1.5 px-1 rounded-xl text-[#451019] hover:bg-[#EFE3D5] active:scale-95 transition-all text-center group"
          title="Wedding Events"
        >
          <div className="w-8 h-8 rounded-lg bg-[#EFE3D5] border border-[#E3C594]/80 flex items-center justify-center text-[#B38747] group-hover:border-[#B38747] group-hover:text-[#451019] transition-colors shadow-2xs">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-heading-caps font-bold uppercase tracking-wider whitespace-nowrap leading-tight text-[#451019]">
            Events
          </span>
        </a>

        {/* 2. Venues */}
        <a
          href="#venues"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#venues')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center justify-center gap-0.5 py-1.5 px-1 rounded-xl text-[#451019] hover:bg-[#EFE3D5] active:scale-95 transition-all text-center group"
          title="Venues & Locations"
        >
          <div className="w-8 h-8 rounded-lg bg-[#EFE3D5] border border-[#E3C594]/80 flex items-center justify-center text-[#B38747] group-hover:border-[#B38747] group-hover:text-[#451019] transition-colors shadow-2xs">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-heading-caps font-bold uppercase tracking-wider whitespace-nowrap leading-tight text-[#451019]">
            Venues
          </span>
        </a>

        {/* 3. RSVP */}
        <a
          href="#rsvp"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#rsvp')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center justify-center gap-0.5 py-1.5 px-1 rounded-xl bg-[#5B1A24] text-white hover:bg-[#451019] active:scale-95 transition-all text-center shadow-xs group"
          title="RSVP Contacts"
        >
          <div className="w-8 h-8 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center text-[#E3C594]">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-heading-caps font-bold uppercase tracking-wider whitespace-nowrap leading-tight text-[#FAF4ED]">
            RSVP
          </span>
        </a>
      </div>
    </div>
  );
};
