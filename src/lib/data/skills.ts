export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    name: 'Data Analysis Tools',
    icon: '📊',
    skills: [
      'Python (Pandas, NumPy, Matplotlib, Seaborn)',
      'SQL (PostgreSQL, MySQL)',
      'R',
      'Tableau',
      'Power BI',
      'Excel (Advanced)',
    ],
  },
  {
    name: 'Machine Learning & AI',
    icon: '🤖',
    skills: [
      'Statistical Modeling',
      'Scikit-learn',
      'A/B Testing',
      'Natural Language Processing (NLP)',
      'Large Language Models (LLMs)',
      'Named Entity Recognition (NER)',
    ],
  },
  {
    name: 'Business Analytics',
    icon: '💼',
    skills: [
      'Data Storytelling',
      'Business Intelligence',
      'Product Analytics',
      'Market Research',
      'Data-Driven Decision Making',
      'KPI Development',
      'Vibe Coding',
    ],
  },
];
