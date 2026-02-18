import { notFound } from 'next/navigation';
import { projects } from '@/lib/data/projects';
import { Github, ExternalLink, Award } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="section-container max-w-5xl">
      <Link
        href="/projects"
        className="inline-flex items-center text-accent hover:text-accent-dark mb-8 font-medium"
      >
        ← Back to Projects
      </Link>

      {project.achievement && (
        <div className="flex items-center gap-2 mb-4 text-accent">
          <Award className="w-5 h-5" />
          <span className="font-semibold">{project.achievement}</span>
        </div>
      )}

      <h1 className="text-4xl md:text-5xl font-heading font-bold text-black mb-4">
        {project.title}
      </h1>

      <p className="text-xl text-gray-600 mb-8">{project.fullDescription}</p>

      <div className="flex flex-wrap gap-3 mb-8">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>
        )}
        {project.links.notebook && (
          <a
            href={project.links.notebook}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            View Notebook
          </a>
        )}
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-heading font-bold text-black mb-6">
          Key Highlights
        </h2>
        <ul className="space-y-3">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></span>
              <span className="text-gray-700">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-heading font-bold text-black mb-4">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
