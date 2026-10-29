import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  src: string;
  alt: string;
  url?: string;
  className?: string;
  priority?: boolean;
}

/** Product screenshot in a minimal browser window. Swap `src` for a real 16:10 screenshot. */
export function BrowserFrame({ src, alt, url = "app.yourproduct.com", className, priority }: BrowserFrameProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl bg-card shadow-float md:rounded-2xl", className)}>
      <div className="flex items-center gap-3 border-b px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-foreground/10" />
          <span className="size-2.5 rounded-full bg-foreground/10" />
          <span className="size-2.5 rounded-full bg-foreground/10" />
        </div>
        <span className="mx-auto rounded-md bg-muted px-3 py-0.5 text-xs text-muted-foreground max-sm:hidden">{url}</span>
        <span className="w-10 max-sm:hidden" />
      </div>
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover object-top"
          {...(priority ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
        />
      </div>
    </div>
  );
}
