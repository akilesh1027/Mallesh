import React, { useEffect, useState } from 'react';
import { X, Layers, Box, Cpu, ChevronLeft, ChevronRight, Maximize2, RotateCw } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onNext,
  onPrev,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeViewMode, setActiveViewMode] = useState<'render' | 'wireframe' | 'turnaround'>('render');
  const [turnaroundAngle, setTurnaroundAngle] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  // Reset active view when project changes
  useEffect(() => {
    setSelectedImageIndex(0);
    setActiveViewMode('render');
    setTurnaroundAngle(0);
  }, [project?.id]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#090A0C]/90 backdrop-blur-md overflow-y-auto"
    >
      {/* Click outside to dismiss backdrop */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl my-auto bg-[#111317] border border-[#282B31] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#282B31] bg-[#171A20]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#C8FF55] tracking-wider uppercase">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-[#9B9DA5] font-mono">· Completed {project.completionYear}</span>
          </div>

          <div className="flex items-center gap-2">
            {onPrev && (
              <button
                onClick={onPrev}
                aria-label="Previous project"
                className="p-1.5 rounded hover:bg-[#282B31] text-[#9B9DA5] hover:text-[#F4F4F2] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                aria-label="Next project"
                className="p-1.5 rounded hover:bg-[#282B31] text-[#9B9DA5] hover:text-[#F4F4F2] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={onClose}
              aria-label="Close project modal"
              className="p-1.5 ml-2 rounded hover:bg-[#282B31] text-[#9B9DA5] hover:text-[#F4F4F2] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Project Title & Overview */}
          <div>
            <h3
              id="modal-project-title"
              className="text-2xl sm:text-4xl font-extrabold font-heading text-[#F4F4F2] tracking-tight"
            >
              {project.title}
            </h3>
            <p className="mt-3 text-base text-[#9B9DA5] leading-relaxed max-w-3xl">
              {project.overview}
            </p>
          </div>

          {/* Media Showcase with View Mode Toggle */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#9B9DA5] uppercase tracking-wider">
                Artwork Presentation View
              </span>
              <div className="flex items-center gap-1 bg-[#171A20] p-1 rounded-lg border border-[#282B31] text-xs font-mono">
                <button
                  onClick={() => setActiveViewMode('render')}
                  className={`px-3 py-1 rounded transition-colors ${
                    activeViewMode === 'render'
                      ? 'bg-[#C8FF55] text-[#090A0C] font-semibold'
                      : 'text-[#9B9DA5] hover:text-[#F4F4F2]'
                  }`}
                >
                  Final Render
                </button>
                <button
                  onClick={() => setActiveViewMode('wireframe')}
                  className={`px-3 py-1 rounded transition-colors ${
                    activeViewMode === 'wireframe'
                      ? 'bg-[#C8FF55] text-[#090A0C] font-semibold'
                      : 'text-[#9B9DA5] hover:text-[#F4F4F2]'
                  }`}
                >
                  Wireframe/Clay Pass
                </button>
                <button
                  onClick={() => setActiveViewMode('turnaround')}
                  className={`px-3 py-1 rounded transition-colors ${
                    activeViewMode === 'turnaround'
                      ? 'bg-[#C8FF55] text-[#090A0C] font-semibold'
                      : 'text-[#9B9DA5] hover:text-[#F4F4F2]'
                  }`}
                >
                  3D Turntable (360°)
                </button>
              </div>
            </div>

            {/* Main Stage Display */}
            <div className="relative aspect-[16/9] w-full bg-[#090A0C] rounded-xl overflow-hidden border border-[#282B31] flex items-center justify-center">
              {activeViewMode === 'render' && (
                <img
                  src={project.detailImages[selectedImageIndex] || project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              )}

              {activeViewMode === 'wireframe' && (
                <div className="relative w-full h-full flex items-center justify-center bg-[#171A20]">
                  {/* High contrast clay / wireframe pass simulation */}
                  <img
                    src={project.coverImage}
                    alt={`${project.title} Wireframe`}
                    className="w-full h-full object-contain filter invert contrast-125 opacity-75 mix-blend-screen"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-[#090A0C]/80 border border-[#282B31] px-3 py-1 text-xs font-mono text-[#C8FF55] rounded">
                    Subdivision Level 2 · Topology Wireframe
                  </div>
                </div>
              )}

              {activeViewMode === 'turnaround' && (
                <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#090A0C] p-6">
                  <div
                    className="relative w-full h-4/5 flex items-center justify-center transition-transform duration-75 ease-out"
                    style={{
                      transform: `perspective(1000px) rotateY(${turnaroundAngle}deg)`,
                    }}
                  >
                    <img
                      src={project.coverImage}
                      alt={`${project.title} Turnaround`}
                      className="max-h-full max-w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                    />
                  </div>

                  {/* Turntable scrub control */}
                  <div className="w-full max-w-md mt-4 flex items-center gap-3">
                    <RotateCw className="w-4 h-4 text-[#C8FF55]" />
                    <input
                      type="range"
                      min="-180"
                      max="180"
                      value={turnaroundAngle}
                      onChange={(e) => setTurnaroundAngle(Number(e.target.value))}
                      className="w-full h-1.5 bg-[#282B31] rounded-lg appearance-none cursor-pointer accent-[#C8FF55]"
                    />
                    <span className="text-xs font-mono text-[#9B9DA5] w-12 text-right">
                      {turnaroundAngle}°
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Thumbnail selector */}
            {project.detailImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {project.detailImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedImageIndex(idx);
                      setActiveViewMode('render');
                    }}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border transition-all shrink-0 ${
                      selectedImageIndex === idx && activeViewMode === 'render'
                        ? 'border-[#C8FF55] ring-2 ring-[#C8FF55]/20'
                        : 'border-[#282B31] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail preview" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Technical Production Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#282B31]">
            {/* Modelling Process */}
            <div className="p-5 rounded-xl bg-[#171A20] border border-[#282B31] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF55] uppercase tracking-wider">
                <Box className="w-4 h-4" />
                <span>4. Modelling Process</span>
              </div>
              <p className="text-sm text-[#9B9DA5] leading-relaxed">
                {project.modellingProcess}
              </p>
              {project.polyCount && (
                <div className="pt-2 text-xs font-mono text-[#F4F4F2]">
                  <span className="text-[#9B9DA5]">Topology: </span>
                  {project.polyCount}
                </div>
              )}
            </div>

            {/* Texturing Process */}
            <div className="p-5 rounded-xl bg-[#171A20] border border-[#282B31] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF55] uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>5. Texturing Process</span>
              </div>
              <p className="text-sm text-[#9B9DA5] leading-relaxed">
                {project.texturingProcess}
              </p>
              <div className="pt-2 text-xs font-mono text-[#F4F4F2]">
                <span className="text-[#9B9DA5]">PBR Channels: </span>
                Albedo, Normal, Roughness, Metallic, Height
              </div>
            </div>
          </div>

          {/* Software Used & Asset Metadata */}
          <div className="p-5 rounded-xl bg-[#171A20] border border-[#282B31] flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#9B9DA5] mb-2">
                Software & Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {project.software.map((sw) => (
                  <span
                    key={sw}
                    className="px-3 py-1 text-xs font-mono rounded bg-[#111317] border border-[#282B31] text-[#F4F4F2]"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </div>

            {project.dimensions && (
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#9B9DA5] mb-1">
                  Scale / Spec
                </p>
                <p className="text-xs font-mono text-[#C8FF55]">{project.dimensions}</p>
              </div>
            )}
          </div>

          {/* Notice to Malleshwari & Reviewers */}
          <div className="p-4 rounded-lg bg-[#111317] border border-dashed border-[#282B31] text-xs text-[#9B9DA5] flex items-center justify-between">
            <span>
              ℹ️ <strong className="text-[#F4F4F2]">Artist Work Notice:</strong> This project card uses
              sample placeholder artwork structured to represent Malleshwari's pipeline. Easily
              replaced by updating <code className="text-[#C8FF55]">src/data/portfolioData.ts</code>.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
