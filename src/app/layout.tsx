import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Mike Mai - Business Analytics",
    default: "Mike Mai - Business Analytics Portfolio",
  },
  description:
    "Portfolio of Mike Mai, a Business Analytics graduate student at USC Marshall specializing in data analysis, Python, SQL, and machine learning. View projects in TikTok e-commerce analysis, AI networking CRM, and SQL database optimization.",
  keywords: [
    "Business Analytics",
    "Data Analysis",
    "Python",
    "SQL",
    "Machine Learning",
    "Portfolio",
    "USC Marshall",
    "Data Visualization",
    "Tableau",
    "Power BI",
  ],
  authors: [{ name: "Mike Mai", url: "https://github.com/kexiajie-coder" }],
  openGraph: {
    title: "Mike Mai - Business Analytics Portfolio",
    description:
      "Data-driven Business Analytics professional with expertise in Python, SQL, Tableau, and ML",
    url: "https://mikemmai.vercel.app",
    siteName: "Mike Mai Portfolio",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mike Mai Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike Mai - Business Analytics Portfolio",
    description:
      "Data-driven Business Analytics professional with expertise in Python, SQL, Tableau, and ML",
    images: ["/assets/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mike Mai",
              jobTitle: "Business Analytics Graduate Student",
              alumniOf:
                "University of Southern California - Marshall School of Business",
              email: "mailto:kexiajie@usc.edu",
              url: "https://mikemmai.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/kexiajiemai",
                "https://github.com/kexiajie-coder",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
