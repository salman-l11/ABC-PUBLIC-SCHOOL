import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { CampusGallery } from './components/CampusGallery';
import { AdmissionProcess } from './components/AdmissionProcess';
import { NoticeBoard } from './components/NoticeBoard';
import { EnquiryFormSection } from './components/EnquiryFormSection';
import { EnquiriesAdminModal } from './components/EnquiriesAdminModal';
import { Footer } from './components/Footer';
import { INITIAL_ENQUIRIES, SCHOOL_INFO } from './data/schoolData';
import { MessageCircle, Lock, Sparkles } from 'lucide-react';

export default function App() {
  const [enquiries, setEnquiries] = useState(() => {
    const saved = localStorage.getItem('dpa_school_enquiries');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_ENQUIRIES;
      }
    }
    return INITIAL_ENQUIRIES;
  });

  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [prefilledGrade, setPrefilledGrade] = useState('');

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem('dpa_school_enquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  // Fetch from server on load if available
  useEffect(() => {
    fetch('/api/enquiries')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setEnquiries(data.data);
        }
      })
      .catch(() => {
        // Fallback to local storage state
      });
  }, []);

  const handleAddEnquiry = (newEnquiry) => {
    setEnquiries((prev) => [newEnquiry, ...prev]);
    showToast(`New Admission Enquiry Received from ${newEnquiry.parentName}!`);
  };

  const handleUpdateStatus = async (id, newStatus) => {
    setEnquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );

    try {
      await fetch(`/api/enquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
    } catch (e) {
      // Offline fallback
    }
  };

  const handleUpdateNotes = async (id, notes) => {
    setEnquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, notes } : item))
    );

    try {
      await fetch(`/api/enquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes }),
      });
    } catch (e) {
      // Offline fallback
    }
  };

  const handleDeleteEnquiry = async (id) => {
    if (window.confirm('Are you sure you want to delete this enquiry record?')) {
      setEnquiries((prev) => prev.filter((item) => item.id !== id));
      try {
        await fetch(`/api/enquiries/${id}`, { method: 'DELETE' });
      } catch (e) {
        // Offline fallback
      }
    }
  };

  const handleAddDemoEnquiry = () => {
    const demoCandidates = [
      { p: 'Sanjay Sharma', s: 'Aarush Sharma', g: 'Class 1st to 5th (Primary)', loc: 'Sector 15, New Delhi' },
      { p: 'Pooja Agarwal', s: 'Riddhi Agarwal', g: 'Nursery / Playgroup', loc: 'Mayur Vihar, New Delhi' },
      { p: 'Vikram Singh', s: 'Karan Singh', g: 'Class 11th / 12th (Science - PCM/PCB)', loc: 'Vasant Kunj, New Delhi' },
      { p: 'Amitabh Bannerjee', s: 'Tanya Bannerjee', g: 'Class 6th to 8th (Middle)', loc: 'South Extension, New Delhi' }
    ];
    const pick = demoCandidates[Math.floor(Math.random() * demoCandidates.length)];

    const demoEnquiry = {
      id: `ENQ-${Math.floor(1000 + Math.random() * 9000)}`,
      parentName: pick.p,
      studentName: pick.s,
      gradeSeeking: pick.g,
      phone: `98${Math.floor(10000000 + Math.random() * 90000000)}`,
      email: `${pick.p.toLowerCase().replace(/\s+/g, '.')}@gmail.com`,
      address: pick.loc,
      preferredTime: 'Morning (9 AM - 12 PM)',
      message: 'Looking for admission for academic year 2026-27. Need details on bus routes and lab curriculum.',
      createdAt: new Date().toISOString(),
      status: 'new',
      notes: ''
    };

    handleAddEnquiry(demoEnquiry);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const scrollToForm = () => {
    const el = document.getElementById('enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectGradeFromWing = (gradeName) => {
    setPrefilledGrade(gradeName);
  };

  const newEnquiriesCount = enquiries.filter((e) => e.status === 'new').length;

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 right-4 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-amber-400/80 flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="text-xs font-semibold">{toastMessage}</span>
          <button
            onClick={() => setAdminModalOpen(true)}
            className="bg-amber-400 text-slate-950 font-bold text-xs px-2.5 py-1 rounded-lg ml-2 hover:bg-amber-300 cursor-pointer"
          >
            Review
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        onOpenEnquiries={() => setAdminModalOpen(true)}
        enquiriesCount={enquiries.length}
        onScrollToForm={scrollToForm}
      />

      {/* Main Content Sections with top offset for fixed navbar */}
      <main className="flex-1 w-full pt-[66px] sm:pt-[70px]">
        
        {/* 1. Hero Banner */}
        <Hero
          onScrollToForm={scrollToForm}
        />

        {/* 2. Institutional Heritage & Leadership */}
        <AboutSection />

        {/* 3. Academic Wings & Programs */}
        <ProgramsSection
          onScrollToForm={scrollToForm}
          onSelectGrade={handleSelectGradeFromWing}
        />

        {/* 4. Campus Infrastructure & Research Labs */}
        <FacilitiesSection />

        {/* 5. School Life Photo Gallery (High-Res Images) */}
        <CampusGallery />

        {/* 6. Admission Roadmap & Document Verification */}
        <AdmissionProcess
          onScrollToForm={scrollToForm}
        />

        {/* 7. Circulars, Notices, FAQs & Testimonials */}
        <NoticeBoard />

        {/* 8. Online Admission Enquiry Form */}
        <EnquiryFormSection
          onAddEnquiry={handleAddEnquiry}
          onOpenAdmin={() => setAdminModalOpen(true)}
          prefilledGrade={prefilledGrade}
        />

      </main>

      {/* Footer */}
      <Footer
        onScrollToForm={scrollToForm}
        onOpenEnquiries={() => setAdminModalOpen(true)}
      />

      {/* Password Protected Enquiries CRM Modal */}
      <EnquiriesAdminModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        enquiries={enquiries}
        onUpdateStatus={handleUpdateStatus}
        onUpdateNotes={handleUpdateNotes}
        onDeleteEnquiry={handleDeleteEnquiry}
        onAddDemoEnquiry={handleAddDemoEnquiry}
      />

      {/* Floating Action Controls (Bottom Right) */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5">
        
        {/* Counselor Desk Trigger */}
        <button
          onClick={() => setAdminModalOpen(true)}
          className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-3.5 py-2 rounded-xl shadow-lg border border-slate-700 flex items-center gap-2 text-xs transition-all hover:scale-102 cursor-pointer"
          title="Access Counselor CRM Desk"
        >
          <Lock className="w-3.5 h-3.5 text-amber-400" />
          <span>Counselor Desk ({enquiries.length})</span>
          {newEnquiriesCount > 0 && (
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          )}
        </button>

        {/* WhatsApp Quick Helpline */}
        <a
          href={`https://wa.me/91${SCHOOL_INFO.phonePrimary.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello Admissions Desk, I would like to enquire about admission in ABC Public School for session 2026-27.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
          title="Instant WhatsApp Support"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

      </div>

    </div>
  );
}
