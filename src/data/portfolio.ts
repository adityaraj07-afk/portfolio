/**
 * Central portfolio data — generated from Aditya Raj's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Aditya Raj',
  displayName: 'Aditya Raj',
  firstName: 'ADITYA',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN ADITYA RAJ ORIGINAL',
  role: 'Full Stack Developer — Next.js',
  tagline: ['Full Stack Developer', 'Next.js & React', 'Google Gemini AI', 'DSA in C++'],
  intro:
    'B.Tech Computer Science student and full-stack developer working with Next.js, React, Node.js and PostgreSQL. Built Collivra, an AI-powered team-formation platform, and SkillPulse, a consent-based skilling-outcomes tracker deployed live on Vercel for SIH 2026, both using the Gemini API. Solid in DSA with C++ through regular LeetCode practice. Looking for opportunities to build and ship scalable web products.',
  location: 'Patna, Bihar, India',
  phone: '+91 6201452298',
  email: 'adarshrajadityaraj@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/aditya-raj-811b3433b',
    github: 'https://github.com/adityaraj07-afk',
  },
  resumePdf: '/assets/Aditya_Raj_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Aditya Raj',
  },
  interests: ['Scalable Web Architecture', 'Next.js & React Ecosystem', 'AI & Gemini API Integration', 'Data Structures & Algorithms'],
};

export const education = [
  {
    school: 'Maharshi Dayanand University',
    place: 'Rohtak, India',
    degree: 'Bachelor of Technology — Computer Science',
    period: '2025 – 2029',
    score: 'CGPA 8.5/10',
  },
];

export const experience = [
  {
    company: 'Smart India Hackathon (SIH 2026)',
    role: 'Full-Stack Developer & AI Lead',
    place: 'Vercel / Prototype',
    period: '2026',
    points: [
      'Built SkillPulse, a consent-based platform tracking post-training employment outcomes and skill gaps using AI-driven matching with Gemini 2.5.',
      'Architected end-to-end full-stack workflow with Next.js App Router, PostgreSQL schemas, and responsive Tailwind UI.',
      'Shipped live production prototype deployed on Vercel with server-side rendering and resilient database connectivity.',
    ],
  },
  {
    company: 'Open Source Software Engineering',
    role: 'Full-Stack & Systems Developer',
    place: 'GitHub • Independent',
    period: '2025 – Present',
    points: [
      'Architected Collivra, an AI-powered team formation platform using weighted AI scoring and Google Gemini API explainability layers.',
      'Engineered and open-sourced a console-based audio player in C++ implementing core data structures (linked lists, queues) and OOP design.',
      'Active competitive programmer solving DSA challenges on LeetCode across arrays, trees, graphs, and dynamic programming in C++.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'collivra',
    title: 'Collivra',
    year: '2026',
    genre: 'AI • Full-Stack • Team Formation',
    logline: 'An AI-powered team-formation platform using weighted AI scoring to recommend optimal, skill-balanced teams with an explainability layer.',
    stack: ['React 18', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Google Gemini API'],
    build: [
      'Built a full-stack platform using weighted AI scoring to recommend optimal, skill-balanced teams for hackathons and projects, with an explainability layer showing why each team fits.',
      'Engineered weighted synergy algorithms factoring in technical competencies, complementary skill gaps, and project scope needs.',
      'Integrated Google Gemini API to generate instant natural language breakdowns explaining the rationale behind team recommendations.',
      'Developed a responsive React 18 interface styled with Tailwind CSS, supported by modular Express.js APIs and relational PostgreSQL persistence.',
    ],
    features: [
      'Weighted AI scoring for skill-balanced team recommendations',
      'Gemini API explainability layer justifying team synergy',
      'Complementary skill matching & gap detection',
      'Full-stack architecture with React 18 and Tailwind CSS',
      'Structured PostgreSQL schemas for users, skills, and teams',
    ],
    metrics: [
      { value: 'React 18', label: 'modern responsive UI' },
      { value: 'Gemini AI', label: 'explainability layer' },
      { value: 'PostgreSQL', label: 'relational database' },
      { value: 'Full Stack', label: 'end-to-end built' },
      { value: 'Weighted', label: 'AI synergy engine' },
    ],
    github: 'https://github.com/adityaraj07-afk',
    palette: { from: '#1c072b', via: '#631386', to: '#090410', accent: '#c77dff' },
    motif: 'shield',
  },
  {
    id: 'skillpulse',
    title: 'SkillPulse (SIH 2026)',
    year: '2026',
    genre: 'Smart India Hackathon • Next.js • Gemini 2.5',
    logline: 'A consent-based skilling-outcomes tracker for SIH 2026 tracking post-training employment and skill gaps using AI-driven matching, live on Vercel.',
    stack: ['Next.js', 'PostgreSQL', 'Google Gemini 2.5', 'Tailwind CSS', 'Vercel'],
    build: [
      'Built a consent-based platform tracking post-training employment outcomes and skill gaps using AI-driven matching for Smart India Hackathon (SIH 2026).',
      'Deployed live prototype on Vercel with optimized Next.js App Router, server-side data fetching, and fast response times.',
      'Integrated Gemini 2.5 to analyze training curriculum against industry benchmarks, surfacing systemic skill deficits and personalized pathways.',
      'Architected consent-first data models guaranteeing candidate privacy, auditable records, and verifiable outcomes.',
    ],
    features: [
      'Smart India Hackathon (SIH 2026) prototype',
      'Consent-based student and trainee outcome tracking',
      'AI-driven matching powered by Gemini 2.5',
      'Live prototype deployed on Vercel',
      'Relational PostgreSQL persistence for analytics',
    ],
    metrics: [
      { value: 'SIH 2026', label: 'Smart India Hackathon' },
      { value: 'Gemini 2.5', label: 'AI matching engine' },
      { value: 'Next.js', label: 'SSR & App Router' },
      { value: 'Live', label: 'deployed on Vercel' },
      { value: 'PostgreSQL', label: 'relational analytics' },
    ],
    github: 'https://github.com/adityaraj07-afk',
    palette: { from: '#02181a', via: '#09585e', to: '#040b0c', accent: '#38ef7d' },
    motif: 'flow',
  },
  {
    id: 'cpp-music-player',
    title: 'C++ Console Music Player',
    year: '2025',
    genre: 'Systems • C++ • DSA • Open Source',
    logline: 'An open-source console-based music player built in C++ utilizing core data structures (linked lists, queues) and object-oriented principles.',
    stack: ['C++', 'Data Structures', 'OOP', 'Audio Architecture', 'Console UI'],
    build: [
      'Built and open-sourced a console-based music player in C++, published on GitHub for the developer community.',
      'Implemented fundamental data structures including circular linked lists for playlist looping and queues for upcoming track management.',
      'Designed using clean Object-Oriented Programming (OOP) paradigms with separation between audio playback, state management, and terminal I/O.',
      'Engineered interactive command-line controls for playback, pause, volume adjustment, playlist shuffling, and track searching.',
    ],
    features: [
      'Circular linked-list based dynamic playlist sequencing',
      'Queue-based track buffering and order management',
      'Clean OOP architecture with modular classes',
      'Terminal user interface with interactive commands',
      'Open-source repository published on GitHub',
    ],
    metrics: [
      { value: 'C++', label: 'systems programming' },
      { value: 'DSA', label: 'linked lists & queues' },
      { value: 'OOP', label: 'object-oriented design' },
      { value: 'Open Source', label: 'published on GitHub' },
    ],
    github: 'https://github.com/adityaraj07-afk',
    palette: { from: '#200e04', via: '#733709', to: '#0a0704', accent: '#ff9838' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'leetcode-dsa',
    title: 'DSA Mastery',
    org: 'LeetCode & C++',
    detail: 'Regular problem solver covering Arrays, Trees, Graphs, and Dynamic Programming in C++.',
    laurel: 'Problem Solving',
    link: 'https://github.com/adityaraj07-afk',
  },
  {
    id: 'sih-2026',
    title: 'SIH 2026 Live Prototype',
    org: 'Smart India Hackathon',
    detail: 'Built SkillPulse for SIH 2026 with Next.js, PostgreSQL, and Gemini 2.5; deployed live prototype on Vercel.',
    laurel: 'National Hackathon',
    link: 'https://github.com/adityaraj07-afk',
  },
  {
    id: 'cpp-open-source',
    title: 'Open-Source C++ Player',
    org: 'GitHub Open Source',
    detail: 'Engineered and open-sourced a console music player in C++ utilizing core data structures and OOP.',
    laurel: 'Open Source',
    link: 'https://github.com/adityaraj07-afk',
  },
  {
    id: 'collivra-ai',
    title: 'AI Team Synergies',
    org: 'Collivra Platform',
    detail: 'Engineered weighted AI scoring and Gemini API explainability layers to recommend optimal project teams.',
    laurel: 'AI Innovation',
    link: 'https://github.com/adityaraj07-afk',
  },
  {
    id: 'academic-excellence',
    title: '8.5 CGPA in B.Tech',
    org: 'Maharshi Dayanand University',
    detail: 'B.Tech in Computer Science with a strong academic record (8.5/10 CGPA).',
    laurel: 'Academic Record',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Smart India Hackathon', name: 'SIH 2026 Live Prototype — SkillPulse', link: 'https://github.com/adityaraj07-afk' },
  { issuer: 'LeetCode', name: 'Data Structures & Algorithms in C++ (Arrays, Trees, Graphs, DP)', link: 'https://github.com/adityaraj07-afk' },
  { issuer: 'GitHub', name: 'Open Source Software Engineering & Version Control', link: 'https://github.com/adityaraj07-afk' },
  { issuer: 'Next.js & React', name: 'Modern Full-Stack Web Architecture & Server-Side Rendering', link: 'https://github.com/adityaraj07-afk' },
  { issuer: 'Google AI', name: 'Gemini API & Gemini 2.5 Application Integration', link: 'https://github.com/adityaraj07-afk' },
  { issuer: 'PostgreSQL', name: 'Relational Database Design, SQL & Indexing', link: 'https://github.com/adityaraj07-afk' },
  { issuer: 'Vercel', name: 'Cloud Prototype Deployment & Production CI/CD', link: 'https://github.com/adityaraj07-afk' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'JavaScript & C++ at the core',
    skills: [
      { name: 'JavaScript (ES6+)', mono: 'Js', note: 'Primary' },
      { name: 'C++', mono: 'C+', note: 'DSA Core' },
      { name: 'SQL', mono: 'Sq', note: 'Queries' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interactive interfaces & components',
    skills: [
      { name: 'Next.js', mono: 'Nx', note: 'Framework' },
      { name: 'React.js', mono: 'Re', note: 'React 18' },
      { name: 'Tailwind CSS', mono: 'Tw', note: 'Styling' },
      { name: 'Bootstrap', mono: 'Bs' },
      { name: 'Responsive UI', mono: 'Ru' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server architectures & data stores',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'PostgreSQL', mono: 'Pg', note: 'Relational' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Intelligence',
    subtitle: 'Google Gemini ecosystem',
    skills: [
      { name: 'Gemini API', mono: 'Ge', note: 'Core AI' },
      { name: 'Gemini 2.5', mono: 'G2' },
      { name: 'Weighted AI Scoring', mono: 'Ws' },
      { name: 'Explainability Layers', mono: 'El' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    subtitle: 'Shipping & collaboration',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Vercel', mono: 'Vc', note: 'Deploy' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS & Problem Solving',
    subtitle: 'Algorithmic foundations',
    skills: [
      { name: 'DSA in C++', mono: 'Ds', note: 'LeetCode' },
      { name: 'Arrays & Trees', mono: 'At' },
      { name: 'Dynamic Programming', mono: 'Dp' },
      { name: 'Graphs', mono: 'Gr' },
      { name: 'OOP', mono: 'Oo' },
    ],
  },
  {
    id: 'softskills',
    title: 'Soft Skills',
    subtitle: 'Professional attributes from resume',
    skills: [
      { name: 'Problem Solving', mono: 'Ps' },
      { name: 'Team Collaboration', mono: 'Tc' },
      { name: 'Strong Communication', mono: 'Sc' },
      { name: 'Ownership Mindset', mono: 'Om' },
      { name: 'Time Management', mono: 'Tm' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in projects, achievements or resume facts.
 */
