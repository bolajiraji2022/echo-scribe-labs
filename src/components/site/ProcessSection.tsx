import { Mic, Settings, Rocket } from "lucide-react";

const ProcessStep = ({ 
  number, 
  title, 
  description, 
  details, 
  icon: Icon 
}: { 
  number: string;
  title: string; 
  description: string;
  details: string;
  icon: any;
}) => (
  <div className="group">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[hsl(var(--brand-500))] to-[hsl(var(--brand-600))] text-white">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="flex-1">
        <div className="mb-2">
          <span className="text-brand-400 font-mono text-xs">{number})</span>
          <h3 className="text-sm font-semibold text-foreground ml-2 inline">{title}</h3>
        </div>
        <p className="text-xs text-muted-foreground mb-3">{description}</p>
        <p className="text-xs text-muted-foreground/80 leading-relaxed">{details}</p>
      </div>
    </div>
  </div>
);

const ProcessSection = () => {
  return (
    <section id="process" className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-lg font-semibold mb-2">Process</h2>
        <h3 className="text-xl font-semibold md:text-2xl mb-4">
          Your voice AI transformation in three stages
        </h3>
        <p className="text-sm text-muted-foreground">
          Most Voice Solutions Break. Ours <strong className="text-foreground">Adapt</strong>.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        <ProcessStep
          number="1"
          title="Discovery & Voice Analysis"
          description="Deep dive into your current call handling, identifying missed opportunities and bottlenecks."
          details="We analyze your call patterns, peak hours, common inquiries, and customer journey to design AI agents that perfectly match your business needs. Your team's expertise guides every decision."
          icon={Mic}
        />
        
        <ProcessStep
          number="2"
          title="Development & Training"
          description="Custom voice agents that integrate seamlessly with your existing systems."
          details="Your team keeps working the way they know best, while AI agents handle repetitive calls, qualify leads, and provide 24/7 support. Every interaction makes them smarter and more efficient."
          icon={Settings}
        />
        
        <ProcessStep
          number="3"
          title="Launch & Optimize"
          description="Deploy your intelligent voice system with continuous learning and adaptation."
          details="As your business grows and customer needs evolve, your AI agents adapt with you. Real-time analytics ensure peak performance, and updates happen seamlessly. Growth never stops."
          icon={Rocket}
        />
      </div>
    </section>
  );
};

export default ProcessSection;