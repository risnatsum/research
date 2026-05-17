# MiFID II and MiFID III Requirements for Swiss External Asset Managers
**Date:** 2026-05-08
**Research type:** Regulatory/Compliance Reference
**Mode:** Deep
**Audience:** Prive (technology provider); Swiss EAM Compliance Officers
**Prior research cross-referenced:** `c:\dev\research\swiss-eam-monitoring\2024-05-18-swiss-eam-compliance-monitoring.md` (covers AML/transaction monitoring, FINMA/nDSG obligations, data residency — not duplicated here)

---

## Synthesis

Swiss EAMs in the $200M–$2B band are not facing an incremental compliance burden. They are facing a structural mismatch between how their operating model was built and what cross-border EU rules now require at the transaction level. MiFID II was manageable because most obligations could be discharged at the portfolio or relationship level, and Swiss custodians absorbed much of the operational load. MiFID III dissolves that arrangement. It pushes nearly every obligation — cost disclosure, suitability justification, transaction reporting, best execution evidence — down to the individual instrument and the individual moment in time. That granularity is what breaks the existing toolchain, not the rules themselves.

The connective tissue across all four obligation clusters is that each has independently migrated from periodic and aggregated to continuous and atomic. Suitability now requires a point-in-time "why this instrument now" justification on top of the existing portfolio-level framework. Cost disclosure now requires personalised ex ante quotes per transaction, instrument-level disaggregation, and a cumulative cost-on-return illustration. PRIIPs arrival-price TCA requires an intraday mid-price captured at order timestamp. Transaction reporting requires order-link identifiers tying parent intent to child execution. Communication surveillance requires capture at the moment of utterance, not reconstruction after the fact. Each individually looks like a reporting upgrade. Together they describe a single architectural requirement: an event-sourced compliance ledger where every client interaction, order, price tick, and rationale is captured atomically and reconcilable on demand. No EAM in this segment has publicly implemented or described such a system, and no custodian aggregator currently building for this market provides one.

The non-obvious implication is that the custodian reporting liability gap and the PRIIPs arrival-price gap are the same gap. Both stem from the fact that Swiss custodians were never designed as MiFID reporting infrastructure — they are settlement and safekeeping rails. When an EAM uses a Swiss-only custodian, the RTS 22 transmission exemption breaks and liability snaps back to the EAM (exact applicability is fact-dependent and requires case-by-case legal analysis). Separately, that custodian cannot supply timestamped intraday mid-prices because that data was never part of its service contract. The EAM is exposed on the same axis twice: once for what the custodian doesn't report to regulators, and once for what it can't report to clients. Aggregators like Flanks and Pretim solve the position-reconciliation layer but inherit the same blind spot, because they consume custodian feeds rather than market data [INFERRED — requires direct vendor verification]. A vendor that solves PRIIPs TCA properly is, almost incidentally, also solving the transaction-reporting completeness problem — the underlying requirement is the same timestamped order-and-price event stream.

A second non-obvious implication concerns retrocessions. FinSA permits retention with a client waiver. MiFID II prohibits retention for EU discretionary clients regardless of any waiver. The standard industry framing treats this as a classification-and-disclosure problem, but it is actually a revenue-attribution problem at the position level. An EAM with a mixed Swiss/EU book holding the same fund across both client types must split the retrocession stream by client domicile, by mandate type, and by position weight — and must do this continuously as positions change. This is not a compliance form; it is a sub-ledger. This is not a standard advertised feature of PMS platforms in this segment [INFERRED — no systematic product review conducted].

For Prive, the strategic read is that compliance automation for this segment is not a feature set bolted onto a portfolio system. It is a separate event-sourced layer sitting between custodian feeds, market data, and client-facing reporting — and it needs to be in place before MiFID III transposition completes, because retrofitting event capture into existing monolithic or manual systems after the fact is materially harder than building it in. No public announcement by any named incumbent (Aladdin, Temenos, Landytech, Objectway) of MiFID III compliance automation has been made as of May 2026 — absence of announcement is not confirmed absence of development, but it represents a confirmed vendor communications gap.

---

## Section 1 — MiFID II: Core Obligations, Client Classification, and Suitability

### 1.1 MiFID II Overview for Swiss EAMs

The Markets in Financial Instruments Directive II (MiFID II, Directive 2014/65/EU), together with MiFIR, is the EU's primary framework governing the provision of investment services. It sets out conduct-of-business obligations, organisational requirements, and investor protection standards for investment firms operating within the European Economic Area.

For Swiss EAMs, MiFID II's application depends on the client base and the EAM's structural footprint. Swiss EAMs are third-country firms under EU law. The EU has not granted Switzerland a general equivalence decision under MiFID II/MiFIR for investment services — a temporary equivalence for Swiss stock exchange venues expired in June 2019 and was not renewed. As of late 2023, only the US, Australia, and Hong Kong hold equivalence status for certain purposes. Swiss EAMs cannot rely on an EU-wide passport to service EU clients.

The practical consequences split by client type. For per se professional clients and eligible counterparties (large institutions, governments, pension funds), EU member states may under their national frameworks allow third-country firms to provide services without establishing an EU branch, subject to local registration or notification. For retail clients or clients who have elected professional status, MiFID II Article 39 requires the third-country firm to establish an authorised branch in the relevant member state. A narrow carve-out exists where the client approaches the EAM entirely on their own initiative ("reverse solicitation"), but ESMA's 2022 supervisory briefing stressed this exemption must be genuine and not manufactured by the firm.

Switzerland's domestic framework — FinSA (Financial Services Act) and FinIA (Financial Institutions Act), in force January 2020 — was explicitly modelled on MiFID II. FinIA requires Swiss EAMs to obtain FINMA authorisation and be supervised by an FINMA-approved supervisory organisation. FinSA imposes conduct obligations structurally parallel to MiFID II — suitability, appropriateness, client classification, conflicts of interest, documentation — but with one notable difference: FinSA permits retrocessions if disclosed and waived by the client, whereas MiFID II imposes a stricter ban for independent advisers and portfolio managers.

