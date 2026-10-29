import type {
  Commitment,
  Cta,
  EngagementModel,
  FaqItem,
  FeaturedWork,
  FooterColumn,
  NavLink,
  Service,
  Stat,
  Step,
  TeamMember,
  Testimonial,
  WorkItem,
} from "@/types/landing";

const DEMO_SCREENSHOT = "/demo/product-screenshot.svg";

export const company = {
  name: "Orbinora",
  email: "hello@orbinora.com",
  bookingUrl: "https://cal.com/orbinora/intro",
  legalEntity: "Orbinora Technologies Ltd.",
  replyTime: "4 business hours",
  copyrightYear: 2026,
} as const;

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Why Orbinora", href: "#commitments" },
  { label: "Work", href: "#work" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

export const primaryCta: Cta = { label: "Book an intro call", href: company.bookingUrl };
export const secondaryCta: Cta = { label: "Explore case studies", href: "#work" };

export const hero = {
  proof: { label: "12 SaaS products shipped · 140k+ monthly active users", href: "#work" },
  title: "We design, engineer, and ship SaaS products that customers pay for.",
  description:
    "Your dedicated product partner. From the first idea to a polished product in 8–12 weeks—with full ownership from day one and something new to review every Friday.",
  screenshot: DEMO_SCREENSHOT,
};

export const clientLogos = ["Ledgerline", "Shiftboard", "Clinicflow", "Brieflet", "Northwind", "Kestrel"];

export const manifesto =
  "Most agencies hand over a first version and disappear. We stay close from the first sketch to launch, building a product your customers understand, enjoy, and return to.";

export const stats: Stat[] = [
  { value: "12+", label: "Products launched", detail: "Across finance, healthcare, and business" },
  { value: "140k+", label: "People reached", detail: "Using products we helped create" },
  { value: "30 days", label: "Launch support", detail: "A dedicated team beside you after launch" },
];

export const featuredWork: FeaturedWork = {
  id: "ledgerline",
  client: "Ledgerline",
  category: "B2B Treasury & Automated Reconciliation",
  outcome: "Launched in 11 weeks, now serving 4,200 paying businesses.",
  summary:
    "Ledgerline had an investor deadline and only a slide deck. We designed the product with their founders, engineered a multi-currency ledger with real-time bank feeds, launched in under three months, and have partnered on their roadmap for two years.",
  challenge:
    "The team needed a simpler way to understand their finances and stay on top of daily work before an important growth milestone.",
  solution:
    "We shaped a calm financial workspace that brings the most important information and actions into one clear place.",
  deliverables: ["Product Strategy & Design", "Financial Workspace", "Bank Connections", "Team Permissions"],
  stack: ["Web product", "Mobile-friendly design", "Payments", "Team tools"],
  metrics: [
    { value: "11 weeks", label: "Idea to launch" },
    { value: "4,200+", label: "Paying businesses" },
    { value: "99.99%", label: "Ledger accuracy" },
  ],
  quote: {
    quote:
      "They treated our investor deadline like it was their own. Every Friday we clicked through real, deployed software—we never once felt in the dark.",
    highlight: "Live in 11 weeks",
    metricBadge: "4,200+ businesses onboarded",
    name: "Hannah Clarke",
    role: "Co-founder & CEO",
    company: "Ledgerline",
    initials: "HC",
    demo: true,
  },
  image: DEMO_SCREENSHOT,
  href: "#contact",
  demo: true,
};

export const moreWork: WorkItem[] = [
  {
    id: "clinicflow",
    client: "Clinicflow",
    category: "Healthcare Operations & Smart Scheduling",
    outcome: "Cut patient no-shows by 33% across 85 outpatient clinics.",
    challenge:
      "Legacy scheduling software caused double-bookings, slow intake forms, and high patient drop-off across multi-location practices.",
    solution:
      "Built a real-time clinician calendar with automated SMS/WhatsApp waitlist backfill, instant EHR sync, and mobile-first patient intake.",
    deliverables: ["Clinician Calendar UI", "Automated Waitlist Backfill", "HIPAA-Ready Intake Portal", "Twilio SMS Engine"],
    stack: ["Web product", "Scheduling", "Patient communications", "Mobile-friendly design"],
    metrics: [
      { value: "-33%", label: "Patient no-shows" },
      { value: "85+", label: "Active clinics" },
      { value: "1.8m", label: "Appointments booked" },
    ],
    image: DEMO_SCREENSHOT,
    href: "#contact",
    demo: true,
  },
  {
    id: "brieflet",
    client: "Brieflet",
    category: "Contract Review for Legal Teams",
    outcome: "From clickable prototype to paying enterprise law firms in 8 weeks.",
    challenge:
      "The team had a promising idea but needed a clearer, more trustworthy way for firms to review long contracts.",
    solution:
      "We created a focused review experience that helps people find important details and compare changes with confidence.",
    deliverables: ["Review Experience", "Clause Comparison", "Helpful Suggestions", "Team Workspaces"],
    stack: ["Web product", "Document review", "Search", "Team workspaces"],
    metrics: [
      { value: "8 weeks", label: "Prototype to paid" },
      { value: "98.4%", label: "Citation precision" },
      { value: "4.2x", label: "Faster contract review" },
    ],
    image: DEMO_SCREENSHOT,
    href: "#contact",
    demo: true,
  },
];

export const services: Service[] = [
  {
    id: "mvp-sprint",
    badge: "App development",
    timeline: "8–12 weeks",
    title: "Mobile app development",
    description:
      "Turn your expertise into a clear, useful product that customers can start using and paying for—with thoughtful flows, a polished interface, and everything needed for launch.",
    deliverables: ["Clickable Product Prototype", "Complete Web Product", "Payments & Sign-In", "Launch Preparation"],
    tint: "lilac",
    image: DEMO_SCREENSHOT,
  },
  {
    id: "scale-uptime",
    badge: "Web development",
    timeline: "Ongoing or Sprint",
    title: "Web product development",
    description:
      "Already have customers? We improve the experience, add the features they ask for, and help your product feel faster, clearer, and easier to grow.",
    deliverables: ["Roadmap Features", "Faster Product Experience", "Visual Design Refresh", "Ongoing Improvements"],
    tint: "lime",
    image: DEMO_SCREENSHOT,
  },
  {
    id: "ai-routing",
    badge: "AI & ML development",
    timeline: "4–6 weeks",
    title: "AI and machine learning",
    description:
      "Add helpful features where they make a real difference—from finding information faster to helping customers complete everyday tasks with confidence.",
    deliverables: ["Smart Search", "Document Assistance", "Helpful AI Workflows", "Clear, Guided Experiences"],
    tint: "sky",
    image: DEMO_SCREENSHOT,
  },
  {
    id: "project-rescue",
    badge: "Product improvement",
    timeline: "2–6 weeks",
    title: "Improve an existing product",
    description:
      "Inherited a slow, buggy, or half-finished product? We make sense of what you have, fix the biggest problems, and give you a clear path forward.",
    deliverables: ["Clear Product Review", "Priority Fixes", "Simpler Foundations", "Confident Relaunch"],
    tint: "peach",
    image: DEMO_SCREENSHOT,
  },
];

export const steps: Step[] = [
  {
    phase: "Phase 1",
    title: "Plan & Prototype Together",
    duration: "Weeks 1–2",
    description:
      "We map the experience together, design a clickable prototype, and agree on the scope, price, and timeline before the build begins.",
    artifacts: ["Clickable Product Prototype", "Product Plan", "Fixed-Price Milestone Plan"],
    cadence: "Workshops + Design Reviews",
  },
  {
    phase: "Phase 2",
    title: "Build in the Open",
    duration: "Weeks 3–10",
    description:
      "You see real progress every week. We share a written update midweek and walk you through the latest working version every Friday.",
    artifacts: ["Weekly Product Previews", "Regular Quality Checks", "Direct Team Channel"],
    cadence: "Wed Written Update · Fri Live Preview",
  },
  {
    phase: "Phase 3",
    title: "Launch & Harden",
    duration: "Weeks 11–12",
    description:
      "We prepare everything for launch, help you go live smoothly, and stay close for 30 days to answer questions and fix any issues.",
    artifacts: ["Launch Preparation", "Final Quality Review", "30-Day Launch Support"],
    cadence: "Launch Planning + Support",
  },
  {
    phase: "Phase 4",
    title: "Scale or Clean Handover",
    duration: "Ongoing",
    description:
      "Keep working with the same team as your product grows, or take it forward with a clear handover and everything your people need.",
    artifacts: ["Full Technical Runbooks", "In-House Team Onboarding", "Flexible Monthly Retainer"],
    cadence: "Monthly Roadmap & KPI Review",
  },
];

export const engagementModels: EngagementModel[] = [];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Another agency left us with a half-finished app and a lot of uncertainty. Orbinora reviewed what was there, told us honestly what to keep, and helped us reach paying customers a month later.",
    highlight: "Rescued & launched in 4 weeks",
    metricBadge: "Zero downtime since launch",
    name: "Marcus Feldman",
    role: "Founder & CEO",
    company: "Shiftboard",
    initials: "MF",
    demo: true,
  },
  {
    quote:
      "The Friday live demos made it effortless to cut the wrong features early and double down on what clinicians actually needed. We launched leaner, faster, and immediately cut patient no-shows.",
    highlight: "33% fewer no-shows",
    metricBadge: "85+ clinics onboarded",
    name: "Priya Raman",
    role: "Head of Product",
    company: "Clinicflow",
    initials: "PR",
    demo: true,
  },
  {
    quote:
      "Our contract review tool went from an early idea to something law firms were happy to pay for. The team made it clear, useful, and trustworthy before launch.",
    highlight: "98.4% citation accuracy",
    metricBadge: "Prototype to paid in 8 weeks",
    name: "Tom Ellison",
    role: "Co-founder & CTO",
    company: "Brieflet",
    initials: "TE",
    demo: true,
  },
];

