# Modular Solution Packages for Asian EAMs & MFOs
## Tiered Package Architecture — HK/SG Wealth-Tech Go-to-Market

**Prepared:** August 2026 | **Basis:** Asia EAM competitor & market landscape dossier (Modules 1–15, July 2026)
**Modules:** A = Consolidated Reporting · B = Onboarding & Client Management · C = Portfolio/Order Management · D = Structured Products & Advanced Risk Analytics

---

## 0. Market Frame (from the research — read this first, it drives the design)

Before the packages, four findings from the landscape research that shape everything below:

1. **The market is a barbell, and the middle is the buyer.** ~295 EAMs in Singapore and an estimated 350–400 pure-play EAM/MFOs in Hong Kong (Type 9 universe is 2,407 corporates, but most are fund managers, not EAMs) — call it a **~650–700 firm universe**. 77% (SG) / 72% (HK) manage <US$1B. Boutiques are 77% of firms but 18% of AUM. Institutional heavyweights (SS&C, Avaloq) own the top; Canopy/Privé own the agile long tail. **Our natural hunting ground is the 4–10 person firm crossing the "operational ceiling" — not the 2-person Solo-Star in managed decay, and not the >$1.5B firm already on Geneva.**

2. **The wedge pain is data, but the *urgent* pain is regulatory.** Custodian fatigue is the #1 operational pain (avg. 4–5 custodians per firm, up to 5.8 per client; 1,800–2,200 man-hours/year lost to reconciliation; 6.5% manual error rates; 3–5 day report assembly). But what converts pipeline into signatures in 2026 is **MAS Notice CMG-N06** (data lineage + shadow accounting, hard deadline Aug 2027), the **30-day onboarding mandate**, and the **2026 Fee Disclosure Code** (dollar-based TCR). Packages that carry a compliance deadline sell themselves.

3. **The revenue inversion changed what EAMs will pay for.** Retrocessions collapsed from 85% → 15% of revenue; DPM AUM is growing 22% YoY; 87% of new HK licence applications target Type 9. Firms now *make* money on management + performance fees — which means tooling that supports DPM (Module C) and clean fee/TCR reporting (Module A) is revenue infrastructure, not cost. Tech budgets have moved to 15–20% of gross revenue / 4–6 bps of AUM.

4. **Our biggest competitor isn't a vendor — it's the Segment 3 platform.** Boutiques solving the tech gap increasingly don't buy software; they hand back the licence and join Wrise, Raffles/Quantive, or Gordian (25% annual boutique consolidation rate; platforms charge 15–25 bps all-in with tech included; Wrise even sells its stack via VooTech). Any package aimed at Segment 1 must be priced and positioned as **cheaper than surrendering independence** — and platforms themselves should be treated as a white-label *channel*, not just competition.

---

## 1. Package Architecture Table