For a Swiss EAM with EU-domiciled clients, the result is a dual compliance burden. FINMA/FinSA/FinIA governs the Swiss side. MiFID II governs conduct toward EU clients via local member-state frameworks (for professional clients) or via branch authorisation (for retail). EAMs in the $200M–$2B AUM range are generally too small to run full EU branches and serve professional-classified EU clients through reverse solicitation or through a relationship bank in the EU that holds the MiFID II licence. [INFERRED: many Swiss EAMs in this AUM band de facto rely on custodian banks' MiFID II licences for EU client-facing execution, which transfers some but not all obligations.]

### 1.2 Client Classification

MiFID II establishes three client categories that determine the level of protection a client receives.

**Retail clients** receive the highest level of protection. They are defined negatively — any client who is not a professional client or eligible counterparty. Obligations include full suitability or appropriateness assessments, detailed cost and charges disclosure, suitability reports before every advisory transaction, and the highest best execution documentation standard.

**Professional clients (per se)** are defined in MiFID II Annex II and include authorised investment firms, credit institutions, insurance companies, pension funds, and large corporates meeting two of three size criteria: balance sheet ≥ €20M, net turnover ≥ €40M, or own funds ≥ €2M. Firms still owe them suitability assessments in portfolio management and advisory contexts, but disclosure obligations are less extensive.

**Eligible counterparties** — investment firms, credit institutions, governments — receive the lowest level of protection. Suitability and appropriateness frameworks do not apply.

The **elective professional opt-up** allows a retail client to request reclassification as professional if they meet two of three criteria: a portfolio (cash plus financial instruments) exceeding €500,000; previous work in the financial sector for at least one year; and at least ten significant trades per quarter over the preceding four quarters. The firm must conduct a qualitative assessment and provide a written warning enumerating which protections will be lost. The client must acknowledge this in writing. All documentation must be retained. [Source: MiFID II Annex II, Section II]

### 1.3 Suitability Assessment

The suitability framework applies whenever a firm provides **investment advice** or **discretionary portfolio management**. It does not apply to pure execution services.

ESMA's Guidelines on MiFID II Suitability Requirements (ESMA35-43-3172, revised October 2023) set out expectations across three dimensions:

**Financial situation**: Sources of income, total assets, regular financial commitments, and capacity to bear losses. The assessment determines how much of the portfolio could be lost without materially affecting the client's standard of living.

**Investment objectives**: Investment horizon, risk tolerance, purpose (growth, income, preservation), and — following the 2023 update — sustainability preferences under the EU Taxonomy and SFDR frameworks.

**Knowledge and experience**: Familiarity with instruments in scope, past investment history, nature and volume of past transactions, and relevant education or professional background.

For **portfolio management**, suitability is assessed at the portfolio level — the overall portfolio must be suitable, not each instrument in isolation. For **investment advice**, suitability is assessed at the instrument level for each recommendation. Where leveraged products or complex instruments are involved, ESMA's 2023 guidelines require heightened scrutiny: the firm must assess whether the client understands the leverage mechanism and can absorb amplified losses.

The **suitability report** must specify how the recommendation meets the client's individual profile, why the selected instrument is suitable, and — where the advice is periodic — what has changed since the last assessment. Suitability profiles must be reviewed when the firm becomes aware of a material change in client circumstances. ESMA's guidance makes clear that firms cannot passively wait for clients to disclose changes — periodic re-collection (typically annual for portfolio management clients) is expected.

### 1.4 Appropriateness Assessment

Appropriateness applies when a firm provides **non-advised services** where the instrument is complex (structured products, derivatives, non-UCITS funds, leveraged instruments). It tests only **knowledge and experience**, not financial situation or investment objectives. If the assessment indicates the client does not understand the product, the firm must issue a clear warning before proceeding — the firm may still execute, but the warning must be documented.

An **execution-only exemption** removes even appropriateness for non-complex instruments (exchange-listed shares, bonds, plain UCITS funds, money market instruments) where the client initiates the transaction. ESMA's 2022 guidelines emphasise that firms must not default to execution-only for products that carry meaningful structural risk.

### 1.5 Governance and Organisational Requirements

**Conflicts of interest**: Firms must maintain a written conflicts-of-interest policy, a conflicts register, and disclose unmanageable conflicts to clients specifically enough that they can make informed decisions. For EAMs, common conflicts include recommending products that pay fees, personal account dealing, affiliated custodians receiving more business, and bundled research and execution.

**Inducement rules**: Portfolio managers and independent advisers face a near-complete ban on retaining third-party inducements for EU clients. Non-independent advisers may retain if disclosed and quality-enhancing. Under FinSA, retrocessions are permissible with client waiver — but Swiss EAMs offering DPM to EU clients must follow the stricter MiFID II standard for those clients.

**Record-keeping**: Five years for most records; seven years for portfolio management. Records must be in a tamper-evident format, retrievable on regulator request, and must include electronic communication logs where orders are transmitted electronically. Excel spreadsheets stored on shared drives fail this standard — no audit trail, no version lock.

**Compliance function**: Every investment firm must maintain an effective, independent compliance function reporting directly to the management body. For smaller EAMs, ESMA acknowledges compliance may be performed by a person with other functions, provided no conflict arises.

### Section 1 Requirements Table

| Requirement | What it means (plain English) | EAM Impact | How it is typically solved |
|---|---|---|---|
| Client Classification | Sort every client into Retail, Professional, or Eligible Counterparty before any service begins | Determines which rules apply; wrong classification creates liability for every subsequent transaction | KYC questionnaire at onboarding; annual review; written opt-up documentation for elective professionals |
| Suitability Assessment | For advisory and DPM clients, prove the service fits that client's situation, goals, and risk tolerance | Portfolio-level for DPM, instrument-level for advice; must be refreshed when circumstances change | Digital suitability questionnaire with scored output; mandate templates mapped to client profiles; annual review workflow |
| Suitability Report | Written document showing how advice or DPM meets the client's specific profile | Must accompany each advisory transaction; for DPM, periodic but must accompany account statements | Automated report generation from CRM/portfolio system |
| Appropriateness Assessment | For non-advised execution of complex products, confirm the client understands the risks | Applies to orders outside a DPM mandate in complex instruments; missed triggers are a common exam failure | Product complexity tagging; automated prompt if complex product flagged |
| Appropriateness Warning | If client doesn't understand a product, warn them clearly before proceeding | Must be logged; verbal warnings are insufficient | Timestamped digital warnings in CRM; client e-signature acknowledgement |
| Conflict of Interest Policy | Written policy identifying all conflicts and how each is managed | EAMs exposed where products pay fees, affiliated custodians used, research bundled | Conflicts register in compliance system; annual policy review; disclosure in client agreements |
| Inducement Rules (DPM/Independent) | Portfolio managers and independent advisers cannot keep third-party commissions for EU clients | Swiss EAMs cannot retain retrocessions for EU DPM clients even if FinSA would allow it domestically | Per-client jurisdiction flag; retrocession pass-back mechanism |
| Inducement Rules (Non-Independent) | Non-independent advisers can keep commissions if disclosed and quality-enhancing | Requires written disclosure of all third-party payments before service commences | Standard terms with inducement disclosure; annual summary statements |
| Record-Keeping (5 years) | Retain communications, orders, KYC, and transaction records in tamper-proof format for 5 years | Excel/shared drive fails the standard | CRM or PMS with immutable logs; cloud archiving with version history |
| Record-Keeping (7 years — DPM) | Portfolio management records must be held for 7 years | Covers mandate docs, suitability assessments, valuations, client instructions | Platform-level archiving with defined retention policy |
| Compliance Function | Independent function monitoring compliance, reporting to management | Small EAMs often lack dedicated headcount | Outsourced compliance officer or designated senior partner with documented independence |

### Section 1 Sources

| Source | URL | Verified? |
|---|---|---|
| ESMA Guidelines on MiFID II Suitability (ESMA35-43-3172, 2023) | https://www.esma.europa.eu/document/guidelines-certain-aspects-mifid-ii-suitability-requirements-1 | Yes |
| ESMA Guidelines on Appropriateness (ESMA35-43-3006) | https://www.esma.europa.eu/document/guidelines-certain-aspects-mifid-ii-appropriateness-and-execution-only-requirements | Yes |
| ESMA Guidelines on Compliance Function (ESMA35-36-1946) | https://www.esma.europa.eu/sites/default/files/library/esma35-36-1946_final_report_guidelines_on_certain_aspects_of_the_mifid_ii_compliance_function.pdf | Yes |
| MiFID II Annex II — Client Categorisation | https://www.esma.europa.eu/publications-and-data/interactive-single-rulebook/mifid-ii/annex-ii | Yes |
| Commission Delegated Regulation (EU) 2017/565 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0565 | Yes |
| MiFID II Directive 2014/65/EU | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32014L0065 | Yes |
| FinSA and FinIA overview — Forvis Mazars Switzerland | https://www.forvismazars.com/ch/en/insights/press/press-articles/finia-and-finsa-the-swiss-mifid-ii | Yes |
| Switzerland equivalence loss — Bruegel | https://www.bruegel.org/blog-post/consequences-switzerlands-lost-equivalence-status | Yes |

---

## Section 2 — MiFID II: Costs, Charges, and PRIIPs Interaction

### 2.1 Ex Ante Cost Disclosure

Under Article 24(4) of MiFID II, investment firms must provide comprehensive cost and charges information in good time before any investment service is provided or any transaction is executed. "In good time" means before the client is bound — not contemporaneous with execution.

The substance of what must be disclosed is governed by Articles 50–51 of Delegated Regulation (EU) 2017/565 and Annex II thereto. The disclosure must cover: (i) all costs relating to the investment service itself (management fees, custody fees, advisory fees, platform costs), and (ii) all costs relating to the financial instruments recommended or transacted in (product costs including entry/exit loads, ongoing charges, performance fees). Third-party payments (retrocessions, trailer fees) received by the firm must also be itemised.

Article 50(2) requires firms to aggregate these costs into a total figure while also disaggregating them into constituent parts. The client must receive both the monetary amount and the percentage of the invested sum for each line item, plus the total. The disclosure must reflect the specific transaction size and anticipated holding period — not a generic schedule. For multi-custodian EAMs, this creates a data assembly problem: custodian tariff data must be sourced per custodian per instrument class before each disclosure can be issued.

### 2.2 Ex Post Annual Costs and Charges Report

Article 25(6) of MiFID II and Article 60 of Delegated Regulation 2017/565 require firms providing portfolio management to send clients an annual statement, in durable medium, setting out all costs and charges incurred during the year. This is a personalised, client-specific accounting of what that individual client actually paid.

The cost taxonomy under Annex II of 2017/565 mandates categorisation into: **one-off costs** (entry/exit charges), **ongoing costs** (management fees, fund TER/OCF, distribution fees), **transaction costs** (brokerage, spreads, taxes, levies), and **incidental costs** (performance fees). Each category must be shown in both monetary terms (absolute amount for that client) and as a percentage of the average portfolio value over the period.

The personalisation requirement is operationally the hardest element for Excel-dependent EAMs. Generic illustrations — a percentage applied to a model portfolio — are non-compliant. ESMA's supervisory review has found that firms providing only percentage-based or representative amounts without individualising to the client's actual invested amounts are in breach. For a multi-custodian EAM, this means aggregating transaction-level cost data from multiple custodians, consolidating at the client portfolio level, mapping to the correct taxonomy category, and producing a single coherent report per client.

### 2.3 Inducements and Retrocessions

MiFID II draws a line between portfolio managers/independent advisers and all others.

For portfolio managers and independent advisers, Article 24(7) and (8) prohibits retaining any fee, commission, or monetary benefit paid by third parties in connection with services to clients. The only exception is minor non-monetary benefits that genuinely enhance service quality, are disclosed, and are of a scale that cannot impair the duty to act in the client's best interest. In practice, trail commissions and fund retrocessions received by a Swiss EAM under a discretionary portfolio management mandate with EU clients must be passed through to the client, not retained.

For non-independent advisers, retention is permissible under the quality of service enhancement test: the firm must demonstrate the third-party payment is designed to enhance service quality and cannot impair the best-interest duty, and must be disclosed. Firms must maintain an internal register of all inducements received and their mapping to quality-enhancement measures.

**The Swiss dimension adds material complexity.** FinSA takes a structurally different approach: retrocessions are permissible under FinSA, but must be disclosed and may only be retained if the client gives an informed waiver. The default under FinSA is pass-through. This creates a fork for Swiss EAMs: for Swiss-domiciled clients, FinSA's waiver mechanism applies. For EU-domiciled clients, MiFID II's stricter prohibition (for portfolio managers) applies regardless of where the EAM is established. Swiss EAMs cannot rely on a FinSA client waiver to justify retaining retrocessions when the underlying client is resident in Germany or France. This dual-standard obligation requires EAMs to tag clients by regulatory jurisdiction and apply different revenue treatment accordingly — a workflow very few Excel-based operations have systematised.

### 2.4 PRIIPs KID Interaction

The PRIIPs Regulation (EU) 1286/2014 requires manufacturers of Packaged Retail and Insurance-based Investment Products to produce a standardised Key Information Document before retail investors invest, including a Summary Cost Indicator presenting total costs as a percentage over a recommended holding period.

The overlap with MiFID II is intentional but imperfect. Where a firm's MiFID II cost disclosure draws on PRIIPs KID data for the product cost component, it will satisfy the product-level cost disclosure requirement under MiFID II. In practice, the PRIIPs KID handles product costs (fund-level charges, transaction costs inside the fund) while MiFID II covers service costs on top (the EAM's management fee, custodian charges). An EAM must combine both to produce a compliant disclosure.

