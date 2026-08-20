import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Heart, Users, Phone, Clock } from 'lucide-react';

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
            className="flex flex-col group"
          >
            <span className="font-serif-luxury text-base sm:text-lg font-semibold tracking-wide text-[#5B1A24] group-hover:text-[#8C2839] transition-colors">
              Alefiyah Weds Aliasgar
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#5B1A24] font-bold -mt-0.5 font-heading-caps whitespace-nowrap">
              24 — 26 Rabi al-Akhar 1448&nbsp;H · 6 — 8 Oct 2026
            </span>
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
                className="text-xs uppercase tracking-[0.16em] font-heading-caps text-[#5B1A24] hover:text-[#B38747] font-semibold transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: RSVP Pill & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#rsvp"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#rsvp');
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#5B1A24] hover:bg-[#451019] text-[#FAF7F2] text-xs font-heading-caps tracking-wider uppercase font-semibold transition-all shadow-sm"
            >
              <Heart className="w-3 h-3 text-[#E3C594] fill-[#E3C594]" />
              <span>RSVP</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#5B1A24] hover:bg-[#EADCCB]/50 transition-colors md:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              <span className="font-serif-luxury text-base font-semibold text-[#5B1A24]">
                Alefiyah Weds Aliasgar
              </span>
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
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#5B1A24] hover:bg-[#EADCCB]/40 transition-colors text-sm font-medium"
                  >
                    <Icon className="w-4 h-4 text-[#B38747]" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
