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
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 lg:py-40 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl"></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-accent/70 rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-accent/20 border border-accent/30 text-accent text-sm font-semibold rounded-full">
              Portfolio
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            My <span className="text-accent">Projects</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Explore my data analysis, AI/ML, and SQL projects showcasing
            data-driven insights and measurable business impact
          </p>

          {/* Stats Bar */}
          <div className="mt-12 flex justify-center gap-8 lg:gap-16">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-accent">3+</div>
              <div className="text-sm text-gray-400 mt-1">Projects</div>
            </div>
            <div className="h-12 w-px bg-gray-700"></div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-accent">93M+</div>
              <div className="text-sm text-gray-400 mt-1">Data Points</div>
            </div>
            <div className="h-12 w-px bg-gray-700"></div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-accent">$100k+</div>
              <div className="text-sm text-gray-400 mt-1">Value Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
