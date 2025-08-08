import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";

const CTA = () => {
  return (
    <section id="cta" className="relative bg-background py-16">
      <div className="container">
        <ScrollReveal className="text-center relative">
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/10 to-transparent opacity-70 blur-3xl scale-150 pointer-events-none"></div>
          <div className="bg-card/30 backdrop-blur-md border-2 border-primary/20 rounded-3xl px-10 py-12 max-w-3xl mx-auto relative z-10 shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02]">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              Ready to transform your communication?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-4 text-muted-foreground text-lg md:text-xl transition-all duration-500 hover:text-foreground">
              Get a tailored Otomato demo and see your AI voice agents in action in under 30 minutes.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200} className="mt-8 flex items-center justify-center gap-4 flex-col sm:flex-row">
            <a href="mailto:hello@otomato.com">
              <Button variant="hero" size="lg" className="text-base px-8 py-4 h-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Start Your Transformation
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" size="lg" className="text-base px-8 py-4 h-12 border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                Explore Services
              </Button>
            </a>
          </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTA;
