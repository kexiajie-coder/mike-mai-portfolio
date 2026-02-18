import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { contactInfo } from '@/lib/data/contact';

export const metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div className="section-container max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-black mb-4">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-600">
          I'm currently seeking full-time opportunities in Business Analytics
          and Data Analytics. Let's connect!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
          href={`mailto:${contactInfo.email}`}
          className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-200 hover:border-accent hover:shadow-lg transition"
        >
          <div className="p-3 bg-accent/10 rounded-lg">
            <Mail className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-black">Email</h3>
            <p className="text-gray-600">{contactInfo.email}</p>
          </div>
        </a>

        <a
          href={`tel:${contactInfo.phone}`}
          className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-200 hover:border-accent hover:shadow-lg transition"
        >
          <div className="p-3 bg-accent/10 rounded-lg">
            <Phone className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-black">Phone</h3>
            <p className="text-gray-600">{contactInfo.phone}</p>
          </div>
        </a>

        <div className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-200">
          <div className="p-3 bg-accent/10 rounded-lg">
            <MapPin className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-black">Location</h3>
            <p className="text-gray-600">{contactInfo.location}</p>
          </div>
        </div>

        <a
          href={contactInfo.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-200 hover:border-accent hover:shadow-lg transition"
        >
          <div className="p-3 bg-accent/10 rounded-lg">
            <Linkedin className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-black">LinkedIn</h3>
            <p className="text-gray-600">Connect with me</p>
          </div>
        </a>

        <a
          href={contactInfo.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-200 hover:border-accent hover:shadow-lg transition md:col-span-2"
        >
          <div className="p-3 bg-accent/10 rounded-lg">
            <Github className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-black">GitHub</h3>
            <p className="text-gray-600">View my code and projects</p>
          </div>
        </a>
      </div>
    </div>
  );
}
