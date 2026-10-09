import React, { useState } from 'react';
import { X, Search, Phone, Mail, MessageCircle, Calendar, Trash2, Download, CheckCircle, Clock, User, GraduationCap, ShieldAlert, Plus, Edit, FileSpreadsheet, Lock, KeyRound, LogOut, TrendingUp } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const EnquiriesAdminModal = ({
  isOpen,
  onClose,
  enquiries,
  onUpdateStatus,
  onUpdateNotes,
  onDeleteEnquiry,
  onAddDemoEnquiry
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [noteText, setNoteText] = useState('');

  if (!isOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError('');
    if (passwordInput === 'admin123' || passwordInput === '1234' || passwordInput.trim().toLowerCase() === 'admin') {
      setIsAuthenticated(true);
      setPasswordInput('');
    } else {
      setLoginError('Incorrect password! (Default: admin123)');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white text-slate-900 w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
          {/* Login Header */}
          <div className="bg-slate-900 text-white p-6 text-center relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 bg-amber-400 text-slate-950 rounded-xl flex items-center justify-center mx-auto mb-3 shadow font-bold">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold font-display">Admissions Desk Authentication</h2>
            <p className="text-xs text-slate-300 mt-1">
              Internal counselor and school administrator access only.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLoginSubmit} className="p-6 space-y-4">
            {loginError && (
              <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold p-3 rounded-xl flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                Admin Password
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter administrator password..."
                  className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white text-slate-900 font-semibold text-sm rounded-xl pl-10 pr-4 py-3 outline-none transition-all"
                  autoFocus
                />
              </div>
              <div className="text-[11px] text-slate-500 font-medium mt-2 flex items-center justify-between">
                <span>Default Demo Password:</span>
                <span className="font-mono font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">admin123</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold py-3 rounded-xl shadow transition-all cursor-pointer text-sm flex items-center justify-center gap-2"
              >
                <span>Unlock Admissions Dashboard</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Filtered list
  const filteredEnquiries = enquiries.filter((item) => {
    const matchesSearch =
      item.parentName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.studentName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone?.includes(searchTerm) ||
      item.gradeSeeking?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'new':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
            New Inquiry
          </span>
        );
      case 'contacted':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700">
            <Clock className="w-3.5 h-3.5" />
            In Follow-up
          </span>
        );
      case 'admitted':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
            <CheckCircle className="w-3.5 h-3.5" />
            Admitted Confirmed
          </span>
        );
      case 'closed':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            Closed / Archived
          </span>
        );
      default:
        return <span className="text-xs font-semibold text-slate-600">{status}</span>;
    }
  };

  const handleExportCSV = () => {
    if (enquiries.length === 0) return;

    const headers = ['Enquiry ID,Parent Name,Student Name,Grade Seeking,Phone,Email,Address,Status,Submitted At,Message,Notes'];
    const rows = enquiries.map(e => [
      `"${e.id}"`,
      `"${e.parentName}"`,
      `"${e.studentName}"`,
      `"${e.gradeSeeking}"`,
      `"${e.phone}"`,
      `"${e.email}"`,
      `"${e.address}"`,
      `"${e.status}"`,
      `"${new Date(e.createdAt).toLocaleString()}"`,
      `"${(e.message || '').replace(/"/g, '""')}"`,
      `"${(e.notes || '').replace(/"/g, '""')}"`
    ].join(','));

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `ABC_Public_School_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const newCount = enquiries.filter(e => e.status === 'new').length;
  const contactedCount = enquiries.filter(e => e.status === 'contacted').length;
  const admittedCount = enquiries.filter(e => e.status === 'admitted').length;
  const conversionRate = enquiries.length > 0 ? Math.round((admittedCount / enquiries.length) * 100) : 0;

  const handleCallBack = (enq) => {
    onUpdateStatus(enq.id, 'contacted');
    window.location.href = `tel:${enq.phone}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white text-slate-900 w-full max-w-5xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-sm shadow">
              CRM
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold font-display">Admissions CRM & Counselor Desk</h2>
                <span className="font-mono text-xs font-bold text-amber-400 bg-slate-800 px-2.5 py-0.5 rounded border border-slate-700">
                  {enquiries.length} Active Leads
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Log follow-up calls, update admission verification states, and export official reports.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Logout</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              title="Close Panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quantified Metrics KPI Strip */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
            <span className="text-slate-500 font-medium">New Leads</span>
            <span className="font-mono font-bold text-rose-600 text-sm tabular-nums">
              {newCount}
            </span>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
            <span className="text-slate-500 font-medium">In Follow-Up</span>
            <span className="font-mono font-bold text-amber-600 text-sm tabular-nums">
              {contactedCount}
            </span>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
            <span className="text-slate-500 font-medium">Admitted</span>
            <span className="font-mono font-bold text-emerald-600 text-sm tabular-nums">
              {admittedCount}
            </span>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
            <span className="text-slate-500 font-medium flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-emerald-600" />
              Conversion
            </span>
            <span className="font-mono font-bold text-slate-900 text-sm tabular-nums">
              {conversionRate}%
            </span>
          </div>
        </div>

        {/* Filters & Actions Toolbar */}
        <div className="p-4 bg-white border-b border-slate-200 flex flex-wrap gap-3 items-center justify-between">
          
          {/* Search Bar */}
          <div className="relative flex-1 min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search parent, student, grade or phone number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:border-blue-500 outline-none transition-colors"
            />
          </div>

          {/* Status Filter Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs">
            {['all', 'new', 'contacted', 'admitted', 'closed'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1 rounded-md font-semibold capitalize transition-colors cursor-pointer ${
                  statusFilter === st
                    ? 'bg-white text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-3 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>

            <button
              onClick={onAddDemoEnquiry}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-3 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              title="Add a realistic sample enquiry for demonstration"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ Add Demo Lead</span>
            </button>
          </div>

        </div>

        {/* Enquiries List Container */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 bg-slate-50">
          {filteredEnquiries.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
              <ShieldAlert className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-slate-700">No Admission Enquiries Match Your Query</h3>
              <p className="text-xs text-slate-500 mt-1">
                Try clearing the search filter or click "+ Add Demo Lead" above.
              </p>
            </div>
          ) : (
            filteredEnquiries.map((enq) => (
              <div
                key={enq.id}
                className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs hover:border-slate-300 transition-all space-y-3"
              >
                {/* Header Strip */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {enq.id}
                    </span>
                    {getStatusBadge(enq.status)}
                  </div>

                  <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {new Date(enq.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })} · {new Date(enq.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-3 gap-4 text-xs">
                  
                  {/* Parent Info */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Parent Contact</div>
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-blue-600" />
                      {enq.parentName}
                    </div>
                    <div className="text-slate-600 font-mono">
                      <a href={`tel:${enq.phone}`} className="hover:text-blue-600">{enq.phone}</a>
                    </div>
                    {enq.email && enq.email !== 'N/A' && (
                      <div className="text-slate-500 truncate">{enq.email}</div>
                    )}
                  </div>

                  {/* Student & Class */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Student Candidate</div>
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
                      {enq.studentName}
                    </div>
                    <div className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded inline-block">
                      {enq.gradeSeeking}
                    </div>
                    <div className="text-[11px] text-slate-500">Call Window: {enq.preferredTime}</div>
                  </div>

                  {/* Call Actions */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Counselor Actions</div>
                    <div className="text-slate-600 text-[11px] truncate">{enq.address || 'Address not provided'}</div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => handleCallBack(enq)}
                        className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <Phone className="w-3 h-3 text-amber-400" />
                        <span>Call Parent</span>
                      </button>

                      <a
                        href={`https://wa.me/91${enq.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${enq.parentName}, this is the Admissions Desk from ${SCHOOL_INFO.name}. We received your admission inquiry for ${enq.studentName} (${enq.gradeSeeking}). How may we assist you today?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </div>

                {/* Parent Message */}
                {enq.message && (
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed italic">
                    "{enq.message}"
                  </div>
                )}

                {/* Footer Controls: Status Select & Notes */}
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 font-medium">Status:</span>
                    <select
                      value={enq.status}
                      onChange={(e) => onUpdateStatus(enq.id, e.target.value)}
                      className="bg-slate-50 border border-slate-300 font-semibold text-slate-800 rounded-lg px-2 py-1 text-xs outline-none focus:border-blue-600"
                    >
                      <option value="new">New Inquiry</option>
                      <option value="contacted">In Follow-Up</option>
                      <option value="admitted">Admission Confirmed</option>
                      <option value="closed">Closed / Archived</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-3">
                    {editingNoteId === enq.id ? (
                      <div className="flex items-center gap-1">
                        <input
                          type="text"
                          placeholder="Log interaction notes..."
                          value={noteText}
                          onChange={(e) => setNoteText(e.target.value)}
                          className="px-2 py-1 border border-slate-300 rounded text-xs outline-none"
                        />
                        <button
                          onClick={() => {
                            onUpdateNotes(enq.id, noteText);
                            setEditingNoteId(null);
                          }}
                          className="bg-blue-600 text-white px-2 py-1 rounded font-semibold text-[11px]"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          setEditingNoteId(enq.id);
                          setNoteText(enq.notes || '');
                        }}
                        className="text-slate-500 hover:text-slate-900 font-medium flex items-center gap-1"
                      >
                        <Edit className="w-3 h-3" />
                        <span>{enq.notes ? `Note: ${enq.notes}` : '+ Add Counselor Log'}</span>
                      </button>
                    )}

                    <button
                      onClick={() => onDeleteEnquiry(enq.id)}
                      className="text-rose-500 hover:text-rose-700 p-1 rounded hover:bg-rose-50 cursor-pointer"
                      title="Delete Entry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
