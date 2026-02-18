export const metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <div className="section-container max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-black mb-8">
        About Me
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I am a Business Analytics graduate student at USC Marshall, graduating
          in December 2026 and seeking full-time opportunities in Business
          Analytics and Data Analytics. I specialize in transforming raw data
          into actionable insights using Python, SQL, R, and visualization tools
          like Tableau and Power BI. I'm passionate about data-driven decision
          making and continuous learning through hands-on projects.
        </p>

        <h2 className="text-2xl font-heading font-bold text-black mt-12 mb-4">
          Education
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-black">
            Master of Science in Business Analytics
          </h3>
          <p className="text-accent font-semibold">
            University of Southern California - Marshall School of Business
          </p>
          <p className="text-gray-600">Expected Graduation: December 2026</p>
        </div>

        <h2 className="text-2xl font-heading font-bold text-black mt-12 mb-4">
          Career Goals
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I am seeking roles where I can leverage my analytical skills to drive
          business value through data. I'm particularly interested in positions
          involving data analysis, business intelligence, and strategic
          decision-making. I thrive in cross-functional, fast-paced environments
          where I can collaborate with stakeholders to solve complex problems.
        </p>
      </div>
    </div>
  );
}
