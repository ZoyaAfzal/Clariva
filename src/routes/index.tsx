import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/clariva/Navbar";
import { Hero } from "@/components/clariva/Hero";
import { SmartBenefits } from "@/components/clariva/SmartBenefits";
import { Services } from "@/components/clariva/Services";
import { Testimonials } from "@/components/clariva/Testimonials";
import { QuoteCalculator } from "@/components/clariva/QuoteCalculator";
import { Blog } from "@/components/clariva/Blog";
import { Team } from "@/components/clariva/Team";
import { Contact } from "@/components/clariva/Contact";
import { CtaBanner } from "@/components/clariva/CtaBanner";
import { Faq } from "@/components/clariva/Faq";
import { Footer } from "@/components/clariva/Footer";
import { ScrollProgress } from "@/components/clariva/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clariva — Clear coverage. Total confidence." },
      { name: "description", content: "Intelligent insurance solutions for individuals, families, and businesses. Life, health, home, vehicle, business, and travel coverage — built around your life." },
      { property: "og:title", content: "Clariva — Clear coverage. Total confidence." },
      { property: "og:description", content: "Intelligent insurance solutions tailored for individuals, families, and businesses." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SmartBenefits />
        <Services />
        <Testimonials />
        <QuoteCalculator />
        <Blog />
        <Team />
        <CtaBanner />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
