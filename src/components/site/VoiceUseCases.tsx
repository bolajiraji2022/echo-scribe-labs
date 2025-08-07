import { CheckCircle2 } from "lucide-react";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-xs text-muted-foreground"><CheckCircle2 className="mt-0.5 h-3 w-3 text-[hsl(var(--brand-500))]" /> {children}</li>
);

const VoiceUseCases = () => {
  return (
    <section id="use-cases" className="container py-12">
      <div className="grid items-start gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card/50 p-6 shadow-sm backdrop-blur-sm hover:bg-card/80 transition-all">
          <h3 className="text-sm font-medium text-foreground">Workflow Automation</h3>
          <p className="mt-1 text-muted-foreground text-xs">Streamline your business processes with intelligent automation.</p>
          <ul className="mt-3 space-y-1">
            <Bullet>Smart task routing and process optimization</Bullet>
            <Bullet>Data validation and automated decision making</Bullet>
            <Bullet>Integration with existing business tools</Bullet>
          </ul>
        </div>
        <div className="rounded-lg border bg-card/50 p-6 shadow-sm backdrop-blur-sm hover:bg-card/80 transition-all">
          <h3 className="text-sm font-medium text-foreground">Customer Experience</h3>
          <p className="mt-1 text-muted-foreground text-xs">Enhance customer interactions with AI-powered solutions.</p>
          <ul className="mt-3 space-y-1">
            <Bullet>Automated response systems and support</Bullet>
            <Bullet>Personalized customer journey automation</Bullet>
            <Bullet>Real-time analytics and optimization</Bullet>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VoiceUseCases;
