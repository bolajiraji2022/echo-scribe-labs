import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="container py-16">
      <div className="mb-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl">Frequently asked questions</h2>
      </div>
      <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl">
        <AccordionItem value="item-1">
          <AccordionTrigger>How fast can we go live?</AccordionTrigger>
          <AccordionContent>Most teams launch a first agent in 1–2 weeks, including integrations and scripting.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do you support compliance requirements?</AccordionTrigger>
          <AccordionContent>Yes. We support consent workflows, call recording controls, PII handling, and regional routing.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Which tools can you integrate with?</AccordionTrigger>
          <AccordionContent>CRMs (HubSpot, Salesforce), Helpdesks (Zendesk), Calendars, Data warehouses, and more via APIs.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQ;
