import React, { useState } from 'react';
import { Monitor, FlaskConical, Trophy, Bus, Library, ShieldCheck, X, CheckCircle, Maximize2 } from 'lucide-react';
import { FACILITIES } from '../data/schoolData';

export const FacilitiesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalFacility, setActiveModalFacility] = useState(null);

  const categories = ['All', 'Academics', 'Innovation', 'Sports', 'Safety'];

  const filteredFacilities = selectedCategory === 'All'
    ? FACILITIES
    : FACILITIES.filter(f => f.category === selectedCategory);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Monitor': return <Monitor className="w-4 h-4 text-blue-400" />;
      case 'FlaskConical': return <FlaskConical className="w-4 h-4 text-purple-400" />;
      case 'Trophy': return <Trophy className="w-4 h-4 text-amber-400" />;
      case 'Bus': return <Bus className="w-4 h-4 text-emerald-400" />;
      case 'Library': return <Library className="w-4 h-4 text-indigo-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-rose-400" />;
      default: return <Monitor className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="facilities" className="scroll-mt-16 py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-amber-400 tracking-wider uppercase mb-2">
              Campus Infrastructure & Labs
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
              World-Class Environments Built for Discovery & Growth
            </h2>
            <p className="text-slate-400 mt-3 text-sm sm:text-base leading-relaxed">
              From 4K interactive digital touch boards to Olympic-standard outdoor sports fields, our infrastructure fosters both cerebral rigor and physical vitality.
            </p>
          </div>

          {/* Interactive Category Filter Pills (Functional Buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-800/90 rounded-xl border border-slate-700 overflow-x-auto shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              onClick={() => setActiveModalFacility(fac)}
              className="bg-slate-800/70 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-slate-500 shadow-lg group transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                  
                  {/* Category label */}
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-md border border-amber-400/20">
                    {fac.category}
                  </span>

                  {/* Expand view indicator */}
                  <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-900/60 backdrop-blur-md text-slate-300 group-hover:text-amber-400 transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="p-1.5 rounded-lg bg-slate-700/80 border border-slate-600 shrink-0">
                      {getIcon(fac.iconName)}
                    </div>
                    <h3 className="text-base font-bold text-white font-display group-hover:text-amber-300 transition-colors">
                      {fac.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {fac.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-700/70">
                    {fac.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <CheckCircle className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-5 pt-2 text-[11px] font-semibold text-amber-400 flex items-center gap-1 group-hover:underline">
                <span>View Full Details & Highlights</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Facility Lightbox Modal */}
      {activeModalFacility && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative text-white animate-fadeIn">
            <button
              onClick={() => setActiveModalFacility(null)}
              className="absolute top-4 right-4 z-10 bg-slate-950/80 hover:bg-slate-950 text-slate-400 hover:text-white p-2 rounded-full cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 sm:h-72 w-full bg-slate-950">
              <img
                src={activeModalFacility.image}
                alt={activeModalFacility.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-slate-900/80 px-2 py-0.5 rounded border border-amber-400/30">
                  {activeModalFacility.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display mt-1 text-white">
                  {activeModalFacility.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeModalFacility.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  Technical Specifications & Amenities:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  {activeModalFacility.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-800/80 p-2 rounded-lg border border-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setActiveModalFacility(null)}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs px-5 py-2.5 rounded-xl cursor-pointer transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
