import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/about/AboutSection";
import ClientsList from "@/components/about/ClientsList";
import ContactSection from "@/components/about/ContactSection";

export const metadata: Metadata = {
  title: "About — James Brock IV",
  description: "Filmmaker and director based in [City]. Visual storytelling for brands and narratives.",
};

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      <AboutSection />
      <ClientsList />
      <ContactSection />
    </main>
  );
}
