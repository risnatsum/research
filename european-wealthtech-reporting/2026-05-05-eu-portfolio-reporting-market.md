# European Portfolio Reporting Market — Strategic Landscape
**Date:** 2026-05-05
**Research type:** Market Landscape + Competitive Analysis
**Mode:** Broad
**Decision context:** Whether to build a consolidated portfolio reporting module (multi-custodian aggregation, MiFID II/III compliance, MIS dashboards) and whether to partner with a data aggregator like Flanks or Pretim, targeting IFAs, EAMs, MFOs, family offices, boutique private banks in Europe.

---

## Synthesis

The surface question — build a consolidated reporting module, partner with Flanks or Pretim — masks a deeper strategic reality: the European wealth tech market is in the middle of a regulatory-driven reshuffle, and the window to claim a defensible position is narrower than the 12–18 month sales cycle suggests. Three forces are colliding, and how a fintech reads their interaction determines whether this build is a defensive cost centre or an offensive land grab.

The first force is regulatory compounding. MiFID II is in force, MiFID III lands in two waves through 2026, PRIIPs KID 2025 has already changed cost methodology, DORA went live in January, and SFDR 2.0 is queued for 2027–2028. Each of these alone is manageable; together they create a workload that the target segment — IFAs averaging 58 years old, 38% of family offices still aggregating manually, 80% living in Excel — is structurally under-resourced to absorb. *(Caveat: the research shows correlation between M&A volume and compliance pressure, but does not directly evidence that consolidators will attribute this pressure specifically to a reporting module gap versus other remediation routes.)*

The IFA retirement wave (50% exiting within a decade) and the £2.1B-to-£9.3B M&A surge in 2024 mean the buyers in 2026–2028 are consolidators inheriting books of business they did not build, with compliance obligations they did not architect for. They are more likely to buy standardised infrastructure than to build bespoke solutions — but this is a demand hypothesis, not a confirmed buying signal.

The second force is the aggregator squeeze. The viable partner set has collapsed to effectively three names — Flanks, Pretim, Additiv — after Birdee, Nucoro, and Wealth Kernel were absorbed or wound down. CaixaBank's April 2026 selection of Flanks is a Tier-1 validation, though it is a single data point; it de-risks the Flanks partnership commercially but may also increase Flanks' pricing leverage over time. Flanks and Pretim both lack native reporting UX, which is precisely the layer where a fintech can build defensible IP — but neither explicitly covers PRIIPs arrival-price transaction cost data. A complete reporting module therefore requires a second integration with a specialist TCA vendor (Broadridge, RiskConcile, AVS Valuation). The build-or-partner question is a false binary: it is build-reporting-layer + partner-for-aggregation + integrate-TCA-utility, and the architectural decision is which of these integrations becomes load-bearing.

The third force — and the most decision-relevant signal — is that none of the named incumbents (Aladdin Wealth, Temenos, Landytech, Objectway) have publicly announced MiFID III compliance automation features, as of the research date (May 2026), with September 2025 go-live already past and June 2026 imminent. Incumbents typically pre-announce regulatory features 12–18 months ahead to lock in renewals; their silence suggests either that compliance automation at the transaction-reporting-escalation layer is genuinely hard to build, or that these vendors are economically focused on the $10B+ AUM tier and deprioritising the $200M–$2B sweet spot. Either reading favours a focused entrant — though first-mover advantage in a 12–18 month sales cycle is not automatic, and a well-capitalised second mover can close the gap.

The strategic answer: partner now with Flanks (or Pretim) for the aggregation layer to avoid two-plus years of custodian connectivity engineering. Build natively for MiFID III compliance automation and reporting UX — that is the differentiated, defensible layer. Treat the TCA integration as a commodity utility, not a competitive moat. Abstract the aggregator behind an internal API interface from day one to preserve the ability to switch or multi-source if Flanks reprices post-CaixaBank.

Positioning matters as much as product. This is not a dashboard sale. The buyers in 2026 are facing real regulatory deadlines and are not shopping for better charts — they are shopping for operational survival. The module should be positioned as a consolidator's compliance kit, priced accordingly, and sold through direct advisory relationships and 1–2 custodian or platform partnerships rather than a marketplace model.

---

## Topic Sections

### Regulatory Landscape

