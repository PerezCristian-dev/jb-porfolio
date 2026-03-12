import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      <Hero />
      <PortfolioGrid />
    </main>
  );
}
