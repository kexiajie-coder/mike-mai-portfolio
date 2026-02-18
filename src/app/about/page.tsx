import Image from 'next/image';

export const metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
            About Me
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
            Data-driven decision maker passionate about transforming complex data into actionable business insights
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-gray-200">
                <Image
                  src="/assets/images/profile-photo.jpg"
                  alt="Mike Mai"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2 flex flex-col justify-center">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                I am a Business Analytics graduate student at USC Marshall, graduating
                in December 2026 and seeking full-time opportunities in Business
                Analytics and Data Analytics.
              </p>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                I specialize in transforming raw data into actionable insights using
                Python, SQL, R, and visualization tools like Tableau and Power BI.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mt-16 mb-8">
              Education
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-accent">
                <h3 className="text-2xl font-bold text-black mb-2">
                  Master of Science in Business Analytics
                </h3>
                <p className="text-lg text-accent font-semibold mb-2">
                  University of Southern California - Marshall School of Business
                </p>
                <p className="text-base text-gray-600">Expected Graduation: December 2026</p>
              </div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mt-16 mb-8">
              Beyond Academics
            </h2>

            {/* UCI Esports Experience */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-200 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🎮</div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Scholarship Athlete - UCI Esports
                  </h3>
                  <p className="text-base text-gray-600 mb-1">
                    <span className="font-semibold">UCI Esports · Part-time</span>
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Oct 2023 - Jun 2025 · 1 yr 9 mos · Hybrid
                  </p>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                <li className="flex items-start text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Represented UCI at the collegiate level in competitive <strong>League of Legends</strong>, balancing rigorous practice schedules with academic responsibilities</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Developed strong <strong>teamwork and communication skills</strong> by coordinating strategies in high-pressure, performance-driven environments</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Strengthened <strong>resilience and adaptability</strong> by overcoming competitive setbacks, maintaining focus, and driving collective growth toward team goals</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mt-16 mb-8">
              Career Goals
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
              I am seeking roles where I can leverage my analytical skills to drive
              business value through data. I'm particularly interested in positions
              involving data analysis, business intelligence, and strategic
              decision-making. I thrive in cross-functional, fast-paced environments
              where I can collaborate with stakeholders to solve complex problems.
            </p>

            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mt-16 mb-8">
              What I Bring
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-accent transition">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-black mb-2">Strategic Thinking</h3>
                <p className="text-gray-600">Translating data insights into business strategies</p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-accent transition">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-black mb-2">Technical Expertise</h3>
                <p className="text-gray-600">Python, SQL, Tableau, and advanced analytics tools</p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-accent transition">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-black mb-2">Collaboration</h3>
                <p className="text-gray-600">Working effectively in cross-functional teams</p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-accent transition">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-black mb-2">Growth Mindset</h3>
                <p className="text-gray-600">Continuous learning and skill development</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
