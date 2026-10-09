import React from 'react';
import { Baby, BookOpen, GraduationCap, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data/schoolData';

export const ProgramsSection = ({ onScrollToForm, onSelectGrade }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Baby': return <Baby className="w-5 h-5 text-amber-600" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-blue-600" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-indigo-600" />;
      case 'Award': return <Award className="w-5 h-5 text-emerald-600" />;
      default: return <GraduationCap className="w-5 h-5 text-blue-600" />;
    }
  };

  const handleEnquireWing = (progId) => {
    let targetGrade = 'Class 1st to 5th (Primary)';
    if (progId === 'prog-1') targetGrade = 'Nursery / Playgroup';
    if (progId === 'prog-2') targetGrade = 'Class 1st to 5th (Primary)';
    if (progId === 'prog-3') targetGrade = 'Class 6th to 8th (Middle)';
    if (progId === 'prog-4') targetGrade = 'Class 11th / 12th (Science - PCM/PCB)';

    if (onSelectGrade) {
      onSelectGrade(targetGrade);
    }
    onScrollToForm();
  };

  return (
    <section id="programs" className="scroll-mt-16 py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-emerald-700 tracking-wider uppercase mb-2">
            Curriculum & Pedagogy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Progressive Academic Wings from Foundation to Senior Secondary
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Every developmental phase is backed by standardized CBSE learning frameworks, experiential labs, low student-teacher ratios, and personalized mentoring.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACADEMIC_PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getIcon(prog.iconName)}
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
                  <span>{prog.grades}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-700 font-semibold">{prog.ageGroup}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-display mb-2 group-hover:text-blue-700 transition-colors">
                  {prog.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {prog.description}
                </p>

                <div className="bg-white/80 p-2.5 rounded-xl border border-slate-200 mb-4 text-[11px] space-y-1">
                  <div className="text-slate-500">Framework: <strong className="text-slate-800">{prog.curriculum}</strong></div>
                  <div className="text-slate-500">Class Ratio: <strong className="text-slate-800 font-mono">{prog.ratio}</strong></div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Key Highlights:</div>
                  {prog.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4">
                <button
                  onClick={() => handleEnquireWing(prog.id)}
                  className="w-full bg-slate-900 hover:bg-blue-700 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Select & Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
