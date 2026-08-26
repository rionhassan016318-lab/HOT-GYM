import React, { useState } from 'react';
import { X, Phone, Check, Flame, MapPin, Sparkles, Copy, ArrowRight, Heart } from 'lucide-react';
import { GYM_INFO, PACKAGES, HOT_GYM_LOGO } from '../data/gymData';
import { PricingPackage } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: PricingPackage | null;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialPackage,
}) => {
  const [selectedPkgId, setSelectedPkgId] = useState<string>(
    initialPackage ? initialPackage.id : 'yearly-special'
  );
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentPkg = PACKAGES.find((p) => p.id === selectedPkgId) || PACKAGES[2];

  const handleCopyHotline = () => {
    navigator.clipboard.writeText(`${GYM_INFO.phone} / ${GYM_INFO.phoneSecondary}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#121212] border border-[#262626] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1C1C1C] text-[#A3A3A3] hover:text-white transition-colors"
          aria-label="বন্ধ করুন"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-6 pr-8">
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-black border border-[#FF5722]/50 shrink-0 shadow-md shadow-[#FF5722]/20">
            <img
              src={HOT_GYM_LOGO}
              alt="HOT GYM Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-0.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FF5722]/15 text-[11px] font-bold text-[#FF7043]">
              <Flame className="w-3 h-3" />
              হট জিম মেম্বারশিপ
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-heading text-white uppercase">
              ভর্তি ও প্যাকেজ <span className="fire-gradient-text">তথ্য</span>
            </h3>
            <p className="text-[11px] text-[#A3A3A3]">
              প্যাকেজ নির্বাচন করুন এবং সরাসরি ডেস্কে কথা বলুন।
            </p>
          </div>
        </div>

        {/* Package Selector Pills */}
        <div className="space-y-2 mb-6">
          <label className="text-xs font-bold text-[#A3A3A3] uppercase tracking-wider">
            প্যাকেজ বাছাই করুন:
          </label>
          <div className="grid grid-cols-2 gap-2">
            {PACKAGES.map((pkg) => (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setSelectedPkgId(pkg.id)}
                className={`p-3 rounded-xl text-left border text-xs transition-all ${
                  selectedPkgId === pkg.id
                    ? 'bg-[#1C1614] border-[#FF5722] text-white shadow-md'
                    : 'bg-[#181818] border-[#262626] text-[#A3A3A3] hover:border-[#3A3A3A]'
                }`}
              >
                <div className="font-bold text-white text-xs truncate">{pkg.name}</div>
                <div className="text-sm font-black font-heading text-[#FF7043] mt-0.5">
                  ৳{pkg.price.toLocaleString('bn-BD')}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Package Highlight Box */}
        <div className="p-4 rounded-2xl bg-[#0A0A0A] border border-[#262626] mb-6 space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-sm font-bold text-white uppercase">{currentPkg.name}</span>
              <p className="text-xs text-[#FFC107] mt-0.5">{currentPkg.breakdown || currentPkg.description}</p>
            </div>
            <span className="text-2xl font-black font-heading text-white">৳{currentPkg.price.toLocaleString('bn-BD')}</span>
          </div>

          <div className="pt-2 border-t border-[#1C1C1C] text-xs text-[#A3A3A3]">
            সম্পূর্ণ এসি পরিবেশ, ২ জন দক্ষ ট্রেইনারের তত্ত্বাবধান, আধুনিক যন্ত্রপাতি ও ফ্রি ওয়াই-ফাই অন্তর্ভুক্ত।
          </div>
        </div>

        {/* Quick Location Note */}
        <div className="flex items-center gap-2 text-xs text-[#A3A3A3] mb-6 px-1">
          <MapPin className="w-4 h-4 text-[#FF5722] shrink-0" />
          <span className="truncate">১৪৪, সুরেশ প্লাজা (৪র্থ তলা), বঙ্গবন্ধু সড়ক, নারায়ণগঞ্জ</span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a
              href={`tel:${GYM_INFO.phoneRaw}`}
              className="fire-gradient-bg hover:brightness-110 text-white font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#FF5722]/30 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>কল করুন: {GYM_INFO.phone}</span>
            </a>
            <a
              href={`tel:${GYM_INFO.phoneSecondaryRaw}`}
              className="bg-[#1C1C1C] hover:bg-[#262626] border border-[#FFC107]/40 text-[#FFC107] font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>কল করুন: {GYM_INFO.phoneSecondary}</span>
            </a>
          </div>

          <button
            onClick={handleCopyHotline}
            type="button"
            className="w-full py-2.5 rounded-xl bg-[#141414] hover:bg-[#1E1E1E] border border-[#2E2E2E] text-xs font-semibold text-[#D4D4D8] flex items-center justify-center gap-2 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">উভয় নম্বর কপি করা হয়েছে!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#A3A3A3]" />
                <span>ফোন নম্বরসমূহ কপি করুন</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
