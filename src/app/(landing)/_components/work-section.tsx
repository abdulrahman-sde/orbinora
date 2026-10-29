import { RiArrowRightUpLine } from "@remixicon/react";
import { CaseStudyVisualPreview } from "@/components/illustrations/agency-illustrations";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { featuredWork, moreWork, primaryCta } from "@/lib/content/landing";

const allCaseStudies = [featuredWork, ...moreWork];

export function WorkSection() {
  return (
    <Section id="work">
      <SectionHeading
        align="split"
        label="Selected work"
        title="Products we have taken from brief to production."
        description="Representative engagements across fintech, healthcare operations, and applied legal AI—shipped on fixed-scope milestones."
      />

      <div className="mt-16 divide-y divide-black/6">
        {allCaseStudies.map((study, index) => (
          <Reveal
            key={study.id}
            delay={index * 0.05}
            className="grid items-center gap-10 py-14 first:pt-0 last:pb-0 lg:grid-cols-12 lg:gap-14"
          >
            {/* Visual Stage */}
            <div className={index % 2 === 1 ? "lg:order-2 lg:col-span-6" : "lg:col-span-6"}>
              <CaseStudyVisualPreview theme={study.id} />
            </div>

            {/* Relaxed Editorial Copy */}
            <div className={index % 2 === 1 ? "lg:order-1 lg:col-span-6" : "lg:col-span-6"}>
              <p className="text-muted-foreground text-sm">
                <span className="text-foreground font-medium">{study.client}</span> · {study.category}
              </p>

              <h3 className="font-display text-foreground mt-3 text-2xl leading-8 font-normal sm:text-3xl sm:leading-10">
                {study.outcome}
              </h3>

              <p className="text-muted-foreground mt-4 text-base leading-relaxed">
                {study.solution}
              </p>

              {/* Clean, borderless outcome metrics */}
              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-black/6 pt-6">
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="font-display text-foreground text-2xl font-normal tabular-nums sm:text-3xl">
                      {metric.value}
                    </div>
                    <div className="text-muted-foreground mt-1 text-xs sm:text-sm">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 flex flex-col items-start justify-between gap-4 rounded-2xl bg-neutral-50 px-6 py-6 sm:flex-row sm:items-center sm:px-8">
        <p className="text-muted-foreground text-sm sm:text-base">
          <span className="text-foreground font-medium">Want to see live staging demos and architecture walkthroughs?</span>{" "}
          We share full code and product tours on our intro call.
        </p>
        <a
          href={primaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand decoration-brand/40 inline-flex shrink-0 items-center gap-0.5 text-sm font-medium decoration-dotted underline-offset-4 hover:underline"
        >
          <span>Request a walkthrough</span>
          <RiArrowRightUpLine className="size-4" />
        </a>
      </Reveal>
    </Section>
  );
}
