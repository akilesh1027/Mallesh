import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Sparkles, Terminal, Box, Layers, Paintbrush, Film, Pencil } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case '3D Modelling':
        return <Box className="w-4 h-4 text-[#C8FF55]" />;
      case 'Texturing & Shading':
        return <Layers className="w-4 h-4 text-[#C8FF55]" />;
      case 'Graphic Design':
        return <Paintbrush className="w-4 h-4 text-[#C8FF55]" />;
      case 'Video & Motion':
        return <Film className="w-4 h-4 text-[#C8FF55]" />;
      default:
        return <Pencil className="w-4 h-4 text-[#C8FF55]" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#282B31]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF55] tracking-widest uppercase mb-3">
            <span>03</span>
            <span aria-hidden="true">·</span>
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-[#F4F4F2]">
            TOOLS OF MY CRAFT.
          </h2>
        </div>
        <p className="text-sm text-[#9B9DA5] max-w-md font-mono">
          Industry-standard 3D production pipelines, texturing engines, and creative multimedia applications.
        </p>
      </div>

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            className="p-6 rounded-xl bg-[#171A20] border border-[#282B31] hover:border-[#383C45] transition-all flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#282B31]/80 mb-5">
                <div className="flex items-center gap-2.5">
                  {getCategoryIcon(cat.title)}
                  <h3 className="text-base font-bold font-heading text-[#F4F4F2]">{cat.title}</h3>
                </div>
                <span className="text-[11px] font-mono text-[#9B9DA5]">{cat.category}</span>
              </div>

              {/* Tools List */}
              <div className="space-y-4">
                {cat.tools.map((tool) => (
                  <div key={tool.name} className="group flex items-start gap-3.5">
                    {/* Tool Icon / Brand Badge */}
                    <div className="w-9 h-9 rounded-lg bg-[#111317] border border-[#282B31] flex items-center justify-center shrink-0 group-hover:border-[#C8FF55]/40 transition-colors">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 fill-current text-[#F4F4F2] group-hover:text-[#C8FF55] transition-colors"
                      >
                        <path d={tool.iconSvg} />
                      </svg>
                    </div>

                    {/* Tool Details */}
                    <div className="space-y-0.5">
                      <p className="text-sm font-semibold text-[#F4F4F2] group-hover:text-[#C8FF55] transition-colors">
                        {tool.name}
                      </p>
                      <p className="text-xs text-[#9B9DA5] leading-relaxed">
                        {tool.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pipeline Stage Tag */}
            <div className="mt-6 pt-4 border-t border-[#282B31]/60 flex items-center justify-between text-[11px] font-mono text-[#9B9DA5]">
              <span>Active Pipeline Tooling</span>
              <span className="text-[#C8FF55]">Verified Workflow</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
