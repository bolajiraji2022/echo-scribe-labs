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

      <div className="container flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
        <h1 className="font-display text-3xl leading-tight md:text-5xl">
          AI Voice Agents for Inbound & Outbound
        </h1>
        <p className="mt-3 max-w-xl text-balance text-muted-foreground md:text-base">
          Minimal, fast, and reliable voice automation. Book a demo to see how our agents route calls, qualify leads, and resolve support in minutes.
        </p>
        <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row">
          <a href="#cta">
            <Button variant="hero" size="lg">Book a Demo</Button>
          </a>
          <a href="#use-cases">
            <Button variant="outline" size="default">See How It Works</Button>
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 opacity-70 md:grid-cols-4">
          <div className="text-xs text-muted-foreground">24/7 Coverage</div>
          <div className="text-xs text-muted-foreground">Natural Conversations</div>
          <div className="text-xs text-muted-foreground">CRM Ready</div>
          <div className="text-xs text-muted-foreground">Secure & Compliant</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
