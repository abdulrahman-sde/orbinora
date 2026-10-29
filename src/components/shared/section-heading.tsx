import { RiArrowRightSLine } from "@remixicon/react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";

interface SectionHeadingProps {
  label?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left" | "split";
  className?: string;
}

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 text-sm font-medium text-brand decoration-brand/40 decoration-dotted decoration-2 underline-offset-4 md:text-base",
        className,
      )}
    >
      <span>{children}</span>
      <RiArrowRightSLine className="size-4 opacity-75" />
    </span>
  );
}

export function SectionHeading({ label, title, description, align = "center", className }: SectionHeadingProps) {
  if (align === "split") {
    return (
      <Reveal className={cn("w-full", className)}>
        {label && (
          <p className="mb-3 lg:mb-5">
            <SectionLabel>{label}</SectionLabel>
          </p>
        )}
        <div className="grid items-end gap-6 md:grid-cols-12">
          <h2 className="font-display text-3xl leading-9 font-normal tracking-[-0.015em] text-foreground sm:text-4xl sm:leading-11 md:col-span-7 xl:text-[2.75rem] xl:leading-12">
            {title}
          </h2>
          {description && (
            <p className="text-base leading-relaxed text-pretty text-muted-foreground md:col-span-5 xl:text-lg">
              {description}
            </p>
          )}
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      {label && (
        <p className="mb-3 lg:mb-5">
          <SectionLabel>{label}</SectionLabel>
        </p>
      )}
      <h2 className="font-display text-3xl leading-9 font-normal tracking-[-0.015em] text-foreground sm:text-4xl sm:leading-11 xl:text-[2.75rem] xl:leading-12">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground xl:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
