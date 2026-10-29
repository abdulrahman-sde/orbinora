import Link from "next/link";
import { RiArrowRightSLine, RiArrowRightUpLine } from "@remixicon/react";
import {
  HeroAgencyShowcase,
  HeroFloatingCraftCards,
} from "@/components/illustrations/agency-illustrations";
import { SiteNav } from "@/components/layout/site-nav";
import { primaryCta, secondaryCta } from "@/lib/content/landing";

export function HeroSection() {
  return (
    <div className="p-2 pb-0 md:p-4">
      <div
        className="bg-muted relative overflow-hidden rounded-xl bg-cover bg-center shadow-xl md:rounded-2xl lg:rounded-3xl"
        style={{
          backgroundImage: "url(/media/background.2tnr0c16bt-fz.webp)",
        }}
      >
        {/* In-Hero Navigation Bar (Aside style) */}
        <SiteNav />

        {/* Floating Tilted Craft Cards on Left & Right (Figma Design System + GitHub/AI Telemetry) */}
        <HeroFloatingCraftCards />

        {/* Editorial Hero Header */}
        <header className="relative z-10 mx-auto max-w-3xl px-6 pt-12 pb-12 text-center sm:pt-16 sm:pb-14">
          <Link
            href="#commitments"
            className="font-display text-foreground/75 border-foreground/15 hover:bg-foreground/5 mb-5 inline-flex h-6 items-center gap-0.5 rounded-full border px-3 text-xs font-[450] tracking-[0.01em] transition-colors"
          >
            <span>2-week fixed-price discovery sprint</span>
            <RiArrowRightSLine className="-mr-1 size-3.5 opacity-60" />
          </Link>

          <h1 className="font-display text-foreground mb-5 text-4xl leading-10 font-normal tracking-[-0.015em] text-balance md:text-[2.75rem] md:leading-12 xl:text-5xl xl:leading-13">
            We design, build, and scale <br className="hidden sm:inline" />
            software products that ship.
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-balance text-foreground/70 md:text-lg">
            Senior product designers, full-stack engineers, and applied AI specialists working as one dedicated team in
            your repo from day one.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-foreground px-4 text-sm font-[450] text-background transition hover:bg-foreground/85 active:scale-98 md:px-5 md:text-base"
            >
              <span>{primaryCta.label}</span>
              <RiArrowRightUpLine className="size-4 opacity-80" />
            </a>

            <Link
              href={secondaryCta.href}
              className="inline-flex h-10 items-center justify-center gap-1 rounded-full bg-white/80 px-4 text-sm font-[450] text-foreground shadow-2xs ring-1 ring-black/8 backdrop-blur-sm transition hover:bg-white md:px-5 md:text-base"
            >
              <span>{secondaryCta.label}</span>
            </Link>
          </div>
        </header>

        {/* 3-Card Shipped Client Products Showcase Strip */}
        <div className="relative z-10 w-full">
          <HeroAgencyShowcase />
        </div>

        {/* Subtle inner frame ring matching Aside Hero */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 rounded-xl shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] md:rounded-2xl lg:rounded-3xl"
        />
      </div>
    </div>
  );
}
