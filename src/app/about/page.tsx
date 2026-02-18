import Image from 'next/image';

export const metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 lg:py-40 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-accent rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/50 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-accent/70 rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-accent/20 border border-accent/30 text-accent text-sm font-semibold rounded-full">
              About
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            About <span className="text-accent">Me</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl">
            Data-driven decision maker passionate about transforming complex data into actionable business insights
          </p>

          {/* Decorative Line */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-1 w-20 bg-accent rounded-full"></div>
            <div className="h-1 w-12 bg-accent/50 rounded-full"></div>
            <div className="h-1 w-8 bg-accent/20 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Profile Section with Professional Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20 items-center">
            <div className="lg:col-span-2">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border-4 border-gray-300 shadow-xl">
                <Image
                  src="/assets/images/profile-photo-professional.jpg"
                  alt="Mike Mai - Professional Headshot"
                  width={500}
                  height={625}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-3 flex flex-col justify-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900">
                Hi, I'm <span className="text-accent">Mike Mai</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                I am a Business Analytics graduate student at <strong>USC Marshall</strong>, graduating
                in December 2026 and seeking full-time opportunities in Business
                Analytics and Data Analytics.
              </p>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                I specialize in transforming raw data into actionable insights using
                Python, SQL, R, and visualization tools like Tableau and Power BI.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-10 text-center">
              Education <span className="text-accent">Journey</span>
            </h2>

            <div className="space-y-8">
              {/* USC Marshall with Photo */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-gradient-to-br from-red-50 to-yellow-50 p-8 rounded-3xl border-2 border-red-200 shadow-lg">
                <div className="lg:col-span-1">
                  <div className="aspect-square rounded-2xl overflow-hidden border-4 border-red-300">
                    <Image
                      src="/assets/images/usc-marshall.jpg"
                      alt="USC Marshall"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">🎓</div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        Master of Science in Business Analytics
                      </h3>
                      <p className="text-lg text-accent font-semibold mb-2">
                        University of Southern California - Marshall School of Business
                      </p>
                      <p className="text-base text-gray-700 font-medium">Expected Graduation: December 2026</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* UCI with Photo */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border-2 border-blue-200 shadow-lg">
                <div className="lg:col-span-1">
                  <div className="aspect-square rounded-2xl overflow-hidden border-4 border-blue-300">
                    <Image
                      src="/assets/images/uci-graduation.jpg"
                      alt="UCI Graduation"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">🎓</div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        Bachelor of Arts in Economics
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold mb-2">
                        University of California, Irvine
                      </p>
                      <p className="text-base text-gray-700 font-medium">Graduated: May 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Beyond Academics */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-10 text-center">
              Beyond <span className="text-accent">Academics</span>
            </h2>

            {/* UCI Esports with Team Photo */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-8 rounded-3xl border-2 border-purple-200 shadow-lg">
              <div className="lg:col-span-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border-4 border-purple-300">
                  <Image
                    src="/assets/images/profile-photo.jpg"
                    alt="UCI Esports Team"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover object-left"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">🎮</div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      Scholarship Athlete - UCI Esports
                    </h3>
                    <p className="text-base text-gray-700 mb-1">
                      <span className="font-semibold">UCI Esports · Part-time</span>
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      Oct 2023 - Jun 2025 · 1 yr 9 mos · Hybrid
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start text-gray-800">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Competed in collegiate <strong>League of Legends</strong> as a scholarship athlete, achieving <strong>Western Conference #1</strong> and <strong>National Top 4</strong></span>
                  </li>
                  <li className="flex items-start text-gray-800">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Developed <strong>strategic coordination and communication</strong> skills in high-pressure team environments</span>
                  </li>
                  <li className="flex items-start text-gray-800">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Cultivated <strong>resilience and adaptability</strong> through competitive challenges and collective team growth</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Career Goals */}
          <div className="mb-20 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
              Career <span className="text-accent">Goals</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
              I am seeking roles in data analysis, business intelligence, and strategic
              decision-making where I can leverage my analytical skills to drive significant
              business value. I'm looking for a company with a culture that aligns with my values,
              supports my personal and professional growth, and where I can make meaningful
              contributions. I thrive in collaborative, fast-paced environments where data-driven
              insights translate into impactful business outcomes.
            </p>
          </div>

          {/* What I Bring */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-10 text-center">
              What I <span className="text-accent">Bring</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-300 shadow-lg hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Strategic Thinking</h3>
                <p className="text-gray-700 font-medium">Translating data insights into business strategies</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-300 shadow-lg hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Technical Expertise</h3>
                <p className="text-gray-700 font-medium">Python, SQL, Tableau, and advanced analytics tools</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-300 shadow-lg hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-700 font-medium">Working effectively in cross-functional teams</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-300 shadow-lg hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Growth Mindset</h3>
                <p className="text-gray-700 font-medium">Continuous learning and skill development</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
