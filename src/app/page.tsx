export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-black to-accent bg-clip-text text-transparent">
          Mike Mai
        </h1>
        <h2 className="text-2xl text-gray-600 mb-6">
          Business Analytics Graduate Student @ USC Marshall
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          I am a Business Analytics graduate student at USC Marshall, graduating
          in December 2026 and seeking full-time opportunities in Business
          Analytics and Data Analytics. I specialize in transforming raw data
          into actionable insights using Python, SQL, R, and visualization tools
          like Tableau and Power BI.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="btn-primary"
          >
            View Projects
          </a>
          <a
            href="/assets/documents/Mike_Mai_Resume_BA.pdf"
            download
            className="btn-secondary"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="mt-16 text-center text-sm text-gray-500">
        <p>🚧 Website under construction - Full portfolio coming soon! 🚧</p>
      </div>
    </main>
  );
}
