export interface NavLink {
  label: string;
  href: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  detail?: string;
}

export interface Testimonial {
  quote: string;
  highlight?: string;
  metricBadge?: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  /** Demo data — replace with a named, approved quote before launch. */
  demo: boolean;
}

export type CaseStudyTheme = "ledgerline" | "shiftboard" | "clinicflow" | "brieflet";

export interface WorkItem {
  id: CaseStudyTheme;
  client: string;
  category: string;
  outcome: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  stack: string[];
  metrics: Stat[];
  image: string;
  href: string;
  /** Demo data — replace with a real, client-approved project before launch. */
  demo: boolean;
}

export interface FeaturedWork extends WorkItem {
  summary: string;
  quote: Testimonial;
}

export type ServiceTint = "lilac" | "lime" | "sky" | "peach";
export type ServiceIllustrationKind = "mvp-sprint" | "scale-uptime" | "ai-routing" | "project-rescue";

export interface Service {
  id: ServiceIllustrationKind;
  badge: string;
  timeline: string;
  title: string;
  description: string;
  deliverables: string[];
  tint: ServiceTint;
  image: string;
}

export interface Step {
  phase: string;
  title: string;
  duration: string;
  description: string;
  artifacts: string[];
  cadence: string;
}

export interface EngagementModel {
  name: string;
  summary: string;
  priceLabel: string;
  price: string;
  priceNote: string;
  includes: string[];
  cta: Cta;
  featured?: boolean;
}

export interface Commitment {
  lead: string;
  detail: string;
  badge?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  timezone: string;
  initials: string;
  linkedin: string;
  /** Placeholder profile — replace with the real person before launch. */
  placeholder: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  tag?: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}
