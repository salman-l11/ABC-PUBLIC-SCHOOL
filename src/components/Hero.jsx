import React from 'react';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { SCHOOL_INFO, IMAGES } from '../data/schoolData';

export const Hero = ({ onScrollToForm }) => {
  const scrollToAbout = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPrograms = () => {
    const progEl = document.getElementById('programs');
    if (progEl) {
      progEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden bg-slate-950">
      
      {/* Background Campus Image with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroCampus}
          alt="ABC Public School Campus Architecture"
          className="w-full h-full object-cover object-center transform scale-102"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Graceful fallback to rich gradient background
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Measured dark gradient overlay ensuring WCAG AA legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60 backdrop-blur-[1px]" />
      </div>

      {/* Main Centered Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center py-20 sm:py-28">
        
        {/* Unboxed Metadata Tagline with clean typographic dot separator */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-amber-300 mb-6 bg-slate-900/80 px-4 py-1.5 rounded-full border border-amber-400/30 backdrop-blur-md">
          <span>Admissions Open for Session 2026-27</span>
          <span aria-hidden="true">·</span>
          <span>CBSE Affiliated Senior Secondary</span>
        </div>

        {/* Hero Headline with text-wrap: balance */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[1.05] drop-shadow-md max-w-4xl text-balance">
          {SCHOOL_INFO.name}
        </h1>

        {/* Hero Subtitle */}
        <p className="text-slate-200 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-normal mt-5 text-balance">
          Nurturing intellectual mastery, creative curiosity, and ethical leadership in a world-class educational ecosystem.
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
          <button
            onClick={onScrollToForm}
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-7 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm sm:text-base cursor-pointer transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Apply for Admission</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={scrollToPrograms}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base backdrop-blur-md transition-all cursor-pointer transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Explore Academic Wings</span>
          </button>
        </div>

        {/* Quantitative Rigor Stats Strip */}
        <div className="pt-12 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t border-white/10 mt-10">
          {SCHOOL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="bg-slate-900/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-amber-400 font-display tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
