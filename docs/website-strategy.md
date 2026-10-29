# Website Strategy: SaaS Dev Company (2026)

Condensed from two research reports (second one verified against primary sources, Oct 17, 2026).

## Core thesis

The site is a **proof engine**, not a services brochure. Most buyers now shortlist via AI chatbots, then visit the site to **verify**. Win by showing specific, defensible proof of production SaaS work.

Evidence (directional only — studies are about software buying, not dev-services buying):
- G2 "Answer Economy" (1,076 buyers, Mar 2026): 51% start research in an AI chatbot more often than Google; 69% chose a different vendor than planned after AI guidance.
- Semrush (Jul 2026): 71% of AI users visit the vendor site after an AI mention.
- Portent (2022): 1s load converts ~3x better than 5s, ~5x better than 10s.
- Unverified / do not cite: "73% of buyers say case studies influence decisions", Clutch review-rejection rates, Calendly/scheduler lift figures, agency conversion benchmarks.

## Positioning

- **Now:** "SaaS product engineering for startups and SMBs."
- **Later (6–12 months):** narrow to a vertical, stack, or problem (e.g. rescuing vibe-coded MVPs) once case studies show a pattern.
- Offshore-to-West firms must state time-zone overlap, contract/IP terms, and communication process explicitly.

## Pages

**Must-have (launch):**
1. Homepage (11 sections below)
2. 3–5 SaaS case studies + grid
3. SaaS product development service page (MVP, scale/modernize, AI features)
4. How we work + engagement models/pricing
5. About/Team (real faces, LinkedIn, legal entity, address)
6. Contact/Book a call (embedded scheduler, short form fallback, direct email)
7. Trust/legal (can be a section): NDA, IP assignment, code in client repo, GDPR/DPA, payment terms, contracting entity

**Later:** vertical pages (after 2+ cases in one), stack pages (e.g. "Next.js SaaS development"), blog on SaaS build decisions, video testimonials, MVP scoping tool, FAQ with schema.

**Skip for now:** careers section, on-site AI chatbot, insights/report hubs, 15-industry or 40-tech lists, pay-to-play badge walls, heavy 3D/scroll-jacking, gated PDFs before pricing/case studies.

## Homepage: 11 sections

| # | Section | Buyer question | Must contain | Fallback |
|---|---|---|---|---|
| 1 | Hero | Is this for me? | Audience, outcome, primary CTA (book a call), secondary (see work) | None; write first |
| 2 | Proof strip | Is this real? | 3 defensible numbers (products live, users, uptime, years), permitted logos | Numbers only |
| 3 | Featured case study | Built something like mine? | One product, one metric, live link, named quote | Anonymized case + screenshots |
| 4 | Services by stage | Can they handle my stage? | 3–4 offers: validate & build, scale & harden, add AI, audit/rescue | Reduce to 3 |
| 5 | How we work | What happens after I sign? | Phases, weekly cadence, deliverables, tools, repo access | None |
| 6 | Engagement models | What will it cost? | Pricing model + starting price for entry service | Model + cost drivers only |
| 7 | Testimonials | Do founders vouch? | Name, role, company, photo, source link | Fold into #3 until 2+ |
| 8 | Why us / risk reversal | What if it goes wrong? | Overlap hours, NDA, IP assignment, code in client repo, exit terms | None |
| 9 | Team | Who am I working with? | Real faces, roles, LinkedIn | Founders and leads only |
| 10 | FAQ | Last objections | 5–7 real objections (start with 5) | Start with 5 |
| 11 | Final CTA | How do I start? | Embedded booking + short fallback form | None |

If two sections would each be under a screen of real content, merge them rather than pad.

## Pricing (judgment call)

- Publish the pricing **model** for everything and what drives cost (scope, integrations, compliance, timeline).
- Publish a **starting price** for one scoped entry service (discovery sprint or audit).
- MVPs: "typically starts at…, scope sets final price." Publish a full range only if you will honor it.
- Review after the first 20–30 qualified conversations.

## Case study template

