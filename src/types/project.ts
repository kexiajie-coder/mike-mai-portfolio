export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'data-analysis' | 'ai-ml' | 'sql-database';
  thumbnail: string;
  images: string[];
  technologies: string[];
  featured: boolean;
  links: {
    github?: string;
    live?: string;
    notebook?: string;
    presentation?: string;
  };
  date: string;
  highlights: string[];
  achievement?: string;
}
