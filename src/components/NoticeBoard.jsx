import React, { useState } from 'react';
import { Bell, Calendar, ChevronRight, FileText, Star, HelpCircle, Download, Search, CheckCircle2, Quote } from 'lucide-react';
import { NOTICES, TESTIMONIALS } from '../data/schoolData';

export const NoticeBoard = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [noticeFilter, setNoticeFilter] = useState('All');
  const [faqSearch, setFaqSearch] = useState('');
  const [downloadNoticeToast, setDownloadNoticeToast] = useState(null);

  const categories = ['All', 'Admission', 'Academics', 'Event', 'Notice'];

  const filteredNotices = noticeFilter === 'All'
    ? NOTICES
    : NOTICES.filter(n => n.category.toLowerCase() === noticeFilter.toLowerCase());

  const faqs = [
    {
      q: 'What is the procedure for online / offline admission enquiry?',
      a: 'You can fill out the online admission enquiry form on this website or visit our school office between 8:00 AM and 3:00 PM. Our admissions desk connects within 24 hours to schedule a campus tour.'
    },
    {
      q: 'What documents are required at the time of admission?',
      a: 'Required documents include: Student Birth Certificate, 4 passport size photographs, Aadhaar card copy, Transfer Certificate (TC) from the previous school, and parent address proof.'
    },
    {
      q: 'Does the school provide dedicated bus transport across Delhi NCR?',
      a: 'Yes, we operate 22 GPS-enabled AC buses with speed limiters, CCTV cameras, and female conductors covering all prime residential sectors and colonies.'
    },
    {
      q: 'Are merit or sports scholarships offered at ABC Public School?',
      a: 'Yes, we provide up to 30% tuition fee concessions for students who have secured >90% marks in previous examinations or hold state/national sports awards.'
    },
    {
      q: 'What is the student-to-teacher ratio in classes?',
      a: 'In Pre-Primary it is 1:15, in Primary it is 1:20, and in Middle & Senior Secondary it is capped at 1:25 to ensure rigorous personal attention.'
    }
  ];

  const filteredFaqs = faqs.filter(f =>
    f.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
    f.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const handleDownloadNotice = (notice) => {
    setDownloadNoticeToast(`Official circular "${notice.title.slice(0, 32)}..." downloaded.`);
    setTimeout(() => setDownloadNoticeToast(null), 3500);
  };

  return (
    <section id="notices" className="scroll-mt-16 py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Toast for Download Notice */}
        {downloadNoticeToast && (
          <div className="fixed bottom-24 left-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl border border-amber-400 text-xs shadow-2xl flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{downloadNoticeToast}</span>
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Notice Board & Circulars */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-display">Circulars & Notice Board</h3>
                  <p className="text-xs text-slate-500">Official CBSE announcements & schedules</p>
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1 overflow-x-auto p-1 bg-slate-100 rounded-lg text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setNoticeFilter(cat)}
                    className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                      noticeFilter === cat
                        ? 'bg-white text-slate-900 shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Notices List */}
            <div className="space-y-3">
              {filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  className={`p-4 rounded-xl border transition-all ${
                    notice.isImportant
                      ? 'bg-amber-50/50 border-amber-300'
                      : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5 text-xs">
                    <span className="font-semibold text-blue-700">
                      {notice.category}
                    </span>
                    <span className="text-slate-400 font-medium flex items-center gap-1 text-[11px]">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {notice.date}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900">
                    {notice.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {notice.description}
                  </p>

                  <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">PDF Circular · {notice.fileSize || '500 KB'}</span>
                    <button
                      onClick={() => handleDownloadNotice(notice)}
                      className="text-blue-700 hover:text-blue-900 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Circular</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials Proof Section */}
            <div className="pt-6 border-t border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Quote className="w-4 h-4 text-amber-500" />
                Verified Parent Testimonials & Outcomes
              </h4>

              <div className="grid sm:grid-cols-2 gap-4">
                {TESTIMONIALS.map((test) => (
                  <div key={test.id} className="bg-slate-50/80 p-4 rounded-xl border border-slate-200 text-xs flex flex-col justify-between">
                    <div>
                      <div className="flex text-amber-400 mb-2">
                        {[...Array(test.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-slate-700 italic leading-relaxed">"{test.content}"</p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200/60">
                      <div className="font-bold text-slate-900">{test.parentName}</div>
                      <div className="text-[11px] text-slate-500">{test.studentClass}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Admission FAQs with search */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display">Admission FAQs</h3>
                <p className="text-xs text-slate-500">Quick answers to frequent parent queries</p>
              </div>
            </div>

            {/* FAQ Search Filter */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search FAQs (e.g. fees, bus, documents, nursery)..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:bg-white focus:border-blue-600 transition-colors"
              />
            </div>

            {/* FAQ Accordion List */}
            <div className="space-y-2.5">
              {filteredFaqs.length === 0 ? (
                <div className="text-xs text-slate-500 text-center py-6">
                  No matching questions found. Try searching another keyword.
                </div>
              ) : (
                filteredFaqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden text-xs"
                  >
                    <button
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full text-left p-3.5 bg-slate-50/70 font-semibold text-slate-900 flex items-center justify-between hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      <span className="pr-2">{faq.q}</span>
                      <span className="text-slate-400 font-mono text-sm shrink-0">
                        {activeFaq === idx ? '−' : '+'}
                      </span>
                    </button>
                    {activeFaq === idx && (
                      <div className="p-3.5 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-blue-950 space-y-1">
              <p className="font-bold">Need Personal Guidance?</p>
              <p className="text-slate-600">
                Call our admissions helpdesk at <strong className="text-slate-900">+91 98765 43210</strong> or submit the enquiry form below.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
