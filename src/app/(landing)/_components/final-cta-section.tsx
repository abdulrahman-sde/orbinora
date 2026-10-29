"use client";

import { useState } from "react";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "@remixicon/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { company, primaryCta } from "@/lib/content/landing";
import { cn } from "@/lib/utils";

const BUDGET_OPTIONS = ["$15k – $30k", "$30k – $60k", "$60k – $100k", "$100k+"] as const;

export function FinalCtaSection() {
  const [selectedBudget, setSelectedBudget] = useState<string>(BUDGET_OPTIONS[1]);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="mx-auto w-full py-12 sm:py-16 xl:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-8">
        <div
          className="bg-landing-banner relative overflow-hidden rounded-2xl bg-cover bg-center px-6 py-16 sm:px-12 sm:py-20 lg:rounded-3xl lg:p-16"
          style={{
            backgroundImage: "url(/media/background.2tnr0c16bt-fz.webp)",
          }}
        >
          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Editorial Pitch */}
            <div className="lg:col-span-6">
              <h2 className="font-display text-foreground text-3xl leading-9 font-normal tracking-[-0.015em] sm:text-4xl sm:leading-11 xl:text-5xl xl:leading-13">
                Tell us what you’re building.
              </h2>

              <p className="mt-4 max-w-md text-base leading-relaxed text-foreground/75 sm:text-lg">
                Send a short note or book a 25-minute intro call. A senior architect will review your goals and reply
                within {company.replyTime} with a suggested scope and timeline.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-foreground px-5 text-sm font-[450] text-background transition hover:bg-foreground/85"
                >
                  <span>{primaryCta.label}</span>
                  <RiArrowRightUpLine className="size-4 opacity-80" />
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex h-10 items-center justify-center rounded-full bg-white/80 px-4 text-sm font-[450] text-foreground ring-1 ring-black/8 backdrop-blur-sm transition hover:bg-white"
                >
                  {company.email}
                </a>
              </div>
            </div>

            {/* Right Clean Frosted Brief Card */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-white/92 p-6 shadow-xl ring-1 ring-black/8 backdrop-blur-xl sm:p-8">
                {submitted ? (
                  <div className="flex min-h-72 flex-col items-center justify-center text-center">
                    <RiCheckboxCircleFill className="size-10 text-emerald-500" />
                    <h3 className="font-display mt-4 text-2xl font-normal text-foreground">
                      Thanks—we’ve got your note.
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      One of our principal engineers is reviewing your brief and will reply within {company.replyTime}.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 cursor-pointer text-xs font-medium text-primary underline underline-offset-4"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="contact-name" className="text-xs font-medium text-foreground">
                          Your name
                        </Label>
                        <Input
                          id="contact-name"
                          name="name"
                          required
                          placeholder="Alex Morgan"
                          className="h-10 bg-white"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="contact-email" className="text-xs font-medium text-foreground">
                          Work email
                        </Label>
                        <Input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          placeholder="alex@company.com"
                          className="h-10 bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="block text-xs font-medium text-foreground">Estimated budget</span>
                      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
                        {BUDGET_OPTIONS.map((budget) => {
                          const active = selectedBudget === budget;
                          return (
                            <button
                              key={budget}
                              type="button"
                              onClick={() => setSelectedBudget(budget)}
                              className={cn(
                                "cursor-pointer rounded-lg px-2.5 py-2 text-xs font-medium transition-all",
                                active
                                  ? "bg-foreground text-background"
                                  : "bg-neutral-100 text-muted-foreground hover:text-foreground",
                              )}
                            >
                              {budget}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="contact-summary" className="text-xs font-medium text-foreground">
                        What are you building?
                      </Label>
                      <Textarea
                        id="contact-summary"
                        name="summary"
                        required
                        rows={3}
                        placeholder="Goals, target launch window, or links to anything you have today..."
                        className="bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full bg-foreground px-5 text-sm font-[450] text-background transition hover:bg-foreground/85"
                    >
                      <span>Send project brief</span>
                      <RiArrowRightUpLine className="size-4 opacity-80" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] lg:rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
