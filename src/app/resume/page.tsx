import { Download } from 'lucide-react';

export const metadata = {
  title: 'Resume',
};

export default function ResumePage() {
  return (
    <div className="section-container">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-black mb-4">
          Resume
        </h1>
        <a
          href="/assets/documents/Mike_Mai_Resume_BA.pdf"
          download
          className="btn-primary inline-flex items-center gap-2"
        >
          <Download className="w-5 h-5" />
          Download PDF
        </a>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg">
          <iframe
            src="/assets/documents/Mike_Mai_Resume_BA.pdf#view=FitH"
            className="w-full h-[800px] md:h-[1000px]"
            title="Mike Mai Resume"
          />
        </div>
      </div>
    </div>
  );
}
