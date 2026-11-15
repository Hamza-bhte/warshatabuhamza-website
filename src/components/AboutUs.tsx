import React from 'react';
import { MapPin, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { WORKSHOP_CONFIG } from '../data/workshopData';
import { WORKSHOP_IMAGES } from '../assets/workshopImages';
import { WorkshopImage } from './WorkshopImage';
import { buildWhatsAppChatUrl, getWhatsAppLinkAttributes, handleWhatsAppClick } from '../utils/whatsapp';

interface AboutUsProps {
  onOpenQuoteModal: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenQuoteModal }) => {
  const highlights = [
    {
      en: 'Custom iron gates, metal doors, window grills, and handrails made to your exact sizes.',
      ar: 'تفصيل أبواب وبوابات حديد وشبابيك حماية ودرابزين حسب المقاس المطلوب بدقة.',
    },
    {
      en: 'Reliable welding and repair for broken hinges, frames, locks, and sagging steel doors.',
      ar: 'لحام وإصلاح المفصلات المكسورة والأبواب المائلة والأقفال والهياكل التالفة.',
    },
    {
      en: 'Direct communication with the workshop — no middlemen and clear pricing.',
      ar: 'تواصل مباشر مع الورشة بدون وسطاء وبأسعار واضحة ومناسبة.',
    },
    {
      en: 'Serving homeowners, villas, farms, and shops in Hadda, Bahrah, Jamum, and nearby areas.',
      ar: 'نخدم المنازل والفلل والمزارع والمحلات في حداء وبحرة والجموم والمناطق المجاورة.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-[#17191B] border-y border-[#303438] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Photo */}
          <div className="lg:col-span-6">
            <div className="relative h-72 sm:h-96 lg:h-full min-h-[340px] rounded-2xl overflow-hidden border border-[#303438] bg-[#101214] shadow-2xl">
              <WorkshopImage
                src={WORKSHOP_IMAGES.workshopMetalRepair}
                fallbackSrc={WORKSHOP_IMAGES.heroWelder}
                alt="Metal craftsman welding a steel door frame inside Warshat Abu Hamza — ورشة أبو حمزة"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101214]/95 via-[#101214]/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 space-y-1">
                <div className="text-sm font-bold text-white">
                  {WORKSHOP_CONFIG.name} · {WORKSHOP_CONFIG.locationDisplay}
                </div>
                <div dir="rtl" lang="ar" className="text-sm font-bold text-[#F26A32]">
                  {WORKSHOP_CONFIG.arabicName} — {WORKSHOP_CONFIG.arabicLocationDisplay}
                </div>
              </div>
            </div>
          </div>

          {/* Right Bilingual About Text */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#F26A32] mb-1">
                About Our Workshop
              </div>
              <div dir="rtl" lang="ar" className="text-xs font-bold text-[#C8CDD0] mb-2">
                عن الورشة
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase leading-tight">
                ABOUT WARSHAT ABO HAMZA
              </h2>
              <div dir="rtl" lang="ar" className="text-2xl sm:text-3xl font-extrabold text-[#F26A32] mt-1">
                من نحن — ورشة أبو حمزة للحدادة
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm sm:text-base text-[#D5D9DC] leading-relaxed">
                <strong className="text-white">Warshat Abo Hamza</strong> is a dedicated local welding 
                and metal fabrication workshop located in{' '}
                <strong className="text-white">Hadda, Bahrah, Makkah Region, Saudi Arabia</strong>. 
                We help families, homeowners, shop owners, and contractors get strong, clean, and 
                dependable metalwork built to fit their property.
              </p>
              <p dir="rtl" lang="ar" className="text-sm sm:text-base text-[#F1F2F3] leading-relaxed">
                <strong className="text-white">ورشة أبو حمزة</strong> هي ورشة حدادة وتفصيل معادن محلية في{' '}
                <strong className="text-white">حداء، بحرة، منطقة مكة المكرمة</strong>. 
                نساعد أصحاب المنازل والفلل والمحلات والمقاولين في الحصول على أعمال حديد قوية ونظيفة 
                مفصلة حسب المقاس والطلب.
              </p>
              <p className="text-xs sm:text-sm text-[#9BA1A6] leading-relaxed">
                From a new main entrance gate or protective window grills to repairing a damaged 
                steel door frame or building a backyard shade structure, every piece is carefully 
                measured, solidly welded, and cleanly finished before delivery or installation.
              </p>
              <p dir="rtl" lang="ar" className="text-xs sm:text-sm text-[#C8CDD0] leading-relaxed">
                سواءً كنت تحتاج إلى بوابة رئيسية جديدة، أو شبابيك حماية، أو إصلاح باب حديد، أو تفصيل مظلة 
                للمنزل، نحرص على أخذ المقاسات بدقة واللحام المتين والتشطيب النظيف قبل التسليم والتركيب.
              </p>
            </div>

            {/* Bilingual Key Points */}
            <div className="space-y-3 pt-1">
              {highlights.map((item) => (
                <div key={item.en} className="flex items-start gap-3 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#F26A32] shrink-0 mt-1" />
                  <div className="space-y-0.5 flex-1">
                    <div className="text-[#D5D9DC]">{item.en}</div>
                    <div dir="rtl" lang="ar" className="text-[#9BA1A6]">{item.ar}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Location & Service Coverage Box */}
            <div className="p-4 rounded-xl bg-[#101214] border border-[#303438] flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#F26A32] shrink-0 mt-0.5" />
              <div className="flex-1 space-y-1.5">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#9BA1A6]">
                    Workshop Location &amp; Service Area
                  </div>
                  <div dir="rtl" lang="ar" className="text-xs font-bold text-[#C8CDD0]">
                    الموقع ونطاق الخدمة
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
                <div className="pt-0.5">
                  <div className="text-xs text-[#9BA1A6]">
                    Serving {WORKSHOP_CONFIG.serviceAreas}
                  </div>
                  <div dir="rtl" lang="ar" className="text-xs text-[#C8CDD0]">
                    نخدم {WORKSHOP_CONFIG.arabicServiceAreas}
                  </div>
                </div>
              </div>
            </div>

            {/* Bilingual CTAs */}
            <div className="flex flex-wrap items-stretch gap-3 pt-1">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2.5 px-5 py-3 text-xs font-bold tracking-wider text-white bg-[#F26A32] hover:bg-[#D85620] rounded-xl transition-colors shadow-lg shadow-[#F26A32]/25"
              >
                <div className="flex flex-col items-start leading-tight">
                  <span className="uppercase">Request a Quote</span>
                  <span dir="rtl" lang="ar" className="text-[11px] mt-0.5">اطلب عرض سعر</span>
                </div>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href={buildWhatsAppChatUrl()}
                {...getWhatsAppLinkAttributes()}
                onClick={(e) => handleWhatsAppClick(e, buildWhatsAppChatUrl())}
                className="inline-flex items-center gap-2.5 px-5 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <div className="flex flex-col items-start leading-tight">
                  <span dir="ltr">WhatsApp: {WORKSHOP_CONFIG.phoneDisplay}</span>
                  <span dir="rtl" lang="ar" className="text-[11px] mt-0.5">
                    واتساب: <span dir="ltr" className="inline-block">{WORKSHOP_CONFIG.arabicPhoneDisplay}</span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