export const commitments: Commitment[] = [
  {
    lead: "100% IP & Repo Ownership from Day One",
    detail: "Every line of code, Figma file, and cloud account lives in your organization's name from commit #1—never held hostage until a final invoice.",
    badge: "Your work · Your accounts",
  },
  {
    lead: "Daily Overlap with UK, EU & US East Coast",
    detail: "At least 5 hours of live synchronous overlap every workday, paired with a dedicated Slack channel directly with the engineers writing your code.",
    badge: "GMT / CET / EST Overlap",
  },
  {
    lead: "Milestone-Tied Billing, Zero Black Box",
    detail: "Payments are tied to verified, deployed milestones you can click and test yourself—never vague timesheets or runaway hourly billing.",
    badge: "Fixed-Scope Clarity",
  },
  {
    lead: "30-Day Post-Launch Warranty Included",
    detail: "We don't hand over a first version and vanish. Every launch includes 30 days of dedicated support and improvements.",
    badge: "Guaranteed Stability",
  },
  {
    lead: "Stop or Hand Over Anytime",
    detail: "Clean modular code, Infrastructure-as-Code, and complete runbooks mean your future in-house engineers can take over in days, not months.",
    badge: "Zero Vendor Lock-In",
  },
];

export const team: TeamMember[] = [
  {
    name: "Abdul Rahman",
    role: "Founder & Principal Architect",
    bio: "Leads product direction and helps teams turn complicated ideas into simple, useful experiences.",
    specialties: ["Product direction", "Experience design", "Business strategy"],
    timezone: "UK / EU / EST Overlap",
    initials: "AR",
    linkedin: "#",
    placeholder: false,
  },
  {
    name: "Elena Rostova",
    role: "Head of Product Design",
    bio: "Turns complex B2B workflows into calm, high-converting interfaces and scalable Figma design systems.",
    specialties: ["Product UX/UI", "Design Systems", "Interactive Prototyping"],
    timezone: "London / CET Overlap",
    initials: "ER",
    linkedin: "#",
    placeholder: true,
  },
  {
    name: "Marcus Vance",
    role: "Lead Full-Stack Engineer",
    bio: "Builds dependable products with thoughtful details, from the first interaction through launch and beyond.",
    specialties: ["Web products", "Payments", "Product quality"],
    timezone: "EU / EST Overlap",
    initials: "MV",
    linkedin: "#",
    placeholder: true,
  },
  {
    name: "Tariq Mahmood",
    role: "Product Innovation Lead",
    bio: "Finds practical ways to use new tools so products can help people save time and make better decisions.",
    specialties: ["Smart product ideas", "Research", "Helpful automation"],
    timezone: "UK / EU Overlap",
    initials: "TM",
    linkedin: "#",
    placeholder: true,
  },
];

