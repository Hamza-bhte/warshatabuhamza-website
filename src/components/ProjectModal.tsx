import React from 'react';
import { X, ArrowRight, Layers, PaintBucket, Home, MessageCircle } from 'lucide-react';
import { GalleryItem, WORKSHOP_CONFIG } from '../data/workshopData';
import { WorkshopImage } from './WorkshopImage';
import {
  DEFAULT_WHATSAPP_MESSAGE,
  buildWhatsAppChatUrl,
  getWhatsAppLinkAttributes,
  handleWhatsAppClick,
} from '../utils/whatsapp';

interface ProjectModalProps {
  project: GalleryItem | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  const whatsappInquiryUrl = buildWhatsAppChatUrl(
    `${DEFAULT_WHATSAPP_MESSAGE}\n(${project.arabicTitle} - ${project.title})`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-[#17191B] border border-[#303438] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl z-10 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-[#101214]/85 text-[#9BA1A6] hover:text-white border border-[#303438] transition-colors"
          aria-label="Close gallery preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Header */}
        <div className="relative h-64 sm:h-96 w-full bg-[#101214] overflow-hidden">
          <WorkshopImage
            src={project.image}
            alt={`${project.title} - ${project.arabicTitle}`}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17191B] via-transparent to-black/25" />

          <div className="absolute bottom-4 left-6 right-6">
            <div className="inline-flex flex-col bg-[#101214]/85 px-3 py-1.5 rounded-md border border-[#303438] mb-2">
              <span className="text-xs font-mono text-[#F26A32] uppercase tracking-wider">
                {project.categoryLabel}
              </span>
              <span dir="rtl" lang="ar" className="text-xs font-bold text-white">
                {project.arabicCategoryLabel}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase leading-tight">
              {project.title}
            </h3>
            <div dir="rtl" lang="ar" className="text-base sm:text-lg font-bold text-[#F26A32] mt-1">
              {project.arabicTitle}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-5">
          <div className="space-y-2">
            <p className="text-sm text-[#D5D9DC] leading-relaxed">
              {project.description}
            </p>
            <p dir="rtl" lang="ar" className="text-sm text-[#F1F2F3] leading-relaxed">
              {project.arabicDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#202326] border border-[#303438]">
              <div className="mb-2">
                <div className="flex items-center gap-1.5 text-xs text-[#9BA1A6] font-mono">
                  <Layers className="w-3.5 h-3.5 text-[#F26A32]" />
                  <span>Materials</span>
                </div>
                <div dir="rtl" lang="ar" className="text-xs font-bold text-[#F26A32]">الخامات</div>
              </div>
              <div className="text-xs font-semibold text-white">{project.materials}</div>
              <div dir="rtl" lang="ar" className="text-xs text-[#C8CDD0] mt-1">{project.arabicMaterials}</div>
            </div>

            <div className="p-4 rounded-xl bg-[#202326] border border-[#303438]">
              <div className="mb-2">
                <div className="flex items-center gap-1.5 text-xs text-[#9BA1A6] font-mono">
                  <PaintBucket className="w-3.5 h-3.5 text-[#F26A32]" />
                  <span>Finish</span>
                </div>
                <div dir="rtl" lang="ar" className="text-xs font-bold text-[#F26A32]">التشطيب</div>
              </div>
              <div className="text-xs font-semibold text-white">{project.finish}</div>
              <div dir="rtl" lang="ar" className="text-xs text-[#C8CDD0] mt-1">{project.arabicFinish}</div>
            </div>

            <div className="p-4 rounded-xl bg-[#202326] border border-[#303438]">
              <div className="mb-2">
                <div className="flex items-center gap-1.5 text-xs text-[#9BA1A6] font-mono">
                  <Home className="w-3.5 h-3.5 text-[#F26A32]" />
                  <span>Suitable For</span>
                </div>
                <div dir="rtl" lang="ar" className="text-xs font-bold text-[#F26A32]">الاستخدام</div>
              </div>
              <div className="text-xs font-semibold text-white">{project.application}</div>
              <div dir="rtl" lang="ar" className="text-xs text-[#C8CDD0] mt-1">{project.arabicApplication}</div>
            </div>
          </div>

          <div className="border-t border-[#303438] pt-3 space-y-1">
            <p className="text-xs text-[#9BA1A6] italic">
              Representative workshop sample. All gates, doors, grills, and steel frames can be made to your exact sizes and preferred colors.
            </p>
            <p dir="rtl" lang="ar" className="text-xs text-[#C8CDD0]">
              نموذج توضيحي من أعمال الورشة. جميع البوابات والأبواب والشبابيك والهياكل الحديدية تُفصّل حسب مقاساتك ولونك المفضل.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#9BA1A6] hover:text-white transition-colors flex flex-col items-center leading-tight"
            >
              <span>Close</span>
              <span dir="rtl" lang="ar" className="text-[11px] mt-0.5">إغلاق</span>
            </button>

            <a
              href={whatsappInquiryUrl}
              {...getWhatsAppLinkAttributes()}
              onClick={(e) => handleWhatsAppClick(e, whatsappInquiryUrl)}
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

            <button
              onClick={() => {
                const title = project.title;
                onClose();
                onInquire(title);
              }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 text-xs font-bold text-white bg-[#F26A32] hover:bg-[#D85620] rounded-xl transition-colors"
            >
              <div className="flex flex-col items-start leading-tight">
                <span className="uppercase">Request Similar Work</span>
                <span dir="rtl" lang="ar" className="text-[11px] mt-0.5">اطلب عملاً مشابهاً</span>
              </div>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
