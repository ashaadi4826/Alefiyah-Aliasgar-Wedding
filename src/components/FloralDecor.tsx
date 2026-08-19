import React from 'react';

// Delicate vector gold flourishes, botanical dividers, and stationery frames

export const GoldFlourishDivider: React.FC<{ className?: string }> = ({ className = "my-6" }) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C29B5D]/60 to-[#C29B5D]" />
      <svg
        className="w-5 h-5 text-[#B38747] opacity-80"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="rgba(194, 155, 93, 0.2)" />
        <circle cx="12" cy="12" r="2" fill="#B38747" />
      </svg>
      <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#C29B5D]/60 to-[#C29B5D]" />
    </div>
  );
};

export const SubtleFloralDivider: React.FC<{ className?: string }> = ({ className = "my-4" }) => {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span className="h-px w-8 bg-[#C29B5D]/30" />
      <svg className="w-3.5 h-3.5 text-[#7A2837]/50" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 2 13.5 6 16 8C18.5 10 22 12 22 12C22 12 18.5 14 16 16C13.5 18 12 22 12 22C12 22 10.5 18 8 16C5.5 14 2 12 2 12C2 12 5.5 10 8 8C10.5 6 12 2 12 2Z" />
      </svg>
      <span className="h-px w-8 bg-[#C29B5D]/30" />
    </div>
  );
};

export const CornerStationeryFlourish: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; className?: string }> = ({ position, className = "" }) => {
  const transformMap = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-[-1]',
  };

  return (
    <div className={`pointer-events-none select-none ${transformMap[position]} ${className}`}>
      <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C29B5D]/40">
        <path d="M4 4H40C40 4 20 8 12 18C4 28 4 56 4 56V4Z" stroke="currentColor" strokeWidth="1" />
        <path d="M10 10H30C30 10 18 14 14 22C10 30 10 50 10 50" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
        <circle cx="6" cy="6" r="2.5" fill="#B38747" fillOpacity="0.6" />
      </svg>
    </div>
  );
};

export const StationeryEnvelopeBorder: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  return (
    <div className={`relative p-5 sm:p-8 bg-[#FFFDF9] border border-[#E3C594]/50 shadow-[0_4px_25px_-5px_rgba(91,26,36,0.05)] rounded-2xl ${className}`}>
      <div className="absolute top-2 left-2">
        <CornerStationeryFlourish position="top-left" />
      </div>
      <div className="absolute top-2 right-2">
        <CornerStationeryFlourish position="top-right" />
      </div>
      <div className="absolute bottom-2 left-2">
        <CornerStationeryFlourish position="bottom-left" />
      </div>
      <div className="absolute bottom-2 right-2">
        <CornerStationeryFlourish position="bottom-right" />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
