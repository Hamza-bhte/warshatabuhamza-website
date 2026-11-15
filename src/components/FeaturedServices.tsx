import React, { useState } from 'react';
import { ArrowRight, DoorClosed, Grid, Hammer, Wrench, CheckCircle2, X, Ruler, Shield, PaintBucket, MessageCircle } from 'lucide-react';
import { WORKSHOP_SERVICES, WorkshopService, WORKSHOP_CONFIG } from '../data/workshopData';
import { WorkshopImage } from './WorkshopImage';
import {
  DEFAULT_WHATSAPP_MESSAGE,
  buildWhatsAppChatUrl,
  getWhatsAppLinkAttributes,
  handleWhatsAppClick,
} from '../utils/whatsapp';

interface FeaturedServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<WorkshopService | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'iron-gates-doors':
        return <DoorClosed className="w-6 h-6 text-[#F26A32]" />;
      case 'window-grills-railings':
        return <Grid className="w-6 h-6 text-[#F26A32]" />;
      case 'welding-fabrication':
        return <Hammer className="w-6 h-6 text-[#F26A32]" />;
      case 'metal-repairs':
        return <Wrench className="w-6 h-6 text-[#F26A32]" />;
      default:
        return <Hammer className="w-6 h-6 text-[#F26A32]" />;
    }
  };

  const workshopPromises = [
    {
      icon: <Ruler className="w-5 h-5 text-[#F26A32]" />,
      title: 'Accurate Site Measurements',
      arTitle: 'رفع المقاسات من الموقع بدقة',
      desc: 'We take exact measurements at your home, villa, or shop before cutting and welding so every gate, door, and grill fits properly.',
      arDesc: 'نأخذ المقاسات الدقيقة من منزلك أو فيلتك أو محلك قبل القص واللحام لضمان تركيب متقن ومطابق.',
    },
    {
      icon: <Hammer className="w-5 h-5 text-[#F26A32]" />,
      title: 'Strong Iron & Clean Welds',
      arTitle: 'حديد متين ولحام نظيف',
      desc: 'We use solid steel profiles and clean, carefully ground weld joints built to stay sturdy for years of daily use.',
      arDesc: 'نستخدم حديداً قوياً ولحامات متينة ومصنفرة بعناية لتتحمل الاستخدام اليومي لسنوات طويلة.',
    },
    {
      icon: <PaintBucket className="w-5 h-5 text-[#F26A32]" />,
      title: 'Rust Protection & Neat Finish',
      arTitle: 'حماية من الصدأ وتشطيب أنيق',
      desc: 'Metalwork is cleaned, primed with anti-rust protection, and painted neatly to handle local heat and outdoor weather.',
      arDesc: 'يتم تنظيف الحديد وتأسيسه بطبقة مقاومة للصدأ ودهانه بإتقان ليتحمل الحرارة والأجواء الخارجية.',
    },
    {
      icon: <Shield className="w-5 h-5 text-[#F26A32]" />,
      title: 'Direct Local Workshop Service',
      arTitle: 'تعامل مباشر مع الورشة',
      desc: 'Speak directly with the workshop team by phone or WhatsApp with clear pricing and dependable completion times.',
      arDesc: 'تواصل مباشرة مع فريق الورشة عبر الاتصال أو الواتساب بأسعار واضحة والتزام بالمواعيد.',
    },
  ];

  return (
    <>
      <section id="services" className="py-20 sm:py-24 bg-[#101214] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bilingual Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-6 border-b border-[#303438]">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#F26A32] mb-1">
                Practical Local Metalwork
              </div>
              <div dir="rtl" lang="ar" className="text-xs font-bold text-[#C8CDD0] mb-2">
                أعمال حدادة وتفصيل معادن عملية
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
                OUR WORKSHOP SERVICES
              </h2>
              <div dir="rtl" lang="ar" className="text-2xl sm:text-3xl font-extrabold text-[#F26A32] mt-1">
                خدمات الورشة
              </div>
            </div>
            <div className="max-w-lg space-y-1.5">
              <p className="text-sm text-[#9BA1A6]">
                Custom welding, ironwork, and metal repair for homes, villas, shops, and 
                properties across Hadda, Bahrah, Jamum, and the Makkah Region.
              </p>
              <p dir="rtl" lang="ar" className="text-sm text-[#C8CDD0]">
                تفصيل حديد، لحام، وصيانة للمنازل والفلل والمحلات والمزارع في حداء وبحرة والجموم ومنطقة مكة المكرمة.
              </p>
            </div>
          </div>

          {/* 4 Bilingual Workshop Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WORKSHOP_SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="group bg-[#17191B] hover:bg-[#1C1F22] border border-[#303438] hover:border-[#F26A32]/60 rounded-2xl overflow-hidden transition-all duration-200 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Service Photo */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#202326]">
                    <WorkshopImage
                      src={service.image}
                      alt={`${service.title} - ${service.arabicTitle}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17191B] via-[#17191B]/35 to-black/20" />

                    <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-[#101214]/90 backdrop-blur-md border border-[#303438] flex items-center justify-center">
                      {getServiceIcon(service.id)}
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-mono font-bold text-white bg-[#101214]/90 backdrop-blur-md border border-[#303438] px-2.5 py-1 rounded-lg">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-5 right-5 flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-white/80">
                        Service 0{index + 1}
                      </span>
                      <span dir="rtl" lang="ar" className="text-xs font-bold text-[#F26A32]">
                        خدمة ٠{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#F26A32] transition-colors">
                      {service.title}
                    </h3>
                    <div dir="rtl" lang="ar" className="text-base font-bold text-[#F26A32] mt-1 mb-3">
                      {service.arabicTitle}
                    </div>

                    <p className="text-sm text-[#C8CDD0] leading-relaxed mb-2.5">
                      {service.shortDesc}
                    </p>
                    <p dir="rtl" lang="ar" className="text-sm text-[#9BA1A6] leading-relaxed mb-5">
                      {service.arabicShortDesc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-[#303438]/70">
                      {service.examples.map((item) => (
                        <div key={item.en} className="flex items-start gap-2.5 text-xs">
                          <CheckCircle2 className="w-4 h-4 text-[#F26A32] shrink-0 mt-0.5" />
                          <div className="flex-1 flex flex-col gap-0.5">
                            <span className="text-[#D5D9DC]">{item.en}</span>
                            <span dir="rtl" lang="ar" className="text-[#9BA1A6]">
                              {item.ar}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-[#303438] flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-[#F26A32] transition-colors"
                  >
                    <div className="flex flex-col items-start leading-tight">
                      <span>More Details</span>
                      <span dir="rtl" lang="ar" className="text-[11px] text-[#C8CDD0] mt-0.5">التفاصيل</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="px-4 py-2 text-xs font-bold text-white bg-[#F26A32] hover:bg-[#D85620] rounded-lg transition-colors whitespace-nowrap flex flex-col items-center leading-tight"
                  >
                    <span className="uppercase">Request Quote</span>
                    <span dir="rtl" lang="ar" className="text-[11px] mt-0.5">اطلب تسعيرة</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean White-Contrast Bilingual Workshop Quality Band */}
      <section className="py-16 sm:py-20 bg-[#F8F9FA] text-[#17191B] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-5 border-b border-neutral-300">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#F26A32] font-bold mb-1">
                How We Work
              </div>
              <div dir="rtl" lang="ar" className="text-xs font-bold text-neutral-700 mb-2">
                طريقة عملنا
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#101214] uppercase">
                STRAIGHTFORWARD QUALITY FOR EVERY JOB
              </h2>
              <div dir="rtl" lang="ar" className="text-xl sm:text-2xl font-extrabold text-[#F26A32] mt-1">
                جودة واضحة وإتقان في كل عمل
              </div>
            </div>
            <div className="max-w-lg space-y-1">
              <p className="text-sm text-neutral-600">
                Whether it is a single door repair or a full set of villa gates and window grills, 
                we take pride in neat, strong, and honest metalwork.
              </p>
              <p dir="rtl" lang="ar" className="text-sm text-neutral-700 font-medium">
                سواءً كان العمل إصلاح باب واحد أو تفصيل بوابات وشبابيك فيلا كاملة، نحرص على المتانة والنظافة والأمانة في الشغل.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshopPromises.map((promise) => (
              <div
                key={promise.title}
                className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#F1F2F3] border border-neutral-200 flex items-center justify-center mb-4">
                    {promise.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#101214] mb-1">
                    {promise.title}
                  </h3>
                  <div dir="rtl" lang="ar" className="text-sm font-bold text-[#F26A32] mb-2.5">
                    {promise.arTitle}
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-2">
                    {promise.desc}
                  </p>
                </div>
                <p dir="rtl" lang="ar" className="text-xs text-neutral-700 leading-relaxed pt-2 border-t border-neutral-100">
                  {promise.arDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bilingual Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          />
          <div className="relative bg-[#17191B] border border-[#303438] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-[#101214]/85 text-[#9BA1A6] hover:text-white border border-[#303438] transition-colors"
              aria-label="Close service details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56 sm:h-64 w-full bg-[#101214]">
              <WorkshopImage
                src={selectedService.image}
                alt={`${selectedService.title} - ${selectedService.arabicTitle}`}
                loading="eager"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17191B] via-transparent to-black/30" />
              <div className="absolute bottom-4 left-6 right-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">
                  {selectedService.title}
                </h3>
                <span dir="rtl" lang="ar" className="text-base font-bold text-[#F26A32] block mt-1">
                  {selectedService.arabicTitle}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div className="space-y-2.5">
                <p className="text-sm text-[#D5D9DC] leading-relaxed">
                  {selectedService.fullDesc}
                </p>
                <p dir="rtl" lang="ar" className="text-sm text-[#F1F2F3] leading-relaxed">
                  {selectedService.arabicFullDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#202326] border border-[#303438]">
                  <div className="mb-2">
                    <span className="text-xs font-mono text-[#F26A32] uppercase tracking-wider block">
                      Common Work
                    </span>
                    <span dir="rtl" lang="ar" className="text-xs font-bold text-white block">
                      الأعمال الشائعة
                    </span>
                  </div>
                  <ul className="text-xs text-[#D5D9DC] space-y-2">
                    {selectedService.examples.map((item) => (
                      <li key={item.en} className="space-y-0.5">
                        <div>• {item.en}</div>
                        <div dir="rtl" lang="ar" className="text-[#9BA1A6]">{item.ar}</div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#202326] border border-[#303438] space-y-3">
                  <div>
                    <div className="mb-1.5">
                      <span className="text-xs font-mono text-[#F26A32] uppercase tracking-wider block">
                        Typical Materials
                      </span>
                      <span dir="rtl" lang="ar" className="text-xs font-bold text-white block">
                        الخامات المستخدمة
                      </span>
                    </div>
                    <p className="text-xs text-[#D5D9DC] leading-relaxed">
                      {selectedService.materials}
                    </p>
                    <p dir="rtl" lang="ar" className="text-xs text-[#9BA1A6] mt-1">
                      {selectedService.arabicMaterials}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#303438]">
                    <span className="text-xs font-mono text-[#9BA1A6] block">
                      Service Area: {WORKSHOP_CONFIG.serviceAreas}
                    </span>
                    <span dir="rtl" lang="ar" className="text-xs text-[#C8CDD0] block mt-0.5">
                      نطاق الخدمة: {WORKSHOP_CONFIG.arabicServiceAreas}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#303438]">
                {(() => {
                  const serviceWhatsappUrl = buildWhatsAppChatUrl(
                    `${DEFAULT_WHATSAPP_MESSAGE}\n(${selectedService.arabicTitle} - ${selectedService.title})`
                  );
                  return (
                    <a
                      href={serviceWhatsappUrl}
                      {...getWhatsAppLinkAttributes()}
                      onClick={(e) => handleWhatsAppClick(e, serviceWhatsappUrl)}
                      className="inline-flex items-center gap-2.5 px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                      <div className="flex flex-col items-start leading-tight">
                        <span>Ask on WhatsApp ({WORKSHOP_CONFIG.phoneDisplay})</span>
                        <span dir="rtl" lang="ar" className="text-[11px] mt-0.5">
                          استفسر واتساب (<span dir="ltr" className="inline-block">{WORKSHOP_CONFIG.arabicPhoneDisplay}</span>)
                        </span>
                      </div>
                    </a>
                  );
                })()}
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectServiceForQuote(title);
                  }}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#F26A32] hover:bg-[#D85620] rounded-xl transition-colors flex flex-col items-center leading-tight"
                >
                  <span className="uppercase">Request a Quote</span>
                  <span dir="rtl" lang="ar" className="text-[11px] mt-0.5">اطلب تسعيرة</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
