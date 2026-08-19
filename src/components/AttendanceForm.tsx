import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Users, Calendar, Plane, Sparkles, MessageSquare } from 'lucide-react';
import { RSVPFormData } from '../types';

const STORAGE_KEY = 'wedding_rsvp_alefiyah_aliasgar';

const EVENT_OPTIONS = [
  'Mehendi',
  'Mithi Shitabi & Jaman',
  'Katha ni Rasam',
  'Darees & Khushi nu Jaman',
  'Nikah ni Majlis & Khushi nu Jaman',
];

interface EventDateInfo {
  hijri: string;
  gregorianWithDay: string;
}

const EVENT_DATES: Record<string, EventDateInfo> = {
  'Mehendi': {
    hijri: '24 Rabi al-Akhar 1448\u00A0H',
    gregorianWithDay: '6 October 2026 · Tuesday',
  },
  'Mithi Shitabi & Jaman': {
    hijri: '25 Rabi al-Akhar 1448\u00A0H',
    gregorianWithDay: '7 October 2026 · Wednesday',
  },
  'Katha ni Rasam': {
    hijri: '26 Rabi al-Akhar 1448\u00A0H',
    gregorianWithDay: '7 October 2026 · Wednesday',
  },
  'Darees & Khushi nu Jaman': {
    hijri: '26 Rabi al-Akhar 1448\u00A0H',
    gregorianWithDay: '7 October 2026 · Wednesday',
  },
  'Nikah ni Majlis & Khushi nu Jaman': {
    hijri: '27 Rabi al-Akhar 1448\u00A0H',
    gregorianWithDay: '8 October 2026 · Thursday',
  },
};

const TRAVEL_MODES: Array<'Flight' | 'Train' | 'Car' | 'Other'> = [
  'Flight',
  'Train',
  'Car',
  'Other',
];

