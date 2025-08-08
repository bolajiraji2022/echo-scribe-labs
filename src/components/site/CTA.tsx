import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";

const CTA = () => {
  return (
    <section id="cta" className="relative bg-gradient-to-r from-primary/5 via-background to-primary/5 py-16">
      <div className="container">
        <ScrollReveal className="text-center bg-card/40 backdrop-blur-sm border border-primary/20 rounded-3xl px-8 py-12 max-w-2xl mx-auto shadow-lg shadow-primary/10">
          <ScrollReveal>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Ready to transform your communication?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-3 text-muted-foreground text-base transition-all duration-500 hover:text-foreground">
              Get a tailored Otomato demo and see your AI voice agents in action in under 30 minutes.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200} className="mt-6 flex items-center justify-center gap-3">
            <a href="mailto:hello@otomato.com">
              <Button variant="hero" size="sm" className="text-sm px-6 py-3 h-10">
                Start Your Transformation
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" size="sm" className="text-sm px-6 py-3 h-10">
                Explore Services
              </Button>
            </a>
          </ScrollReveal>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTA;
