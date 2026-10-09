import React from 'react';
import { ArrowRight, CheckCircle2, FileText, Calendar, Clock, MapPin } from 'lucide-react';
import { ADMISSION_STEPS, SCHOOL_INFO } from '../data/schoolData';

export const AdmissionProcess = ({ onScrollToForm }) => {
  return (
    <section id="admissions-process" className="scroll-mt-16 py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-amber-700 tracking-wider uppercase mb-2">
            Admissions Roadmap 2026-27
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Simple, Transparent 4-Step Admission Journey
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            We ensure an empathetic, structured onboarding process for parents and children. No stress, clear milestones.
          </p>
        </div>

        {/* 4 Steps Stepper Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ADMISSION_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-black text-2xl text-blue-700 tabular-nums">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 font-display mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-semibold text-slate-500">
                Phase {idx + 1} of 4
              </div>
            </div>
          ))}
        </div>

        {/* Essential Documents & Helpdesk Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Document Checklist for Admission
            </span>
            <h4 className="text-xl font-bold font-display text-white">
              Documents to keep ready during the campus interaction
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-300 pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Birth Certificate (Municipal/Govt)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Transfer Certificate (TC) from Previous School
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Report Card & Marksheet (Last 2 Years)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                4 Passport Size Photographs & Aadhaar Card
              </span>
            </div>
          </div>

          <button
            onClick={onScrollToForm}
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap shadow-md shrink-0 flex items-center gap-2"
          >
            <span>Start Online Admission Form</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
