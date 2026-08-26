import React, { useState } from 'react';
import { GYM_PHOTOS, GymPhoto } from '../assets/gymPhotos';
import { GYM_INFO } from '../data/gymData';
import { Eye, ChevronLeft, ChevronRight, X, Phone, Sparkles, MapPin } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: `সকল ছবি (${GYM_PHOTOS.length}টি অফিসিয়াল ছবি)` },
    { id: 'জিম ফ্লোর', label: 'জিম ফ্লোর ও স্পেস' },
    { id: 'লেডিস ফিটনেস', label: 'লেডিস ফিটনেস' },
    { id: 'মোটিভেশন', label: 'মোটিভেশন' },
    { id: 'নোটিশ ও আপডেট', label: 'নোটিশ ও আপডেট' }
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? GYM_PHOTOS
    : GYM_PHOTOS.filter((p) => p.category === selectedCategory);

  const openLightbox = (photoId: string) => {
    const idx = GYM_PHOTOS.findIndex((p) => p.id === photoId);
    if (idx !== -1) {
      setActivePhotoIndex(idx);
    }
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev! > 0 ? prev! - 1 : GYM_PHOTOS.length - 1));
    }
  };

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev! < GYM_PHOTOS.length - 1 ? prev! + 1 : 0));
    }
  };

  const currentPhoto: GymPhoto | null = activePhotoIndex !== null ? GYM_PHOTOS[activePhotoIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0D0D0D] relative overflow-hidden border-t border-[#1C1C1C]">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#FF5722]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header in Bengali */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF5722]/30 text-[#FF7043] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>বাস্তব জিম পরিবেশ ও সরঞ্জামের ছবি</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight uppercase">
            হট জিম <span className="fire-gradient-text">ফটো গ্যালারি</span>
          </h2>

          <p className="text-base text-[#A3A3A3] leading-relaxed">
            সুরেশ প্লাজার ৪র্থ তলায় আমাদের সম্পূর্ণ শীতাতপ নিয়ন্ত্রিত আধুনিক ফিটনেস এরিয়া, প্লেট-লোডেড মেশিন, কার্ডিও বাইক ও কেবল ক্রসওভার স্টেশনের বাস্তব ছবিসমূহ।
          </p>

          {/* Category Filter Pills in Bengali */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'fire-gradient-bg text-white shadow-md shadow-[#FF5722]/25'
                    : 'bg-[#181818] hover:bg-[#222222] text-[#D4D4D8] border border-[#262626]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo.id)}
              className={`group relative rounded-2xl overflow-hidden bg-[#141414] border border-[#262626] hover:border-[#FF5722]/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[#FF5722]/15 flex flex-col justify-between ${
                idx === 0 && selectedCategory === 'all' ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1A1A1A]">
                <img
                  src={photo.src}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-[11px] font-bold text-[#FFC107] border border-white/10">
                    {photo.tag}
                  </span>
                </div>

                {/* Hover View Button */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-lg bg-[#FF5722] text-white flex items-center justify-center shadow-lg">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 space-y-1">
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-[#FF7043] transition-colors line-clamp-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-[#D4D4D8] line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Bar */}
              <div className="p-3 bg-[#111111] border-t border-[#1F1F1F] flex items-center justify-between text-xs text-[#737373]">
                <div className="flex items-center gap-1.5 text-[#A3A3A3]">
                  <MapPin className="w-3.5 h-3.5 text-[#FF7043]" />
                  <span>সুরেশ প্লাজা (৪র্থ তলা)</span>
                </div>
                <span className="text-[#FFC107] font-semibold flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>বড় করে দেখুন</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner below gallery */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#1A1412] to-[#121212] border border-[#2E2E2E] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h4 className="text-base font-bold text-white">সরাসরি জিম ফ্লোর ঘুরে দেখতে চান?</h4>
            <p className="text-xs text-[#A3A3A3] mt-0.5">
              ১৪৪ সুরেশ প্লাজা (৪র্থ তলা), নারায়ণগঞ্জ ক্লাব ও পলি ক্লিনিকের সংলগ্ন। সকাল ও বিকালে যেকোনো শিফটে আসুন।
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:${GYM_INFO.phoneRaw}`}
              className="fire-gradient-bg hover:brightness-110 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md shadow-[#FF5722]/20"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>কল: {GYM_INFO.phone}</span>
            </a>
            <a
              href={`tel:${GYM_INFO.phoneSecondaryRaw}`}
              className="bg-[#1C1C1C] hover:bg-[#262626] border border-[#FFC107]/40 text-[#FFC107] font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{GYM_INFO.phoneSecondary}</span>
            </a>
          </div>
        </div>

      </div>

      {/* High Resolution Lightbox Modal */}
      {currentPhoto && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-[#121212] border border-[#2E2E2E] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
          >
            {/* Lightbox Header */}
            <div className="p-4 border-b border-[#222222] flex items-center justify-between bg-[#181818]">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md fire-gradient-bg text-white text-[11px] font-extrabold uppercase">
                  {currentPhoto.tag}
                </span>
                <h3 className="text-base font-bold text-white truncate max-w-md">
                  {currentPhoto.title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="w-8 h-8 rounded-lg bg-[#242424] hover:bg-[#333333] text-[#D4D4D8] hover:text-white flex items-center justify-center transition-colors"
                title="বন্ধ করুন"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Image Preview with Arrows */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[320px] max-h-[65vh] overflow-hidden">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[65vh] object-contain"
              />

              {/* Prev / Next Controls */}
              <button
                onClick={showPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#FF5722] text-white border border-white/20 flex items-center justify-center transition-colors backdrop-blur-sm shadow-xl"
                title="পূর্ববর্তী ছবি"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={showNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#FF5722] text-white border border-white/20 flex items-center justify-center transition-colors backdrop-blur-sm shadow-xl"
                title="পরবর্তী ছবি"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Details Footer */}
            <div className="p-4 sm:p-5 bg-[#141414] border-t border-[#222222] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs text-[#D4D4D8] leading-relaxed max-w-2xl">
                  {currentPhoto.caption}
                </p>
                <div className="text-[11px] text-[#737373]">
                  ছবি {activePhotoIndex! + 1} / {GYM_PHOTOS.length} • হট জিম, ১৪৪ সুরেশ প্লাজা (৪র্থ তলা), নারায়ণগঞ্জ
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="flex-1 sm:flex-none fire-gradient-bg text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>কল: {GYM_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="p-3 bg-[#0A0A0A] border-t border-[#1C1C1C] flex items-center justify-center gap-2 overflow-x-auto">
              {GYM_PHOTOS.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`w-14 h-10 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    activePhotoIndex === idx
                      ? 'border-[#FF5722] scale-105 shadow-md shadow-[#FF5722]/30'
                      : 'border-[#262626] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={p.src}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
