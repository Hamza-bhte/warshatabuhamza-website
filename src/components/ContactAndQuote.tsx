import React, { useState, useEffect } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Upload,
  AlertCircle,
} from 'lucide-react';
import { WORKSHOP_CONFIG } from '../data/workshopData';
import {
  DEFAULT_WHATSAPP_MESSAGE,
  buildWhatsAppChatUrl,
  getWhatsAppLinkAttributes,
  handleWhatsAppClick,
} from '../utils/whatsapp';

interface ContactAndQuoteProps {
  initialService?: string;
}

export const ContactAndQuote: React.FC<ContactAndQuoteProps> = ({ initialService = '' }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('Hadda (حداء)');
  const [serviceType, setServiceType] = useState('Custom Iron Gates & Metal Doors');
  const [details, setDetails] = useState('');
  const [selectedFileName, setSelectedFileName] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<{ en: string; ar: string } | null>(null);

  const SERVICE_OPTIONS = [
    'Custom Iron Gates & Metal Doors',
    'Window Grills & Steel Railings',
    'Welding & Metal Fabrication',
    'Metal Repairs & Maintenance',
    'Steel Shade / Carport',
  ];

  useEffect(() => {
    if (initialService) {
      if (SERVICE_OPTIONS.includes(initialService)) {
        setServiceType(initialService);
      } else {
        setDetails(`Inquiry regarding / استفسار بخصوص: ${initialService}`);
      }
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!fullName.trim()) {
      setFormError({
        en: 'Please enter your name.',
        ar: 'يرجى إدخال الاسم.',
      });
      return;
    }
    if (!phone.trim() || phone.trim().length < 7) {
      setFormError({
        en: 'Please enter a valid phone or WhatsApp number.',
        ar: 'يرجى إدخال رقم جوال أو واتساب صحيح.',
      });
      return;
    }
    if (!details.trim()) {
      setFormError({
        en: 'Please write a short description of what you need.',
        ar: 'يرجى كتابة وصف مختصر للعمل المطلوب.',
      });
      return;
    }

    setSubmitted(true);
  };

  const directWhatsappUrl = buildWhatsAppChatUrl();

  const buildWhatsAppQuoteUrl = () => {
    const hasCustomInput = Boolean(fullName.trim() || phone.trim() || details.trim());
    if (!hasCustomInput) {
      return directWhatsappUrl;
    }

    const lines = [
      DEFAULT_WHATSAPP_MESSAGE,
      fullName.trim() ? `• الاسم / Name: ${fullName.trim()}` : '',
      phone.trim() ? `• الجوال / Phone: ${phone.trim()}` : '',
      `• المنطقة / Area: ${area}`,
      `• الخدمة / Service: ${serviceType}`,
      details.trim() ? `• التفاصيل / Details: ${details.trim()}` : '',
    ].filter(Boolean);

    return buildWhatsAppChatUrl(lines.join('\n'));
  };

  const quoteWhatsappUrl = buildWhatsAppQuoteUrl();

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#101214] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bilingual Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-6 border-b border-[#303438]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#F26A32] mb-1">
              Get in Touch
            </div>
            <div dir="rtl" lang="ar" className="text-xs font-bold text-[#C8CDD0] mb-2">
              تواصل معنا
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              CONTACT &amp; REQUEST A QUOTE
            </h2>
            <div dir="rtl" lang="ar" className="text-2xl sm:text-3xl font-extrabold text-[#F26A32] mt-1">
              التواصل وطلب عرض سعر
            </div>
          </div>
          <div className="max-w-lg space-y-1.5">
            <p className="text-sm text-[#9BA1A6]">
              Call us, message us on WhatsApp, or send your measurements and details below for a fast workshop estimate.
            </p>
            <p dir="rtl" lang="ar" className="text-sm text-[#C8CDD0]">
              اتصل بنا أو راسلنا على الواتساب أو أرسل المقاسات والتفاصيل أدناه للحصول على تسعيرة سريعة من الورشة.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact & Location */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp & Phone Card */}
            <div className="bg-[#17191B] border border-[#303438] rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="mb-2">
                <span className="text-xs font-mono text-[#F26A32] uppercase tracking-widest block">
                  Direct Contact
                </span>
                <span dir="rtl" lang="ar" className="text-xs font-bold text-[#C8CDD0] block">
                  تواصل مباشر
                </span>
              </div>
              <h3 className="text-xl font-bold text-white uppercase mb-1">
                WhatsApp or Call Directly
              </h3>
              <div dir="rtl" lang="ar" className="text-base font-bold text-[#F26A32] mb-3">
                تواصل معنا عبر الواتساب أو الاتصال المباشر
              </div>
              <p className="text-xs text-[#C8CDD0] leading-relaxed mb-1.5">
                Send photos of your entrance, window, or repair job on WhatsApp and we will reply promptly with advice and pricing.
              </p>
              <p dir="rtl" lang="ar" className="text-xs text-[#9BA1A6] leading-relaxed mb-6">
                أرسل صور المدخل أو الشباك أو العمل المطلوب إصلاحه على الواتساب وسنرد عليك سريعاً بالتفاصيل والسعر.
              </p>

              <a
                href={directWhatsappUrl}
                {...getWhatsAppLinkAttributes()}
                onClick={(e) => handleWhatsAppClick(e, directWhatsappUrl)}
                className="w-full flex items-center justify-center gap-3 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-sm font-bold text-white transition-all shadow-lg shadow-emerald-950/40 mb-3"
              >
                <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                <div className="flex flex-col items-start leading-tight">
                  <span dir="ltr">WhatsApp: {WORKSHOP_CONFIG.phoneDisplay}</span>
                  <span dir="rtl" lang="ar" className="text-xs font-bold mt-0.5">
                    واتساب: <span dir="ltr" className="inline-block">{WORKSHOP_CONFIG.arabicPhoneDisplay}</span>
                  </span>
                </div>
              </a>

              <a
                href={`tel:${WORKSHOP_CONFIG.phoneRaw}`}
                className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-[#202326] hover:bg-[#2A2E33] border border-[#303438] text-xs font-mono font-semibold text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F26A32] shrink-0" />
                <div className="flex flex-col items-start leading-tight">
                  <span dir="ltr">Call: {WORKSHOP_CONFIG.phoneDisplay}</span>
                  <span dir="rtl" lang="ar" className="font-sans text-xs text-[#C8CDD0] mt-0.5">
                    اتصال مباشر: <span dir="ltr" className="inline-block">{WORKSHOP_CONFIG.arabicPhoneDisplay}</span>
                  </span>
                </div>
              </a>
            </div>

            {/* Workshop Location Info */}
            <div className="bg-[#17191B] border border-[#303438] rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="pb-3 border-b border-[#303438]">
                <h4 className="text-sm font-mono uppercase tracking-wider text-white">
                  Workshop Information
                </h4>
                <div dir="rtl" lang="ar" className="text-sm font-bold text-[#F26A32] mt-0.5">
                  بيانات الورشة
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F26A32] shrink-0 mt-0.5" />
                <div className="flex-1 space-y-1.5">
                  <div>
                    <div className="text-xs font-mono text-[#9BA1A6] uppercase">
                      Workshop Location
                    </div>
                    <div dir="rtl" lang="ar" className="text-xs font-bold text-[#C8CDD0]">
                      موقع الورشة
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {WORKSHOP_CONFIG.locationDisplay}
                    </div>
                    <div dir="rtl" lang="ar" className="text-sm font-semibold text-[#F26A32]">
                      {WORKSHOP_CONFIG.arabicLocationDisplay}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-[#9BA1A6]">
                      Serving {WORKSHOP_CONFIG.serviceAreas}
                    </div>
                    <div dir="rtl" lang="ar" className="text-xs text-[#C8CDD0]">
                      نخدم {WORKSHOP_CONFIG.arabicServiceAreas}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#303438]/60">
                <Phone className="w-5 h-5 text-[#F26A32] shrink-0 mt-0.5" />
                <div className="flex-1 space-y-1.5">
                  <div>
                    <div className="text-xs font-mono text-[#9BA1A6] uppercase">
                      Phone &amp; WhatsApp
                    </div>
                    <div dir="rtl" lang="ar" className="text-xs font-bold text-[#C8CDD0]">
                      رقم الجوال والواتساب
                    </div>
                  </div>
                  <a
                    href={`tel:${WORKSHOP_CONFIG.phoneRaw}`}
                    className="block hover:text-[#F26A32] transition-colors"
                  >
                    <div dir="ltr" className="text-sm font-mono font-semibold text-white">
                      {WORKSHOP_CONFIG.phoneDisplay}
                    </div>
                    <div dir="rtl" lang="ar" className="text-sm font-bold text-[#F26A32]">
                      <span dir="ltr" className="inline-block">{WORKSHOP_CONFIG.arabicPhoneDisplay}</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#303438]/60">
                <Clock className="w-5 h-5 text-[#F26A32] shrink-0 mt-0.5" />
                <div className="flex-1 space-y-1.5">
                  <div>
                    <div className="text-xs font-mono text-[#9BA1A6] uppercase">
                      Working Hours
                    </div>
                    <div dir="rtl" lang="ar" className="text-xs font-bold text-[#C8CDD0]">
                      ساعات العمل
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      {WORKSHOP_CONFIG.workingHours}
                    </div>
                    <div dir="rtl" lang="ar" className="text-xs text-[#C8CDD0] mt-0.5">
                      {WORKSHOP_CONFIG.arabicWorkingHours}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bilingual Quote Form */}
          <div className="lg:col-span-7 bg-[#17191B] border border-[#303438] rounded-2xl p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="p-6 sm:p-8 text-center space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">
                      Request Ready
                    </span>
                    <span dir="rtl" lang="ar" className="text-xs font-bold text-[#C8CDD0] block">
                      تم تجهيز الطلب
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase">
                    Thank You, {fullName}
                  </h3>
                  <div dir="rtl" lang="ar" className="text-lg font-bold text-[#F26A32]">
                    شكراً لك يا {fullName}
                  </div>
                  <p className="text-sm text-[#9BA1A6] max-w-md mx-auto">
                    Your quote details have been prepared. Click below to send them straight to our WhatsApp for the fastest response.
                  </p>
                  <p dir="rtl" lang="ar" className="text-sm text-[#C8CDD0] max-w-md mx-auto">
                    تم تجهيز تفاصيل طلبك. اضغط بالأسفل لإرسالها مباشرة إلى واتساب الورشة للرد السريع.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#202326] border border-[#303438] max-w-md mx-auto text-left text-xs font-mono space-y-2.5">
                  <div>
                    <div className="text-[#9BA1A6]">Service: <span className="text-white font-sans">{serviceType}</span></div>
                    <div dir="rtl" lang="ar" className="text-[#C8CDD0] font-sans text-right">الخدمة المختارة</div>
                  </div>
                  <div>
                    <div className="text-[#9BA1A6]">Area: <span className="text-white font-sans">{area}</span></div>
                    <div dir="rtl" lang="ar" className="text-[#C8CDD0] font-sans text-right">المنطقة</div>
                  </div>
                  <div>
                    <div className="text-[#9BA1A6]">Phone: <span className="text-white" dir="ltr">{phone}</span></div>
                    <div dir="rtl" lang="ar" className="text-[#C8CDD0] font-sans text-right">رقم التواصل</div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={quoteWhatsappUrl}
                    {...getWhatsAppLinkAttributes()}
                    onClick={(e) => handleWhatsAppClick(e, quoteWhatsappUrl)}
                    className="inline-flex items-center gap-2.5 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold uppercase tracking-wider text-white transition-colors"
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
                      setDetails('');
                    }}
                    className="py-3 px-5 rounded-xl bg-[#202326] hover:bg-[#2A2E33] text-xs font-semibold text-white transition-colors border border-[#303438] flex flex-col items-center leading-tight"
                  >
                    <span>New Request</span>
                    <span dir="rtl" lang="ar" className="text-[11px] text-[#C8CDD0] mt-0.5">طلب جديد</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="pb-3 border-b border-[#303438]">
                  <div className="mb-1">
                    <span className="text-xs font-mono text-[#F26A32] uppercase tracking-widest block">
                      Free Workshop Estimate
                    </span>
                    <span dir="rtl" lang="ar" className="text-xs font-bold text-[#C8CDD0] block">
                      تسعيرة مجانية من الورشة
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase">
                    Request a Quote
                  </h3>
                  <div dir="rtl" lang="ar" className="text-lg font-bold text-[#F26A32] mt-0.5">
                    اطلب عرض سعر
                  </div>
                </div>

                {formError && (
                  <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 flex items-start gap-3 text-xs text-red-200">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div className="space-y-0.5 flex-1">
                      <div>{formError.en}</div>
                      <div dir="rtl" lang="ar" className="text-red-300">{formError.ar}</div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1.5">
                      <span className="block text-xs font-mono uppercase tracking-wider text-[#9BA1A6]">
                        Your Name *
                      </span>
                      <span dir="rtl" lang="ar" className="block text-xs font-semibold text-[#C8CDD0]">
                        الاسم *
                      </span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your name / اكتب اسمك"
                      className="w-full bg-[#202326] border border-[#303438] focus:border-[#F26A32] rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block mb-1.5">
                      <span className="block text-xs font-mono uppercase tracking-wider text-[#9BA1A6]">
                        Phone / WhatsApp *
                      </span>
                      <span dir="rtl" lang="ar" className="block text-xs font-semibold text-[#C8CDD0]">
                        رقم الجوال أو الواتساب *
                      </span>
                    </label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+966 5X XXX XXXX"
                      className="w-full bg-[#202326] border border-[#303438] focus:border-[#F26A32] rounded-xl px-4 py-2.5 text-sm text-white font-mono outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1.5">
                      <span className="block text-xs font-mono uppercase tracking-wider text-[#9BA1A6]">
                        Service Needed
                      </span>
                      <span dir="rtl" lang="ar" className="block text-xs font-semibold text-[#C8CDD0]">
                        الخدمة المطلوبة
                      </span>
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full bg-[#202326] border border-[#303438] focus:border-[#F26A32] rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors"
                    >
                      <option value="Custom Iron Gates & Metal Doors">Custom Iron Gates &amp; Metal Doors — أبواب وبوابات حديد</option>
                      <option value="Window Grills & Steel Railings">Window Grills &amp; Steel Railings — شبابيك حماية ودرابزين</option>
                      <option value="Welding & Metal Fabrication">Welding &amp; Metal Fabrication — أعمال لحام وتفصيل</option>
                      <option value="Metal Repairs & Maintenance">Metal Repairs &amp; Maintenance — صيانة وإصلاح الحديد</option>
                      <option value="Steel Shade / Carport">Steel Shade / Carport — مظلات سيارات وحديد</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-1.5">
                      <span className="block text-xs font-mono uppercase tracking-wider text-[#9BA1A6]">
                        Location / Area
                      </span>
                      <span dir="rtl" lang="ar" className="block text-xs font-semibold text-[#C8CDD0]">
                        الموقع / المنطقة
                      </span>
                    </label>
                    <select
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full bg-[#202326] border border-[#303438] focus:border-[#F26A32] rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors"
                    >
                      <option value="Hadda (حداء)">Hadda — حداء</option>
                      <option value="Bahrah (بحرة)">Bahrah — بحرة</option>
                      <option value="Jamum (الجموم)">Jamum — الجموم</option>
                      <option value="Makkah Region (منطقة مكة)">Makkah Region (Other) — منطقة مكة المكرمة</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block mb-1.5">
                    <span className="block text-xs font-mono uppercase tracking-wider text-[#9BA1A6]">
                      Project Details &amp; Sizes *
                    </span>
                    <span dir="rtl" lang="ar" className="block text-xs font-semibold text-[#C8CDD0]">
                      تفاصيل العمل والمقاسات *
                    </span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Example: Main iron gate 4m x 2.5m, or 6 window grills... / مثال: بوابة رئيسية 4×2.5 متر أو تفصيل 6 شبابيك حماية..."
                    className="w-full bg-[#202326] border border-[#303438] focus:border-[#F26A32] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors resize-y"
                  />
                </div>

                <div>
                  <label className="block mb-1.5">
                    <span className="block text-xs font-mono uppercase tracking-wider text-[#9BA1A6]">
                      Attach Photo or Sketch (Optional)
                    </span>
                    <span dir="rtl" lang="ar" className="block text-xs font-semibold text-[#C8CDD0]">
                      إرفاق صورة أو رسم (اختياري)
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-3.5 rounded-xl bg-[#202326] border border-dashed border-[#303438] hover:border-[#F26A32] cursor-pointer transition-colors">
                    <Upload className="w-4 h-4 text-[#F26A32] shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-[#C8CDD0] truncate">
                        {selectedFileName ? `Selected: ${selectedFileName}` : 'Upload site photo or design idea'}
                      </div>
                      <div dir="rtl" lang="ar" className="text-xs text-[#9BA1A6] truncate text-right mt-0.5">
                        {selectedFileName ? `تم اختيار: ${selectedFileName}` : 'ارفع صورة الموقع أو التصميم'}
                      </div>
                    </div>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setSelectedFileName(e.target.files[0].name);
                        }
                      }}
                    />
                  </label>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl bg-[#F26A32] hover:bg-[#D85620] active:scale-[0.98] text-xs font-bold uppercase tracking-wider text-white transition-all shadow-lg shadow-[#F26A32]/25"
                  >
                    <Send className="w-4 h-4 shrink-0" />
                    <div className="flex flex-col items-start leading-tight">
                      <span>Submit Request</span>
                      <span dir="rtl" lang="ar" className="text-[11px] normal-case mt-0.5">إرسال الطلب</span>
                    </div>
                  </button>

                  <a
                    href={quoteWhatsappUrl}
                    {...getWhatsAppLinkAttributes()}
                    onClick={(e) => handleWhatsAppClick(e, quoteWhatsappUrl)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current shrink-0" />
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
      </div>
    </section>
  );
};
