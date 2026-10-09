import React from 'react';
import { Phone, Mail, MapPin, Clock, Award, ArrowUp, Lock, Camera } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const Footer = ({ onScrollToForm, onOpenEnquiries }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: School Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-base border border-amber-400/40">
                APS
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">{SCHOOL_INFO.name}</h3>
                <p className="text-xs text-amber-400 font-medium">CBSE Senior Secondary Affiliated</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {SCHOOL_INFO.tagline}. Affiliation No. 2130891. Offering comprehensive preschool through Grade 12th education in science, commerce, and humanities.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiries}
                className="bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-800 flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Admissions Desk CRM Login</span>
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm font-display mb-4">
              Explore Campus
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">Institutional Legacy & Leadership</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">Curriculum & Academic Wings</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">Laboratories & Sports Complex</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 font-semibold transition-colors flex items-center gap-1.5">
                  <Camera className="w-3 h-3 text-amber-400" />
                  <span>Campus Photo Gallery</span>
                </a>
              </li>
              <li>
                <a href="#admissions-process" className="hover:text-white transition-colors">4-Step Admission Roadmap</a>
              </li>
              <li>
                <a href="#notices" className="hover:text-white transition-colors">Circulars, Notices & FAQs</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Campus Desk */}
          <div>
            <h4 className="text-white font-bold text-sm font-display mb-4">
              Contact & Helpdesk
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.phonePrimary} · {SCHOOL_INFO.phoneSecondary}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{SCHOOL_INFO.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.officeHours}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Admissions Notice & Direct Action */}
          <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800/90 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
              <Award className="w-4 h-4" />
              <span>Admissions 2026-27 Active</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Early registrations are currently open for Nursery, Grade 1st, 6th, and Senior Secondary Streams.
            </p>
            <button
              onClick={onScrollToForm}
              className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm cursor-pointer"
            >
              Fill Online Admission Form
            </button>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} {SCHOOL_INFO.name}. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>CBSE Affiliation Code: 2130891</span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
