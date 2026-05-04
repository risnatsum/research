# Strategy: Asia Wealthtech — European Market Entry
**Date:** 2026-05-05
**Perspective:** Asia-focused Wealthtech player (HK SFC / MAS regulated) entering Europe
**Constraint:** Cash-constrained — funding is a live operational requirement

---

## 1. Strategic Recommendation

Enter Europe as a MiFID III compliance automation + reporting layer, targeted exclusively at IFA consolidators in the UK as the beachhead — they are the only segment with sufficient procurement urgency, centralised buying, and tolerance for an unproven foreign vendor. Do not attempt a full-suite launch. Fund the build through three parallel tracks executed simultaneously: paid design-partner pilots (fastest cash), Innovate UK grant application (largest non-dilutive ticket), and one co-development conversation with a named UK consolidator — but treat none of these as guaranteed, and extend runway enough to survive if only one closes.

**Hypothesis confirmed with modification:** The original hypothesis (white-label MiFID III layer, funded via co-development deal) is directionally correct. The modification: the co-development deal is a single point of failure. The funding must be three parallel tracks from Day 1, not a sequential plan.

---

## 2. Market Context

- **SAM:** $115M–$165M/year (3,500–5,000 firms in the $200M–$2B AUM band × 5 seats avg × €550/month). TAM for the broader European advisory market is $1.4B–$2.1B/year. *(Source: market analyst, bottom-up estimate)*
- **SOM (3-year):** $3.5M–$10M — held below 10% of SAM; early-stage, 12–18 month sales cycle, no EU presence. *(Source: market analyst)*
- **White space confirmed:** No named incumbent (Aladdin, Temenos, Landytech, Objectway) has announced MiFID III compliance automation as of May 2026, despite September 2025 and June 2026 go-live dates. The mid-market ($200M–$2B AUM) is structurally deprioritised by the mega-suite vendors. *(Source: competitive analyst)*
- **Biggest structural driver:** IFA M&A deal values surged from £2.1B to £9.3B in 2024. Consolidators are inheriting compliance obligations across acquired books they didn't architect for — creating a pull-market for standardised MiFID III infrastructure. *(Source: market analyst, segment scorer)*
- **Data quality:** Medium. IFA/EAM firm counts in the $200M–$2B AUM band are estimated from proxies — no direct registry count exists for this sub-segment.

---

## 3. Analysis

### 3.1 Market Sizing

| Level | Definition | Estimate |
|---|---|---|
| TAM | All European advisory firms needing compliance + reporting software | $1.4B–$2.1B/year |
| SAM | Firms $200M–$2B AUM: 3,500–5,000 firms × 5 seats × €550/month | $115M–$165M/year |
| SOM | 3-yr capture at 3–6% of SAM | $3.5M–$10M/year |

**Growth drivers:**
1. MiFID III tightening — cost transparency and suitability documentation create mandatory, non-discretionary spend
2. IFA consolidation wave — acquirers need unified reporting across absorbed books; this is a post-M&A procurement event, not a preference-driven purchase
3. Excel displacement — 80% of family offices on spreadsheets; any regulatory audit cycle accelerates migration

**Key risks:**
1. Sales cycle drag — 12–18 months means SOM is back-weighted; cash runway must cover 2+ years before meaningful revenue lands
2. Regulatory fragmentation — MiFID III (EU), FCA rules (UK), FINSA/FIDLEG (Switzerland) are three separate rulebooks; a single compliance engine requires three maintained in parallel
3. Incumbent stealth — the silence on MiFID III announcements may mean quiet internal builds, not an open gap

**So what:** The SOM is real but back-weighted — the business needs non-revenue capital (grants, pilots, co-development) to bridge to Month 18, not Month 6.

---

### 3.2 Segment Prioritisation

| Segment | Revenue | Accessibility | Competitive Intensity | Strategic Fit | Time to Revenue | Total /25 |
|---|---|---|---|---|---|---|
| IFA consolidators | 4 | 4 | 2 | 5 | 4 | **19** |
| IFAs | 3 | 3 | 3 | 4 | 2 | 15 |
| EAMs | 3 | 2 | 3 | 4 | 2 | 14 |
| Boutique private banks | 4 | 2 | 3 | 3 | 2 | 14 |
| MFOs | 4 | 2 | 2 | 3 | 2 | 13 |

**IFA consolidators (19/25) — beachhead.** Centralised procurement means one deal covers compliance obligations across many acquired books. The M&A surge creates a pull-market at exactly the moment no named competitor has filled the gap. A foreign entrant with no EU entity and no brand can still close here because the buyer's pain is urgent and the competitive set is empty.

**IFAs (15/25) — second wave.** Once one consolidator reference exists, individual IFAs become warmer inbound. The average adviser age of 58 and Excel dependency signals low switching resistance once trust is anchored.

