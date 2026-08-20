import React from 'react';

// Delicate vector gold flourishes, botanical dividers, and stationery frames

export const IntertwinedHeartsDivider: React.FC<{ className?: string }> = ({ className = "my-4 sm:my-5" }) => {
  return (
    <div className={`flex items-center justify-center gap-3 w-full max-w-xs sm:max-w-sm mx-auto ${className}`}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C29B5D]/70 to-[#C29B5D]" />
      
      {/* Two delicate, intertwined connected hearts */}
      <svg
        className="w-8 h-5 text-[#B38747] opacity-95 shrink-0"
        viewBox="0 0 34 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left delicate intertwined heart */}
        <path
          d="M12.5 15.5C12.5 15.5 5.5 11 5.5 6.5C5.5 4.2 7.2 2.5 9.5 2.5C10.9 2.5 12.2 3.4 12.5 4.5C12.8 3.4 14.1 2.5 15.5 2.5C17.8 2.5 19.5 4.2 19.5 6.5C19.5 11 12.5 15.5 12.5 15.5Z"
          stroke="#B38747"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="rgba(194, 155, 93, 0.12)"
        />
        {/* Right delicate intertwined heart */}
        <path
          d="M21.5 17.5C21.5 17.5 14.5 13 14.5 8.5C14.5 6.2 16.2 4.5 18.5 4.5C19.9 4.5 21.2 5.4 21.5 6.5C21.8 5.4 23.1 4.5 24.5 4.5C26.8 4.5 28.5 6.2 28.5 8.5C28.5 13 21.5 17.5 21.5 17.5Z"
          stroke="#C29B5D"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="rgba(212, 175, 122, 0.18)"
        />
      </svg>

      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C29B5D]/70 to-[#C29B5D]" />
    </div>
  );
};

export const GoldFlourishDivider: React.FC<{ className?: string }> = ({ className = "my-6" }) => {
  return <IntertwinedHeartsDivider className={className} />;
};

export const SubtleFloralDivider: React.FC<{ className?: string }> = ({ className = "my-4" }) => {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span className="h-px w-8 bg-[#C29B5D]/50" />
      <svg className="w-3.5 h-3.5 text-[#7A2837]/70" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 2 13.5 6 16 8C18.5 10 22 12 22 12C22 12 18.5 14 16 16C13.5 18 12 22 12 22C12 22 10.5 18 8 16C5.5 14 2 12 2 12C2 12 5.5 10 8 8C10.5 6 12 2 12 2Z" />
      </svg>
      <span className="h-px w-8 bg-[#C29B5D]/50" />
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
      <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C29B5D]/50">
        <path d="M4 4H40C40 4 20 8 12 18C4 28 4 56 4 56V4Z" stroke="currentColor" strokeWidth="1" />
        <path d="M10 10H30C30 10 18 14 14 22C10 30 10 50 10 50" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
        <circle cx="6" cy="6" r="2.5" fill="#B38747" fillOpacity="0.7" />
      </svg>
    </div>
  );
};

export const StationeryEnvelopeBorder: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  return (
    <div className={`relative p-5 sm:p-8 bg-[#FFFDF9] border border-[#E3C594]/60 shadow-[0_4px_25px_-5px_rgba(91,26,36,0.05)] rounded-2xl ${className}`}>
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
