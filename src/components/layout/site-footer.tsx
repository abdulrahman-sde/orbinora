import Link from "next/link";
import { RiArrowRightUpLine } from "@remixicon/react";
import { Logo } from "@/components/shared/logo";
import { company, footerColumns, primaryCta } from "@/lib/content/landing";

export function SiteFooter() {
  return (
    <footer className="py-16 sm:py-20 xl:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              SaaS product design, full-stack engineering, and applied AI studio for startups and growing software teams.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-3 text-sm font-medium">
              <p className="text-muted-foreground/80">{column.title}</p>
              <ul className="space-y-2.5 font-normal">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-foreground decoration-muted-foreground/50 decoration-dotted underline-offset-4 transition-colors hover:text-muted-foreground hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-black/6" />

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {company.copyrightYear} {company.legalEntity}
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${company.email}`}
              className="decoration-muted-foreground/50 decoration-dotted underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {company.email}
            </a>
            <a
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 font-medium text-foreground decoration-foreground/40 decoration-dotted underline-offset-4 hover:underline"
            >
              <span>{primaryCta.label}</span>
              <RiArrowRightUpLine className="size-4 opacity-75" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
