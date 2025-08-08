import { Phone, PlugZap, BarChart3 } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const Feature = ({ Icon, title, desc }: { Icon: any; title: string; desc: string }) => (
  <ScrollReveal className="group rounded-xl glass-card p-4 animate-pan-out hover-pan-out">
    <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-[hsl(var(--brand-500))] to-[hsl(var(--brand-600))] text-white shadow-sm">
      <Icon className="h-4 w-4" />
    </div>
    <h3 className="text-sm font-medium text-foreground">{title}</h3>
    <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
  </ScrollReveal>
);

const Features = () => {
  return (
    <section id="features" className="container py-12">
      <ScrollReveal className="mb-8 text-center relative">
        <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-primary/5 to-transparent opacity-60 blur-2xl scale-110 pointer-events-none"></div>
        <h2 className="text-lg border border-border rounded-md px-3 py-1 inline-block mb-4 relative z-10">Designed for performance</h2>
        <p className="mt-1 text-muted-foreground text-sm">Everything you need to deploy Otomato automation solutions.</p>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-3">
        <ScrollReveal delay={100}>
          <Feature Icon={Phone} title="Smart workflows" desc="Intelligent automation that adapts to your business processes and scales with growth." />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Feature Icon={PlugZap} title="Easy integration" desc="Connect to your existing tools and systems in minutes, not hours." />
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <Feature Icon={BarChart3} title="Performance insights" desc="Real-time analytics and metrics to optimize your automation performance." />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Features;
