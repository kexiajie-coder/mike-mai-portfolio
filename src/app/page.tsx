import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section - Split Layout */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Photo */}
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center p-12 lg:p-16">
          <div className="relative w-full max-w-md">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
              <Image
                src="/assets/images/profile-photo-professional.jpg"
                alt="Mike Mai"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex items-center justify-center p-8 lg:p-16 bg-white">
          <div className="max-w-xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                Available December 2026
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-black mb-6 leading-tight animate-slide-up">
              Mike Mai
            </h1>

            <h2 className="text-xl lg:text-2xl text-gray-600 mb-8 font-medium">
              Business Analytics Graduate Student<br />
              <span className="text-accent">@ USC Marshall</span>
            </h2>

            <p className="text-base lg:text-lg text-gray-700 mb-10 leading-relaxed">
              Transforming raw data into actionable insights using Python, SQL, and advanced analytics.
              Passionate about data-driven decision making and solving complex business problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/projects"
                className="btn-primary text-center inline-block"
              >
                View Projects
              </Link>
              <a
                href="/assets/documents/Mike_Mai_Resume_BA.pdf"
                download
                className="btn-secondary text-center inline-block"
              >
                Download Resume
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-1">3+</div>
                <div className="text-xs lg:text-sm text-gray-600">Projects</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-1">10+</div>
                <div className="text-xs lg:text-sm text-gray-600">Skills</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-1">93M+</div>
                <div className="text-xs lg:text-sm text-gray-600">Data Analyzed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black mb-4">
              Featured Projects
            </h2>
            <p className="text-lg lg:text-xl text-gray-600">
              Explore my latest work in data analytics and AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="https://github.com/kexiajie-coder/TikTok-Ecommerce-Analysis" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-accent transition-all hover:shadow-2xl hover:-translate-y-1">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/assets/images/tiktok-preview.png"
                    alt="TikTok Analytics Dashboard"
                    width={600}
                    height={338}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-black mb-3 group-hover:text-accent transition">
                    TikTok Analytics
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    350+ videos analyzed, 67 high-potential creators identified
                  </p>
                </div>
              </div>
            </a>

            <a href="https://github.com/kexiajie-coder/Synapse-AI-CRM" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-accent transition-all hover:shadow-2xl hover:-translate-y-1">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/assets/images/ai-preview.png"
                    alt="Synapse AI CRM"
                    width={600}
                    height={338}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-black mb-3 group-hover:text-accent transition">
                    Synapse AI CRM
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    Top 6/33 teams at USC Marshall AI Competition
                  </p>
                </div>
              </div>
            </a>

            <a href="https://github.com/kexiajie-coder/SQL-Analysis" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-accent transition-all hover:shadow-2xl hover:-translate-y-1">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/assets/images/sql-preview.png"
                    alt="TuneWorks SQL Analysis"
                    width={600}
                    height={338}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-black mb-3 group-hover:text-accent transition">
                    TuneWorks SQL
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    $100k+ revenue opportunity uncovered
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold text-lg transition"
            >
              View All Projects
              <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
