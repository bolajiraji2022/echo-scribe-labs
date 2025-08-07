import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="cta" className="relative border-t bg-gradient-to-b from-transparent to-accent/40">
      <div className="container py-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl">Ready to launch your voice agent?</h2>
        <p className="mt-2 text-muted-foreground">Get a tailored demo and roadmap in under 30 minutes.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="mailto:hello@example.com">
            <Button variant="hero" size="lg">Book a Demo</Button>
          </a>
          <a href="#features">
            <Button variant="outline" size="lg">Explore features</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
