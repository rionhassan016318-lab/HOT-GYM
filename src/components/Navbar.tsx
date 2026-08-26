import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Flame, Clock, MapPin, Sparkles } from 'lucide-react';
import { GYM_INFO, HOT_GYM_LOGO } from '../data/gymData';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentShiftStatus, setCurrentShiftStatus] = useState<string>('খোলা আছে');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const determineShift = () => {
      const now = new Date();
      const currentHours = now.getHours();
      const currentMinutes = now.getMinutes();
      const currentTotalMin = currentHours * 60 + currentMinutes;

      // 1st Shift: 7:00 AM - 11:00 AM
      if (currentTotalMin >= 7 * 60 && currentTotalMin <= 11 * 60) {
        setCurrentShiftStatus('১ম শিফট চলছে (৭:০০ - ১১:০০)');
      }
      // Ladies: 11:00 AM - 3:00 PM
      else if (currentTotalMin >= 11 * 60 && currentTotalMin < 15 * 60) {
        setCurrentShiftStatus('লেডিস শিফট চলছে (১১:০০ - ৩:০০)');
      }
      // 2nd Shift: 3:00 PM - 11:00 PM
      else if (currentTotalMin >= 15 * 60 && currentTotalMin <= 23 * 60) {
        setCurrentShiftStatus('২য় শিফট চলছে (৩:০০ - ১১:০০)');
      } else {
        setCurrentShiftStatus('শিফট বিরতি');
      }
    };

    window.addEventListener('scroll', handleScroll);
    determineShift();
    const interval = setInterval(determineShift, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: 'হোম', href: '#home' },
    { name: 'প্যাকেজ', href: '#packages' },
    { name: 'সময়সূচী', href: '#schedule' },
    { name: 'সুবিধাসমূহ', href: '#facilities' },
    { name: 'গ্যালারি', href: '#gallery' },
    { name: 'লোকেশন', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#1C1C1C] py-2 shadow-2xl'
          : 'bg-gradient-to-b from-[#0D0D0D]/95 via-[#0D0D0D]/80 to-transparent py-2.5 sm:py-3'
      }`}
    >
      {/* Topmost Info Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 hidden md:flex items-center justify-between text-[11px] text-[#A3A3A3] border-b border-[#1C1C1C]/60 pb-1.5">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[#D4D4D8]">
            <MapPin className="w-3 h-3 text-[#FF5722]" />
            <span>সুরেশ প্লাজা (৪র্থ তলা), নারায়ণগঞ্জ</span>
          </div>
          <span className="text-[#333]">|</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-white font-medium">{currentShiftStatus}</span>
          </div>
        </div>

        {/* Top Direct Phone Numbers */}
        <div className="flex items-center gap-3">
          <span className="text-[#737373] font-medium">হটলাইন:</span>
          <a
            href={`tel:${GYM_INFO.phoneSecondaryRaw}`}
            className="text-[#FFC107] hover:text-white font-bold flex items-center gap-1 transition-colors"
          >
            <Phone className="w-3 h-3 text-[#FFC107]" />
            <span>01311193111</span>
          </a>
          <span className="text-[#333]">/</span>
          <a
            href={`tel:${GYM_INFO.phoneRaw}`}
            className="text-white hover:text-[#FF7043] font-bold flex items-center gap-1 transition-colors"
          >
            <Phone className="w-3 h-3 text-[#FF7043]" />
            <span>01915-707337</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Header */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-black border border-[#FF5722]/50 p-0.5 shadow-lg shadow-[#FF5722]/20 group-hover:scale-105 transition-transform">
                <img
                  src={HOT_GYM_LOGO}
                  alt="HOT GYM Logo"
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black font-heading tracking-wide text-white group-hover:text-[#FF7043] transition-colors">
                  HOT GYM
                </span>
                <span className="text-base sm:text-lg">💪</span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-bold text-[#FFC107] tracking-wider uppercase -mt-0.5">
                Change Your Lifestyle
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links in Bengali */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold text-[#D4D4D8] hover:text-white hover:bg-[#1C1C1C] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Side Numbers / Call Actions */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Direct Call Button 1 (New / Top requested: 01311193111) */}
            <a
              href={`tel:${GYM_INFO.phoneSecondaryRaw}`}
              id="nav-call-secondary-btn"
              className="px-3.5 py-2 rounded-xl bg-[#1C1410] hover:bg-[#281A12] border border-[#FF5722]/40 text-[#FFC107] hover:text-white font-extrabold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF5722]" />
              <span>01311193111</span>
            </a>

            {/* Primary Call Button: 01915-707337 */}
            <a
              href={`tel:${GYM_INFO.phoneRaw}`}
              id="nav-call-btn"
              className="fire-gradient-bg hover:brightness-110 text-white font-extrabold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-lg shadow-[#FF5722]/25 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>কল: {GYM_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Right Side Numbers / Menu Button */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <a
              href={`tel:${GYM_INFO.phoneSecondaryRaw}`}
              className="bg-[#1C1410] border border-[#FF5722]/40 text-[#FFC107] font-bold text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1 shadow-md sm:hidden"
              title="কল করুন: 01311193111"
            >
              <Phone className="w-3 h-3 text-[#FF5722]" />
              <span className="text-[11px]">01311193111</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#181818] text-[#D4D4D8] hover:text-white border border-[#262626] transition-colors"
              aria-label="মোবাইল মেনু খুলুন"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-[#1C1C1C] bg-[#0D0D0D]/95 backdrop-blur-lg rounded-2xl p-4 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            
            {/* Live Shift in Mobile */}
            <div className="p-2.5 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-between text-xs text-[#D4D4D8]">
              <span className="text-[#A3A3A3]">বর্তমান স্ট্যাটাস:</span>
              <span className="font-bold text-[#FFC107] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {currentShiftStatus}
              </span>
            </div>

            {/* Mobile Links */}
            <nav className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-[#141414] hover:bg-[#1E1E1E] text-xs font-bold text-[#E5E5E5] text-center border border-[#262626]"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile Call Buttons */}
            <div className="space-y-2 pt-2 border-t border-[#1C1C1C]">
              <a
                href={`tel:${GYM_INFO.phoneSecondaryRaw}`}
                className="w-full py-3 rounded-xl bg-[#1C1410] border border-[#FF5722]/50 text-[#FFC107] font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4 text-[#FF5722]" />
                <span>কল করুন: 01311193111</span>
              </a>

              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="w-full py-3 rounded-xl fire-gradient-bg text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>কল করুন: {GYM_INFO.phone}</span>
              </a>
            </div>

          </div>
        )}

      </div>
    </header>
  );
};

