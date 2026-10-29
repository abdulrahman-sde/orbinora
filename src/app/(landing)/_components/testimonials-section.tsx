"use client";

import React, { useState } from "react";
import * as motion from "motion/react-client";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { ClientBrandLogo } from "@/components/illustrations/agency-illustrations";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/lib/content/landing";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <Section id="reviews">
      <SectionHeading
        label="Client stories"
        title={
          <>
            What founders and CTOs say <br className="hidden sm:inline" />
            about shipping with us.
          </>
        }
        description="Every engagement is built around weekly working software and direct access to the engineers writing your code."
      />

      {/* Quartz Libre LandingTestimonials-style stacked card deck */}
      <Reveal className="mt-16">
        <div className="relative mx-auto max-w-xl">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute inset-y-0 -left-16 my-auto hidden size-9 cursor-pointer items-center justify-center rounded-full bg-white text-foreground shadow-sm shadow-black/10 ring-1 ring-black/8 transition hover:bg-neutral-50 md:inline-flex"
          >
            <RiArrowLeftSLine className="size-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute inset-y-0 -right-16 my-auto hidden size-9 cursor-pointer items-center justify-center rounded-full bg-white text-foreground shadow-sm shadow-black/10 ring-1 ring-black/8 transition hover:bg-neutral-50 md:inline-flex"
          >
            <RiArrowRightSLine className="size-5" />
          </button>

          {/* Subtle background stacked cards */}
          <div
            aria-hidden="true"
            className="absolute inset-0 origin-bottom translate-y-6 scale-90 rounded-2xl bg-white shadow-sm ring-1 ring-black/6"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 origin-bottom translate-y-3 scale-95 rounded-2xl bg-white shadow-sm ring-1 ring-black/8"
          />

          {/* Active Testimonial Card */}
          <motion.div
            key={current.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28 }}
            className="relative z-10 space-y-8 rounded-2xl bg-white p-8 shadow-lg shadow-black/[0.06] ring-1 ring-black/8 sm:p-10"
          >
            <div className="flex items-center justify-between">
              <ClientBrandLogo name={current.company} />
              <span className="text-muted-foreground text-xs">{current.metricBadge ?? current.highlight}</span>
            </div>

            <blockquote className="font-display text-foreground text-lg leading-relaxed font-normal sm:text-xl">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3.5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-xs font-medium text-foreground ring-1 ring-black/6">
                  {current.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{current.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {current.role}, {current.company}
                  </div>
                </div>
              </div>

              {/* Dots navigation */}
              <div className="flex items-center gap-1.5">
                {testimonials.map((t, idx) => (
                  <button
                    key={t.name}
                    type="button"
                    aria-label={`View quote from ${t.name}`}
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      "h-1.5 cursor-pointer rounded-full transition-all",
                      idx === activeIndex ? "w-5 bg-foreground" : "w-1.5 bg-black/15 hover:bg-black/30",
                    )}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Reveal>
    </Section>
  );
}
