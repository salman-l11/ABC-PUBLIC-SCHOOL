import React from 'react';
import { BookOpen, Award, Heart, Shield, Users, CheckCircle } from 'lucide-react';
import { SCHOOL_INFO, FACULTY_LEADERS } from '../data/schoolData';

export const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-16 py-20 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-blue-700 tracking-wider uppercase mb-2">
            Institutional Legacy & Vision
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Nurturing Inquiring Minds & Resilient Character Since {SCHOOL_INFO.established}
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            At {SCHOOL_INFO.name}, we cultivate an environment where rigorous academics harmonize with character development, creative expression, and athletic discipline.
          </p>
        </div>

        {/* 2-Column: Principal Message + 4 Pillars Bento */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Principal's Desk Card */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-amber-700 tracking-wider uppercase mb-3">
                Principal's Address
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display leading-snug">
                "Education is not merely the accumulation of facts, but training the young mind to think critically and act empathetically."
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed my-5 border-l-2 border-amber-400 pl-4 italic">
                "We welcome every aspiring student to a vibrant campus culture where faculty mentorship, modern scientific inquiry, and ethical leadership prepare learners to excel in an evolving global landscape."
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-sm border border-amber-400/40 shrink-0">
                DR
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{SCHOOL_INFO.principalName}</h4>
                <p className="text-xs text-slate-500">{SCHOOL_INFO.principalQualification}</p>
              </div>
            </div>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Academic Rigor & Inquiry</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Standardized CBSE curriculum enhanced with diagnostic evaluations, remediation cells, and individualized scholastic pacing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Competitive Coaching Edge</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Built-in foundation mentoring for JEE, NEET, CUET, and National Olympiads integrated smoothly into senior school timetables.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Holistic Character & Co-Curriculars</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Active clubs in public speaking, robotics, fine arts, music, yoga, and model United Nations (MUN) to foster poise and confidence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Safe Campus & Care</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                120+ CCTV surveillance cameras, biometric access controls, female transit attendants, and an on-campus full-time infirmary nurse.
              </p>
            </div>

          </div>

        </div>

        {/* Academic Leadership / Faculty Spotlight */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Academic Deans & Wing Heads</h3>
              <p className="text-xs text-slate-500">Experienced leadership directing every developmental tier</p>
            </div>
            <span className="text-xs font-semibold text-slate-600 hidden sm:inline">
              100% Certified Senior Faculty
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FACULTY_LEADERS.map((mentor, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 font-bold flex items-center justify-center text-xs">
                      {mentor.name.split(' ').slice(-1)[0][0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{mentor.name}</h4>
                      <p className="text-xs text-blue-700 font-medium">{mentor.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {mentor.bio}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{mentor.qualification}</span>
                  <span className="font-semibold text-slate-700">{mentor.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
