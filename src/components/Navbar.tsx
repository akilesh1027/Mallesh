import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'works', label: 'WORKS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090A0C]/90 backdrop-blur-md border-b border-[#282B31] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('hero');
          }}
          className="group flex items-center gap-2 text-xl font-bold font-display tracking-tight text-[#F4F4F2] hover:text-[#C8FF55] transition-colors whitespace-nowrap shrink-0"
        >
          <span className="tracking-wider">MALLESHWARI</span>
          <span className="text-xs text-[#C8FF55] font-mono group-hover:translate-x-0.5 transition-transform">®</span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest text-[#9B9DA5]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative py-1 transition-colors hover:text-[#F4F4F2] whitespace-nowrap shrink-0 ${
                  isActive ? 'text-[#F4F4F2] font-semibold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8FF55] transition-all" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single primary action CTA & Mobile trigger */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => handleLinkClick('contact')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider text-[#090A0C] bg-[#C8FF55] hover:bg-[#d8ff75] transition-all duration-200 rounded whitespace-nowrap shadow-sm hover:shadow-[0_0_20px_rgba(200,255,85,0.25)]"
          >
            <span>LET'S CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden p-2 text-[#F4F4F2] hover:text-[#C8FF55] transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090A0C]/98 border-b border-[#282B31] px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-4 text-sm font-medium tracking-widest">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between py-2.5 text-left border-b border-[#282B31]/60 transition-colors ${
                    isActive ? 'text-[#C8FF55] font-semibold' : 'text-[#9B9DA5] hover:text-[#F4F4F2]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF55]" />}
                </button>
              );
            })}
            <button
              onClick={() => handleLinkClick('contact')}
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold tracking-wider text-[#090A0C] bg-[#C8FF55] rounded"
            >
              <span>LET'S CONNECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
