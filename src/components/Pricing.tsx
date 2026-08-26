import React, { useState } from 'react';
import { Check, Flame, Zap, ArrowRight, ShieldCheck, Heart, User, Sparkles } from 'lucide-react';
import { GENTS_PACKAGES, LADIES_PACKAGES, GYM_INFO } from '../data/gymData';
import { PricingPackage } from '../types';

interface PricingProps {
  onSelectPackage: (pkg: PricingPackage) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPackage }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'gents' | 'ladies'>('all');

  const regularMonthlyCost = 15500;
  const yearlyPackageCost = 11500;
  const netSavings = regularMonthlyCost - yearlyPackageCost;

  return (
    <section id="packages" className="py-20 lg:py-28 bg-[#0D0D0D] relative overflow-hidden border-t border-[#1C1C1C]">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FF5722]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header in Bengali */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF5722]/30 text-xs font-bold text-[#FF7043] uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5" />
            স্বচ্ছ ও সাশ্রয়ী মেম্বারশিপ প্ল্যান
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white uppercase">
            জিম মেম্বারশিপ <span className="fire-gradient-text">প্যাকেজসমূহ</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
            কোনো লুকানো চার্জ নেই। পুরুষ ও নারী সদস্যদের জন্য সুবিধাজনক ভর্তি প্যাকেজ, মাসিক ফি, মেগা সাশ্রয়ী ১ বছর প্যাকেজ এবং লাইফটাইম মেম্বারশিপ।
          </p>

          {/* Category Filter Tabs */}
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#141414] border border-[#262626] shadow-lg mt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'all'
                  ? 'fire-gradient-bg text-white shadow-md shadow-[#FF5722]/20'
                  : 'text-[#A3A3A3] hover:text-white hover:bg-[#1F1F1F]'
              }`}
            >
              সকল প্যাকেজ
            </button>
            <button
              onClick={() => setActiveTab('gents')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'gents'
                  ? 'fire-gradient-bg text-white shadow-md shadow-[#FF5722]/20'
                  : 'text-[#A3A3A3] hover:text-white hover:bg-[#1F1F1F]'
              }`}
            >
              <User className="w-3.5 h-3.5 text-[#FFC107]" />
              <span>জেন্টস প্যাকেজ (৪টি)</span>
            </button>
            <button
              onClick={() => setActiveTab('ladies')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'ladies'
                  ? 'bg-gradient-to-r from-[#EC4899] to-[#F43F5E] text-white shadow-md shadow-pink-500/20'
                  : 'text-[#A3A3A3] hover:text-white hover:bg-[#1F1F1F]'
              }`}
            >
              <Heart className="w-3.5 h-3.5 text-[#EC4899]" />
              <span>লেডিস প্যাকেজ (২টি)</span>
            </button>
          </div>
        </div>

        {/* 1. GENTS PACKAGES SECTION */}
        {(activeTab === 'all' || activeTab === 'gents') && (
          <div className="mb-16 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-8 rounded-full fire-gradient-bg" />
              <div>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                  জেন্টস প্যাকেজ (পুরুষদের মেম্বারশিপ)
                </h3>
                <p className="text-xs text-[#A3A3A3]">১ম শিফট ও ২য় শিফটে ওয়ার্কআউট এবং অভিজ্ঞ ট্রেইনারদের পরামর্শ</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {GENTS_PACKAGES.map((pkg) => {
                const isYearly = pkg.id === 'yearly-special';
                const isLifetime = pkg.id === 'lifetime-gents';
                const isAdmission = pkg.id === 'admission-gents';

                return (
                  <div
                    key={pkg.id}
                    id={`package-card-${pkg.id}`}
                    className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                      isYearly
                        ? 'bg-gradient-to-b from-[#241712] via-[#141414] to-[#0E0E0E] border-2 border-[#FF5722] shadow-2xl shadow-[#FF5722]/20 lg:-translate-y-2'
                        : 'bg-[#141414] border border-[#262626] hover:border-[#3A3A3A] hover:bg-[#181818]'
                    } p-6 sm:p-7`}
                  >
                    {/* Badge */}
                    {pkg.badge && (
                      <div
                        className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[11px] font-black tracking-wide shadow-md whitespace-nowrap ${
                          isYearly
                            ? 'fire-gradient-bg text-white shadow-[#FF5722]/30'
                            : isLifetime
                            ? 'bg-[#FFC107] text-black font-extrabold'
                            : 'bg-[#262626] text-[#E5E5E5] border border-[#3A3A3A]'
                        }`}
                      >
                        {pkg.badge}
                      </div>
                    )}

                    <div>
                      {/* Package Title */}
                      <div className="pt-2 text-center">
                        <h4 className="text-xl sm:text-2xl font-black font-heading text-white tracking-wide">
                          {pkg.name}
                        </h4>
                        <p className="text-xs text-[#A3A3A3] min-h-[32px] mt-1.5 line-clamp-2">
                          {pkg.description}
                        </p>
                      </div>

                      {/* Price Display */}
                      <div className="my-5 py-4 px-3 rounded-xl bg-[#0A0A0A] border border-[#262626] text-center">
                        {pkg.originalPrice && (
                          <div className="text-xs line-through text-[#737373] font-semibold mb-0.5">
                            নিয়মিত মূল্য: ৳{pkg.originalPrice.toLocaleString('bn-BD')}
                          </div>
                        )}

                        <div className="flex items-center justify-center gap-1">
                          <span className="text-xl font-bold text-[#FF7043]">৳</span>
                          <span className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight">
                            {pkg.price.toLocaleString('bn-BD')}
                          </span>
                        </div>

                        <div className="text-xs text-[#A3A3A3] font-semibold mt-1">
                          {pkg.period}
                        </div>

                        {pkg.breakdown && (
                          <div className="mt-2.5 pt-2 border-t border-[#262626] text-[11px] font-bold text-[#FFC107]">
                            {pkg.breakdown}
                          </div>
                        )}
                      </div>

                      {/* Features List */}
                      <div className="space-y-2.5 mb-6">
                        <div className="text-xs font-bold text-[#737373] uppercase tracking-wider">
                          প্যাকেজের অন্তর্ভুক্ত সুবিধাসমূহ:
                        </div>
                        <ul className="space-y-2">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-[#D4D4D8] leading-tight">
                              <Check className="w-3.5 h-3.5 text-[#FF7043] shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Join Button */}
                    <div className="pt-4 border-t border-[#262626] space-y-2">
                      <button
                        onClick={() => onSelectPackage(pkg)}
                        id={`btn-select-${pkg.id}`}
                        className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                          isYearly
                            ? 'fire-gradient-bg text-white hover:brightness-110 shadow-lg shadow-[#FF5722]/25'
                            : isLifetime
                            ? 'bg-[#FFC107] hover:bg-[#FFB300] text-black font-extrabold'
                            : 'bg-[#1F1F1F] hover:bg-[#2A2A2A] text-white border border-[#2E2E2E]'
                        }`}
                      >
                        <span>ভর্তি / তথ্য জানতে ক্লিক করুন</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <a
                        href={`tel:${GYM_INFO.phoneRaw}`}
                        className="w-full text-center block text-[11px] text-[#A3A3A3] hover:text-[#FF7043] transition-colors py-0.5"
                      >
                        সরাসরি ফোন: <span className="font-semibold text-white">{GYM_INFO.phone}</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. LADIES PACKAGES SECTION */}
        {(activeTab === 'all' || activeTab === 'ladies') && (
          <div className="mb-16 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-8 rounded-full bg-gradient-to-b from-[#EC4899] to-[#F43F5E]" />
              <div>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                  লেডিস প্যাকেজ (নারী সদস্যদের মেম্বারশিপ)
                </h3>
                <p className="text-xs text-[#A3A3A3]">
                  লেডিস স্পেশাল টাইম (সকাল ১১:০০ – দুপুর ৩:০০ টা) ও নিরাপদ শালীন পরিবেশ
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
              {LADIES_PACKAGES.map((pkg) => {
                const isAdmission = pkg.id === 'admission-ladies';

                return (
                  <div
                    key={pkg.id}
                    id={`package-card-${pkg.id}`}
                    className="relative rounded-2xl flex flex-col justify-between bg-[#141414] border-2 border-pink-500/40 hover:border-pink-500 transition-all duration-300 p-6 sm:p-8 shadow-xl shadow-pink-500/5"
                  >
                    {/* Badge */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-black tracking-wide bg-gradient-to-r from-[#EC4899] to-[#F43F5E] text-white shadow-md">
                      {pkg.badge}
                    </div>

                    <div>
                      {/* Package Title */}
                      <div className="pt-2 text-center">
                        <h4 className="text-2xl font-black font-heading text-white tracking-wide">
                          {pkg.name}
                        </h4>
                        <p className="text-xs text-[#A3A3A3] min-h-[28px] mt-1.5">
                          {pkg.description}
                        </p>
                      </div>

                      {/* Price Display */}
                      <div className="my-5 py-4 px-4 rounded-xl bg-[#0A0A0A] border border-[#262626] text-center">
                        <div className="flex items-center justify-center gap-1">
                          <span className="text-xl font-bold text-[#EC4899]">৳</span>
                          <span className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight">
                            {pkg.price.toLocaleString('bn-BD')}
                          </span>
                        </div>
                        <div className="text-xs text-[#A3A3A3] font-semibold mt-1">
                          {pkg.period}
                        </div>
                        {pkg.breakdown && (
                          <div className="mt-2.5 pt-2 border-t border-[#262626] text-[11px] font-bold text-pink-400">
                            {pkg.breakdown}
                          </div>
                        )}
                      </div>

                      {/* Features List */}
                      <div className="space-y-2.5 mb-6">
                        <div className="text-xs font-bold text-[#737373] uppercase tracking-wider">
                          লেডিস মেম্বারশিপের সুবিধাসমূহ:
                        </div>
                        <ul className="space-y-2">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-[#D4D4D8] leading-tight">
                              <Check className="w-3.5 h-3.5 text-[#EC4899] shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Join Button */}
                    <div className="pt-4 border-t border-[#262626] space-y-2">
                      <button
                        onClick={() => onSelectPackage(pkg)}
                        id={`btn-select-${pkg.id}`}
                        className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-[#EC4899] to-[#F43F5E] hover:brightness-110 text-white shadow-lg shadow-pink-500/20 transition-all"
                      >
                        <span>লেডিস মেম্বারশিপে যোগ দিন</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <a
                        href={`tel:${GYM_INFO.phoneRaw}`}
                        className="w-full text-center block text-[11px] text-[#A3A3A3] hover:text-pink-400 transition-colors py-0.5"
                      >
                        যোগাযোগ: <span className="font-semibold text-white">{GYM_INFO.phone}</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-[#181216] border border-pink-500/30 text-center max-w-2xl mx-auto text-xs text-[#E5E5E5]">
              🌸 <strong>বিশেষ দ্রষ্টব্য:</strong> সকাল ১১:০০ টা থেকে দুপুর ৩:০০ টা পর্যন্ত জিম শুধুমাত্র মেয়েদের জন্য সংরক্ষিত। তবে মেয়েরা চাইলে যেকোনো সময় কম্বাইন্ড শিফটেও নিয়মিত জিম করতে পারবেন।
            </div>
          </div>
        )}

        {/* 3. 1 YEAR SPECIAL SAVINGS COMPARISON CARD */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1E1714] via-[#141414] to-[#1E1714] border border-[#FF5722]/50 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FF5722]/15 text-xs font-bold text-[#FF7043]">
                <Zap className="w-3.5 h-3.5" />
                মেগা সাশ্রয়ী অফার বিশ্লেষণ
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase">
                কেন <span className="text-[#FF7043]">১ বছরের বিশেষ প্যাকেজ (৳১১,৫০০)</span> সবচেয়ে সেরা?
              </h3>
              
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                নিয়মিত মাসিক ফি ও ভর্তি ফি হিসেবে পুরো ১ বছরে আপনার মোট খরচ হতো <strong className="text-white">৳১৫,৫০০</strong> (ভর্তি ফি ৳২,৫০০ + ১ম অগ্রিম ৳১,০০০ + পরবর্তী ১১ মাসের ফি ৳১২,০০০)। কিন্তু বিশেষ অফারে মাত্র <strong className="text-[#FFC107]">৳১১,৫০০</strong>-তে পূর্ণ ১২ মাস মেম্বারশিপ নিয়ে আপনি পাচ্ছেন সরাসরি <strong className="text-[#22C55E]">৳৪,০০০ টাকা নগদ সাশ্রয়!</strong>
              </p>
            </div>

            <div className="lg:col-span-5 p-5 rounded-xl bg-[#0A0A0A] border border-[#262626] space-y-3 text-center sm:text-left">
              <div className="flex justify-between items-center text-xs text-[#A3A3A3]">
                <span>১ বছরের নিয়মিত খরচ (ভর্তি + ১২ মাস)</span>
                <span className="line-through font-semibold text-[#EF4444]">৳১৫,৫০০</span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold text-white">
                <span>১ বছরের বিশেষ প্যাকেজ অফার</span>
                <span className="text-2xl text-[#22C55E] font-heading font-black">৳১১,৫০০ মাত্র</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/30 text-xs text-[#22C55E] font-bold text-center">
                🎉 মোট নগদ সাশ্রয়: ৳৪,০০০ টাকা (২৬% ছাড়)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="fire-gradient-bg text-white font-bold text-xs py-2.5 rounded-lg flex items-center justify-center gap-1.5 shadow-md shadow-[#FF5722]/20 hover:brightness-110"
                >
                  <span>কল করুন: {GYM_INFO.phone}</span>
                </a>
                <a
                  href={`tel:${GYM_INFO.phoneSecondaryRaw}`}
                  className="bg-[#1C1C1C] hover:bg-[#262626] border border-[#2E2E2E] text-[#FFC107] font-bold text-xs py-2.5 rounded-lg flex items-center justify-center gap-1.5"
                >
                  <span>{GYM_INFO.phoneSecondary}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
