"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RiArrowRightUpLine } from "@remixicon/react";
import { Logo } from "@/components/shared/logo";
import { company, navLinks, primaryCta } from "@/lib/content/landing";
import { cn } from "@/lib/utils";

/** Clean navigation bar shared by the in-hero header and the scroll-reveal sticky bar. */
export function SiteNav({ className }: { className?: string }) {
  return (
    <nav
      aria-label="Primary"
      className={cn(
        "relative mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8",
        className,
      )}
    >
      <Link href="/" aria-label={`${company.name} home`} className="flex items-center gap-2">
        <Logo />
      </Link>

      <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-sm font-[450] text-foreground/75 md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <a
          href={primaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center justify-center gap-1 rounded-full bg-foreground px-4 text-sm font-[450] text-background transition hover:bg-foreground/85"
        >
          <span>{primaryCta.label}</span>
          <RiArrowRightUpLine className="size-4 opacity-80" />
        </a>
      </div>
    </nav>
  );
}

/** Reveals smoothly after scrolling past the hero header, matching Aside's StickyNavigation. */
export function StickyHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 360);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-3 z-50 px-4 transition-all duration-300 sm:px-6",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0",
      )}
    >
      <div className="mx-auto max-w-4xl rounded-full bg-white/88 shadow-lg shadow-black/[0.06] ring-1 ring-black/[0.07] backdrop-blur-md">
        <SiteNav className="h-13 px-5 sm:px-6" />
      </div>
    </header>
  );
}