| # | Package | Modules | Target archetype | Est. HK/SG segment size (firms) | Pricing metric | Indicative annual price (USD) | Wedge or expand? | Displaces |
|---|---------|---------|------------------|----------------------------------|----------------|-------------------------------|------------------|-----------|
| P1 | **CORE** — Reporting & Reconciliation | A | 2–5 person SFO / Solo-Star & small boutique; Excel-bound firms | ~200–250 (42% of Seg-1 still on "Excel-Bank Bridge") | Per custodian feed + account bands; feed-complexity multiplier | 18k–36k entry (3 feeds, ≤30 accts); +3–5k per added feed | **WEDGE** | Excel + manual PDF assembly; Canopy entry tier |
| P2 | **OPERATE** — Reporting + Client Ops | A+B | 4–6 person Partnership Boutique with Mainland/SEA inflows | ~150–200 | P1 base + per seat + per onboarding case | 45k–75k | Expand (or wedge where onboarding is the burning pain) | Canopy + generic CRM + Wecan + partial ComplianceAsia scope |
| P3 | **MANAGE** — Reporting + DPM Engine | A+C | 5–15 RM EAM running/launching DPM books; Archetype B/C boutiques & lower mid-tier | ~200–260 (40% of boutiques + 65% of mid-tier do DPM, rising) | bps on AUM with floor, or per RM | 1.5–3.0 bps, floor 60k; typical 90k–150k @ $500M–1B | **Primary EXPAND / co-lead** | Addepar, Privé PMS, Croesus; spreadsheet DPM |
| P4 | **SP DESK** — Reporting + SP Lifecycle & Risk | A+D | SP-heavy advisory shop, HK-weighted; FX/SP flow desks | ~80–120 (HK-skewed) | P1 base + SP module fee + per-RFQ ticket or bp on SP notional | 60k–100k + volume fees | Expand / niche wedge in HK | Excel SP blotters; issuer platforms (Leonteq, Privé RFQ) at the *lifecycle* layer |
| P5 | **FULL STACK** — Wealth OS | A+B+C+D | 7–50 person Transitioning MFO / mid-tier MFO; Segment-3 platforms (white-label) | ~80–110 direct + ~25–40 platforms as channel | bps on AUM with floor; per-sub-RM for platforms | 3–5 bps, floor 180k; typical 200k–400k; platforms: 800–1,200/sub-RM/mo | Destination tier | additiv, InvestCloud, Avaloq EAM-on-Cloud (below its weight class) |

**Deliberately not offered:** B standalone (compliance consultants at $10–15k/month own that budget line; B has no data spine without A), C standalone (a PMS without clean multi-custodian data reproduces the reconciliation trap — every credible competitor bundles aggregation), D standalone (same reason; SP risk analytics on dirty positions is noise).

---

## 2. Detailed Package Sheets

---

### P1 — CORE (Module A only): "Your consolidated report, reconciled, on day 1 of the month"

**1. Target segment.** The Solo-Star (1–3 people, US$150–400M AUM) and small Partnership Boutique, plus small SFOs. ~480–540 boutiques exist across HK/SG; 42% still run the "Excel-Bank Bridge" → **~200–250 firm serviceable segment**, plus an uncounted SFO tail. Caveat from the research: Solo-Stars are in "managed decay" (net margins 45→22 bps since 2022) with a 25%/yr consolidation rate — treat the smallest tier as volume, not as the strategic ICP. The strategic P1 buyer is the 3–6 person firm that will still exist in 2029.

