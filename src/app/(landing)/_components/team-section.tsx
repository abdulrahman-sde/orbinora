import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { team } from "@/lib/content/landing";

export function TeamSection() {
  return (
    <Section id="team">
      <SectionHeading
        align="split"
        label="Senior team"
        title="The people on your first call are the people writing your code."
        description="We never staff junior generalists behind senior account managers. Every engagement is led directly by our four practice leads."
      />

      {/* Aside-style relaxed 4-column stage + caption layout */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <Reveal key={member.name} delay={index * 0.05}>
            <div className="flex h-48 flex-col justify-between rounded-2xl bg-neutral-100/80 p-6">
              <div className="flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-xl bg-white text-sm font-medium text-foreground shadow-2xs ring-1 ring-black/6">
                  {member.initials}
                </div>
                <span className="text-xs text-muted-foreground">{member.timezone}</span>
              </div>
              <div>
                <div className="font-display text-lg font-normal text-foreground">{member.name}</div>
                <div className="text-xs text-muted-foreground">{member.role}</div>
              </div>
            </div>

            <div className="px-2 pt-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
