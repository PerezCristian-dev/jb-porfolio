import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "James Brock IV — Filmmaker & Director",
  description:
    "Selected work by James Brock IV — director, cinematographer, and visual storyteller crafting cinematic narratives through film.",
  openGraph: {
    title: "James Brock IV — Filmmaker & Director",
    description: "Selected work by James Brock IV — director and visual storyteller.",
    type: "website",
    url: "https://jamesbrockiv.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Brock IV — Filmmaker & Director",
    description: "Selected work by James Brock IV — director and visual storyteller.",
  },
};

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      <Hero />
      <PortfolioGrid />
    </main>
  );
}
