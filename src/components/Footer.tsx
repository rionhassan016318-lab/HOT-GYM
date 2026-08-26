import React from 'react';
import { Phone, MapPin, Flame, Clock, Heart, ArrowUp } from 'lucide-react';
import { GYM_INFO, HOT_GYM_LOGO } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-[#1C1C1C] text-[#A3A3A3] text-xs relative overflow-hidden">
      {/* Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#FF5722] via-[#FF8F00] to-[#FFC107]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Logo (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-black border border-[#FF5722]/50 p-1 shadow-lg shadow-[#FF5722]/20">
                <img
                  src={HOT_GYM_LOGO}
                  alt="HOT GYM Official Logo"
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-2xl font-black font-heading text-white">HOT GYM 💪</span>
                <p className="text-xs text-[#FFC107] font-bold tracking-widest uppercase">Change Your Lifestyle</p>
              </div>
            </div>

            <p className="text-xs text-[#A3A3A3] leading-relaxed max-w-sm">
              নারায়ণগঞ্জের সেরা ও আধুনিকতম ফিটনেস সেন্টার। সম্পূর্ণ শীতাতপ নিয়ন্ত্রিত পরিবেশে আধুনিক সব যন্ত্রপাতি ও ২ জন দক্ষ ট্রেইনারের সাথে আপনার শরীরচর্চা হোক ফলপ্রসূ।
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={`tel:${GYM_INFO.phoneSecondaryRaw}`}
                className="px-3.5 py-2 rounded-xl bg-[#1C1410] border border-[#FF5722]/40 text-[#FFC107] font-bold text-xs flex items-center gap-1.5 hover:bg-[#281A12] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>01311193111</span>
              </a>
              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="px-3.5 py-2 rounded-xl fire-gradient-bg text-white font-bold text-xs flex items-center gap-1.5 shadow-md hover:brightness-110 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{GYM_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">দ্রুত মেনু</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">হোম পেইজ</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">প্যাকেজসমূহ</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-white transition-colors">শিফট সময়সূচী</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">সুবিধাসমূহ</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">ফটো গ্যালারি</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">লোকেশন ও ম্যাপ</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Shift Hours (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">শিফট সমূহ</h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-white font-semibold block">১ম শিফট (জেন্টস)</span>
                <span className="text-[#A3A3A3]">সকাল ৭:০০ – ১১:০০ টা</span>
              </div>
              <div>
                <span className="text-pink-400 font-semibold block">লেডিস স্পেশাল</span>
                <span className="text-[#A3A3A3]">সকাল ১১:০০ – দুপুর ৩:০০ টা</span>
              </div>
              <div>
                <span className="text-[#FF7043] font-semibold block">২য় শিফট (জেন্টস)</span>
                <span className="text-[#A3A3A3]">দুপুর ৩:০০ – রাত ১১:০০ টা</span>
              </div>
            </div>
          </div>

          {/* Col 4: Address & Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">ঠিকানা ও যোগাযোগ</h4>
            <div className="p-3.5 rounded-xl bg-[#121212] border border-[#222222] text-xs space-y-2 text-[#D4D4D8]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                <span>১৪৪, সুরেশ প্লাজা (৪র্থ তলা), বঙ্গবন্ধু সড়ক, নারায়ণগঞ্জ</span>
              </div>
              <p className="text-[11px] text-[#737373]">
                (নারায়ণগঞ্জ ক্লাবের পশ্চিম পাশে, পলি ক্লিনিকের সংলগ্ন)
              </p>
              <div className="pt-2 border-t border-[#222] flex flex-col gap-1 text-[11px]">
                <div className="flex items-center gap-1.5 text-[#FFC107]">
                  <Phone className="w-3 h-3" />
                  <a href={`tel:${GYM_INFO.phoneSecondaryRaw}`} className="hover:underline">01311193111</a>
                </div>
                <div className="flex items-center gap-1.5 text-white">
                  <Phone className="w-3 h-3 text-[#FF7043]" />
                  <a href={`tel:${GYM_INFO.phoneRaw}`} className="hover:underline">{GYM_INFO.phone}</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-10 mt-10 border-t border-[#181818] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#737373]">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">HOT GYM 💪</strong>. সর্বস্বত্ব সংরক্ষিত। Slogan: "Change Your Lifestyle"
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/p/14ofLc84Hr1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:underline"
            >
              ফেসবুক পেজ
            </a>
            <a
              href="https://maps.app.goo.gl/uJGvSfpZ1R6Grufp7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF7043] hover:underline"
            >
              গুগল ম্যাপে লোকেশন
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#141414] hover:bg-[#1E1E1E] text-[#D4D4D8] hover:text-white border border-[#262626] transition-colors flex items-center gap-1"
              title="উপরে যান"
            >
              <span>উপরে</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

