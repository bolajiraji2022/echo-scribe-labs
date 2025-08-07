import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Features from "@/components/site/Features";
import VoiceUseCases from "@/components/site/VoiceUseCases";
import CTA from "@/components/site/CTA";
import FAQ from "@/components/site/FAQ";
import Footer from "@/components/site/Footer";
import BackgroundAnimationToggle from "@/components/site/BackgroundAnimationToggle";

const Index = () => {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Otomato",
    description: "AI-powered automation solutions for modern businesses.",
    url: "/",
  };

  return (
    <div className="min-h-screen bg-background background-animated">
      <BackgroundAnimationToggle />
      <Header />
      <main>
        <Hero />
        <Features />
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