European portfolio analytics and reporting for wealth managers is shaped by a dense, evolving regulatory framework designed to enhance investor protection and operational resilience. The confluence of established directives (MiFID II, PRIIPs, GDPR) and newly activated regulations (DORA, SFDR 2.0) creates both compliance costs and a structural case for fintech reporting solutions.

**MiFID II Reporting Obligations**

MiFID II mandates that investment firms — including IFAs, EAMs, and private banks — provide transparent, standardised disclosures of costs and charges. [HSBC Private Bank, 2024] The framework requires annual "Annual Costs and Charges Reports" summarising total costs incurred over the preceding 12-month period, with both ex ante and ex post disclosure obligations. [PwC, 2020] Portfolio valuations shifted from semi-annual to quarterly reporting, with firms required to flag portfolio value declines exceeding 10% in a single period. [HSBC, 2024]

MiFID III amendments (phased 2025–2026) introduce stricter suitability assessments, improved KID standards, and expanded ex-post cost disclosures. The core implementation deadline is September 2025 [1Global, 2025] with research rules following June 2026. [ASC, 2026] Four reporting mechanics require significant automation: structured suitability questionnaire workflows, periodic cost reports disaggregating direct costs/indirect costs/inducements at instrument and portfolio levels, escalated transaction reporting with new identifiers (LEI, order IDs), and expanded communication surveillance. [First Derivative, 2024; ASC, 2026]

RTS 27/28 best-execution venue reporting requirements have been streamlined under MiFID III, with revised standards live from April 1, 2026. [ESMA, April 2025]

**PRIIPs KID Requirements**

PRIIPs Regulation (EU 1286/2014) mandates Key Information Documents for retail investment products. A significant 2025 change requires UCITS and AIFs to apply arrival-price methodology — meaning firms must capture timestamp-specific order and execution data at transaction level for all trades, and maintain three years of historical cost data. [Apex Group, 2025; Value & Risk, 2025] Each trade requires mid-price-at-order versus actual execution-price comparison. This is not a portfolio-level calculation — it is transaction-level, meaning fintech reporting tools must ingest and reconcile granular transaction data across custodians and asset classes. [Projective Group] Specialist TCA vendors (Broadridge, RiskConcile, AVS Valuation) are emerging as the de facto solution for this layer. [Broadridge; RiskConcile]

**GDPR and DORA**

GDPR requires firms aggregating data from multiple custodians to establish compliant data processor agreements, manage cross-border transfers, and implement appropriate technical safeguards. [Alation, 2025] Custodians increasingly scrutinise third-party data access under GDPR.

DORA (live January 17, 2025) applies to all regulated financial entities including fintechs providing reporting infrastructure. It mandates ICT risk frameworks, incident reporting within hours, resilience testing, and mandatory vendor oversight clauses in all upstream infrastructure contracts. [Mayer Brown, January 2025] This creates dual compliance costs for fintechs: internal resilience controls and contractual responsibility for cloud hosts, data processors, and API providers. [Legal Nodes, 2025]

**Upcoming: SFDR 2.0**

SFDR 2.0 (proposed November 2025, implementation 2027–2028) will require mandatory product categorisation (sustainable / transition / ESG basics) with 70% minimum investment thresholds. [Sidley Austin, November 2025] This will force wealth managers to rebuild portfolio classification and attribution systems — creating a secondary demand wave for reporting tooling from 2026 onward.

