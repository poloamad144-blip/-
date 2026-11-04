import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] bg-white dark:bg-[#1A1414] text-[#171212] dark:text-[#F8F3EF] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-stone-300 dark:border-stone-800"
        role="dialog"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-50 dark:bg-[#241C1C]">
          <div>
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#D82935]">
              Curriculum Vitae
            </span>
            <h3 className="font-serif text-2xl font-bold tracking-tight">
              Boles Emad — Creative Director &amp; Senior Designer
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-stone-200/70 dark:bg-stone-800 hover:bg-[#D82935] hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5"
              title="Print / Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-sm">
          {/* Summary */}
          <div className="flex flex-col sm:flex-row gap-5 items-start pb-6 border-b border-stone-200 dark:border-stone-800">
            <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl overflow-hidden border-2 border-[#D82935]/40 shadow-md bg-stone-100 dark:bg-stone-900">
              <img
                src="/assets/aistudio/captain_boles_84690828.jpg"
                alt="Boles Emad - Creative Designer"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-3 flex-1 min-w-0">
              <h4 className="font-serif text-xl font-bold text-[#D82935]">Executive Summary</h4>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-xs sm:text-sm">
                Senior Graphic Designer, Brand Identity Specialist, and Visual Art Director with over 6 years of industry experience creating high-impact visual systems for corporate, luxury, and digital brands. Proven expertise in typography, packaging dielines, cross-platform editorial campaigns, and cinematic video storytelling.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-stone-500 pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D82935]" /> Cairo, Egypt (Available Globally)
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#D82935]" /> poloamad144@gmail.com
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#D82935]" /> +20 120 389 4157
                </span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4 pb-6 border-b border-stone-200 dark:border-stone-800">
            <h4 className="font-serif text-xl font-bold text-[#D82935]">Professional Experience</h4>
            
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <span className="font-bold text-sm text-[#171212] dark:text-white">Senior Graphic Designer &amp; Art Director</span>
                <span className="text-stone-500 font-mono">2021 — Present</span>
              </div>
              <p className="text-xs text-[#8F171F] dark:text-[#D82935] font-semibold">Independent Practice &amp; Agency Collaborations</p>
              <ul className="list-disc list-inside space-y-1 text-xs text-stone-600 dark:text-stone-300">
                <li>Directing comprehensive brand identity systems, guidelines, and corporate stationery suites for 45+ international clients.</li>
                <li>Engineering social media campaigns generating over 5M+ organic impressions through scroll-stopping carousel architectures.</li>
                <li>Preparing commercial print &amp; luxury packaging with specialized foil stamping, blind embossing, and pantone separations.</li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <span className="font-bold text-sm text-[#171212] dark:text-white">Visual Designer &amp; Video Editor</span>
                <span className="text-stone-500 font-mono">2019 — 2021</span>
              </div>
              <p className="text-xs text-[#8F171F] dark:text-[#D82935] font-semibold">Creative Production Studios</p>
              <ul className="list-disc list-inside space-y-1 text-xs text-stone-600 dark:text-stone-300">
                <li>Edited promotional commercial films, motion graphics, and typography trailers using Premiere Pro and After Effects.</li>
                <li>Created vector graphics, custom brand illustrations, and event stage backdrop visuals.</li>
              </ul>
            </div>
          </div>

          {/* Skills & Software */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-stone-200 dark:border-stone-800">
            <div className="space-y-2">
              <h5 className="font-bold text-xs uppercase tracking-wider text-[#D82935]">Software Suite</h5>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Adobe Photoshop (98%)', 'Adobe Illustrator (96%)', 'Adobe InDesign (92%)', 'Adobe Premiere Pro (90%)', 'Adobe After Effects (88%)', 'Figma', 'Lightroom'].map(tool => (
                  <span key={tool} className="px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-[#241C1C] border border-stone-200 dark:border-stone-800">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="font-bold text-xs uppercase tracking-wider text-[#D82935]">Core Disciplines</h5>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Brand Architecture', 'Editorial Typography', 'Packaging & Dielines', 'Motion Graphics', 'Art Direction', 'Color Science', 'Social Media Strategy'].map(item => (
                  <span key={item} className="px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-[#241C1C] border border-stone-200 dark:border-stone-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Connect / Official Links */}
          <div className="space-y-3">
            <h5 className="font-bold text-xs uppercase tracking-wider text-stone-500">Official Profiles</h5>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {SOCIAL_LINKS.map(s => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-[#D82935] flex items-center justify-between group transition-colors"
                >
                  <span className="font-semibold">{s.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#D82935]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-[#241C1C] flex items-center justify-between text-xs">
          <span className="text-stone-500 font-mono">Status: Available for Remote &amp; Worldwide Projects</span>
          <a
            href="https://wa.me/201203894157?text=Hello%20Boles,%20I%20reviewed%20your%20CV%20and%20would%20like%20to%20discuss%20an%20opportunity."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#D82935] hover:bg-[#8F171F] text-white font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            Hire Boles Directly
          </a>
        </div>
      </div>
    </div>
  );
}
