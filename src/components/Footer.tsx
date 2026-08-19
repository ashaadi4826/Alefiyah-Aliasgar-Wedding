import React from 'react';
import logoRoseImg from '../assets/images/IMG_20260818_135503.png';
import { SubtleFloralDivider } from './FloralDecor';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-12 pb-24 md:pb-12 px-4 bg-[#EDE3D5] border-t border-[#E3C594]/60 text-center relative overflow-hidden paper-texture">
      <div className="max-w-md mx-auto space-y-4">
        {/* Logo directly on background as transparent standalone emblem */}
        <div className="w-16 h-16 mx-auto flex items-center justify-center">
          <img
            src={logoRoseImg}
            alt="Alefiyah & Aliasgar Wedding Logo"
            className="w-full h-full object-contain select-none"
            referrerPolicy="no-referrer"
          />
        </div>

        <div>
          <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#5B1A24] tracking-wide">
            Alefiyah Weds Aliasgar
          </h3>
          <p className="font-heading-caps text-xs uppercase tracking-wider text-[#3D0B12] font-bold mt-1">
            24 — 26 Rabi al-Akhar <span className="whitespace-nowrap">1448 H</span> · 6 — 8 October 2026 · Rajkot, Gujarat
          </p>
        </div>

        <SubtleFloralDivider className="my-3" />

        <p className="text-[11px] font-heading-caps text-[#7A2837]/80 tracking-wider font-medium">
          With Love &amp; Blessings · 1448 H
        </p>
      </div>
    </footer>
  );
};
