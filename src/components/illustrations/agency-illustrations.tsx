"use client";

import React, { useEffect, useId, useState } from "react";
import * as motion from "motion/react-client";
import { useMotionValue, useReducedMotion, useTransform } from "motion/react";
import {
  RiArrowRightUpLine,
  RiCheckLine,
  RiCheckboxCircleFill,
  RiCloudLine,
  RiCpuLine,
  RiDatabase2Line,
  RiGitBranchLine,
  RiGitPullRequestLine,
  RiLayoutMasonryLine,
  RiPauseFill,
  RiPlayFill,
  RiRefreshLine,
  RiShieldCheckLine,
  RiSparkling2Fill,
  RiTerminalBoxLine,
  RiTimeLine,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/shared/logo";
import type { CaseStudyTheme, ServiceIllustrationKind } from "@/types/landing";

/* -------------------------------------------------------------------------- */
/*  Clean Brand & Model SVGs (from kairo-templates)                           */
/* -------------------------------------------------------------------------- */

export function FigmaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={cn("size-4", className)}>
      <path
        d="M9.33324 27.9999C11.9093 27.9999 14 25.9092 14 23.3332V18.6665H9.33324C6.75722 18.6665 4.6665 20.7572 4.6665 23.3332C4.6665 25.9092 6.75722 27.9999 9.33324 27.9999Z"
        fill="#0ACF83"
      />
      <path
        d="M4.6665 14.0002C4.6665 11.4242 6.75722 9.3335 9.33324 9.3335H14V18.6668H9.33324C6.75722 18.6669 4.6665 16.5762 4.6665 14.0002Z"
        fill="#A259FF"
      />
      <path
        d="M4.6665 4.6667C4.6665 2.0907 6.75722 0 9.33324 0H14V9.3333H9.33324C6.75722 9.3333 4.6665 7.2427 4.6665 4.6667Z"
        fill="#F24E1E"
      />
      <path
        d="M14 0H18.6667C21.2428 0 23.3335 2.0907 23.3335 4.6667C23.3335 7.2427 21.2428 9.3333 18.6667 9.3333H14V0Z"
        fill="#FF7262"
      />
      <path
        d="M23.3335 14.0002C23.3335 16.5762 21.2428 18.6669 18.6667 18.6669C16.0907 18.6669 14 16.5762 14 14.0002C14 11.4242 16.0907 9.3335 18.6667 9.3335C21.2428 9.3335 23.3335 11.4242 23.3335 14.0002Z"
        fill="#1ABCFE"
      />
    </svg>
  );
}

export function OpenAIIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 260" fill="currentColor" className={cn("size-4", className)}>
      <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z" />
    </svg>
  );
}

export function ClaudeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-4", className)}>
      <path
        d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.853.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GeminiIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-4", className)}>
      <path
        d="M11.4 1.2c.25-.65 1.15-.65 1.4 0l.65 1.8A15.2 15.2 0 0 0 22.6 12.2l.2.08c.65.25.65 1.15 0 1.4l-.2.08a15.2 15.2 0 0 0-9.15 9.15l-.65 1.8c-.25.65-1.15.65-1.4 0l-.65-1.8A15.2 15.2 0 0 0 1.6 13.68l-.2-.08c-.65-.25-.65-1.15 0-1.4l.2-.08A15.2 15.2 0 0 0 10.75 3l.65-1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinearIcon({ className }: { className?: string }) {
  return (
    <svg fill="none" viewBox="0 0 100 100" className={cn("size-4", className)}>
      <path
        fill="currentColor"
        d="M1.225 61.523c-.222-.949.908-1.546 1.597-.857l36.512 36.512c.69.69.092 1.82-.857 1.597-18.425-4.323-32.93-18.827-37.252-37.252ZM.002 46.889a.99.99 0 0 0 .29.76L52.35 99.71c.201.2.478.307.76.29 2.37-.149 4.695-.46 6.963-.927.765-.157 1.03-1.096.478-1.648L2.576 39.448c-.552-.551-1.491-.286-1.648.479a50.067 50.067 0 0 0-.926 6.962ZM4.21 29.705a.988.988 0 0 0 .208 1.1l64.776 64.776c.289.29.726.375 1.1.208a49.908 49.908 0 0 0 5.185-2.684.981.981 0 0 0 .183-1.54L8.436 24.336a.981.981 0 0 0-1.541.183 49.896 49.896 0 0 0-2.684 5.185Zm8.448-11.631a.986.986 0 0 1-.045-1.354C21.78 6.46 35.111 0 49.952 0 77.592 0 100 22.407 100 50.048c0 14.84-6.46 28.172-16.72 37.338a.986.986 0 0 1-1.354-.045L12.659 18.074Z"
      />
    </svg>
  );
}

export function NextjsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("size-4", className)}>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c2.04 0 3.937-.611 5.518-1.66L9.65 9.174v6.652H8.175V7.175h1.52l7.977 11.49A9.956 9.956 0 0 0 22 12c0-5.523-4.477-10-10-10Zm3.825 11.5h-1.475V7.175h1.475V13.5Z" />
    </svg>
  );
}