export const skillEvidence: Record<string, string[]> = {
  'JavaScript (ES6+)': ['Collivra', 'SkillPulse', 'Next.js & React stack'],
  'C++': ['LeetCode DSA Practice', 'C++ Console Music Player (GitHub)'],
  SQL: ['PostgreSQL in Collivra & SkillPulse', 'Relational database schemas'],
  HTML: ['Collivra frontend', 'SkillPulse UI', 'Semantic web standards'],
  CSS: ['Tailwind CSS designs', 'Responsive portfolio styling'],
  'Next.js': ['SkillPulse (SIH 2026)', 'Full Stack Developer focus'],
  'React.js': ['Collivra (React 18)', 'SkillPulse UI components'],
  'Tailwind CSS': ['Collivra UI', 'SkillPulse UI', 'Modern portfolio theme'],
  Bootstrap: ['Frontend component development', 'Rapid UI prototyping'],
  'Responsive UI': ['Mobile & desktop adaptive layouts across all projects'],
  'Node.js': ['Collivra backend service', 'REST API implementations'],
  'Express.js': ['Collivra REST APIs & server routes'],
  PostgreSQL: ['Collivra team databases', 'SkillPulse outcome tracking'],
  MongoDB: ['NoSQL document database architectures'],
  'REST APIs': ['Collivra and SkillPulse backend services'],
  'Gemini API': ['Collivra explainability layer for team synergy'],
  'Gemini 2.5': ['SkillPulse (SIH 2026) AI matching algorithm'],
  'Weighted AI Scoring': ['Collivra algorithm for optimal team balance'],
  'Explainability Layers': ['Collivra natural language synergy rationale'],
  Git: ['Version control across all software repositories'],
  GitHub: ['adityaraj07-afk', 'Open-source C++ music player'],
  Vercel: ['SkillPulse live deployment', 'Cloud prototype hosting'],
  'DSA in C++': ['LeetCode problem solving (Arrays, Trees, Graphs, DP)'],
  'Arrays & Trees': ['LeetCode algorithmic problems & solutions'],
  'Dynamic Programming': ['LeetCode optimization problems'],
  Graphs: ['LeetCode graph traversal & pathfinding'],
  OOP: ['C++ Console Music Player architecture'],
  'Problem Solving': ['LeetCode practice & complex algorithmic challenges'],
  'Team Collaboration': ['Collivra team formation & SIH 2026 hackathon team'],
  'Strong Communication': ['AI explainability writing & team presentations'],
  'Ownership Mindset': ['End-to-end delivery of Collivra & SkillPulse'],
  'Time Management': ['Hackathon delivery under SIH 2026 deadlines'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2025 – 2029',
    synopsis: 'B.Tech in Computer Science at Maharshi Dayanand University, Rohtak — building a high-performance foundation in C++ and CS fundamentals.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The CS Undergrad',
        description: 'B.Tech Computer Science at Maharshi Dayanand University, maintaining a strong 8.5/10 CGPA.',
        tags: ['B.Tech CS', 'CGPA 8.5/10', 'MDU'],
        runtime: '2025 – 2029',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Systems Foundation',
        description: 'Mastering C++, Object-Oriented Programming, and low-level memory concepts.',
        tags: ['C++', 'OOP', 'Data Structures'],
        runtime: 'Core Curriculum',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Algorithmic Mastery',
    period: '2025',
    synopsis: 'Regular problem-solving on LeetCode with C++ and publishing the open-source console music player.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The LeetCode Grind',
        description: 'Solving DSA problems covering arrays, trees, graphs, and dynamic programming in C++.',
        tags: ['LeetCode', 'DSA', 'C++', 'Algorithms'],
        runtime: 'Continuous Practice',
        palette: jade,
      },
      {
        code: 'S02 E02',
        title: 'The Open-Source Player',
        description: 'Built and open-sourced a console-based audio player in C++ utilizing linked lists and queues, published on GitHub.',
        tags: ['C++', 'Linked Lists', 'Queues', 'GitHub'],
        runtime: 'Open Source',
        palette: amber,
      },
    ],
  },
  {
    number: 3,
    title: 'Full Stack & Modern Web',
    period: '2025 – 2026',
    synopsis: 'Diving deep into modern web stacks: Next.js, React 18, Tailwind CSS, Node.js, and PostgreSQL.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Reactive UI',
        description: 'Building dynamic, responsive interfaces with React 18, Tailwind CSS, and Bootstrap.',
        tags: ['React 18', 'Tailwind CSS', 'Responsive UI'],
        runtime: 'Frontend Leap',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Server & Database',
        description: 'Architecting Node.js and Express.js REST APIs connected to structured PostgreSQL relational databases.',
        tags: ['Node.js', 'Express', 'PostgreSQL', 'REST'],
        runtime: 'Backend Engineering',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'AI Innovations & SIH 2026',
    period: '2026',
    synopsis: 'Collivra AI team formation and SkillPulse for Smart India Hackathon 2026, both leveraging Google Gemini.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Collivra: AI Synergy',
        description: 'AI-powered team formation platform using weighted scoring and Google Gemini API explainability layers.',
        tags: ['Collivra', 'Gemini API', 'React 18', 'PostgreSQL'],
        runtime: '2026 Original',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'SkillPulse: SIH 2026',
        description: 'Consent-based skilling-outcomes tracker with Gemini 2.5 AI matching; deployed live prototype on Vercel.',
        tags: ['SIH 2026', 'Next.js', 'Gemini 2.5', 'Vercel'],
        runtime: 'National Prototype',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Looking for opportunities to build and ship scalable web products for engineering teams worldwide.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Building Scalable Web Products',
        description: 'Open to software engineering roles and high-impact full-stack development opportunities.',
        tags: ['Next.js', 'Full Stack', 'Scalable Systems', 'Ready to Ship'],
        runtime: 'In Production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary framework', title: 'Next.js', detail: 'Full-stack SSR, API routes & modern App Router', palette: amber },
  { label: 'The AI Original', title: 'Collivra', detail: 'AI team formation with Gemini API explainability', palette: crimson },
  { label: 'National Hackathon', title: 'SkillPulse (SIH 2026)', detail: 'Live Vercel prototype with Gemini 2.5 matching', palette: jade },
  { label: 'Core Language', title: 'C++', detail: 'Regular LeetCode DSA: Arrays, Trees, Graphs & DP', palette: ocean },
  { label: 'Open Source', title: 'C++ Music Player', detail: 'Console-based audio engine published on GitHub', palette: amber },
  { label: 'Academic Standing', title: '8.5 CGPA', detail: 'B.Tech in Computer Science at MDU', palette: violet },
  { label: 'Primary Database', title: 'PostgreSQL', detail: 'Relational data modeling & structured SQL queries', palette: ocean },
  { label: 'AI Intelligence', title: 'Gemini 2.5', detail: 'State-of-the-art outcome matching & explanations', palette: jade },
  { label: 'Deployment Platform', title: 'Vercel', detail: 'Continuous deployment with live prototypes', palette: crimson },
  { label: 'Mission', title: 'Ship Scalable Products', detail: 'Open for opportunities to build scalable web apps', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Starring',
    title: 'Aditya Raj',
    lines: ['Full Stack Developer — Next.js', 'Patna, Bihar, India'],
    chips: ['Next.js', 'React', 'C++', 'PostgreSQL', 'Gemini AI'],
  },
  {
    kicker: 'Education',
    title: 'B.Tech · Computer Science',
    lines: ['Maharshi Dayanand University, Rohtak', '2025 – 2029'],
    chips: ['CGPA 8.5 / 10'],
  },
  {
    kicker: 'AI Platforms',
    title: 'Collivra & SkillPulse',
    lines: [
      'Collivra — AI team formation with weighted scoring & Gemini API explainability',
      'SkillPulse — SIH 2026 skilling-outcomes tracker with Gemini 2.5, live on Vercel',
    ],
    chips: ['React 18', 'Next.js', 'PostgreSQL', 'Gemini 2.5', 'SIH 2026'],
  },
  {
    kicker: 'Systems & DSA',
    title: 'C++ & LeetCode',
    lines: [
      'Solving DSA problems covering Arrays, Trees, Graphs, and DP',
      'Built & open-sourced a console-based music player in C++ on GitHub',
    ],
    chips: ['C++', 'LeetCode', 'DSA', 'OOP', 'Open Source'],
  },
  {
    kicker: 'The Mission',
    title: 'Building Scalable Web Products',
    lines: [
      'Solid in DSA with C++ through regular LeetCode practice',
      'Looking for opportunities to build and ship scalable web products',
    ],
    chips: ['Full Stack', 'Next.js', 'Available for Hire'],
  },
];

export type ProfileId = 'aditya' | 'recruiter' | 'developer' | 'hackathon';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'aditya',
    name: 'Aditya',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, key projects & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, C++ DSA & stack first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'hackathon',
    name: 'Hackathon / Lead',
    blurb: 'SIH 2026 & AI platforms first',
    color: '#ffb547',
    order: ['originals', 'moments', 'picks', 'journey', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & focus', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
