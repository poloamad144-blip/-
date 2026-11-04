export interface Project {
  id: number;
  title: string;
  category: 'branding' | 'social' | 'packaging' | 'video';
  categoryLabel: string;
  thumbnail: string;
  client: string;
  year: string;
  deliverables: string;
  description: string;
  challenge: string;
  solution: string;
  tags: string[];
  liveUrl: string;
}

export interface SocialLink {
  id: string;
  name: string;
  username: string;
  url: string;
  color: string;
  hoverBg: string;
  description: string;
  badge: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    username: 'Boles Emad',
    url: 'https://www.facebook.com/share/19hmeqZVHT/',
    color: '#1877F2',
    hoverBg: 'hover:bg-[#1877F2]',
    description: 'Latest design updates, creative stories, and community discussions.',
    badge: 'Official Page'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    username: '@bowlo_emad',
    url: 'https://www.instagram.com/bowlo_emad?xtok=MXYydzB6b3Q1NmMz',
    color: '#E4405F',
    hoverBg: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888]',
    description: 'Visual journal, creative reels, carousel designs, and behind-the-scenes.',
    badge: 'Portfolio & Reels'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    username: 'Boles Emad',
    url: 'https://www.linkedin.com/in/boles-emad-78794942b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    color: '#0A66C2',
    hoverBg: 'hover:bg-[#0A66C2]',
    description: 'Professional experience, creative milestones, and corporate partnerships.',
    badge: 'Professional Network'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    username: '+20 120 389 4157',
    url: 'https://wa.me/201203894157?text=Hello%20Boles,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.',
    color: '#25D366',
    hoverBg: 'hover:bg-[#25D366]',
    description: 'Instant direct inquiries, project scoping, and rapid feedback.',
    badge: 'Direct Chat 24/7'
  }
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Aura Botanicals Luxury Identity',
    category: 'branding',
    categoryLabel: 'Brand Identity',
    thumbnail: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
    client: 'Aura Skincare Labs',
    year: '2025',
    deliverables: 'Visual Identity, Luxury Packaging & Guidelines',
    description: 'A holistic botanical brand identity balancing Scandinavian minimalism with organic luxury. Developed comprehensive visual guidelines, tactile unboxing packaging, custom embossed wordmarks, and art directed photographic guidelines.',
    challenge: 'Aura needed an identity that felt scientific yet deeply calming, differentiating them in an overcrowded high-end botanical cosmetics sector.',
    solution: 'Designed an earth-tone palette anchored with warm copper foil and bespoke typography that evokes pharmaceutical precision and natural serenity.',
    tags: ['Luxury Branding', 'Typography', 'Stationery', 'Cosmetics', 'Embossing'],
    liveUrl: 'https://www.linkedin.com/in/boles-emad-78794942b'
  },
  {
    id: 2,
    title: 'Velvet & Noir Haute Couture',
    category: 'packaging',
    categoryLabel: 'Print & Packaging',
    thumbnail: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=1200&q=80',
    client: 'Maison Noir Paris',
    year: '2024',
    deliverables: 'Hardcover Publication & Foil Packaging',
    description: 'Editorial publication and collector-edition packaging for a luxury haute-couture fashion house. Features custom blind debossing, metallic copper foil accents on raw textured stock, and a bespoke serif typographic rhythm.',
    challenge: 'Elevating tactile VIP unboxing experiences to reflect runway craftsmanship on printed physical collateral.',
    solution: 'Curated 350gsm Italian cotton paper stock paired with subtle blind deboss and metallic foil stamp for an unmistakable tactile prestige.',
    tags: ['Print Production', 'Foil Stamping', 'Editorial Lookbook', 'Luxury Fashion'],
    liveUrl: 'https://www.linkedin.com/in/boles-emad-78794942b'
  },
  {
    id: 3,
    title: 'Kinetic Sound Festival Campaign',
    category: 'social',
    categoryLabel: 'Social Media',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    client: 'Kinetic Music Global',
    year: '2025',
    deliverables: 'Social Feed Campaign & Motion Teasers',
    description: 'High-energy editorial campaign created for an electronic music festival. Developed a sequence of 24 multi-panel carousel layouts, dynamic festival artist lineup posters, and disruptive motion graphics with 3.2M impressions.',
    challenge: 'Capturing the raw acoustic pulse and electric adrenaline of a massive festival through 2D mobile screens.',
    solution: 'Implemented chromatic dispersion, kinetic 3D typography, and seamless multi-slide panoramic carousels that drive instant viral engagement.',
    tags: ['Social Strategy', 'Motion Posters', 'Festival Campaign', 'Instagram Grid'],
    liveUrl: 'https://www.instagram.com/bowlo_emad'
  },
  {
    id: 4,
    title: 'Neo Tokyo Cinema Sequence',
    category: 'video',
    categoryLabel: 'Video Editing',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    client: 'Cyberpulse Productions',
    year: '2024',
    deliverables: 'Opening Title Sequence & Color Grading',
    description: 'A cinematic, high-contrast title sequence combining futuristic typography, analog film grain, and glitch motion choreography. Engineered custom sound design sync and deep atmospheric color grading.',
    challenge: 'Directing viewer attention through complex visual effects while keeping title credits legible and impactful.',
    solution: 'Paced motion cuts to musical transients, utilizing 35mm film emulation alongside custom anamorphic lens flares.',
    tags: ['Title Sequence', 'Motion Graphics', 'Sound Design', 'Film Color Grading'],
    liveUrl: 'https://www.instagram.com/bowlo_emad'
  },
  {
    id: 5,
    title: 'Monolith Architectural Studio',
    category: 'branding',
    categoryLabel: 'Brand Identity',
    thumbnail: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    client: 'Monolith Studio London',
    year: '2025',
    deliverables: 'Identity System & Architectural Monograph',
    description: 'Branding for a brutalist architectural firm. Anchored by heavy structured grids, expansive white space, monochrome stark contrast, and custom architectural signage schemes.',
    challenge: 'Expressing architectural weight, permanence, and spatial discipline purely through graphic branding.',
    solution: 'Engineered a rigid modular grid framework with custom monospaced typography and stark architectural photography curation.',
    tags: ['Minimalism', 'Architecture', 'Grid Systems', 'Signage Systems'],
    liveUrl: 'https://www.facebook.com/share/19hmeqZVHT/'
  },
  {
    id: 6,
    title: 'Elysium Reserve Botanical Gin',
    category: 'packaging',
    categoryLabel: 'Print & Packaging',
    thumbnail: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1200&q=80',
    client: 'Elysium Distillers',
    year: '2024',
    deliverables: 'Bottle Label, Seal & Custom Wooden Box',
    description: 'Artisan botanical gin packaging featuring hand-drawn botanical illustrations, custom tactile cotton paper label with gold hot foil stamping, and serialized wax seals.',
    challenge: 'Standing out on top-shelf luxury bars with an artisanal story that justifies premium retail pricing.',
    solution: 'Created an intricate narrative illustration wrapping the glass bottle, accented with deep green wax dipped tops.',
    tags: ['Bottle Packaging', 'Illustration', 'Gold Foil', 'Luxury Spirits'],
    liveUrl: 'https://www.facebook.com/share/19hmeqZVHT/'
  }
];

