import Link from "next/link";
import { RiArrowRightSLine } from "@remixicon/react";
import { ClientBrandLogo } from "@/components/illustrations/agency-illustrations";
import { Reveal } from "@/components/shared/reveal";
import { clientLogos } from "@/lib/content/landing";

export function ClientLogos() {
  return (
    <section aria-label="Clients" className="mx-auto w-full max-w-6xl px-6 sm:px-8">
      <Reveal className="border-b border-black/6 py-12 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <div className="space-y-1.5">
            <p className="font-display text-foreground max-w-xs text-lg leading-snug font-normal text-balance">
              Trusted by fast-growing software teams across the US and Europe
            </p>
            <Link
              href="#work"
              className="text-brand decoration-brand/40 inline-flex items-center gap-0.5 text-sm font-medium decoration-dotted underline-offset-4 hover:underline"
            >
              <span>Explore shipped products</span>
              <RiArrowRightSLine className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((name) => (
              <div key={name} className="flex items-center justify-start lg:justify-center">
                <ClientBrandLogo name={name} />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
