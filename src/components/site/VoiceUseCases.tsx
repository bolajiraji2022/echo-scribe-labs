import { CheckCircle2 } from "lucide-react";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[hsl(var(--brand-500))]" /> {children}</li>
);

const VoiceUseCases = () => {
  return (
    <section id="use-cases" className="container py-16">
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-8 shadow-sm">
          <h3 className="font-display text-2xl">Inbound Agents</h3>
          <p className="mt-2 text-muted-foreground">Your front line for routing, support, and sales triage.</p>
          <ul className="mt-4 space-y-2">
            <Bullet>Smart call routing and IVR replacement</Bullet>
            <Bullet>FAQ resolution with knowledge base grounding</Bullet>
            <Bullet>Secure identity verification and case creation</Bullet>
          </ul>
        </div>
        <div className="rounded-lg border bg-card p-8 shadow-sm">
          <h3 className="font-display text-2xl">Outbound Agents</h3>
          <p className="mt-2 text-muted-foreground">Proactive outreach that actually converts.</p>
          <ul className="mt-4 space-y-2">
            <Bullet>Lead qualification and follow-ups</Bullet>
            <Bullet>Appointment scheduling and reminders</Bullet>
            <Bullet>Payment collection and renewals</Bullet>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VoiceUseCases;
