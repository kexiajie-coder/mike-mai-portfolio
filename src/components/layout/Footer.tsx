import { Github, Linkedin, Mail } from 'lucide-react';
import { contactInfo } from '@/lib/data/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-heading font-bold text-black mb-4">
              Mike Mai
            </h3>
            <p className="text-gray-600 text-sm">
              Business Analytics Graduate Student at USC Marshall, specializing
              in data-driven decision making and actionable insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold text-black mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/projects"
                  className="text-gray-600 hover:text-accent transition text-sm"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/skills"
                  className="text-gray-600 hover:text-accent transition text-sm"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="/resume"
                  className="text-gray-600 hover:text-accent transition text-sm"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-accent transition text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-heading font-bold text-black mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href={contactInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-200 hover:bg-accent hover:text-white transition"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-200 hover:bg-accent hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="p-2 rounded-lg bg-gray-200 hover:bg-accent hover:text-white transition"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Mike Mai. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
