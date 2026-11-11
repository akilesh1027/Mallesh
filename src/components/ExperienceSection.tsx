import React, { useMemo } from 'react';
import { Briefcase, Calendar, Clock, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { calculateExperience } from '../utils/experience';

export const ExperienceSection: React.FC = () => {
  // Dynamically calculate duration from 05 March 2026 using the current date
  const experience = useMemo(() => {
    return calculateExperience(PROFILE_DATA.joiningDate, new Date());
  }, []);

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#282B31]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF55] tracking-widest uppercase mb-3">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>Career & Industry Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-[#F4F4F2]">
            MY CREATIVE JOURNEY.
          </h2>
        </div>
        <p className="text-sm text-[#9B9DA5] max-w-md font-mono">
          Professional industry tenure dynamically computed in real-time.
        </p>
      </div>

      {/* Main Experience Showcase Container */}
      <div className="max-w-4xl mx-auto">
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#282B31]">
          {/* Active Timeline Node Marker */}
          <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#111317] border-2 border-[#C8FF55] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C8FF55]" />
          </div>

          {/* Primary Experience Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#171A20] border border-[#282B31] shadow-xl space-y-6">
            {/* Top Bar with Status and Dynamic Duration */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#282B31]">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#111317] border border-[#282B31] text-xs font-mono font-medium text-[#C8FF55] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF55]" />
                  {PROFILE_DATA.status}
                </span>
                <span className="text-xs font-mono text-[#9B9DA5] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{PROFILE_DATA.location}</span>
                </span>
              </div>

              {/* Dynamic Experience Badge (Strictly calculated, never hardcoded) */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#111317] border border-[#282B31] text-xs font-mono text-[#F4F4F2]">
                <Clock className="w-3.5 h-3.5 text-[#C8FF55]" />
                <span className="text-[#9B9DA5]">Duration:</span>
                <strong className="text-[#C8FF55]">{experience.formatted}</strong>
              </div>
            </div>

            {/* Position & Organization */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#9B9DA5] uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#C8FF55]" />
                <span>{PROFILE_DATA.company}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#F4F4F2]">
                {PROFILE_DATA.companyDesignation}
              </h3>
            </div>

            {/* Exact Description Provided */}
            <p className="text-base sm:text-lg text-[#9B9DA5] leading-relaxed">
              "Working as a 3D Artist at the Logistics Sector Skill Council, contributing to creative
              and visual production projects while developing practical expertise in 3D modelling and
              digital visualization."
            </p>

            {/* Structured Journey Specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#282B31] text-xs font-mono">
              <div className="p-4 rounded-lg bg-[#111317] border border-[#282B31]/80 space-y-1">
                <span className="text-[#9B9DA5]">Joining Date</span>
                <p className="text-sm font-semibold text-[#F4F4F2] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C8FF55]" />
                  {PROFILE_DATA.joiningDateString}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111317] border border-[#282B31]/80 space-y-1">
                <span className="text-[#9B9DA5]">Core Production</span>
                <p className="text-sm font-semibold text-[#F4F4F2]">
                  3D Assets & Visualization
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111317] border border-[#282B31]/80 space-y-1">
                <span className="text-[#9B9DA5]">Total Service Days</span>
                <p className="text-sm font-semibold text-[#C8FF55] tabular-nums">
                  {experience.totalDays} Days Active
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
