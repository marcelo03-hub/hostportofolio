export type ProjectCategory = 'All' | 'Web Design' | 'Development' | 'Editorial';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  subtitle: string;
  shortDescription: string;
  image: string;
  year: string;
  client: string;
  role: string;
  deliverables: string[];
  overview: string;
  outcome: string;
  liveUrl: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface StrengthItem {
  id: string;
  title: string;
  description: string;
  icon: 'monitor' | 'code' | 'smartphone' | 'zap';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const PORTFOLIO_PROFILE = {
  brandName: 'Alex Morgan',
  roleKicker: 'WEB DESIGNER',
  availabilityLabel: 'AVAILABLE FOR FREELANCE',
  greeting: "HELLO, I'M",
  fullNameLines: ['ALEX', 'MORGAN'] as const,
  roleSubtitle: 'WEB DEVELOPER & DIGITAL CREATIVE',
  bio: 'I craft clean, modern, and user-focused websites that help brands stand out and connect with the right audience.',
  heroPortrait: '/src/assets/images/hero_editorial_portrait_1795051441930.jpg',
  email: 'hello@alexmorgan.design',
  websiteUrl: 'https://alexmorgan.design',
  websiteLabel: 'www.alexmorgan.design',
  instagramUrl: 'https://instagram.com/alexmorgan.design',
  instagramHandle: '@alexmorgan.design',
  githubUrl: 'https://github.com/alexmorgan',
  githubHandle: 'github.com/alexmorgan',
  linkedinUrl: 'https://linkedin.com/in/alexmorgan',
  linkedinHandle: 'linkedin.com/in/alexmorgan',
  location: 'Jakarta & Remote Worldwide',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'studio-form',
    number: '01',
    title: 'Studio Form',
    category: 'Web Design',
    subtitle: 'Architecture Studio',
    shortDescription:
      'Monochrome showcase celebrating architectural geometry and warmth.',
    image: '/src/assets/images/project_studio_form_1795051440723.jpg',
    year: '2026',
    client: 'Studio Form Architects',
    role: 'Lead UI/UX Designer & Front-End Developer',
    deliverables: ['Design System', 'Responsive Web App', 'Motion Direction'],
    overview:
      'Studio Form needed a digital flagship that mirrored the precision of their architectural blueprints. We built a strict Swiss grid layout pairing deep charcoal surfaces with warm architectural photography and subtle hairline dividers.',
    outcome: '+64% inbound private residential inquiries within 90 days of launch.',
    liveUrl: 'https://studioform.example.com',
  },
  {
    id: 'avenue-co',
    number: '02',
    title: 'Avenue & Co.',
    category: 'Editorial',
    subtitle: 'Luxury Fashion Brand',
    shortDescription:
      'Editorial e-commerce flagship blending calm neutrals and lookbook craft.',
    image: '/src/assets/images/project_avenue_co_1795051442248.jpg',
    year: '2026',
    client: 'Avenue & Co. Atelier',
    role: 'Creative Director & UI Engineer',
    deliverables: ['E-Commerce UX', 'Lookbook Art Direction', 'Checkout Optimization'],
    overview:
      'Designed as a living fashion monograph, Avenue & Co. replaces noisy retail banners with generous whitespace, classical serif headlines, and fluid garment galleries that elevate perceived craft.',
    outcome: '38% faster checkout completion and 2.1x average session duration.',
    liveUrl: 'https://avenueandco.example.com',
  },
  {
    id: 'the-journal',
    number: '03',
    title: 'The Journal',
    category: 'Editorial',
    subtitle: 'Editorial Platform',
    shortDescription:
      'Digital broadsheet built around typographic clarity and long-form reading.',
    image: '/src/assets/images/project_the_journal_1795051442148.jpg',
    year: '2025',
    client: 'The Journal Media',
    role: 'Product Designer & React Developer',
    deliverables: ['Editorial Grid System', 'Custom Reader Mode', 'CMS Integration'],
    overview:
      'Inspired by print cultural broadsheets, The Journal delivers distraction-free reading across desktop and tablet viewports with crisp column rules, balanced line measures, and instant article indexing.',
    outcome: '4.6 min average article read time across 120K monthly subscribers.',
    liveUrl: 'https://thejournal.example.com',
  },
  {
    id: 'fuel-performance',
    number: '04',
    title: 'Fuel Performance',
    category: 'Development',
    subtitle: 'Sports Nutrition Brand',
    shortDescription:
      'High-contrast product launch platform engineered for speed and scale.',
    image: '/src/assets/images/project_fuel_performance_1795051442624.jpg',
    year: '2025',
    client: 'Fuel Labs',
    role: 'Full-Stack Web Developer & UI Designer',
    deliverables: ['Interactive Storefront', 'Performance Tuning', 'Subscription Flow'],
    overview:
      'Built for endurance athletes, Fuel Performance pairs stark monochrome product photography with crisp modular product cards, instant bundle builders, and sub-second page transitions.',
    outcome: '99 Lighthouse performance score and +52% recurring bundle sign-ups.',
    liveUrl: 'https://fuelperformance.example.com',
  },
];

