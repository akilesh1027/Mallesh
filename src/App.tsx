/**
 * MALLESHWARI — Premium 3D Artist Portfolio Website
 * Dark Cinematic 3D Artist Portfolio for Malleshwari
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WorksSection } from './components/WorksSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CreativeInterestsSection } from './components/CreativeInterestsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'works',
      'skills',
      'experience',
      'creative-interests',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0C] text-[#F4F4F2] selection:bg-[#C8FF55] selection:text-[#090A0C] font-sans antialiased">
      {/* Sticky Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main>
        {/* Hero Section with Interactive Three.js 3D kinetic object */}
        <HeroSection
          onExploreWork={() => handleNavigate('works')}
          onConnect={() => handleNavigate('contact')}
        />

        {/* Behind The Creation: About Me Section */}
        <AboutSection />

        {/* Selected Creations: Portfolio Gallery Showcase & Detail Lightbox */}
        <WorksSection />

        {/* Tools of My Craft: Software & Technical Skills */}
        <SkillsSection />

        {/* My Creative Journey: Professional Experience at LSC with Dynamic Duration */}
        <ExperienceSection />

        {/* Beyond the Digital World: Creative Traditional Arts */}
        <CreativeInterestsSection />

        {/* Initiate Collaboration: Contact Section */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
