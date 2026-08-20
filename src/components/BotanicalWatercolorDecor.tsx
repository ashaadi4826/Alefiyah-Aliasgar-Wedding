import React from 'react';
import watercolorHeroImg from '../assets/images/watercolor_hero_florals_1787221661934.jpg';
import watercolorCornerImg from '../assets/images/watercolor_corner_spray_1787221676913.jpg';
import watercolorMobileImg from '../assets/images/watercolor_mobile_bg_1787221692345.jpg';
import watercolorGarlandImg from '../assets/images/watercolor_garland_1787221704207.jpg';

/**
 * BotanicalWatercolorDecor & CardWatercolorDecor
 * Realistic, delicate fine-art watercolor flowers and natural foliage (soft blush garden roses,
 * open peonies, wispy baby's breath, and natural eucalyptus/sage leaves).
 * Positioned sparsely along edges and corners, gently fading into a soft pastel watercolor background,
 * leaving the center clean and luminous for text, logo, and wedding details.
 */

interface SectionWatercolorProps {
  variant: 'hero' | 'countdown' | 'events' | 'venues' | 'family' | 'rsvp';
  className?: string;
}

export const BotanicalWatercolorDecor: React.FC<SectionWatercolorProps> = ({ variant, className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}>
      {/* 1. Soft Pastel Watercolor Washes Background Layer (Blush, Peach, Champagne, Soft Sage & Lavender) */}
      <div className="absolute inset-0 w-full h-full">
        {variant === 'hero' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="hero-wash-sage" cx="88%" cy="12%" r="50%">
                <stop offset="0%" stopColor="#BCD9BF" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#E0EDE2" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="hero-wash-peach" cx="12%" cy="16%" r="55%">
                <stop offset="0%" stopColor="#F9BE9B" stopOpacity="0.7" />
                <stop offset="55%" stopColor="#FDE1D0" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="hero-wash-blush" cx="50%" cy="92%" r="55%">
                <stop offset="0%" stopColor="#F7B2C2" stopOpacity="0.7" />
                <stop offset="55%" stopColor="#FBDBE3" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="hero-wash-lavender" cx="12%" cy="82%" r="50%">
                <stop offset="0%" stopColor="#DEBEF6" stopOpacity="0.65" />
                <stop offset="60%" stopColor="#F1E4FA" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="hero-wash-champagne" cx="88%" cy="75%" r="45%">
                <stop offset="0%" stopColor="#F9DF9C" stopOpacity="0.65" />
                <stop offset="60%" stopColor="#FCF2D5" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1000" height="1000" fill="#FAF5EE" />
            <rect width="1000" height="1000" fill="url(#hero-wash-sage)" />
            <rect width="1000" height="1000" fill="url(#hero-wash-peach)" />
            <rect width="1000" height="1000" fill="url(#hero-wash-blush)" />
            <rect width="1000" height="1000" fill="url(#hero-wash-lavender)" />
            <rect width="1000" height="1000" fill="url(#hero-wash-champagne)" />
          </svg>
        )}

        {variant === 'countdown' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="cd-wash-champagne" cx="15%" cy="30%" r="55%">
                <stop offset="0%" stopColor="#F9DF9C" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#FCF0D0" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="cd-wash-blush" cx="85%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#F9AFBF" stopOpacity="0.7" />
                <stop offset="55%" stopColor="#FCD5DE" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="cd-wash-lavender" cx="50%" cy="92%" r="50%">
                <stop offset="0%" stopColor="#D9BAF5" stopOpacity="0.65" />
                <stop offset="60%" stopColor="#EFE0FA" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="cd-wash-sage" cx="10%" cy="85%" r="45%">
                <stop offset="0%" stopColor="#BFDCB8" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#E2EFE0" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1000" height="600" fill="#FAF5EE" />
            <rect width="1000" height="600" fill="url(#cd-wash-champagne)" />
            <rect width="1000" height="600" fill="url(#cd-wash-blush)" />
            <rect width="1000" height="600" fill="url(#cd-wash-lavender)" />
            <rect width="1000" height="600" fill="url(#cd-wash-sage)" />
          </svg>
        )}

        {variant === 'events' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1000 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="ev-wash-peach" cx="10%" cy="12%" r="55%">
                <stop offset="0%" stopColor="#F9B890" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#FCE0D0" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="ev-wash-lavender" cx="90%" cy="20%" r="55%">
                <stop offset="0%" stopColor="#DABAFA" stopOpacity="0.7" />
                <stop offset="55%" stopColor="#EFE2FB" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="ev-wash-blush" cx="8%" cy="60%" r="50%">
                <stop offset="0%" stopColor="#F8AEC0" stopOpacity="0.7" />
                <stop offset="55%" stopColor="#FCD5DF" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="ev-wash-sage" cx="92%" cy="75%" r="50%">
                <stop offset="0%" stopColor="#BADAB4" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#E0EFE0" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="ev-wash-yellow" cx="50%" cy="96%" r="50%">
                <stop offset="0%" stopColor="#F9E298" stopOpacity="0.7" />
                <stop offset="65%" stopColor="#FCF2D5" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1000" height="1200" fill="#FAF5EE" />
            <rect width="1000" height="1200" fill="url(#ev-wash-peach)" />
            <rect width="1000" height="1200" fill="url(#ev-wash-lavender)" />
            <rect width="1000" height="1200" fill="url(#ev-wash-blush)" />
            <rect width="1000" height="1200" fill="url(#ev-wash-sage)" />
            <rect width="1000" height="1200" fill="url(#ev-wash-yellow)" />
          </svg>
        )}

        {variant === 'venues' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="vn-wash-sage" cx="12%" cy="10%" r="50%">
                <stop offset="0%" stopColor="#BFDCB8" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#E2EFE0" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="vn-wash-champagne" cx="88%" cy="18%" r="55%">
                <stop offset="0%" stopColor="#F9DF9C" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#FCF0D0" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="vn-wash-blush" cx="15%" cy="85%" r="50%">
                <stop offset="0%" stopColor="#F8B0C0" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#FCD7DF" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="vn-wash-peach" cx="88%" cy="88%" r="50%">
                <stop offset="0%" stopColor="#F9BA94" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#FCDCCE" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1000" height="1000" fill="#FAF5EE" />
            <rect width="1000" height="1000" fill="url(#vn-wash-sage)" />
            <rect width="1000" height="1000" fill="url(#vn-wash-champagne)" />
            <rect width="1000" height="1000" fill="url(#vn-wash-blush)" />
            <rect width="1000" height="1000" fill="url(#vn-wash-peach)" />
          </svg>
        )}

        {variant === 'family' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1000 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="fm-wash-blush" cx="88%" cy="12%" r="55%">
                <stop offset="0%" stopColor="#F8AFC0" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#FCD6DF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="fm-wash-yellow" cx="12%" cy="18%" r="50%">
                <stop offset="0%" stopColor="#F9E298" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#FCF2D5" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="fm-wash-lavender" cx="15%" cy="88%" r="50%">
                <stop offset="0%" stopColor="#DABAFA" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#EFE2FB" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="fm-wash-peach" cx="85%" cy="82%" r="50%">
                <stop offset="0%" stopColor="#F9BA94" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#FCDCCE" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1000" height="900" fill="#FAF5EE" />
            <rect width="1000" height="900" fill="url(#fm-wash-blush)" />
            <rect width="1000" height="900" fill="url(#fm-wash-yellow)" />
            <rect width="1000" height="900" fill="url(#fm-wash-lavender)" />
            <rect width="1000" height="900" fill="url(#fm-wash-peach)" />
          </svg>
        )}

        {variant === 'rsvp' && (
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="rs-wash-peach" cx="15%" cy="18%" r="55%">
                <stop offset="0%" stopColor="#F9B890" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#FCE0D0" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="rs-wash-lavender" cx="85%" cy="20%" r="50%">
                <stop offset="0%" stopColor="#DABAFA" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#EFE2FB" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="rs-wash-blush" cx="50%" cy="88%" r="55%">
                <stop offset="0%" stopColor="#F8ADC0" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#FCD5DE" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="rs-wash-sage" cx="8%" cy="80%" r="40%">
                <stop offset="0%" stopColor="#BFDCB8" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#E2EFE0" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1000" height="800" fill="#FAF5EE" />
            <rect width="1000" height="800" fill="url(#rs-wash-peach)" />
            <rect width="1000" height="800" fill="url(#rs-wash-lavender)" />
            <rect width="1000" height="800" fill="url(#rs-wash-blush)" />
            <rect width="1000" height="800" fill="url(#rs-wash-sage)" />
          </svg>
        )}
      </div>

      {/* 2. REALISTIC Fine-Art Watercolor Flowers & Foliage Placed Around Edges & Corners */}
      {/* (Garden roses, peonies, baby's breath, and natural eucalyptus leaves with soft edge fades) */}

      {variant === 'hero' ? (
        <>
          {/* Top & Side Realistic Watercolor Floral Framing (Desktop / Wide) */}
          <div className="hidden sm:block absolute inset-0 w-full h-full opacity-70 mix-blend-multiply pointer-events-none">
            <img
              src={watercolorHeroImg}
              alt=""
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Mobile Realistic Watercolor Floral Framing */}
          <div className="sm:hidden absolute inset-0 w-full h-full opacity-70 mix-blend-multiply pointer-events-none">
            <img
              src={watercolorMobileImg}
              alt=""
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Gentle Central Luminous Radial Mask to ensure center is 100% clean and clear for logo & names */}
          <div className="absolute inset-0 bg-radial from-[#FAF5EE]/90 via-[#FAF5EE]/50 to-transparent pointer-events-none" />
        </>
      ) : (
        <>
          {/* Corner 1: Top-Left Realistic Watercolor Rose, Peony & Baby's Breath Corner Spray */}
          <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-44 sm:w-64 md:w-80 aspect-square opacity-70 mix-blend-multiply pointer-events-none transform -rotate-12 transition-transform duration-700">
            <img
              src={watercolorCornerImg}
              alt=""
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Corner 2: Top-Right Realistic Watercolor Corner Spray */}
          <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-44 sm:w-64 md:w-80 aspect-square opacity-70 mix-blend-multiply pointer-events-none transform scale-x-[-1] rotate-12 transition-transform duration-700">
            <img
              src={watercolorCornerImg}
              alt=""
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Corner 3: Bottom-Left Realistic Watercolor Corner Spray */}
          <div className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10 w-44 sm:w-64 md:w-80 aspect-square opacity-65 mix-blend-multiply pointer-events-none transform scale-y-[-1] rotate-12 transition-transform duration-700">
            <img
              src={watercolorCornerImg}
              alt=""
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Corner 4: Bottom-Right Realistic Watercolor Corner Spray */}
          <div className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 w-44 sm:w-64 md:w-80 aspect-square opacity-65 mix-blend-multiply pointer-events-none transform scale-[-1] -rotate-12 transition-transform duration-700">
            <img
              src={watercolorCornerImg}
              alt=""
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Subtle horizontal garland framing at the top edge of long sections */}
          {(variant === 'events' || variant === 'venues') && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 sm:h-32 opacity-40 mix-blend-multiply pointer-events-none">
              <img
                src={watercolorGarlandImg}
                alt=""
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Center Luminous Clear Zone */}
          <div className="absolute inset-0 bg-radial from-[#FAF5EE]/90 via-[#FAF5EE]/40 to-transparent pointer-events-none" />
        </>
      )}
    </div>
  );
};

/**
 * CardWatercolorDecor
 * Subtle watercolor washes & delicate miniature botanical floral details INSIDE individual event & content boxes.
 * Leaves the center clear & readable, adding delicate realistic watercolor floral corners.
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

      {/* Realistic Miniature Watercolor Flower Blossom in Corner 1 (Top-Right) */}
      <div className="absolute -top-3 -right-3 w-16 sm:w-20 aspect-square opacity-65 mix-blend-multiply pointer-events-none transform rotate-45">
        <img
          src={watercolorCornerImg}
          alt=""
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Realistic Miniature Watercolor Flower Blossom in Corner 2 (Bottom-Left) */}
      <div className="absolute -bottom-3 -left-3 w-16 sm:w-20 aspect-square opacity-65 mix-blend-multiply pointer-events-none transform scale-[-1] rotate-45">
        <img
          src={watercolorCornerImg}
          alt=""
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};


