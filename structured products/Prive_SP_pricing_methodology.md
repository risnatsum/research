# Pricing Methodology & Ranges — Privé Technologies Structured Products Engine

**Segments:** (1) EAMs / MFOs / family offices (HK–SG core) · (2) Enterprise financial institutions (retail-affluent banks, mid-tier and large private banks)
**Modules:** Tier 1 Factsheet & Risk Analytics / Data Feed → Tier 2 Lifecycle + Next-Best-Offer → Tier 3 SP Builder
**Commercial frame (unchanged from current Privé model):** one-time implementation fee + recurring annual SaaS subscription; AUM-banded and per-seat constructs used inside the subscription, never as a new contract type. Nothing below requires re-papering existing clients.
**Date:** August 2026. All figures USD. Every assumption is flagged **[A#]** and listed in the Assumptions Register (§10) so ranges can be recalibrated with real Privé cost and win/loss data.

---

## TL;DR

- Price against **revenue enablement, not efficiency**. SPs are ~20%+ of revenue at Asian wealth platforms; Tier 2's value maps directly to reinvestment capture at call/maturity events. The value model below implies a defensible software price of **10–20% of incremental margin created** for EAMs and mid-tier banks, drifting down to **8–15% for large banks** (bigger buyers pay a smaller share of value — standard enterprise dynamics).
- **EAM package:** a transparent three-rung ladder — **Monitor / Manage / Build** — banded by SP book size, **$6k–$48k/yr**, zero-to-trivial implementation fee, founder-signable in weeks. Target mid-band ACVs: Monitor $10k, Manage $20k, Build $30k.
- **Enterprise package:** modular implementation fee ($60k–$400k mid-tier; $500k–$1m large) + annual per-module licences with volume tiers. Mid-tier private bank full-stack target ACV **≈ $575k/yr** (floor $265k, stretch $1.0m); large bank target **≈ $1.35m/yr** (floor ~$870k, stretch $2.15m). An optional bps overlay on Tier 2 trades fixed fee for upside, always capped.
- **Land** with Tier 1 priced under procurement radar ($30–50k enterprise pilot; $6–15k EAM), **expand** on contractually pre-agreed triggers metered off the nightly position file Privé already ingests — the metering is native to the product, which is the quiet structural advantage of AUM/position banding.
- The architecture that survives all four stress tests is: **thin, cheap Tier 1 + banded-fixed Tier 2 with capped overlay option + seat-based Tier 3**. Pure bps pricing dies in procurement; pure per-seat dies under EAM consolidation; heavy Tier 1 pricing dies the day FinIQ bundles factsheets for free.

---

## 1. The Value-Capture Model (foundation for everything else)

### 1.1 Formula

**Incremental margin created p.a. = SP book size × annual call/maturity event rate × capture-rate uplift × sales margin on SP flow**

Then: **price ceiling = value-capture share × incremental margin**, where the share a B2B vendor can sustainably hold is 10–20% of directly attributable value **[A1]**.

### 1.2 Assumptions

| # | Assumption | Base | Conservative | Upside | Source / rationale |
|---|---|---|---|---|---|
| A2 | Annual call/maturity event rate | **73%** | 65% | 80% | iCapital 2024: ~$39bn called = 73% of callable population; avg duration ~12 months, so the whole book effectively turns over ≈ annually |
| A3 | Capture-rate uplift from systematic lifecycle+NBO (percentage points of event volume recycled in-house rather than leaking) | **+10pp** banks / **+15pp** EAMs | +5pp | +20pp | Banks already run partial processes (baseline capture ~50–60%); most EAMs run spreadsheets (baseline lower, so uplift higher). To be replaced by live pilot telemetry — this is the single most important number to measure in the first paid pilot |
| A4 | Distributor sales margin on SP flow | **100bps** | 80bps | 120bps | Typical Asian private-bank/EAM upfront margin on FCN/ELN/autocall flow (0.5–1.5%, exotics higher) |
| A1 | Sustainable value-capture share for software | **15%** | 10% | 20% | B2B revenue-enablement norm; below 10% you're underpriced, above ~25% procurement arbitrages you against build/do-nothing |

### 1.3 Arithmetic — three reference scenarios

**EAM: $500m AUM, 20% SP allocation → $100m SP book**

- Event volume: $100m × 73% = **$73m/yr** hitting call/maturity
- Incremental captured flow at +15pp: $73m × 15% = **$10.95m**
- Incremental margin at 100bps: **≈ $110k/yr**
- Price ceiling at 10–20%: **$11k–$22k/yr** → anchors the Manage tier at ~$20k for this band
- Conservative case (65% × +5pp × 80bps): $2.6k value-share at 10% — this is why the EAM *floor* must stay near $10k and why the Monitor rung must be justified by compliance/factsheet value, not reinvestment value alone

**Mid-tier private bank: $5bn SP book (range $1–10bn), 50–200 RMs**

- Event volume: $5bn × 73% = **$3.65bn/yr**
- Incremental captured flow at +10pp: **$365m**
- Incremental margin at 100bps: **≈ $3.65m/yr**
- Price ceiling at 10–20%: **$365k–$730k/yr** for Tier 2 alone
- Conservative (73% × +5pp × 80bps): $1.46m value → 10% = **$146k — the Tier 2 walk-away floor**
- Upside (+15pp × 120bps): $6.57m value → supports the $600k stretch

**Large bank: $20bn SP book, 500+ RMs**

- Event volume: **$14.6bn/yr**; +10pp capture = $1.46bn; ×100bps = **$14.6m/yr incremental margin**
- Even at a modest 8–10% capture share: **$1.2m–$1.5m/yr** — the target Tier 2 + overlay zone
- Conservative case still yields $5.84m value/yr, comfortably clearing a ~$850k Tier 2 target (14.6%)

### 1.4 Why this model survives a negotiation

It is built only from numbers the bank itself can verify: its own book size (they report it), the call rate (iCapital's published 73%/$39bn, cross-checked by FVC's "clustering" analysis), its own sales margin (their P&L), and an uplift assumption that the paid pilot converts from assertion into **measured telemetry** (events caught vs. missed, assets rolled vs. leaked). The pilot is therefore not just a sales device — it manufactures the evidence that defends the price at renewal.

---

## 2. Value Metric Selection

Evaluated candidates per tier: per-RM/user seat · per position/instrument monitored · bps on SP AUM covered · flat data-feed licence · per priced/built structure · hybrids.

### 2.1 Tier 1 — Factsheets / risk analytics / data feed

| Metric | Verdict | Reasoning |
|---|---|---|
| Per position monitored (raw metering) | ✗ | Punishes exactly the behaviour you want (put the whole book in); creates monthly bill anxiety |
| **Banded by SP book / position count (flat within band)** | **✓ EAM primary** | Scales with value, no metering anxiety, bands move only at annual true-up; founder can predict the bill |
| **Flat feed licence per legal entity per use case** | **✓ Enterprise primary** | Matches how banks already buy data (Bloomberg/Refinitiv conventions); lands in the market-data budget, which has established approval paths and renewals — friendlier than the IT project budget |
| Per seat | Fallback (both) | Works, but factsheet value is book-level, not seat-level; seat-counting invites procurement to shrink seats |
| bps on AUM | ✗ | Overkill for read-only; makes the cheap land look expensive as the book grows |

*Behaviour to encourage:* full-book coverage from day one (the nightly file should include everything — this maximises the data asset that later powers Tier 2 NBO). *Expansion friction:* bands only move at true-up; use-case-based enterprise licensing means expansion = new use case (distribution, client reporting), a natural, budgetable event. *Procurement survivability:* flat licences are boring — that's the point; nothing to attack.

### 2.2 Tier 2 — Lifecycle + NBO (the revenue engine)

| Metric | Verdict | Reasoning |
|---|---|---|
| **Banded on SP book AUM (flat fee within band)** | **✓ EAM primary** | Value scales with the book (§1); a 12-person shop's seat count is meaningless; banding is self-metering off the nightly file |
| **RM-seat volume tiers × book-AUM band (fixed annual licence)** | **✓ Enterprise primary** | Two-axis tiers let you price the 60-RM/$8bn boutique differently from the 180-RM/$2bn retail-affluent bank; fixed fee = budgetable, procurement-friendly |
| **Capped bps overlay on covered book (optional, traded for lower fixed)** | **✓ Enterprise fallback / kicker** | Aligns to reinvestment capture; offer it as *the bank's choice* — never lead with it (uncapped bps is the first thing procurement attacks; measurement of "capture" invites disputes). Always capped at ~1.6× the target fixed fee |
| Per seat alone | ✗ primary | The value is book-level; a bank could cover $10bn with 20 licensed seats and you'd have given away the engine |
| Per event/alert | ✗ | Charges for exactly the moment of value delivery → users suppress alerts. Never meter the "aha" |

*Behaviour to encourage:* every position monitored, every RM acting on events. *Expansion:* book growth moves bands automatically (capped +25%/yr, §5). *Procurement:* fixed-with-optional-overlay lets you concede the *structure* they attack (bps) without conceding *money*.

### 2.3 Tier 3 — SP Builder

| Metric | Verdict | Reasoning |
|---|---|---|
| **Per creator seat (RM/advisor licence), tiered** | **✓ Primary both segments** | Origination tooling is genuinely per-user; seats are how banks buy front-office software; encourages breadth of RM enablement |
| **Desk / enterprise-unlimited licence** | **✓ Enterprise fallback** | For large banks that hate seat true-ups; priced ≈ the 60–70th percentile of expected seat count |
| Per priced/built structure | ✗ | Taxes exploration. You *want* RMs solving constantly — every solve is a proposal, every proposal is potential flow (which Tier 2 then monitors: the flywheel). Never price against the flywheel |
| bps on originated notional | ✗ as licence | Turns Privé into a broker in procurement's eyes; triggers different vendor classification and (in some jurisdictions) regulatory questions. Keep origination economics out of the software contract |

---

## 3. EAM Package — "Monitor / Manage / Build"

**Design constraints:** 72–77% of the ~295 HK/SG EAMs manage <$1bn **[A5]**; buyer = founder/CIO; no procurement department; sales cycle measured in weeks; must be affordable for a 10–20 person shop; must cost a small, easily-justified fraction of SP-attributable revenue (EAM revenue ≈ 0.5–1% of AUM, SPs ≈ 20%+ of it **[A6]**).

**Banding basis:** SP book size (self-declared at signing, trued-up annually from the nightly position file). Bands: **A** < $50m · **B** $50–150m · **C** $150–400m · **D** > $400m (enterprise-lite, custom).

### 3.1 The ladder — EAM pricing one-pager (annual subscription, USD)

| Rung | Includes | Band A | Band B | Band C | Floor / Target / Stretch |
|---|---|---|---|---|---|
| **Monitor** (Tier 1) | Factsheets, performance-proxy series, exposure/delta breakdowns, nightly-file ingestion, PDF/API export | **$6k** | **$10k** | **$15k** | $5k / $10k / $18k |
| **Manage** (Tier 2, incl. Monitor) | + KI/KO/autocall probabilities, event calendar & alerts, book-level NBO with suitability guardrails | **$12k** | **$20k** | **$32k** | $10k / $20k / $45k |
| **Build** (Tier 3, incl. all) | + pricer & target-outcome solver, 2 creator seats (extra seat $2.5k/yr) | **$18k** | **$30k** | **$48k** | $15k / $30k / $60k |

**Implementation fee:** $0 for Monitor (self-serve: upload nightly position file, guided mapping). One-off **$2,500** for Manage/Build data-mapping — waived on annual prepay. This preserves the "implementation fee + subscription" paper while being commercially near-zero.

### 3.2 Justification against EAM economics (Band B reference: $500m AUM, $100m SP book)

- EAM revenue: $500m × 0.6% = **$3.0m/yr**; SP-attributable ≈ 20% = **$600k/yr**
- Manage at $20k = **3.3% of SP revenue** and **0.67% of total revenue** — inside the "no-brainer" zone (tools costing <5% of the revenue line they protect rarely get CFO'd)
- Value model (§1.3): $110k/yr incremental margin → $20k = **18% of value created**, at the top of the 10–20% band, defensible because Manage also carries the compliance/suitability value (SFC-HKMA PDD pressure) that the reinvestment model doesn't count
- Monitor at $10k = **1bp of the SP book** — cheaper than one month of a junior analyst, for the factsheet/PDD capability regulators are actively examining
- Band A sanity: $200m AUM shop (0.7% fee → $1.4m revenue, ~$280k SP revenue): Manage $12k = 4.3% of SP revenue; Monitor $6k = 2.1%. Still founder-signable

### 3.3 EAM behavioural design

- **Transparent public pricing** for Monitor and Manage (list on the website). In an opaque market this is a weapon: it collapses the sales cycle, signals confidence, and forces competitors' "contact sales" models to look like a trap. Keep Build "from $18k" semi-transparent.
- Monthly billing available at +15% (annual equivalent) — SMB muscle memory; most will take annual.
- Self-serve trial: 30 days on the EAM's real book (file upload), no card. The moment their own autocall shows a 78% call probability with a date, the product sells itself.

---

## 4. Enterprise Package — modular, tiered, overlay-optional

**Design constraints:** procurement + vendor-risk + budget cycles (6–18 months); expects implementation fees, SLAs, volume tiers **[A7]**; multi-entity structures; three data use cases (risk, distribution, client reporting).

### 4.1 Architecture — enterprise pricing one-pager

**One-time implementation** (scoped, quoted per module):

| Scope | Mid-tier PB (50–200 RMs, $1–10bn book) | Large bank (500+ RMs, $10bn+ book) |
|---|---|---|
| Tier 1 only | $60k–$100k | $150k–$300k |
| + Tier 2 | +$100k–$200k | +$250k–$450k |
| + Tier 3 | +$60k–$100k | +$100k–$250k |
| **Full stack** | **$250k–$400k (target $300k)** | **$500k–$1m** |

(Within the $50k–$1m+ large-institution benchmark. Implementation is priced to cover cost + margin, not as a profit centre — the annuity is the business. Where a consulting partner leads, Privé's implementation scope shrinks to product configuration; see §6.)

**Annual licences per module:**

| Module | Basis | Mid-tier floor / target / stretch | Large-bank floor / target / stretch |
|---|---|---|---|
| **Tier 1 platform or data feed** | Per legal entity, per use case (risk = base; distribution +50%; client reporting +50%; all-use-case = 2×; 2nd entity 50%, group cap 3×) | $40k / **$75k** / $150k | $120k / **$200k** / $300k |
| **Tier 2 lifecycle + NBO** | Fixed annual, two-axis volume tiers (RM seats × book band) | $150k / **$350k** / $600k | $500k / **$850k** / $1.4m |
| **Tier 3 builder** | Per creator seat $3k/yr, min 25 seats; or desk/enterprise-unlimited | $75k / **$150k** (50 seats) / $250k | $250k / **$300k** (150-seat bundle) / $450k |
| **Full-stack ACV** | | **$265k / $575k / $1.0m** | **$870k / $1.35m / $2.15m** |

**Tier 2 volume-tier grid (mid-tier illustration):** ≤75 RMs *or* book ≤$2.5bn → $150–250k; 76–200 RMs *or* $2.5–10bn → $250–450k. Take the higher of the two axes; the grid is an annex to the contract so band moves are mechanical, not renegotiations.

### 4.2 The optional Tier 2 bps overlay (success component)

Offered only as a *trade*: **fixed fee reduced 30% + 0.75bp p.a. on covered SP book above $2bn, total capped at 1.6× the target fixed fee.**

Worked example, $5bn book (target fixed $350k):
- Fixed: $350k × 70% = **$245k**
- Overlay: 0.75bp × ($5bn − $2bn) = **$225k**
- Total = **$470k**, under the cap (1.6 × $350k = $560k) ✓
- Bank's read: it pays more only if the covered book (a proxy for adoption and captured reinvestment) is large — and its cost is capped. Privé's read: upside participation without measurement disputes, because the metric is *covered book* (objective, from the nightly file), **not** "captured reinvestment" (contestable attribution).

Never metricise the overlay on measured capture-rate itself in the contract — attribution fights at renewal destroy more value than the overlay earns. Use measured capture in the *QBR narrative*, not the invoice.

### 4.3 The maths connecting target price to value (mid-tier, $5bn book)

- Value created (base case, §1.3): **$3.65m/yr**
- Tier 2 target $350k = **9.6% of value**; full-stack $575k = **15.8%** — inside the 10–20% band with the whole platform included
- Conservative value $1.46m: floor stack $265k = 18.1% — the floor still clears the value test, which is precisely what makes it a credible walk-away
- Large bank: full-stack target $1.35m vs $14.6m base value = **9.2%** (large buyers pay a lower share — expected), floor $870k vs conservative $5.84m = 14.9% ✓

### 4.4 Enterprise data-feed-only licensing (standalone Tier 1)

For institutions that only want the feed (risk or reporting consumption, no UI): per legal entity, per use case, delivered as nightly API/SFTP. Mid-tier: **$50k–$120k/yr**; large/group: **$120k–$250k/yr**. Contract carries the full platform price schedule as an annex and a 100%-credit conversion clause (§5.4) — the feed *is* the land.
---

## 5. Land-and-Expand Mechanics

### 5.1 Landing under the procurement radar

Typical approval thresholds **[A8]**: department-head discretionary spend commonly sits at **$25k–$50k** in smaller institutions and **$50k–$100k** before a formal RFP/tender is mandatory at mid-tier banks; vendor-risk review is triggered by *data connectivity*, not price. Therefore:

- **Enterprise land = Tier 1 pilot at $30k–$50k for 90 days** — under most RFP thresholds, signable by the head of products/IC or COO of the wealth unit.
- Minimise the vendor-risk surface deliberately: Tier 1 needs only a **nightly position file, no client PII** (positions can be pseudonymised) — put this sentence in the proposal; it can cut months off onboarding.
- **EAM land = Monitor at $6k–$15k** — founder decision, same-week signature.

### 5.2 Paid pilot conversion

Pilot fee **100% creditable against the year-1 licence if converted within 60 days of pilot end** (thereafter credit decays 25%/month — a clean urgency device that costs nothing if they convert on time). Pilot success criteria written into the order form: factsheet coverage %, events flagged, and (where the bank permits) measured event-response telemetry — this becomes the §1 uplift evidence.

### 5.3 Contractual expansion triggers (pre-agreed, mechanical)

1. **Book-band true-up, annually**, metered from the nightly position file the product already ingests — no audits, no surveys. Any single-year increase capped at **+25%** so growth never feels punitive.
2. **Seat true-up, quarterly** (Tier 3 creator seats), with a 10% grace buffer before billing moves.
3. **Pre-agreed upgrade schedule annexed to the Tier 1 contract:** Tier 2 at ~4× the Tier 1 fee and Tier 3 seat rates, price-locked for 18 months. The bank's procurement approves the *whole ladder once*, at land — expansion then needs only a budget owner's signature, not a new procurement cycle. This is the single highest-leverage clause in the model.
4. **Use-case expansion** (Tier 1 enterprise): adding distribution or client-reporting use is a pre-priced +50% amendment.

### 5.4 Feed-only → platform conversion

Feed contract carries: (i) the platform price annex, (ii) **100% of the current-year feed fee credited** against the platform licence on conversion, (iii) no new master agreement needed (platform rides the same MSA). The feed is priced so that at ~2 use cases the platform is obviously better value — the economics do the selling.

### 5.5 Expansion P&L shape (why the land can be cheap)

EAM cohort logic: land 30 EAMs/yr on Monitor (~$10k avg) = $300k new ARR; historical wealthtech attach patterns suggest 40–60% upgrade to Manage within 18 months **[A9]** → cohort matures toward ~$500–600k ARR; CAC for a weeks-long founder sale is a fraction of enterprise CAC. Enterprise logic: one mid-tier land at $75k Tier 1 converts to $575k full-stack — a 7.7× expansion multiple; even a 1-in-3 conversion rate makes the cheap land strongly NPV-positive.

---

## 6. Consulting-Channel Overlay (Synpulse / Deloitte)

**Recommended model: referral / co-sell with Privé holding the paper.** Resale only where the client mandates a single SI contract.

| Parameter | Range | Recommendation |
|---|---|---|
| Referral fee (partner sources the deal) | 10–20% of year-1 licence typical in fintech–consultancy alliances **[A10]** | **10–15% of year-1 licence**, optional 5% year-2 tail for active co-delivery |
| Resale margin (partner holds paper) | 20–30% | Use only when forced; cap at 25% and contractually peg the end-customer price to Privé's list/floor schedule |
| Who holds the paper | — | **Privé.** Protects pricing integrity, renewal relationship, and usage data (which powers the value narrative). A partner-held paper turns your renewal into their negotiation |
| Services : licence ratio | Partner needs 1.5–3× licence value in services | On a $575k-ACV mid-tier deal: Privé keeps ~$100–150k product-configuration implementation; partner takes systems integration, data migration, suitability-process redesign, change management — comfortably **$800k–$1.7m** (1.5–3× ACV). Privé deliberately *cedes* SI scope: it's low-margin for Privé and it's the partner's entire motivation |
| Channel-conflict rules | — | (1) **EAM segment is direct-only** — deal sizes are below partner economics anyway; carve it out explicitly so partners never learn EAM pricing. (2) Deal registration with 6-month protection. (3) Partner discounts come out of the standard discount schedule (§8), never below floor — a partner can never sell cheaper than Privé direct. (4) Enterprise deals ≥ $250k ACV default to partner-attach where a transformation programme (Avaloq/Temenos/FNZ) exists |

The Synpulse fit is unusually good: they authored the EAM sizing report, run OpenWealth, and monetise exactly the integration scope Privé wants to cede. Position Privé as the SP-analytics/NBO module consultancies attach to core-banking programmes — the partner's programme risk goes down (proven module), their services revenue goes up, and Privé's CAC on bank deals collapses.

---

## 7. Stress Tests

### (a) Procurement negotiation

*What gets attacked first, in order:* (1) any uncapped bps element — which is why the overlay is optional, capped, and framed as the bank's choice; (2) the Tier 2 fixed fee ("benchmark it" — there is no public benchmark, so bring the §1 value model and the build-vs-buy TCO instead and *define* the benchmark yourself); (3) seat counts on Tier 3 (concede seats before price — offer the desk-unlimited variant); (4) implementation fee (concede up to 50% against a 3-year term — implementation margin is not the business).
*Walk-away floors:* Tier 2 mid-tier **$150k**; full-stack mid-tier **$265k**; large-bank full-stack **$870k**; EAM Manage **$10k**. Each floor still clears 10% of *conservative* modelled value (§4.3), which is what makes them genuine walk-aways rather than postures.
*Concession currency (price holds, terms flex):* 3-year term, case-study & reference rights, anonymised benchmarking data rights, Tier 2/3 pre-commitment, payment timing.

### (b) Build-vs-buy TCO (the bank's spreadsheet)

Annualised internal build: 2 quants + 2 engineers, loaded HK/SG cost ~$275k avg → **$1.1m/yr team**; market data for pricing/probability engines (vol surfaces, correlations, corporate actions) **$150k–$300k/yr**; model-risk validation of KI/KO probability models **$150k–$300k one-off** plus annual revalidation; realistic time-to-first-usable-release **18–24 months** **[A11]**. Two-year build cost ≈ **$3–4m** *before* the opportunity cost of 18–24 months of unimproved capture (§1.3: $1.5–3.7m/yr foregone). Two-year buy cost (mid-tier full stack): $300k implementation + 2 × $575k ≈ **$1.45m**, live in a quarter. Buy wins by >2.5× on cash and by ~2 years on time — put this table in every enterprise proposal.

### (c) "FinIQ adds this as a free module"

Most-exposed layer: Tier 1 (factsheets/lifecycle analytics are the plausibly-bundled commodity — FinIQ already ships Docgen and Life Cycle Analytics). The architecture already prices for this: Tier 1 is thin and cheap (≈13% of mid-tier stack ACV), so the revenue at risk is small. Response if it happens: **bundle Tier 1 free inside Tier 2 rather than cutting Tier 2's price** — protect the revenue engine's price point, sacrifice the land's. Defences that survive bundling: issuer-neutrality (FinIQ's rails serve execution; a bank wants its risk lens independent of any venue), portability across execution rails (Privé reads *all* positions, including those not traded on FinIQ), and the NBO/solver layer FinIQ has publicly ceded ("workflow optimisation… rather than investment recommendations"). Tier 2/3 margin concentration means a free FinIQ Tier-1 clone dents the wedge, not the P&L.

### (d) EAM consolidation (average client AUM doubles)

Bands are the hedge. If the 295 firms consolidate toward ~150 firms at ~2× book, per-firm banding moves each survivor up one band roughly automatically: a Band A Manage client ($12k) becomes Band B ($20k, +67%); B→C is +60%. Revenue per surviving client rises faster than client count falls in most consolidation paths; a pure per-seat model would have *lost* revenue (fewer firms ≠ more seats). Band D (>$400m SP book) bridges the largest survivors into enterprise-lite paper without re-papering. **Surviving architecture: banded-AUM primary, seats secondary** — which is what §2 recommends. The one change worth making pre-emptively: define Band D pricing now (e.g. $60–90k Manage-equivalent) so a consolidator's procurement hire meets a schedule, not a negotiation.

**Overall verdict:** the recommended architecture (cheap flat Tier 1 · banded-fixed Tier 2 with capped optional overlay · seat/desk Tier 3) is the only combination that survives all four tests. Pure bps fails (a); pure seats fails (d); expensive Tier 1 fails (c); and everything remains inside the existing implementation-fee + subscription paper.

---

## 8. Discounting Policy

| Deal size (ACV) | Max discount | Approver |
|---|---|---|
| < $50k (all EAM) | 10% | Sales rep |
| $50k–$250k | 15% | Head of Sales |
| $250k–$1m | 25% | CRO |
| > $1m or below-floor request | Case-by-case, never below floor | CEO / pricing committee |

Standing rules: multi-year prepay earns a further 5% (2yr) / 10% (3yr); discounts are always *bought* with term, references, data rights or tier pre-commitment — never given; floors (§7a) are absolute; partner-channel discounts draw from this same schedule (§6); list prices reviewed annually against win/loss, floors only against the recalibrated value model.

---

## 9. Top Pricing Objections & Responses

**EAM segment**

1. *"We only have 30 positions — this is priced for bigger shops."* → Band A Monitor is $6k: ~1–2bp of even a small SP book and <2% of its revenue; and 73% of those 30 positions will hit a call/maturity decision this year — the fee is one caught roll.
2. *"Our custodian/issuer already sends us factsheets."* → Issuer documents describe the product at issuance; they don't show *your book's* live KI/KO distances, delta exposures, or a performance-proxy series — and they are the marketing collateral of the counterparty, which is exactly what SFC/HKMA suitability reviews flag. Independence is the product.
3. *"We track autocalls in Excel and it works."* → It works until the clustering week: when rates or spot move, calls knock out in bunches (FVC's documented clustering effect) and the spreadsheet misses the reinvestment window. One missed $2m roll at 100bps = $20k — the whole subscription. The pilot will show your actual missed-event rate; if it's zero, don't buy.

**Enterprise segment**

1. *"Make it pure bps / pure success fee — pay on results."* → We offer a capped overlay as part of the structure, but a pure success fee requires contractually attributing every reinvestment to the tool — that attribution fight costs both sides more than the fee. Fixed-plus-capped-overlay gives you the same alignment without the annual dispute; and our fixed target is already only ~10% of conservatively modelled value.
2. *"FinIQ/our execution platform includes analytics — why pay separately?"* → Execution-venue analytics see what trades on that venue and optimise for flow through it. This engine reads your entire book across every issuer and rail, is issuer-neutral by construction, and does the one thing your execution vendor has publicly said it won't: compliant, book-level next-best-offer. Different layer, different job — it sits *on top of* your rails, not instead of them.
3. *"Price Tier 2 per seat and we'll manage the seat count."* → Tier 2's value is book-level: the engine monitors $5bn whether 20 or 200 RMs log in, and restricting seats only suppresses the capture rate you're buying it for. Seats price Tier 3, where value genuinely is per-user; Tier 2 is priced on the book, with the volume-tier grid giving you the predictability seat-counting was meant to achieve.

---

## 10. Assumptions Register (recalibration levers)

| # | Assumption | Value used | Recalibrate with |
|---|---|---|---|
| A1 | Software's sustainable share of value created | 10–20% (8–15% large banks) | Win/loss interviews; discount depth actually needed to close |
| A2 | Annual call/maturity event rate | 73% base (65–80%) | Client-book telemetry; iCapital/SRP annual updates |
| A3 | Capture-rate uplift | +10pp banks, +15pp EAMs (+5 to +20) | **Pilot telemetry — highest priority measurement** |
| A4 | Sales margin on SP flow | 100bps (80–120) | Client-disclosed margins per product type |
| A5 | EAM population/size mix | 295 firms, 72–77% <$1bn | Synpulse report refresh |
| A6 | EAM fee yield; SP share of revenue | 0.5–1% of AUM; ~20% SP | Client discovery |
| A7 | Enterprise sales cycle & buying norms | 6–18 months; impl. fee + SLA + tiers expected | Pipeline data |
| A8 | Procurement/RFP thresholds | $25–50k SMB-institutional; $50–100k mid-tier RFP trigger | First 10 enterprise deals — log actual approval paths |
| A9 | EAM Monitor→Manage upgrade rate | 40–60% in 18 months | Cohort data after year 1 |
| A10 | Alliance referral/resale norms | 10–20% referral; 20–30% resale | First Synpulse/Deloitte term sheet |
| A11 | Build-vs-buy inputs | $1.1m/yr team; $150–300k data; 18–24mo | HK/SG comp surveys; client CTO conversations |
| A12 | SP allocation within EAM AUM | 15–25% (20% used) | Nightly-file data once clients onboard |

*Not used anywhere: Halo's 1.5% advisory fee (an AUM advisory fee, not software pricing). All structures above are variations of implementation fee + annual subscription — existing Privé clients and paper are unaffected.*
