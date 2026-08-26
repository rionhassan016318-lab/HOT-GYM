import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Clock, Copy, Check, ExternalLink, ShieldCheck, Flame } from 'lucide-react';
import { GYM_INFO, HOT_GYM_LOGO } from '../data/gymData';

export const LocationAndContact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      `${GYM_INFO.name}, ${GYM_INFO.addressBn}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#0A0A0A] relative overflow-hidden border-t border-[#1C1C1C]">
      {/* Ambience Background */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF5722]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF5722]/30 text-xs font-bold text-[#FF7043] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            লোকেশন ও যোগাযোগ
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white uppercase">
            হট জিম <span className="fire-gradient-text">ঠিকানা ও কন্টাক্ট</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
            নারায়ণগঞ্জ শহরের প্রাণকেন্দ্র বঙ্গবন্ধু সড়কের সুরেশ প্লাজায় আমাদের অবস্থান। সরাসরি চলে আসুন অথবা ফোনে যোগাযোগ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact & Address Information (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#141414] border border-[#262626] space-y-5 shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 flex items-center justify-center text-[#FF7043] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#FF7043] uppercase tracking-wider">আমাদের সঠিক ঠিকানা</span>
                    <h3 className="text-2xl font-black font-heading text-white">
                      ১৪৪, সুরেশ প্লাজা (৪র্থ তলা)
                    </h3>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="px-3 py-1.5 rounded-lg bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-[#2E2E2E] text-xs font-semibold text-[#D4D4D8] flex items-center gap-1.5 transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">কপি হয়েছে!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#A3A3A3]" />
                      <span>ঠিকানা কপি</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#0D0D0D] border border-[#262626] space-y-2">
                <div className="text-sm font-semibold text-white">
                  বঙ্গবন্ধু সড়ক (নারায়ণগঞ্জ ক্লাবের পশ্চিম পাশে, পলি ক্লিনিকের সংলগ্ন), নারায়ণগঞ্জ
                </div>
                <div className="text-xs text-[#A3A3A3]">
                  ল্যান্ডমার্ক: নারায়ণগঞ্জ ক্লাব লিমিটেডের পশ্চিম দিক এবং পলি ক্লিনিক ভবনের সাথে।
                </div>
              </div>

              {/* Action Buttons for Map */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={GYM_INFO.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-open-google-maps"
                  className="fire-gradient-bg hover:brightness-110 text-white font-extrabold text-xs sm:text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#FF5722]/25 transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>গুগল ম্যাপে লোকেশন দেখুন</span>
                </a>

                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="bg-[#1C1C1C] hover:bg-[#262626] border border-[#2E2E2E] text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#FFC107]" />
                  <span>কল করুন: {GYM_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Hotlines & WhatsApp Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#141414] border border-[#262626] space-y-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#22C55E] uppercase tracking-wider">হটলাইন ও হোয়াটসঅ্যাপ</span>
                  <h3 className="text-2xl font-black font-heading text-white">
                    সরাসরি কথা বলুন
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Number 1 */}
                <div className="p-4 rounded-xl bg-[#0D0D0D] border border-[#262626] space-y-3">
                  <div>
                    <div className="text-[11px] font-bold text-[#FFC107] uppercase">প্রধান কন্টাক্ট / হোয়াটসঅ্যাপ</div>
                    <div className="text-xl sm:text-2xl font-black font-heading text-white mt-0.5">
                      {GYM_INFO.phone}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${GYM_INFO.phoneRaw}`}
                      className="flex-1 py-2 rounded-lg fire-gradient-bg text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>কল দিন</span>
                    </a>
                    <a
                      href={GYM_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Number 2 */}
                <div className="p-4 rounded-xl bg-[#0D0D0D] border border-[#262626] space-y-3">
                  <div>
                    <div className="text-[11px] font-bold text-[#A3A3A3] uppercase">বিকল্প কন্টাক্ট নম্বর</div>
                    <div className="text-xl sm:text-2xl font-black font-heading text-white mt-0.5">
                      {GYM_INFO.phoneSecondary}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${GYM_INFO.phoneSecondaryRaw}`}
                      className="w-full py-2 rounded-lg bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-[#2E2E2E] text-[#FFC107] font-bold text-xs flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>সরাসরি কল দিন</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Visual Gym Badge & Google Maps Interactive Preview (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Branding Summary Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#181818] to-[#121212] border border-[#262626] text-center space-y-4 shadow-xl">
              <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden bg-black border border-[#FF5722]/50 p-1 shadow-xl shadow-[#FF5722]/20">
                <img
                  src={HOT_GYM_LOGO}
                  alt="HOT GYM Official Logo"
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-3xl font-black font-heading text-white">
                  HOT GYM 💪
                </h3>
                <p className="text-sm font-bold text-[#FFC107] tracking-widest uppercase">
                  "Change Your Lifestyle"
                </p>
                <p className="text-xs text-[#A3A3A3] pt-1">
                  নারায়ণগঞ্জের সেরা ও আধুনিকতম ফিটনেস সেন্টার
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0D0D0D] border border-[#262626] text-left space-y-2 text-xs text-[#D4D4D8]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#FF7043] shrink-0" />
                  <span><strong>সকাল:</strong> ৭:০০ টা – ১১:০০ টা (১ম শিফট)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span><strong>লেডিস:</strong> ১১:০০ টা – ৩:০০ টা (লেডিস স্পেশাল)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#FFC107] shrink-0" />
                  <span><strong>বিকাল:</strong> ৩:০০ টা – ১১:০০ টা (২য় শিফট)</span>
                </div>
              </div>

              {/* Direct Map & Facebook Buttons */}
              <div className="space-y-2">
                <a
                  href={GYM_INFO.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 rounded-xl fire-gradient-bg hover:brightness-110 text-white font-extrabold text-xs shadow-lg shadow-[#FF5722]/25 text-center transition-all"
                >
                  গুগল ম্যাপে লোকেশন দেখুন →
                </a>
                <a
                  href={GYM_INFO.facebookPost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-xl bg-[#1877F2]/15 hover:bg-[#1877F2]/25 border border-[#1877F2]/40 text-blue-400 hover:text-white font-bold text-xs text-center transition-all"
                >
                  🌐 অফিসিয়াল ফেসবুক পোস্ট ও আপডেট দেখুন →
                </a>
              </div>
            </div>

            {/* Direct Google Maps Embed Card */}
            <div className="rounded-2xl overflow-hidden bg-[#141414] border border-[#262626] p-4 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-white">
                <span className="flex items-center gap-1.5 text-[#FF7043]">
                  <Navigation className="w-3.5 h-3.5" />
                  গুগল ম্যাপস প্রিভিউ
                </span>
                <a
                  href={GYM_INFO.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#FFC107] hover:underline flex items-center gap-1"
                >
                  <span>পূর্ণ ম্যাপে খুলুন</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative h-44 rounded-xl overflow-hidden bg-[#0A0A0A] border border-[#262626]">
                <iframe
                  title="HOT GYM Narayanganj Google Map Location"
                  src="https://maps.google.com/maps?q=23.6187,90.5012&hl=bn&z=17&output=embed"
                  className="w-full h-full border-0 filter invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-2 left-2 right-2 p-2 rounded-lg bg-black/85 backdrop-blur-md border border-white/10 text-[11px] text-[#E5E5E5] flex items-center justify-between pointer-events-none">
                  <span className="font-semibold truncate">১৪৪, সুরেশ প্লাজা (৪র্থ তলা), নারায়ণগঞ্জ</span>
                  <span className="text-[#FF5722] font-bold shrink-0 ml-1">HOT GYM</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