| Source | URL | Verified? |
|--------|-----|-----------|
| HSBC Private Bank | https://www.privatebanking.hsbc.com/about-us/financial-regulations/MiFID-II-overview/ | Yes |
| PwC | https://www.pwc.co.uk/financial-services/assets/pdf/transparency-of-mifid-ii-costs-and-charges.pdf | Yes |
| ESMA (April 2025) | https://www.esma.europa.eu/sites/default/files/2025-04/ESMA35-335435667-6253_Final_Report_-_MiFID_II_RTS_on_order_execution_policies.pdf | Yes |
| Apex Group | https://www.apexgroup.com/insights/changes-to-the-priips-kid-regulation-what-you-need-to-know-and-do/ | Yes |
| Value & Risk | https://www.valuerisk.com/insights/priips-arrival-price | Yes |
| Projective Group | https://www.projectivegroup.com/priips-ucits/ | Yes |
| Alation | https://www.alation.com/blog/gdpr-data-compliance-best-practices-2025/ | Yes |
| Mayer Brown | https://www.mayerbrown.com/en/insights/publications/2025/01/cybersecurity-in-the-financial-sector-eus-digital-operational-resilience-act-takes-effect | Yes |
| Legal Nodes | https://www.legalnodes.com/article/guide-to-the-scope-and-practical-aspects-of-dora-compliance | Yes |
| Sidley Austin | https://www.sidley.com/en/insights/newsupdates/2025/11/sfdr--five-key-takeaways-from-the-european-commissions-proposal | Yes |
| 1Global | https://www.1global.com/blog/financial-institutions/mifid-iii-compliance-guide-for-financial-institutions | Yes |
| ASC Technologies | https://www.asctechnologies.com/blog/post/mifid-iii-regulatory-changes-and-investor-protection-in-capital-markets/ | Yes |
| First Derivative | https://firstderivative.com/insights/mifid-iii-back-with-a-vengeance/ | Yes |
| Broadridge | https://www.broadridge.com/article/asset-management/portfolio-transaction-cost-calculations | Yes |
| RiskConcile | https://info.riskconcile.com/tcalab | Yes |

---

### Target Segment Profiles

The European wealth management market comprises five distinct segments, each with varying scale, technology maturity, and reporting pain points.

**Market Scale**

The European financial advisory market reached USD 30.92 billion in 2025 and is projected to reach USD 38.07 billion by 2030. [Mordor Intelligence, 2025] European asset management totals EUR 34.4 trillion AUM (September 2025), with six countries — UK, France, Switzerland, Germany, Netherlands, Italy — accounting for nearly 85% of activity. [EFAMA, 2024]

Europe hosts approximately 700 active MFOs and 1,005 SFOs, with average SFO AUM of USD 1.4 billion and total surveyed AUM of USD 136 billion. [Campden FB, 2024] Germany is the largest family office market; Switzerland has exceptional per-capita density. SFO operating costs frequently exceed USD 2–5 million annually.

**IFAs:** The sector faces demographic headwinds — average adviser age 58, 50% expected to retire within a decade, only 1/3 have succession plans. [IDEX Consulting, 2025] M&A consolidation is accelerating, with IFA deal values rising from £2.1 billion to £9.3 billion in 2024.

**Boutique private banks:** Players such as Julius Baer (USD 423B AUM), Pictet, and Rothschild & Co are embedding digital reporting platforms as competitive differentiators. [McKinsey, 2024]

**Pain Points**

Multi-custodian aggregation is the dominant pain point across all segments. 38% of family offices still manually aggregate financial data. 57% of service providers report that approximately 80% of family offices depend heavily on Excel spreadsheets — which contain at least one error in 88% of cases. [Copia Wealth Studios, 2025] Quarterly reporting cycles involve teams spending days pulling data from custodian portals and producing outdated reports by delivery.

Technology maturity correlates with firm size. Larger family offices increasingly deploy Temenos, Avaloq, or Masttro. Smaller IFAs, EAMs, and boutique private banks rely on Salesforce for CRM, Bloomberg or Morningstar for data, and custom Excel for consolidated reporting.

**Sweet Spot Segment**

IFAs and EAMs managing USD 200 million to USD 2 billion in AUM represent the highest-value opportunity: large enough to justify software investment, small enough to lack in-house platform development, and operationally constrained by multi-custodian complexity. Boutique private banks occupy a similar "Goldilocks zone" — underfunded relative to Tier-1 global banks but too specialised for commodity solutions.

| Source | URL | Verified |
|--------|-----|----------|
| Mordor Intelligence | https://www.mordorintelligence.com/industry-reports/europe-financial-advisory-services-market | Yes |
| IDEX Consulting | https://www.idexconsulting.com/blog/2025/03/m-and-a-financial-services-market-analysis-new-opportunities-for-ifas | Yes |
| EFAMA | https://www.efama.org/newsroom/news/european-asset-managers-course-manage-eu33-trillion-2024 | Yes |
| Campden FB | https://campdenfb.com/article/the-european-family-office-landscape-report-2024 | Yes |
| McKinsey | https://www.mckinsey.com/industries/financial-services/our-insights/european-private-banking-resilient-models-for-uncertain-times | Yes |
| Copia Wealth Studios | https://copiawealthstudios.com/blog/family-office-technology-in-2025-tools-for-modern-wealth-management | Yes |
| ION Group | https://iongroup.com/blog/markets/the-current-european-regulatory-horizon-mifid-dora-and-developing-ai-rules/ | Yes |

