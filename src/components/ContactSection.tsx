import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare, Linkedin, Globe } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage('Please fill in your name, email, and message.');
      return;
    }

    // Build mailto URI to directly dispatch through the user's desktop/mobile email client
    const subjectLine = encodeURIComponent(
      formData.subject.trim()
        ? `[Portfolio Inquiry] ${formData.subject.trim()}`
        : `[Portfolio Inquiry] 3D Art Collaboration from ${formData.name.trim()}`
    );

    const bodyText = encodeURIComponent(
      `Hi Malleshwari,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}\n\n---\nSent via Malleshwari 3D Artist Portfolio`
    );

    const mailtoUrl = `mailto:${PROFILE_DATA.email}?subject=${subjectLine}&body=${bodyText}`;

    // Open user's email application
    window.location.href = mailtoUrl;

    setStatusMessage(
      'Opening your email client to dispatch the message directly to domamalleshwari@gmail.com.'
    );
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#282B31]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF55] tracking-widest uppercase mb-3">
            <span>06</span>
            <span aria-hidden="true">·</span>
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-[#F4F4F2]">
            LET'S CREATE SOMETHING EXTRAORDINARY.
          </h2>
        </div>
        <p className="text-sm text-[#9B9DA5] max-w-md font-mono">
          Open for freelance 3D modelling, product visualization, environment design, and studio roles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Inquiries & Social Presence */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading text-[#F4F4F2]">
              Direct Inquiries
            </h3>
            <p className="text-sm sm:text-base text-[#9B9DA5] leading-relaxed">
              "Have a creative project, collaboration or opportunity? I'd love to hear from you."
            </p>
          </div>

          {/* Quick Email Contact Card */}
          <div className="p-6 rounded-xl bg-[#171A20] border border-[#282B31] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#9B9DA5]">
                Primary Contact
              </span>
              <span className="text-xs font-mono text-[#C8FF55]">Direct Inbox</span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-lg bg-[#111317] border border-[#282B31]">
              <span className="text-sm font-mono text-[#F4F4F2] select-all truncate">
                {PROFILE_DATA.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#171A20] hover:bg-[#282B31] text-xs font-mono text-[#C8FF55] transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <a
              href={`mailto:${PROFILE_DATA.email}?subject=Collaboration%20Inquiry%20-%203D%20Artist%20Malleshwari`}
              className="inline-flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold tracking-wider text-[#090A0C] bg-[#C8FF55] hover:bg-[#d8ff75] transition-colors rounded shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>SEND AN EMAIL DIRECTLY</span>
            </a>
          </div>

          {/* Professional Profiles */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9B9DA5]">
              Professional Platforms
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 rounded-lg bg-[#171A20] border border-[#282B31] hover:border-[#C8FF55]/60 transition-colors flex items-center justify-between text-xs font-mono"
              >
                <span className="text-[#F4F4F2]">LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-[#9B9DA5] group-hover:text-[#C8FF55] transition-colors" />
              </a>

              <a
                href={PROFILE_DATA.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 rounded-lg bg-[#171A20] border border-[#282B31] hover:border-[#C8FF55]/60 transition-colors flex items-center justify-between text-xs font-mono"
              >
                <span className="text-[#F4F4F2]">Behance</span>
                <ArrowUpRight className="w-4 h-4 text-[#9B9DA5] group-hover:text-[#C8FF55] transition-colors" />
              </a>

              <a
                href={PROFILE_DATA.socials.artstation}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 rounded-lg bg-[#171A20] border border-[#282B31] hover:border-[#C8FF55]/60 transition-colors flex items-center justify-between text-xs font-mono"
              >
                <span className="text-[#F4F4F2]">ArtStation</span>
                <ArrowUpRight className="w-4 h-4 text-[#9B9DA5] group-hover:text-[#C8FF55] transition-colors" />
              </a>
            </div>
            <p className="text-[11px] text-[#9B9DA5] font-mono">
              Note: Social profiles can be linked directly or updated in <code className="text-[#C8FF55]">portfolioData.ts</code>.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-2xl bg-[#171A20] border border-[#282B31] space-y-6"
          >
            <div className="space-y-1">
              <h3 className="text-xl font-bold font-heading text-[#F4F4F2]">
                Compose Project Brief
              </h3>
              <p className="text-xs text-[#9B9DA5] font-mono">
                Fill details below. Clicking Send formats and launches your preferred email client.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="contact-name" className="block text-xs font-mono text-[#9B9DA5] uppercase">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Henderson"
                  className="w-full px-4 py-3 rounded-lg bg-[#111317] border border-[#282B31] text-sm text-[#F4F4F2] placeholder-[#9B9DA5]/40 focus:outline-none focus:border-[#C8FF55] transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="contact-email" className="block text-xs font-mono text-[#9B9DA5] uppercase">
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-lg bg-[#111317] border border-[#282B31] text-sm text-[#F4F4F2] placeholder-[#9B9DA5]/40 focus:outline-none focus:border-[#C8FF55] transition-colors"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <label htmlFor="contact-subject" className="block text-xs font-mono text-[#9B9DA5] uppercase">
                Project Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. 3D Product Visualization / Asset Modelling"
                className="w-full px-4 py-3 rounded-lg bg-[#111317] border border-[#282B31] text-sm text-[#F4F4F2] placeholder-[#9B9DA5]/40 focus:outline-none focus:border-[#C8FF55] transition-colors"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="contact-message" className="block text-xs font-mono text-[#9B9DA5] uppercase">
                Project Scope / Message *
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your 3D project requirements, timelines, deliverables, or visual goals..."
                className="w-full px-4 py-3 rounded-lg bg-[#111317] border border-[#282B31] text-sm text-[#F4F4F2] placeholder-[#9B9DA5]/40 focus:outline-none focus:border-[#C8FF55] transition-colors resize-none"
              />
            </div>

            {/* Feedback message */}
            {statusMessage && (
              <div className="p-3.5 rounded-lg bg-[#111317] border border-[#C8FF55]/40 text-xs font-mono text-[#C8FF55]">
                {statusMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 text-xs font-semibold tracking-wider text-[#090A0C] bg-[#C8FF55] hover:bg-[#d8ff75] transition-all rounded shadow-[0_0_20px_rgba(200,255,85,0.2)]"
            >
              <Send className="w-4 h-4" />
              <span>SEND MESSAGE VIA EMAIL</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
