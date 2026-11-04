import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { renderSocialIcon } from './SocialIcons';
import { MessageCircle, Share2, X } from 'lucide-react';

export function LeftSocialBar() {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  return (
    <>
      {/* Desktop Vertical Fixed Sidebar (Left) */}
      <aside 
        aria-label="Social Profiles Navigation"
        className="fixed left-3 2xl:left-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-4 text-stone-400 dark:text-stone-400 select-none pointer-events-auto"
      >
        {/* Top Connecting Line */}
        <div className="w-[1.5px] h-12 bg-gradient-to-b from-transparent via-stone-400/30 dark:via-stone-700/50 to-[#D82935]/50 rounded-full"></div>

        {/* Social Icons Container with Floating Pill Backdrop */}
        <div className="flex flex-col items-center gap-3 p-2 rounded-full bg-white/90 dark:bg-[#1A1414]/90 backdrop-blur-md border border-stone-200/80 dark:border-stone-800 shadow-xl">
          {SOCIAL_LINKS.map((social) => (
            <div key={social.id} className="relative group flex items-center">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${social.name} - ${social.username}`}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-115 relative shadow-sm hover:shadow-lg"
              >
                {renderSocialIcon(social.id, 'w-8 h-8', true)}
              </a>

              {/* Tooltip Label on Hover (Floats to the right of the icon) */}
              <div className="absolute left-12 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 translate-x-1 group-hover:translate-x-0 z-50 whitespace-nowrap">
                <div className="px-2.5 py-1 rounded-md bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 text-[11px] font-semibold shadow-xl border border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: social.color }}></span>
                  <span>{social.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Connecting Line */}
        <div className="w-[1.5px] h-10 bg-gradient-to-t from-transparent via-stone-400/30 dark:via-stone-700/50 to-[#D82935]/50 rounded-full"></div>

        {/* Vertical Decorative Typography */}
        <div className="py-1 flex flex-col items-center">
          <span className="[writing-mode:vertical-rl] text-[9px] uppercase tracking-[0.25em] text-stone-400 dark:text-stone-500 font-medium hover:text-[#D82935] transition-colors cursor-default">
            Socials
          </span>
        </div>
      </aside>

      {/* Mobile Floating Social Launcher Button (Bottom-Left) */}
      <div className="fixed left-4 bottom-5 z-40 xl:hidden">
        {mobileExpanded && (
          <div className="mb-3 flex flex-col items-center gap-2.5 p-2 rounded-2xl bg-white/95 dark:bg-[#1A1414]/95 backdrop-blur-xl border border-stone-200 dark:border-stone-800 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform active:scale-95 shadow-sm hover:scale-105"
                title={social.name}
              >
                {renderSocialIcon(social.id, 'w-9 h-9', true)}
              </a>
            ))}
          </div>
        )}

        <button
          onClick={() => setMobileExpanded(!mobileExpanded)}
          className="w-12 h-12 rounded-full bg-[#171212] dark:bg-[#D82935] text-white shadow-xl flex items-center justify-center border border-white/10 active:scale-95 transition-all"
          aria-label="Toggle Social Accounts"
        >
          {mobileExpanded ? <X className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
        </button>
      </div>
    </>
  );
}