---

### Vendor Landscape: Portfolio Managers and Full Solution Providers

**Bucket 1 — Portfolio Management Providers**

Bucket 1 providers focus narrowly on portfolio analytics, risk modelling, and client reporting, acting as middleware between advisers and custodians rather than controlling the client relationship.

- **EdgeLab/Evooq** (Lausanne): JPMorgan Private Bank made a strategic investment in 2022 [JPMorgan, 2022], validating its risk analytics engine for European and Asian private bank clients. Positions as a specialist translating complex portfolio risk into adviser-friendly narratives.
- **Landytech** (London): Raised £5 million in expansion funding [Tech.eu, 2024], serves 170+ custodian connections across 15 countries, claims 80% reporting time reduction. Active partner model.
- **Objectway** (Italy, 6 European countries): Manages £1 trillion in assets for 200+ institutional clients. Largest European pure-play portfolio management specialist. eXimius platform automates rebalancing, compliance, and performance attribution. Acquired Die Software Peter Fitzon and expanded into North America via Nest Wealth — a consolidation signal.
- **WealthDynamics**: Referenced in the market but limited public documentation found. [UNVERIFIED]

**Bucket 3 — Full Solution Providers**

Bucket 3 vendors bundle portfolio management with CRM, back-office, and wealth planning — and control the client data relationship.

- **BlackRock Aladdin Wealth**: ~$25T ecosystem. October 2025: launched AI-powered auto-commentary for Morgan Stanley advisers. January 2025: integrated Investment Navigator for product-level suitability checks. [BlackRock, 2025]
- **SS&C Advent**: Family office and alternative asset specialist across London, Geneva, Dublin.
- **Temenos**: IDC MarketScape Leader 2025 for Wealth Management Technology Services. [Temenos, 2025] End-to-end: digital banking, CRM, portfolio management, back-office.
- **InvestCloud**: $6T AUM, 550 clients globally. Launched Client Lifecycle Management platform with Rathbones (UK). [Wealth Mosaic]
- **Finary** (Paris): €25M Series B, September 2025, PayPal Ventures. [EU-Startups, 2025] Direct-to-consumer — NOT targeting IFAs. Disruptive to consumer segment, not relevant as a competitive threat to this module's targets.
- **SimCorp** (Deutsche Börse subsidiary): Acquired Paris-based Domos FS in 2025 for alternative asset capabilities. [SimCorp, 2025]

**White-Space Gaps**

Three gaps confirmed across Bucket 1 and Bucket 3:
1. **MiFID III compliance automation** — no named vendor has publicly announced explicit MiFID III features as of May 2026, despite September 2025 and June 2026 go-live dates. Temenos maintains existing MiFID II coverage but no MiFID III roadmap statement found. Objectway, Landytech, InvestCloud, SS&C Advent: no public announcements. BlackRock Aladdin's Investment Navigator integration covers suitability but is not a full MiFID III automation suite.
2. **Alternative asset aggregation** for mid-tier European private banks.
3. **Tokenised private assets** — no incumbent has emerged as the clear reporting platform.

| Vendor | Bucket | Geographic Focus | Key Clients | Competitive Edge |
|--------|--------|-----------------|-------------|-----------------|
| EdgeLab/Evooq | 1 | Europe, Asia | Banks, wealth managers | Risk analytics depth, JPMorgan backing |
| Landytech | 1 | Europe | Family offices, asset managers | 170+ custodian connections, 80% time reduction |
| Objectway | 1 | Europe + North America | 200+ institutional | Largest European pure-play, deepest automation |
| Aladdin Wealth | 3 | Global (US-centric) | Morgan Stanley, institutionals | $25T ecosystem, AI auto-commentary |
| SS&C Advent | 3 | Global | Family offices, alt managers | Multi-FO specialist, accounting depth |
| Temenos | 3 | Europe, APAC | Banks, wealth managers | IDC Leader, broad enterprise appeal |
| InvestCloud | 3 | Global | Advisers, broker-dealers | $6T AUM, UK foothold |
| Finary | 3 (D2C) | Europe | Mass-affluent direct | AI-native, consumer-focused — not IFA-relevant |