export const SKILLS: SkillItem[] = [
  { name: 'UI / UX Design', level: 95 },
  { name: 'Web Development', level: 90 },
  { name: 'HTML & CSS', level: 95 },
  { name: 'JavaScript', level: 85 },
  { name: 'React / Laravel', level: 85 },
  { name: 'Responsive Design', level: 90 },
];

export const SKILLS_QUOTE =
  'I design and build digital experiences that are not only beautiful but also functional, intuitive, and impactful.';

export const STRENGTHS: StrengthItem[] = [
  {
    id: 'user-centered',
    title: 'User-Centered Design',
    description: 'Focus on creating seamless and meaningful user experiences.',
    icon: 'monitor',
  },
  {
    id: 'clean-code',
    title: 'Clean & Modern Code',
    description: 'High-quality, scalable, and performant development.',
    icon: 'code',
  },
  {
    id: 'responsive',
    title: 'Fully Responsive',
    description: 'Websites that look and work perfectly on any device.',
    icon: 'smartphone',
  },
  {
    id: 'performance',
    title: 'Performance Driven',
    description: 'Speed, SEO, and best practices built into every project.',
    icon: 'zap',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'jessica-lee',
    quote:
      'Alex is an incredible designer. He understood our vision perfectly and delivered a website that exceeded our expectations.',
    name: 'Jessica Lee',
    role: 'Founder, Avenue & Co.',
    avatar: '/src/assets/images/avatar_jessica_lee_1795051443952.jpg',
  },
  {
    id: 'david-carter',
    quote:
      'Professional, creative, and detail-oriented. The whole process was smooth from start to finish.',
    name: 'David Carter',
    role: 'CEO, Studio Form',
    avatar: '/src/assets/images/avatar_david_carter_1795051444795.jpg',
  },
  {
    id: 'james-wilson',
    quote:
      'Our new website not only looks amazing but also performs exceptionally well. Highly recommended!',
    name: 'James Wilson',
    role: 'Marketing Director, Fuel Performance',
    avatar: '/src/assets/images/avatar_james_wilson_1795051445464.jpg',
  },
];

export const EXTRA_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'elena-rostova',
    quote:
      'Every typographic detail and micro-interaction felt deliberate. Readers immediately noticed the elevated editorial clarity.',
    name: 'Elena Rostova',
    role: 'Managing Editor, The Journal',
    avatar: '/src/assets/images/avatar_jessica_lee_1795051443952.jpg',
  },
  {
    id: 'marcus-chen',
    quote:
      'Alex bridged our design system and React front-end effortlessly, cutting page load times in half before launch.',
    name: 'Marcus Chen',
    role: 'Head of Product, Kinetix Studio',
    avatar: '/src/assets/images/avatar_david_carter_1795051444795.jpg',
  },
  {
    id: 'daniel-bennett',
    quote:
      'Rare combination of visual taste and engineering rigor. We saw an immediate lift in qualified client inquiries.',
    name: 'Daniel Bennett',
    role: 'Creative Partner, Atelier Nord',
    avatar: '/src/assets/images/avatar_james_wilson_1795051445464.jpg',
  },
];
