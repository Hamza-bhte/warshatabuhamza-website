import React from 'react';
import { Flame, Phone, MapPin, MessageCircle, ArrowUp, Globe } from 'lucide-react';
import { WORKSHOP_CONFIG } from '../data/workshopData';
import { buildWhatsAppChatUrl, getWhatsAppLinkAttributes, handleWhatsAppClick } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0F10] text-[#9BA1A6] border-t border-[#303438] pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#202326]">
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3 text-white tracking-tight group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#F26A32] to-[#B84010] p-0.5 flex items-center justify-center shadow-lg shadow-[#F26A32]/20 shrink-0">
                <div className="w-full h-full bg-[#101214] rounded-[7px] flex items-center justify-center">
                  <Flame className="w-4 h-4 text-[#F26A32]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-wider uppercase text-white">
                  WARSHAT <span className="text-[#F26A32]">ABO HAMZA</span>
                </span>
                <span dir="rtl" lang="ar" className="text-xs font-bold text-[#C8CDD0]">
                  {WORKSHOP_CONFIG.arabicName} · {WORKSHOP_CONFIG.arabicBusinessType}
                </span>
              </div>
            </a>

            <div className="space-y-1.5 max-w-sm">
              <p className="text-xs text-[#9BA1A6] leading-relaxed">
                Trusted local welding and metal fabrication workshop in Hadda, Bahrah, Makkah Region, 
                serving homeowners, villas, shops, and properties across Hadda, Bahrah, and Jamum.
              </p>
              <p dir="rtl" lang="ar" className="text-xs text-[#C8CDD0] leading-relaxed">
                ورشة حدادة وتفصيل معادن موثوقة في حداء وبحرة والجموم بمنطقة مكة المكرمة، نخدم المنازل والفلل والمحلات والمزارع.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={buildWhatsAppChatUrl()}
                {...getWhatsAppLinkAttributes()}
                onClick={(e) => handleWhatsAppClick(e, buildWhatsAppChatUrl())}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-mono text-[11px] font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <div className="flex flex-col items-start leading-tight">
                  <span dir="ltr">WhatsApp: {WORKSHOP_CONFIG.phoneDisplay}</span>
                  <span dir="rtl" lang="ar" className="font-sans text-[11px] text-white mt-0.5">
                    واتساب: <span dir="ltr" className="inline-block">{WORKSHOP_CONFIG.arabicPhoneDisplay}</span>
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <div>
              <h4 className="text-white font-mono uppercase tracking-wider text-xs font-bold">
                Quick Links
              </h4>
              <div dir="rtl" lang="ar" className="text-xs font-bold text-[#F26A32] mt-0.5">
                روابط سريعة
              </div>
            </div>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-[#F26A32] transition-colors block">
                  <div className="text-[#C8CDD0]">Home</div>
                  <div dir="rtl" lang="ar" className="text-[11px] text-[#9BA1A6]">الرئيسية</div>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F26A32] transition-colors block">
                  <div className="text-[#C8CDD0]">Services</div>
                  <div dir="rtl" lang="ar" className="text-[11px] text-[#9BA1A6]">الخدمات</div>
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F26A32] transition-colors block">
                  <div className="text-[#C8CDD0]">Gallery</div>
                  <div dir="rtl" lang="ar" className="text-[11px] text-[#9BA1A6]">المعرض</div>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F26A32] transition-colors block">
                  <div className="text-[#C8CDD0]">About Us</div>
                  <div dir="rtl" lang="ar" className="text-[11px] text-[#9BA1A6]">من نحن</div>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F26A32] transition-colors block">
                  <div className="text-[#C8CDD0]">Contact &amp; Quote</div>
                  <div dir="rtl" lang="ar" className="text-[11px] text-[#9BA1A6]">تواصل معنا</div>
                </a>
              </li>
            </ul>
          </div>

          {/* Workshop Services List */}
          <div className="space-y-3">
            <div>
              <h4 className="text-white font-mono uppercase tracking-wider text-xs font-bold">
                Our Services
              </h4>
              <div dir="rtl" lang="ar" className="text-xs font-bold text-[#F26A32] mt-0.5">
                خدماتنا
              </div>
            </div>
            <ul className="space-y-3 text-[#9BA1A6]">
              <li>
                <div className="text-[#C8CDD0]">Custom Iron Gates &amp; Doors</div>
                <div dir="rtl" lang="ar" className="text-[11px] text-[#9BA1A6]">أبواب وبوابات حديد</div>
              </li>
              <li>
                <div className="text-[#C8CDD0]">Window Grills &amp; Railings</div>
                <div dir="rtl" lang="ar" className="text-[11px] text-[#9BA1A6]">شبابيك حماية ودرابزين</div>
              </li>
              <li>
                <div className="text-[#C8CDD0]">Welding &amp; Fabrication</div>
                <div dir="rtl" lang="ar" className="text-[11px] text-[#9BA1A6]">أعمال اللحام وتفصيل المعادن</div>
              </li>
              <li>
                <div className="text-[#C8CDD0]">Metal Repairs &amp; Maintenance</div>
                <div dir="rtl" lang="ar" className="text-[11px] text-[#9BA1A6]">صيانة وإصلاح الحديد</div>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-3">
            <div>
              <h4 className="text-white font-mono uppercase tracking-wider text-xs font-bold">
                Workshop Contact
              </h4>
              <div dir="rtl" lang="ar" className="text-xs font-bold text-[#F26A32] mt-0.5">
                التواصل
              </div>
            </div>
            <div className="space-y-3 text-[#C8CDD0]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F26A32] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div>{WORKSHOP_CONFIG.locationDisplay}</div>
                  <div dir="rtl" lang="ar" className="text-[11px] text-[#9BA1A6]">
                    {WORKSHOP_CONFIG.arabicLocationDisplay}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F26A32] shrink-0 mt-0.5" />
                <a href={`tel:${WORKSHOP_CONFIG.phoneRaw}`} className="hover:text-white transition-colors block">
                  <div dir="ltr" className="font-mono text-white">{WORKSHOP_CONFIG.phoneDisplay}</div>
                  <div dir="rtl" lang="ar" className="text-[11px] text-[#F26A32] font-bold">
                    <span dir="ltr" className="inline-block">{WORKSHOP_CONFIG.arabicPhoneDisplay}</span>
                  </div>
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="w-3.5 h-3.5 text-[#F26A32] shrink-0 mt-0.5" />
                <a href={WORKSHOP_CONFIG.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block">
                  <div className="font-mono text-[#F26A32]">{WORKSHOP_CONFIG.domain}</div>
                  <div dir="rtl" lang="ar" className="text-[11px] text-[#9BA1A6]">
                    الموقع الرسمي للورشة
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6A7177]">
          <div className="text-center sm:text-left space-y-0.5">
            <div>
              © {new Date().getFullYear()} {WORKSHOP_CONFIG.name} · {WORKSHOP_CONFIG.locationDisplay}.
            </div>
            <div dir="rtl" lang="ar" className="text-[#9BA1A6]">
              جميع الحقوق محفوظة لـ {WORKSHOP_CONFIG.arabicName} — {WORKSHOP_CONFIG.arabicLocationDisplay}
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#17191B] hover:bg-[#F26A32] text-white transition-colors border border-[#303438] whitespace-nowrap"
            aria-label="Scroll back to top"
          >
            <div className="flex flex-col items-start leading-tight">
              <span>Back to Top</span>
              <span dir="rtl" lang="ar" className="text-[10px] text-[#C8CDD0]">العودة للأعلى</span>
            </div>
            <ArrowUp className="w-3.5 h-3.5 shrink-0" />
          </button>
        </div>
      </div>
    </footer>
  );
};
