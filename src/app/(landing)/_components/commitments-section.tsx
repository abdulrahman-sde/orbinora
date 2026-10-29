import {
  DedicatedSquadAvatarsIllustration,
  FutureReadyCubeIllustration,
  LiveCollaborationChatIllustration,
  OrbitingStackIllustration,
  TransparentTimelineGanttIllustration,
  UptimeVelocityBarsIllustration,
} from "@/components/illustrations/agency-illustrations";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function CommitmentsSection() {
  return (
    <Section id="commitments" className="bg-neutral-50/70">
      <SectionHeading
        label="Why Orbinora"
        title={
          <>
            Why companies <br className="hidden sm:inline" />
            choose Orbinora.
          </>
        }
        description="Principal-level product design, full-stack engineering, and applied AI—delivered with direct Slack access, weekly live demos, and 100% client IP ownership from day one."
      />

      {/* 5-Card Asymmetric Bento Grid (Modeled on reference image media_1792396544079_94c67a16.png) */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Card 1 (Row 1, Col 1): Senior Squad, Zero Juniors */}
        <Reveal
          delay={0}
          className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-6 shadow-xs ring-1 ring-black/6 transition-shadow hover:shadow-md"
        >
          <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-neutral-100/80">
            <DedicatedSquadAvatarsIllustration />
          </div>
          <div className="pt-6">
            <h3 className="font-display text-foreground text-xl font-normal">
              Senior Squad, Zero Juniors
            </h3>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              Work directly with the principal architect, product designer, and lead engineers writing your code—never rotating juniors.
            </p>
          </div>
        </Reveal>

        {/* Card 2 (Row 1, Col 2): With You Every Step */}
        <Reveal
          delay={0.05}
          className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-6 shadow-xs ring-1 ring-black/6 transition-shadow hover:shadow-md"
        >
          <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-neutral-100/80">
            <LiveCollaborationChatIllustration />
          </div>
          <div className="pt-6">
            <h3 className="font-display text-foreground text-xl font-normal">
              With You Every Step
            </h3>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              From first Figma prototype to post-launch warranty, we collaborate daily in your Slack and demo live software every Friday.
            </p>
          </div>
        </Reveal>

        {/* Card 3 (Row 1, Col 3): Measurable Impact */}
        <Reveal
          delay={0.1}
          className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-6 shadow-xs ring-1 ring-black/6 transition-shadow hover:shadow-md"
        >
          <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-neutral-100/80">
            <UptimeVelocityBarsIllustration />
          </div>
          <div className="pt-6">
            <h3 className="font-display text-foreground text-xl font-normal">
              Measurable Impact
            </h3>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              Every milestone is backed by production telemetry, sub-50ms latency targets, and a 30-day bug-free launch warranty.
            </p>
          </div>
        </Reveal>

        {/* Card 4 (Row 2, Col 1): Future-Ready Solutions */}
        <Reveal
          delay={0.15}
          className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-6 shadow-xs ring-1 ring-black/6 transition-shadow hover:shadow-md md:col-span-1"
        >
          <div className="relative h-60 w-full overflow-hidden rounded-2xl bg-neutral-100/80">
            <FutureReadyCubeIllustration />
          </div>
          <div className="pt-6">
            <h3 className="font-display text-foreground text-xl font-normal">
              Future-Ready Solutions
            </h3>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              Modular Next.js, TypeScript, PostgreSQL, and multi-model AI architectures built in your repo so your team can scale without rewrites.
            </p>
          </div>
        </Reveal>

        {/* Card 5 (Row 2, Col 2–3, spans 2 cols): Transparent Process */}
        <Reveal
          delay={0.2}
          className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-6 shadow-xs ring-1 ring-black/6 transition-shadow hover:shadow-md md:col-span-2"
        >
          <div className="relative h-60 w-full overflow-hidden rounded-2xl bg-neutral-100/80">
            <TransparentTimelineGanttIllustration />
          </div>
          <div className="pt-6">
            <h3 className="font-display text-foreground text-xl font-normal">
              Transparent Process
            </h3>
            <p className="text-muted-foreground mt-2 max-w-xl text-sm leading-relaxed">
              Fixed-price milestones, code pushed to your GitHub from commit #1, and live staging walkthroughs every week so you never wonder where your build stands.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Creative Engineering Ecosystem Row (Aside Orbiting Stack + 3D Ecosystem Showcase) */}
      <Reveal delay={0.25} className="mt-6 grid gap-6 lg:grid-cols-12">
        <div className="flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-6 shadow-xs ring-1 ring-black/6 sm:flex-row sm:items-center lg:col-span-7">
          <div className="max-w-xs space-y-2 pr-4">
            <p className="text-brand text-xs font-medium">Built With Proven Tools</p>
            <h3 className="font-display text-foreground text-xl font-normal">
              Modern stack your future hires already love.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Next.js, TypeScript, PostgreSQL, Figma, Linear, and multi-model AI routing with zero proprietary lock-in.
            </p>
          </div>
          <div className="mt-6 h-56 w-full shrink-0 sm:mt-0 sm:w-60">
            <OrbitingStackIllustration />
          </div>
        </div>

        <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-6 shadow-xs ring-1 ring-black/6 lg:col-span-5">
          <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-neutral-100/80">
            <img
              src="/media/icons.07sng_y96t659.webp"
              alt="Connected cloud and developer ecosystem"
              className="size-full object-cover object-center"
            />
          </div>
          <div className="pt-5">
            <h3 className="font-display text-foreground text-xl font-normal">
              100% Your IP &amp; Cloud Keys
            </h3>
            <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
              AWS, Vercel, Stripe, and GitHub accounts live in your company&apos;s name from day one.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