The divergence sharpened materially from **1 January 2025**, when the UCITS derogation for the old transaction cost calculation method expired. Under Annex VI of Regulation (EU) 2021/2268, fund managers must now use the **arrival price methodology** to calculate implicit transaction costs disclosed in the KID.

**What the arrival price methodology requires technically:** For each transaction executed inside the fund, the cost is defined as the percentage difference between the market mid-price at the time the order is placed (the "arrival price") and the actual execution price. This requires, at the transaction level: (a) a precise timestamp for when the order reached the market, (b) the mid-price of the instrument at that exact moment (intraday tick data, not end-of-day), and (c) the actual execution price from the trade confirmation. This must be computed for every individual trade, then annualised over a rolling three-year lookback. For illiquid instruments where intraday mid-prices are not observable from standard market data, model-based valuations are required.

This is why specialist TCA vendors are necessary rather than optional. Broadridge has built arrival price calculation into its PRIIPs reporting suite. RiskConcile's TCALab product is purpose-built for this calculation. AVS Valuation also offers a dedicated solution. Custodian aggregators Flanks and Pretim do not natively produce arrival price transaction cost calculations — their scope is portfolio position and valuation aggregation; the granular trade-timestamp and intraday pricing data required for arrival price computation sits outside their current feature set [INFERRED — requires direct vendor verification before acting on this assessment]. An EAM building a compliant PRIIPs reporting workflow cannot rely solely on its custodian aggregator for the product cost component.

