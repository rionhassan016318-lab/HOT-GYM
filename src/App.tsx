import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { Schedule } from './components/Schedule';
import { Facilities } from './components/Facilities';
import { Gallery } from './components/Gallery';
import { LocationAndContact } from './components/LocationAndContact';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { PricingPackage } from './types';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PricingPackage | null>(null);

  const handleOpenInquiry = (pkg?: PricingPackage) => {
    if (pkg) {
      setSelectedPackage(pkg);
    }
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F7] flex flex-col font-sans selection:bg-[#FF5722] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenInquiry={() => handleOpenInquiry()} />

        {/* 2. Pricing & Membership Packages */}
        <Pricing onSelectPackage={(pkg) => handleOpenInquiry(pkg)} />

        {/* 3. Schedule & Shift Timings */}
        <Schedule />

        {/* 4. Facilities & Features */}
        <Facilities />

        {/* 5. Real Gym Photos & Facebook Gallery */}
        <Gallery />

        {/* 6. Location & Contact Information */}
        <LocationAndContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={handleCloseInquiry}
        initialPackage={selectedPackage}
      />
    </div>
  );
}

