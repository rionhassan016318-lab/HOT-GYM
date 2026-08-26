import React from 'react';
import { Phone, Flame, Clock, MapPin, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { GYM_INFO, HOT_GYM_LOGO } from '../data/gymData';
import { gymInteriorFloor } from '../assets/gymPhotos';

interface HeroProps {
  onOpenInquiry: (packageName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0D0D0D]"
    >
      {/* Real Original HOT GYM Floor Photo Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={gymInteriorFloor}
          alt="HOT GYM Real Interior Floor"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.25] contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Charcoal & Fiery Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/90 via-[#0D0D0D]/80 to-[#0D0D0D]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0D0D0D]/60 to-[#0D0D0D]" />
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#FF5722]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Content (Left 7 Cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Logo & Narayanganj Location Badge */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#FF5722] via-[#FF8F00] to-[#FFC107] opacity-70 blur-md group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-black border border-[#FF5722]/60 shadow-2xl flex items-center justify-center">
                  <img
                    src={HOT_GYM_LOGO}
                    alt="HOT GYM Official Logo - Change Your Lifestyle"
                    className="w-full h-full object-cover scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="space-y-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF5722]/40 shadow-lg shadow-[#FF5722]/15">
                  <span className="flex h-2 w-2 rounded-full bg-[#FF5722] animate-pulse"></span>
                  <span className="text-xs sm:text-sm font-bold tracking-wide text-[#FFC107] flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-[#FF5722]" />
                    নারায়ণগঞ্জের প্রিমিয়াম ফিটনেস সেন্টার
                  </span>
                </div>
                <p className="text-xs text-[#A3A3A3] font-medium pl-1">
                  ১৪৪ সুরেশ প্লাজা (৪র্থ তলা) • বঙ্গবন্ধু সড়ক, নারায়ণগঞ্জ
                </p>
              </div>
            </div>

            {/* Main Title & Tagline */}
            <div className="space-y-2">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-heading tracking-tight text-white uppercase leading-none">
                HOT <span className="fire-gradient-text">GYM</span>
                <span className="inline-block ml-3 transform rotate-6 hover:rotate-12 transition-transform duration-200">💪</span>
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="h-[2px] w-12 bg-gradient-to-r from-[#FF5722] to-transparent hidden sm:block"></span>
                <p className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-[#FFC107] tracking-wider uppercase">
                  Change Your Lifestyle
                </p>
                <span className="h-[2px] w-12 bg-gradient-to-l from-[#FF5722] to-transparent hidden sm:block"></span>
              </div>

              {/* Sub-headline strictly in Bengali as requested */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#E5E5E5] pt-1">
                নারায়ণগঞ্জের সেরা ও আধুনিকতম ফিটনেস সেন্টার
              </h2>
            </div>

            {/* Value Proposition Description in Bengali */}
            <p className="text-base sm:text-lg text-[#A3A3A3] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              সম্পূর্ণ শীতাতপ নিয়ন্ত্রিত পরিবেশে সব আধুনিক ও আপডেট জিম ইন্সট্রুমেন্ট, ২ জন দক্ষ প্রফেশনাল ট্রেইনারের দিকনির্দেশনা, হাই-স্পিড ফ্রি ওয়াই-ফাই এবং সাশ্রয়ী প্যাকেজে আপনার ফিটনেস জার্নি শুরু করুন।
            </p>

            {/* Primary CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              {/* Primary Call Now Button */}
              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                id="hero-call-now-btn"
                className="w-full sm:w-auto fire-gradient-bg hover:brightness-110 text-white font-extrabold text-base px-7 py-3.5 rounded-xl shadow-xl shadow-[#FF5722]/30 hover:shadow-[#FF5722]/45 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                <span>কল করুন: {GYM_INFO.phone}</span>
              </a>

              {/* Secondary Hotline Button */}
              <a
                href={`tel:${GYM_INFO.phoneSecondaryRaw}`}
                id="hero-call-secondary-btn"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#181818] hover:bg-[#222222] border border-[#FFC107]/40 text-[#FFC107] font-bold text-base flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>{GYM_INFO.phoneSecondary}</span>
              </a>

              {/* Explore Packages Button */}
              <a
                href="#packages"
                id="hero-explore-packages-btn"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#141414] hover:bg-[#1E1E1E] border border-[#2E2E2E] hover:border-[#FF5722]/60 text-white font-bold text-base flex items-center justify-center gap-2 transition-all"
              >
                <span>প্যাকেজসমূহ দেখুন</span>
                <ArrowRight className="w-4 h-4 text-[#FF7043]" />
              </a>
            </div>

            {/* Quick Key Highlights Chips in Bengali */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl mx-auto lg:mx-0">
              <div className="p-2.5 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-[#262626] flex items-center gap-2 text-xs text-[#D4D4D8]">
                <CheckCircle2 className="w-4 h-4 text-[#FF7043] shrink-0" />
                <span className="font-semibold">আধুনিক ইন্সট্রুমেন্ট</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-[#262626] flex items-center gap-2 text-xs text-[#D4D4D8]">
                <CheckCircle2 className="w-4 h-4 text-[#FF7043] shrink-0" />
                <span className="font-semibold">২ জন ট্রেইনার</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-[#262626] flex items-center gap-2 text-xs text-[#D4D4D8]">
                <CheckCircle2 className="w-4 h-4 text-[#FF7043] shrink-0" />
                <span className="font-semibold">সম্পূর্ণ এসি (Full AC)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-[#262626] flex items-center gap-2 text-xs text-[#D4D4D8]">
                <CheckCircle2 className="w-4 h-4 text-[#FF7043] shrink-0" />
                <span className="font-semibold">ফ্রি ওয়াই-ফাই</span>
              </div>
            </div>

          </div>

          {/* Hero Feature Visual Card & Quick Shift Display (Right 5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-6 sm:p-7 bg-[#141414]/95 backdrop-blur-md border border-[#262626] shadow-2xl shadow-black/90 space-y-5">
              
              {/* Card Header with Logo Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-black border border-[#FF5722]/40 flex items-center justify-center shrink-0 shadow-md shadow-[#FF5722]/15">
                    <img
                      src={HOT_GYM_LOGO}
                      alt="HOT GYM"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white uppercase tracking-wider">সরাসরি ভর্তি চলছে</h3>
                    <p className="text-xs text-[#A3A3A3]">জেন্টস ও লেডিস উভয় প্যাকেজ</p>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-[#FF5722]/15 border border-[#FF5722]/30 text-[11px] font-bold text-[#FF7043]">
                  মাসিক ৳১,০০০
                </div>
              </div>

              {/* Highlight Package Quick Box: 1 Year Special */}
              <div className="p-4 rounded-xl bg-[#0D0D0D] border border-[#FF5722]/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 px-3 py-0.5 rounded-bl-lg fire-gradient-bg text-[10px] font-black uppercase text-white tracking-widest">
                  🔥 মেগা অফার
                </div>
                <div className="text-xs text-[#A3A3A3] font-medium">১ বছরের বিশেষ প্যাকেজ</div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-wide">
                    ৳১১,৫০০
                  </span>
                  <span className="text-sm line-through text-[#737373]">৳১৫,৫০০</span>
                  <span className="text-xs font-bold text-[#22C55E] ml-auto">সরাসরি ৳৪,০০০ সাশ্রয়</span>
                </div>
                <p className="text-xs text-[#D4D4D8] mt-2">
                  পূর্ণ ১২ মাস আনলিমিটেড জিম করার সেরা সুযোগ। কোনো আলাদা ভর্তি ফি নেই!
                </p>
              </div>

              {/* Shifts Fast Overview in Bengali */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-[#A3A3A3]">
                  <span className="flex items-center gap-1.5 text-[#FFC107]">
                    <Clock className="w-3.5 h-3.5 text-[#FF5722]" />
                    দৈনিক শিফট সময়সূচী
                  </span>
                  <a href="#schedule" className="text-[#FF7043] hover:underline text-[11px]">বিস্তারিত দেখুন</a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-lg bg-[#181818] border border-[#262626]">
                    <div className="text-[11px] text-[#FFC107] font-bold">১ম শিফট (জেন্টস)</div>
                    <div className="text-xs font-semibold text-white mt-0.5">সকাল ৭:০০ – ১১:০০ টা</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#181818] border border-[#262626]">
                    <div className="text-[11px] text-[#EC4899] font-bold">লেডিস স্পেশাল টাইম</div>
                    <div className="text-xs font-semibold text-white mt-0.5">সকাল ১১:০০ – দুপুর ৩:০০ টা</div>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-[#181818] border border-[#262626] flex items-center justify-between">
                  <div className="text-[11px] text-[#FF7043] font-bold">২য় শিফট (জেন্টস)</div>
                  <div className="text-xs font-semibold text-white">দুপুর ৩:০০ – রাত ১১:০০ টা</div>
                </div>
              </div>

              {/* Location Snippet in Bengali */}
              <div className="p-3 rounded-xl bg-[#181818] border border-[#262626] flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-white">১৪৪, সুরেশ প্লাজা (৪র্থ তলা)</span>
                  <p className="text-[#A3A3A3] mt-0.5">
                    বঙ্গবন্ধু সড়ক (নারায়ণগঞ্জ ক্লাবের পশ্চিম পাশে, পলি ক্লিনিকের সংলগ্ন)
                  </p>
                </div>
              </div>

              {/* Instant Call Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="py-2.5 rounded-xl fire-gradient-bg text-white text-center font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-[#FF5722]/20 hover:brightness-110 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{GYM_INFO.phone}</span>
                </a>
                <a
                  href={`tel:${GYM_INFO.phoneSecondaryRaw}`}
                  className="py-2.5 rounded-xl bg-[#1C1C1C] hover:bg-[#262626] text-[#FFC107] text-center font-bold text-xs flex items-center justify-center gap-1.5 border border-[#2E2E2E] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{GYM_INFO.phoneSecondary}</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 text-center">
          <a
            href="#packages"
            aria-label="প্যাকেজসমূহ দেখতে স্ক্রোল করুন"
            className="inline-flex flex-col items-center text-xs text-[#737373] hover:text-[#FF7043] transition-colors"
          >
            <span className="tracking-widest uppercase text-[11px] font-semibold mb-1">প্যাকেজ ও সময়সূচী দেখুন</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#FF5722]" />
          </a>
        </div>

      </div>
    </section>
  );
};