**Watch-outs:**
- MFOs score 4 on revenue but 2 on accessibility — classic trap. Alternatives-heavy portfolios require custodian integrations the entrant doesn't have; pursue only after a consolidator reference and a local entity are in place.
- Boutique private banks: regulatory procurement scrutiny of an Asia-HQ'd vendor with no EU entity will stall at compliance review. Accessibility is effectively 1 until FCA/BaFin registration is resolved.

**So what:** Every sales resource in Phase 1 goes to IFA consolidators in the UK — no exceptions. Spreading across segments before a reference client exists is how a cash-constrained entrant runs out of money.

---

### 3.3 Competitive Landscape

**Porter's Five Forces:**
- Threat of new entrants: Medium — regulatory complexity and custodian integration costs are real barriers, but an entrant with existing infrastructure (the Asia Wealthtech player) bypasses the hardest part of the barrier
- Supplier power (Flanks / aggregators): High — only three viable independent aggregators remain after Birdee, Nucoro, and Wealth Kernel were absorbed; Flanks' post-CaixaBank pricing leverage is a structural risk
- Buyer power: Medium — IFAs and EAMs are fragmented; consolidators have more leverage
- Threat of substitutes: High — Excel + manual processes are the dominant competitor; the real displacement target is spreadsheets, not Landytech
- Rivalry: Medium — incumbents are either mega-AUM focused or have not shipped MiFID III tooling

**Positioning map (Compliance depth × AUM tier focus):**
- Top-right (MiFID III-ready + mid-market): **unoccupied** — the target position
- Bottom-right (MiFID II + mega AUM): Aladdin, Temenos, SimCorp, Objectway
- Mid-left (MiFID II + mid-market): Landytech, EdgeLab — nearest neighbours but unconfirmed on MiFID III
- Data layer only: Flanks, Pretim — no compliance output

**White space:**
1. **MiFID III compliance automation for mid-market** — uncontested as of May 2026; any public product announcement by Landytech or a Flanks-plus-UX partnership closes this window
2. **PRIIPs TCA embedded in reporting** — Flanks and Pretim leave arrival-price data unresolved; a reporting layer that ingests custodian data and outputs PRIIPs-compliant cost figures fills a confirmed gap (though this requires a TCA vendor integration — Broadridge or RiskConcile)
3. **Alternative asset reporting for mid-tier private banks** — SimCorp targets this at enterprise price points; mid-market $200M–$2B AUM with PE/real estate exposure is unserved at accessible price points

**VRIO on the claimed moat (MiFID III compliance automation):**
- Valuable: Yes — regulatory deadlines make it non-discretionary
- Rare: Yes for now — no incumbent has shipped it publicly
- Inimitable: No — Landytech or Flanks+partner can replicate; the moat is timing, not technology
- Organised to exploit: Uncertain — requires a MiFID III specialist hire before any client demo; Asian regulatory pedigree does not transfer

**Biggest threat:** Landytech ships MiFID III compliance tooling before the entrant establishes a beachhead — or Flanks acquires/partners with a reporting UX layer. Either event compresses the uncontested window from ~12 months to near-zero.

**So what:** The moat is a timing moat, not a technology moat — speed of execution in the next 6 months matters more than product depth.

---

### 3.4 Go-to-Market + Funding

**Where to Play:** UK, IFA consolidators managing 5–20 acquired adviser books, $500M–$1.5B AUM, Head of Compliance or COO as buyer.

**How to Win:** Be the first vendor to hand a consolidator a complete MiFID III compliance output across their acquired books, without requiring them to rebuild infrastructure — positioned as operational survival kit, not better dashboards.

**ICP (Phase 1):**
- Role: Head of Compliance or COO
- Firm: IFA consolidator, UK
- Size: 5–20 acquired adviser books, $500M–$1.5B combined AUM
- Pain: Inherited MiFID III obligations across books with mismatched systems; board-level deadline pressure from June 2026 go-live
- Trigger event: Recent acquisition, or failed/upcoming compliance audit

**Acquisition channels:**

| Priority | Channel | Rationale | Cost |
|---|---|---|---|
| 1 | Direct outreach via compliance networks + EFPA/WealthTech event presence | Foreign entrant needs credibility anchors; face-to-face trust-building faster than cold outbound | Low |
| 2 | White-label / co-sell with a custodian or platform (Phase 2) | Bypasses cold trust deficit; mirrors Addepar's playbook | Medium |
| 3 | Referral from design-partner clients | Compliance buyers talk to peers; one marquee reference drives inbound in same segment | Low |

**GTM Phases:**

**Phase 1 — Land (Months 1–12)**
- Target: 3–5 signed paid design-partner contracts with UK IFA consolidators
- Funding tracked in parallel (see below)
- Success metric: 3 contracts signed, ≥£150K committed contract value by Month 9

