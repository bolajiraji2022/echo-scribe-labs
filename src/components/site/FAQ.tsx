import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ui/scroll-reveal";

const FAQ = () => {
  return (
    <section id="faq" className="container py-12">
      <ScrollReveal className="mb-6 text-center">
        <h2 className="text-lg border border-border rounded-md px-3 py-1 inline-block mb-6">Frequently Asked Questions</h2>
      </ScrollReveal>
      <ScrollReveal delay={200} className="mx-auto w-full max-w-2xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm">How quickly can our AI voice agents be deployed?</AccordionTrigger>
            <AccordionContent className="text-xs">Most businesses have their first AI voice agent handling calls within 1-2 weeks, including training, integration, and customization to your specific needs.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-sm">Can the AI agents integrate with our existing phone system?</AccordionTrigger>
            <AccordionContent className="text-xs">Yes. Our AI agents integrate seamlessly with popular phone systems, CRMs, and business tools. We support SIP, VoIP, and traditional phone lines with no disruption to your current setup.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-sm">What happens if the AI can't handle a call?</AccordionTrigger>
            <AccordionContent className="text-xs">Our AI agents are trained to recognize when they need human assistance and seamlessly transfer calls to your team. They provide context and call history to ensure smooth handoffs.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-sm">How natural do the AI voices sound?</AccordionTrigger>
            <AccordionContent className="text-xs">Our AI agents use advanced voice synthesis that's virtually indistinguishable from human conversation. We can even match your brand's tone and style for consistent customer experiences.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </ScrollReveal>
    </section>
  );
};

export default FAQ;
