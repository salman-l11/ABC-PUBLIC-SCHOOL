import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, User, Phone, Mail, GraduationCap, MapPin, Clock, MessageSquare, Inbox, AlertCircle } from 'lucide-react';

export const EnquiryFormSection = ({ onAddEnquiry, onOpenAdmin, prefilledGrade, prefilledNote }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    gradeSeeking: 'Class 1st to 5th (Primary)',
    phone: '',
    email: '',
    address: '',
    preferredTime: 'Morning (9 AM - 12 PM)',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const gradeOptions = [
    'Nursery / Playgroup',
    'LKG / UKG',
    'Class 1st to 5th (Primary)',
    'Class 6th to 8th (Middle)',
    'Class 9th & 10th (Secondary)',
    'Class 11th / 12th (Science - PCM/PCB)',
    'Class 11th / 12th (Commerce)',
    'Class 11th / 12th (Humanities / Arts)'
  ];

  // React to prefilled inputs from Programs
  useEffect(() => {
    if (prefilledGrade) {
      setFormData(prev => ({
        ...prev,
        gradeSeeking: prefilledGrade
      }));
    }
  }, [prefilledGrade]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.parentName.trim() || !formData.phone.trim() || !formData.studentName.trim()) {
      setErrorMsg('Please enter Parent Name, Student Name, and Mobile Number.');
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number for callback.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success && result.data) {
        setSubmittedEnquiry(result.data);
        onAddEnquiry(result.data);
      } else {
        // Fallback local object
        const localEnquiry = {
          id: `ENQ-${Math.floor(1000 + Math.random() * 9000)}`,
          parentName: formData.parentName,
          studentName: formData.studentName,
          gradeSeeking: formData.gradeSeeking,
          phone: cleanPhone,
          email: formData.email || 'N/A',
          address: formData.address || 'N/A',
          preferredTime: formData.preferredTime,
          message: formData.message || '',
          createdAt: new Date().toISOString(),
          status: 'new'
        };
        setSubmittedEnquiry(localEnquiry);
        onAddEnquiry(localEnquiry);
      }

      // Reset form
      setFormData({
        parentName: '',
        studentName: '',
        gradeSeeking: 'Class 1st to 5th (Primary)',
        phone: '',
        email: '',
        address: '',
        preferredTime: 'Morning (9 AM - 12 PM)',
        message: ''
      });
    } catch (err) {
      const localEnquiry = {
        id: `ENQ-${Math.floor(1000 + Math.random() * 9000)}`,
        parentName: formData.parentName,
        studentName: formData.studentName,
        gradeSeeking: formData.gradeSeeking,
        phone: cleanPhone,
        email: formData.email || 'N/A',
        address: formData.address || 'N/A',
        preferredTime: formData.preferredTime,
        message: formData.message || '',
        createdAt: new Date().toISOString(),
        status: 'new'
      };
      setSubmittedEnquiry(localEnquiry);
      onAddEnquiry(localEnquiry);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div id="enquiry-form" className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-amber-400 tracking-wider uppercase mb-2">
            Admissions Desk 2026-27
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Online Admission & Seat Enquiry Form
          </h2>
          <p className="text-slate-300 mt-2.5 text-sm sm:text-base leading-relaxed text-balance">
            Submit your child's details below to register your seat interest. Our admissions counselor will connect with you within 24 business hours.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          
          {submittedEnquiry ? (
            /* Success Feedback */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-3xl">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="bg-emerald-950 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                  Enquiry Successfully Registered
                </span>
                <h3 className="text-2xl font-bold text-white mt-3 font-display">
                  Thank You! We Have Received Your Admission Request.
                </h3>
                <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
                  Your reference ID is <strong className="text-amber-400 font-mono text-base">{submittedEnquiry.id}</strong>.
                  Our counselors will call you during your preferred time window.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 max-w-md mx-auto text-left text-xs space-y-2">
                <p className="text-amber-400 font-bold border-b border-slate-800 pb-1">Submission Summary</p>
                <div className="flex justify-between"><span className="text-slate-400">Student:</span> <span className="font-semibold text-white">{submittedEnquiry.studentName}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Class:</span> <span className="font-semibold text-amber-300">{submittedEnquiry.gradeSeeking}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Parent / Phone:</span> <span className="font-semibold text-white">{submittedEnquiry.parentName} · {submittedEnquiry.phone}</span></div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
               

                <button
                  onClick={() => setSubmittedEnquiry(null)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-2.5 px-4 rounded-xl transition-all text-xs cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMsg && (
                <div className="bg-rose-950/80 border border-rose-500/60 text-rose-200 px-4 py-3 rounded-xl text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Parent Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra Verma"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                {/* Student Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Verma"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                {/* Class Seeking */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                    Class Seeking Admission (2026-27) *
                  </label>
                  <select
                    value={formData.gradeSeeking}
                    onChange={(e) => setFormData({ ...formData, gradeSeeking: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                  >
                    {gradeOptions.map((opt, i) => (
                      <option key={i} value={opt} className="bg-slate-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mobile Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    10-Digit Mobile / Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={14}
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors font-mono"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                {/* Area / Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    Residential Sector / City Area
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sector 15, New Delhi"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

              </div>

              {/* Preferred Call Time */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Preferred Counselor Call Window
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['Morning (9 AM - 12 PM)', 'Afternoon (12 PM - 3 PM)', 'Evening (3 PM - 6 PM)'].map((slot, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setFormData({ ...formData, preferredTime: slot })}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all text-center cursor-pointer ${
                        formData.preferredTime === slot
                          ? 'bg-amber-400 text-slate-950 font-bold border-amber-400'
                          : 'bg-slate-950 text-slate-300 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      {slot.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specific Remarks / Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                  Specific Questions / Transport Route / Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Inquire about bus stop routes, sports quota, documents, fee installments..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Registering Admission Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SUBMIT ADMISSION ENQUIRY</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
