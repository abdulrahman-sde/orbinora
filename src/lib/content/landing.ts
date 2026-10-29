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
    "Your dedicated product engineering partner. From clickable Figma prototype to production software in 8–12 weeks—with full IP ownership from day one and live demos every Friday.",
  screenshot: DEMO_SCREENSHOT,
};

export const clientLogos = ["Ledgerline", "Shiftboard", "Clinicflow", "Brieflet", "Northwind", "Kestrel"];

export const manifesto =
  "Most agencies hand over a fragile codebase and disappear. We engineer production-grade software, push to your repo from day one, and stay until it drives real revenue.";

export const stats: Stat[] = [
  { value: "12+", label: "SaaS products shipped", detail: "Across FinTech, HealthTech & B2B AI" },
  { value: "140k+", label: "Monthly active users", detail: "Running on architectures we built" },
  { value: "99.96%", label: "Production uptime", detail: "Monitored with 30-day launch warranty" },
];

export const featuredWork: FeaturedWork = {
  id: "ledgerline",
  client: "Ledgerline",
  category: "B2B Treasury & Automated Reconciliation",
  outcome: "Launched in 11 weeks, now serving 4,200 paying businesses.",
  summary:
    "Ledgerline had an investor deadline and only a slide deck. We designed the product with their founders, engineered a multi-currency ledger with real-time bank feeds, launched in under three months, and have partnered on their roadmap for two years.",
  challenge:
    "Needed an audit-grade multi-currency ledger, automated Stripe/Plaid reconciliation, and SOC2-ready role permissions before a Series A milestone.",
  solution:
    "Designed a high-density financial workspace and built an idempotent double-entry ledger engine handling 50k+ daily transactions with sub-60ms query latency.",
  deliverables: ["Product Strategy & Design System", "Double-Entry Ledger Engine", "Plaid & Stripe Sync", "Role-Based Audit Logs"],
  stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "AWS"],
  metrics: [
    { value: "11 weeks", label: "Concept to production" },
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
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Twilio", "Tailwind CSS"],
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
    category: "AI Contract Intelligence for Legal Teams",
    outcome: "From clickable prototype to paying enterprise law firms in 8 weeks.",
    challenge:
      "Founders had a promising prompt prototype, but hallucinations, slow PDF parsing, and lack of clause citations blocked paid conversions.",
    solution:
      "Engineered a citation-backed RAG pipeline with hybrid vector search, clause-by-clause redline diffs, and deterministic evaluation guardrails.",
    deliverables: ["Citation-Backed RAG Pipeline", "Interactive Clause Diff Viewer", "Multi-Model Routing", "SOC2 Tenant Isolation"],
    stack: ["Next.js", "Python", "OpenAI", "Anthropic", "pgvector", "Vercel"],
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
    badge: "0 → 1 Product Build",
    timeline: "8–12 weeks",
    title: "Build your first version",
    description:
      "Turn your domain expertise into a complete SaaS product customers can sign up and pay for—with authentication, billing, core workflows, and polished UI.",
    deliverables: ["Clickable Figma Prototype", "Full-Stack Web & API", "Stripe Billing & Auth", "Production Cloud Deploy"],
    tint: "lilac",
    image: DEMO_SCREENSHOT,
  },
  {
    id: "scale-uptime",
    badge: "Scale & Velocity",
    timeline: "Ongoing or Sprint",
    title: "Grow and improve your product",
    description:
      "Already have paying users? We ship the roadmap features your customers ask for, eliminate performance bottlenecks, and harden reliability as traffic grows.",
    deliverables: ["Feature Roadmap Delivery", "Database & Query Tuning", "Design System Upgrade", "CI/CD & Observability"],
    tint: "lime",
    image: DEMO_SCREENSHOT,
  },
  {
    id: "ai-routing",
    badge: "Applied AI Engineering",
    timeline: "4–6 weeks",
    title: "Add AI to your product",
    description:
      "Production AI features your customers actually pay for—semantic search, document intelligence, copilot workflows, and multi-model routing with strict evals.",
    deliverables: ["RAG & Vector Search", "Multi-Model Orchestration", "Hallucination Guardrails", "Streaming Copilot UI"],
    tint: "sky",
    image: DEMO_SCREENSHOT,
  },
  {
    id: "project-rescue",
    badge: "Audit & Overhaul",
    timeline: "2–6 weeks",
    title: "Rescue a stuck project",
    description:
      "Inherited a slow, buggy, or half-finished codebase? We run a deep architectural audit, tell you honestly what to keep vs. refactor, and ship to production.",
    deliverables: ["48-Hour Codebase Audit", "Critical Bug Stabilization", "Schema & API Refactoring", "Zero-Downtime Cutover"],
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
      "We map your user journeys, design a clickable high-fidelity Figma prototype, and lock in the technical architecture. You get a fixed scope, price, and timeline before committing to the build.",
    artifacts: ["Interactive Figma Prototype", "System Architecture Blueprint", "Fixed-Price Milestone Plan"],
    cadence: "Workshops + Async Figma Reviews",
  },
  {
    phase: "Phase 2",
    title: "Build in the Open",
    duration: "Weeks 3–10",
    description:
      "Code pushes directly to your GitHub from day one. Every Wednesday you receive a written progress pulse; every Friday we demo live, working software on a staging URL you can click through.",
    artifacts: ["Weekly Staging Releases", "Automated CI/CD & Tests", "Direct Slack Channel with Engineers"],
    cadence: "Wed Written Pulse · Fri Live Demo",
  },
  {
    phase: "Phase 3",
    title: "Launch & Harden",
    duration: "Weeks 11–12",
    description:
      "We run load testing, configure production observability, set up automated backups, and orchestrate your go-live. Then we stand by for 30 days of included post-launch warranty.",
    artifacts: ["Production Cloud Cutover", "Error & Uptime Telemetry", "30-Day Bug-Free Warranty"],
    cadence: "Real-Time Launch War Room",
  },
  {
    phase: "Phase 4",
    title: "Scale or Clean Handover",
    duration: "Ongoing",
    description:
      "Keep the exact same engineers shipping your v2 roadmap month-to-month, or transition to your in-house hires with complete runbooks, architecture docs, and pair-programming onboarding.",
    artifacts: ["Full Technical Runbooks", "In-House Team Onboarding", "Flexible Monthly Retainer"],
    cadence: "Monthly Roadmap & KPI Review",
  },
];