- Outcome-style title ("How [Client] launched a multi-tenant B2B SaaS in 11 weeks and scaled to 4,000 users")
- Snapshot: client/industry, region, stage, team size, duration, engagement model, stack, live link
- Challenge in business terms; constraints (budget, compliance, integrations)
- What we built (3–5 capabilities, 2–3 real screenshots or short recording)
- Technical decisions and trade-offs (architecture diagram)
- Results: time-to-launch, users/accounts, uptime, performance (p95, Lighthouse), release cadence, cost savings
- Named client quote with photo; what happened next; CTA

**Sourcing numbers:** uptime from monitoring (UptimeRobot/Better Stack), users from admin DB/analytics, cadence from Git tags/CI, performance from Lighthouse/CrUX.
**Client outreach:** one message asking for publish approval, a quote, and a third-party review together.

## Proof ladder (use the strongest available per project; label honestly)

1. Named client, metrics, quote, live link
2. Named client, metrics, live link
3. Anonymized client with real metrics + screenshots (labeled as anonymized)
4. Technical breakdown (architecture, decisions, scale)
5. Own products / open-source work
6. Founder/lead verifiable history

## Trust: do / avoid

**Do:** state overlap hours (CET and ET), show founders' faces + LinkedIn, list legal entity and jurisdiction, offer NDA before discovery, milestone payments, link verified reviews, native-quality English copy.
**Avoid:** stock team photos, "we build everything" copy, unverifiable 5.0 ratings, hourly rate as headline, missing address/entity, no live links, slow site, testimonials without names, 10+ field forms.

## Getting qualified visitors

Your site mostly serves the **verification** step; being heard about happens off-site (AI answers cite third-party sources far more than vendor sites).

| Layer | What |
|---|---|
| Base | Systematic referral/repeat asks after every delivery (start now) |
| Fast channel | Founder-led LinkedIn outreach + content to SaaS founders; small, researched target list (no template blasts) |
| Compounding | Case studies, technical write-ups on SaaS build decisions, 5+ verified third-party reviews |
| Later | Partnerships with design studios/consultants |

Skip paid ads, cold-calling, and marketplace bidding as primary channels. Clutch: useful for human verification, uncertain for AI visibility.

## Tracking (set up before launch)

- Monthly funnel: visitors → calls booked → qualified calls → proposals → signed
- Booking form: free-text "How did you hear about us?" (catches "ChatGPT recommended you")
- UTM tags on all LinkedIn/outreach links
- Analytics segment for AI-assistant and review-site referrals
- CRM/spreadsheet with lead status + source
- First-reply target (e.g. 4 business hours), measured
- No benchmark targets yet: collect your own baseline for 60–90 days

## Technical requirements

- Lighthouse ≥ 90 mobile, LCP < 2.5s, fast load (your site is a live portfolio piece)
- Organization, Service, FAQ schema; consistent facts across LinkedIn/Clutch/site
- Modest motion only; accessibility basics (WCAG)

## Build plan

**Weeks 1–4:** 3 case studies; homepage, service page, how-we-work/pricing, about/team, contact with booking; tracking; start referral asks immediately.
**Months 2–3:** 5 verified reviews, 5+ case studies; LinkedIn routine + small outreach list; one productized entry offer page.
**Months 4–6:** technical/cost write-ups; vertical or stack landing page; review tracking data and double down.

## Launch checklist

- [ ] Hero names audience and outcome in one line
- [ ] "Book a call" CTA in header on every page
- [ ] 3+ case studies with metrics, live links, named quotes (or labeled fallbacks)
- [ ] Pricing model + entry-service starting price
- [ ] Overlap hours, NDA/IP, legal entity visible
- [ ] Real team photos + LinkedIn
- [ ] Verified third-party reviews linked
- [ ] Mobile LCP < 2.5s; schema in place
- [ ] Tracking live; reply-time target stated

## Caveats

- Quantitative evidence is about software buying, not dev-services buying; treat as directional.
- Practitioner evidence on agency acquisition is thin and commercially biased.
- Niche and pricing recommendations are well-supported inference, not controlled data.