export const faqs: FaqItem[] = [
  {
    tag: "Timeline & Scope",
    question: "How long does it take to launch a first version?",
    answer:
      "Most first versions go from kickoff to paying customers in 8 to 12 weeks. We start with a 2-week planning and prototype phase so you have something clear to review before the main build starts.",
  },
  {
    tag: "Non-Technical Founders",
    question: "I'm a non-technical founder. How will we work together?",
    answer:
      "Over half the founders we partner with are domain experts rather than engineers. We translate every technical trade-off into plain business language, show you clickable software every Friday, and handle all cloud, security, and deployment setup end-to-end.",
  },
  {
    tag: "Ownership & IP",
    question: "Who owns the code, designs, and cloud accounts?",
    answer:
      "You do—100% from day one. Your company owns the product, accounts, files, and final work, and we agree on the details before we begin.",
  },
  {
    tag: "Communication",
    question: "How do we stay in touch during the build?",
    answer:
      "You get a shared Slack channel directly with the engineers and designer on your project—no middleman account managers. Every Wednesday we post a structured written update, and every Friday we run a live 30-minute demo of what shipped that week.",
  },
  {
    tag: "Post-Launch",
    question: "What happens after our product launches?",
    answer:
      "Every build includes 30 days of support after launch, with fixes at no extra cost. After that, you can keep the same team for improvements or take the work forward with your own people.",
  },
  {
    tag: "Codebase Rescue",
    question: "Can you take over a product another agency or freelancer started?",
    answer:
      "Yes. We start with a focused review of what you already have. We show you what is working, what needs attention, and the clearest path to a stable launch.",
  },
];

export const finalCta = {
  title: "Tell us what you're building.",
  description:
    "Book a 30-minute product call directly with our lead team. You'll leave with a clear next step, a realistic timeline, and honest feedback—zero sales fluff.",
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Capabilities",
    links: [
      { label: "0 → 1 MVP Engineering", href: "#services" },
      { label: "Product Scale & Velocity", href: "#services" },
      { label: "Smart product ideas", href: "#services" },
      { label: "Codebase Rescue & Audit", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Orbinora", href: "#commitments" },
      { label: "Case Studies", href: "#work" },
      { label: "Leadership Team", href: "#team" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Book 30-min Intro Call", href: company.bookingUrl },
      { label: "Email hello@orbinora.com", href: `mailto:${company.email}` },
      { label: "LinkedIn", href: "#" },
      { label: "Your ownership", href: "#" },
    ],
  },
];
