import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, AlertCircle, CheckCircle2 } from 'lucide-react';
import { WORKSHOP_CONFIG } from '../data/workshopData';
import {
  DEFAULT_WHATSAPP_MESSAGE,
  buildWhatsAppChatUrl,
  getWhatsAppLinkAttributes,
  handleWhatsAppClick,
} from '../utils/whatsapp';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('Hadda (حداء)');
  const [service, setService] = useState('Custom Iron Gates & Metal Doors');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<{ en: string; ar: string } | null>(null);

  const SERVICE_OPTIONS = [
    'Custom Iron Gates & Metal Doors',
    'Window Grills & Steel Railings',
    'Welding & Metal Fabrication',
    'Metal Repairs & Maintenance',
    'Steel Shade / Carport',
  ];

  useEffect(() => {
    if (preselectedService) {
      if (SERVICE_OPTIONS.includes(preselectedService)) {
        setService(preselectedService);
      } else {
        setNotes(`Inquiry regarding / استفسار بخصوص: ${preselectedService}`);
      }
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError({
        en: 'Please enter your name.',
        ar: 'يرجى إدخال الاسم.',
      });
      return;
    }
    if (!phone.trim() || phone.trim().length < 7) {
      setError({
        en: 'Please enter a valid phone or WhatsApp number.',
        ar: 'يرجى إدخال رقم جوال أو واتساب صحيح.',
      });
      return;
    }

    setSubmitted(true);
  };

  const buildWhatsAppUrl = () => {
    const hasCustomInput = Boolean(name.trim() || phone.trim() || notes.trim());
    if (!hasCustomInput) {
      return buildWhatsAppChatUrl();
    }

    const lines = [
      DEFAULT_WHATSAPP_MESSAGE,
      name.trim() ? `• الاسم / Name: ${name.trim()}` : '',
      phone.trim() ? `• الجوال / Phone: ${phone.trim()}` : '',
      `• المنطقة / Area: ${area}`,
      `• الخدمة / Service: ${service}`,
      notes.trim() ? `• التفاصيل / Notes: ${notes.trim()}` : '',
    ].filter(Boolean);

    return buildWhatsAppChatUrl(lines.join('\n'));
  };

  const quoteWhatsappUrl = buildWhatsAppUrl();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-[#17191B] border border-[#303438] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#202326] text-[#9BA1A6] hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white uppercase">
                Quote Request Ready
              </h3>
              <div dir="rtl" lang="ar" className="text-lg font-bold text-[#F26A32] mt-1">
                تم تجهيز طلب التسعيرة
              </div>
            </div>
            <p className="text-xs text-[#9BA1A6] leading-relaxed">
              Thank you, <span className="text-white font-semibold">{name}</span>. Your request for{' '}
              <span className="text-white font-semibold">{service}</span> in {area} is ready.
            </p>
            <p dir="rtl" lang="ar" className="text-xs text-[#C8CDD0] leading-relaxed">
              شكراً لك يا {name}. طلبك جاهز، أرسله مباشرة عبر الواتساب للرد السريع.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={quoteWhatsappUrl}
                {...getWhatsAppLinkAttributes()}
                onClick={(e) => handleWhatsAppClick(e, quoteWhatsappUrl)}
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-colors uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <div className="flex flex-col items-start leading-tight">
                  <span>Send via WhatsApp Now</span>
                  <span dir="rtl" lang="ar" className="text-[11px] normal-case mt-0.5">
                    أرسل عبر واتساب الآن
                  </span>
                </div>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2 text-xs text-[#9BA1A6] hover:text-white transition-colors flex flex-col items-center leading-tight"
              >
                <span>Close</span>
                <span dir="rtl" lang="ar" className="text-[11px] mt-0.5">إغلاق</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white uppercase">
                Request a Quote
              </h3>
              <span dir="rtl" lang="ar" className="text-base font-bold text-[#F26A32] block mt-0.5">
                {WORKSHOP_CONFIG.arabicName} — اطلب عرض سعر
              </span>
              <div className="mt-2 space-y-0.5">
                <p className="text-xs text-[#9BA1A6]">
                  Serving {WORKSHOP_CONFIG.serviceAreas}
                </p>
                <p dir="rtl" lang="ar" className="text-xs text-[#C8CDD0]">
                  نخدم {WORKSHOP_CONFIG.arabicServiceAreas}
                </p>
              </div>
              <div className="mt-1.5 space-y-0.5">
                <div className="text-xs text-[#9BA1A6]">
                  Call / WhatsApp:{' '}
                  <span dir="ltr" className="text-white font-mono">{WORKSHOP_CONFIG.phoneDisplay}</span>
                </div>
                <div dir="rtl" lang="ar" className="text-xs text-[#C8CDD0]">
                  اتصال / واتساب:{' '}
                  <span dir="ltr" className="text-[#F26A32] font-bold inline-block">
                    {WORKSHOP_CONFIG.arabicPhoneDisplay}
                  </span>
                </div>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 flex items-start gap-2 text-xs text-red-200">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5 flex-1">
                  <div>{error.en}</div>
                  <div dir="rtl" lang="ar" className="text-red-300">{error.ar}</div>
                </div>
              </div>
            )}

            <div>
              <label className="block mb-1">
                <span className="block text-xs font-mono uppercase text-[#9BA1A6]">Your Name *</span>
                <span dir="rtl" lang="ar" className="block text-xs font-semibold text-[#C8CDD0]">الاسم *</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name / اكتب اسمك"
                className="w-full bg-[#202326] border border-[#303438] focus:border-[#F26A32] rounded-xl px-3.5 py-2.5 text-sm text-white outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block mb-1">
                  <span className="block text-xs font-mono uppercase text-[#9BA1A6]">Phone *</span>
                  <span dir="rtl" lang="ar" className="block text-xs font-semibold text-[#C8CDD0]">الجوال *</span>
                </label>
                <input
                  type="tel"
                  required
                  dir="ltr"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+966 5X XXX XXXX"
                  className="w-full bg-[#202326] border border-[#303438] focus:border-[#F26A32] rounded-xl px-3.5 py-2.5 text-sm text-white font-mono outline-none"
                />
              </div>

              <div>
                <label className="block mb-1">
                  <span className="block text-xs font-mono uppercase text-[#9BA1A6]">Area</span>
                  <span dir="rtl" lang="ar" className="block text-xs font-semibold text-[#C8CDD0]">المنطقة</span>
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full bg-[#202326] border border-[#303438] focus:border-[#F26A32] rounded-xl px-3.5 py-2.5 text-sm text-white outline-none"
                >
                  <option value="Hadda (حداء)">Hadda — حداء</option>
                  <option value="Bahrah (بحرة)">Bahrah — بحرة</option>
                  <option value="Jamum (الجموم)">Jamum — الجموم</option>
                  <option value="Makkah Region (منطقة مكة)">Makkah Region — منطقة مكة</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-1">
                <span className="block text-xs font-mono uppercase text-[#9BA1A6]">Service Needed</span>
                <span dir="rtl" lang="ar" className="block text-xs font-semibold text-[#C8CDD0]">الخدمة المطلوبة</span>
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-[#202326] border border-[#303438] focus:border-[#F26A32] rounded-xl px-3.5 py-2.5 text-sm text-white outline-none"
              >
                <option value="Custom Iron Gates & Metal Doors">Custom Iron Gates &amp; Metal Doors — أبواب وبوابات حديد</option>
                <option value="Window Grills & Steel Railings">Window Grills &amp; Steel Railings — شبابيك حماية ودرابزين</option>
                <option value="Welding & Metal Fabrication">Welding &amp; Metal Fabrication — أعمال لحام وتفصيل</option>
                <option value="Metal Repairs & Maintenance">Metal Repairs &amp; Maintenance — صيانة وإصلاح الحديد</option>
                <option value="Steel Shade / Carport">Steel Shade / Carport — مظلات سيارات وحديد</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">
                <span className="block text-xs font-mono uppercase text-[#9BA1A6]">Details / Sizes</span>
                <span dir="rtl" lang="ar" className="block text-xs font-semibold text-[#C8CDD0]">التفاصيل والمقاسات</span>
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Approximate sizes, quantity, or repair details... / المقاسات أو تفاصيل العمل..."
                className="w-full bg-[#202326] border border-[#303438] focus:border-[#F26A32] rounded-xl px-3.5 py-2.5 text-sm text-white outline-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F26A32] hover:bg-[#D85620] text-xs font-bold uppercase tracking-wider text-white transition-all shadow-lg shadow-[#F26A32]/25"
              >
                <Send className="w-3.5 h-3.5 shrink-0" />
                <div className="flex flex-col items-start leading-tight">
                  <span>Submit Quote</span>
                  <span dir="rtl" lang="ar" className="text-[11px] normal-case mt-0.5">إرسال الطلب</span>
                </div>
              </button>

              <a
                href={quoteWhatsappUrl}
                {...getWhatsAppLinkAttributes()}
                onClick={(e) => handleWhatsAppClick(e, quoteWhatsappUrl)}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold uppercase tracking-wider text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
                <div className="flex flex-col items-start leading-tight">
                  <span>WhatsApp</span>
                  <span dir="rtl" lang="ar" className="text-[11px] normal-case mt-0.5">واتساب</span>
                </div>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