### 2.5 Portfolio Decline Reporting (10% Rule)

Article 62 of Delegated Regulation (EU) 2017/565 requires that investment firms providing discretionary portfolio management notify a retail client whenever the overall value of the portfolio depreciates by 10% or more from the start of the reporting period, and at each subsequent 10% depreciation. The notification must be made no later than the end of the business day on which the threshold is breached. It must be provided in a durable medium.

Note: the UK revoked this requirement via SI 1297/2022 effective January 2023. For EAMs serving EU clients, it remains in force.

The practical burden for a multi-custodian EAM is that portfolio valuation must be monitored in near-real-time, aggregated across all custodians. An EAM checking end-of-day positions manually via Excel cannot reliably meet an intraday end-of-business-day notification deadline during a sharp market sell-off.

### Section 2 Requirements Table

| Requirement | What it means (plain English) | EAM Impact | How it is typically solved |
|---|---|---|---|
| Ex ante cost disclosure | Before any trade or new service, show every cost — fees, fund charges, transaction costs, retrocessions — in both cash and % terms, itemised and totalled | Multi-custodian EAMs must pull different fee schedules per custodian per instrument class before each disclosure; Excel-based workflows struggle with consistency | Template-based disclosure systems pre-populated with custodian tariff libraries |
| Ex post annual report | Once a year, send each client a personalised statement of every cost they actually paid — not estimates or model illustrations | Requires transaction-level cost extraction from every custodian, mapped to MiFID taxonomy, aggregated per client | Portfolio aggregation layer for position/transaction data, plus a reporting layer that applies the taxonomy and personalises per client |
| Inducement disclosure (non-independent) | Disclose any retrocessions or trail fees received from product manufacturers | Requires written disclosure of all third-party payments before service commences | Standard terms with inducement disclosure; annual summary statements |
| Inducement pass-through (DPM/EU clients) | Portfolio managers serving EU clients cannot retain retrocessions, regardless of FinSA client waiver | Requires client-by-client jurisdiction tagging; different revenue treatment per client domicile | Dual-regime client tagging; fee transparency module logging and allocating third-party payments by client domicile |
| PRIIPs KID interaction | The fund's KID gives the product cost figures; MiFID II disclosure must combine those with service costs | EAMs must source KID data per fund per share class and combine with service cost data | Fund data feeds (Bloomberg, FinData, or direct from fund administrators) supplying KID cost figures in structured format |
| Arrival-price TCA (PRIIPs, mandatory Jan 2025) | Transaction costs inside funds must be calculated using the market mid-price at exact order time vs. actual execution price, averaged over 3 years | Not a direct EAM obligation, but the KID figures flowing into EAM disclosures are now computed this way; custodian aggregators do not cover this [INFERRED] | Specialist TCA vendors: Broadridge, RiskConcile (TCALab), AVS Valuation |
| 10% decline notification | If a discretionary portfolio falls 10% from its period-start value, the EU client must be told by end of that business day | Requires real-time or near-real-time aggregated portfolio valuation; manual/Excel workflows will miss the intraday deadline | Automated portfolio monitoring with alert-trigger logic across all custodian feeds |

### Section 2 Sources

| Source | URL | Verified? |
|---|---|---|
| MiFID II Directive 2014/65/EU, Article 24(4) and 24(7)/(8) | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32014L0065 | Yes |
| Commission Delegated Regulation (EU) 2017/565, Articles 50–51 and Annex II | https://eur-lex.europa.eu/eli/reg_del/2017/565/oj/eng | Yes |
| PRIIPs Regulation (EU) 1286/2014 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R1286 | Yes |
| PRIIPs RTS Amendment (EU) 2021/2268, Annex VI (arrival price) | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021R2268 | Yes |
| ESMA Q&A on costs and charges (updated 2024/2025) | https://www.esma.europa.eu/publications-and-data/questions-answers/2025 | Yes |
| ESMA Call for Evidence: inducements and costs and charges disclosure under MiFID II | https://www.esma.europa.eu/sites/default/files/library/call_for_evidence_impact_of_the_inducements_and_costs_and_charges_disclosure_requirements_under_mifid_ii__0.pdf | Yes |
| Value & Risk: PRIIPs Arrival Price methodology explainer | https://www.valuerisk.com/insights/priips-arrival-price | Yes |
| Broadridge: Arrival price methodology for PRIIPs | https://www.broadridge.com/article/asset-management/arrival-price-methodology-takes-shape-ahead-of-deadline | Yes |
| RiskConcile TCALab | https://info.riskconcile.com/tcalab | Yes — vendor source; product scope claims unverified independently |
| AVS Valuation: PRIIPs TCA solution | https://www.avs-valuation.com/avs-offers-solutions-for-the-regulatory-transaction-cost-analysistca-in-accordance-with-the-priips-regulation/ | Yes — vendor source |
| Anevis Solutions: PRIIPs 2024/25 arrival price method | https://www.anevis-solutions.com/2023/priips-2024-25-arrival-price-method-for-transaction-costs/ | Yes |
| Citywire Switzerland: FinSA vs MiFID II key differences | https://citywire.com/ch/news/finsa-vs-mifid-ii-the-key-differences-wms-need-to-know/a1302846 | Yes |
| FINMA circular on FinSA rules of conduct (in force Jan 2025) | https://www.grantthornton.ch/en/insights/finma-new-finsa-circular/ | Yes |
| Flanks/Pretim arrival-price gap | [INFERRED] — no public product documentation reviewed confirming or denying this; verify directly with vendors | No — INFERRED |

---

## Section 3 — MiFID II: Transaction Reporting, Best Execution, and Communication Surveillance

### 3.1 Transaction Reporting — Article 26 MiFIR / RTS 22

Article 26(1) MiFIR (Regulation 600/2014) imposes a reporting obligation on investment firms that execute transactions. RTS 22 (Commission Delegated Regulation (EU) 2017/590) provides the technical framework: up to 65 data fields covering the executing entity's LEI, counterparty LEI, instrument identifier (ISIN), price, quantity, trade timestamp (UTC, to millisecond precision), trading venue, and client identification data. Reports must be submitted no later than close of business on T+1 to the National Competent Authority (NCA) of the firm's home member state, either directly or via an Approved Reporting Mechanism (ARM).

**The transmission exemption and its conditions.** An EAM that does not itself execute — but instead transmits a client order to a custodian bank or broker for execution — can invoke the transmission of order exemption under Article 4 of RTS 22. The transmitting EAM is relieved of its own reporting obligation *provided* four conditions are met: (i) a written agreement exists specifying the receiver will report; (ii) the receiver is itself an EEA investment firm subject to Article 26 MiFIR; (iii) the EAM passes all required data fields as part of the transmitted order; and (iv) the EAM has adequate systems to ensure the data transmitted is complete and accurate.

Transmission to a custodian domiciled outside the EEA — including Switzerland — does not satisfy condition (ii). The exemption cannot be triggered where the receiving entity is a Swiss-only bank rather than an EEA-registered firm [exact applicability is fact-dependent and requires case-by-case legal analysis per custodian and per EAM structure].

