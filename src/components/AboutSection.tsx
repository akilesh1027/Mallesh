import React, { useState } from 'react';
import { Camera, GraduationCap, Briefcase, Building, Palette, Upload, Check } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string>(
    '/src/assets/images/artist_profile_photo_1794376829420.jpg'
  );
  const [isCustomPhoto, setIsCustomPhoto] = useState(false);

  const handleCustomPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
      setIsCustomPhoto(true);
    }
  };

  const handleResetPhoto = () => {
    setPhotoUrl('/src/assets/images/artist_profile_photo_1794376829420.jpg');
    setIsCustomPhoto(false);
  };

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#282B31]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF55] tracking-widest uppercase mb-3">
            <span>01</span>
            <span aria-hidden="true">·</span>
            <span>Identity & Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-[#F4F4F2]">
            BEHIND THE CREATION.
          </h2>
        </div>
        <p className="text-sm text-[#9B9DA5] max-w-md font-mono">
          Visual Communication graduate bridging traditional craftsmanship with contemporary 3D digital art.
        </p>
      </div>

      {/* Two-Column Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Photograph Placeholder with Artist Framing */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative group overflow-hidden rounded-xl border border-[#282B31] bg-[#171A20] aspect-[3/4]">
            <img
              src={photoUrl}
              alt="Malleshwari - 3D Visual Artist Portrait"
              className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              onError={(e) => {
                // Resilient CSS Fallback if file load encounters any sandbox issue
                e.currentTarget.style.display = 'none';
              }}
            />

            {/* Subtle Gradient Scrim at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-transparent opacity-80 pointer-events-none" />

            {/* Corner Bracket Editorial Frame */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#C8FF55]/60 pointer-events-none" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#C8FF55]/60 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#C8FF55]/60 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#C8FF55]/60 pointer-events-none" />

            {/* Photo Caption Overlay */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-[#F4F4F2]">
              <div>
                <p className="font-semibold tracking-wider font-display">MALLESHWARI</p>
                <p className="text-[11px] text-[#9B9DA5] font-mono">3D Visual Artist · India</p>
              </div>
              <label
                className="cursor-pointer inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-[#111317]/90 border border-[#282B31] text-[11px] text-[#C8FF55] hover:bg-[#282B31] transition-colors"
                title="Replace with your photograph"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>{isCustomPhoto ? 'Change Photo' : 'Upload Photo'}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCustomPhotoUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Reset link if custom photo is loaded */}
          {isCustomPhoto && (
            <div className="flex justify-end">
              <button
                onClick={handleResetPhoto}
                className="text-xs text-[#9B9DA5] hover:text-[#C8FF55] underline transition-colors"
              >
                Reset to default portrait
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Bio Narrative and Structured Info */}
        <div className="lg:col-span-7 space-y-8">
          {/* Narrative Paragraphs */}
          <div className="space-y-4 text-base sm:text-lg text-[#9B9DA5] leading-relaxed">
            <p className="text-[#F4F4F2] font-medium text-lg sm:text-xl leading-relaxed">
              "I'm Malleshwari, a 3D Artist with a background in Visual Communication. I enjoy
              exploring creativity through digital design and traditional art. My interests include 3D
              modelling, material creation, product visualization, environment design, drawing,
              painting and crafting."
            </p>
            <p>
              Currently, I work as a 3D Artist at the Logistics Sector Skill Council, where I continue
              developing my creative and technical capabilities through professional projects.
            </p>
            <p className="italic text-[#C8FF55]">
              "I believe every creative idea has the potential to become an engaging visual experience."
            </p>
          </div>

          {/* Key Information Cards (Editorial Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#282B31]">
            {/* Education */}
            <div className="p-5 rounded-lg bg-[#171A20] border border-[#282B31] flex items-start gap-4">
              <div className="p-2.5 rounded bg-[#111317] text-[#C8FF55] border border-[#282B31]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#9B9DA5]">Education</p>
                <p className="text-sm font-semibold text-[#F4F4F2] mt-1">{PROFILE_DATA.education}</p>
                <p className="text-xs text-[#9B9DA5] mt-0.5">Foundational Visual Arts & Aesthetics</p>
              </div>
            </div>

            {/* Profession */}
            <div className="p-5 rounded-lg bg-[#171A20] border border-[#282B31] flex items-start gap-4">
              <div className="p-2.5 rounded bg-[#111317] text-[#C8FF55] border border-[#282B31]">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#9B9DA5]">Profession</p>
                <p className="text-sm font-semibold text-[#F4F4F2] mt-1">3D Artist</p>
                <p className="text-xs text-[#9B9DA5] mt-0.5">Modelling · Texturing · Lighting</p>
              </div>
            </div>

            {/* Organization */}
            <div className="p-5 rounded-lg bg-[#171A20] border border-[#282B31] flex items-start gap-4">
              <div className="p-2.5 rounded bg-[#111317] text-[#C8FF55] border border-[#282B31]">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#9B9DA5]">Organization</p>
                <p className="text-sm font-semibold text-[#F4F4F2] mt-1">{PROFILE_DATA.company}</p>
                <p className="text-xs text-[#9B9DA5] mt-0.5">Chennai / India · Active Role</p>
              </div>
            </div>

            {/* Creative Interests */}
            <div className="p-5 rounded-lg bg-[#171A20] border border-[#282B31] flex items-start gap-4">
              <div className="p-2.5 rounded bg-[#111317] text-[#C8FF55] border border-[#282B31]">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#9B9DA5]">Creative Interests</p>
                <p className="text-sm font-semibold text-[#F4F4F2] mt-1">Drawing, Painting & Crafting</p>
                <p className="text-xs text-[#9B9DA5] mt-0.5">Traditional Fine Arts & Tactile Media</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
