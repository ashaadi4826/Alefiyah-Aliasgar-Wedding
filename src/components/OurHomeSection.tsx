import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Home, Navigation, Copy, Check, MapPin } from 'lucide-react';
import { HOME_LOCATION } from '../data/weddingData';
import { GoldFlourishDivider } from './FloralDecor';
import cornerFloralImg from '../assets/images/floral_corner_rose_1787042316490.jpg';

export const OurHomeSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(HOME_LOCATION.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="our-home" className="py-16 sm:py-20 px-4 bg-[#F4ECE1] relative overflow-hidden paper-texture">
      {/* Background floral accents */}
      <div className="absolute top-0 left-0 w-32 opacity-20 pointer-events-none select-none">
        <img
          src={cornerFloralImg}
          alt=""
          className="w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3 mb-8"
        >
          <span className="font-heading-caps text-xs uppercase tracking-[0.25em] text-[#B38747] font-semibold">
            Family Residence
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#5B1A24]">
            {HOME_LOCATION.title}
          </h2>
          <p className="font-serif-luxury text-base sm:text-lg text-[#5C4549] max-w-md mx-auto italic">
            For guests visiting our family residence during the festivities.
          </p>
          <GoldFlourishDivider className="mt-2" />
        </motion.div>

        {/* Home Residence Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-royal-arch p-6 sm:p-10 max-w-xl mx-auto text-center relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-full bg-[#F4ECE1] border border-[#D4AF7A]/70 flex items-center justify-center mx-auto text-[#5B1A24] mb-5 shadow-2xs">
            <Home className="w-5 h-5 text-[#B38747]" />
          </div>

          <div className="space-y-1 mb-6">
            <p className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#5B1A24] leading-snug">
              201 Maimoon Apartment,
            </p>
            <p className="font-serif-luxury text-xl sm:text-2xl text-[#4A3236]">
              Sadar Bazar, Rajkot
            </p>
            <p className="text-xs font-heading-caps text-[#8C6228] uppercase tracking-wider pt-1 font-semibold">
              Gujarat, India
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-[#E3C594]/60">
            <a
              href={HOME_LOCATION.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl bg-[#5B1A24] hover:bg-[#7A2837] text-[#FAF3EB] text-xs font-bold uppercase tracking-wider font-heading-caps transition-all shadow-xs"
            >
              <Navigation className="w-4 h-4 text-[#D4AF7A]" />
              <span>VIEW ON GOOGLE MAPS →</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-3.5 px-5 rounded-xl bg-[#F4ECE1] hover:bg-[#E8C5C8]/40 border border-[#D4AF7A] text-[#5B1A24] text-xs font-heading-caps font-semibold uppercase tracking-wider transition-colors shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="text-emerald-700 font-bold">Address Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#B38747]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
