import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "James Brock IV — Filmmaker & Director",
  description:
    "Visual storytelling through film. Director, cinematographer, and creative based in [City].",
  keywords: ["filmmaker", "director", "cinematographer", "visual storytelling", "commercial", "short film"],
  openGraph: {
    title: "James Brock IV — Filmmaker & Director",
    description: "Visual storytelling through film.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "James Brock IV",
  jobTitle: "Filmmaker & Director",
  url: "https://jamesbrockiv.com",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