export const engagementModels: EngagementModel[] = [];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Another agency left us with a half-finished app and mounting technical debt. Orbinora audited the repo in 48 hours, told us honestly what to keep, and got us live to paying customers a month later.",
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
      "Our AI contract analyzer went from a fragile prompt demo to an enterprise feature law firms pay for. They built proper evaluation suites and citation guardrails before calling it done.",
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
    badge: "Your GitHub · Your AWS",
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
    detail: "We don't throw code over the fence and vanish. Every launch includes 30 days of dedicated bug fixes, performance tuning, and production support.",
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
    bio: "Leads system architecture, data modeling, and product strategy. Obsessed with shipping fast without creating future technical debt.",
    specialties: ["System Architecture", "Next.js & TypeScript", "SaaS Strategy"],
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
    bio: "Specializes in high-throughput PostgreSQL schemas, multi-tenant auth, Stripe billing engines, and zero-downtime cloud infrastructure.",
    specialties: ["PostgreSQL & Node", "Multi-Tenant SaaS", "AWS & CI/CD"],
    timezone: "EU / EST Overlap",
    initials: "MV",
    linkedin: "#",
    placeholder: true,
  },
  {
    name: "Tariq Mahmood",
    role: "Lead Applied AI Engineer",
    bio: "Builds deterministic RAG pipelines, multi-model routing, and evaluation harnesses that make LLM features reliable in production.",
    specialties: ["RAG & pgvector", "LLM Evaluations", "Python & Agents"],
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
      "Most first versions go from kickoff to live, paying customers in 8 to 12 weeks. We start with a 2-week Planning & Prototype phase so you have a clickable Figma prototype, system architecture, and fixed milestone schedule before the main build starts.",
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
      "You do—100% from day one. We set up your GitHub repository, Figma workspace, AWS/Vercel accounts, and Stripe in your company's name on day one, and sign a full IP assignment and NDA before we begin.",
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
      "Every build includes a 30-day post-launch warranty where we monitor production and fix any bugs at no extra cost. After that, you can keep the same team on a flexible monthly retainer to ship your v2 roadmap, or we'll onboard your in-house hires.",
  },
  {
    tag: "Codebase Rescue",
    question: "Can you take over a product another agency or freelancer started?",
    answer:
      "Yes. We start with a focused 48-hour codebase and architecture audit. We give you an honest written report showing what can be salvaged, what needs refactoring, and the fastest path to a stable launch.",
  },
];

export const finalCta = {
  title: "Tell us what you're building.",
  description:
    "Book a 30-minute architecture & product call directly with our principal engineers. You'll leave with a concrete execution plan, realistic timeline, and honest feedback—zero sales fluff.",
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Capabilities",
    links: [
      { label: "0 → 1 MVP Engineering", href: "#services" },
      { label: "Product Scale & Velocity", href: "#services" },
      { label: "Applied AI & RAG", href: "#services" },
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
      { label: "GitHub", href: "#" },
    ],
  },
];
