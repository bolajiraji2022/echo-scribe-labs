import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="container py-12">
      <div className="mb-6 text-center">
        <h2 className="text-lg font-medium">Frequently asked questions</h2>
      </div>
      <Accordion type="single" collapsible className="mx-auto w-full max-w-2xl">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm">How fast can we implement automation?</AccordionTrigger>
          <AccordionContent className="text-xs">Most teams implement their first automation workflows in 1–2 weeks, including integrations and customization.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-sm">Do you support security and compliance?</AccordionTrigger>
          <AccordionContent className="text-xs">Yes. We support enterprise security standards, data protection protocols, and compliance requirements for various industries.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-sm">Which tools can you integrate with?</AccordionTrigger>
          <AccordionContent className="text-xs">CRMs, Project management tools, Communication platforms, Databases, and more via APIs and webhooks.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQ;
