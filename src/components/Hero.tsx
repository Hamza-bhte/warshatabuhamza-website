import React from 'react';
import { ArrowRight, MessageCircle, Phone, MapPin, DoorClosed, Grid, Hammer, Wrench } from 'lucide-react';
import { WORKSHOP_CONFIG } from '../data/workshopData';
import { WORKSHOP_IMAGES } from '../assets/workshopImages';
import { WorkshopImage } from './WorkshopImage';
import { buildWhatsAppChatUrl, getWhatsAppLinkAttributes, handleWhatsAppClick } from '../utils/whatsapp';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#101214]">
      {/* Background Photo with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <WorkshopImage
          src={WORKSHOP_IMAGES.heroWelder}
          fallbackSrc={WORKSHOP_IMAGES.localIronGate}
          alt="Welder working in Warshat Abu Hamza local welding workshop — ورشة أبو حمزة للحدادة"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101214] via-[#101214]/92 to-[#101214]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-transparent to-[#101214]/80" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center my-auto py-8">
        <div className="max-w-4xl">
          {/* Bilingual Location & Workshop Marker */}
          <div className="flex flex-col items-start gap-1 text-xs font-medium tracking-wide text-[#F26A32] mb-5">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>{WORKSHOP_CONFIG.locationDisplay}</span>
            </div>
            <div dir="rtl" lang="ar" className="text-[#E2E6EA] font-semibold pl-6">
              {WORKSHOP_CONFIG.arabicLocationDisplay}
            </div>
          </div>

          {/* Bilingual Primary Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-5 text-balance">
            <span>WARSHAT ABO HAMZA</span>
            <span dir="rtl" lang="ar" className="block text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F26A32] mt-2">
              {WORKSHOP_CONFIG.arabicName}
            </span>
            <span className="block text-xl sm:text-2xl lg:text-3xl font-bold text-[#E2E6EA] mt-3">
              Local Welding Workshop &amp; Metal Fabrication
            </span>
            <span dir="rtl" lang="ar" className="block text-lg sm:text-xl lg:text-2xl font-bold text-[#F26A32] mt-1">
              ورشة حدادة وتفصيل معادن محلية
            </span>
          </h1>

          {/* Bilingual Clear Descriptions */}
          <div className="space-y-3 max-w-3xl mb-8">
            <p className="text-sm sm:text-base text-[#D5D9DC] leading-relaxed">
              Your trusted local welding workshop in Hadda and Bahrah. We craft strong, 
              cleanly finished custom iron gates, metal doors, window grills, steel railings, 
              shade frames, and handle all metal repairs with honest workmanship.
            </p>
            <p dir="rtl" lang="ar" className="text-sm sm:text-base text-[#F1F2F3] leading-relaxed font-medium">
              ورشتك المحلية الموثوقة في حداء وبحرة والجموم. نفصّل ونركب البوابات الحديدية، والأبواب، 
              وشبابيك الحماية، ودرابزين الدرج، وهياكل المظلات، وننفذ جميع أعمال اللحام وصيانة الحديد بإتقان وأمانة.
            </p>
          </div>

          {/* Bilingual Action CTAs */}
          <div className="flex flex-wrap items-stretch gap-3.5 mb-10">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wide text-white bg-[#F26A32] hover:bg-[#D85620] active:scale-[0.98] rounded-xl transition-all duration-150 shadow-xl shadow-[#F26A32]/30 group"
            >
              <div className="flex flex-col items-start leading-tight">
                <span className="uppercase">Request a Quote</span>
                <span dir="rtl" lang="ar" className="text-xs font-bold mt-0.5">اطلب عرض سعر</span>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            <a
              href={buildWhatsAppChatUrl()}
              {...getWhatsAppLinkAttributes()}
              onClick={(e) => handleWhatsAppClick(e, buildWhatsAppChatUrl())}
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] rounded-xl transition-all duration-150 shadow-lg shadow-emerald-950/50"
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
              className="inline-flex items-center justify-center gap-3 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#17191B]/90 hover:bg-[#202326] border border-[#303438] hover:border-[#F26A32]/60 rounded-xl transition-colors backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-[#F26A32] shrink-0" />
              <div className="flex flex-col items-start leading-tight">
                <span dir="ltr">Call: {WORKSHOP_CONFIG.phoneDisplay}</span>
                <span dir="rtl" lang="ar" className="text-xs text-[#E2E6EA] mt-0.5">
                  اتصل بنا: <span dir="ltr" className="inline-block">{WORKSHOP_CONFIG.arabicPhoneDisplay}</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* 4 Core Bilingual Workshop Services Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-[#17191B]/95 border border-[#303438] backdrop-blur-md shadow-2xl">
          <a href="#services" className="flex items-start gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-[#202326] border border-[#303438] group-hover:border-[#F26A32] flex items-center justify-center shrink-0 transition-colors mt-0.5">
              <DoorClosed className="w-5 h-5 text-[#F26A32]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-white group-hover:text-[#F26A32] transition-colors">
                Iron Gates &amp; Doors
              </div>
              <div dir="rtl" lang="ar" className="text-xs font-semibold text-[#F26A32]">
                بوابات وأبواب حديد
              </div>
              <div className="text-[11px] text-[#9BA1A6] mt-1">Custom villa &amp; entrance gates</div>
              <div dir="rtl" lang="ar" className="text-[11px] text-[#C8CDD0]">
                تفصيل بوابات الفلل والمداخل
              </div>
            </div>
          </a>

          <a href="#services" className="flex items-start gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-[#202326] border border-[#303438] group-hover:border-[#F26A32] flex items-center justify-center shrink-0 transition-colors mt-0.5">
              <Grid className="w-5 h-5 text-[#F26A32]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-white group-hover:text-[#F26A32] transition-colors">
                Window Grills &amp; Railings
              </div>
              <div dir="rtl" lang="ar" className="text-xs font-semibold text-[#F26A32]">
                شبابيك حماية ودرابزين
              </div>
              <div className="text-[11px] text-[#9BA1A6] mt-1">Security grills &amp; handrails</div>
              <div dir="rtl" lang="ar" className="text-[11px] text-[#C8CDD0]">
                شبابيك أمان ودرابزين درج
              </div>
            </div>
          </a>

          <a href="#services" className="flex items-start gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-[#202326] border border-[#303438] group-hover:border-[#F26A32] flex items-center justify-center shrink-0 transition-colors mt-0.5">
              <Hammer className="w-5 h-5 text-[#F26A32]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-white group-hover:text-[#F26A32] transition-colors">
                Welding &amp; Fabrication
              </div>
              <div dir="rtl" lang="ar" className="text-xs font-semibold text-[#F26A32]">
                حدادة وتفصيل معادن
              </div>
              <div className="text-[11px] text-[#9BA1A6] mt-1">Shades, carports &amp; steel frames</div>
              <div dir="rtl" lang="ar" className="text-[11px] text-[#C8CDD0]">
                مظلات سيارات وهياكل حديدية
              </div>
            </div>
          </a>

          <a href="#services" className="flex items-start gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-[#202326] border border-[#303438] group-hover:border-[#F26A32] flex items-center justify-center shrink-0 transition-colors mt-0.5">
              <Wrench className="w-5 h-5 text-[#F26A32]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-white group-hover:text-[#F26A32] transition-colors">
                Repairs &amp; Maintenance
              </div>
              <div dir="rtl" lang="ar" className="text-xs font-semibold text-[#F26A32]">
                صيانة وإصلاح الحديد
              </div>
              <div className="text-[11px] text-[#9BA1A6] mt-1">Hinges, locks &amp; frame fixes</div>
              <div dir="rtl" lang="ar" className="text-[11px] text-[#C8CDD0]">
                إصلاح المفصلات والأقفال والهياكل
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
