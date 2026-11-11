import React from 'react';
import { ArrowUp, Mail, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#282B31] bg-[#090A0C] text-[#9B9DA5] py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand Lockup */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold font-display tracking-tight text-[#F4F4F2]">
              {PROFILE_DATA.brandName}
            </span>
          </div>
          <p className="text-xs font-mono text-[#9B9DA5]">
            3D Artist | Visual Storyteller · B.Sc. Visual Communication
          </p>
          <p className="text-xs text-[#9B9DA5]/70 pt-1 font-mono">
            © 2026 Malleshwari. All Rights Reserved.
          </p>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
          <button
            onClick={() => onNavigate('hero')}
            className="hover:text-[#F4F4F2] transition-colors"
          >
            HOME
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="hover:text-[#F4F4F2] transition-colors"
          >
            ABOUT
          </button>
          <button
            onClick={() => onNavigate('works')}
            className="hover:text-[#F4F4F2] transition-colors"
          >
            WORKS
          </button>
          <button
            onClick={() => onNavigate('skills')}
            className="hover:text-[#F4F4F2] transition-colors"
          >
            SKILLS
          </button>
          <button
            onClick={() => onNavigate('experience')}
            className="hover:text-[#F4F4F2] transition-colors"
          >
            EXPERIENCE
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-[#F4F4F2] transition-colors"
          >
            CONTACT
          </button>
        </div>

        {/* Action & Back to top */}
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="p-2.5 rounded-lg bg-[#171A20] border border-[#282B31] text-[#F4F4F2] hover:text-[#C8FF55] hover:border-[#C8FF55]/60 transition-colors"
            title="Email Malleshwari"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#171A20] border border-[#282B31] text-xs font-mono text-[#F4F4F2] hover:border-[#C8FF55]/60 hover:text-[#C8FF55] transition-colors"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
