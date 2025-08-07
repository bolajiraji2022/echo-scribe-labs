import { Phone, PlugZap, BarChart3 } from "lucide-react";

const Feature = ({ Icon, title, desc }: { Icon: any; title: string; desc: string }) => (
  <div className="group rounded-lg border bg-card/50 p-4 shadow-sm transition-all hover:bg-card/80 hover:shadow-md backdrop-blur-sm animate-pan-out hover-pan-out">
    <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-[hsl(var(--brand-500))] to-[hsl(var(--brand-600))] text-white shadow-sm">
      <Icon className="h-4 w-4" />
    </div>
    <h3 className="text-sm font-medium text-foreground">{title}</h3>
    <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="container py-12">
      <div className="mb-8 text-center">
        <h2 className="text-lg font-medium">Designed for performance</h2>
        <p className="mt-1 text-muted-foreground text-sm">Everything you need to deploy automation solutions.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Feature Icon={Phone} title="Smart workflows" desc="Intelligent automation that adapts to your business processes and scales with growth." />
        <Feature Icon={PlugZap} title="Easy integration" desc="Connect to your existing tools and systems in minutes, not hours." />
        <Feature Icon={BarChart3} title="Performance insights" desc="Real-time analytics and metrics to optimize your automation performance." />
      </div>
    </section>
  );
};

export default Features;
