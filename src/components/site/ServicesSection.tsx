import { Phone, PhoneOutgoing, Users, Clock } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features 
}: { 
  icon: any; 
  title: string; 
  description: string;
  features: string[];
}) => (
  <ScrollReveal className="group rounded-xl glass-card p-6 animate-pan-out hover-pan-out">
    <div className="flex items-center gap-3 mb-4">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-[hsl(var(--brand-500))] to-[hsl(var(--brand-600))] text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
    </div>
    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
          <div className="w-1 h-1 rounded-full bg-brand-500 mt-2"></div>
          <span className="text-xs text-muted-foreground">{feature}</span>
        </li>
      ))}
    </ul>
  </ScrollReveal>
);

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-16">
      <div className="absolute inset-0 bg-gradient-radial from-brand-500/15 via-transparent to-transparent opacity-60 pointer-events-none"></div>
      <div className="container relative z-10">
      <ScrollReveal className="text-center mb-12">
        <h2 className="text-lg mb-6 border border-border rounded-md px-3 py-1 inline-block">Services</h2>
        <h3 className="text-xl font-semibold md:text-2xl mb-4">
          If a human can answer it, we can automate it
        </h3>
        <p className="text-sm text-muted-foreground">
          Tailored voice solutions to <strong className="text-foreground">transform</strong> your communication.
        </p>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
        <ScrollReveal delay={100}>
          <ServiceCard
            icon={Phone}
            title="24/7 AI Receptionist"
            description="Never miss another call. Otomato's AI receptionists handle inquiries, route calls, and capture leads around the clock with human-like conversation."
            features={[
              "Intelligent call routing and screening",
              "Appointment scheduling and calendar integration",
              "Lead capture and qualification",
              "Multilingual support and natural conversation",
              "Custom greetings and brand voice matching"
            ]}
          />
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <ServiceCard
            icon={PhoneOutgoing}
            title="Outbound Sales Agents"
            description="Scale your sales outreach with Otomato's AI agents that make personalized calls, qualify prospects, and book meetings while you focus on closing deals."
            features={[
              "Personalized prospect outreach campaigns",
              "Lead qualification and scoring",
              "Meeting scheduling and follow-up automation",
              "CRM integration and data syncing",
              "Performance tracking and optimization"
            ]}
          />
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          <ServiceCard
            icon={Users}
            title="Customer Support Agents"
            description="Provide instant, accurate support that resolves common issues and escalates complex queries to your human team when needed."
            features={[
              "Knowledge base integration and FAQ handling",
              "Issue ticketing and case management",
              "Sentiment analysis and escalation triggers",
              "Multi-channel support (voice, chat, email)",
              "Customer satisfaction tracking"
            ]}
          />
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <ServiceCard
            icon={Clock}
            title="After-Hours Coverage"
            description="Extend your business hours without hiring night staff. Capture leads, provide support, and maintain customer relationships 24/7."
            features={[
              "Emergency call handling and routing",
              "Lead capture during off-hours",
              "Basic support and information provision",
              "Message taking and priority flagging",
              "Seamless handoff to human agents"
            ]}
          />
        </ScrollReveal>
      </div>
      </div>
    </section>
  );
};

export default ServicesSection;