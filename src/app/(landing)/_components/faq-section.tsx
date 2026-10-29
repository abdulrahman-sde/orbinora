import { RiArrowRightUpLine } from "@remixicon/react";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { company, faqs } from "@/lib/content/landing";

export function FaqSection() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            align="left"
            label="FAQ"
            title="Straight answers before we hop on a call."
            description="Everything founders and engineering leaders usually ask us about scope, IP ownership, and how we work."
          />

          <Reveal className="mt-8">
            <p className="text-muted-foreground text-sm">
              Have a specific question?{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-foreground decoration-foreground/40 inline-flex items-center gap-0.5 font-medium decoration-dotted underline-offset-4 hover:underline"
              >
                <span>Email {company.email}</span>
                <RiArrowRightUpLine className="size-3.5 opacity-75" />
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7">
          <Accordion className="divide-y divide-black/6 border-y border-black/6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="border-none py-2"
              >
                <AccordionTrigger className="cursor-pointer py-4 text-base font-normal text-foreground hover:no-underline sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
