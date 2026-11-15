import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Flame } from 'lucide-react';
import { WORKSHOP_CONFIG } from '../data/workshopData';
import { buildWhatsAppChatUrl, getWhatsAppLinkAttributes, handleWhatsAppClick } from '../utils/whatsapp';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', ar: 'الرئيسية', href: '#home' },
    { name: 'Services', ar: 'الخدمات', href: '#services' },
    { name: 'Gallery', ar: 'المعرض', href: '#gallery' },
    { name: 'About Us', ar: 'من نحن', href: '#about' },
    { name: 'Contact', ar: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#101214]/95 backdrop-blur-md border-b border-[#303438] py-3 shadow-xl'
            : 'bg-gradient-to-b from-[#101214] via-[#101214]/85 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 xl:gap-8">
            {/* Zone 1: Bilingual Brand Wordmark */}
            <a
              href="#home"
              className="flex items-center gap-2.5 text-white tracking-tight group shrink-0 whitespace-nowrap"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#F26A32] to-[#B84010] p-0.5 flex items-center justify-center shadow-lg shadow-[#F26A32]/20 shrink-0">
                <div className="w-full h-full bg-[#101214] rounded-[7px] flex items-center justify-center">
                  <Flame className="w-4 h-4 text-[#F26A32]" />
                </div>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm sm:text-base font-extrabold tracking-wide uppercase text-white whitespace-nowrap">
                  WARSHAT <span className="text-[#F26A32]">ABO HAMZA</span>
                </span>
                <span dir="rtl" lang="ar" className="text-[11px] font-bold text-[#C8CDD0] whitespace-nowrap">
                  {WORKSHOP_CONFIG.arabicName}
                </span>
              </div>
            </a>

            {/* Zone 2: Bilingual Single-Line Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-medium text-[#C8CDD0]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#F26A32] transition-colors duration-150 whitespace-nowrap shrink-0 flex flex-col items-center leading-tight group"
                >
                  <span className="group-hover:underline underline-offset-4 decoration-[#F26A32]/70">
                    {link.name}
                  </span>
                  <span dir="rtl" lang="ar" className="text-[11px] text-[#9BA1A6] group-hover:text-[#F26A32]">
                    {link.ar}
                  </span>
                </a>
              ))}
            </nav>

            {/* Zone 3: Bilingual Primary Action */}
            <div className="hidden lg:flex items-center shrink-0">
              <button
                onClick={onOpenQuoteModal}
                className="px-4 py-2 text-xs font-bold tracking-wide text-white bg-[#F26A32] hover:bg-[#D85620] active:scale-95 rounded-lg transition-all duration-150 shadow-lg shadow-[#F26A32]/25 whitespace-nowrap shrink-0 flex flex-col items-center leading-tight"
              >
                <span className="uppercase">Request a Quote</span>
                <span dir="rtl" lang="ar" className="text-[11px] font-bold">اطلب تسعيرة</span>
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenQuoteModal}
                className="px-3 py-1.5 text-xs font-bold text-white bg-[#F26A32] hover:bg-[#D85620] rounded-lg transition-colors whitespace-nowrap shrink-0 flex flex-col items-center leading-tight"
              >
                <span className="uppercase">Quote</span>
                <span dir="rtl" lang="ar" className="text-[10px]">تسعيرة</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#17191B] border border-[#303438] text-white hover:text-[#F26A32] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-16 right-0 bottom-0 w-full max-w-xs bg-[#17191B] border-l border-[#303438] p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div className="space-y-5">
              <div className="border-b border-[#303438] pb-3">
                <div className="text-sm font-bold text-white">{WORKSHOP_CONFIG.name}</div>
                <div dir="rtl" lang="ar" className="text-sm font-bold text-[#F26A32]">
                  {WORKSHOP_CONFIG.arabicName}
                </div>
                <div className="text-xs text-[#9BA1A6] mt-1">{WORKSHOP_CONFIG.locationDisplay}</div>
                <div dir="rtl" lang="ar" className="text-xs text-[#9BA1A6]">
                  {WORKSHOP_CONFIG.arabicLocationDisplay}
                </div>
              </div>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col items-start text-base font-medium text-white hover:text-[#F26A32] transition-colors py-2 border-b border-[#303438]/50"
                  >
                    <span>{link.name}</span>
                    <span dir="rtl" lang="ar" className="text-sm text-[#C8CDD0] w-full text-right">
                      {link.ar}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#303438] space-y-3">
              <a
                href={`tel:${WORKSHOP_CONFIG.phoneRaw}`}
                className="flex items-center justify-center gap-2.5 w-full py-2.5 px-4 rounded-xl bg-[#202326] border border-[#303438] text-xs font-mono text-white hover:border-[#F26A32] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F26A32] shrink-0" />
                <div className="flex flex-col items-center leading-tight">
                  <span dir="ltr">Call: {WORKSHOP_CONFIG.phoneDisplay}</span>
                  <span dir="rtl" lang="ar" className="font-sans text-[#C8CDD0] text-[11px] mt-0.5">
                    اتصال: <span dir="ltr" className="inline-block">{WORKSHOP_CONFIG.arabicPhoneDisplay}</span>
                  </span>
                </div>
              </a>
              <a
                href={buildWhatsAppChatUrl()}
                {...getWhatsAppLinkAttributes()}
                onClick={(e) => handleWhatsAppClick(e, buildWhatsAppChatUrl())}
                className="flex items-center justify-center gap-2.5 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <div className="flex flex-col items-center leading-tight">
                  <span dir="ltr">WhatsApp: {WORKSHOP_CONFIG.phoneDisplay}</span>
                  <span dir="rtl" lang="ar" className="text-[11px] mt-0.5">
                    واتساب: <span dir="ltr" className="inline-block">{WORKSHOP_CONFIG.arabicPhoneDisplay}</span>
                  </span>
                </div>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#F26A32] hover:bg-[#D85620] text-xs font-bold uppercase tracking-wider text-white transition-colors shadow-lg shadow-[#F26A32]/25 flex flex-col items-center justify-center leading-tight"
              >
                <span>Request a Quote</span>
                <span dir="rtl" lang="ar" className="text-[11px] normal-case mt-0.5">اطلب عرض سعر</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
