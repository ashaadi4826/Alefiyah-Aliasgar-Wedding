import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Heart, Users, Phone, Clock } from 'lucide-react';
import logoRoseImg from '../assets/images/IMG_20260818_135503.png';
import fallbackLogoImg from '../assets/images/wedding_logo_rose.png';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Invitation', href: '#hero', icon: Heart },
    { label: 'Countdown', href: '#countdown', icon: Clock },
    { label: 'Events', href: '#events', icon: Calendar },
    { label: 'Venues', href: '#venues', icon: MapPin },
    { label: 'Families', href: '#families', icon: Users },
    { label: 'RSVP', href: '#rsvp', icon: Phone },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF3EB]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(91,26,36,0.06)] border-b border-[#E3C594]/50 py-2.5'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Couple monogram/name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <img
                src={logoRoseImg}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('IMG_20260818_135503.png')) {
                    target.src = '/IMG_20260818_135503.png';
                  } else if (fallbackLogoImg && target.src !== fallbackLogoImg) {
                    target.src = fallbackLogoImg;
                  } else {
                    target.src = '/wedding_logo_rose.png';
                  }
                }}
                alt="Wedding Logo"
                className="w-full h-full object-contain select-none"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-base sm:text-lg font-semibold tracking-wide text-[#5B1A24]">
                Alefiyah Weds Aliasgar
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#5B1A24] font-bold -mt-0.5 font-heading-caps whitespace-nowrap">
                24 — 26 Rabi al-Akhar 1448&nbsp;H · 6 — 8 Oct 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-xs uppercase tracking-widest text-[#5C4549] hover:text-[#5B1A24] font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C29B5D] hover:after:w-full after:transition-all font-heading-caps"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <a
              href="#rsvp"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#rsvp');
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-white bg-[#5B1A24] hover:bg-[#7A2837] transition-all shadow-xs uppercase font-heading-caps"
            >
              <Phone className="w-3 h-3 text-[#E3C594]" />
              <span>RSVP</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#5B1A24] hover:bg-[#E8C5C8]/20 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-[#332225]/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-14 left-4 right-4 bg-[#FAF3EB] border border-[#E3C594]/80 rounded-2xl shadow-xl p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#E3C594]/40">
              <div className="flex items-center gap-2">
                <img
                  src={logoRoseImg}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('IMG_20260818_135503.png')) {
                      target.src = '/IMG_20260818_135503.png';
                    } else if (fallbackLogoImg && target.src !== fallbackLogoImg) {
                      target.src = fallbackLogoImg;
                    } else {
                      target.src = '/wedding_logo_rose.png';
                    }
                  }}
                  alt="Wedding Logo"
                  className="w-7 h-7 object-contain select-none"
                  referrerPolicy="no-referrer"
                />
                <span className="font-serif-luxury text-base font-semibold text-[#5B1A24]">
                  Alefiyah Weds Aliasgar
                </span>
              </div>
              <span className="text-[10px] font-heading-caps text-[#8C6228] font-bold whitespace-nowrap">
                6 — 8 Oct 2026
              </span>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#4A3236] hover:text-[#5B1A24] hover:bg-[#F4ECE1] transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#F4ECE1] border border-[#E3C594]/50 flex items-center justify-center text-[#B38747]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-serif-luxury text-base">{item.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-[#E3C594]/30 flex gap-2">
              <a
                href="#rsvp"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#rsvp');
                }}
                className="w-full text-center py-2.5 rounded-xl bg-[#5B1A24] text-white text-xs font-semibold tracking-wider uppercase font-heading-caps shadow-sm"
              >
                View RSVP Contacts
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
