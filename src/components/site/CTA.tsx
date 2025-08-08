import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";

const CTA = () => {
  return (
    <section id="cta" className="relative">
      <div className="container py-12">
        <ScrollReveal className="relative text-center overflow-hidden bg-gradient-to-br from-background via-background to-background backdrop-blur-sm border border-border rounded-3xl px-8 py-10 max-w-2xl mx-auto">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-red-400 via-red-500 to-pink-500 opacity-90 blur-2xl rounded-full -translate-x-6 -translate-y-6"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-red-600 via-red-400 to-orange-400 opacity-70 blur-xl rounded-full translate-x-4 translate-y-4"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-600/10"></div>
          <div className="relative z-10">
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTA;
