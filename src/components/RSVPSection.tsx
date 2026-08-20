import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, Heart } from 'lucide-react';
import { RSVP_CONTACTS } from '../data/weddingData';
import { GoldFlourishDivider } from './FloralDecor';
import { BotanicalWatercolorDecor, CardWatercolorDecor } from './BotanicalWatercolorDecor';

export const RSVPSection: React.FC = () => {
  return (
    <section id="rsvp" className="py-16 sm:py-24 px-4 relative overflow-hidden paper-texture">
      {/* Soft Watercolor Pastel Background with Hand-Drawn Edge Botanicals */}
      <BotanicalWatercolorDecor variant="rsvp" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <span className="font-heading-caps text-xs uppercase tracking-[0.25em] text-[#7A2837] font-bold">
              Kindly Respond
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#451019] tracking-wide">
              RSVP
            </h2>
            <p className="font-serif-luxury text-base sm:text-xl text-[#24080D] max-w-lg mx-auto italic font-bold">
              &ldquo;For any assistance or further information, we would be delighted to help:&rdquo;
            </p>
            <GoldFlourishDivider className="mt-3 max-w-xs" />
          </motion.div>
        </div>

        {/* Contact Hosts Cards Grid - Soft Continuous Stationery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
          {RSVP_CONTACTS.map((contact, idx) => (
            <motion.div
              key={contact.phone}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#FAF5EE]/95 border border-[#D4AF7A] text-center flex flex-col justify-between relative overflow-hidden shadow-[0_8px_24px_-6px_rgba(91,26,36,0.08)] backdrop-blur-2xs"
            >
              {/* Botanical and floral watercolor details inside the RSVP card */}
              <CardWatercolorDecor theme={idx === 0 ? 'lavender-sage' : 'coral-yellow'} />

              <div className="relative z-10 flex flex-col justify-between h-full">
                {/* Top gold emblem */}
                <div className="w-8 h-8 rounded-full bg-[#FAF4ED] border border-[#D4AF7A] flex items-center justify-center text-[#B38747] mx-auto mb-2 shadow-2xs">
                  <Heart className="w-4 h-4 fill-[#B38747] text-[#8C1D2F]" />
                </div>

                <div>
                  <span className="text-[11px] font-heading-caps uppercase tracking-wider text-[#7A2837] font-bold block">
                    {contact.relation}
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#451019] mt-0.5 mb-2">
                    {contact.name}
                  </h3>
                  <a
                    href={`tel:${contact.phone}`}
                    className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#24080D] hover:text-[#7A2837] tracking-wider transition-colors inline-block mb-4 underline decoration-[#D4AF7A] underline-offset-4"
                  >
                    {contact.formattedPhone}
                  </a>
                </div>

                {/* Call and WhatsApp buttons */}
                <div className="flex flex-col gap-2 pt-2 border-t border-[#D4AF7A]/60">
                  <a
                    href={`tel:${contact.phone}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#5B1A24] hover:bg-[#451019] text-[#FAF4ED] text-xs font-bold uppercase tracking-wider font-heading-caps transition-all shadow-xs"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF7A]" />
                    <span>CALL {contact.name.split(' ')[0].toUpperCase()}</span>
                  </a>

                  <a
                    href={`https://wa.me/91${contact.phone}?text=${encodeURIComponent(contact.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FAF4ED] hover:bg-[#EFE3D5] border border-[#D4AF7A] text-[#451019] text-xs font-bold uppercase tracking-wider font-heading-caps transition-colors shadow-2xs"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp Message</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
