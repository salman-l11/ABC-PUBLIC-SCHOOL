import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { CAMPUS_GALLERY } from '../data/schoolData';

export const CampusGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Campus', 'Student Life', 'Academics & Labs', 'Sports', 'Events & Arts'];

  const filteredPhotos = activeFilter === 'All'
    ? CAMPUS_GALLERY
    : CAMPUS_GALLERY.filter(item => item.category === activeFilter);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  return (
    <section id="gallery" className="scroll-mt-20 py-16 sm:py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center font-bold shadow-sm transition-transform hover:scale-105 hover:rotate-2">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
                School Photo Gallery
              </h2>
            </div>
          </div>

          {/* Interactive Filter Tabs with Hover States */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-xs overflow-x-auto shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-95 ${
                  activeFilter === cat
                    ? 'bg-slate-950 text-amber-400 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pure Photos Grid with Rich Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((item, idx) => (
            <div
              key={item.id || idx}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-900 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 hover:border-amber-400/60 border border-slate-200 transition-all duration-300 cursor-pointer"
            >
              {/* Pure School Image with Smooth Zoom on Hover */}
              <img
                src={item.image}
                alt="ABC Public School Photo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Dark subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Floating Action Pill on Hover */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="bg-slate-950/85 text-white backdrop-blur-md px-4 py-2 rounded-full border border-amber-400/40 flex items-center gap-2 text-xs font-semibold shadow-xl opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Click to Expand</span>
                </div>
              </div>

              {/* Category Pill Tag (top left) */}
              <div className="absolute top-3 left-3 bg-slate-950/70 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-amber-400/30 opacity-90 group-hover:opacity-100 transition-opacity">
                {item.category}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full-Screen Photo Viewer */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          {/* Close button with Hover Animation */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 hover:rotate-90 p-2.5 rounded-full border border-slate-700 cursor-pointer transition-all duration-200 z-20"
            title="Close image"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button with Hover Animation */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white bg-slate-900/80 hover:bg-slate-800 hover:scale-110 active:scale-95 p-3 rounded-full border border-slate-700 cursor-pointer transition-all duration-200 z-20"
            title="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button with Hover Animation */}
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white bg-slate-900/80 hover:bg-slate-800 hover:scale-110 active:scale-95 p-3 rounded-full border border-slate-700 cursor-pointer transition-all duration-200 z-20"
            title="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl max-h-[85vh] w-full rounded-2xl overflow-hidden shadow-2xl relative flex items-center justify-center border border-slate-800"
          >
            <img
              src={filteredPhotos[lightboxIndex].image}
              alt="School Photograph"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}

    </section>
  );
};
