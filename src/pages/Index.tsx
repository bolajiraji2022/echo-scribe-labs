import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import AboutSection from "@/components/site/AboutSection";
import ProcessSection from "@/components/site/ProcessSection";
import Features from "@/components/site/Features";
import ServicesSection from "@/components/site/ServicesSection";
import VoiceUseCases from "@/components/site/VoiceUseCases";
import CTA from "@/components/site/CTA";
import FAQ from "@/components/site/FAQ";
import Footer from "@/components/site/Footer";
import BackgroundAnimationToggle from "@/components/site/BackgroundAnimationToggle";
import { Button } from "@/components/ui/button";

const Index = () => {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Otomato",
    description: "24/7 AI voice agents for inbound and outbound automation. Transform your business communication.",
    url: "/",
  };

  return (
    <div className="min-h-screen bg-background background-animated">
      <BackgroundAnimationToggle />
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProcessSection />
        <Features />
        <ServicesSection />
        <VoiceUseCases />
        <CTA />
        <FAQ />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
    </div>
  );
};

export default Index;