**Phase 2 — Expand (Months 12–24)**
- ICP: Head of Operations at boutique EAM or private bank, Switzerland/Germany, $200M–$700M AUM, post-MiFID III audit failure
- Productise the Phase 1 bespoke compliance module into a repeatable SaaS offering
- Activate custodian white-label partnership (Pershing, Clearstream, or Avaloq)
- Establish UK legal entity + FCA registration; begin FINMA notification process
- Success metric: 15 paying clients, ≥70% on standard product, NRR ≥105%

**Phase 3 — Scale (Months 24–42)**
- ICP: CTO / Head of Digital at mid-size private bank, Germany/Switzerland, $1–2B AUM
- Target: 50 clients, €2M+ ARR; custodian channel contributing ≥25% of new logos
- Evaluate Series A or structured debt once ARR base justifies it

---

**Funding options — ranked by viability for a cash-constrained pre-revenue entrant:**

| Option | Viability | Ticket size | Timeline | Dilutive? | Verdict |
|---|---|---|---|---|---|
| Paid pilot / design-partner contracts | **High** | £30–80K each | 1–3 months | No | Best first move — cash + reference client in one transaction |
| Innovate UK Smart Grant | **High** | Up to £500K | 3–6 months | No | Apply Day 1; largest non-dilutive ticket available in UK |
| Co-development with IFA consolidator | **Medium** | £200–500K | 3–9 months | Negotiable | Highest value, highest complexity; run in parallel with pilots, not instead of |
| FCA RegTech Sandbox | **Medium** | Indirect (credibility + fast-track) | 3–6 months | No | Signals regulatory seriousness; accelerates procurement in regulated firms |
| Strategic investor (Flanks or aggregator) | **Medium** | Variable | 3–9 months | Yes unless structured as revenue-share | Explore only if pilots stall; dilutive and a distraction |
| Revenue-based financing | **Low** | Against ARR | Post-revenue | No | Not viable pre-revenue; revisit at Month 12+ |
| Horizon Europe / EIC | **Low** | Large | 12–18 months | No | Requires EU entity + consortium; too slow for Phase 1 |

**Recommended funding sequence:**
1. **Month 1:** Launch outreach to 5–8 UK IFA consolidators for paid pilot conversations + submit Innovate UK Smart Grant application
2. **Month 1–3:** Close 2–3 paid pilot agreements (£30–80K each = £60–240K immediate cash)
3. **Month 3–6:** Run one co-development negotiation with the largest/most credible consolidator prospect; use pilot wins as proof points
4. **Month 6:** Innovate UK grant decision; if awarded, funds the MiFID III regulatory compliance build properly
5. **Month 9:** Assess whether to bring in a strategic investor (Flanks, custodian) based on pipeline velocity

**Biggest GTM risk:** The entire Phase 1 depends on at least one IFA consolidator signing a paid design-partner contract within 9 months. If consolidators stall on procurement (common in regulated firms), cash collapses before Innovate UK lands. Mitigation: run 8–10 outreach conversations simultaneously from Month 1 to avoid single-deal dependency.

**So what:** The funding strategy is not a sequential plan — it is three bets placed in parallel in Month 1, sized so that any one of them closing extends runway to the next decision point.

---

### 3.5 Business Case Stress-Test (Critic)

**Strengths of the thesis:**
1. Regulatory timing is genuinely interesting — MiFID III deadlines have passed or are imminent, yet no named incumbent has shipped compliance automation tooling
2. IFA consolidation as a structural demand driver is well-sourced — the £9.3B deal surge creates a plausible, specific buying mechanism
3. Co-development + paid pilot funding structure is pragmatic for a cash-constrained entrant; it creates reference clients and cash simultaneously

**Material weaknesses:**
1. **Business case is incomplete** — unit economics, ACV, CAC, payback, and use-of-funds quantum are absent. This is a thesis, not a fundable business case.
2. **The compliance gap is inference, not evidence** — incumbent silence on MiFID III does not confirm an open gap; they may be building quietly. No buyer-side confirmation (active RFPs, unsolved audits) has been collected.
3. **Single point of failure** — entry is contingent on closing a co-development deal with a named European partner who does not yet exist. This is not acknowledged as a blocking risk.
4. **Flanks dependency without negotiating leverage** — a cash-constrained entrant with no EU AUM, no entity, and no regulatory standing will face unfavourable terms or deprioritisation.
5. **Asian regulatory pedigree does not transfer** — SFC/MAS credibility is meaningful in Asia. FCA/BaFin procurement processes will not weight it. This is a blocking constraint on sales cycle length, not just a caveat.

**Unvalidated assumptions (ranked by risk):**

