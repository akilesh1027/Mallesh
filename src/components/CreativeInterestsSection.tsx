import React from 'react';
import { Pencil, Palette, Sparkles, Feather } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const CreativeInterestsSection: React.FC = () => {
  return (
    <section
      id="creative-interests"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#282B31]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF55] tracking-widest uppercase mb-3">
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span>Traditional Fine Arts</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-[#F4F4F2]">
            BEYOND THE DIGITAL WORLD.
          </h2>
        </div>
        <p className="text-sm text-[#9B9DA5] max-w-md font-mono">
          Traditional art disciplines shaping tactile intuition, structural anatomy, and light falloffs.
        </p>
      </div>

      {/* Featured Artistic Flatlay Artwork Banner */}
      <div className="relative rounded-2xl overflow-hidden border border-[#282B31] bg-[#111317] aspect-[21/9] max-h-[420px] mb-12 group">
        <img
          src="/src/assets/images/traditional_art_craft_1794376829793.jpg"
          alt="Traditional Art Studio: Charcoal Sketches, Acrylics & Handmade Sculptures"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/40 to-transparent pointer-events-none" />

        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C8FF55]">
              Fine Arts Foundation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F4F4F2]">
              Tangible Craftsmanship Informs Digital Precision
            </h3>
          </div>
          <span className="text-xs font-mono text-[#9B9DA5] bg-[#090A0C]/80 px-3 py-1.5 rounded border border-[#282B31] backdrop-blur-sm">
            Charcoal · Acrylic · Clay Sculpting
          </span>
        </div>
      </div>

      {/* Three Artistic Discipline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROFILE_DATA.creativeInterests.map((interest, idx) => (
          <div
            key={interest.title}
            className="p-8 rounded-xl bg-[#171A20] border border-[#282B31] hover:border-[#C8FF55]/40 transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#C8FF55]">
                  0{idx + 1}
                </span>
                <span className="text-xs font-mono text-[#9B9DA5] uppercase">
                  {interest.subtitle}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-[#F4F4F2] tracking-tight">
                {interest.title}
              </h3>

              <p className="text-sm text-[#9B9DA5] leading-relaxed">
                {interest.description}
              </p>
            </div>

            {/* Unboxed skill tags with separators per anti-slop */}
            <div className="pt-4 border-t border-[#282B31] flex flex-wrap items-center gap-2 text-xs font-mono text-[#F4F4F2]">
              {interest.skills.map((skill, sIdx) => (
                <React.Fragment key={skill}>
                  {sIdx > 0 && <span className="text-[#282B31]">·</span>}
                  <span>{skill}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
