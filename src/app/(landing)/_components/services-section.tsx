import { ServiceIllustration } from "@/components/illustrations/agency-illustrations";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/lib/content/landing";

export function ServicesSection() {
  return (
    <Section id="services">
      <SectionHeading
        label="What we do"
        title={
          <>
            From first prototype <br className="hidden sm:inline" />
            to production scale.
          </>
        }
        description="Whether you are launching a new SaaS product from scratch, scaling an existing platform, or shipping applied AI workflows, we plug in where you need senior execution."
      />

      {/* Aside-style borderless stage + inline prose caption grid */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-10">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 0.06} className="group">
            <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-neutral-100/80 select-none md:h-80">
              <ServiceIllustration kind={service.id} />
            </div>

            <div className="px-2 pt-5 pb-2">
              <p className="text-muted-foreground text-sm leading-relaxed xl:text-base">
                <span className="text-foreground font-medium">{service.title}.</span>{" "}
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
