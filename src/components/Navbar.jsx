import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const Navbar = ({
  onOpenEnquiries,
  enquiriesCount,
  onScrollToForm
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['contact', 'notices', 'gallery', 'facilities', 'programs', 'about'];
      const scrollPos = window.scrollY + 140;
      
      if (window.scrollY < 200) {
        setActiveSection('home');
        return;
      }

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHome = () => {
    setMobileMenuOpen(false);
    setActiveSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home', action: scrollToHome },
    { id: 'about', label: 'About', action: () => scrollToSection('about') },
    { id: 'programs', label: 'Academics', action: () => scrollToSection('programs') },
    { id: 'facilities', label: 'Facilities', action: () => scrollToSection('facilities') },
    { id: 'gallery', label: 'Gallery', action: () => scrollToSection('gallery') },
    { id: 'notices', label: 'Notices', action: () => scrollToSection('notices') },
    { id: 'contact', label: 'Contact', action: () => scrollToSection('contact') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-40 bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
      isScrolled ? 'py-2.5 border-slate-200 shadow-md' : 'py-3.5 border-slate-100 shadow-xs'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Wordmark with Hover Shimmer */}
        <button
          onClick={scrollToHome}
          className="text-left group cursor-pointer inline-flex items-center gap-3 focus:outline-none transition-transform hover:scale-102"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center font-bold text-base shadow-sm border border-amber-400/40 group-hover:bg-slate-900 group-hover:rotate-2 group-hover:shadow-amber-400/20 transition-all duration-300">
            APS
          </div>
          <div>
            <span className="font-display font-black text-slate-950 text-lg sm:text-xl tracking-tight leading-tight block group-hover:text-blue-700 transition-colors">
              {SCHOOL_INFO.name}
            </span>
          </div>
        </button>

        {/* Clean Nav Links with Animated Underline on Hover */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={link.action}
                className={`relative py-1.5 transition-all duration-200 cursor-pointer text-sm font-semibold ${
                  isActive
                    ? 'text-blue-700 font-bold'
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                <span>{link.label}</span>
                {/* Animated bottom bar */}
                <span
                  className={`absolute bottom-0 left-0 h-[2.5px] rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-full bg-blue-600'
                      : 'w-0 bg-blue-500 hover:w-full'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Primary Action Button with Hover Elevation */}
        <div className="flex items-center gap-3">
          <button
            onClick={onScrollToForm}
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Drawer with Hover States */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-1.5 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={link.action}
                className={`block w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-bold'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600 hover:translate-x-1'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onScrollToForm(); }}
              className="w-full bg-amber-400 hover:bg-amber-300 active:scale-98 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-center text-sm shadow-sm transition-all"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
