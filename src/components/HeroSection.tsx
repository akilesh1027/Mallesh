import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { HeroThreeCanvas } from './HeroThreeCanvas';

interface HeroSectionProps {
  onExploreWork: () => void;
  onConnect: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreWork, onConnect }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C8FF55]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Main Hero Split Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Left Column: Typographic Hierarchy */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10">
          {/* Subtle Artist Moniker / Specialization Tag */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#9B9DA5] uppercase">
            <span className="text-[#C8FF55]">00</span>
            <span aria-hidden="true">·</span>
            <span>3D Artist</span>
            <span aria-hidden="true">·</span>
            <span>Visual Storyteller</span>
          </div>

          {/* Primary Name Banner */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-[#F4F4F2] leading-[1.05]">
            <span className="block text-[#C8FF55]">MALLESHWARI</span>
            <span className="block mt-2 text-3xl sm:text-5xl lg:text-6xl text-[#F4F4F2]/90 font-heading font-bold">
              CRAFTING VISUALS.
            </span>
            <span className="block text-3xl sm:text-5xl lg:text-6xl text-[#9B9DA5] font-heading font-bold">
              SHAPING DIMENSIONS.
            </span>
          </h1>

          {/* Supporting Lead Description */}
          <p className="text-base sm:text-lg text-[#9B9DA5] font-normal leading-relaxed max-w-2xl text-balance">
            I'm Malleshwari, a 3D Artist passionate about transforming creative ideas into
            immersive visual experiences through 3D modelling, product visualization,
            environments and texturing.
          </p>

          {/* Key Domain Specializations (Unboxed text with separators per Anti-Slop) */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#9B9DA5] font-mono pt-2">
            <span className="text-[#F4F4F2]">Hard-Surface 3D</span>
            <span aria-hidden="true" className="text-[#282B31]">/</span>
            <span className="text-[#F4F4F2]">PBR Shading</span>
            <span aria-hidden="true" className="text-[#282B31]">/</span>
            <span className="text-[#F4F4F2]">Product Renders</span>
            <span aria-hidden="true" className="text-[#282B31]">/</span>
            <span className="text-[#F4F4F2]">Environment Design</span>
          </div>

          {/* CTA Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onExploreWork}
              className="inline-flex items-center gap-3 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-[#090A0C] bg-[#C8FF55] hover:bg-[#d8ff75] transition-all duration-200 rounded shadow-[0_0_25px_rgba(200,255,85,0.2)] hover:shadow-[0_0_35px_rgba(200,255,85,0.35)]"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onConnect}
              className="inline-flex items-center gap-3 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-[#F4F4F2] bg-[#171A20] hover:bg-[#20242c] border border-[#282B31] hover:border-[#9B9DA5] transition-all duration-200 rounded"
            >
              <span>LET'S CONNECT</span>
              <ArrowUpRight className="w-4 h-4 text-[#C8FF55]" />
            </button>
          </div>
        </div>

        {/* Right Column: Three.js Interactive Kinetic Visual */}
        <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[460px] lg:h-[560px] flex items-center justify-center">
          <HeroThreeCanvas />
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="flex items-center justify-between pt-8 border-t border-[#282B31]/60 text-xs text-[#9B9DA5] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C8FF55]" />
          <span>CURRENTLY: 3D ARTIST AT LSC</span>
        </div>

        <button
          onClick={onExploreWork}
          className="group flex items-center gap-2 hover:text-[#C8FF55] transition-colors"
        >
          <span className="tracking-widest uppercase">Scroll To Discover</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
