import React from 'react';

/**
 * BotanicalWatercolorDecor & CardWatercolorDecor
 * Exquisite hand-drawn botanical contour florals & soft watercolor petal washes
 * Inspired by the reference images: clear, visible, vibrant pastel blends of blush pink,
 * peach, pale lavender, soft yellow, champagne, and muted sage with delicate edge blossoms.
 */

interface SectionWatercolorProps {
  variant: 'hero' | 'countdown' | 'events' | 'venues' | 'family' | 'rsvp';
  className?: string;
}

export const BotanicalWatercolorDecor: React.FC<SectionWatercolorProps> = ({ variant, className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}>
      {/* 1. Saturated, Rich Watercolor Wash Background Layer */}
      <div className="absolute inset-0 w-full h-full">
        {variant === 'hero' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="hero-sage" cx="88%" cy="10%" r="50%">
                <stop offset="0%" stopColor="#BCD9BF" stopOpacity="0.88" />
                <stop offset="55%" stopColor="#D5E8D8" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="hero-peach" cx="10%" cy="18%" r="60%">
                <stop offset="0%" stopColor="#F9BE9B" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#FCD5BE" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="hero-yellow" cx="82%" cy="40%" r="45%">
                <stop offset="0%" stopColor="#F9E29D" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#FDF0C8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="hero-blush" cx="45%" cy="92%" r="55%">
                <stop offset="0%" stopColor="#F7B2C2" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#FBD2DC" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="hero-lavender" cx="12%" cy="80%" r="50%">
                <stop offset="0%" stopColor="#DEBEF6" stopOpacity="0.8" />
                <stop offset="55%" stopColor="#EEDCFB" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1000" height="1000" fill="#FAF3EA" />
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
              <radialGradient id="cd-champagne" cx="15%" cy="30%" r="55%">
                <stop offset="0%" stopColor="#F9DF9C" stopOpacity="0.85" />
                <stop offset="65%" stopColor="#FCEFC8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="cd-blush" cx="85%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#F9AFBF" stopOpacity="0.85" />
                <stop offset="55%" stopColor="#FCD1DC" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="cd-lavender" cx="50%" cy="92%" r="50%">
                <stop offset="0%" stopColor="#D9BAF5" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#EED9FB" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="cd-sage" cx="8%" cy="85%" r="40%">
                <stop offset="0%" stopColor="#BFDCB8" stopOpacity="0.8" />
                <stop offset="65%" stopColor="#DCEBD6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1000" height="600" fill="#FAF3EA" />
            <rect width="1000" height="600" fill="url(#cd-champagne)" />
            <rect width="1000" height="600" fill="url(#cd-blush)" />
            <rect width="1000" height="600" fill="url(#cd-lavender)" />
            <rect width="1000" height="600" fill="url(#cd-sage)" />
          </svg>
        )}

        {variant === 'events' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1000 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="ev-peach" cx="10%" cy="12%" r="55%">
                <stop offset="0%" stopColor="#F9B890" stopOpacity="0.88" />
                <stop offset="60%" stopColor="#FCD5BE" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="ev-lavender" cx="90%" cy="20%" r="55%">
                <stop offset="0%" stopColor="#DABAFA" stopOpacity="0.85" />
                <stop offset="55%" stopColor="#ECD6FB" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="ev-blush" cx="8%" cy="60%" r="50%">
                <stop offset="0%" stopColor="#F8AEC0" stopOpacity="0.85" />
                <stop offset="55%" stopColor="#FCD1DC" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="ev-sage" cx="92%" cy="75%" r="50%">
                <stop offset="0%" stopColor="#BADAB4" stopOpacity="0.82" />
                <stop offset="60%" stopColor="#D9EBD5" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="ev-yellow" cx="50%" cy="96%" r="50%">
                <stop offset="0%" stopColor="#F9E298" stopOpacity="0.85" />
                <stop offset="65%" stopColor="#FCF0C8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1000" height="1200" fill="#FAF3EA" />
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
              <radialGradient id="vn-sage" cx="12%" cy="10%" r="50%">
                <stop offset="0%" stopColor="#BFDCB8" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#DDEBD8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="vn-champagne" cx="88%" cy="18%" r="55%">
                <stop offset="0%" stopColor="#F9DF9C" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#FCEFC8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="vn-blush" cx="15%" cy="85%" r="50%">
                <stop offset="0%" stopColor="#F8B0C0" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#FBD3DE" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="vn-peach" cx="88%" cy="88%" r="50%">
                <stop offset="0%" stopColor="#F9BA94" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#FCD7C2" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1000" height="1000" fill="#FAF3EA" />
            <rect width="1000" height="1000" fill="url(#vn-sage)" />
            <rect width="1000" height="1000" fill="url(#vn-champagne)" />
            <rect width="1000" height="1000" fill="url(#vn-blush)" />
            <rect width="1000" height="1000" fill="url(#vn-peach)" />
          </svg>
        )}

        {variant === 'family' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1000 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="fm-blush" cx="88%" cy="12%" r="55%">
                <stop offset="0%" stopColor="#F8AFC0" stopOpacity="0.88" />
                <stop offset="60%" stopColor="#FCD1DC" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="fm-yellow" cx="12%" cy="18%" r="50%">
                <stop offset="0%" stopColor="#F9E298" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#FDF0C8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="fm-lavender" cx="15%" cy="88%" r="50%">
                <stop offset="0%" stopColor="#DABAFA" stopOpacity="0.82" />
                <stop offset="60%" stopColor="#ECD6FB" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="fm-peach" cx="85%" cy="82%" r="50%">
                <stop offset="0%" stopColor="#F9BA94" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#FCD7C2" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1000" height="900" fill="#FAF3EA" />
            <rect width="1000" height="900" fill="url(#fm-blush)" />
            <rect width="1000" height="900" fill="url(#fm-yellow)" />
            <rect width="1000" height="900" fill="url(#fm-lavender)" />
            <rect width="1000" height="900" fill="url(#fm-peach)" />
          </svg>
        )}

        {variant === 'rsvp' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="rs-peach" cx="15%" cy="18%" r="55%">
                <stop offset="0%" stopColor="#F9B890" stopOpacity="0.88" />
                <stop offset="60%" stopColor="#FCD5BE" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="rs-lavender" cx="85%" cy="20%" r="50%">
                <stop offset="0%" stopColor="#DABAFA" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#ECD6FB" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="rs-blush" cx="50%" cy="88%" r="55%">
                <stop offset="0%" stopColor="#F8ADC0" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#FCD1DC" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="rs-sage" cx="8%" cy="80%" r="40%">
                <stop offset="0%" stopColor="#BFDCB8" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#DDEBD8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF2E8" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1000" height="800" fill="#FAF3EA" />
            <rect width="1000" height="800" fill="url(#rs-peach)" />
            <rect width="1000" height="800" fill="url(#rs-lavender)" />
            <rect width="1000" height="800" fill="url(#rs-blush)" />
            <rect width="1000" height="800" fill="url(#rs-sage)" />
          </svg>
        )}
      </div>

      {/* 2. Delicate Hand-Drawn Contour Flowers & Soft Botanical Leaves (Edges & Corners) */}
      
      {/* Top Left Hand-Drawn Flower Contour */}
      <div className="absolute -top-6 -left-6 sm:top-0 sm:left-0 w-40 sm:w-60 md:w-72 opacity-65 sm:opacity-80 transform rotate-12 transition-transform duration-700 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Saturated watercolor wash petal underlays */}
          <path d="M40 30 C20 60, 30 110, 70 130 C110 150, 160 130, 170 90 C180 50, 140 20, 100 15 C70 10, 50 15, 40 30 Z" fill="#F9BE9B" fillOpacity="0.55" />
          <path d="M80 80 C60 120, 90 170, 130 175 C170 180, 190 140, 185 110 C180 80, 140 70, 80 80 Z" fill="#F8ADC0" fillOpacity="0.5" />
          
          {/* Fine botanical line art petals */}
          <path d="M10 10 C35 30, 50 75, 40 110 C35 125, 20 140, 10 150" stroke="#B87333" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
          <path d="M45 40 C70 20, 115 25, 135 55 C150 75, 145 105, 120 120 C100 130, 70 125, 55 105 C40 85, 35 60, 45 40 Z" stroke="#B87333" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
          <path d="M125 60 C155 45, 190 65, 195 95 C200 125, 175 155, 145 150 C125 145, 115 125, 120 105" stroke="#C88E5E" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
          <path d="M55 105 C40 135, 55 175, 85 185 C115 195, 145 175, 145 150" stroke="#B87333" strokeWidth="1.3" strokeLinecap="round" opacity="0.75" />
          {/* Delicate internal stamen lines */}
          <path d="M90 85 C95 70, 105 60, 115 55" stroke="#9C5A28" strokeWidth="1" strokeLinecap="round" opacity="0.65" />
          <path d="M92 88 C105 85, 120 85, 135 80" stroke="#9C5A28" strokeWidth="1" strokeLinecap="round" opacity="0.65" />
          <path d="M88 92 C95 105, 110 115, 125 120" stroke="#9C5A28" strokeWidth="1" strokeLinecap="round" opacity="0.65" />
        </svg>
      </div>

      {/* Top Right Delicate Watercolor Leaves & Blossom */}
      <div className="absolute -top-4 -right-4 sm:top-2 sm:right-2 w-40 sm:w-56 md:w-68 opacity-70 sm:opacity-85 pointer-events-none">
        <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Painted leaves in rich sage & sky blue */}
          <path d="M170 10 C140 25, 120 55, 125 85 C145 80, 165 50, 170 10 Z" fill="#BFDCB8" fillOpacity="0.85" />
          <path d="M140 35 C115 35, 95 55, 90 80 C110 80, 130 60, 140 35 Z" fill="#BCD8EC" fillOpacity="0.8" />
          <path d="M110 65 C85 70, 70 95, 75 115 C95 110, 110 90, 110 65 Z" fill="#D2E8CA" fillOpacity="0.85" />
          {/* Blush pink & peach flower petals */}
          <circle cx="145" cy="115" r="18" fill="#F8ADC0" fillOpacity="0.85" />
          <circle cx="160" cy="130" r="16" fill="#F9BA94" fillOpacity="0.9" />
          <circle cx="130" cy="135" r="15" fill="#F8B8CA" fillOpacity="0.85" />
          <circle cx="145" cy="145" r="16" fill="#F9C6A6" fillOpacity="0.85" />
          <circle cx="145" cy="130" r="6" fill="#D4AF7A" fillOpacity="0.9" />
          {/* Fine outline stem */}
          <path d="M175 5 Q135 65 70 125" stroke="#7A9481" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
        </svg>
      </div>

      {/* Bottom Right Hand-Drawn Large Floral Contour */}
      <div className="absolute -bottom-8 -right-8 sm:bottom-0 sm:right-0 w-48 sm:w-68 md:w-80 opacity-60 sm:opacity-75 pointer-events-none">
        <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Peach watercolor wash */}
          <path d="M60 160 C80 120, 140 100, 180 130 C210 160, 190 200, 150 210 C110 220, 70 200, 60 160 Z" fill="#F9BA94" fillOpacity="0.55" />
          {/* Hand-drawn contour lines */}
          <path d="M160 210 C130 180, 110 130, 125 80 C140 40, 175 30, 200 40 C220 50, 225 85, 210 120 C195 155, 170 185, 160 210 Z" stroke="#B87333" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
          <path d="M125 80 C95 70, 55 90, 45 125 C35 160, 65 195, 100 190 C125 185, 140 165, 145 140" stroke="#C88E5E" strokeWidth="1.3" strokeLinecap="round" opacity="0.75" />
          <path d="M45 125 C25 120, 5 140, 10 165 C15 190, 45 200, 70 195" stroke="#B87333" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
          <path d="M160 210 C155 215, 150 220, 145 225" stroke="#B87333" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          {/* Stamen lines */}
          <path d="M140 150 Q160 110 180 80" stroke="#9C5A28" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <path d="M135 155 Q115 130 90 120" stroke="#9C5A28" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        </svg>
      </div>

      {/* Bottom Left Delicate Botanical Painted Spray */}
      <div className="absolute -bottom-4 -left-4 sm:bottom-2 sm:left-2 w-40 sm:w-56 md:w-68 opacity-65 sm:opacity-80 pointer-events-none">
        <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Soft yellow, peach and lavender botanical branches */}
          <path d="M15 170 C35 145, 65 135, 90 145 C80 165, 50 175, 15 170 Z" fill="#F9E298" fillOpacity="0.85" />
          <path d="M35 140 C55 120, 80 115, 105 125 C95 145, 70 150, 35 140 Z" fill="#F8AFC0" fillOpacity="0.8" />
          <path d="M60 115 C75 95, 105 90, 125 105 C115 125, 90 125, 60 115 Z" fill="#DABAFA" fillOpacity="0.8" />
          <path d="M85 85 C100 65, 125 65, 140 80 C130 100, 110 100, 85 85 Z" fill="#BFDCB8" fillOpacity="0.85" />
          {/* Delicate blossom */}
          <circle cx="45" cy="85" r="14" fill="#F9BA94" fillOpacity="0.9" />
          <circle cx="58" cy="75" r="12" fill="#F8AFC0" fillOpacity="0.85" />
          <circle cx="35" cy="72" r="11" fill="#F9E298" fillOpacity="0.85" />
          <circle cx="45" cy="78" r="4.5" fill="#B87333" fillOpacity="0.85" />
          <path d="M10 175 Q75 115 135 60" stroke="#7A9481" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
};

