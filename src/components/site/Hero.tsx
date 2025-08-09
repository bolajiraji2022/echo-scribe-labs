import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Signature interaction: reactive gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx) var(--my), hsl(var(--brand-400)/0.15), transparent 40%)",
        }}
      />

      <div className="container flex min-h-[65vh] flex-col items-center justify-center py-16 text-center relative">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1">
          <div className="h-2 w-2 rounded-full bg-brand-500 animate-pulse"></div>
          <span className="text-xs font-medium text-brand-400">New: 24/7 Voice AI Agents</span>
        </div>
        <h1 className="text-2xl font-semibold leading-tight md:text-4xl max-w-4xl bg-gradient-to-r from-white via-red-400 via-red-600 to-white bg-clip-text text-transparent animate-gradient-move">
          Stop missing calls while you sleep
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-muted-foreground text-sm leading-relaxed">
          Otomato <strong className="text-foreground">transforms</strong> your business into a 24/7 customer-engaging machine with AI voice agents that never rest.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#process">
            <Button variant="outline" size="sm" className="text-xs px-4 py-2 h-8 border-brand-500/30 hover:bg-brand-500/10">See How We Do It</Button>
          </a>
          <a href="#cta">
            <Button variant="hero" size="sm" className="text-xs px-4 py-2 h-8">Start Your Transformation</Button>
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 opacity-60 md:grid-cols-4 text-center">
          <div className="text-xs text-muted-foreground">Inbound Reception</div>
          <div className="text-xs text-muted-foreground">Outbound Sales</div>
          <div className="text-xs text-muted-foreground">Lead Qualification</div>
          <div className="text-xs text-muted-foreground">24/7 Availability</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
