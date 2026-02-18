import { projects } from '@/lib/data/projects';
import ProjectCard from '@/components/projects/ProjectCard';

export const metadata = {
  title: 'Projects',
  description: 'Portfolio of data analytics and AI projects by Mike Mai',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
            Projects
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
            Explore my data analysis, AI/ML, and SQL projects showcasing
            data-driven insights and measurable business impact
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