/**
 * CardWatercolorDecor
 * Exquisite subtle watercolor wash & delicate miniature botanical details INSIDE individual event & content boxes.
 * Leaves the center clear & readable, adding vibrant pastel corners and edges.
 */
export type CardAccentTheme =
  | 'blush-sage'      // Event 1: Mehendi / Family 1
  | 'peach-lavender'  // Event 2: Mithi Shitabi & Jaman / Family 2
  | 'champagne-blush' // Event 3: Katha ni Rasam / Venue 1
  | 'lavender-sage'   // Event 4: Darees & Khushi nu Jaman / Venue 2
  | 'coral-yellow'    // Event 5: Nikah ni Majlis & Khushi nu Jaman / RSVP 1
  | 'sage-gold';      // Venue Home / RSVP 2

interface CardWatercolorDecorProps {
  theme?: CardAccentTheme;
  className?: string;
}

export const CardWatercolorDecor: React.FC<CardWatercolorDecorProps> = ({
  theme = 'blush-sage',
  className = '',
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}>
      {/* Background Soft Pastel Washes inside the card corners */}
      <div className="absolute inset-0 w-full h-full">
        {theme === 'blush-sage' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 500 500" fill="none">
            <radialGradient id="cb-s1" cx="95%" cy="5%" r="45%">
              <stop offset="0%" stopColor="#F8AFC0" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#FCD1DC" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="cb-s2" cx="5%" cy="95%" r="45%">
              <stop offset="0%" stopColor="#BFDCB8" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#DDEBD8" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <rect width="500" height="500" fill="url(#cb-s1)" />
            <rect width="500" height="500" fill="url(#cb-s2)" />
          </svg>
        )}

        {theme === 'peach-lavender' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 500 500" fill="none">
            <radialGradient id="pl-s1" cx="5%" cy="5%" r="45%">
              <stop offset="0%" stopColor="#F9BA94" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#FCD7C2" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="pl-s2" cx="95%" cy="95%" r="45%">
              <stop offset="0%" stopColor="#DABAFA" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#ECD6FB" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <rect width="500" height="500" fill="url(#pl-s1)" />
            <rect width="500" height="500" fill="url(#pl-s2)" />
          </svg>
        )}

        {theme === 'champagne-blush' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 500 500" fill="none">
            <radialGradient id="cb2-s1" cx="95%" cy="10%" r="45%">
              <stop offset="0%" stopColor="#F9DF9C" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#FCEFC8" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="cb2-s2" cx="10%" cy="90%" r="45%">
              <stop offset="0%" stopColor="#F8B0C0" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#FBD3DE" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <rect width="500" height="500" fill="url(#cb2-s1)" />
            <rect width="500" height="500" fill="url(#cb2-s2)" />
          </svg>
        )}

        {theme === 'lavender-sage' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 500 500" fill="none">
            <radialGradient id="ls-s1" cx="8%" cy="10%" r="45%">
              <stop offset="0%" stopColor="#DABAFA" stopOpacity="0.42" />
              <stop offset="60%" stopColor="#ECD6FB" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="ls-s2" cx="92%" cy="90%" r="45%">
              <stop offset="0%" stopColor="#BFDCB8" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#DDEBD8" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <rect width="500" height="500" fill="url(#ls-s1)" />
            <rect width="500" height="500" fill="url(#ls-s2)" />
          </svg>
        )}

        {theme === 'coral-yellow' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 500 500" fill="none">
            <radialGradient id="cy-s1" cx="92%" cy="8%" r="45%">
              <stop offset="0%" stopColor="#F9B890" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#FCD5BE" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="cy-s2" cx="8%" cy="92%" r="45%">
              <stop offset="0%" stopColor="#F9E298" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#FDF0C8" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <rect width="500" height="500" fill="url(#cy-s1)" />
            <rect width="500" height="500" fill="url(#cy-s2)" />
          </svg>
        )}

        {theme === 'sage-gold' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 500 500" fill="none">
            <radialGradient id="sg-s1" cx="6%" cy="8%" r="45%">
              <stop offset="0%" stopColor="#BFDCB8" stopOpacity="0.42" />
              <stop offset="60%" stopColor="#DDEBD8" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="sg-s2" cx="94%" cy="92%" r="45%">
              <stop offset="0%" stopColor="#F9DF9C" stopOpacity="0.42" />
              <stop offset="60%" stopColor="#FCEFC8" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <rect width="500" height="500" fill="url(#sg-s1)" />
            <rect width="500" height="500" fill="url(#sg-s2)" />
          </svg>
        )}
      </div>

      {/* Miniature Hand-Drawn Floral Accents in Corner 1 (Top-Right) */}
      <div className="absolute top-0 right-0 w-20 sm:w-28 opacity-75 sm:opacity-85 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Mini watercolor petals */}
          <circle cx="82" cy="18" r="9" fill="#F8AFC0" fillOpacity="0.75" />
          <circle cx="70" cy="24" r="8" fill="#F9BA94" fillOpacity="0.8" />
          <circle cx="78" cy="32" r="8" fill="#F9E298" fillOpacity="0.75" />
          <circle cx="77" cy="24" r="3" fill="#D4AF7A" fillOpacity="0.9" />
          {/* Mini sage leaf */}
          <path d="M62 14 C52 18, 48 28, 54 36 C60 30, 66 22, 62 14 Z" fill="#BFDCB8" fillOpacity="0.85" />
          <path d="M88 4 C76 8, 70 18, 78 26" stroke="#9C5A28" strokeWidth="0.8" strokeLinecap="round" opacity="0.65" />
        </svg>
      </div>

      {/* Miniature Hand-Drawn Floral Accents in Corner 2 (Bottom-Left) */}
      <div className="absolute bottom-0 left-0 w-20 sm:w-28 opacity-75 sm:opacity-85 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Mini botanical sprig */}
          <path d="M14 84 C24 74, 38 72, 46 80 C38 88, 24 92, 14 84 Z" fill="#BFDCB8" fillOpacity="0.85" />
          <path d="M26 66 C34 58, 46 58, 52 66 C44 72, 32 74, 26 66 Z" fill="#DABAFA" fillOpacity="0.75" />
          {/* Mini blossom */}
          <circle cx="22" cy="80" r="7" fill="#F9BA94" fillOpacity="0.85" />
          <circle cx="32" cy="86" r="6" fill="#F8AFC0" fillOpacity="0.8" />
          <circle cx="27" cy="83" r="2.5" fill="#B87333" fillOpacity="0.9" />
          <path d="M6 96 Q35 70 65 48" stroke="#7A9481" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
};



