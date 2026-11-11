import React, { useState } from 'react';
import { ArrowUpRight, Filter, Eye } from 'lucide-react';
import { INITIAL_PROJECTS, ProjectItem } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';

export const WorksSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'ALL WORKS' },
    { id: '3d-modelling', label: '01 — 3D MODELLING' },
    { id: 'product-viz', label: '02 — PRODUCT VISUALIZATION' },
    { id: 'environment', label: '03 — ENVIRONMENT DESIGN' },
    { id: 'texturing', label: '04 — TEXTURING & MATERIALS' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? INITIAL_PROJECTS
      : INITIAL_PROJECTS.filter((p) => p.category === selectedCategory);

  const handleNextProject = () => {
    if (!activeProject) return;
    const currentIndex = INITIAL_PROJECTS.findIndex((p) => p.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % INITIAL_PROJECTS.length;
    setActiveProject(INITIAL_PROJECTS[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!activeProject) return;
    const currentIndex = INITIAL_PROJECTS.findIndex((p) => p.id === activeProject.id);
    const prevIndex = (currentIndex - 1 + INITIAL_PROJECTS.length) % INITIAL_PROJECTS.length;
    setActiveProject(INITIAL_PROJECTS[prevIndex]);
  };

  return (
    <section id="works" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#282B31]">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF55] tracking-widest uppercase mb-3">
            <span>02</span>
            <span aria-hidden="true">·</span>
            <span>Portfolio Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-[#F4F4F2]">
            SELECTED CREATIONS.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#9B9DA5] max-w-2xl">
            "A collection of ideas transformed into three-dimensional experiences."
          </p>
        </div>

        {/* Category Filter Tabs (Functional segmented buttons per Anti-Slop) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#111317] border border-[#282B31] rounded-xl">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-mono font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#C8FF55] text-[#090A0C] font-semibold shadow-sm'
                    : 'text-[#9B9DA5] hover:text-[#F4F4F2] hover:bg-[#171A20]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Showcase Grid (Asymmetric Editorial Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        {filteredProjects.map((project, idx) => {
          // Asymmetric column widths: Alternate 7/5 and 5/7 columns for dramatic editorial rhythm
          const isWide = idx % 3 === 0;
          const colSpan = isWide ? 'md:col-span-7' : 'md:col-span-5';

          return (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`${colSpan} group cursor-pointer flex flex-col bg-[#171A20] border border-[#282B31] hover:border-[#C8FF55]/60 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]`}
            >
              {/* Media Container with 16:9 / 4:3 ratios */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#090A0C]">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Subtle Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171A20] via-transparent to-transparent opacity-90 pointer-events-none" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-[#090A0C]/80 border border-[#282B31] text-[#C8FF55]">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Hover Quick View Trigger Icon */}
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#090A0C]/80 border border-[#282B31] flex items-center justify-center text-[#F4F4F2] group-hover:bg-[#C8FF55] group-hover:text-[#090A0C] transition-colors">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F4F4F2] group-hover:text-[#C8FF55] transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-[#9B9DA5] group-hover:text-[#C8FF55] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </div>
                  <p className="text-sm text-[#9B9DA5] leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Software Tags (Unboxed inline text with separators per Anti-Slop) */}
                <div className="pt-4 border-t border-[#282B31] flex items-center justify-between text-xs font-mono text-[#9B9DA5]">
                  <div className="flex items-center gap-2">
                    <span>{project.software.slice(0, 2).join(' · ')}</span>
                  </div>
                  <span className="text-[#C8FF55] font-medium group-hover:underline">
                    View Project Details →
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <ProjectDetailModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}
    </section>
  );
};
