import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";

const CTA = () => {
  return (
    <section id="cta" className="relative border-t bg-gradient-to-b from-transparent to-card/40 backdrop-blur-sm">
      <ScrollReveal className="container py-12 text-center">
        <h2 className="text-lg font-medium">Ready to transform your communication?</h2>
        <p className="mt-1 text-muted-foreground text-sm">Get a tailored Otomato demo and see your AI voice agents in action in under 30 minutes.</p>
        <ScrollReveal delay={200} className="mt-4 flex items-center justify-center gap-2">
          <a href="mailto:hello@otomato.com">
            <Button variant="hero" size="sm" className="text-xs px-4 py-2 h-8">Start Your Transformation</Button>
          </a>
          <a href="#services">
            <Button variant="outline" size="sm" className="text-xs px-4 py-2 h-8">Explore Services</Button>
          </a>
        </ScrollReveal>
      </ScrollReveal>
    </section>
  );
};

export default CTA;
