import Link from 'next/link';
import { Github, ExternalLink, Award } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden card-hover">
      {/* Thumbnail */}
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="text-6xl">{getCategoryIcon(project.category)}</div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Achievement Badge */}
        {project.achievement && (
          <div className="flex items-center gap-2 mb-3 text-accent text-sm font-semibold">
            <Award className="w-4 h-4" />
            <span>{project.achievement}</span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-heading font-bold text-black mb-2">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-accent/10 text-accent rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-gray-200">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-accent transition text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
          {project.links.notebook && (
            <a
              href={project.links.notebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-accent transition text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Notebook
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="ml-auto flex items-center gap-2 text-accent hover:text-accent-dark transition text-sm font-semibold"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

function getCategoryIcon(category: string): string {
  switch (category) {
    case 'data-analysis':
      return '📊';
    case 'ai-ml':
      return '🤖';
    case 'sql-database':
      return '💾';
    default:
      return '💼';
  }
}
