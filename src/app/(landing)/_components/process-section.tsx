"use client";

import React, { useState } from "react";
import * as motion from "motion/react-client";
import {
  RiCheckboxCircleFill,
  RiGitPullRequestLine,
  RiPlayCircleLine,
  RiShieldCheckLine,
} from "@remixicon/react";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { steps } from "@/lib/content/landing";
import { cn } from "@/lib/utils";

const VELOCITY_BENCHMARKS = [
  {
    label: "Orbinora Dedicated Squad",
    sublabel: "2-wk prototype + 6–8 wk production build",
    weeks: 8,
    maxWeeks: 30,
    highlight: true,
  },
  {
    label: "Traditional Dev Agency",
    sublabel: "Slow handoffs, change-order delays",
    weeks: 22,
    maxWeeks: 30,
    highlight: false,
  },
  {
    label: "In-House Hiring & Ramp-Up",
    sublabel: "Recruiting, notice periods, onboarding",
    weeks: 28,
    maxWeeks: 30,
    highlight: false,
  },
];

export function ProcessSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStep = steps[activeIdx];

  return (
    <Section id="process">
      <SectionHeading
        label="How we work"
        title={
          <>
            A predictable path from <br className="hidden sm:inline" />
            first call to live users.
          </>
        }
        description="No black-box sprints or surprise invoices. You see working software every Friday and pay against shipped milestones."
      />

      {/* Aside BenchmarkCharts-style minimal segmented tab switcher */}
      <Reveal className="mt-12 flex justify-center">
        <div
          role="tablist"
          aria-label="Delivery stages"
          className="bg-muted inline-flex flex-wrap items-center justify-center gap-1 rounded-xl p-1"
        >
          {steps.map((step, idx) => {
            const isSelected = idx === activeIdx;
            return (
              <button
                key={step.phase}
                role="tab"
                type="button"
                aria-selected={isSelected}
                onClick={() => setActiveIdx(idx)}
                className={cn(
                  "cursor-pointer rounded-lg px-4 py-2 text-xs font-medium transition-all sm:text-sm",
                  isSelected
                    ? "bg-white text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="mr-1.5 text-muted-foreground/70 tabular-nums">{step.phase}</span>
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Soft, borderless stage showing active step details + visual artifact */}
      <Reveal className="mt-8 overflow-hidden rounded-2xl bg-neutral-100/80 p-6 sm:p-10 lg:p-12">
        <motion.div
          key={activeStep.phase}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid items-center gap-10 lg:grid-cols-12"
        >
          {/* Left: Relaxed Step Explanation */}
          <div className="lg:col-span-6">
            <p className="text-muted-foreground text-xs font-medium">
              {activeStep.phase} · {activeStep.duration} · {activeStep.cadence}
            </p>
            <h3 className="font-display text-foreground mt-2 text-2xl leading-8 font-normal sm:text-3xl sm:leading-10">
              {activeStep.title}
            </h3>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed">
              {activeStep.description}
            </p>
            <p className="text-muted-foreground mt-6 border-t border-black/6 pt-4 text-sm">
              <span className="text-foreground font-medium">Deliverables:</span> {activeStep.artifacts.join(" · ")}
            </p>
          </div>

          {/* Right: Clean Interactive Artifact Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white p-6 shadow-lg shadow-black/[0.04] ring-1 ring-black/[0.06]">
              {activeIdx === 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-black/6 pb-3 text-xs">
                    <span className="font-medium text-foreground">Scope & Budget Brief</span>
                    <span className="text-emerald-600 font-medium">48-Hour Turnaround</span>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2.5">
                      <span className="text-muted-foreground">Engagement Model</span>
                      <span className="font-medium text-foreground">Fixed-Scope Milestones</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2.5">
                      <span className="text-muted-foreground">Target Launch Window</span>
                      <span className="font-medium text-foreground tabular-nums">8–10 Weeks</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2.5">
                      <span className="text-muted-foreground">IP & Repository</span>
                      <span className="font-medium text-foreground">100% Client-Owned Day 1</span>
                    </div>
                  </div>
                </div>
              )}

              {activeIdx === 1 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-black/6 pb-3 text-xs">
                    <span className="font-medium text-foreground">2-Week Discovery Output</span>
                    <span className="text-primary font-medium">Ready for Sign-Off</span>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    {[
                      "Interactive Figma user flows & component library",
                      "PostgreSQL multi-tenant schema & API contracts",
                      "Milestone-by-milestone delivery schedule",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 rounded-lg bg-neutral-50 px-3 py-2.5 text-foreground">
                        <RiCheckboxCircleFill className="size-4 shrink-0 text-emerald-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeIdx === 2 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-black/6 pb-3 text-xs">
                    <span className="font-medium text-foreground">Friday Staging Release</span>
                    <span className="text-emerald-600 font-medium">Live on Staging URL</span>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2.5">
                      <span className="flex items-center gap-2 font-medium text-foreground">
                        <RiGitPullRequestLine className="size-4 text-primary" />
                        14 PRs merged to your GitHub
                      </span>
                      <span className="text-muted-foreground tabular-nums">100% CI green</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2.5">
                      <span className="flex items-center gap-2 font-medium text-foreground">
                        <RiPlayCircleLine className="size-4 text-emerald-600" />
                        Loom walkthrough + live founder Q&A
                      </span>
                      <span className="text-muted-foreground">Every Friday</span>
                    </div>
                  </div>
                </div>
              )}

              {activeIdx === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-black/6 pb-3 text-xs">
                    <span className="font-medium text-foreground">Production Handover & Warranty</span>
                    <span className="text-emerald-600 font-medium">30-Day Coverage</span>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center gap-2.5 rounded-lg bg-neutral-50 px-3 py-2.5 text-foreground">
                      <RiShieldCheckLine className="size-4 shrink-0 text-primary" />
                      <span>Zero-downtime cutover on your AWS / Vercel account</span>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-lg bg-neutral-50 px-3 py-2.5 text-foreground">
                      <RiCheckboxCircleFill className="size-4 shrink-0 text-emerald-500" />
                      <span>Runbooks, architecture docs & team training included</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Reveal>

      {/* Aside BenchmarkCharts-style Time-to-Launch Comparison */}
      <Reveal className="mt-16 pt-8">
        <div className="max-w-xl">
          <h3 className="font-display text-foreground text-2xl leading-8 font-normal xl:text-3xl">
            Ship in 8 weeks, not 6 months.
          </h3>
          <p className="text-muted-foreground mt-2 text-base">
            How a dedicated Orbinora product squad compares to traditional agency outsourcing or hiring from scratch.
          </p>
        </div>

        <div className="mt-8 space-y-5">
          {VELOCITY_BENCHMARKS.map((row) => {
            const widthPct = Math.round((row.weeks / row.maxWeeks) * 100);
            return (
              <div key={row.label} className="space-y-2">
                <div className="flex items-baseline justify-between text-sm">
                  <div>
                    <span className={cn("font-medium", row.highlight ? "text-foreground" : "text-muted-foreground")}>
                      {row.label}
                    </span>
                    <span className="text-muted-foreground ml-2 hidden text-xs sm:inline">
                      · {row.sublabel}
                    </span>
                  </div>
                  <span
                    className={cn(
                      "tabular-nums",
                      row.highlight ? "font-medium text-primary" : "text-muted-foreground",
                    )}
                  >
                    {row.weeks} weeks
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${widthPct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "h-full rounded-full",
                      row.highlight ? "bg-primary" : "bg-neutral-300",
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