**Liability stays with the EAM.** Even where an ARM is used or where a custodian reports on the EAM's behalf, Article 26(7) MiFIR is unambiguous: the investment firm "shall have responsibility for the completeness, accuracy and timely submission of the reports submitted on its behalf." Delegation transfers the operational function, not the liability. [INFERRED: a Swiss EAM without an EU branch that executes transactions through EEA counterparties using a Swiss-only custodian may face a regulatory gap where neither the Swiss nor EU framework fully captures the obligation — this requires case-by-case legal analysis.]

**MiFIR Review 2024 changes.** Regulation (EU) 2024/791 extended the scope of Article 26 reporting to OTC derivatives subject to post-trade transparency under new Article 8a(2). ESMA consulted in October 2024 on comprehensive revisions to RTS 22; final technical standards are expected during 2025–2026. EAMs should treat the current RTS 22 field set as live but subject to revision.

### 3.2 Best Execution — Article 27 MiFID II / RTS 28

Article 27 MiFID II requires investment firms executing client orders to take all sufficient steps to achieve the best possible result for the client. Best execution is assessed across: total consideration (price plus explicit costs), speed, likelihood of execution and settlement, size and nature of the order, and any other relevant consideration. For retail clients, price and costs are the dominant factors.

Every investment firm subject to Article 27 must maintain and implement a written **Order Execution Policy** (OEP). The OEP must list execution venues used for each class of financial instrument, explain the relative importance given to each best execution factor, distinguish retail from professional client treatment, and be communicated to clients before providing services. Client consent is required. For EAMs operating across multiple custodians, the OEP must document how the EAM selects which custodian handles which order type.

**RTS 27 (repealed) and RTS 28.** RTS 27 required execution venues to publish quarterly data on execution quality. The MiFID II Review Directive (adopted February 2024) deleted Article 27(6) MiFID II, which was the basis for both RTS 27 and the annual RTS 28 top-five venues publication. ESMA confirmed in a public statement dated 13 February 2024 (ESMA35-335435667-5871) that it does not prioritise supervisory actions against firms for failure to publish RTS 28 reports, pending national transposition of the amending Directive. However, ESMA simultaneously stressed that the underlying best execution obligation under Article 27 — the duty to achieve best results and maintain an OEP — remains fully in force. [UNVERIFIED: whether all EU member states have completed national transposition of the RTS 28 deletion as of May 2026 — firms should verify with their home NCA.]

ESMA published a Final Report on Order Execution Policies (ESMA35-335435667-6253, April 2025) following the MiFID II Review, introducing new requirements on OEP content and disclosure. EAMs should monitor this for the effective date.

### 3.3 STOR Reporting — Article 16(2) MAR

Article 16(2) of the Market Abuse Regulation (MAR, Regulation (EU) 596/2014) requires any person professionally arranging or executing transactions to establish effective arrangements to detect and report suspicious orders or transactions. Where a reasonable suspicion of market abuse arises, a Suspicious Transaction and Order Report (STOR) must be submitted to the competent NCA without delay — in practice, same business day where operationally feasible.

A STOR is triggered by reasonable suspicion, not certainty. Indicators include unusual order timing relative to a corporate announcement, atypically large trades in illiquid instruments, and patterns consistent with front-running. ESMA's Q&As on MAR (ESMA70-145-111) provide guidance on what constitutes reasonable suspicion.

