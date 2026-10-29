import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={cn("size-5", className)}>
      <defs>
        <linearGradient id="orbinora-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--primary)" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="4.25" className="fill-foreground" />
      <ellipse
        cx="12"
        cy="12"
        rx="10.25"
        ry="4.6"
        transform="rotate(-28 12 12)"
        stroke="url(#orbinora-grad)"
        strokeWidth="1.75"
      />
      <circle cx="20.4" cy="7.6" r="1.85" className="fill-primary" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20 shadow-2xs">
        <LogoMark className="size-4" />
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-foreground">Orbinora</span>
    </span>
  );
}
