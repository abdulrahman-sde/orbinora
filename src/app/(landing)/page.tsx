import { ClientLogos } from "./_components/client-logos";
import { CommitmentsSection } from "./_components/commitments-section";
import { FaqSection } from "./_components/faq-section";
import { HeroSection } from "./_components/hero-section";
import { ServicesSection } from "./_components/services-section";
import { TeamSection } from "./_components/team-section";
import { TestimonialsSection } from "./_components/testimonials-section";
import { WorkSection } from "./_components/work-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <ServicesSection />
      <CommitmentsSection />
      <WorkSection />
      <TestimonialsSection />
      <TeamSection />
      <FaqSection />
    </>
  );
}
