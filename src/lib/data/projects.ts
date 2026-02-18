import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'tiktok-ecommerce-analysis',
    title: 'TikTok E-commerce Hidden Gem Discovery',
    shortDescription:
      'Data-driven analysis of 350+ TikTok e-commerce videos to identify high-conversion creators and optimal video strategies.',
    fullDescription:
      'Comprehensive statistical analysis of 350+ TikTok videos (93M+ views, 0.69M collects) to uncover hidden gem creators and conversion patterns. Discovered 67 high-potential creators with >3% collect rates and found 30-45s videos drive 57% higher conversion (0.74% vs 0.47% global average).',
    category: 'data-analysis',
    thumbnail: '/assets/images/tiktok-dashboard.png',
    images: ['/assets/images/tiktok-dashboard.png'],
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Statistical Analysis',
      'A/B Testing',
      'NLP',
      'Tableau',
    ],
    featured: true,
    links: {
      github: 'https://github.com/kexiajie-coder/TikTok-Ecommerce-Analysis',
      notebook: '/assets/projects/tiktok-notebook.html',
    },
    date: '2026-02',
    highlights: [
      'Analyzed 93M+ views and 0.69M collects across 350 videos',
      'Identified 67 high-potential creators with >3% collect rates',
      'Discovered 30-45s videos drive 57% higher conversion (0.74% vs 0.47%)',
      'Built interactive Tableau dashboard for creator discovery',
      'Conducted NLP analysis with word clouds to identify trending product categories',
      'Performed A/B testing and hypothesis testing on #TikTokMadeMeBuyIt hashtag',
    ],
  },
  {
    id: '2',
    slug: 'synapse-ai-networking-crm',
    title: 'Synapse - AI-Driven Networking CRM',
    shortDescription:
      'AI-powered networking CRM transforming conversation notes into actionable insights using NLP and LLMs.',
    fullDescription:
      'Developed Synapse, an AI-powered networking CRM that transforms fragmented conversation notes into actionable relationship insights using NLP and LLMs. Led Team A4ever (7 members) to Top 6 finish at USC Marshall AI Case Competition, creating smart capture, auto-summarization, and AI-generated follow-up features for professional relationship management.',
    category: 'ai-ml',
    thumbnail: '/assets/images/ai-case-preview.jpg',
    images: ['/assets/images/ai-case-preview.jpg'],
    technologies: [
      'Natural Language Processing (NLP)',
      'Large Language Models (LLMs)',
      'Named Entity Recognition (NER)',
      'AI Summarization',
      'Python',
      'Privacy-First Design',
    ],
    featured: true,
    links: {
      presentation: '/assets/projects/ai-case-presentation.pdf',
    },
    date: '2026-02',
    achievement: 'USC Marshall AI Case Competition Finalist - Top 6 out of 33 Teams',
    highlights: [
      'Identified 75% of students forget networking conversation details post-event',
      'Multi-modal input system: voice, text, business card scan',
      'NLP entity extraction → LLM summarization → structured database pipeline',
      'Smart auto-sort with Named Entity Recognition (NER)',
      'AI-generated personalized follow-up emails (context-aware, not templates)',
      'Reduced post-event data capture time to <3 minutes',
      'Led 7-member team to Top 6 finish out of 33 teams',
    ],
  },
  {
    id: '3',
    slug: 'tuneworks-sql-analysis',
    title: 'TuneWorks Growth Strategy - SQL Analysis',
    shortDescription:
      'End-to-end SQL analysis uncovering $100k+ revenue opportunity through strategic booking optimization.',
    fullDescription:
      'Conducted end-to-end SQL analysis for TuneWorks entertainment booking agency facing revenue stagnation, uncovering a $100k+ revenue opportunity by recommending strategic shift from solo acts to high-margin band bookings. Benchmarked human-driven SQL insights against AI analysis (Gemini), demonstrating superior depth in detecting complex commission inefficiencies and resource misallocations that automated tools missed.',
    category: 'sql-database',
    thumbnail: '/assets/images/sql-project-preview.jpg',
    images: ['/assets/images/sql-project-preview.jpg'],
    technologies: [
      'SQL (PostgreSQL)',
      'Advanced Excel',
      'GenAI (Gemini)',
      'Data Cleaning (Regex)',
      'JOINs, CTEs, Window Functions',
      'Statistical Analysis',
      'Business Intelligence',
    ],
    featured: true,
    links: {
      github: 'https://github.com/kexiajie-coder',
    },
    date: '2025-12',
    highlights: [
      'Uncovered $100k+ revenue opportunity through data-driven insights',
      'Performed rigorous data cleaning using Regex across 8+ relational tables',
      'Discovered Bands generate significantly higher revenue per engagement than solo acts',
      'Recommended restructuring agent incentives to prioritize Band bookings',
      'Benchmarked human SQL analysis vs. GenAI (Gemini)',
      'Identified commission inefficiencies that AI tools missed',
      'Led univariate analysis and executive presentation synthesis',
    ],
  },
];
