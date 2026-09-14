import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface PageFaq {
  question: string;
  answer: string;
}

interface PageFaqsProps {
  heading: string;
  faqs: PageFaq[];
}

export function PageFaqs({ heading, faqs }: PageFaqsProps) {
  return (
    <section className="section-padding">
      <div className="container-wide max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">{heading}</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display font-bold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
