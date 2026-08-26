import React, { useState, useEffect } from 'react';
import { Clock, Sun, Moon, Flame, Heart, CheckCircle2, Phone, AlertCircle } from 'lucide-react';
import { SHIFTS, GYM_INFO } from '../data/gymData';

export const Schedule: React.FC = () => {
  const [currentShiftIndex, setCurrentShiftIndex] = useState<number | null>(null);
  const [currentTimeStr, setCurrentTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTimeStr(
        now.toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );

      const currentHours = now.getHours();
      const currentMinutes = now.getMinutes();
      const currentTotalMin = currentHours * 60 + currentMinutes;

      // 1st Shift: 7:00 AM (420 min) - 11:00 AM (660 min)
      const shift1Start = 7 * 60;
      const shift1End = 11 * 60;

      // Ladies Shift: 11:00 AM (660 min) - 3:00 PM (900 min)
      const ladiesStart = 11 * 60;
      const ladiesEnd = 15 * 60;

      // 2nd Shift: 3:00 PM (900 min) - 11:00 PM (1380 min)
      const shift2Start = 15 * 60;
      const shift2End = 23 * 60;

      if (currentTotalMin >= shift1Start && currentTotalMin <= shift1End) {
        setCurrentShiftIndex(0);
      } else if (currentTotalMin >= ladiesStart && currentTotalMin < ladiesEnd) {
        setCurrentShiftIndex(1);
      } else if (currentTotalMin >= shift2Start && currentTotalMin <= shift2End) {
        setCurrentShiftIndex(2);
      } else {
        setCurrentShiftIndex(null);
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="schedule" className="py-20 lg:py-28 bg-[#0A0A0A] relative overflow-hidden border-t border-[#1C1C1C]">
      {/* Ambience Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFC107]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF5722]/30 text-xs font-bold text-[#FFC107] uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-[#FF5722]" />
            দৈনিক শিফট ও সময়সূচী
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white uppercase">
            হট জিম <span className="fire-gradient-text">সময়সূচী</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
            আপনার দৈনন্দিন রুটিন ও কর্মব্যস্ততার সাথে মিলিয়ে পুরুষ ও নারী সদস্যদের জন্য সুবিধাজনক ৩টি ভিন্ন শিফট।
          </p>

          {/* Live Clock Strip in Bengali */}
          {currentTimeStr && (
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-xl bg-[#141414] border border-[#262626] text-xs text-[#A3A3A3] shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>বর্তমান সময়: <strong className="text-white font-mono">{currentTimeStr}</strong></span>
              {currentShiftIndex !== null ? (
                <span className="text-emerald-400 font-semibold">• {SHIFTS[currentShiftIndex].name} চলছে</span>
              ) : (
                <span className="text-amber-400 font-semibold">• শিফট বিরতি</span>
              )}
            </div>
          )}
        </div>

        {/* 3 Shifts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* 1st Shift (Gents Morning) */}
          <div
            id="schedule-shift-1"
            className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
              currentShiftIndex === 0
                ? 'bg-gradient-to-b from-[#1F1812] to-[#121212] border-2 border-[#FF5722] shadow-xl shadow-[#FF5722]/15'
                : 'bg-[#141414] border border-[#262626] hover:border-[#3A3A3A]'
            }`}
          >
            {currentShiftIndex === 0 && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                এখন চলছে
              </div>
            )}

            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#FFC107]/15 border border-[#FFC107]/30 flex items-center justify-center text-[#FFC107]">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FFC107]">সকালের শিফট</span>
                  <h3 className="text-2xl font-black font-heading text-white">১ম শিফট (জেন্টস)</h3>
                </div>
              </div>

              {/* Time Badge */}
              <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#262626] mb-5">
                <div className="text-[11px] text-[#737373] font-semibold">নির্ধারিত সময়সূচী</div>
                <div className="text-xl sm:text-2xl font-black font-heading text-[#FF7043] mt-0.5">
                  সকাল ৭:০০ টা – সকাল ১১:০০ টা
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#A3A3A3] mb-5 leading-relaxed">
                সকালের তাজা শক্তিতে শরীরচর্চা শুরু করার সেরা সময়। ব্যবসায়ী, চাকুরিজীবী ও ছাত্রদের জন্য উপযুক্ত।
              </p>

              <div className="space-y-2 pt-3 border-t border-[#262626]">
                <div className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC107] shrink-0 mt-0.5" />
                  <span>সকালে ঠান্ডা ও ফ্রেশ এসি পরিবেশ</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC107] shrink-0 mt-0.5" />
                  <span>কার্ডিও, স্ট্রেচিং ও ওয়েট ট্রেনিং</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#262626] text-center">
              <span className="text-[11px] text-[#A3A3A3]">সকাল ৭:০০ টা থেকে ১১:০০ টা পর্যন্ত খোলা</span>
            </div>
          </div>

          {/* Ladies Special Time */}
          <div
            id="schedule-shift-ladies"
            className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
              currentShiftIndex === 1
                ? 'bg-gradient-to-b from-[#22121A] to-[#121212] border-2 border-pink-500 shadow-xl shadow-pink-500/20'
                : 'bg-[#141414] border-2 border-pink-500/40 hover:border-pink-500'
            }`}
          >
            {currentShiftIndex === 1 ? (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/40 text-[11px] font-bold text-pink-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping" />
                এখন চলছে
              </div>
            ) : (
              <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-md bg-pink-500/15 border border-pink-500/30 text-[10px] font-bold text-pink-400">
                লেডিস স্পেশাল
              </div>
            )}

            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-pink-400">শুধুমাত্র মেয়েদের জন্য</span>
                  <h3 className="text-2xl font-black font-heading text-white">লেডিস স্পেশাল টাইম</h3>
                </div>
              </div>

              {/* Time Badge */}
              <div className="p-4 rounded-xl bg-[#0A0A0A] border border-pink-500/30 mb-5">
                <div className="text-[11px] text-pink-300/70 font-semibold">নির্ধারিত সময়সূচী</div>
                <div className="text-xl sm:text-2xl font-black font-heading text-pink-400 mt-0.5">
                  সকাল ১১:০০ টা – দুপুর ৩:০০ টা
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#A3A3A3] mb-5 leading-relaxed">
                শুধুমাত্র নারী সদস্যদের জন্য সম্পূর্ণ আলাদা, নিরাপদ ও স্বাচ্ছন্দ্যময় ডেডিকেটেড ওয়ার্কআউট শিফট।
              </p>

              <div className="space-y-2 pt-3 border-t border-[#262626]">
                <div className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                  <span>নারী ফিটনেস উৎসাহীদের জন্য সম্পূর্ণ নিরাপদ</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                  <span>ট্রেডমিল, কার্ডিও, সাইক্লিং ও স্ট্রেচিং সুবিধা</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-pink-500/20 text-center">
              <span className="text-[11px] text-pink-300 font-semibold">
                🌸 মেয়েরা যেকোনো সময় কম্বাইন্ড শিফটেও জিম করতে পারবেন
              </span>
            </div>
          </div>

          {/* 2nd Shift (Gents Evening + Special Session) */}
          <div
            id="schedule-shift-2"
            className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
              currentShiftIndex === 2
                ? 'bg-gradient-to-b from-[#221410] to-[#121212] border-2 border-[#FF5722] shadow-xl shadow-[#FF5722]/20'
                : 'bg-[#141414] border border-[#262626] hover:border-[#3A3A3A]'
            }`}
          >
            {currentShiftIndex === 2 && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                এখন চলছে
              </div>
            )}

            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 flex items-center justify-center text-[#FF7043]">
                  <Moon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF7043]">বিকালের শিফট</span>
                  <h3 className="text-2xl font-black font-heading text-white">২য় শিফট (জেন্টস)</h3>
                </div>
              </div>

              {/* Time Badge */}
              <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#262626] mb-4">
                <div className="text-[11px] text-[#737373] font-semibold">নির্ধারিত সময়সূচী</div>
                <div className="text-xl sm:text-2xl font-black font-heading text-[#FF5722] mt-0.5">
                  দুপুর ৩:০০ টা – রাত ১১:০০ টা
                </div>
              </div>

              {/* SPECIAL SESSION HIGHLIGHT BOX */}
              <div className="p-3 rounded-xl bg-[#1C1410] border border-[#FF5722]/40 mb-4">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#FFC107] mb-1">
                  <Flame className="w-3.5 h-3.5 text-[#FF5722]" />
                  <span>বিশেষ সেশন: বিকাল ৪:০০ টা – রাত ১১:০০ টা</span>
                </div>
                <p className="text-[11px] text-[#D4D4D8] leading-tight">
                  ২ জন অভিজ্ঞ প্রফেশনাল ট্রেইনারের সার্বক্ষণিক নিবিড় তত্ত্বাবধান ও ফর্ম কোচিং।
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#262626]">
                <div className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7043] shrink-0 mt-0.5" />
                  <span>কর্মজীবীদের জন্য দীর্ঘ সময় জিম সুবিধা</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7043] shrink-0 mt-0.5" />
                  <span>হেভি পাওয়ারলিফটিং ও মাসল বিল্ডিং</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#262626] text-center">
              <span className="text-[11px] text-[#A3A3A3]">রাত ১১:০০ টা পর্যন্ত দীর্ঘক্ষণ ওয়ার্কআউট সুবিধা</span>
            </div>
          </div>

        </div>

        {/* Schedule Bottom Note & Hotline Bar */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#141414] border border-[#262626] max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-sm font-bold text-white">কোন শিফটে ভর্তি হতে চান? পরামর্শের জন্য কল করুন:</div>
            <p className="text-xs text-[#A3A3A3] mt-0.5">সুরেশ প্লাজার ৪র্থ তলায় সরাসরি এসে দেখে যাওয়ার আমন্ত্রণ</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:${GYM_INFO.phoneRaw}`}
              className="fire-gradient-bg hover:brightness-110 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md shadow-[#FF5722]/25"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{GYM_INFO.phone}</span>
            </a>
            <a
              href={`tel:${GYM_INFO.phoneSecondaryRaw}`}
              className="bg-[#1C1C1C] hover:bg-[#262626] border border-[#2E2E2E] text-[#FFC107] font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{GYM_INFO.phoneSecondary}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
