import { Phone, PlugZap, BarChart3 } from "lucide-react";

const Feature = ({ Icon, title, desc }: { Icon: any; title: string; desc: string }) => (
  <div className="group rounded-lg border bg-card p-6 shadow-sm transition-colors hover:bg-accent/40">
    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-r from-[hsl(var(--brand-500))] to-[hsl(var(--brand-600))] text-primary-foreground">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="font-medium">{title}</h3>
    <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="container py-16">
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl">Designed for performance</h2>
        <p className="mt-2 text-muted-foreground">Everything you need to deploy production voice agents.</p>
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
