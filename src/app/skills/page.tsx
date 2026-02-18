import Image from 'next/image';
import { skillsData } from '@/lib/data/skills';

export const metadata = {
  title: 'Skills',
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 lg:py-40 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
          {/* Tech Icons Pattern */}
          <div className="absolute top-20 right-20 text-6xl opacity-5">📊</div>
          <div className="absolute bottom-32 left-16 text-5xl opacity-5">💻</div>
          <div className="absolute top-40 left-1/4 text-4xl opacity-5">🎯</div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white/50 rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-accent/20 border border-accent/30 text-accent text-sm font-semibold rounded-full">
              Technical Expertise
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            Skills & <span className="text-accent">Expertise</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Technical skills and tools I use to transform data into insights
          </p>

          {/* Skill Categories Preview */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-white/5 border border-accent/20 rounded-full text-sm font-medium hover:bg-accent/10 transition">
              Python
            </div>
            <div className="px-6 py-3 bg-white/5 border border-accent/20 rounded-full text-sm font-medium hover:bg-accent/10 transition">
              SQL
            </div>
            <div className="px-6 py-3 bg-white/5 border border-accent/20 rounded-full text-sm font-medium hover:bg-accent/10 transition">
              Tableau
            </div>
            <div className="px-6 py-3 bg-white/5 border border-accent/20 rounded-full text-sm font-medium hover:bg-accent/10 transition">
              Machine Learning
            </div>
            <div className="px-6 py-3 bg-white/5 border border-accent/20 rounded-full text-sm font-medium hover:bg-accent/10 transition">
              Vibe Coding
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/ml-background.png"
            alt="Machine Learning Background"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
        </div>

        {/* Decorative Elements - More Subtle */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Technical <span className="text-accent">Toolkit</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              Comprehensive expertise across data analysis, machine learning, and business intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillsData.map((category) => (
              <div
                key={category.name}
                className="group relative bg-white/95 backdrop-blur-md rounded-3xl border-2 border-gray-300 shadow-lg p-8 hover:border-accent hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon */}
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>

                {/* Category Name */}
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-6 group-hover:text-accent transition-colors">
                  {category.name}
                </h3>

                {/* Skills List */}
                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start text-base lg:text-lg text-gray-800 font-medium"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                      <span className="group-hover:text-gray-900 group-hover:font-semibold transition-all">{skill}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-light rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-6 font-medium">
              Ready to leverage these skills for your next project?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Get in Touch
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
