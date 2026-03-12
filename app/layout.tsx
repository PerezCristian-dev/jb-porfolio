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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
