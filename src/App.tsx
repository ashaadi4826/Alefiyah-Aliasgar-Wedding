/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { EventsTimeline } from './components/EventsTimeline';
import { VenuesSection } from './components/VenuesSection';
import { FamilySection } from './components/FamilySection';
import { RSVPSection } from './components/RSVPSection';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF4ED] text-[#2D1117] flex flex-col selection:bg-[#E8C5C8] selection:text-[#5B1A24]">
      {/* Top minimal stationery navigation */}
      <Navbar />

      {/* Main Content Sections - Strictly Ordered to Wedding Sequence */}
      <main className="flex-1">
        {/* 1. Hero / Wedding Inscription with Calligraphy Rose Logo & Cohesive Flowing Typography */}
        <Hero />

        {/* 2. The Countdown Begins */}
        <Countdown />

        {/* 3. Program of Celebrations & Wedding Events */}
        <EventsTimeline />

        {/* 4. Destinations: Venues & Locations (Including Family Residence) */}
        <VenuesSection />

        {/* 5. Elders & Loved Ones / Family Blessings */}
        <FamilySection />

        {/* 6. RSVP / Parents' Contact Info */}
        <RSVPSection />

        {/* Bottom Closing Note */}
        <div className="py-8 px-4 text-center border-t border-[#D4AF7A]/60 bg-[#EFE3D5]/60">
          <p className="font-serif-luxury text-sm sm:text-base text-[#451019] italic font-bold">
            Designed with love for our wedding guests.
          </p>
        </div>
      </main>

      {/* Mobile Floating Quick Action Bar: Events · Venues · RSVP */}
      <MobileQuickBar />
    </div>
  );
}