**Interaction with Swiss MROS reporting.** MROS (Money Laundering Reporting Office Switzerland) receives suspicious activity reports under the Anti-Money Laundering Act (AMLA). These two regimes are **additive, not duplicative**: STOR addresses market integrity (market abuse) and routes to an NCA (securities supervisor). MROS addresses predicate offences and proceeds of crime (AML) and routes to a criminal intelligence unit. An event can require both. A suspected insider trade may constitute potential market abuse (STOR to NCA) and be predicated on proceeds of an offence (MROS report). Few Swiss EAMs have integrated workflows for both — they typically exist in separate compliance procedures, if they exist formally at all. [INFERRED: the interaction between ESMA STOR guidelines and FINMA's expectations is not formally codified in a single bilateral instrument — EAMs navigating both should seek legal advice on sequencing and privilege implications.]

### 3.4 Communication Surveillance and Record-Keeping — Article 16(6)-(7) MiFID II

Article 16(7) MiFID II requires investment firms to record all telephone conversations and electronic communications that relate to the reception, transmission, and execution of client orders, and to the conclusion of transactions for own account. This covers communications that *may lead to* a transaction — not only those that result in one. Records must be retained in a durable medium that cannot be altered and must be accessible to the NCA on request. Minimum retention: five years. NCAs may require up to seven years.

**The WhatsApp problem.** ESMA has been explicit: investment firms must take all reasonable steps to prevent employees from conducting relevant communications on platforms the firm cannot record. Where a firm permits communication via WhatsApp, Signal, or other end-to-end encrypted platforms, and those communications relate to investment decisions or orders, the firm is in breach. Global fines for off-channel communication failures exceeded $3 billion across 100+ firms as of 2024 — predominantly SEC actions but with ESMA annual sanction totals rising 143% year-on-year. For Swiss EAMs whose relationship managers routinely use personal messaging apps with clients — a structural norm in private wealth — this is the highest-probability compliance failure in this obligation cluster.

"Relevant communications" includes any communication containing investment direction, order instructions, portfolio discussion, or a recommendation. A WhatsApp message saying "please sell the Apple position" is in scope. A message confirming a lunch meeting is not. The line is whether the communication contains or may lead to a transaction-related decision.

### 3.5 Periodic Reporting to Clients

For portfolio management clients, MiFID II requires periodic reporting at minimum quarterly intervals (replacing the previous semi-annual standard). Reports must include: portfolio valuation at start and end of period; itemised transaction listing; income received; fees and charges incurred; portfolio performance; and — where applicable — a suitability assessment confirming the portfolio remains aligned with the client's objectives.

Where a portfolio contains leveraged instruments or instruments with contingent liability, the firm must notify the client each time the portfolio depreciates by 10% from the period-start value, by end of business on the day the threshold is crossed. For EAMs managing multi-asset portfolios with structured products, options, or leveraged ETFs, this requires near-real-time monitoring — a capability that manual workflows structurally cannot provide.

### Section 3 Requirements Table

| Requirement | What it means (plain English) | EAM Impact | How it is typically solved |
|---|---|---|---|
| Transaction Reporting — Article 26 MiFIR / RTS 22 | Every executed trade in a MiFIR-in-scope instrument must be reported to the NCA by T+1, with up to 65 data fields including LEI, ISIN, price, volume, and timestamp | EAMs using Swiss-only custodians cannot invoke the transmission exemption (requires case-by-case legal analysis); EAM bears liability regardless of who files | Written transmission agreement with each EEA custodian; custodian routes reports via ARM; EAM audits report quality periodically |
| Best Execution Policy — Article 27 MiFID II | EAM must have a written Order Execution Policy, share it with clients, and demonstrate it achieves best results across price, cost, speed, and likelihood of execution | Multi-custodian EAMs must document why they route orders to each custodian and evidence ongoing monitoring; RTS 28 publication effectively abolished but underlying duty unchanged | OEP drafted per instrument class and custodian; annual internal review of execution quality; documented rationale on file for each custodian relationship |
| STOR Reporting — Article 16(2) MAR | If a trade or order raises reasonable suspicion of market abuse, the firm must report to the NCA same day | EAMs must have a surveillance process to identify anomalous patterns and a documented escalation procedure | Compliance officer review of flagged trades; MAR suspicion register; written STOR procedure; separate MROS procedure for AML events (additive, not duplicative) |
| Communication Recording — Article 16(7) MiFID II | All phone calls, emails, and messages relating to orders or investment decisions must be recorded, retained 5–7 years, in tamper-evident format | Most boutique EAMs lack recording infrastructure; WhatsApp use with clients creates unresolvable gaps | Dedicated compliant communication platform capturing and archiving all relevant channels; explicit prohibition on investment instructions via personal messaging apps |
| Quarterly Portfolio Statements | Portfolio management clients receive at minimum quarterly statements covering valuation, transactions, fees, and performance | Multi-custodian EAMs face a data consolidation challenge; Excel-based aggregation does not meet the durable medium standard | Custodian data feeds consolidated into a PMS; reports generated in PDF in durable medium; quarterly dispatch with audit log |
| Leveraged Portfolio 10% Alert | Same-day notification when a leveraged portfolio falls 10% from period-start value | Requires real-time or end-of-day aggregated portfolio valuation — incompatible with batch Excel workflows | Live custodian API feeds or end-of-day automated NAV calculation with automated client notification workflow |

### Section 3 Sources

| Source | URL | Verified? |
|---|---|---|
| MiFIR Regulation (EU) 600/2014, Article 26 — ESMA Interactive Rulebook | https://www.esma.europa.eu/publications-and-data/interactive-single-rulebook/mifir/article-26-obligation-report-transactions | Yes |
| Commission Delegated Regulation (EU) 2017/590 (RTS 22) | https://ec.europa.eu/finance/securities/docs/isd/mifid/rts/160728-rts-22-annex_en.pdf | Yes |
| ESMA Consultation Paper, Review of RTS 22, October 2024 | https://www.esma.europa.eu/sites/default/files/2024-10/ESMA12-2121844265-3745_Consultation_Paper_Review_of_RTS_22_on_transaction_data_reporting.pdf | Yes |
| ESMA Public Statement on RTS 28 deprioritisation, 13 Feb 2024 | https://www.esma.europa.eu/sites/default/files/2024-02/ESMA35-335435667-5871_Public_Statement_on_deprioritisation_of_supervisory_actions_on_RTS_28_reporting.pdf | Yes |
| ESMA Final Report on MiFID II RTS on Order Execution Policies, April 2025 | https://www.esma.europa.eu/sites/default/files/2025-04/ESMA35-335435667-6253_Final_Report_-_MiFID_II_RTS_on_order_execution_policies.pdf | Yes |
| MAR Regulation (EU) 596/2014, Article 16 — ESMA Q&As on MAR (ESMA70-145-111) | https://www.esma.europa.eu/sites/default/files/library/esma70-145-111_qa_on_mar.pdf | Yes |
| MiFID II Directive 2014/65/EU, Article 16(7) — ESMA Interactive Rulebook | https://www.esma.europa.eu/publications-and-data/interactive-single-rulebook/mifid-ii/article-16-organisational-requirements | Yes |
| ESMA clarifies position on call taping under MiFID II | https://www.esma.europa.eu/press-news/esma-news/esma-clarifies-position-call-taping-under-mifid-ii | Yes |
| MiFIR Review — Regulation (EU) 2024/791 | https://eur-lex.europa.eu/eli/reg/2024/791/oj | Yes |
| FINMA Asset Management supervision | https://www.finma.ch/en/supervision/asset-management/ | Yes |

---

## Section 4 — MiFID III: Changes from MiFID II and EAM Impact

### 4.1 Overview

"MiFID III" refers to the MiFIR Review package: **Directive (EU) 2024/790** amending MiFID II and **Regulation (EU) 2024/791** amending MiFIR, both published in the Official Journal on 8 March 2024 and in force from 28 March 2024. The package is supplemented by ongoing ESMA Level 2/3 work (RTS revisions, Q&As, the consolidated tape framework). Core conduct-of-business and reporting changes phase in from **September 2025**, with research unbundling and the consolidated tape framework operative from **June 2026**. Several implementing technical standards remain **[IN TRANSPOSITION]** as of May 2026.

For Swiss EAMs, MiFID III is not directly applicable — Switzerland is a third country — but it bites through three channels: (i) EU clients booked at EU custodians; (ii) EU-domiciled funds in model portfolios; and (iii) FINMA's practice of importing EU conduct standards via FinSA/FinIA supervisory expectations where they represent international good practice. This creates a dual-rulebook challenge that smaller EAMs consistently under-resource.

### 4.2 Suitability — What Changed

MiFID III tightens, not rewrites, Article 25. The suitability report must now document, at the point of recommendation, **why this specific instrument is suitable for this client at this moment** — not merely that a suitability check was performed (Directive 2024/790, recitals and Art. 25 amendments). The periodic review obligation is extended: portfolio-managed clients must receive a forward-looking suitability statement, not just a backward-looking one. ESMA's updated suitability guidelines introduce a sharper "best interest of the client" framing that goes beyond MiFID II's "act honestly, fairly and professionally."

For Swiss EAMs, FinSA Art. 12 and Art. 15 already require comparable evidence, but FinSA permits a lighter regime for "professional clients" that MiFID III does not. EAMs serving EU retail clients via EU custodians need the heavier MiFID standard regardless of FinSA classification.

### 4.3 Cost Reporting — What Changed

This is the largest operational change in MiFID III. Three new requirements stack on top of MiFID II's existing framework:

1. **Instrument-level disaggregation**: costs must now be shown per instrument, not just at portfolio level.
2. **Mandatory three-category split**: direct costs, indirect costs (e.g., fund TERs), and inducements must be shown separately — not merged into an aggregated "ongoing cost" figure.
3. **Cumulative cost-on-return illustration**: the ex post annual statement must include an illustration showing the cumulative effect of costs on returns over the holding period.

Ex ante disclosure must be provided in a standardised format before each transaction. For Swiss EAMs, FinSA Art. 8 cost transparency is materially less granular. Firms with EU-facing books will need to run a parallel reporting stack for those clients.

### 4.4 Transaction Reporting — What Changed (RTS 22 Successor) [IN TRANSPOSITION]

The MiFIR Review extends Article 26 MiFIR. The RTS 22 successor (ESMA final report expected late 2025/2026) introduces:
- Expanded **LEI requirements** (counterparty and decision-maker LEIs in more scenarios)
- An **order-to-transaction linking identifier** making reconstruction of the order chain unambiguous
- A **narrowed transmission exemption**: available only where the full required dataset (including all new identifiers) is transmitted, meaning many EAMs will need to produce reports themselves or upgrade transmission agreements
- New explicit linkage between transaction reporting anomalies and **STOR escalation** under MAR [INFERRED for precise wording until RTS 22 successor is final]

Swiss EAMs are not directly in scope of Article 26 MiFIR, but EU custodians will demand richer upstream data feeds regardless — the burden lands on the EAM contractually.

### 4.5 Research Unbundling — What Changed (June 2026)

MiFID III reverses MiFID II's strict separation. Firms may again use a **joint payment** (bundled execution + research) model, provided they disclose the research budget, allocation, and quality assessment to clients (Directive 2024/790, amendments to Art. 24). **SME research** (issuers below approximately €1bn market cap) benefits from a lighter-touch carve-out designed to revive analyst coverage. Disclosure obligations apply regardless of the payment model chosen.

Swiss EAMs using EU brokers inherited the MiFID II unbundling restriction commercially. The reversal simplifies procurement but adds a disclosure layer for EU-facing clients.

### 4.6 Communication Surveillance — What Changed

MiFID III does not introduce a new dedicated regime, but ESMA's 2024 guidance and the Directive's recitals confirm explicit scope expansion to **WhatsApp, Signal, Teams, and similar messaging apps** when used for client-facing or order-related communication. Retention must be in a **format that preserves metadata and is reproducible on request** (typically 5–7 years). FINMA Circular 2008/7 on record-keeping is principles-based and less specific — Swiss EAMs serving EU clients should align to the stricter MiFID standard.

### 4.7 Best Execution — What Changed

**RTS 27 is confirmed repealed** (Regulation 2024/791). **RTS 28** is being replaced by a slimmer, principles-based standard **[IN TRANSPOSITION]**. The new **consolidated tape** for equities and bonds (operative phased from 2026) becomes the reference dataset against which EAMs must monitor execution quality — a meaningful uplift from the fragmented venue-by-venue analysis that characterised MiFID II.

### 4.8 DORA Overlay

**Regulation (EU) 2022/2554 (DORA)** has applied since **17 January 2025**. It overlays MiFID III with ICT risk management requirements, **mandatory vendor oversight clauses** (Art. 30 DORA prescribes contractual minimums), **major incident reporting** within tight windows (initial notification within 4 hours of classification, intermediate within 72 hours, final within one month), and threat-led penetration testing for significant firms. Swiss EAMs are not directly in scope, but EU custodians and EU vendors will pass DORA clauses through contractually. FINMA's 2023 operational risk circular (FINMA-RS 2023/1) is conceptually aligned, so de facto compliance is required for any EAM with meaningful EU vendor relationships.

### 4.9 Swiss Specifics — Alignment vs. Divergence

Aligned with MiFID III direction: suitability documentation, communication retention principles, ICT resilience direction. Divergent: cost-reporting granularity (FinSA lighter), transaction reporting (no Swiss equivalent of Art. 26 MiFIR; FINMA relies on SIX/BX reporting), and best execution (FINMA expectations less prescriptive than RTS 28 successor). The practical rule for $200M–$2B EAMs: **build to MiFID III for any EU-touching book; run FinSA/FinIA as the floor for Swiss-only books**.

### Section 4 Change Table

| MiFID III Change | What changed from MiFID II (the delta) | EAM Impact | How it is typically solved |
|---|---|---|---|
| Suitability — point-in-time justification | Suitability report must explain why this instrument suits this client now; "best interest" framing replaces "honest, fair, professional" | Per-recommendation narrative field required; periodic forward-looking statement for DPM mandates | PMS/CRM template with mandatory rationale field; pre-trade suitability engine; second-line sampling |
| Cost reporting — instrument-level + 3-category + illustration | Disaggregation per instrument; direct/indirect/inducements split; cumulative-cost-on-return illustration; standardised ex ante before each trade | Re-engineer cost engine; source TER/PRIIPs data per ISIN; produce ex ante doc per order; parallel stack for EU-facing clients | Vendor cost-and-charges engine fed by PRIIPs/EMT data; client portal with on-demand illustration |
| Transaction reporting — RTS 22 successor [IN TRANSPOSITION] | Expanded LEI use; order-link identifier; narrower transmission exemption; STOR linkage | EAMs relying on custodian transmission must verify full dataset coverage or self-report; STOR workflow tied in | Direct ARM connection or upgraded custodian transmission contract; integrated STOR detection module |
| Research unbundling — joint payment re-permitted (June 2026) | Bundled execution+research allowed again; disclosure required regardless; SME research carve-out | Choose payment model; produce annual research budget/quality disclosure to EU clients | Research procurement policy; client disclosure pack; tracking of SME vs. non-SME spend |
| Communication surveillance — messaging apps explicitly in scope | Explicit inclusion of WhatsApp, Signal, Teams; metadata-preserving retention required | Block or capture messaging apps used with clients; 5–7 year retention with reproducibility | Mobile capture solution (archiving gateway); written policy and attestation; periodic sampling |
| Best execution — RTS 27 repeal, CT as reference [IN TRANSPOSITION for RTS 28 successor] | RTS 27 gone; RTS 28 slimmed; consolidated tape becomes execution quality reference | Redesign best-ex monitoring against CT data; update policy and client disclosure | TCA tool consuming CT feed; quarterly best-ex committee; updated policy document |
| DORA overlay (live January 2025) | ICT risk framework; Art. 30 vendor clauses; 4h/72h/1-month incident reporting; TLPT for significant firms | Vendor contract remediation; incident playbook; ICT risk register; board-level ICT governance | DORA-compliant vendor addenda; incident-response runbook; GRC tool with ICT register |
| Swiss layer — dual rulebook | MiFID III applies to EU-touching books; FinSA/FinIA applies to Swiss-only books; standards diverge on cost granularity, transaction reporting, best execution | Maintain mapping of which rule applies per client and booking centre; default to stricter where overlap | Client-segmentation matrix; policy stack with EU vs. Swiss variants; FINMA-aligned audit trail |

### Section 4 Sources

| Source | URL | Verified? |
|---|---|---|
| Directive (EU) 2024/790 (MiFID II amending directive) | https://eur-lex.europa.eu/eli/dir/2024/790/oj | Yes |
| Regulation (EU) 2024/791 (MiFIR Review) | https://eur-lex.europa.eu/eli/reg/2024/791/oj | Yes |
| Regulation (EU) 2022/2554 (DORA) | https://eur-lex.europa.eu/eli/reg/2022/2554/oj | Yes |
| ESMA Final Guidelines on Suitability (ESMA35-43-3172, 2024) | https://www.esma.europa.eu/ (search ESMA35-43-3172) | Partial — re-verify before client use |
| ESMA work programme on consolidated tape | https://www.esma.europa.eu/policy-activities/mifid-ii-and-mifir | Yes |
| ESMA Final Report on RTS 22 and RTS 24 (2025) | https://www.esma.europa.eu/sites/default/files/2025-06/ESMA12-2121844265-4779_Final_Report_on_RTS_22_and_24.pdf | Yes |
| FINMA-RS 2023/1 Operational Risks and Resilience | https://www.finma.ch/en/documentation/circulars/ | Yes |
| Swiss FinSA (FIDLEG) full text | https://www.fedlex.admin.ch/eli/cc/2019/758/en | Yes |
| Swiss FinIA (FINIG) full text | https://www.fedlex.admin.ch/eli/cc/2018/801/en | Yes |

---

## Section 5 — MiFID II Risk and Automation Summary Table

This table maps each MiFID II obligation to: the compliance failure risk (what happens if not met), the technology layer required, and whether it can be handled manually or requires automation.

| MiFID II Requirement | Compliance failure risk | Technology layer required | Manual or automation required? |
|---|---|---|---|
| Client classification | Every subsequent transaction creates liability if wrong category; all protections must be retrospectively applied | CRM with client classification workflow and documented opt-up trail | Manual feasible for small books (under 30 clients); automation required above 50 clients |
| Suitability assessment + report | Breach per recommendation; regulatory sanction; civil liability if client suffers loss | Suitability questionnaire engine with scored output + report generation | Automation required for regular advisory flow; manual feasible only for very infrequent transactions |
| Appropriateness assessment + warning | Breach per complex-product transaction; fines; product mis-selling liability | Product complexity tagging + pre-trade appropriateness prompt | Automation required if complex products are transacted with any frequency |
| Ex ante cost disclosure | Non-compliant service; voidable transactions; regulatory fine | Custodian fee library + real-time cost calculation engine | Cannot be done at transaction speed in a manual workflow; automation required |
| Ex post annual cost report | Non-compliant periodic report; ESMA/NCA supervisory action; client complaints | Portfolio aggregation layer + MiFID cost taxonomy engine | Automation required; producing 50+ personalised reports manually without errors is not operationally viable |
| Inducement disclosure + pass-through (DPM/EU clients) | Breach of inducement ban; revenue clawback; regulatory action | Per-client retrocession tracking with jurisdiction flag (MiFID vs. FinSA) | Automation required for mixed Swiss/EU books |
| 10% portfolio decline notification | Breach of Article 62 DR 2017/565; regulatory sanction; client complaint if loss worsened | Real-time or end-of-day portfolio valuation with automated alert | Automation required; batch/manual workflows structurally cannot meet intraday deadline |
| Transaction reporting (RTS 22) | NCA enforcement; fines up to 10% of annual turnover under MiFID II | Transmission agreement with EEA custodian or direct ARM connection | Automation required; 65-field T+1 report is not manually achievable at scale |
| Order Execution Policy + best execution monitoring | Regulatory finding; client claims for execution failures | OEP documentation + execution quality monitoring tool | Policy drafting: manual. Ongoing monitoring: automation required for meaningful sample |
| STOR reporting | Regulatory enforcement under MAR; criminal referral in extreme cases | Surveillance system with anomaly detection + STOR filing workflow | Automation for detection; manual for STOR drafting and review |
| Communication recording | Regulatory breach; evidence destruction risk; fines (global precedent: $3B+ across 100+ firms) | Communication archiving platform with metadata-preserving retention | Automation required; manual transcription/logging fails tamper-evident standard |
| Quarterly portfolio statements | Non-compliant periodic report; client dispute risk | Portfolio management system with templated report generation | Automation required for multi-custodian aggregation; manual viable only for very small single-custodian books |
| Record-keeping 5–7 years tamper-evident | Regulatory examination failure; inability to defend client disputes | Immutable data store or compliant archiving system | Automation required; Excel and shared drives fail the tamper-evident standard by design |

---

## Key Signals

| # | Signal | Source | Confidence |
|---|---|---|---|
| 1 | Swiss-only custodians break the RTS 22 transmission exemption — EAM bears full transaction-reporting liability with no filing infrastructure. Exact applicability is fact-dependent; requires case-by-case legal analysis per custodian and EAM structure. | Section 3 | Medium |
| 2 | PRIIPs arrival-price TCA (mandatory January 2025) is not served by custodian aggregators Flanks or Pretim [INFERRED — requires direct vendor verification]. Specialist TCA vendors (Broadridge, RiskConcile, AVS Valuation) are the known solution providers. | Section 2 | Medium |
| 3 | MiFID II/III retrocession dual standard (FinSA permits, MiFID II prohibits for EU DPM clients) requires per-client per-position revenue attribution — this is not a standard advertised feature of PMS platforms in this segment [INFERRED — no systematic product review conducted]. | Section 2 | High (regulatory facts); Medium (systematisation gap claim) |
| 4 | No public announcement by any named incumbent (Aladdin, Temenos, Landytech, Objectway) of MiFID III compliance automation as of May 2026. Absence of announcement is not confirmed absence of development, but represents a confirmed vendor communications gap. | Section 4 | Medium |
| 5 | Off-channel communication fines exceeded $3B globally across 100+ firms; ESMA sanctions rising 143% YoY. Boutique EAMs using WhatsApp with clients face the highest-probability enforcement exposure in this obligation cluster. | Section 3 | High |

---

## Topic Scorecard

| Topic | Importance | Researchability | Research Quality | Notes |
|---|---|---|---|---|
| MiFID II Core Obligations + Suitability | 5 | 5 | 5 | Excellent source depth; ESMA primary sources cited throughout |
| MiFID II Costs & Charges + PRIIPs | 5 | 4 | 4 | Strong on regulatory text; PRIIPs arrival-price vendor gap is inferred, not verified |
| Transaction Reporting + Best Execution + Surveillance | 5 | 4 | 5 | Well-sourced; Swiss custodian liability point is inferred and needs legal analysis |
| MiFID III Delta | 5 | 3 | 4 | Good synthesis; several RTS items remain in transposition; confirm before acting |

---

## Further Inquiry

1. **Flanks/Pretim PRIIPs TCA capability (primary — high priority):** Direct vendor product call to confirm whether either aggregator provides timestamp-level mid-price data for arrival-price TCA calculation. Determines whether this is a confirmed gap or a solvable integration. Also appeared as an open gap in the prior EU wealthtech reporting run (2026-05-05).

2. **Swiss custodian RTS 22 liability mechanics (primary — high priority):** Legal analysis per custodian: which Swiss custodians are EEA-licensed subsidiaries (transmission exemption available) vs. Swiss-only entities (exemption unavailable). A shortlist of the 5–10 custodians most commonly used by Swiss EAMs in the $200M–$2B band would scope the exposure.

3. **MiFID III incumbent roadmaps (primary — high priority):** Direct product calls with Objectway, Landytech, and Temenos to determine whether MiFID III compliance automation is in active development. Absence of press releases does not confirm absence of builds.

4. **Retrocession sub-ledger in PMS tools (secondary):** Systematic review of PMS tools commonly used by Swiss EAMs in this segment (Altus, Masttro, SS&C Advent, Axys) to confirm whether per-client, per-position retrocession tracking at the jurisdiction level is or is not a standard feature.

5. **ESMA and FINMA enforcement actions against EAMs (secondary):** Survey of ESMA published sanctions and FINMA enforcement reports from 2023–2026 for EAM-size firms. Provides an evidence base for which obligations are actively enforced vs. which remain theoretical.

---

## File Path
`c:\dev\research\swiss-eam-monitoring\2026-05-08-mifid-ii-iii-eam-requirements.md`