| Rank | Assumption | Risk if wrong |
|---|---|---|
| 1 | Incumbents have not built MiFID III modules internally | Entire gap thesis collapses on arrival |
| 2 | A European consolidator will co-fund development | No entry capital, no anchor customer |
| 3 | IFA consolidators are actively buying compliance tooling post-acquisition | Demand signal is structural noise, not buying intent |
| 4 | Flanks does not cover PRIIPs TCA and will partner on acceptable terms | Aggregation layer is broken; integration cost increases |
| 5 | Asian engineering translates to MiFID III build quality without a local regulatory hire | Product fails compliance audit; no sales possible |

**Verdict from critic:** Rethink, then proceed. Market timing instinct is defensible. But this is a directional hypothesis, not a business case. Before any capital is committed to a build, three things must be true: (1) buyer-side confirmation that the compliance gap is real and unsolved (10+ discovery calls with compliance leads at target-segment firms), (2) at least one consolidator in active LOI conversation, (3) skeleton unit economics with ACV, CAC, and payback assumptions even if directional.

**So what:** Do not start building until you have completed 15 discovery calls and have at least one consolidator in active conversation — the discovery cost is near-zero; the build cost is not.

---

## 4. Risks & Assumptions

**Top 3 risks:**

| Risk | Likelihood | Mitigation |
|---|---|---|
| Landytech or Flanks+partner ships MiFID III tooling within 6–9 months, closing the white space | Medium | Compress Phase 1 timeline; prioritise the consolidator conversation over product completeness |
| No consolidator signs a paid pilot within 9 months; cash collapses before Innovate UK grant lands | Medium | Run 8–10 outreach conversations simultaneously from Month 1; don't treat any single deal as guaranteed |
| Flanks reprices or deprioritises after CaixaBank deal, making aggregation layer unaffordable | Medium | Abstract Flanks behind an internal API interface from Day 1; build Pretim as a fallback integration |

**Top assumptions to validate before acting:**

1. **Is the MiFID III compliance gap real from the buyer's perspective?** — 10–15 discovery calls with compliance leads at UK IFA consolidators within 60 days. Look for active RFPs, unresolved audit findings, or budget line items.
2. **Will at least one consolidator sign an LOI for a co-development or paid pilot?** — Soft pitch to 5–8 consolidators in Month 1; gauge LOI appetite before committing to any build scope.
3. **Does Flanks provide PRIIPs arrival-price data, and at what commercial terms?** — Direct product call with Flanks and Pretim; confirms whether TCA integration is optional or architecturally mandatory.

---

## 5. Next Steps

1. **Month 1, Week 1 — Discovery calls:** Identify and reach out to 10–15 compliance leads at UK IFA consolidators (Benchmark Capital, Fintel, Quilter network, Tenet Group as starting targets). Goal: confirm whether MiFID III gap is a live buying problem, not just a regulatory fact.

2. **Month 1, Week 1 — Innovate UK Smart Grant application:** Submit application immediately — timeline is 3–6 months and the clock only starts when you apply. Up to £500K non-dilutive; this is the highest-value, lowest-distraction funding option available.

3. **Month 1, Week 2 — Flanks + Pretim vendor calls:** Direct product conversation to confirm PRIIPs arrival-price data coverage and commercial terms. Determines whether TCA integration is a feature or a hard architectural dependency before any build scope is committed.

4. **Month 1–3 — Close 2–3 paid pilot contracts:** Each at £30–80K with scope ring-fenced to MiFID III cost reporting output and suitability documentation. First client must be referenceable — choose for credibility, not just speed.

5. **Month 3 — Hire or contract one MiFID III regulatory specialist (UK-based):** Asian regulatory pedigree does not transfer to European sales conversations. A local hire who can speak to FCA audit requirements is a prerequisite for any client demo, not a nice-to-have.

---

## 6. Strategic Tensions

Three tensions that cannot be resolved by analysis — they require a judgment call:

1. **Speed vs. regulatory standing** — entering fast (before incumbents ship MiFID III) conflicts with the slow process of FCA registration, which is required before boutique banks and private banks will buy. Resolution: accept that Phase 1 is UK consolidators only (FCA registration not required for a technology vendor without regulated activity), and treat regulatory registration as a Phase 2 enabler, not a Phase 1 blocker.

2. **Flanks dependency vs. negotiating weakness** — the aggregator partnership is architecturally necessary but the entrant has no leverage. Resolution: negotiate Flanks from a position of "future volume" by having 2–3 pilots in conversation simultaneously; abstract Flanks behind an internal API from Day 1 to preserve optionality.

3. **Co-development as funding vs. co-development as distraction** — a consolidator deal funds the build but risks bespoke scope creep that delays productisation. Resolution: ring-fence all co-development scope to a single module (MiFID III cost reporting output) with a clear productisation clause in the contract.

---

## File Path
`c:\dev\research\european-wealthtech-reporting\2026-05-05-strategy-asia-eu-entry.md`
