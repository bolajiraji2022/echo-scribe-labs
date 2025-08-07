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
            "radial-gradient(600px circle at var(--mx) var(--my), hsl(var(--brand-400)/0.25), transparent 40%)",
        }}
      />

      <div className="container flex min-h-[72vh] flex-col items-center justify-center py-20 text-center">
        <h1 className="font-display text-4xl leading-tight md:text-6xl">
          AI Voice Agents for Inbound & Outbound
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-muted-foreground md:text-lg">
          Minimal, fast, and reliable voice automation. Book a demo to see how our agents route calls, qualify leads, and resolve support in minutes.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#cta">
            <Button variant="hero" size="xl">Book a Demo</Button>
          </a>
          <a href="#use-cases">
            <Button variant="outline" size="lg">See How It Works</Button>
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 opacity-80 md:grid-cols-4">
          <div className="text-sm text-muted-foreground">24/7 Coverage</div>
          <div className="text-sm text-muted-foreground">Natural Conversations</div>
          <div className="text-sm text-muted-foreground">CRM Ready</div>
          <div className="text-sm text-muted-foreground">Secure & Compliant</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
