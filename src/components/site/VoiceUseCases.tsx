import { CheckCircle2 } from "lucide-react";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-xs text-muted-foreground"><CheckCircle2 className="mt-0.5 h-3 w-3 text-[hsl(var(--brand-500))]" /> {children}</li>
);

const VoiceUseCases = () => {
  return (
    <section id="use-cases" className="container py-12">
      <div className="text-center mb-8 relative">
        <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-primary/5 to-transparent opacity-60 blur-2xl scale-110 pointer-events-none"></div>
        <h2 className="text-lg border border-border rounded-md px-3 py-1 inline-block relative z-10">Use Cases</h2>
      </div>
      <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="rounded-lg border bg-card/50 p-6 shadow-sm backdrop-blur-sm hover:bg-card/80 transition-all">
          <h3 className="text-sm font-medium text-foreground">Workflow Automation</h3>
          <p className="mt-1 text-muted-foreground text-xs">Streamline your business processes with Otomato's intelligent automation.</p>
          <ul className="mt-3 space-y-1">
            <Bullet>Smart task routing and process optimization</Bullet>
            <Bullet>Data validation and automated decision making</Bullet>
            <Bullet>Integration with existing business tools</Bullet>
          </ul>
        </div>
        <div className="rounded-lg border bg-card/50 p-6 shadow-sm backdrop-blur-sm hover:bg-card/80 transition-all">
          <h3 className="text-sm font-medium text-foreground">Customer Experience</h3>
          <p className="mt-1 text-muted-foreground text-xs">Enhance customer interactions with Otomato's AI-powered solutions.</p>
          <ul className="mt-3 space-y-1">
            <Bullet>Automated response systems and support</Bullet>
            <Bullet>Personalized customer journey automation</Bullet>
            <Bullet>Real-time analytics and optimization</Bullet>
          </ul>
        </div>
        <div className="rounded-lg border bg-card/50 p-6 shadow-sm backdrop-blur-sm hover:bg-card/80 transition-all">
          <h3 className="text-sm font-medium text-foreground">Sales & Lead Generation</h3>
          <p className="mt-1 text-muted-foreground text-xs">Automate your sales processes and qualify leads with AI voice agents.</p>
          <ul className="mt-3 space-y-1">
            <Bullet>Automated outbound sales calls and follow-ups</Bullet>
            <Bullet>Lead qualification and appointment scheduling</Bullet>
            <Bullet>Sales pipeline management and tracking</Bullet>
          </ul>
        </div>
        <div className="rounded-lg border bg-card/50 p-6 shadow-sm backdrop-blur-sm hover:bg-card/80 transition-all">
          <h3 className="text-sm font-medium text-foreground">Healthcare & Medical</h3>
          <p className="mt-1 text-muted-foreground text-xs">Enhance healthcare communication with automated patient interactions.</p>
          <ul className="mt-3 space-y-1">
            <Bullet>Appointment reminders and confirmations</Bullet>
            <Bullet>Patient intake and medical history collection</Bullet>
            <Bullet>Insurance verification and billing support</Bullet>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VoiceUseCases;