export const AttendanceForm: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    fullName: '',
    mobileNumber: '',
    attendingCount: 1,
    eventsAttending: [
      'Mehendi',
      'Mithi Shitabi & Jaman',
      'Katha ni Rasam',
      'Darees & Khushi nu Jaman',
      'Nikah ni Majlis & Khushi nu Jaman',
    ],
    arrivalDate: '2026-10-06',
    arrivalTime: '14:00',
    arrivalFrom: '',
    departureDate: '2026-10-08',
    departureTime: '18:00',
    departureTo: '',
    travelMode: 'Flight',
    transportAssistance: 'No',
    specialRequirements: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string>('');

  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);
  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA';

  // Load existing submission if stored
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData(parsed);
        setIsSubmitted(true);
      }
    } catch {
      // ignore
    }
  }, []);

  // Initialize Cloudflare Turnstile widget
  useEffect(() => {
    if (isSubmitted) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const initTurnstile = () => {
      if (typeof window !== 'undefined' && window.turnstile && turnstileContainerRef.current) {
        if (!turnstileWidgetIdRef.current) {
          try {
            turnstileContainerRef.current.innerHTML = '';
            turnstileWidgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
              sitekey: turnstileSiteKey,
              callback: (token: string) => {
                setTurnstileToken(token);
                setErrorMsg('');
              },
              'expired-callback': () => {
                setTurnstileToken('');
              },
              'error-callback': () => {
                // Keep token empty on error
              },
              theme: 'light',
              size: 'normal',
            });
          } catch (e) {
            console.error('Turnstile render exception:', e);
          }
        }
      } else {
        timeoutId = setTimeout(initTurnstile, 300);
      }
    };

    initTurnstile();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isSubmitted, turnstileSiteKey]);

  const handleEventToggle = (eventName: string) => {
    setFormData((prev) => {
      const exists = prev.eventsAttending.includes(eventName);
      if (exists) {
        return { ...prev, eventsAttending: prev.eventsAttending.filter((e) => e !== eventName) };
      } else {
        return { ...prev, eventsAttending: [...prev.eventsAttending, eventName] };
      }
    });
  };

  const handleSelectAllEvents = () => {
    if (formData.eventsAttending.length === EVENT_OPTIONS.length) {
      setFormData((prev) => ({ ...prev, eventsAttending: [] }));
    } else {
      setFormData((prev) => ({ ...prev, eventsAttending: [...EVENT_OPTIONS] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!formData.mobileNumber.trim()) {
      setErrorMsg('Please enter your mobile number');
      return;
    }
    if (formData.eventsAttending.length === 0) {
      setErrorMsg('Please select at least one event you will be attending');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    const submissionData: RSVPFormData = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch('/.netlify/functions/submit-rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          turnstileToken,
          formData: submissionData,
        }),
      });

      const result = await response.json();

      if (result && result.success) {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(submissionData));
        } catch {
          // ignore
        }
        setIsSubmitting(false);
        setIsSubmitted(true);
      } else {
        setIsSubmitting(false);
        if (result && result.error && result.error.includes('security verification')) {
          setErrorMsg('Please complete the security verification and try again.');
        } else {
          setErrorMsg('We could not submit your RSVP right now. Please try again.');
        }

        if (window.turnstile && turnstileWidgetIdRef.current) {
          try {
            window.turnstile.reset(turnstileWidgetIdRef.current);
          } catch {
            // ignore
          }
          setTurnstileToken('');
        }
      }
    } catch (err) {
      console.error('RSVP Network Error:', err);
      setIsSubmitting(false);
      setErrorMsg('We could not submit your RSVP right now. Please try again.');

      if (window.turnstile && turnstileWidgetIdRef.current) {
        try {
          window.turnstile.reset(turnstileWidgetIdRef.current);
        } catch {
          // ignore
        }
        setTurnstileToken('');
      }
    }
  };

  const generateWhatsAppShareUrl = () => {
    const text = `*Wedding RSVP — Alefiyah & Aliasgar*
*Guest Name:* ${formData.fullName}
*Mobile:* ${formData.mobileNumber}
*Attending Members:* ${formData.attendingCount}
*Events:* ${formData.eventsAttending.join(', ')}

*Travel Details:*
- *Arrival:* ${formData.arrivalDate} at ${formData.arrivalTime} (From: ${formData.arrivalFrom || 'N/A'})
- *Departure:* ${formData.departureDate} at ${formData.departureTime} (To: ${formData.departureTo || 'N/A'})
- *Mode:* ${formData.travelMode || 'N/A'}
- *Transport Assistance:* ${formData.transportAssistance || 'No'}
${formData.specialRequirements ? `- *Note:* ${formData.specialRequirements}` : ''}`;

    return `https://wa.me/919408793430?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="rsvp-form" className="w-full">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-royal-arch p-8 sm:p-12 text-center space-y-6 max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 rounded-full bg-[#F4ECE1] border-2 border-[#C29B5D] flex items-center justify-center mx-auto text-[#5B1A24] shadow-xs">
            <CheckCircle2 className="w-8 h-8 text-[#B38747]" />
          </div>

          <div className="space-y-2">
            <span className="font-heading-caps text-xs uppercase tracking-[0.25em] text-[#B38747] font-semibold">
              Attendance Confirmed
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#5B1A24]">
              Thank you. We look forward to celebrating with you.
            </h3>
            <p className="font-serif-luxury text-lg text-[#5C4549] max-w-md mx-auto italic">
              Your presence will make our wedding celebration truly memorable and joyous.
            </p>
          </div>

          {/* Summary Card */}
          <div className="p-5 rounded-2xl bg-[#F4ECE1] border border-[#E3C594]/60 text-left text-xs sm:text-sm space-y-2 text-[#4A3236]">
            <div className="flex justify-between border-b border-[#E3C594]/30 pb-2">
              <span className="text-[#8C6228] font-heading-caps font-semibold">Guest:</span>
              <span className="font-semibold text-[#5B1A24]">{formData.fullName} ({formData.attendingCount} {formData.attendingCount === 1 ? 'member' : 'members'})</span>
            </div>
            <div className="flex justify-between border-b border-[#E3C594]/30 pb-2">
              <span className="text-[#8C6228] font-heading-caps font-semibold">Contact:</span>
              <span className="font-medium">{formData.mobileNumber}</span>
            </div>
            <div className="flex justify-between border-b border-[#E3C594]/30 pb-2">
              <span className="text-[#8C6228] font-heading-caps font-semibold">Events:</span>
              <span className="font-medium text-right max-w-[60%]">{formData.eventsAttending.join(', ')}</span>
            </div>
            {formData.arrivalDate && (
              <div className="flex justify-between border-b border-[#E3C594]/30 pb-2">
                <span className="text-[#8C6228] font-heading-caps font-semibold">Arrival:</span>
                <span className="font-medium">{formData.arrivalDate} · {formData.arrivalTime}</span>
              </div>
            )}
            {formData.travelMode && (
              <div className="flex justify-between">
                <span className="text-[#8C6228] font-heading-caps font-semibold">Mode:</span>
                <span className="font-medium">{formData.travelMode} (Assistance: {formData.transportAssistance || 'No'})</span>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={generateWhatsAppShareUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider font-heading-caps shadow-xs transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Summary to Host on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#F4ECE1] hover:bg-[#E8C5C8]/40 border border-[#D4AF7A]/60 text-[#5B1A24] text-xs font-heading-caps font-semibold uppercase tracking-wider transition-colors"
            >
              Edit Details
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="card-royal-arch p-6 sm:p-10 max-w-3xl mx-auto space-y-8 relative overflow-hidden">
          {/* Subtle gold line */}
          <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#C29B5D]/70 to-transparent" />

          {/* Form Section 1: Guest Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#E3C594]/40 pb-2">
              <Users className="w-4 h-4 text-[#B38747]" />
              <h4 className="font-heading-caps text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#5B1A24]">
                1. Guest Information
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-heading-caps text-[#8C6228] uppercase tracking-wider mb-1.5 font-bold">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Taher Bhai Tinwala"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF3EB] border border-[#D4AF7A] text-base text-[#2A080E] font-medium focus:outline-none focus:ring-2 focus:ring-[#8C1D2F]/30 focus:border-[#8C1D2F] placeholder:text-[#8C6228]/50"
                />
              </div>

              <div>
                <label className="block text-xs font-heading-caps text-[#8C6228] uppercase tracking-wider mb-1.5 font-bold">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9408793430"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF3EB] border border-[#D4AF7A] text-base text-[#2A080E] font-medium focus:outline-none focus:ring-2 focus:ring-[#8C1D2F]/30 focus:border-[#8C1D2F] placeholder:text-[#8C6228]/50"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-heading-caps text-[#8C6228] uppercase tracking-wider mb-1.5 font-bold">
                  Number of Members Attending
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center rounded-xl bg-[#FAF3EB] border border-[#D4AF7A] p-1">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setFormData({ ...formData, attendingCount: num })}
                        className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${
                          formData.attendingCount === num
                            ? 'bg-[#5B1A24] text-[#FAF3EB] shadow-xs'
                            : 'text-[#4A3236] hover:bg-[#E8C5C8]/40'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                  <span className="text-sm text-[#3D0B12] font-semibold">
                    {formData.attendingCount} {formData.attendingCount === 1 ? 'Guest' : 'Guests'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section 2: Attendance / Events */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#E3C594]/40 pb-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#B38747]" />
                <h4 className="font-heading-caps text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#5B1A24]">
                  2. Which events will you be attending? *
                </h4>
              </div>
              <button
                type="button"
                onClick={handleSelectAllEvents}
                className="text-[11px] font-heading-caps text-[#8C6228] hover:text-[#5B1A24] font-medium underline"
              >
                {formData.eventsAttending.length === EVENT_OPTIONS.length ? 'Clear All' : 'Select All'}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {EVENT_OPTIONS.map((event) => {
                const isSelected = formData.eventsAttending.includes(event);
                return (
                  <button
                    key={event}
                    type="button"
                    onClick={() => handleEventToggle(event)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-[#F4ECE1] border-[#C29B5D] shadow-xs text-[#5B1A24]'
                        : 'bg-[#FAF3EB] border-[#E3C594]/50 text-[#5C4549] hover:bg-[#F4ECE1]/60'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <span className="font-serif-luxury text-base font-semibold block text-[#5B1A24]">{event}</span>
                      <span className="text-xs font-heading-caps text-[#8C6228] font-bold block whitespace-nowrap">
                        {EVENT_DATES[event]?.hijri}
                      </span>
                      <span className="text-xs font-heading-caps text-[#8C6228] font-bold block whitespace-nowrap">
                        {EVENT_DATES[event]?.gregorianWithDay}
                      </span>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors shrink-0 ml-2 ${
                        isSelected
                          ? 'bg-[#5B1A24] border-[#5B1A24] text-white'
                          : 'border-[#D4AF7A]/60 bg-white'
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form Section 3: Travel Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#E3C594]/40 pb-2">
              <Plane className="w-4 h-4 text-[#B38747]" />
              <h4 className="font-heading-caps text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#5B1A24]">
                3. Travel Information
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-heading-caps text-[#8C6228] uppercase tracking-wider mb-1">
                  Arrival Date
                </label>
                <input
                  type="date"
                  value={formData.arrivalDate}
                  onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F4ECE1] border border-[#E3C594]/70 text-xs text-[#332225] focus:outline-none focus:ring-1 focus:ring-[#C29B5D]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-heading-caps text-[#8C6228] uppercase tracking-wider mb-1">
                  Arrival Time
                </label>
                <input
                  type="time"
                  value={formData.arrivalTime}
                  onChange={(e) => setFormData({ ...formData, arrivalTime: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F4ECE1] border border-[#E3C594]/70 text-xs text-[#332225] focus:outline-none focus:ring-1 focus:ring-[#C29B5D]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-heading-caps text-[#8C6228] uppercase tracking-wider mb-1">
                  Arrival Location / From
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai / Airport"
                  value={formData.arrivalFrom}
                  onChange={(e) => setFormData({ ...formData, arrivalFrom: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F4ECE1] border border-[#E3C594]/70 text-xs text-[#332225] focus:outline-none focus:ring-1 focus:ring-[#C29B5D]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-heading-caps text-[#8C6228] uppercase tracking-wider mb-1">
                  Departure Date
                </label>
                <input
                  type="date"
                  value={formData.departureDate}
                  onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F4ECE1] border border-[#E3C594]/70 text-xs text-[#332225] focus:outline-none focus:ring-1 focus:ring-[#C29B5D]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-heading-caps text-[#8C6228] uppercase tracking-wider mb-1">
                  Departure Time
                </label>
                <input
                  type="time"
                  value={formData.departureTime}
                  onChange={(e) => setFormData({ ...formData, departureTime: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F4ECE1] border border-[#E3C594]/70 text-xs text-[#332225] focus:outline-none focus:ring-1 focus:ring-[#C29B5D]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-heading-caps text-[#8C6228] uppercase tracking-wider mb-1">
                  Departure Location / To
                </label>
                <input
                  type="text"
                  placeholder="e.g. Railway Station / Surat"
                  value={formData.departureTo}
                  onChange={(e) => setFormData({ ...formData, departureTo: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F4ECE1] border border-[#E3C594]/70 text-xs text-[#332225] focus:outline-none focus:ring-1 focus:ring-[#C29B5D]"
                />
              </div>
            </div>

            {/* Travel Mode Selector */}
            <div className="pt-2">
              <label className="block text-xs font-heading-caps text-[#8C6228] uppercase tracking-wider mb-1.5 font-medium">
                Mode of Travel
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {TRAVEL_MODES.map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setFormData({ ...formData, travelMode: mode })}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold tracking-wider font-heading-caps uppercase transition-all ${
                      formData.travelMode === mode
                        ? 'bg-[#5B1A24] text-white border-[#5B1A24] shadow-xs'
                        : 'bg-[#F4ECE1] text-[#4A3236] border-[#E3C594]/70 hover:bg-[#F4ECE1]'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Transportation Assistance */}
            <div className="pt-2">
              <label className="block text-xs font-heading-caps text-[#8C6228] uppercase tracking-wider mb-1.5 font-medium">
                Do you require assistance with transportation?
              </label>
              <div className="flex gap-4">
                {(['Yes', 'No'] as const).map((opt) => (
                  <label key={opt} className="inline-flex items-center gap-2 cursor-pointer text-sm text-[#4A3236] font-medium">
                    <input
                      type="radio"
                      name="transportAssistance"
                      checked={formData.transportAssistance === opt}
                      onChange={() => setFormData({ ...formData, transportAssistance: opt })}
                      className="accent-[#5B1A24]"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Special Requirements */}
            <div className="pt-2">
              <label className="block text-xs font-heading-caps text-[#8C6228] uppercase tracking-wider mb-1.5 font-medium">
                Any additional information or special requirements
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Dietary preferences, elderly guest assistance, arrival notes..."
                value={formData.specialRequirements}
                onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#F4ECE1] border border-[#E3C594]/70 text-xs sm:text-sm text-[#332225] focus:outline-none focus:ring-2 focus:ring-[#C29B5D]/50 focus:border-[#C29B5D]"
              />
            </div>
          </div>

          {/* Cloudflare Turnstile Security Verification Widget */}
          <div className="pt-2 flex flex-col items-center justify-center">
            <div ref={turnstileContainerRef} id="turnstile-container" className="my-1 min-h-[65px]" />
          </div>

          {/* Validation error message */}
          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs text-center font-medium">
              {errorMsg}
            </div>
          )}

          {/* Submit button */}
          <div className="pt-4 border-t border-[#E3C594]/40 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto min-w-[240px] px-8 py-3.5 rounded-xl bg-[#5B1A24] hover:bg-[#7A2837] text-white text-xs sm:text-sm font-semibold uppercase tracking-widest font-heading-caps shadow-md transition-all flex items-center justify-center gap-2 mx-auto disabled:opacity-70"
            >
              {isSubmitting ? (
                <span>Confirming...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#E3C594]" />
                  <span>Confirm Attendance</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-[#8C6228] mt-2 font-heading-caps">
              Your details will be securely registered for the wedding hosts.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
