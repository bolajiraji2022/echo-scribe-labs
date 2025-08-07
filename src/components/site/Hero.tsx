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

      <div className="container flex min-h-[50vh] flex-col items-center justify-center py-16 text-center">
        <h1 className="text-lg font-medium md:text-xl">
          Automate smart. Scale faster.
        </h1>
        <p className="mt-3 max-w-xl text-balance text-muted-foreground text-sm">
          Minimal AI-powered automation solutions for modern businesses. Book a demo to see how Otomato streamlines your workflows and boosts productivity.
        </p>
        <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row">
          <a href="#cta">
            <Button variant="hero" size="sm" className="text-xs px-4 py-2 h-8">Book a Demo</Button>
          </a>
          <a href="#use-cases">
            <Button variant="outline" size="sm" className="text-xs px-4 py-2 h-8">See How It Works</Button>
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 opacity-60 md:grid-cols-4">
          <div className="text-xs text-muted-foreground">Smart Automation</div>
          <div className="text-xs text-muted-foreground">Easy Integration</div>
          <div className="text-xs text-muted-foreground">Scalable Solutions</div>
          <div className="text-xs text-muted-foreground">Secure & Reliable</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
