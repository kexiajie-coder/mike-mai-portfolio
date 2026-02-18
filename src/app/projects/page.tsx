import { projects } from '@/lib/data/projects';
import ProjectCard from '@/components/projects/ProjectCard';

export const metadata = {
  title: 'Projects',
  description: 'Portfolio of data analytics and AI projects by Mike Mai',
};

export default function ProjectsPage() {
  return (
    <div className="section-container">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-black mb-4">
          Projects
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore my data analysis, AI/ML, and SQL projects showcasing
          data-driven insights and business impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
