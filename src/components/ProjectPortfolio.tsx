import React, { useState } from 'react';
import { GALLERY_PROJECTS, GalleryItem } from '../data/workshopData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, SlidersHorizontal } from 'lucide-react';
import { WorkshopImage } from './WorkshopImage';

interface ProjectPortfolioProps {
  onInquireAboutProject: (projectTitle: string) => void;
}

export const ProjectPortfolio: React.FC<ProjectPortfolioProps> = ({ onInquireAboutProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'gates' | 'grills' | 'fabrication' | 'repairs'>('all');
  const [selectedProject, setSelectedProject] = useState<GalleryItem | null>(null);

  const filteredProjects =
    activeFilter === 'all'
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Work', ar: 'جميع الأعمال' },
    { id: 'gates', label: 'Gates & Doors', ar: 'بوابات وأبواب' },
    { id: 'grills', label: 'Grills & Railings', ar: 'شبابيك ودرابزين' },
    { id: 'fabrication', label: 'Fabrication & Shades', ar: 'تفصيل ومظلات' },
    { id: 'repairs', label: 'Repairs & Welding', ar: 'صيانة ولحام' },
  ];

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-[#101214] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bilingual Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#303438]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#F26A32] mb-1">
              Workshop Gallery
            </div>
            <div dir="rtl" lang="ar" className="text-xs font-bold text-[#C8CDD0] mb-2">
              معرض أعمال الورشة
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              RECENT WORKSHOP PROJECTS
            </h2>
            <div dir="rtl" lang="ar" className="text-2xl sm:text-3xl font-extrabold text-[#F26A32] mt-1">
              معرض الأعمال والمشاريع
            </div>
          </div>
          <div className="max-w-lg space-y-1.5">
            <p className="text-sm text-[#9BA1A6]">
              Browse examples of custom iron gates, window grills, handrails, steel shades, 
              and repair jobs. Click any photo to view details.
            </p>
            <p dir="rtl" lang="ar" className="text-sm text-[#C8CDD0]">
              تصفح نماذج من البوابات الحديدية، وشبابيك الحماية، والدرابزين، والمظلات، وأعمال الصيانة. اضغط على أي صورة لعرض التفاصيل.
            </p>
          </div>
        </div>

        {/* Bilingual Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-2 bg-[#17191B] border border-[#303438] rounded-xl w-full sm:w-fit">
          <div className="px-3 text-xs text-[#9BA1A6] font-mono items-center gap-2 hidden sm:flex">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#F26A32] shrink-0" />
            <div className="flex flex-col leading-tight">
              <span>Filter</span>
              <span dir="rtl" lang="ar" className="font-sans text-[11px] text-[#C8CDD0]">تصفية</span>
            </div>
          </div>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as typeof activeFilter)}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap flex flex-col items-center leading-tight ${
                activeFilter === filter.id
                  ? 'bg-[#F26A32] text-white font-bold shadow-md shadow-[#F26A32]/25'
                  : 'text-[#C8CDD0] hover:text-white hover:bg-[#202326]'
              }`}
            >
              <span>{filter.label}</span>
              <span dir="rtl" lang="ar" className="text-[11px] mt-0.5">{filter.ar}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-[#17191B] border border-[#303438] hover:border-[#F26A32]/60 rounded-2xl overflow-hidden transition-all duration-200 shadow-xl flex flex-col"
            >
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#202326]">
                <WorkshopImage
                  src={project.image}
                  alt={`${project.title} - ${project.arabicTitle}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17191B] via-transparent to-black/20" />

                <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-xl bg-[#101214]/85 backdrop-blur-sm border border-[#303438] text-white flex items-center justify-center group-hover:bg-[#F26A32] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-[#F26A32] uppercase tracking-wider bg-[#101214]/90 px-2.5 py-1 rounded-md border border-[#303438]/80 backdrop-blur-sm">
                    {project.categoryLabel}
                  </span>
                  <span dir="rtl" lang="ar" className="text-xs font-bold text-white bg-[#101214]/90 px-2.5 py-1 rounded-md border border-[#303438]/80 backdrop-blur-sm">
                    {project.arabicCategoryLabel}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#F26A32] transition-colors">
                    {project.title}
                  </h3>
                  <div dir="rtl" lang="ar" className="text-sm font-bold text-[#F26A32] mb-2.5">
                    {project.arabicTitle}
                  </div>
                  <p className="text-xs text-[#C8CDD0] leading-relaxed mb-1.5 line-clamp-2">
                    {project.description}
                  </p>
                  <p dir="rtl" lang="ar" className="text-xs text-[#9BA1A6] leading-relaxed mb-4 line-clamp-2">
                    {project.arabicDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#303438] flex items-center justify-between text-xs text-[#9BA1A6] gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[#C8CDD0]">{project.application}</div>
                    <div dir="rtl" lang="ar" className="truncate text-[11px] text-[#9BA1A6] text-right">
                      {project.arabicApplication}
                    </div>
                  </div>
                  <div className="text-[#F26A32] font-semibold whitespace-nowrap flex flex-col items-end leading-tight shrink-0">
                    <span>Details →</span>
                    <span dir="rtl" lang="ar" className="text-[11px]">← التفاصيل</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center space-y-1">
          <p className="text-xs text-[#9BA1A6]">
            Sample workshop photographs shown above. Custom iron designs and sizes can be fabricated to match your property.
          </p>
          <p dir="rtl" lang="ar" className="text-xs text-[#C8CDD0]">
            الصور أعلاه نماذج توضيحية من أعمال الورشة، ويمكن تفصيل أي تصميم أو مقاس حسب رغبتك وطلبك.
          </p>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={onInquireAboutProject}
      />
    </section>
  );
};