| Source | URL | Verified |
|--------|-----|----------|
| BlackRock | https://www.blackrock.com/aladdin/discover/aladdin-wealth-integrates-investment-navigator-capabilities | Yes |
| SimCorp | https://www.simcorp.com/about-us/news/2025/simcorp-to-transform-private-market-investing-with-simcorp-alternatives | Yes |
| EU-Startups | https://www.eu-startups.com/2025/09/finary-gets-serious-paris-fintech-lands-e25-million-for-ai-powered-wealth-tools-and-expand-across-europe/ | Yes |
| EY | https://www.ey.com/en_gl/insights/financial-services/emeia/why-2025-will-be-a-pivotal-year-for-european-wealth-and-asset-managers | Yes |
| JPMorgan | https://www.jpmorganchase.com/newsroom/press-releases/2022/jpmorgan-makes-strategic-investment-in-edge-laboratories-and-evooq | Yes |
| SS&C Advent | https://www.advent.com/news-and-insights/blog/the-evolution-of-wealth-management-how-emea-firms-are-reinventing-their-business-models/ | Yes |
| Tech.eu | https://tech.eu/2024/05/30/landytech-raises-5m-for-portfolio-management-platform/ | Yes |
| Temenos | https://www.temenos.com/press_release/temenos-named-leader-in-idc-marketscape-for-wealth-management-technology-services/ | Yes |
| The Wealth Mosaic | https://www.thewealthmosaic.com/vendors/objectway/ | Yes |
| Temenos MiFID II | https://www.temenos.com/products/regulatory-compliance/markets-in-financial-instruments-directive-ii-mifid/ | Yes |

---

### Pure Aggregators (Bucket 2)

**Viable Options (as of May 2026)**

The independent aggregator set has contracted sharply: Birdee is winding down discretionary operations June 2025; Nucoro was acquired by Backbase and is no longer an independent partner option; Wealth Kernel was acquired by Alpaca Securities July 2025. Three viable options remain:

