import { skillsData } from '@/lib/data/skills';

export const metadata = {
  title: 'Skills',
};

export default function SkillsPage() {
  return (
    <div className="section-container">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-black mb-4">
          Skills & Expertise
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Technical skills and tools I use to transform data into insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((category) => (
          <div
            key={category.name}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{category.icon}</div>
            <h3 className="text-xl font-heading font-bold text-black mb-4">
              {category.name}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start text-gray-700"
                >
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
