import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

/** Open, relaxed section container without outer rail cages or corner crosshairs. */
export function Section({ id, children, className, innerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-20", className)}>
      <div className={cn("mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 md:py-32", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
