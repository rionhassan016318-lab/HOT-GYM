import React from 'react';
import { Dumbbell, Users, Snowflake, Wifi, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';
import { FACILITIES } from '../data/gymData';

export const Facilities: React.FC = () => {
  const getFacilityIcon = (id: string) => {
    switch (id) {
      case 'instruments':
        return <Dumbbell className="w-7 h-7 text-[#FF5722]" />;
      case 'trainers':
        return <Users className="w-7 h-7 text-[#FFC107]" />;
      case 'ac':
        return <Snowflake className="w-7 h-7 text-cyan-400" />;
      case 'wifi':
        return <Wifi className="w-7 h-7 text-emerald-400" />;
      default:
        return <Dumbbell className="w-7 h-7 text-[#FF5722]" />;
    }
  };

  const getFacilityEmoji = (id: string) => {
    switch (id) {
      case 'instruments':
        return '🏋️‍♂️';
      case 'trainers':
        return '👨‍🏫';
      case 'ac':
        return '❄️';
      case 'wifi':
        return '📶';
      default:
        return '⚡';
    }
  };

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-[#0D0D0D] relative overflow-hidden border-t border-[#1C1C1C]">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[#FF5722]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF5722]/30 text-xs font-bold text-[#FF7043] uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5" />
            বিশ্বমানের সুযোগ-সুবিধা
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white uppercase">
            হট জিমের <span className="fire-gradient-text">সুবিধাসমূহ</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
            সুরেশ প্লাজার ৪র্থ তলায় নারায়ণগঞ্জের ফিটনেস প্রেমীদের জন্য নিশ্চিত করা হয়েছে সর্বোচ্চ আধুনিক ও আরামদায়ক পরিবেশ।
          </p>
        </div>

        {/* 4 Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              id={`facility-card-${facility.id}`}
              className="group relative rounded-2xl p-6 sm:p-7 bg-[#141414] border border-[#262626] hover:border-[#FF5722]/60 hover:bg-[#181818] transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Header Icon + Emoji */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-[#0A0A0A] border border-[#262626] group-hover:border-[#FF5722]/40 flex items-center justify-center transition-colors shadow-md">
                    {getFacilityIcon(facility.id)}
                  </div>
                  <span className="text-3xl filter drop-shadow-md">
                    {getFacilityEmoji(facility.id)}
                  </span>
                </div>

                {/* Highlight Tag */}
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#262626] text-[11px] font-bold text-[#FFC107] mb-2">
                  {facility.highlight}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black font-heading text-white tracking-wide group-hover:text-[#FF7043] transition-colors">
                  {facility.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#A3A3A3] mt-2.5 leading-relaxed">
                  {facility.description}
                </p>

                {/* Bullet Points */}
                <div className="mt-5 pt-4 border-t border-[#262626] space-y-2">
                  {facility.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7043] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom State */}
              <div className="mt-6 pt-3 border-t border-[#222222] flex items-center justify-between text-[11px] text-[#737373]">
                <span>সার্বক্ষণিক সুবিধা</span>
                <span className="text-[#22C55E] font-semibold">✓ সক্রিয় ও উপস্থিত</span>
              </div>
            </div>
          ))}
        </div>

        {/* Safety & Environment Banner in Bengali */}
        <div className="mt-12 p-6 rounded-2xl bg-[#141414] border border-[#262626] max-w-4xl mx-auto flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">পরিচ্ছন্ন, স্বাস্থ্যসম্মত ও নিরাপদ পরিবেশ</h4>
            <p className="text-xs text-[#A3A3A3] leading-relaxed">
              প্রতিদিন নিয়মিত স্যানিটাইজেশন, পর্যাপ্ত ভেন্টিলেশন, ফ্রেশ এয়ার সার্কুলেশন এবং নারী-পুরুষ সবার জন্য সুরক্ষিত ও শালীন পরিবেশ বজায় রাখা হয়।
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
