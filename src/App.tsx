import React, { useState, useEffect } from 'react';
import {
  PORTFOLIO_PROJECTS,
  CREATIVE_SERVICES,
  CREATIVE_TOOLS,
  SOCIAL_LINKS,
  Project
} from './data/portfolioData';
import { LeftSocialBar } from './components/LeftSocialBar';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { renderSocialIcon, FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from './components/SocialIcons';
import {
  Moon,
  Sun,
  Download,
  ArrowUpRight,
  ArrowRight,
  ArrowDownRight,
  Menu,
  X,
  Sparkles,
  CheckCircle2,
  Compass,
  Send,
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  ArrowUp,
  Layers,
  Award,
  Clock,
  ExternalLink,
  MessageCircle,
  Eye,
  Filter
} from 'lucide-react';

export default function App() {
  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('boles_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Mobile menu drawer
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active section spy
  const [activeSection, setActiveSection] = useState('home');

  // Filter state
  const [activeFilter, setActiveFilter] = useState<'all' | 'branding' | 'social' | 'packaging' | 'video'>('all');

  // Selected project modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // CV / Resume modal
  const [cvModalOpen, setCvModalOpen] = useState(false);

  // Back to top button visibility
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Brand Identity',
    budget: '$3,000 - $5,000',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // Toggle theme handler
  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
        localStorage.setItem('boles_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
        localStorage.setItem('boles_theme', 'light');
      }
      return next;
    });
  };

  // Sync theme with html document element on mount and state change
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('boles_theme', 'dark');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('boles_theme', 'light');
    }
  }, [isDark]);

  // Scroll listener for active section and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 400);

      const sectionIds = ['home', 'about', 'tools', 'services', 'work', 'contact'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 180;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filtered projects
  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeFilter);

  // Copy helper
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  // Form submit handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) errors.fullName = 'Please enter your name.';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid email is required.';
    if (!formData.message.trim()) errors.message = 'Please provide brief project details.';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        projectType: 'Brand Identity',
        budget: '$3,000 - $5,000',
        message: ''
      });
      setTimeout(() => setShowToast(false), 5000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F8F3EF] dark:bg-[#120E0E] text-[#171212] dark:text-[#F8F3EF] transition-colors duration-300 font-sans selection:bg-[#D82935] selection:text-white">
      
      {/* Fixed Left Social Bar (Desktop & Mobile) as requested */}
      <LeftSocialBar />

      {/* Floating Navigation Header */}
      <header className="fixed top-4 md:top-6 inset-x-0 z-40 flex justify-center px-4 xl:pl-20 2xl:pl-24 pointer-events-none">
        <nav className="w-full max-w-6xl bg-[#F8F3EF]/95 dark:bg-[#1A1414]/95 backdrop-blur-md border border-stone-300/60 dark:border-stone-800 rounded-full py-2.5 px-4 md:px-6 shadow-md flex items-center justify-between transition-all duration-300 pointer-events-auto">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-1 group">
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#171212] dark:text-[#F8F3EF] group-hover:text-[#D82935] transition-colors">
              Boles<span className="text-[#D82935]">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-stone-700 dark:text-stone-300">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'tools', label: 'Tools' },
              { id: 'services', label: 'Services' },
              { id: 'work', label: 'Work' },
              { id: 'contact', label: 'Contact' },
            ].map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`px-4 py-1.5 rounded-full transition-all text-xs uppercase tracking-wider font-semibold ${
                    activeSection === link.id
                      ? 'bg-[#D82935] text-white shadow-sm'
                      : 'hover:text-[#D82935]'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Interactive Dual-Theme Switcher Pill */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1 p-1 rounded-full border border-stone-300 dark:border-stone-800 bg-stone-200/70 dark:bg-stone-900/80 transition-all cursor-pointer shadow-inner"
              aria-label="Toggle Dark / Light Theme"
              title={isDark ? 'الوضع الداكن مفعّل - انقر للتحويل للفاتح' : 'الوضع الفاتح مفعّل - انقر للتحويل للداكن'}
            >
              <span
                className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${
                  !isDark
                    ? 'bg-amber-400 text-stone-900 shadow-md scale-105'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                title="Light Mode (نهاري)"
              >
                <Sun className="w-3.5 h-3.5" />
              </span>
              <span
                className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${
                  isDark
                    ? 'bg-[#D82935] text-white shadow-md scale-105'
                    : 'text-stone-500 hover:text-stone-700'
                }`}
                title="Dark Mode (ليلي)"
              >
                <Moon className="w-3.5 h-3.5" />
              </span>
            </button>

            {/* Download CV Modal Trigger */}
            <button
              onClick={() => setCvModalOpen(true)}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-stone-300 dark:border-stone-800 text-xs font-semibold uppercase tracking-wider hover:border-[#D82935] hover:text-[#D82935] transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>View CV</span>
            </button>

            {/* Direct HTML Download Link */}
            <a
              href="/boles-emad-portfolio.html"
              download="boles-emad-portfolio.html"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-stone-300 dark:border-stone-800 text-xs font-semibold uppercase tracking-wider hover:border-emerald-500 hover:text-emerald-500 transition-all text-stone-600 dark:text-stone-300"
              title="تحميل كود الموقع بالكامل بصيغة ملف HTML مستقل"
            >
              <Download className="w-3.5 h-3.5 text-emerald-500" />
              <span>تحميل HTML</span>
            </a>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#171212] dark:bg-[#D82935] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#D82935] dark:hover:bg-[#8F171F] transition-all shadow-sm"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger & Compact Theme Switch */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-0.5 p-1 rounded-full border border-stone-300 dark:border-stone-800 bg-stone-200/70 dark:bg-stone-900/80 transition-all"
              aria-label="Toggle Theme"
            >
              <span
                className={`flex items-center justify-center w-5 h-5 rounded-full transition-all ${
                  !isDark ? 'bg-amber-400 text-stone-900 shadow-sm' : 'text-stone-400'
                }`}
              >
                <Sun className="w-3 h-3" />
              </span>
              <span
                className={`flex items-center justify-center w-5 h-5 rounded-full transition-all ${
                  isDark ? 'bg-[#D82935] text-white shadow-sm' : 'text-stone-500'
                }`}
              >
                <Moon className="w-3 h-3" />
              </span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-full text-stone-800 dark:text-stone-200 focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#171212]/95 backdrop-blur-xl flex flex-col justify-between p-8 pt-24 md:hidden animate-in fade-in duration-200">
          <div className="flex justify-between items-center pb-4 border-b border-stone-800">
            <span className="font-serif text-2xl font-bold text-white">
              Boles<span className="text-[#D82935]">.</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-stone-800 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <ul className="space-y-4 text-3xl font-serif text-white py-6">
            {[
              { id: 'home', label: '01. Home' },
              { id: 'about', label: '02. About' },
              { id: 'tools', label: '03. Mastered Tools' },
              { id: 'services', label: '04. Services' },
              { id: 'work', label: '05. Selected Work' },
              { id: 'contact', label: '06. Contact Me' },
            ].map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#D82935] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="space-y-4 pt-4 border-t border-stone-800">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-between w-full py-3 px-4 rounded-2xl bg-stone-800/90 text-white text-xs font-semibold"
            >
              <span className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-[#D82935]' : 'bg-amber-400'}`}></span>
                <span>{isDark ? 'الوضع الحالي: ليلي / داكن' : 'الوضع الحالي: نهاري / فاتح'}</span>
              </span>
              <div className="flex items-center gap-1 p-0.5 rounded-full bg-stone-900 border border-stone-700">
                <span className={`flex items-center justify-center w-5 h-5 rounded-full ${!isDark ? 'bg-amber-400 text-stone-900 font-bold' : 'text-stone-500'}`}>
                  <Sun className="w-3 h-3" />
                </span>
                <span className={`flex items-center justify-center w-5 h-5 rounded-full ${isDark ? 'bg-[#D82935] text-white font-bold' : 'text-stone-500'}`}>
                  <Moon className="w-3 h-3" />
                </span>
              </div>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setCvModalOpen(true);
              }}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full border border-stone-700 text-white text-xs font-bold uppercase tracking-wider"
            >
              <Download className="w-4 h-4" /> Download Curriculum Vitae
            </button>
            <a
              href="/boles-emad-portfolio.html"
              download="boles-emad-portfolio.html"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full border border-emerald-600/60 bg-emerald-950/20 text-emerald-400 text-xs font-bold uppercase tracking-wider"
            >
              <Download className="w-4 h-4" /> تحميل كود الموقع (ملف HTML كامل)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#D82935] text-white text-xs font-bold uppercase tracking-wider"
            >
              <span>Initiate Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Direct Social Media Links inside Mobile Drawer */}
            <div className="flex items-center justify-center gap-4 pt-3">
              {SOCIAL_LINKS.map(s => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md"
                  style={{ backgroundColor: s.color }}
                  title={s.name}
                >
                  {renderSocialIcon(s.id, 'w-4 h-4 text-white')}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Page Content */}
      <main className="xl:pl-16 2xl:pl-20 transition-all overflow-x-hidden">
        {/* ==================== HERO SECTION ==================== */}
        <section id="home" className="relative min-h-screen pt-32 md:pt-36 pb-16 overflow-hidden flex flex-col justify-between">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[500px] md:w-[750px] h-[500px] md:h-[750px] bg-[#E8C5BE]/30 dark:bg-[#8F171F]/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
              
              {/* Left Column: Typography & Narrative */}
              <div className="lg:col-span-5 order-2 lg:order-1 space-y-5 text-center lg:text-left min-w-0">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8C5BE]/40 dark:bg-[#241C1C] border border-[#E8C5BE] dark:border-stone-800">
                  <span className="w-2 h-2 rounded-full bg-[#D82935] animate-ping"></span>
                  <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#171212] dark:text-[#F8F3EF]">
                    HELLO, I'M BOLES
                  </span>
                </div>

                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95] text-[#171212] dark:text-[#F8F3EF] break-words">
                  BOLES<br />
                  <span className="italic font-normal text-[#8F171F] dark:text-[#D82935]">EMAD</span>
                </h1>

                <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-md mx-auto lg:mx-0 leading-relaxed break-words">
                  I design meaningful visual experiences that help brands stand out with strategic clarity, high-end editorial luxury, and commercial resonance.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                  <a
                    href="#work"
                    className="px-7 py-3 rounded-full bg-[#D82935] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#8F171F] transition-all flex items-center gap-2 shadow-lg hover:shadow-red-900/30"
                  >
                    <span>View Selected Work</span>
                    <ArrowDownRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="px-7 py-3 rounded-full border border-stone-400 dark:border-stone-700 text-[#171212] dark:text-[#F8F3EF] text-xs font-semibold uppercase tracking-wider hover:border-[#D82935] hover:text-[#D82935] transition-all"
                  >
                    Let's Talk
                  </a>
                </div>

                {/* Key Metric Highlights */}
                <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 border-t border-stone-300/60 dark:border-stone-800">
                  <div>
                    <p className="font-serif text-2xl sm:text-3xl font-bold text-[#D82935]">06+</p>
                    <p className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Years Experience</p>
                  </div>
                  <div className="w-[1px] h-7 bg-stone-300 dark:bg-stone-800"></div>
                  <div>
                    <p className="font-serif text-2xl sm:text-3xl font-bold text-[#171212] dark:text-white">100%</p>
                    <p className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Dedicated Craft</p>
                  </div>
                  <div className="w-[1px] h-7 bg-stone-300 dark:bg-stone-800"></div>
                  <div>
                    <p className="font-serif text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">45+</p>
                    <p className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Brands Elevated</p>
                  </div>
                </div>
              </div>

              {/* Center Column: Portrait Photo (Clean without overlay badge) */}
              <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center relative min-w-0">
                <div className="relative w-64 sm:w-72 md:w-80 aspect-[3/4] group">
                  {/* Subtle Gradient Backing Frame */}
                  <div className="absolute -inset-2 bg-gradient-to-b from-[#E8C5BE]/60 to-[#D82935]/20 dark:from-stone-800 dark:to-[#8F171F]/40 rounded-[2.2rem] rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                  
                  {/* Portrait Image Container */}
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl bg-[#171212]">
                    <img
                      src="/assets/aistudio/captain_boles_84690828.jpg"
                      alt="Boles Emad - Creative Designer Portrait"
                      className="w-full h-full object-cover object-top transition-all duration-700 scale-100 group-hover:scale-105"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171212]/70 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Clean Minimal Art Director Label at Bottom of Image */}
                    <div className="absolute bottom-3 inset-x-3 text-center pointer-events-none">
                      <span className="inline-block px-3.5 py-1 rounded-full bg-[#171212]/85 backdrop-blur-md text-[10px] uppercase tracking-widest text-[#E8C5BE] font-semibold border border-white/10 shadow-lg">
                        Art Director &amp; Senior Designer
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Statement */}
              <div className="lg:col-span-3 order-3 space-y-4 text-center lg:text-right min-w-0">
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#D82935] font-bold block">
                    Art Directed Identity
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-extrabold uppercase tracking-tight text-[#171212] dark:text-[#F8F3EF] leading-snug break-words">
                    CREATIVE DESIGNER THAT MAKES YOUR <span className="text-[#D82935] underline decoration-[#8F171F] decoration-2 underline-offset-4">BRAND</span> SEEN.
                  </h2>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed hidden sm:block break-words">
                  Balancing high-fashion editorial aesthetics with strategic brand architecture to turn ambitious visions into industry benchmarks.
                </p>
                <div className="flex items-center justify-center lg:justify-end gap-2 text-xs font-semibold text-stone-600 dark:text-stone-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Available for Select Projects</span>
                </div>
              </div>

            </div>
          </div>

          {/* Marquee Red Ticker Ribbon */}
          <div className="mt-14 w-full bg-[#D82935] text-white py-3 overflow-hidden shadow-md select-none">
            <div className="animate-marquee whitespace-nowrap text-xs md:text-sm font-display uppercase tracking-[0.2em] font-semibold">
              <div className="flex gap-8 items-center px-4">
                <span>Brand Identity Systems</span> <span className="text-white/60">•</span>
                <span>Social Media Design</span> <span className="text-white/60">•</span>
                <span>Print &amp; Luxury Packaging</span> <span className="text-white/60">•</span>
                <span>Cinematic Video Editing</span> <span className="text-white/60">•</span>
                <span>Visual Art Direction</span> <span className="text-white/60">•</span>
                <span>Creative Typography</span> <span className="text-white/60">•</span>
              </div>
              <div className="flex gap-8 items-center px-4" aria-hidden="true">
                <span>Brand Identity Systems</span> <span className="text-white/60">•</span>
                <span>Social Media Design</span> <span className="text-white/60">•</span>
                <span>Print &amp; Luxury Packaging</span> <span className="text-white/60">•</span>
                <span>Cinematic Video Editing</span> <span className="text-white/60">•</span>
                <span>Visual Art Direction</span> <span className="text-white/60">•</span>
                <span>Creative Typography</span> <span className="text-white/60">•</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== ABOUT SECTION ==================== */}
        <section id="about" className="py-20 md:py-28 bg-[#EFE7E0]/40 dark:bg-[#1A1414]/50 border-y border-stone-300/50 dark:border-stone-800 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            
            <div className="flex items-center gap-4 mb-12">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D82935]">01 / Narrative</span>
              <div className="h-[1px] flex-1 bg-stone-300 dark:bg-stone-800"></div>
              <span className="font-serif italic text-sm text-stone-500">Editorial Vision &amp; Craft</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-w-0">
                <div className="relative w-56 sm:w-72 h-56 sm:h-72 group">
                  <div className="absolute -inset-2.5 rounded-full border border-dashed border-[#D82935]/40 animate-[spin_30s_linear_infinite]"></div>
                  
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-[#241C1C] shadow-2xl relative">
                    <img
                      src="/assets/aistudio/captain_boles_84690828.jpg"
                      alt="About Boles Emad"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute -bottom-2 -right-2 bg-[#171212] dark:bg-[#D82935] text-white p-3.5 rounded-full shadow-lg border border-white/20 text-center">
                    <p className="font-serif text-lg font-bold leading-none">6+</p>
                    <p className="text-[8px] uppercase tracking-wider text-stone-300 dark:text-stone-100">Years Exp.</p>
                  </div>
                </div>

                <div className="mt-6 text-center max-w-sm px-2">
                  <p className="font-serif italic text-base sm:text-lg text-[#171212] dark:text-[#F8F3EF]">
                    "Design is the silent ambassador of your brand."
                  </p>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">— Paul Rand Philosophy</p>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#F8F3EF] dark:bg-[#1A1414] p-6 sm:p-10 rounded-3xl border border-stone-300/60 dark:border-stone-800 shadow-md space-y-5 min-w-0">
                
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D82935]">
                    WHO IS BOLES EMAD?
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug break-words">
                    Architect of Visual Identity &amp; Editorial Sophistication.
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed break-words">
                  I am <strong className="text-[#171212] dark:text-white font-bold">Boles Emad</strong>, a dedicated graphic designer, brand strategist, and visual art director with over 6 years of specialized experience in crafting high-end visual systems. My work spans brand strategy, luxury print collateral, disruptive digital campaigns, and cinematic motion narratives.
                </p>

                <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed break-words">
                  My approach merges meticulous art direction with contemporary typographic hierarchy. Rather than chasing fleeting design fads, I construct cohesive visual ecosystems engineered to communicate prestige, evoke emotional connection, and solve concrete commercial challenges for visionaries worldwide.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-300/60 dark:border-stone-800">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-[#D82935]/10 text-[#D82935] shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xs font-bold uppercase tracking-wider break-words">Strategic Clarity</h3>
                      <p className="text-xs text-stone-500 mt-0.5 break-words">Every stroke and font serves a commercial intent.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-[#D82935]/10 text-[#D82935] shrink-0">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xs font-bold uppercase tracking-wider break-words">Editorial Luxury</h3>
                      <p className="text-xs text-stone-500 mt-0.5 break-words">Generous white space and bespoke typographic balance.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => setCvModalOpen(true)}
                    className="px-6 py-2.5 rounded-full bg-[#171212] dark:bg-[#F8F3EF] text-white dark:text-[#171212] text-xs font-semibold uppercase tracking-wider hover:bg-[#D82935] dark:hover:bg-[#D82935] dark:hover:text-white transition-all flex items-center gap-2 shadow-sm"
                  >
                    <span>Inspect Full CV &amp; Bio</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-[11px] uppercase tracking-wider font-bold text-stone-500 flex items-center gap-1.5 break-words">
                    <span className="w-2 h-2 rounded-full bg-[#D82935] shrink-0"></span>
                    <span>Graphic Designer • 6+ Years Exp</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ==================== MASTERED TOOLS SECTION ==================== */}
        <section id="tools" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D82935]">Mastered Creative Suite</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171212] dark:text-[#F8F3EF]">
              TOOLS I WORK WITH
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
              Industry-standard creative software utilized at the highest standard of technical precision and craft.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CREATIVE_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="group bg-white dark:bg-[#1A1414] p-4 sm:p-5 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-[#D82935] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-w-0 overflow-hidden"
              >
                <div className="min-w-0">
                  <div
                    className="w-12 h-12 rounded-xl font-display font-extrabold text-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform shrink-0"
                    style={{ backgroundColor: tool.bg, color: tool.color }}
                  >
                    {tool.badge}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-[#171212] dark:text-white mb-1.5 break-words min-w-0">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed break-words">
                    {tool.details}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 dark:border-stone-800">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-stone-500 mb-1">
                    <span>Proficiency</span>
                    <span className="text-[#D82935] font-bold">{tool.proficiency}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#8F171F] to-[#D82935] rounded-full transition-all duration-1000"
                      style={{ width: `${tool.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ==================== SERVICES SECTION ==================== */}
        <section id="services" className="py-20 md:py-28 bg-[#EFE7E0]/30 dark:bg-[#1A1414]/30 border-y border-stone-300/40 dark:border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-2.5 min-w-0">
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D82935]">Core Capabilities</span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171212] dark:text-[#F8F3EF] break-words">
                  MY SERVICES
                </h2>
              </div>
              <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm max-w-md break-words">
                Art directed design solutions tailored for forward-thinking brands, luxury houses, and ambitious creative founders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {CREATIVE_SERVICES.map((srv) => (
                <div
                  key={srv.title}
                  className="group bg-white dark:bg-[#1A1414] rounded-3xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between min-w-0"
                >
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-black">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171212]/85 via-transparent to-transparent"></div>
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 dark:bg-[#1A1414]/90 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-[#171212] dark:text-[#F8F3EF]">
                      {srv.number} / {srv.category}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between min-w-0">
                    <div className="space-y-3 min-w-0">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#171212] dark:text-white group-hover:text-[#D82935] transition-colors break-words">
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed break-words">
                        {srv.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {srv.features.map(f => (
                          <div key={f} className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-300 min-w-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D82935] shrink-0"></span>
                            <span className="truncate">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                      <a
                        href="#contact"
                        className="text-xs uppercase tracking-wider font-bold text-[#D82935] hover:underline"
                      >
                        Inquire Discipline Package
                      </a>
                      <a
                        href="#contact"
                        className="w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 group-hover:bg-[#D82935] group-hover:text-white flex items-center justify-center transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==================== SELECTED WORK / PORTFOLIO SECTION ==================== */}
        <section id="work" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="space-y-2.5 min-w-0">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D82935]">Selected Archive</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171212] dark:text-[#F8F3EF] break-words">
                MY WORK
              </h2>
              <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm max-w-md break-words">
                Click any project card to inspect detailed art direction, client objectives, and visual deliverables.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-[#EFE7E0]/70 dark:bg-[#1A1414] p-1.5 rounded-full border border-stone-300/60 dark:border-stone-800 max-w-max">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'branding', label: 'Branding' },
                { id: 'social', label: 'Social Media' },
                { id: 'packaging', label: 'Packaging' },
                { id: 'video', label: 'Video Editing' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    activeFilter === tab.id
                      ? 'bg-[#D82935] text-white shadow-md'
                      : 'text-stone-600 dark:text-stone-400 hover:text-[#171212] dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white dark:bg-[#1A1414] rounded-3xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-md hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between min-w-0"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity"></div>
                  
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 dark:bg-[#1A1414]/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-[#171212] dark:text-[#F8F3EF]">
                    {project.categoryLabel}
                  </span>

                  <div className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-full bg-[#D82935] text-white flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-2 min-w-0">
                  <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                    <span className="truncate mr-2">{project.client}</span>
                    <span className="shrink-0">{project.year}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#171212] dark:text-white group-hover:text-[#D82935] transition-colors break-words">
                    {project.title}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed break-words">
                    {project.description}
                  </p>
                  
                  <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex flex-wrap gap-1.5">
                    {project.tags.map(t => (
                      <span
                        key={t}
                        className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md bg-[#F8F3EF] dark:bg-[#241C1C] text-stone-600 dark:text-stone-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

        </section>

        {/* ==================== CONTACT SECTION ==================== */}
        <section id="contact" className="py-20 md:py-28 bg-[#EFE7E0]/40 dark:bg-[#1A1414]/50 border-t border-stone-300/50 dark:border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2.5">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D82935]">Initiate Collaboration</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171212] dark:text-[#F8F3EF] break-words">
                CONTACT
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                Let's discuss how we can elevate your brand with intentional, high-end editorial design and strategic precision.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Left Column: Interactive Contact Form */}
              <div className="lg:col-span-7 bg-white dark:bg-[#1A1414] p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-lg min-w-0">
                <form onSubmit={handleFormSubmit} className="space-y-5" noValidate>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="min-w-0">
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#171212] dark:text-white mb-1.5">
                        Full Name <span className="text-[#D82935]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Alexander Vance"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#F8F3EF] dark:bg-[#241C1C] border border-stone-300 dark:border-stone-800 focus:outline-none focus:border-[#D82935] text-sm text-[#171212] dark:text-white"
                      />
                      {formErrors.fullName && (
                        <p className="text-xs text-[#D82935] mt-1 font-medium">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div className="min-w-0">
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#171212] dark:text-white mb-1.5">
                        Email Address <span className="text-[#D82935]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alexander@brand.com"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#F8F3EF] dark:bg-[#241C1C] border border-stone-300 dark:border-stone-800 focus:outline-none focus:border-[#D82935] text-sm text-[#171212] dark:text-white"
                      />
                      {formErrors.email && (
                        <p className="text-xs text-[#D82935] mt-1 font-medium">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="min-w-0">
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#171212] dark:text-white mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+20 120 389 4157"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#F8F3EF] dark:bg-[#241C1C] border border-stone-300 dark:border-stone-800 focus:outline-none focus:border-[#D82935] text-sm text-[#171212] dark:text-white"
                      />
                    </div>

                    <div className="min-w-0">
                      <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-[#171212] dark:text-white mb-1.5">
                        Company or Studio
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Brand / Enterprise Name"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#F8F3EF] dark:bg-[#241C1C] border border-stone-300 dark:border-stone-800 focus:outline-none focus:border-[#D82935] text-sm text-[#171212] dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="min-w-0">
                      <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-wider text-[#171212] dark:text-white mb-1.5">
                        Discipline
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#F8F3EF] dark:bg-[#241C1C] border border-stone-300 dark:border-stone-800 focus:outline-none focus:border-[#D82935] text-sm text-[#171212] dark:text-white cursor-pointer"
                      >
                        <option value="Brand Identity">Brand Identity System</option>
                        <option value="Social Media Design">Social Media Campaign</option>
                        <option value="Print & Packaging">Print &amp; Packaging Design</option>
                        <option value="Video Editing">Video Editing &amp; Motion</option>
                        <option value="Comprehensive Art Direction">Comprehensive Art Direction</option>
                      </select>
                    </div>

                    <div className="min-w-0">
                      <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-[#171212] dark:text-white mb-1.5">
                        Expected Budget
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#F8F3EF] dark:bg-[#241C1C] border border-stone-300 dark:border-stone-800 focus:outline-none focus:border-[#D82935] text-sm text-[#171212] dark:text-white cursor-pointer"
                      >
                        <option value="$1,000 - $3,000">$1,000 — $3,000</option>
                        <option value="$3,000 - $5,000">$3,000 — $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 — $10,000</option>
                        <option value="$10,000+">$10,000+ (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#171212] dark:text-white mb-1.5">
                      Brief &amp; Project Scope <span className="text-[#D82935]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell Boles about your goals, brand timeline, and scope..."
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#F8F3EF] dark:bg-[#241C1C] border border-stone-300 dark:border-stone-800 focus:outline-none focus:border-[#D82935] text-sm text-[#171212] dark:text-white resize-none"
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-xs text-[#D82935] mt-1 font-medium">{formErrors.message}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3.5 rounded-xl bg-[#D82935] hover:bg-[#8F171F] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Brief...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/201203894157?text=${encodeURIComponent(
                        `Hello Boles, I am interested in collaborating on ${formData.projectType}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
                    >
                      <WhatsAppIcon className="w-5 h-5" fullColor={true} />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                </form>
              </div>

              {/* Right Column: Direct Channels & Interactive Info */}
              <div className="lg:col-span-5 space-y-4 min-w-0">
                
                {/* WhatsApp Direct Card */}
                <a
                  href="https://wa.me/201203894157?text=Hello%20Boles,%20I%20would%20like%20to%20discuss%20a%20creative%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white dark:bg-[#1A1414] p-5 sm:p-6 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 flex items-center justify-between block min-w-0 overflow-hidden"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <WhatsAppIcon className="w-10 h-10" fullColor={true} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold">Instant Response</p>
                      <h4 className="font-bold text-sm sm:text-base text-[#171212] dark:text-white group-hover:text-emerald-500 transition-colors truncate">
                        WhatsApp Conversation
                      </h4>
                      <p className="text-xs text-stone-500 font-mono mt-0.5">+20 120 389 4157</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-emerald-500 transition-colors shrink-0 ml-2" />
                </a>

                {/* Email Direct Card with Copy Option */}
                <div className="group bg-white dark:bg-[#1A1414] p-5 sm:p-6 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-[#D82935] hover:shadow-lg transition-all duration-300 flex items-center justify-between min-w-0 overflow-hidden">
                  <a href="mailto:poloamad144@gmail.com" className="flex items-center gap-3.5 min-w-0 flex-1">
                    <div className="w-11 h-11 rounded-xl bg-[#D82935]/10 text-[#D82935] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold">Direct Email Inquiries</p>
                      <h4 className="font-bold text-sm sm:text-base text-[#171212] dark:text-white group-hover:text-[#D82935] transition-colors break-all">
                        poloamad144@gmail.com
                      </h4>
                      <p className="text-xs text-stone-500 mt-0.5">Response within 24 hours</p>
                    </div>
                  </a>
                  <button
                    onClick={() => copyToClipboard('poloamad144@gmail.com', 'email')}
                    className="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400 hover:text-[#D82935] transition-colors ml-2 shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedItem === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Studio Location */}
                <div className="bg-white dark:bg-[#1A1414] p-5 sm:p-6 rounded-2xl border border-stone-200 dark:border-stone-800 flex items-center gap-3.5 min-w-0 overflow-hidden">
                  <div className="w-11 h-11 rounded-xl bg-[#E8C5BE]/40 dark:bg-[#241C1C] text-[#8F171F] dark:text-[#D82935] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold">Studio Base</p>
                    <h4 className="font-bold text-sm sm:text-base text-[#171212] dark:text-white">Cairo, Egypt</h4>
                    <p className="text-xs text-stone-500 mt-0.5 break-words">Collaborating with brands globally</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ==================== FINAL CTA BANNER ==================== */}
        <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="relative bg-[#171212] text-white rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-14 md:p-18 overflow-hidden shadow-2xl min-w-0">
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#D82935]/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#8F171F]/30 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl space-y-5 min-w-0">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#D82935] block">
                Ready To Elevate Your Presence?
              </span>
              
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08] break-words">
                LET'S BUILD SOMETHING EXTRAORDINARY.
              </h2>

              <p className="text-sm sm:text-base text-stone-400 leading-relaxed max-w-xl break-words">
                Whether creating a flagship brand from zero or modernizing a heritage enterprise, let's craft an identity that commands respect.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <a
                  href="#contact"
                  className="px-7 py-3.5 rounded-full bg-[#D82935] hover:bg-[#8F171F] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-xl flex items-center gap-2"
                >
                  <span>Start A Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setCvModalOpen(true)}
                  className="px-7 py-3.5 rounded-full border border-white/20 hover:border-white text-white text-xs font-bold uppercase tracking-widest transition-all"
                >
                  View Full CV
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER WITH PROMINENT SOCIAL MEDIA SHOWCASE ==================== */}
      <footer className="xl:pl-16 2xl:pl-20 bg-white dark:bg-[#1A1414] border-t border-stone-200 dark:border-stone-800 pt-16 sm:pt-20 pb-12 transition-all overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-14">
          
          {/* Top Showcase: Dedicated Social Media Grid with Authentic Logos & Profiles */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="min-w-0">
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D82935] block">
                  Official Channels
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#171212] dark:text-white mt-1 break-words">
                  CONNECT WITH BOLES EMAD
                </h3>
              </div>
              <p className="text-xs text-stone-500 max-w-md break-words">
                Follow recent design breakdowns, motion snippets, and ongoing creative releases across all verified networks.
              </p>
            </div>

            {/* Social Media Cards Grid with Official Logos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-5 sm:p-6 rounded-3xl bg-[#F8F3EF] dark:bg-[#241C1C] border border-stone-300/50 dark:border-stone-800/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden min-w-0"
                >
                  {/* Subtle Colored Ambient Corner Glow */}
                  <div
                    className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-10 group-hover:opacity-30 blur-xl transition-opacity pointer-events-none"
                    style={{ backgroundColor: social.color }}
                  ></div>

                  <div className="space-y-3.5 min-w-0">
                    <div className="flex items-center justify-between">
                      {/* Logo Badge with Brand Color */}
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110 shrink-0"
                        style={{ backgroundColor: social.color }}
                      >
                        {renderSocialIcon(social.id, 'w-6 h-6', true)}
                      </div>

                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-white dark:bg-[#1A1414] text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 shrink-0">
                        {social.badge}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-bold text-base sm:text-lg text-[#171212] dark:text-white group-hover:text-[#D82935] transition-colors truncate">
                        {social.name}
                      </h4>
                      <p className="text-xs font-mono text-stone-500 mt-0.5 truncate">
                        {social.username}
                      </p>
                      <p className="text-xs text-stone-600 dark:text-stone-400 mt-2 line-clamp-2 leading-relaxed break-words">
                        {social.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs font-semibold">
                    <span className="text-[#D82935] group-hover:underline flex items-center gap-1">
                      <span>Visit Profile</span>
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white dark:bg-[#1A1414] text-stone-600 dark:text-stone-300 group-hover:bg-[#D82935] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Middle Footer: Brand and Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-10 border-t border-stone-200 dark:border-stone-800">
            <div className="md:col-span-5 space-y-3.5 min-w-0">
              <a href="#home" className="inline-block font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#171212] dark:text-white">
                Boles<span className="text-[#D82935]">.</span>
              </a>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed max-w-sm break-words">
                Senior graphic designer and creative developer crafting timeless visual identities, editorial publications, and high-impact digital experiences that elevate brands globally.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-500 pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D82935]" /> Cairo, Egypt
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#D82935]" /> poloamad144@gmail.com
                </span>
              </div>
            </div>

            <div className="md:col-span-3 space-y-3 min-w-0">
              <span className="text-xs uppercase tracking-widest font-bold text-[#171212] dark:text-white">
                Quick Navigation
              </span>
              <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-400">
                <li><a href="#home" className="hover:text-[#D82935] transition-colors">Home Studio</a></li>
                <li><a href="#about" className="hover:text-[#D82935] transition-colors">About Boles</a></li>
                <li><a href="#tools" className="hover:text-[#D82935] transition-colors">Software Mastery</a></li>
                <li><a href="#services" className="hover:text-[#D82935] transition-colors">Core Capabilities</a></li>
                <li><a href="#work" className="hover:text-[#D82935] transition-colors">Selected Projects</a></li>
                <li><a href="#contact" className="hover:text-[#D82935] transition-colors">Direct Contact</a></li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3 min-w-0">
              <span className="text-xs uppercase tracking-widest font-bold text-[#171212] dark:text-white">
                Direct Inquiry
              </span>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed break-words">
                Have an ambitious brand, packaging line, or motion campaign? Reach out directly via WhatsApp for an immediate consultation.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/201203894157?text=Hello%20Boles,%20I%20would%20like%20to%20discuss%20a%20new%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-600 transition-all shadow-md"
                >
                  <WhatsAppIcon className="w-5 h-5" fullColor={true} />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-center text-xs text-stone-500 text-center">
            <p>&copy; {new Date().getFullYear()} Boles Emad. All Rights Reserved.</p>
          </div>

        </div>
      </footer>

      {/* ==================== PROJECT CASE STUDY MODAL ==================== */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* ==================== CV / RESUME MODAL ==================== */}
      <ResumeModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      {/* ==================== CONTACT FORM SUCCESS TOAST ==================== */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#171212] text-white p-5 rounded-2xl shadow-2xl border border-[#D82935]/40 flex items-center gap-4 animate-in slide-in-from-bottom-5 duration-300 max-w-md">
          <div className="w-10 h-10 rounded-full bg-[#D82935]/20 text-[#D82935] flex items-center justify-center shrink-0">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-white">Message Dispatched!</h5>
            <p className="text-xs text-stone-400 mt-0.5">
              Thank you! Boles will review your brief and get back to you within 24 hours.
            </p>
          </div>
        </div>
      )}

      {/* ==================== BACK TO TOP BUTTON ==================== */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#171212] dark:bg-[#F8F3EF] text-white dark:text-[#171212] shadow-xl hover:bg-[#D82935] dark:hover:bg-[#D82935] dark:hover:text-white transition-all duration-300 animate-in fade-in"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