**2. Jobs to be done (customer's language).**
- "Monday morning I log into four bank portals and re-type PDFs into Excel. I lose my ops person to reconciliation." (2,200 hrs/yr; 6.5% error rate)
- "My month-end consolidated report takes 3–5 days and clients with 5+ banks are demanding real-time. I lost a $50M client over a late, wrong report." (Astra Wealth case)
- "MAS CMG-N06 wants data lineage and shadow accounting by Aug 2027 and my 'system' is a spreadsheet on my laptop."
- "The Fee Disclosure Code wants dollar-based cost reports per client. I calculate fees in Excel and I'm leaking 5–8% of my own rebates."
- "Every new custodian a client adds costs me half an ops hire."

**3. Pricing logic.**
- **Metric: per custodian feed, banded by account count, with a feed-complexity multiplier** (API feed = 1x; SFTP/CSV = 1.5x; PDF-scrape = 2–2.5x). This is the honest cost driver *and* protects margin on data-cleaning ops. Do **not** price P1 on AUM — a $300M firm with 6 custodians costs more to serve than an $800M firm with 2, and AUM pricing invites the platform-fee comparison you'll lose.
- **Entry: US$1,500–2,500/month** (3 feeds, ≤30 accounts), +US$3–5k/yr per additional feed. Benchmarks: banks charge S$5k/yr per "gold tier" API feed; a full boutique PMS runs S$40–85k/yr; a 3-custodian setup already costs firms S$15–25k in feed fees alone. Landing under US$30k/yr means P1 costs less than the *feed fees plus half the audit premium* they already pay.
- **Entry psychology:** anchor against headcount, not software — "less than a third of an ops hire, live in 30 days." Offer first custodian feed free for 90 days and a **CMG-N06 readiness pack** (data-flow diagram + immutable audit log export) in the base tier. The regulator-ready artifact is what makes a small EAM sign fast — it converts a nice-to-have into a deadline purchase.
- Include reconciliation **as a service with an SLA** (exceptions worked by our ops + AI agents), not as a software feature. The research is blunt: Excel-bound firms don't buy software, they buy the outcome.

**4. Land-and-expand path.** P1 **is** the wedge for the bottom two-thirds of the market. Upgrade triggers, in observed order: client adds a 4th/5th custodian (feed revenue grows organically); onboarding backlog of Mainland clients → P2; firm activates DPM / hits ~$400–500M AUM and spreadsheet rebalancing breaks → P3; SP trade confirms become the dominant manual chase → P4/SP module.

**5. Competitive angle.** Displaces Excel first, Canopy second. **One-liner vs Canopy:** *"Canopy gives you accurate data; we give you a closed reconciliation with an SLA and a CMG-N06 audit trail — an ops outcome, not a dashboard."* Canopy's 99.9% extraction accuracy and $174B footprint make it unbeatable on pure aggregation breadth; we win on reconciliation-as-a-service, fee/TCR calculation (74% of EAMs still do fees in Excel), and regulatory packaging. Vs Flanks: they win held-away/speed; we win private-bank statement depth and compliance artifacts.

**6. Risks.**
- **Margin risk is highest here.** PDF-scrape feeds and exception-handling ops can silently turn P1 into a low-margin BPO. Mitigations: complexity multiplier pricing, AI-agent exception matching (the research shows the "Data Agent" pattern works), and a contractual feed-migration clause (price drops when the bank feed upgrades to API — goodwill + cost relief).
- **Custodian API improvement erodes the pain** (DBS RAPID, JB DIP, OpenWealth in SG). The 70%-of-banks-still-fragmented figure protects us for ~3–4 years; the counter is moving value up-stack (TCR, lineage, fee leakage recovery) before aggregation commoditises.
- **Canopy price response:** they can bundle down. Our defence is the ops-SLA + compliance layer they'd have to build a services arm to match.

---

### P2 — OPERATE (A+B): "Onboard in 30 days, run the client book from one screen"

**1. Target segment.** The Partnership Boutique (4–6 people, US$500M–1.2B) — the most resilient Segment-1 archetype — and any boutique with active Mainland/SEA inflows. **~150–200 firms.** These firms feel onboarding pain acutely: median client onboarding is 38 days (5.5 weeks) with 15% prospect churn; Mainland files carry a "6-week penalty"; 1-in-5 forms is NIGO; and MAS is pushing the 30-day mandate with senior-management accountability.

**2. Jobs to be done.**
- "It takes me 38 days to open an account and I lose 1 in 7 prospects while they wait."
- "Mainland source-of-wealth files mean dozens of manual chases and translated documents; my compliance officer is drowning." (compliance ratio now 1:7 RMs; 20% of RM 'admin noise' is KYC chasing)
- "Every custodian asks for the same KYC pack in a different format." (the Wecan problem)
- "Client documents live in email threads; when the SFC/MAS spot-audit comes I can't reconstruct who approved what."
- "My CRM is a spreadsheet and my Gen-2 clients expect a portal."

**3. Pricing logic.**
- **Metric: P1 base + per seat (users) + per onboarding case.** Seats US$100–150/user/mo; onboarding cases US$150–300/case with a Mainland/complex-jurisdiction tier (doc intelligence for Chinese filings — the research shows this collapses the 6-week penalty to ~10 days).
- **Typical 5-person firm: US$45–75k/yr all-in.** Benchmarks: standalone CRM + portal runs ~$15k/yr; outsourced compliance consultants cost $10–15k/*month*; our full A+B lands at roughly one-third of the consultant line while automating the workflow layer they don't touch.
- **Entry psychology:** sell it as revenue protection, not admin: "38 days → 30 days is the difference between keeping and losing 1 in 7 prospects." One saved US$20M client at 85 bps pays for the package 2x over.

**4. Land-and-expand.** Natural first expand from P1 (trigger: onboarding backlog, licence audit, or a NIGO-caused loss). In HK, where the SFC Rectification look-back is forcing re-papering of Mainland accounts opened since 2023, **P2 can be the wedge itself** — remediation is a forced purchase. Onward path: firm scales RM count → P3 (seats already in place make the DPM upsell frictionless).

**5. Competitive angle.** Displaces the patchwork: Canopy (which is *moving into* "Client Lifecycle Manager" territory — expect collision), generic CRMs, Wecan (KYC exchange only), and part of the ComplianceAsia/Waystone scope. **One-liner vs Canopy-plus-CRM patchwork:** *"One spine from prospect to reconciled report — your KYC file, suitability record and portfolio share one client ID, so the 30-day mandate and the spot audit are both covered."*

**6. Risks.**
- **Scope creep into regulated compliance advice.** We sell workflow + document intelligence, not compliance opinions; partner with (don't fight) ComplianceAsia/Waystone — make them a channel that standardises on our tooling.
- **Cannibalisation:** modest — P2 lifts P1 ARPU 2–3x. The real risk is underpricing the onboarding case fee for complex Mainland files, which carry real human review cost (45–110% compliance cost inflation for Mainland clients per the research). Keep the complex-case tier honest.
- **Undercut vector:** Wecan + custodian-led KYC utilities could standardise firm-to-bank KYC exchange and shrink the "same pack, different format" pain. Integrate with them rather than compete on that lane.

---

### P3 — MANAGE (A+C): "Run a real DPM book without hiring a middle office"

**1. Target segment.** The firm the whole market is becoming: DPM-led EAMs. Archetype B/C boutiques (4–10 people, US$500M–2.5B) and lower mid-tier firms launching or scaling discretionary mandates. DPM adoption: 40% of boutiques, 65% of mid-tier, growing 22%/yr; 87% of new HK licences target Type 9. **~200–260 firms** in HK/SG are running or standing up DPM without institutional tooling.

**2. Jobs to be done.**
- "I run 8 model portfolios in Excel and rebalance by logging into five bank portals one by one." (no cross-custodian OMS; the research: RMs "log in and out of multiple portals to execute a single strategy")
- "My 1:45 Standard-DPM ratio is impossible without auto-rebalancing — the benchmark says technology is 'critical' at this tier."
- "I can't prove best execution or produce the OCF/TCR breakdown for my DPM fee." (110 bps fee needs an audit trail)
- "Drift and suitability breaches surface at month-end, not at trade time — one breach in a discretionary book is a licence problem."
- "I want to launch a VCC/OFC house fund but my ops can't support institutional reporting."

**3. Pricing logic.**
- **Metric: bps on AUM under management-in-system, with a floor — or per RM for advisory-heavy firms.** 1.5–3.0 bps, floor US$60k/yr; typical US$90–150k at $500M–1B. Per-RM alternative: US$12–18k/RM/yr. Benchmarks: mid-tier PMS spend is $50–100k/yr; the fully-loaded tech cost per RM is $25–55k across all tools; firms are told to spend 4–6 bps of AUM on tech in total — pricing A+C at ≤3 bps leaves room for the rest of their stack and still anchors us as the majority of their spend.
- **AUM-based pricing is correct here (and only here):** Module C's value scales with the discretionary book, and it aligns us with the client's revenue model (they earn 110 bps + 15% performance on the same base).
- **Entry psychology:** "Your DPM fee is 110 bps; this costs 2. If it lets one RM run the benchmark 1:45 instead of 1:25, it pays for itself twelve times." Offer a model-portfolio migration service (we rebuild their Excel models in-system) — the switching cost, not the price, is what stalls these deals.

**4. Land-and-expand.** Primary expand from P1 (trigger: DPM launch, Type 9 activation, $400–500M AUM, or a rebalancing/suitability incident) — but also a **credible direct-land co-lead** for the 87% of new HK licensees who are DPM-first from day one and have no incumbent to displace. Onward: SP module (P4 content) as an add-on when the DPM book uses options overlays/SP (15–20% alt-alpha buckets are now standard in UHNW mandates); full stack when headcount crosses ~10.

**5. Competitive angle.** Displaces Addepar (now localised for HK/SG), Privé's PMS/OMS modules, Croesus, and spreadsheet DPM. **One-liner vs Addepar:** *"Addepar shows you the portfolio; we trade it — cross-custodian rebalancing and order staging across your five banks, with the reconciliation spine built in."* **Vs Privé (closest structural competitor — also modular, also Asian-UX):** we win on the reconciliation/ops layer under the PMS (Privé assumes clean data in) and on regulatory artifacts (TCR/OCF, lineage); Privé wins on client-portal polish and issuer-side SP connectivity — which is exactly why P4 matters.

**6. Risks.**
- **This is the most contested tier** — Privé, Addepar, InvestCloud and Croesus all sell here, and SS&C reaches down with Black Diamond. Differentiation must stay "ops-out" (data spine up) not "portal-in," or we're a feature war with better-funded players.
- **bps pricing creates churn risk in drawdowns** (AUM falls, our revenue falls, CFO reopens the contract). Floors + multi-year terms with bps collars mitigate.
- **Cannibalisation of P1:** none structurally (P3 contains A), but sales teams will be tempted to lead every deal with P3's bigger ticket. Discipline: P3 leads only where a live DPM book or Type 9 application exists; otherwise land P1.

---

### P4 — SP DESK (A+D): "The structured products back office that issuer platforms won't build you"

**1. Target segment.** SP-heavy advisory shops — heavily HK-weighted (HK: 92% alts access, deep SP culture, chat/voice execution still standard at **80% of Asian EAM desks** for FX/SP). Typically 3–10 RMs, advisory-led (not DPM), high SP turnover, often serving Mainland clients who love autocallables/FCNs. **~80–120 firms**, perhaps 70% in HK. Secondary: any P3 client whose DPM mandates carry options overlays (bought as the D add-on module rather than this package).

**2. Jobs to be done.**
- "Every SP trade is a WhatsApp/Bloomberg chat with three issuers; the confirm arrives as a PDF and someone re-types it." (the "Manual PDF Chase" is called out by name in the research)
- "I track barriers, autocall dates and fixings for 200 live notes in a spreadsheet — if I miss a knock-in event and the client finds out first, I lose the client."
- "I can't show a client their *aggregate* barrier risk across notes held at four custodians."
- "MMV disclosure means I now have to justify SP pricing — I need multi-issuer quotes on file to prove fair value."
- "Post-trade, nobody re-prices the book; scenario analysis happens never."

**3. Pricing logic.**
- **Metric: P1 base + SP module platform fee (US$2–3k/mo) + volume: per-RFQ ticket (US$15–40 by notional band) or 0.5–1 bp on SP notional traded, whichever the firm prefers.** Risk-analytics seats US$400–600/user/mo. Typical firm: US$60–100k/yr plus volume.
- **Why volume pricing works here and nowhere else:** SP flow is transactional revenue for the firm (spread/fee per trade), so per-ticket cost maps directly to per-ticket income — no other module has that alignment. Cap the volume component annually so heavy desks can budget.
- **Entry psychology:** lead with **lifecycle tracking, not RFQ** — "never miss a fixing or a knock-in again" is a loss-aversion sale that closes fast (a missed capital call/lifecycle event is a top-3 operational risk per the research, and one 15% penalty case moved US$150M out the door). RFQ workflow comes second because issuer platforms already offer free RFQ — free because the issuer pays.

**4. Land-and-expand.** Dual role: an *expand* from P1/P3 in most accounts, and a **niche direct wedge in HK** where SP pain outranks reporting pain. Trigger events: an MMV disclosure request, a missed barrier event, or SFC thematic inspection of SP suitability. Onward path: SP-heavy advisory shops that convert to DPM (the whole market's direction) add Module C → become full-stack accounts.

**5. Competitive angle.** The one genuinely under-served space in the landscape. Issuer-sponsored multi-issuer platforms (Leonteq, Privé's SP arm, JB's Market Toolbox) solve *pre-trade* (price discovery/RFQ) because issuers fund it; nobody owns *post-trade lifecycle + cross-custodian aggregate risk* for the EAM. **One-liner vs Leonteq/Privé RFQ:** *"They work for the issuer and stop at trade date; we work for you and start there — lifecycle, barriers, scenario risk and MMV evidence across every note, every custodian."* Buy-side alignment is the moat: an issuer-funded platform structurally cannot pitch "we'll show your client how fairly priced this note is."

**6. Risks.**
- **Smallest TAM of the five** — this is a differentiator/wedge, not the revenue base. Size the build accordingly (lifecycle + risk first; RFQ connectivity via partnership with an existing multi-issuer network rather than building issuer pipes ourselves).
- **Issuer platforms could bolt on lifecycle tracking.** They're conflicted (lifecycle transparency reveals issuer margin) and their economics don't reward it, but Privé is agile — speed matters.
- **Pricing/valuation liability:** independent MMV/scenario numbers carry model risk; license pricing data (e.g., established valuation vendors) rather than warranting our own marks.

---

### P5 — FULL STACK (A+B+C+D): "The wealth OS for firms that intend to be consolidators, not consolidated"

**1. Target segment.** Two distinct buyers: **(a) Direct:** Transitioning MFOs (7–10 people, US$1–2.5B, "aggressively investing in tech to cross the Operational Ceiling") and mid-tier MFOs (11–50 people, US$500M–2B) outsourcing their middle office — **~80–110 firms**. **(b) Channel:** Segment-3 platforms (~25–40 across HK/SG) white-labelling the stack for their hosted sub-RMs — the "Own the Glue" strategy means they *want* to buy commodity infrastructure and build only the intelligence layer on top.

**2. Jobs to be done.**
- "I'm buying five systems from five vendors and paying an integration tax; 68% of firms run 3+ disparate systems and I'm one of them."
- "I host sub-RMs under my licence and need to give each a portal, an OMS and compliance oversight without adding ops heads." (platform buyer)
- "My alts allocation is 50%+ and capital calls/illiquid reporting are handled by hand — illiquid processing is now *the* operational differentiator in my segment."
- "I want Avaloq-grade capability without the 6–12 month implementation and capital outlay."
- "My Mundane Ratio is above 0.45 and I know what the research calls firms like that." (operationally toxic; acquired or shuttered within 24 months)

**3. Pricing logic.**
- **Direct: 3–5 bps on AUM, floor US$180k/yr; typical US$200–400k.** Benchmarks: firms are guided to 4–6 bps total tech spend; a $1.5B mid-tier at 85 bps grosses ~$12.75M and budgets 15–20% of revenue (~$1.9–2.5M) for its whole stack — a $300–500k core platform is comfortably inside that envelope and half the cost of the Summit-case $1.2M orchestration build.
- **Platform channel: per-sub-RM, US$800–1,200/month.** Benchmark: platforms' tech/SaaS take-rate component is 12–20 bps and rising — a sub-RM with $150M pays the platform $180–300k/yr of which tech is $30k+; our per-seat price lets the platform keep margin on its own take-rate.
- **Entry psychology:** at this ticket, procurement is rational, not psychological — sell TCO vs Avaloq (implementation months vs. 6–12, no capex) and vs. self-assembly (integration tax + vendor management). The emotional hook is the consolidation war: "the firms acquiring boutiques are the ones whose ops scale — Summit onboards in 12 days and acquires 2–3 boutiques a year."

**4. Land-and-expand.** Rarely landed cold — it's the destination for P2/P3 accounts crossing ~7–10 headcount, and the *starting* point for platform-channel deals (which then pull their hosted boutiques onto our stack — a B2B2B flywheel that converts our biggest competitive threat into distribution). Trigger events: an acquisition (acquirer needs to absorb a book fast), a CMG-N06 audit at scale, or an OCIO arrangement requiring institutional reporting.

**5. Competitive angle.** Displaces additiv (WaaS incumbent with Segment-3 traction), InvestCloud (RM-workbench-led, higher cost-to-serve), and Avaloq EAM-on-Cloud from below. **One-liner vs additiv:** *"additiv gives platforms a bank-in-a-box; we give them a reconciled multi-custodian book plus an SP desk — the two things Asian sub-RMs actually run on."* Vs Avaloq: *"90% of the capability, 20% of the implementation."* Note honestly: above ~US$1.5B single-firm AUM with shadow-accounting-first needs, SS&C Geneva wins and we should not chase.

**6. Risks.**
- **Platform channel conflict:** Wrise sells VooTech; Raffles built Quantive with Synpulse. Some platforms are vendors, not buyers. Qualify hard: partner with platforms that *don't* have a SaaS arm (the majority), and expect the two named ones to be competitors.
- **Cannibalisation is real here:** a platform white-label deal at $1k/sub-RM/mo can undercut what the same boutique would pay us directly for P2/P3 (~$4–6k/mo). Accept it deliberately — channel economics (zero CAC, platform does support L1) justify the lower unit price, but firewall pricing so direct prospects can't arbitrage via a platform membership they don't really use.
- **Full-stack breadth vs. depth:** trying to match InvestCloud's workbench AND Canopy's aggregation AND Privé's SP connectivity dilutes the roadmap. The stack's identity must stay "data-spine-out."

---

## 3. Land-and-Expand Map (summary)

```
            [P1 CORE]  ← wedge for ~2/3 of market (Excel-bound, custodian fatigue)
             |      \
  +feed growth       \  onboarding backlog / SFC rectification / 30-day mandate
  (organic ARPU)      ▼
             |      [P2 OPERATE] ←— can be direct wedge in HK (remediation-forced)
             |          |
   DPM launch / Type 9 / $400-500M AUM / rebalancing incident
             ▼          ▼
            [P3 MANAGE] ←— direct co-lead for new Type 9 licensees (87% of new HK licences)
                |             \
   SP volume / missed barrier / MMV request        headcount >7-10 / acquisition / OCIO
                ▼                                   ▼
            [P4 SP DESK]  ————————————→        [P5 FULL STACK]
            (HK niche direct wedge)             (+ platform white-label channel)
```

---

## 4. Cross-Portfolio Risks

**Cannibalisation.** Managed by construction: every package contains A, so upgrades are additive, never lateral. The two genuine cannibalisation seams are (i) platform white-label pricing vs. direct P2/P3 pricing — firewall as above; (ii) the D module sold as a P3 add-on vs. P4 as a package — resolve by making P4 = A + D-full (lifecycle + RFQ + risk) while the P3 add-on is D-lite (lifecycle + alerts only), preserving a reason to upgrade.

**Data-cleaning ops margin.** The single biggest P&L risk in the whole architecture. The research shows why Canopy is valuable (99.9% extraction is *hard*) and why banks' PDF/SFTP feeds persist (70% of banks fragmented, T+1/T+2). Rules: never flat-price a PDF feed; track cost-to-serve per feed monthly; auto-reprice on feed downgrades; treat the AI exception-matching agent as a core product investment, not back-office tooling — it is the gross-margin engine.

**Where competitors undercut.** Canopy from below on P1 price (counter: ops SLA + compliance artifacts); Privé across P3/P4 on modular price and portal polish (counter: reconciliation spine + buy-side SP alignment); platforms on P1–P3 with "tech included in 15–25 bps membership" (counter: independence framing + white-label channel); custodian banks giving away tools (JB Market Toolbox, DBS RAPID) that erode single-bank slices of A and D (counter: our whole premise is *multi*-custodian — bank tools structurally can't cross their own walls).

---

## 5. Recommendation: Lead With Three

**Lead 1 — P1 CORE as the market wedge.** It attacks the #1 documented pain (custodian fatigue), has the shortest sales cycle, the clearest entry-price psychology (<⅓ of an ops hire, regulator-ready pack included), and a built-in organic growth vector (feed count only goes up — clients average 4–5 custodians and rising). Its job is distribution: get the data spine into 100+ firms and let the triggers fire.

**Lead 2 — P3 MANAGE as the revenue engine and direct co-lead.** The market is converting to DPM at 22%/yr and 87% of new HK licences are Type 9 — new licensees are greenfield accounts with no incumbent, budget already framed in bps, and a fee model (110 bps + performance) that makes 2–3 bps for tooling an easy yes. P3 carries the portfolio's ARPU and is where AUM-linked pricing compounds with the market's growth.

**Lead 3 — P4 SP DESK as the differentiation beachhead in HK.** Smallest TAM, but the only package with no direct incumbent: issuer platforms stop at trade date and are structurally conflicted on lifecycle transparency, while 80% of desks still execute SP by chat and track barriers in Excel. It wins the deals where Canopy/Privé/Addepar all look the same, and it is the package that makes the brand mean something specific in Hong Kong.

**Hold back P2 as an attach (except in HK remediation deals) and P5 as a destination + channel play.** B alone doesn't command budget against compliance consultancies, but attaches at high rates once A is in; P5 should be pulled by account growth and by 3–5 platform white-label partnerships rather than pushed cold against additiv/InvestCloud in bake-offs we'd fund but not win.

### Where the research challenged the brief's assumptions

1. **"A only for a 2-person SFO" is the wrong flagship customer.** Solo-Stars are in managed decay (22 bps net margins, 25%/yr consolidation, SPOF churn). Sell P1 to them happily, but build the ICP around the 4–10 person firm — the archetype the research says survives. Chasing the smallest tier optimises for a shrinking cohort.
2. **The wedge must be a service, not software.** The 42% Excel cohort has had software available for years (Canopy exists, is local, and is good) and hasn't bought. What they haven't been offered at accessible prices is reconciliation *as an outcome* with an SLA and a compliance artifact. That's the actual gap.
3. **B is an attach, not a package.** The brief implies A+B as a natural pairing — it is, but only A-first. The onboarding budget line is currently held by human consultants at $10–15k/month; displacing workflow spend works, displacing judgment spend doesn't.
4. **D is two products, not one.** Pre-trade RFQ is a solved, issuer-funded, conflicted space — don't build issuer pipes. Post-trade lifecycle + cross-custodian SP risk is unowned. Package accordingly (D-lite as P3 add-on, D-full in P4), and partner for RFQ connectivity.
5. **Segment 3 platforms are a channel before they are a competitor.** The brief's framing (packages sold firm-by-firm) misses that the fastest route to the boutique long tail may be white-labelling P5 to the platforms absorbing those boutiques — with two named exceptions (Wrise/VooTech, Raffles/Quantive) that are vendors in their own right.
6. **Regulatory deadlines, not pain rankings, set the sales calendar.** CMG-N06 (Aug 2027), the 30-day onboarding mandate, dollar-based TCR, and the SFC rectification look-back are the four clocks. Every package sheet above ties its entry pitch to one of them; the go-to-market should sequence campaigns the same way.

---

*Sources: Asia_EAM research dossier — Modules 00 (synthesis), 01–02 (hubs), 04–06 (segments), 08 (revenue models), 09 (service taxonomy), 11 (product mix), 12 (tech stack), 13 (operational pain), 15 (matrices). Figures marked as estimates where the dossier gave ranges or where HK firm counts required triangulation.*