**Flanks** (Barcelona, founded 2019): API-first aggregator operating across 33 countries, 600+ institutional custodian connections, €39B aggregated, 500,000+ portfolios. [Flanks, 2026] Raised €14M in February 2025. [Axios, 2025] CaixaBank selected Flanks for wealth data aggregation in April 2026 — the most significant Tier-1 institutional endorsement of any pure aggregator in this dataset. [Fintech.Global, 2026] Launched EDX (Europe's first standardised financial data exchange protocol) in partnership with FinReg360. White-label capable. New custodians added within 1–2 weeks. No native reporting UX.

**Pretim**: Neutral data backbone covering equities, bonds, private equity, and real estate, with daily automated collection and standardisation. RESTful API with OAuth2 authentication and encrypted data transfer. [Pretim, 2026] No public pricing. Targets family offices, wealth managers, and private banks across Europe. No native reporting UX.

**Additiv** (Switzerland): Modular digital financial services orchestration layer. 400+ clients, 15+ countries, regulated. Winner 2021 WealthBriefing European Award. Closest to full-service among the three, though enterprise-positioned. [The Wealth Mosaic, 2026]

**PRIIPs Data Gap — Critical Finding**

Neither Flanks nor Pretim explicitly provides PRIIPs arrival-price transaction cost data. Flanks aggregates position-level and holdings-level custodian data; Pretim aggregates valuations, holdings, and transactions for reconciliation purposes. Neither vendor's product pages reference three-year historical transaction cost datasets or arrival-price methodology support. [UNVERIFIED — requires vendor confirmation] This means a reporting module built on Flanks or Pretim still requires a separate integration with a specialist TCA vendor (Broadridge, RiskConcile, AVS Valuation) for PRIIPs KID compliance.

**Lock-in Risks**

- API dependency and non-standardised custodian feeds create switching costs
- Proprietary reconciliation logic is difficult to audit independently
- Flanks' 1–2 week per-custodian onboarding creates gatekeeping risk if the relationship deteriorates
- CaixaBank's adoption may give Flanks pricing leverage over smaller partners
- Mitigation: abstract the aggregator behind an internal interface from day one

| Source | URL | Verified? |
|--------|-----|-----------|
| Pretim | https://pretim.io/portfolio-data-aggregation/ | Yes |
| Flanks | https://www.flanks.io/ | Yes |
| Fintech.Global (CaixaBank) | https://fintech.global/2026/04/20/caixabank-selects-flanks-for-wealth-data-aggregation/ | Yes |
| Fintech.Global (€14M) | https://fintech.global/2025/02/26/wealth-management-automation-platform-flanks-raises-e14m-to-expand-in-europe/ | Yes |
| The Wealth Mosaic (Additiv) | https://www.thewealthmosaic.com/vendors/additiv/ | Yes |
| Tracxn (Wealth Kernel) | https://tracxn.com/d/companies/wealthkernel/ | Yes |
| Axios | https://www.axios.com/pro/fintech-deals/2025/02/26/european-wealthtech-data-aggregator-flanks-14-million | Yes |
| Anevis Solutions | https://www.anevis-solutions.com/2023/priips-2024-25-arrival-price-method-for-transaction-costs/ | Yes |
| AVS Valuation | https://www.avs-valuation.com/avs-offers-solutions-for-the-regulatory-transaction-cost-analysistca-in-accordance-with-the-priips-regulation/ | Yes |

---

### Go-to-Market and Partnership Strategy

**Winning GTM Patterns**

The most successful fintech entrants to the European wealth reporting market have combined **direct sales to advisers with white-label partnerships**, not marketplace models. This reflects the fragmented structure of European advisory: advisers adopt tools through direct vendor outreach, integration with their primary custodian, peer recommendations, or embedded supply relationships with larger platforms. [RIABiz, 2022]

Addepar — the closest global comparable — reached $275M revenue in 2024 (31% YoY growth), serving clients managing $7T in AUM. [Sacra, 2024] White-label deployment with custodians and platforms accounts for an estimated 20–30% of new customer acquisition. [UNVERIFIED — inferred from market patterns, not directly sourced]

**Sales Cycle and Pricing**

Typical sales cycle: **12–18 months** from initial contact to signature for boutique and family office targets. CAC: $1,200–$3,000 per firm (direct sales). [Focus Digital, 2024] Pricing models: per-adviser-seat (€300–€800/month) or AUM-based tiers (0.02–0.05bps AUM). Consumption-based or hybrid models are gaining traction as boutique advisers demand cost transparency. [FinTech Weekly, 2025]

Note on "50 clients in 6–9 months": this represents the duration of active selling with a pre-built pipeline — not 50 simultaneous 12–18 month sales cycles. Reaching 50 clients requires pipeline generation to begin 12–18 months before target close dates.

**Path to 50 Paying Clients**

1. 6–9 months of direct sales, 15–20 qualified leads per quarter
2. Seed 3–5 marquee reference clients (recognisable boutique banks or family offices) early
3. Partner with 1–2 custodians or platforms for embedded distribution
4. Sponsor 2–3 industry events (European Financial Planning Association, WealthTech summits)
5. Scale beyond 100 clients via white-label distributor partnerships or platform ecosystem

**Aggregator Partnership Risks**

Known failure modes when building on aggregator data:
- Coverage gaps in illiquid assets, insurance-linked securities, and alternative investments
- Data reliability and refresh latency — drift is often undetected until client reports discrepancies
- Commercial leverage increases as customer base grows dependent on the aggregator
- Switching requires full data migration and revalidation [DashDevs, 2024]

**Recommended Architecture**

Partner with Flanks (primary) for custodian aggregation. Build natively for the MiFID III compliance and reporting UX layer. Integrate a TCA vendor (Broadridge or RiskConcile) as a commodity utility for PRIIPs arrival-price data. Abstract the aggregator behind an internal API interface to preserve switching optionality as Flanks' pricing leverage grows post-CaixaBank.

| Source | URL | Verified? |
|--------|-----|----------|
| Flanks (€14M) | https://fintech.global/2025/02/26/wealth-management-automation-platform-flanks-raises-e14m-to-expand-in-europe/ | Yes |
| CaixaBank/Flanks | https://fintech.global/2026/04/20/caixabank-selects-flanks-for-wealth-data-aggregation/ | Yes |
| DashDevs | https://dashdevs.com/blog/guide-to-financial-data-aggregation-and-open-banking/ | Yes |
| Addepar / Sacra | https://sacra.com/c/addepar/ | Yes |
| Focus Digital | https://focus-digital.co/average-customer-acquisition-cost-for-fintech-industry/ | Yes |
| FinTech Weekly | https://www.fintechweekly.com/magazine/articles/innovative-pricing-strategies-for-fintech-products | Yes |
| QED Investors | https://www.qedinvestors.com/blog/qeds-2025-fintech-predictions | Yes |

---

## Key Signals

| # | Signal | Source | Confidence |
|---|--------|---------|------------|
| 1 | PRIIPs arrival-price methodology requires transaction-level 3-year data — neither Flanks nor Pretim explicitly provide this. TCA specialist vendors (Broadridge, RiskConcile) fill this gap. A "complete" reporting module requires three integrations, not two. | Regulatory + Aggregators | High |
| 2 | 38% of family offices still aggregate manually; 80% live in Excel; 88% of spreadsheets have errors. The real displacement target is not Addepar — it's spreadsheets. This reframes positioning, onboarding design, and trust-signal requirements. | Target Segments | High |
| 3 | CaixaBank selected Flanks April 2026 — the most significant Tier-1 institutional validation of any European pure aggregator. De-risks partnership commercially, but increases Flanks' pricing leverage. | Aggregators | High |
| 4 | Viable independent aggregators have contracted to three (Flanks, Pretim, Additiv). Birdee, Nucoro, Wealth Kernel all absorbed/wound down. Partner concentration risk is higher than the market appears. Architect for aggregator substitutability. | Aggregators | High |
| 5 | No named incumbent (Aladdin, Temenos, Landytech, Objectway) has publicly announced MiFID III compliance automation as of May 2026, despite September 2025 and June 2026 go-live dates. This is either a hard-to-build problem (first mover wins a category) or a mid-market deprioritisation (sweet-spot segment is genuinely under-served). Either reading favours a focused entrant. | Regulatory + Vendor Landscape | Medium |

---

## Topic Scorecard

| Topic | Importance | Researchability | Research Quality | Notes |
|-------|-----------|----------------|-----------------|-------|
| European regulatory requirements | 5 | 4 | 5 | Excellent source depth; DORA, MiFID III, PRIIPs all well-covered |
| Target segment profiles | 5 | 3 | 4 | FO/IFA data solid; EAM/boutique bank specifics thinner |
| Vendor landscape (Buckets 1 & 3) | 4 | 4 | 4 | Good coverage; WealthDynamics under-documented |
| Pure aggregators (Bucket 2) | 5 | 3 | 4 | Flanks and Pretim well-covered; PRIIPs gap confirmed but not vendor-verified |
| GTM and partnership strategy | 5 | 3 | 3 | Pattern inference from Addepar; limited EU-specific direct GTM case studies |

---

## Further Inquiry

1. **PRIIPs data gap — vendor verification (primary):** Confirm directly with Flanks and Pretim whether their APIs provide historical transaction cost data at arrival-price granularity. This determines whether the TCA utility integration is a feature or a hard architectural dependency. Has appeared as a gap in this run only — no prior research to cross-reference.

2. **MiFID III compliance automation — competitive timing (primary):** Contact Objectway, Landytech, and Temenos sales teams directly to determine their MiFID III product roadmaps. The absence of public announcements may not reflect absence of development. Knowing whether a credible competitor will launch in H2 2026 is decision-critical.

3. **IFA M&A consolidator buying behaviour (primary):** Interview 3–5 IFA consolidators who completed acquisitions in 2023–2024 on their reporting infrastructure decisions. The synthesis assumes M&A drives reporting tool buying — this hypothesis should be validated before building the GTM pitch around it.

4. **Flanks commercial terms — pricing and exclusivity (primary):** Understand Flanks' current partnership pricing, volume commitments, exclusivity clauses, and what happens post-CaixaBank on SME pricing. Lock-in modelling requires this input.

5. **Alternative asset reporting gap sizing (secondary):** Mid-tier European private banks with >20% alternatives allocation represent an under-documented sub-segment. Understanding the volume of such institutions and their current workflow would sharpen the product scope decision on whether to include alternatives from v1.

---

## File Path
`c:\dev\research\european-wealthtech-reporting\2026-05-05-eu-portfolio-reporting-market.md`