export function ClientBrandLogo({ name, className }: { name: string; className?: string }) {
  const key = name.toLowerCase();
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-foreground select-none", className)}>
      {key === "ledgerline" && (
        <svg viewBox="0 0 24 24" fill="none" className="size-5 shrink-0 text-foreground/80">
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M7.5 15.5L10.8 11.2L13.5 13.8L16.8 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {key === "shiftboard" && (
        <svg viewBox="0 0 24 24" fill="none" className="size-5 shrink-0 text-foreground/80">
          <rect x="3" y="4" width="8" height="7" rx="2" fill="currentColor" />
          <rect x="13" y="4" width="8" height="7" rx="2" fill="currentColor" fillOpacity="0.3" />
          <rect x="3" y="13" width="8" height="7" rx="2" fill="currentColor" fillOpacity="0.3" />
          <rect x="13" y="13" width="8" height="7" rx="2" fill="currentColor" />
        </svg>
      )}
      {key === "clinicflow" && (
        <svg viewBox="0 0 24 24" fill="none" className="size-5 shrink-0 text-foreground/80">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )}
      {key === "brieflet" && (
        <svg viewBox="0 0 24 24" fill="none" className="size-5 shrink-0 text-foreground/80">
          <path d="M6 4h9l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8.5 12h7M8.5 15.5h4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )}
      {key === "northwind" && (
        <svg viewBox="0 0 24 24" fill="none" className="size-5 shrink-0 text-foreground/80">
          <polygon points="12,3 20,19 12,15.5 4,19" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      )}
      {key === "kestrel" && (
        <svg viewBox="0 0 24 24" fill="none" className="size-5 shrink-0 text-foreground/80">
          <path d="M4 17L12 5L20 17H14.5L12 12.5L9.5 17H4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      )}
      <span className="font-display text-base font-semimedium tracking-tight text-foreground/85">{name}</span>
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  1. HERO AGENCY PORTFOLIO SHOWCASE (Replaces fake SaaS browser mockup)     */
/*     Inspired by agency reference pic + HeroSection9 floating craft cards   */
/* -------------------------------------------------------------------------- */

const HERO_PORTFOLIO_CARDS = [
  {
    id: "ledgerline",
    client: "Ledgerline",
    category: "B2B Treasury & Multi-Currency Ledger",
    metric: "4,200+ paying businesses",
    timeline: "Shipped in 11 wks",
    image: "/tailark/circle-2_qt7ip8.png",
    secondaryImage: "/media/task-website-design.3xvdo7pmp6g4z.png",
    accent: "#6366f1",
    tags: ["Figma Design System", "Next.js + PostgreSQL", "Stripe & Plaid Sync"],
  },
  {
    id: "clinicflow",
    client: "Clinicflow",
    category: "Smart Clinical Scheduling & Patient OS",
    metric: "-33% patient no-shows",
    timeline: "Shipped in 9 wks",
    image: "/tailark/circle_un3f39.png",
    secondaryImage: "/media/task-briefing.00ed4ci_knaoh.png",
    accent: "#0ea5e9",
    tags: ["Clinician Calendar UI", "HIPAA Intake Portal", "Twilio Waitlist Engine"],
  },
  {
    id: "brieflet",
    client: "Brieflet",
    category: "Applied Legal AI & Contract Copilot",
    metric: "98.4% citation precision",
    timeline: "Shipped in 8 wks",
    image: "/tailark/circle-3_tgdnaa.png",
    secondaryImage: "/media/task-park.0eqyq6gfd0zm4.png",
    accent: "#10b981",
    tags: ["Citation-Backed RAG", "Claude + OpenAI Routing", "Clause Diff Viewer"],
  },
] as const;

export function HeroAgencyShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <div className="relative mx-auto w-full max-w-6xl px-4 pb-6 sm:px-8 md:pb-8">
      {/* Soft ambient glow below the showcase */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-16 -bottom-4 h-24 rounded-full bg-black/20 blur-2xl"
      />

      {/* 3-Column Agency Portfolio Showcase Strip (like reference Hero pic) */}
      <div className="relative z-10 grid gap-4 md:grid-cols-3 md:gap-5">
        {HERO_PORTFOLIO_CARDS.map((item, idx) => {
          const isHighlighted = hoveredIndex === idx;
          return (
            <motion.a
              key={item.id}
              href="#work"
              onMouseEnter={() => setHoveredIndex(idx)}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl bg-white/92 p-3.5 shadow-xl ring-1 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-white",
                isHighlighted ? "ring-black/15 shadow-2xl" : "ring-black/8",
              )}
            >
              {/* Top Visual Canvas with layered product screenshot + live telemetry pill */}
              <div className="relative h-48 w-full overflow-hidden rounded-xl bg-neutral-100 sm:h-52">
                {/* Background UI composition */}
                <img
                  src={item.secondaryImage}
                  alt={`${item.client} interface backdrop`}
                  className="size-full object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-transparent" />

                {/* Floating foreground widget card */}
                <div className="absolute right-3 bottom-3 left-3 flex items-center gap-3 rounded-xl bg-white/95 p-2.5 shadow-lg ring-1 ring-black/8 backdrop-blur-md transition-transform duration-300 group-hover:translate-y-[-2px]">
                  <img
                    src={item.image}
                    alt={item.client}
                    className="size-11 shrink-0 rounded-lg object-cover ring-1 ring-black/6"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate text-xs font-medium text-foreground">{item.client}</span>
                      <span className="shrink-0 text-[11px] font-medium text-emerald-600 tabular-nums">
                        {item.timeline}
                      </span>
                    </div>
                    <p className="truncate text-[11px] text-muted-foreground">{item.category}</p>
                  </div>
                </div>

                {/* Top-left floating craft indicator */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-foreground shadow-sm ring-1 ring-black/8 backdrop-blur-md">
                  <span
                    className="size-1.5 rounded-full"
                    style={{ backgroundColor: item.accent }}
                  />
                  <span>{item.metric}</span>
                </div>
              </div>

              {/* Bottom caption row */}
              <div className="mt-3 flex items-center justify-between px-1 pt-0.5">
                <div className="flex flex-wrap items-center gap-1.5">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-neutral-100 px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-0.5 text-xs font-medium text-foreground/75 transition-colors group-hover:text-foreground">
                  <span>Case study</span>
                  <RiArrowRightUpLine className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

/** Floating tilted craft cards for Hero sides (inspired by HeroSection9 & reference pic) */
export function HeroFloatingCraftCards() {
  return (
    <>
      {/* Left Floating Craft Card: Figma Design System & Interactive Prototype */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-28 left-6 z-10 hidden w-52 -rotate-6 rounded-2xl bg-white/92 p-3.5 shadow-xl ring-1 ring-black/8 backdrop-blur-md xl:block"
      >
        <div className="flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
            <FigmaIcon className="size-3.5" />
            <span>Design System</span>
          </span>
          <span className="text-[10px] text-muted-foreground">v2.4 Tokens</span>
        </div>
        {/* Custom SVG Bézier curve & component vector preview */}
        <svg viewBox="0 0 180 68" fill="none" className="mt-2.5 h-14 w-full rounded-lg bg-neutral-50 p-1.5 ring-1 ring-black/5">
          <path d="M14 52 C50 12, 130 12, 166 52" stroke="#6366f1" strokeWidth="1.75" strokeDasharray="3 3" />
          <line x1="14" y1="52" x2="50" y2="16" stroke="#a855f7" strokeWidth="1.2" />
          <line x1="166" y1="52" x2="130" y2="16" stroke="#a855f7" strokeWidth="1.2" />
          <circle cx="50" cy="16" r="3.5" fill="#ffffff" stroke="#a855f7" strokeWidth="1.5" />
          <circle cx="130" cy="16" r="3.5" fill="#ffffff" stroke="#a855f7" strokeWidth="1.5" />
          <rect x="10" y="48" width="8" height="8" rx="1.5" fill="#ffffff" stroke="#6366f1" strokeWidth="1.5" />
          <rect x="162" y="48" width="8" height="8" rx="1.5" fill="#ffffff" stroke="#6366f1" strokeWidth="1.5" />
          <circle cx="90" cy="22" r="4" fill="#6366f1" />
        </svg>
        <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
          <span>Interactive Prototype</span>
          <span className="font-medium text-emerald-600">Week 2</span>
        </div>
      </div>

      {/* Right Floating Craft Card: Production Engineering & AI Routing */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-28 right-6 z-10 hidden w-56 rotate-6 rounded-2xl bg-white/92 p-3.5 shadow-xl ring-1 ring-black/8 backdrop-blur-md xl:block"
      >
        <div className="flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
            <NextjsIcon className="size-3.5" />
            <span>Your GitHub Repo</span>
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Day 1 IP
          </span>
        </div>
        {/* Animated telemetry sparkline SVG */}
        <svg viewBox="0 0 190 64" fill="none" className="mt-2.5 h-14 w-full rounded-lg bg-neutral-50 p-2 ring-1 ring-black/5">
          <defs>
            <linearGradient id="heroSparkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M8 48 L36 40 L64 43 L92 26 L120 30 L148 16 L182 12 L182 56 L8 56 Z"
            fill="url(#heroSparkGrad)"
          />
          <path
            d="M8 48 L36 40 L64 43 L92 26 L120 30 L148 16 L182 12"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="182" cy="12" r="3.5" fill="#10b981" />
        </svg>
        <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
          <span>Friday Live Demo</span>
          <span className="font-medium text-foreground tabular-nums">38ms p95</span>
        </div>
      </div>
    </>
  );
}

export const HeroArchitectureCanvas = HeroAgencyShowcase;

/* -------------------------------------------------------------------------- */
/*  2. SERVICE CARD ILLUSTRATIONS (Clean Aside/Quartz Stages, Zero Clutter)   */
/* -------------------------------------------------------------------------- */

export function ServiceIllustration({ kind }: { kind: ServiceIllustrationKind }) {
  switch (kind) {
    case "mvp-sprint":
      return <MvpSprintIllustration />;
    case "scale-uptime":
      return <ScaleUptimeIllustration />;
    case "ai-routing":
      return <AiRoutingIllustration />;
    case "project-rescue":
      return <ProjectRescueScannerIllustration />;
  }
}

/** Card 1: Mobile app development — Product planning and launch stage */
function MvpSprintIllustration() {
  return (
    <div aria-hidden="true" className="relative flex size-full items-center justify-center p-6 select-none">
      <div className="relative flex w-full max-w-xs items-center justify-center gap-5 transition-transform duration-300 group-hover:-translate-y-1">
        <div className="relative h-64 w-32 rounded-[1.7rem] bg-foreground p-1.5 shadow-xl shadow-black/[0.12]">
          <div className="relative flex h-full flex-col overflow-hidden rounded-[1.35rem] bg-white">
            <div className="flex items-center justify-between px-3 pt-3 text-[9px] font-medium">
              <span>9:41</span>
              <span className="flex gap-0.5"><i className="size-1 rounded-full bg-foreground" /><i className="size-1 rounded-full bg-foreground" /><i className="size-1 rounded-full bg-foreground" /></span>
            </div>
            <div className="mx-auto mt-1 h-1 w-8 rounded-full bg-foreground/10" />
            <div className="mt-5 px-3">
              <p className="text-[9px] text-muted-foreground">Good morning</p>
              <p className="mt-1 text-sm font-medium">Your day, at a glance.</p>
              <div className="mt-4 rounded-xl bg-sky-100 p-3">
                <div className="size-5 rounded-lg bg-white/80" />
                <div className="mt-7 h-1.5 w-14 rounded-full bg-foreground/20" />
                <div className="mt-1.5 h-1.5 w-9 rounded-full bg-foreground/10" />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="h-10 rounded-lg bg-neutral-100" />
                <div className="h-10 rounded-lg bg-neutral-100" />
              </div>
            </div>
            <div className="mt-auto flex justify-around border-t border-black/6 py-3 text-[9px] text-muted-foreground">
              <span className="font-medium text-foreground">Home</span><span>Explore</span><span>Profile</span>
            </div>
          </div>
        </div>
        <div className="w-28 space-y-2">
          <div className="rounded-xl bg-white p-3 shadow-lg ring-1 ring-black/[0.06]">
            <RiLayoutMasonryLine className="size-4 text-sky-600" />
            <p className="mt-2 text-[10px] font-medium text-foreground">Made for thumbs</p>
            <p className="mt-1 text-[9px] leading-relaxed text-muted-foreground">Simple flows that feel natural.</p>
          </div>
          <div className="rounded-xl bg-foreground p-3 text-white shadow-lg">
            <p className="text-[9px] text-white/60">Next step</p>
            <p className="mt-1 text-[10px] font-medium">Ready to try</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Card 2: Web product development — Product improvement and delivery stage */
function ScaleUptimeIllustration() {
  return (
    <div aria-hidden="true" className="relative flex size-full items-center justify-center p-6 select-none">
      <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg shadow-black/[0.04] ring-1 ring-black/[0.06] transition-transform duration-300 group-hover:-translate-y-1">
        <div className="flex items-center gap-2 border-b border-black/6 px-4 py-3">
          <span className="size-2 rounded-full bg-red-300" /><span className="size-2 rounded-full bg-amber-300" /><span className="size-2 rounded-full bg-emerald-300" />
          <span className="ml-3 text-[10px] text-muted-foreground">yourproduct.com</span>
        </div>
        <div className="grid grid-cols-[84px_1fr]">
          <div className="space-y-2 border-r border-black/6 bg-neutral-50 p-3">
            <div className="h-2 w-10 rounded-full bg-foreground/15" />
            <div className="h-2 w-14 rounded-full bg-sky-200" />
            <div className="h-2 w-12 rounded-full bg-foreground/10" />
            <div className="h-2 w-9 rounded-full bg-foreground/10" />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div><p className="text-[9px] text-muted-foreground">Overview</p><p className="mt-1 text-sm font-medium">Welcome back</p></div>
              <div className="size-6 rounded-full bg-sky-100" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-12 rounded-lg bg-sky-100" /><div className="h-12 rounded-lg bg-neutral-100" /><div className="h-12 rounded-lg bg-neutral-100" />
            </div>
            <svg viewBox="0 0 220 50" className="mt-5 h-12 w-full" fill="none">
              <path d="M2 42 C28 38 35 25 58 31 S93 10 119 22 S151 36 174 17 S202 19 218 5" stroke="#587a9b" strokeWidth="3" strokeLinecap="round" />
              <path d="M2 42 C28 38 35 25 58 31 S93 10 119 22 S151 36 174 17 S202 19 218 5 V50 H2Z" fill="#dbeaf3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Card 3: AI and machine learning — Helpful input to clear output */
function AiRoutingIllustration() {
  return (
    <div aria-hidden="true" className="relative flex size-full items-center justify-center p-6 select-none">
      <div className="relative flex w-full max-w-xs items-center justify-between">
        {/* Left: Helpful input nodes */}
        <div className="relative z-10 flex flex-col gap-2.5">
          <div className="flex size-10 items-center justify-center rounded-xl bg-white shadow-md shadow-black/[0.04] ring-1 ring-black/[0.06]">
            <ClaudeIcon className="size-4 text-[#D97757]" />
          </div>
          <div className="flex size-10 items-center justify-center rounded-xl bg-white shadow-md shadow-black/[0.04] ring-1 ring-black/[0.06]">
            <OpenAIIcon className="size-4 text-foreground" />
          </div>
          <div className="flex size-10 items-center justify-center rounded-xl bg-white shadow-md shadow-black/[0.04] ring-1 ring-black/[0.06]">
            <GeminiIcon className="size-4 text-sky-500" />
          </div>
        </div>

        {/* Animated SVG Connector Beams */}
        <svg
          viewBox="0 0 180 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute inset-x-0 mx-auto h-32 w-full"
        >
          <path d="M36 20 H75 C95 20 95 65 115 65 H145" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" />
          <path d="M36 65 H145" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" />
          <path d="M36 110 H75 C95 110 95 65 115 65 H145" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" />

          <path
            d="M36 20 H75 C95 20 95 65 115 65 H145"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="28 180"
            className="animate-model-flow"
          />
          <path
            d="M36 65 H145"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="28 180"
            className="animate-beam-move"
          />
          <path
            d="M36 110 H75 C95 110 95 65 115 65 H145"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="28 180"
            className="animate-beam-move-delayed"
          />
        </svg>

        {/* Right: Clear result card */}
        <div className="relative z-10 w-40 rounded-2xl bg-white p-4 shadow-lg shadow-black/[0.04] ring-1 ring-black/[0.06] transition-transform duration-300 group-hover:-translate-y-1">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-medium text-foreground">Helpful result</span>
            <span className="text-emerald-600 font-medium tabular-nums">Ready</span>
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-neutral-200" />
            <div className="h-1.5 w-4/5 rounded-full bg-neutral-200" />
            <div className="h-1.5 w-3/5 rounded-full bg-primary/40" />
          </div>
          <div className="mt-3 flex items-center gap-1 text-[11px] text-muted-foreground">
            <RiCheckLine className="size-3.5 text-emerald-600" />
            <span>Checked and ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Card 4: Product improvement — Clear review and next steps */
function ProjectRescueScannerIllustration() {
  return (
    <div aria-hidden="true" className="relative flex size-full items-center justify-center p-6 select-none">
      <div className="relative w-full max-w-xs overflow-hidden rounded-2xl bg-white p-5 shadow-lg shadow-black/[0.04] ring-1 ring-black/[0.06] transition-transform duration-300 group-hover:-translate-y-1">
        <div className="flex items-center justify-between border-b border-black/6 pb-3 text-xs">
          <span className="font-medium text-foreground">Product review</span>
          <span className="text-emerald-600 font-medium">Clear next steps</span>
        </div>

        <div className="mt-3.5 space-y-2.5 text-xs">
          <div className="rounded-xl bg-neutral-50 p-3">
            <div className="flex items-center justify-between text-muted-foreground">
              <span>What is already working</span>
              <span className="font-medium text-foreground tabular-nums">72%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
              <div className="h-full w-[72%] rounded-full bg-sky-400" />
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 text-muted-foreground">
            <span className="flex items-center gap-1.5 text-foreground">
              <RiCheckboxCircleFill className="size-4 text-emerald-500" />
              Biggest improvements identified
            </span>
            <span className="tabular-nums">3 areas</span>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="h-12 rounded-lg bg-sky-100" />
            <div className="h-12 rounded-lg bg-neutral-100" />
            <div className="h-12 rounded-lg bg-neutral-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  3. FIVE BENTO ILLUSTRATIONS FOR "WHY COMPANIES CHOOSE ORBINORA"           */
/*     Modeled directly on reference image media_1792396544079_94c67a16.png    */
/* -------------------------------------------------------------------------- */

/** Bento Card 1 (Top-Left): Overlapping Principal Squad Avatars (Personalized Support) */
export function DedicatedSquadAvatarsIllustration() {
  const [activeMember, setActiveMember] = useState<number>(1);
  const members = [
    {
      name: "Abdul R.",
      role: "Principal Architect",
      img: "/tailark/person-1_e2jmus.jpg",
    },
    {
      name: "Elena R.",
      role: "Head of Product Design",
      img: "/media/sample-profile.3kbfbkbz9b977.png",
    },
    {
      name: "Marcus V.",
      role: "Lead Full-Stack Engineer",
      img: "/tailark/person-2_lzr6yo.jpg",
    },
  ];

  return (
    <div className="relative flex size-full flex-col items-center justify-center p-6 select-none">
      {/* Subtle radial glow behind avatars */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 m-auto size-40 rounded-full bg-indigo-500/8 blur-2xl"
      />

      {/* Overlapping circular portraits */}
      <div className="relative z-10 flex items-center justify-center -space-x-4">
        {members.map((member, idx) => {
          const isSelected = activeMember === idx;
          return (
            <button
              key={member.name}
              type="button"
              onMouseEnter={() => setActiveMember(idx)}
              onClick={() => setActiveMember(idx)}
              className={cn(
                "relative cursor-pointer rounded-full p-1 transition-all duration-300",
                idx === 1 ? "z-20 size-20" : "z-10 size-16 opacity-90 hover:opacity-100",
                isSelected ? "scale-108 bg-white shadow-xl ring-2 ring-primary/40" : "bg-white/90 shadow-md ring-1 ring-black/8",
              )}
            >
              <img
                src={member.img}
                alt={member.name}
                className="size-full rounded-full object-cover"
              />
              <span className="absolute right-1 bottom-1 size-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            </button>
          );
        })}
      </div>

      {/* Active squad member readout pill */}
      <div className="relative z-10 mt-5 flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs shadow-sm ring-1 ring-black/6">
        <span className="size-1.5 rounded-full bg-primary" />
        <span className="font-medium text-foreground">{members[activeMember].name}</span>
        <span className="text-muted-foreground">· {members[activeMember].role}</span>
      </div>
    </div>
  );
}

/** Bento Card 2 (Top-Center): Live Collaboration Chat Thread ("With You Every Step") */
export function LiveCollaborationChatIllustration() {
  return (
    <div aria-hidden="true" className="relative flex size-full flex-col justify-center p-6 select-none">
      <div className="mx-auto w-full max-w-xs space-y-2.5">
        {/* Sender header */}
        <div className="flex items-center gap-2">
          <img
            src="/media/sample-profile.3kbfbkbz9b977.png"
            alt="Elena"
            className="size-6 rounded-full object-cover ring-1 ring-black/10"
          />
          <span className="text-xs font-medium text-foreground">Elena</span>
          <span className="text-[11px] text-muted-foreground">10:15 AM</span>
        </div>

        {/* Message Bubble 1 */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="ml-7 rounded-2xl rounded-tl-xs bg-white px-3.5 py-2.5 text-xs leading-relaxed text-foreground shadow-sm ring-1 ring-black/6"
        >
          Hi Daniel! Your Figma prototype &amp; staging build are ready to click through.
        </motion.div>

        {/* Message Bubble 2 */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.12 }}
          className="ml-7 w-fit rounded-2xl rounded-tl-xs bg-white px-3.5 py-2 text-xs text-muted-foreground shadow-sm ring-1 ring-black/6"
        >
          Want feedback before Friday&apos;s demo?
        </motion.div>

        {/* Animated Typing Indicator Bubble on Right */}
        <div className="flex justify-end pt-0.5">
          <div className="inline-flex items-center gap-1 rounded-full bg-indigo-500/10 px-3 py-1.5 ring-1 ring-indigo-500/20">
            <span className="size-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.25s]" />
            <span className="size-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.12s]" />
            <span className="size-1.5 animate-bounce rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Bento Card 3 (Top-Right): Uptime & Velocity Trends Bar Chart ("Measurable Impact") */
const TELEMETRY_FRAMES = {
  "1D": {
    bars: [55, 62, 58, 70, 66, 74, 80, 96, 78, 82, 85, 79, 88, 90, 84, 86, 91, 89],
    highlightIdx: 7,
    caption: "99.98% uptime · 34ms p95 latency",
  },
  "1W": {
    bars: [48, 54, 60, 65, 72, 68, 75, 98, 82, 79, 86, 90, 84, 88, 92, 87, 93, 95],
    highlightIdx: 7,
    caption: "24 PRs merged · 99.98% average uptime",
  },
  "1M": {
    bars: [42, 50, 56, 62, 69, 74, 80, 100, 85, 88, 90, 86, 91, 94, 89, 92, 95, 97],
    highlightIdx: 7,
    caption: "4.2x release velocity · Zero P1 incidents",
  },
} as const;

export function UptimeVelocityBarsIllustration() {
  const [range, setRange] = useState<"1D" | "1W" | "1M">("1W");
  const current = TELEMETRY_FRAMES[range];

  return (
    <div className="relative flex size-full flex-col justify-between p-6 select-none">
      {/* Header with 1D | 1W | 1M interactive pill */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-muted-foreground">Uptime &amp; Velocity</span>
        <div className="inline-flex items-center gap-0.5 rounded-lg bg-white p-0.5 text-[11px] shadow-2xs ring-1 ring-black/8">
          {(["1D", "1W", "1M"] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setRange(key)}
              className={cn(
                "cursor-pointer rounded-md px-2 py-0.5 font-medium transition-colors",
                range === key
                  ? "bg-primary text-white"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      {/* Vertical telemetry bars with highlighted callout stem (matches reference pic) */}
      <div className="my-auto pt-3">
        <div className="flex h-20 items-end justify-between gap-1.5">
          {current.bars.map((val, idx) => {
            const isHighlighted = idx === current.highlightIdx;
            return (
              <div key={idx} className="relative flex h-full flex-1 flex-col items-center justify-end">
                <motion.div
                  initial={false}
                  animate={{ height: `${val}%` }}
                  transition={{ duration: 0.35 }}
                  className={cn(
                    "w-full rounded-full transition-colors",
                    isHighlighted
                      ? "bg-primary shadow-[0_0_12px_rgba(99,102,241,0.55)]"
                      : idx % 3 === 0
                        ? "bg-indigo-300/70"
                        : "bg-neutral-300/80",
                  )}
                />
              </div>
            );
          })}
        </div>

        {/* Callout stem + metric readout */}
        <div className="mt-2.5 flex items-center gap-2 text-xs">
          <span className="h-3.5 w-0.5 rounded-full bg-primary" />
          <span className="font-medium text-foreground tabular-nums">{current.caption}</span>
        </div>
      </div>
    </div>
  );
}

/** Bento Card 4 (Bottom-Left): Isometric 3D Cube + Radar Rings & Satellite Nodes ("Future-Ready Solutions") */
export function FutureReadyCubeIllustration() {
  return (
    <div aria-hidden="true" className="relative flex size-full items-center justify-center p-6 select-none">
      <div className="relative flex size-48 items-center justify-center">
        {/* Concentric radar rings */}
        <div className="pointer-events-none absolute inset-2 rounded-full border border-dashed border-black/10" />
        <div className="pointer-events-none absolute inset-9 rounded-full border border-black/8" />

        {/* Animated SVG connection lines between center cube and 4 corner nodes */}
        <svg viewBox="0 0 200 200" fill="none" className="pointer-events-none absolute inset-0 size-full">
          <line x1="42" y1="42" x2="100" y2="100" stroke="rgba(99,102,241,0.28)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="158" y1="42" x2="100" y2="100" stroke="rgba(99,102,241,0.28)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="42" y1="158" x2="100" y2="100" stroke="rgba(99,102,241,0.28)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="158" y1="158" x2="100" y2="100" stroke="rgba(99,102,241,0.28)" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>

        {/* 4 Satellite Nodes (Top-Left, Top-Right, Bottom-Left, Bottom-Right) */}
        <div className="absolute top-3 left-3 flex size-9 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/8">
          <RiCpuLine className="size-4 text-primary" />
        </div>
        <div className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/8">
          <RiDatabase2Line className="size-4 text-emerald-600" />
        </div>
        <div className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/8">
          <RiCloudLine className="size-4 text-sky-500" />
        </div>
        <div className="absolute right-3 bottom-3 flex size-9 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/8">
          <RiLayoutMasonryLine className="size-4 text-amber-500" />
        </div>

        {/* Center Isometric 3D Cube SVG */}
        <div className="relative z-10 flex size-20 items-center justify-center rounded-2xl bg-white shadow-xl ring-1 ring-black/8">
          <svg viewBox="0 0 64 64" fill="none" className="size-12">
            {/* Top face */}
            <polygon points="32,8 54,20 32,32 10,20" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.6" strokeLinejoin="round" />
            {/* Left face */}
            <polygon points="10,20 32,32 32,56 10,44" fill="#c7d2fe" stroke="#6366f1" strokeWidth="1.6" strokeLinejoin="round" />
            {/* Right face */}
            <polygon points="54,20 32,32 32,56 54,44" fill="#818cf8" stroke="#4f46e5" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/** Bento Card 5 (Bottom-Right, 2 cols wide): Cascading Gantt Timeline ("Transparent Process") */
export function TransparentTimelineGanttIllustration() {
  const milestones = [
    { label: "1. 2-Week Discovery & Clickable Prototype", offset: "ml-[2%]", width: "w-[52%] sm:w-[44%]", accent: "bg-primary" },
    { label: "2. PostgreSQL Schema & System Architecture", offset: "ml-[14%]", width: "w-[56%] sm:w-[46%]", accent: "bg-sky-500" },
    { label: "3. Weekly GitHub Releases in Your Repo", offset: "ml-[26%]", width: "w-[58%] sm:w-[48%]", accent: "bg-emerald-500" },
    { label: "4. Every Friday Live Staging Walkthrough", offset: "ml-[36%]", width: "w-[54%] sm:w-[46%]", accent: "bg-amber-500" },
    { label: "5. Production Cutover & 30-Day Warranty", offset: "ml-[46%]", width: "w-[52%] sm:w-[50%]", accent: "bg-indigo-600" },
  ];

  return (
    <div aria-hidden="true" className="relative flex size-full flex-col justify-center overflow-hidden p-6 select-none">
      {/* Subtle vertical column grid lines */}
      <div className="pointer-events-none absolute inset-x-8 inset-y-4 grid grid-cols-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="border-r border-dashed border-black/6 first:border-l" />
        ))}
      </div>

      {/* Staggered Gantt Milestone Pills */}
      <div className="relative z-10 mx-auto w-full max-w-xl space-y-2">
        {milestones.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            className={cn(
              "flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-2 text-xs shadow-sm ring-1 ring-black/8",
              item.offset,
              item.width,
            )}
          >
            <span className={cn("h-3.5 w-1 shrink-0 rounded-full", item.accent)} />
            <span className="truncate font-medium text-foreground">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  4. ASIDE ORBITING BYOK ILLUSTRATION (Exact port from Animations.tsx)      */
/* -------------------------------------------------------------------------- */

const ORBIT_CENTER = 120;
const ORBIT_RADIUS = 88;
const ORBIT_ICONS = [
  OpenAIIcon,
  ClaudeIcon,
  GeminiIcon,
  FigmaIcon,
  LinearIcon,
  NextjsIcon,
];

const getOrbitAngle = (idx: number) => (360 / ORBIT_ICONS.length) * idx;
const round3 = (n: number) => Number(n.toFixed(3));
const toPx = (n: number) => `${round3(n)}px`;

function OrbitingNode({
  Icon,
  angle,
  orbit,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  angle: number;
  orbit: ReturnType<typeof useMotionValue<number>>;
}) {
  const x = useTransform(orbit, (deg) =>
    toPx(ORBIT_RADIUS * Math.sin(((angle + deg) * Math.PI) / 180)),
  );
  const y = useTransform(orbit, (deg) =>
    toPx(-ORBIT_RADIUS * Math.cos(((angle + deg) * Math.PI) / 180)),
  );
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/6"
      style={{ x, y, width: "40px", height: "40px" }}
    >
      <Icon className="size-5 text-foreground/65" />
    </motion.div>
  );
}

export function OrbitingStackIllustration() {
  const reducedMotion = useReducedMotion();
  const orbit = useMotionValue(0);
  const rawId = useId();
  const maskId = rawId.replace(/:/g, "");

  useEffect(() => {
    if (reducedMotion) return;
    const start = performance.now();
    let rafId = 0;
    const tick = (now: number) => {
      orbit.set((((now - start) / 1000) * 360) / 45);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [orbit, reducedMotion]);

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden select-none">
      <div className="relative" style={{ width: 240, height: 240 }}>
        <svg
          aria-hidden="true"
          className="text-foreground/15 absolute inset-0"
          height={240}
          width={240}
        >
          <defs>
            <mask id={maskId}>
              <rect fill="white" height={240} width={240} />
              <motion.g
                style={{
                  rotate: orbit,
                  transformOrigin: `${ORBIT_CENTER}px ${ORBIT_CENTER}px`,
                }}
              >
                {ORBIT_ICONS.map((_, idx) => {
                  const a = getOrbitAngle(idx);
                  const cx = round3(ORBIT_CENTER + ORBIT_RADIUS * Math.sin((a * Math.PI) / 180));
                  const cy = round3(ORBIT_CENTER - ORBIT_RADIUS * Math.cos((a * Math.PI) / 180));
                  return <circle key={idx} cx={cx} cy={cy} fill="black" r={24} />;
                })}
              </motion.g>
            </mask>
          </defs>
          <circle
            cx={ORBIT_CENTER}
            cy={ORBIT_CENTER}
            fill="none"
            mask={`url(#${maskId})`}
            r={ORBIT_RADIUS}
            stroke="currentColor"
            strokeDasharray="1 10"
            strokeLinecap="round"
            strokeWidth={2.5}
          />
        </svg>

        <div className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-black/8">
          <LogoMark className="size-8" />
        </div>

        {ORBIT_ICONS.map((Icon, idx) => (
          <OrbitingNode
            key={idx}
            Icon={Icon}
            angle={getOrbitAngle(idx)}
            orbit={orbit}
          />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  5. QUARTZ LIBRE CONCENTRIC SHIELD ILLUSTRATION                            */
/* -------------------------------------------------------------------------- */

export function ConcentricShieldIllustration() {
  return (
    <div aria-hidden="true" className="relative flex size-full items-center justify-center overflow-hidden select-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="m-auto size-24 fill-white stroke-white drop-shadow-2xl"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute inset-0 m-auto size-32 stroke-indigo-900/20 stroke-[0.12]"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute inset-0 m-auto size-24 fill-indigo-100/50 stroke-indigo-500 stroke-[0.15]"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="0.2 0.2"
        className="absolute inset-0 m-auto size-44 stroke-indigo-900/15 stroke-[0.12]"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  6. CASE STUDY VISUAL STAGES (Layered UI Artwork + Live Telemetry Card)    */
/* -------------------------------------------------------------------------- */

export function CaseStudyVisualPreview({ theme }: { theme: CaseStudyTheme }) {
  if (theme === "ledgerline") {
    return (
      <div className="group relative flex min-h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl bg-neutral-100/90 p-6 sm:p-8">
        {/* Subtle UI screenshot backdrop */}
        <img
          src="/media/task-website-design.3xvdo7pmp6g4z.png"
          alt="Ledgerline platform preview"
          className="pointer-events-none absolute inset-0 size-full object-cover object-top opacity-25 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-100/95 via-neutral-100/60 to-neutral-100/30" />

        <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl shadow-black/[0.06] ring-1 ring-black/[0.08]">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2 font-medium text-foreground">
              <img src="/tailark/circle-2_qt7ip8.png" alt="" className="size-5 rounded-md object-cover" />
              Multi-Currency Treasury
            </span>
            <span className="font-medium text-emerald-600 tabular-nums">+18.4% MoM</span>
          </div>
          <div className="mt-2 font-display text-2xl font-normal text-foreground tabular-nums">
            $4,820,910.00
          </div>
          <div className="mt-4 flex h-2 gap-1 overflow-hidden rounded-full">
            <div className="bg-primary w-1/2" />
            <div className="w-1/3 bg-sky-400" />
            <div className="flex-1 bg-emerald-400" />
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-black/6 pt-3 text-xs text-muted-foreground">
            <span>Reconciliation latency</span>
            <span className="font-medium text-foreground">4 days → 25 mins</span>
          </div>
        </div>
      </div>
    );
  }

  if (theme === "clinicflow") {
    return (
      <div className="group relative flex min-h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl bg-neutral-100/90 p-6 sm:p-8">
        <img
          src="/media/task-briefing.00ed4ci_knaoh.png"
          alt="Clinicflow scheduling preview"
          className="pointer-events-none absolute inset-0 size-full object-cover object-top opacity-25 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-100/95 via-neutral-100/60 to-neutral-100/30" />

        <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl shadow-black/[0.06] ring-1 ring-black/[0.08]">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2 font-medium text-foreground">
              <img src="/tailark/circle_un3f39.png" alt="" className="size-5 rounded-md object-cover" />
              HIPAA Patient Intake &amp; Waitlist
            </span>
            <span className="font-medium text-sky-600">HL7 / FHIR Sync</span>
          </div>
          <div className="mt-4 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Avg. Patient Check-In</span>
              <span className="font-medium text-foreground tabular-nums">2m 40s (-61%)</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100">
              <div className="h-full w-3/4 rounded-full bg-sky-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-black/6 pt-3 text-xs text-muted-foreground">
            <span>Active across 85+ clinics</span>
            <span className="font-medium text-foreground">Zero PHI incidents</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative flex min-h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl bg-neutral-100/90 p-6 sm:p-8">
      <img
        src="/media/task-park.0eqyq6gfd0zm4.png"
        alt="Brieflet contract intelligence preview"
        className="pointer-events-none absolute inset-0 size-full object-cover object-top opacity-25 transition-transform duration-500 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-100/95 via-neutral-100/60 to-neutral-100/30" />

      <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl shadow-black/[0.06] ring-1 ring-black/[0.08]">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2 font-medium text-foreground">
            <img src="/tailark/circle-3_tgdnaa.png" alt="" className="size-5 rounded-md object-cover" />
            Clause Copilot · MSA #4.2
          </span>
          <span className="font-medium text-primary tabular-nums">98.4% Grounded</span>
        </div>
        <p className="mt-3 rounded-xl bg-neutral-50 p-3 text-xs leading-relaxed text-foreground ring-1 ring-black/5">
          &ldquo;Liability cap is strictly limited to 12 months of prior SaaS fees per MSA Section 8.1.&rdquo;
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-black/6 pt-3 text-xs text-muted-foreground">
          <span>First-draft contract review</span>
          <span className="font-medium text-foreground">4.2x faster</span>
        </div>
      </div>
    </div>
  );
}

export function CardDecorator() {
  return null;
}

export {
  RiCheckLine,
  RiCheckboxCircleFill,
  RiGitBranchLine,
  RiGitPullRequestLine,
  RiPlayFill,
  RiPauseFill,
  RiRefreshLine,
  RiSparkling2Fill,
  RiShieldCheckLine,
  RiTerminalBoxLine,
  RiTimeLine,
  RiArrowRightUpLine,
};
