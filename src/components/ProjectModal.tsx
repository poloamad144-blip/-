import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#F8F3EF] dark:bg-[#1A1414] text-[#171212] dark:text-[#F8F3EF] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-stone-300/60 dark:border-stone-800"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between sticky top-0 bg-[#F8F3EF]/95 dark:bg-[#1A1414]/95 backdrop-blur-sm z-10">
          <div>
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#D82935] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {project.categoryLabel}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight mt-0.5">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors text-stone-600 dark:text-stone-300"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main Visual Asset */}
          <div className="rounded-2xl overflow-hidden bg-black aspect-video max-h-96 w-full relative shadow-md">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 font-mono">
                Client: {project.client}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#D82935] font-semibold">
                {project.year}
              </span>
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-stone-200 dark:border-stone-800 text-xs">
            <div>
              <span className="text-stone-500 uppercase tracking-wider block font-medium">Client</span>
              <span className="font-bold text-sm">{project.client}</span>
            </div>
            <div>
              <span className="text-stone-500 uppercase tracking-wider block font-medium">Year</span>
              <span className="font-bold text-sm">{project.year}</span>
            </div>
            <div>
              <span className="text-stone-500 uppercase tracking-wider block font-medium">Role</span>
              <span className="font-bold text-sm">Lead Art Director</span>
            </div>
            <div>
              <span className="text-stone-500 uppercase tracking-wider block font-medium">Deliverables</span>
              <span className="font-bold text-sm">{project.deliverables}</span>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h4 className="font-serif text-xl font-bold">Art Direction &amp; Concept</h4>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#241C1C] border border-stone-200/60 dark:border-stone-800/80 space-y-2">
              <div className="flex items-center gap-2 text-[#8F171F] dark:text-[#D82935] font-bold text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-current"></span>
                The Brand Challenge
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#241C1C] border border-stone-200/60 dark:border-stone-800/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" />
                The Strategic Solution
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-200/70 dark:bg-[#241C1C] text-stone-700 dark:text-stone-300 border border-stone-300/40 dark:border-stone-800"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer Call to Action */}
          <div className="pt-4 flex items-center justify-between border-t border-stone-200 dark:border-stone-800">
            <span className="text-xs text-stone-500">
              Need a similar bespoke system for your enterprise?
            </span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#D82935] hover:bg-[#8F171F] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg hover:shadow-red-900/30"
            >
              <span>Explore Live Showcase</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
