import { skillsData } from '@/lib/data/skills';

export const metadata = {
  title: 'Skills',
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
            Technical skills and tools I use to transform data into insights
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillsData.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-accent hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-6">{category.icon}</div>
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
                  {category.name}
                </h3>
                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start text-base lg:text-lg text-gray-700"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
