import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="container py-16">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[hsl(var(--brand-500))] to-[hsl(var(--brand-600))] mb-6">
          <span className="text-white text-sm font-semibold">Who We Are</span>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold md:text-2xl mb-4">
          We transform communication workflows for businesses who want to focus on growth.
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
          Named after automation excellence, we don't believe in one-size-fits-all voice solutions. 
          Every business has unique communication needs that deserve tailored AI voice agents.
        </p>
        <div className="mt-8">
          <a href="#process">
            <Button variant="outline" size="sm" className="text-xs px-4 py-2 h-8 border-brand-500/30 hover:bg-brand-500/10">
              Learn About Our Process
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;