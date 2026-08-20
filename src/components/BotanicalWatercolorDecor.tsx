import React from 'react';

/**
 * BotanicalWatercolorDecor
 * Exquisite hand-drawn botanical contour florals & soft watercolor petal washes
 * Inspired by the reference images: gentle blends of blush pink, peach, pale lavender,
 * soft yellow, champagne, and muted sage with delicate edge blossoms.
 */

interface SectionWatercolorProps {
  variant: 'hero' | 'countdown' | 'events' | 'venues' | 'family' | 'rsvp';
  className?: string;
}

export const BotanicalWatercolorDecor: React.FC<SectionWatercolorProps> = ({ variant, className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}>
      {/* 1. Organic Watercolor Wash Background Layer */}
      <div className="absolute inset-0 w-full h-full">
        {variant === 'hero' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="hero-sage" cx="85%" cy="8%" r="45%">
                <stop offset="0%" stopColor="#DDE8DC" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#EAF1E9" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="hero-peach" cx="12%" cy="20%" r="55%">
                <stop offset="0%" stopColor="#FDE3D2" stopOpacity="0.7" />
                <stop offset="55%" stopColor="#FEEDDF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="hero-yellow" cx="75%" cy="35%" r="40%">
                <stop offset="0%" stopColor="#FCF1D6" stopOpacity="0.65" />
                <stop offset="65%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="hero-blush" cx="50%" cy="88%" r="50%">
                <stop offset="0%" stopColor="#FCE4DC" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#FDEFE9" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="hero-lavender" cx="15%" cy="75%" r="45%">
                <stop offset="0%" stopColor="#F1E8F6" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1000" height="1000" fill="#FAF5EE" />
            <rect width="1000" height="1000" fill="url(#hero-sage)" />
            <rect width="1000" height="1000" fill="url(#hero-peach)" />
            <rect width="1000" height="1000" fill="url(#hero-yellow)" />
            <rect width="1000" height="1000" fill="url(#hero-blush)" />
            <rect width="1000" height="1000" fill="url(#hero-lavender)" />
          </svg>
        )}

        {variant === 'countdown' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="cd-champagne" cx="20%" cy="30%" r="50%">
                <stop offset="0%" stopColor="#FCEFD8" stopOpacity="0.75" />
                <stop offset="70%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="cd-blush" cx="80%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#FDE1E5" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#FDF0F2" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="cd-lavender" cx="50%" cy="90%" r="45%">
                <stop offset="0%" stopColor="#EFE5F6" stopOpacity="0.65" />
                <stop offset="70%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="cd-sage" cx="8%" cy="85%" r="35%">
                <stop offset="0%" stopColor="#E2ECE3" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1000" height="600" fill="#FAF5EE" />
            <rect width="1000" height="600" fill="url(#cd-champagne)" />
            <rect width="1000" height="600" fill="url(#cd-blush)" />
            <rect width="1000" height="600" fill="url(#cd-lavender)" />
            <rect width="1000" height="600" fill="url(#cd-sage)" />
          </svg>
        )}

        {variant === 'events' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1000 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="ev-peach" cx="10%" cy="15%" r="45%">
                <stop offset="0%" stopColor="#FCE7D9" stopOpacity="0.75" />
                <stop offset="65%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="ev-lavender" cx="90%" cy="25%" r="50%">
                <stop offset="0%" stopColor="#EFE6F7" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="ev-blush" cx="12%" cy="65%" r="45%">
                <stop offset="0%" stopColor="#FDE1E6" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="ev-sage" cx="88%" cy="75%" r="45%">
                <stop offset="0%" stopColor="#E1ECE2" stopOpacity="0.65" />
                <stop offset="65%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="ev-yellow" cx="50%" cy="95%" r="40%">
                <stop offset="0%" stopColor="#FDF3DA" stopOpacity="0.65" />
                <stop offset="70%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1000" height="1200" fill="#FAF5EE" />
            <rect width="1000" height="1200" fill="url(#ev-peach)" />
            <rect width="1000" height="1200" fill="url(#ev-lavender)" />
            <rect width="1000" height="1200" fill="url(#ev-blush)" />
            <rect width="1000" height="1200" fill="url(#ev-sage)" />
            <rect width="1000" height="1200" fill="url(#ev-yellow)" />
          </svg>
        )}

        {variant === 'venues' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="vn-sage" cx="15%" cy="12%" r="45%">
                <stop offset="0%" stopColor="#DFECE2" stopOpacity="0.75" />
                <stop offset="65%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="vn-champagne" cx="85%" cy="20%" r="50%">
                <stop offset="0%" stopColor="#FCF0D9" stopOpacity="0.75" />
                <stop offset="65%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="vn-blush" cx="20%" cy="80%" r="45%">
                <stop offset="0%" stopColor="#FDE3E5" stopOpacity="0.7" />
                <stop offset="65%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="vn-peach" cx="85%" cy="85%" r="45%">
                <stop offset="0%" stopColor="#FCE7D6" stopOpacity="0.7" />
                <stop offset="65%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1000" height="1000" fill="#FAF5EE" />
            <rect width="1000" height="1000" fill="url(#vn-sage)" />
            <rect width="1000" height="1000" fill="url(#vn-champagne)" />
            <rect width="1000" height="1000" fill="url(#vn-blush)" />
            <rect width="1000" height="1000" fill="url(#vn-peach)" />
          </svg>
        )}

        {variant === 'family' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1000 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="fm-blush" cx="85%" cy="15%" r="50%">
                <stop offset="0%" stopColor="#FDE1E7" stopOpacity="0.75" />
                <stop offset="65%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="fm-yellow" cx="15%" cy="20%" r="45%">
                <stop offset="0%" stopColor="#FCF2D6" stopOpacity="0.7" />
                <stop offset="65%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="fm-lavender" cx="20%" cy="85%" r="45%">
                <stop offset="0%" stopColor="#EFE6F7" stopOpacity="0.65" />
                <stop offset="65%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="fm-peach" cx="80%" cy="80%" r="45%">
                <stop offset="0%" stopColor="#FCE7D9" stopOpacity="0.7" />
                <stop offset="65%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1000" height="900" fill="#FAF5EE" />
            <rect width="1000" height="900" fill="url(#fm-blush)" />
            <rect width="1000" height="900" fill="url(#fm-yellow)" />
            <rect width="1000" height="900" fill="url(#fm-lavender)" />
            <rect width="1000" height="900" fill="url(#fm-peach)" />
          </svg>
        )}

        {variant === 'rsvp' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="rs-peach" cx="20%" cy="20%" r="50%">
                <stop offset="0%" stopColor="#FDE6D8" stopOpacity="0.75" />
                <stop offset="65%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="rs-lavender" cx="80%" cy="25%" r="45%">
                <stop offset="0%" stopColor="#EFE5F6" stopOpacity="0.7" />
                <stop offset="65%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="rs-blush" cx="50%" cy="85%" r="50%">
                <stop offset="0%" stopColor="#FCE3E8" stopOpacity="0.7" />
                <stop offset="65%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="rs-sage" cx="8%" cy="80%" r="35%">
                <stop offset="0%" stopColor="#DFEDE3" stopOpacity="0.6" />
                <stop offset="65%" stopColor="#FAF4ED" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1000" height="800" fill="#FAF5EE" />
            <rect width="1000" height="800" fill="url(#rs-peach)" />
            <rect width="1000" height="800" fill="url(#rs-lavender)" />
            <rect width="1000" height="800" fill="url(#rs-blush)" />
            <rect width="1000" height="800" fill="url(#rs-sage)" />
          </svg>
        )}
      </div>

      {/* 2. Delicate Hand-Drawn Contour Flowers & Soft Botanical Leaves (Edges & Corners) */}
      
      {/* Top Left Hand-Drawn Flower Contour (Inspired by Reference 1) */}
      <div className="absolute -top-6 -left-6 sm:top-0 sm:left-0 w-36 sm:w-56 md:w-64 opacity-40 sm:opacity-55 transform rotate-12 transition-transform duration-700">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Soft watercolor wash petal underlay */}
          <path d="M40 30 C20 60, 30 110, 70 130 C110 150, 160 130, 170 90 C180 50, 140 20, 100 15 C70 10, 50 15, 40 30 Z" fill="#FDE1D3" fillOpacity="0.35" />
          <path d="M80 80 C60 120, 90 170, 130 175 C170 180, 190 140, 185 110 C180 80, 140 70, 80 80 Z" fill="#FCE5E8" fillOpacity="0.3" />
          
          {/* Fine botanical line art petals */}
          <path d="M10 10 C35 30, 50 75, 40 110 C35 125, 20 140, 10 150" stroke="#C88E5E" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
          <path d="M45 40 C70 20, 115 25, 135 55 C150 75, 145 105, 120 120 C100 130, 70 125, 55 105 C40 85, 35 60, 45 40 Z" stroke="#C88E5E" strokeWidth="1.2" strokeLinecap="round" opacity="0.65" />
          <path d="M125 60 C155 45, 190 65, 195 95 C200 125, 175 155, 145 150 C125 145, 115 125, 120 105" stroke="#D4AF7A" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <path d="M55 105 C40 135, 55 175, 85 185 C115 195, 145 175, 145 150" stroke="#C88E5E" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
          {/* Delicate internal stamen lines */}
          <path d="M90 85 C95 70, 105 60, 115 55" stroke="#C88E5E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
          <path d="M92 88 C105 85, 120 85, 135 80" stroke="#C88E5E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
          <path d="M88 92 C95 105, 110 115, 125 120" stroke="#C88E5E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>

      {/* Top Right Delicate Watercolor Leaves & Blossom (Inspired by Reference 2) */}
      <div className="absolute -top-4 -right-4 sm:top-2 sm:right-2 w-36 sm:w-52 md:w-60 opacity-45 sm:opacity-60 pointer-events-none">
        <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Soft pastel painted leaves in sage & sky blue */}
          <path d="M170 10 C140 25, 120 55, 125 85 C145 80, 165 50, 170 10 Z" fill="#D3E4D8" fillOpacity="0.75" />
          <path d="M140 35 C115 35, 95 55, 90 80 C110 80, 130 60, 140 35 Z" fill="#CDE0EB" fillOpacity="0.7" />
          <path d="M110 65 C85 70, 70 95, 75 115 C95 110, 110 90, 110 65 Z" fill="#DFEBD8" fillOpacity="0.75" />
          {/* Soft blush pink & peach flower petals */}
          <circle cx="145" cy="115" r="18" fill="#FCD9DF" fillOpacity="0.75" />
          <circle cx="160" cy="130" r="16" fill="#FCE5D4" fillOpacity="0.8" />
          <circle cx="130" cy="135" r="15" fill="#FCE0E5" fillOpacity="0.75" />
          <circle cx="145" cy="145" r="16" fill="#FCE9DC" fillOpacity="0.75" />
          <circle cx="145" cy="130" r="6" fill="#D4AF7A" fillOpacity="0.8" />
          {/* Fine outline stem */}
          <path d="M175 5 Q135 65 70 125" stroke="#9EAFA3" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        </svg>
      </div>

      {/* Bottom Right Hand-Drawn Large Floral Contour (Inspired by Reference 1) */}
      <div className="absolute -bottom-8 -right-8 sm:bottom-0 sm:right-0 w-44 sm:w-64 md:w-72 opacity-35 sm:opacity-50 pointer-events-none">
        <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Soft peach watercolor wash */}
          <path d="M60 160 C80 120, 140 100, 180 130 C210 160, 190 200, 150 210 C110 220, 70 200, 60 160 Z" fill="#FCE5D8" fillOpacity="0.4" />
          {/* Hand-drawn contour lines */}
          <path d="M160 210 C130 180, 110 130, 125 80 C140 40, 175 30, 200 40 C220 50, 225 85, 210 120 C195 155, 170 185, 160 210 Z" stroke="#C88E5E" strokeWidth="1.2" strokeLinecap="round" opacity="0.65" />
          <path d="M125 80 C95 70, 55 90, 45 125 C35 160, 65 195, 100 190 C125 185, 140 165, 145 140" stroke="#D4AF7A" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
          <path d="M45 125 C25 120, 5 140, 10 165 C15 190, 45 200, 70 195" stroke="#C88E5E" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
          <path d="M160 210 C155 215, 150 220, 145 225" stroke="#C88E5E" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
          {/* Stamen lines */}
          <path d="M140 150 Q160 110 180 80" stroke="#C88E5E" strokeWidth="0.8" strokeLinecap="round" opacity="0.45" />
          <path d="M135 155 Q115 130 90 120" stroke="#C88E5E" strokeWidth="0.8" strokeLinecap="round" opacity="0.45" />
        </svg>
      </div>

      {/* Bottom Left Delicate Botanical Painted Spray (Inspired by Reference 2) */}
      <div className="absolute -bottom-4 -left-4 sm:bottom-2 sm:left-2 w-36 sm:w-52 md:w-56 opacity-40 sm:opacity-55 pointer-events-none">
        <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Soft yellow, peach and lavender botanical branches */}
          <path d="M15 170 C35 145, 65 135, 90 145 C80 165, 50 175, 15 170 Z" fill="#FDF1D5" fillOpacity="0.75" />
          <path d="M35 140 C55 120, 80 115, 105 125 C95 145, 70 150, 35 140 Z" fill="#FCDDE3" fillOpacity="0.7" />
          <path d="M60 115 C75 95, 105 90, 125 105 C115 125, 90 125, 60 115 Z" fill="#E8DCF3" fillOpacity="0.7" />
          <path d="M85 85 C100 65, 125 65, 140 80 C130 100, 110 100, 85 85 Z" fill="#DCE9DF" fillOpacity="0.7" />
          {/* Delicate blossom */}
          <circle cx="45" cy="85" r="14" fill="#FCE6D6" fillOpacity="0.8" />
          <circle cx="58" cy="75" r="12" fill="#FCD8DE" fillOpacity="0.75" />
          <circle cx="35" cy="72" r="11" fill="#FDF3DA" fillOpacity="0.75" />
          <circle cx="45" cy="78" r="4.5" fill="#C88E5E" fillOpacity="0.75" />
          <path d="M10 175 Q75 115 135 60" stroke="#B0BCAE" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        </svg>
      </div>
    </div>
  );
};
