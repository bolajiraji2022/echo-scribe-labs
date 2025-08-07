import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="container py-12">
      <div className="mb-6 text-center">
        <h2 className="font-display text-2xl md:text-3xl">Frequently asked questions</h2>
      </div>
      <Accordion type="single" collapsible className="mx-auto w-full max-w-2xl">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm">How fast can we go live?</AccordionTrigger>
          <AccordionContent className="text-xs text-muted-foreground">Most teams launch a first agent in 1–2 weeks, including integrations and scripting.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-sm">Do you support compliance requirements?</AccordionTrigger>
          <AccordionContent className="text-xs text-muted-foreground">Yes. We support consent workflows, call recording controls, PII handling, and regional routing.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-sm">Which tools can you integrate with?</AccordionTrigger>
          <AccordionContent className="text-xs text-muted-foreground">CRMs (HubSpot, Salesforce), Helpdesks (Zendesk), Calendars, Data warehouses, and more via APIs.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQ;
