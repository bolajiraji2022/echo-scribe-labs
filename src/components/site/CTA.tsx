import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="cta" className="relative border-t bg-gradient-to-b from-transparent to-card/40 backdrop-blur-sm">
      <div className="container py-12 text-center">
        <h2 className="text-lg font-medium">Ready to transform your communication?</h2>
        <p className="mt-1 text-muted-foreground text-sm">Get a tailored demo and see your AI voice agents in action in under 30 minutes.</p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <a href="mailto:hello@otomato.com">
            <Button variant="hero" size="sm" className="text-xs px-4 py-2 h-8">Start Your Transformation</Button>
          </a>
          <a href="#services">
            <Button variant="outline" size="sm" className="text-xs px-4 py-2 h-8">Explore Services</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
