import { Mic, Settings, Rocket } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const ProcessStep = ({ 
  title, 
  description, 
  details, 
  icon: Icon,
  delay = 0
}: { 
  title: string; 
  description: string;
  details: string;
  icon: any;
  delay?: number;
}) => (
  <ScrollReveal delay={delay} className="group">
    <div className="glass-card p-4 rounded-lg border transition-all duration-300 hover:border-brand-500/30">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[hsl(var(--brand-500))] to-[hsl(var(--brand-600))] text-white shadow-lg">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
          <p className="text-xs text-muted-foreground/80 leading-relaxed">{details}</p>
        </div>
      </div>
    </div>
  </ScrollReveal>
);

const ProcessSection = () => {
  return (
    <section id="process" className="container py-16">
      <ScrollReveal className="text-center mb-12">
        <h2 className="text-lg font-semibold mb-2">Process</h2>
        <h3 className="text-xl font-semibold md:text-2xl mb-4">
          Your voice AI transformation in three stages
        </h3>
        <p className="text-sm text-muted-foreground">
          Most Voice Solutions Break. Otomato's <strong className="text-foreground">Adapt</strong>.
        </p>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto space-y-6">
        <ProcessStep
          title="Discovery & Voice Analysis"
          description="Deep dive into your current call handling, identifying missed opportunities and bottlenecks."
          details="Otomato analyzes your call patterns, peak hours, common inquiries, and customer journey to design AI agents that perfectly match your business needs. Your team's expertise guides every decision."
          icon={Mic}
          delay={0}
        />
        
        <ProcessStep
          title="Development & Training"
          description="Custom voice agents that integrate seamlessly with your existing systems."
          details="Your team keeps working the way they know best, while AI agents handle repetitive calls, qualify leads, and provide 24/7 support. Every interaction makes them smarter and more efficient."
          icon={Settings}
          delay={200}
        />
        
        <ProcessStep
          title="Launch & Optimize"
          description="Deploy your intelligent voice system with continuous learning and adaptation."
          details="As your business grows and customer needs evolve, your AI agents adapt with you. Real-time analytics ensure peak performance, and updates happen seamlessly. Growth never stops."
          icon={Rocket}
          delay={400}
        />
      </div>
    </section>
  );
};

export default ProcessSection;