export const CREATIVE_SERVICES = [
  {
    number: '01',
    category: 'Core',
    title: 'Brand Identity Systems',
    description: 'Complete corporate design systems including logo marks, bespoke typography guidelines, color palettes, stationery suites, and brand style guides.',
    features: ['Custom Logo & Marks', 'Comprehensive Brand Guidelines', 'Stationery & Collateral', 'Typography Hierarchy'],
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=900&q=80'
  },
  {
    number: '02',
    category: 'Digital',
    title: 'Social Media Design',
    description: 'High-converting editorial feed aesthetics, carousel narratives, promotional campaign creative, and 3D social assets engineered to stop the scroll.',
    features: ['High-Converting Carousels', 'Brand Narrative Campaigns', 'Reels & Story Graphics', 'Art Directed Feed Grids'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80'
  },
  {
    number: '03',
    category: 'Tactile',
    title: 'Print & Packaging Design',
    description: 'Bespoke retail packaging, custom dielines, foil embossing specifications, luxury business cards, product boxes, and editorial print publications.',
    features: ['Retail Unboxing Systems', 'Foil & Emboss Dielines', 'Luxury Lookbooks & Catalogs', 'Production Ready Specs'],
    image: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=80'
  },
  {
    number: '04',
    category: 'Motion',
    title: 'Video Editing & Motion Design',
    description: 'Cinematic promotional films, social video hooks, kinetic typographic title sequences, commercial montage, sound design, and color grading.',
    features: ['Cinematic Pacing & Cuts', 'Kinetic Title Typography', 'Sound Design & Mastering', 'Color Science Grading'],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80'
  }
];

export const CREATIVE_TOOLS = [
  {
    name: 'Adobe Photoshop',
    badge: 'Ps',
    proficiency: 98,
    bg: '#001E36',
    color: '#31A8FF',
    details: 'Advanced compositing, photo manipulation, editorial retouching, and key visuals.'
  },
  {
    name: 'Adobe Illustrator',
    badge: 'Ai',
    proficiency: 96,
    bg: '#330000',
    color: '#FF9A00',
    details: 'Vector identity systems, custom lettering, iconography, and responsive logo marks.'
  },
  {
    name: 'Adobe InDesign',
    badge: 'Id',
    proficiency: 92,
    bg: '#49021F',
    color: '#FF3366',
    details: 'Multi-page brand guidelines, luxury lookbooks, catalogs, and print preparation.'
  },
  {
    name: 'Adobe Premiere Pro',
    badge: 'Pr',
    proficiency: 90,
    bg: '#00005B',
    color: '#9999FF',
    details: 'Cinematic commercials, narrative brand videos, pacing, and color grading.'
  },
  {
    name: 'Adobe After Effects',
    badge: 'Ae',
    proficiency: 88,
    bg: '#00005B',
    color: '#D291FF',
    details: 'Kinetic typography, animated brand idents, 2D visual effects, and reels.'
  }
];
