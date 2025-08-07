import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="cta" className="relative border-t bg-gradient-to-b from-transparent to-accent/40">
      <div className="container py-12 text-center">
        <h2 className="text-lg font-medium">Ready to automate your workflows?</h2>
        <p className="mt-1 text-muted-foreground text-sm">Get a tailored demo and roadmap in under 30 minutes.</p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <a href="mailto:hello@otomato.com">
            <Button variant="hero" size="sm" className="text-xs px-4 py-2 h-8">Book a Demo</Button>
          </a>
          <a href="#features">
            <Button variant="outline" size="sm" className="text-xs px-4 py-2 h-8">Explore Features</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
