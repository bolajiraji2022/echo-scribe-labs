import { Phone, PlugZap, BarChart3 } from "lucide-react";

const Feature = ({ Icon, title, desc }: { Icon: any; title: string; desc: string }) => (
  <div className="group rounded-lg border bg-card p-5 shadow-sm transition-colors hover:bg-accent/40">
    <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-[hsl(var(--brand-500))] to-[hsl(var(--brand-600))] text-primary-foreground">
      <Icon className="h-4 w-4" />
    </div>
    <h3 className="text-sm font-medium">{title}</h3>
    <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="container py-12">
      <div className="mb-8 text-center">
        <h2 className="font-display text-2xl md:text-3xl">Designed for performance</h2>
        <p className="mt-1 text-sm text-muted-foreground">Everything you need to deploy production voice agents.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Feature Icon={Phone} title="Natural conversations" desc="Latency-optimized responses with human-like prosody and interruption handling." />
        <Feature Icon={PlugZap} title="Integrated workflows" desc="Connect to your CRM, help desk, calendar, and data sources in minutes." />
        <Feature Icon={BarChart3} title="Realtime analytics" desc="Live transcripts, outcomes, and conversion metrics to improve performance." />
      </div>
    </section>
  );
};

export default Features;
