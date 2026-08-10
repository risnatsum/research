# Module 16: Competitor Landscape — EAM/MFO Platform Providers Serving Asia

**Date:** 6 August 2026
**Status:** Final Report
**Scope:** Technology platform providers serving EAMs/IAMs and MFOs in Hong Kong and Singapore (primary), rest of APAC (secondary)
**Companion modules:** 08 (Revenue Models), 12 (Tech Stack), 13 (Operational Pain)
**Method note:** Four parallel research streams across ~20 vendors; every material claim carries a source URL and date. Vendor pricing is almost never public in this market — where a commercial model is inferred from job posts, case studies, partner announcements or deal analogies, it is explicitly labelled **INFERRED**. Claims are date-stamped because this market is consolidating quickly (three ownership changes among covered vendors in 2024–26 alone).

---

## Executive Summary

The vendor market serving Asian EAMs/MFOs in 2026 is a **barbell with a thin, contested middle**:

- **One pole is data**: aggregation/reporting specialists (Canopy, Masttro, Landytech, Flanks, PandaConnect, and now Addepar via its April 2026 Singapore hub) that solve consolidated reporting but leave the RM front office — orders, suitability, structured products, retrocessions — to someone else.
- **The other pole is bank-grade suites**: Avaloq, additiv (acquired by Temenos, June–July 2026), InvestCloud, Temenos Wealth, ERI — priced and implemented for institutions, effectively unbuyable for a 5–30 RM firm.
- **The middle — the true "EAM operating platform" segment — has only four credible contenders with real Asian presence**: Easyview (HK-native, the only Asia-built all-in-one), Privé Technologies (HK-native, modular but bank-DNA), Expersoft PM1/AM-One (Swiss, in SG since ~2011-13, low visibility since 2021), and Wize by TeamWork (Swiss, SG regional HQ since 2019, one named local reference).

Three structural findings shape the white-space analysis in Section D:

1. **Nobody combines deep Asian custodian connectivity with a full front office.** The best aggregator (Canopy, 250+ custodians) has no OMS/PMS; the best front offices (Easyview, Wize, Privé) publish 20+, undisclosed, and no feed networks respectively. Every Asian EAM still assembles a stack.
2. **European consolidation is orphaning the EAM mid-market.** NEC–Avaloq (2020), Inflexion–Infront/Assetmax (2021/22), Pollen Street–Etops (2024), Temenos–additiv (2026) all pull vendor roadmaps toward banks and European bundling, away from small independent firms in Asia.
3. **Connectivity standardisation (OpenWealth) is arriving in Asia custodian-side, not vendor-side** — Avaloq switched it on at LGT (Jun 2024), Swissquote Singapore went live for 70+ SG/HK EAMs/MFOs (Nov 2025), Infront Assetmax declared itself "OpenWealth-ready in APAC" (Apr 2026). None of the Asia-native vendors (Easyview, Privé, Canopy) is publicly participating — a strategic exposure for them and an opening for others.

---

## A. Comparison Matrices

### A1. Positioning & commercial snapshot (as of Aug 2026)

| Provider | Origin | Asia presence | Category | Commercial model (● = INFERRED) | Custodian connectivity | Asia EAM/MFO traction |
|---|---|---|---|---|---|---|
| **Easyview** | 🇭🇰 Asia-native (HK, 2020) | HK HQ + Shenzhen + SG; ~60–75 staff | All-in-one EAM front office + SP RFQ | ● Flat SaaS + modules; SP flow likely monetised | 20+ data interfaces; 5+ FIX ports; JB-certified | 100+ institutions HK/SG; US$10B AUR; Noah Int'l |
| **Privé Technologies** | 🇭🇰 Asia-native (HK, 2011) | HK HQ, SG, Taipei (+Munich); ~136 staff | Modular wealth suite (bank DNA) | Enterprise SaaS, modular, multi-yr; ● ~US$100K+ ACV | Not disclosed; no published feed network | 60–75 B2B clients, mostly banks/insurers; EAM count undisclosed |
| **Canopy** | 🇸🇬 Asia-native (SG, 2013) | SG HQ + HK office; ~40–60 staff | Aggregation / consolidated reporting | Per-end-client or flat fee; scales with custodian count + entities | 250+ custodians (direct + SWIFT + AI PDF, 7 languages) | 60+ institutional clients; US$120B+ AUR; Raffles FO, BoS |
| **Expersoft (PM1/AM-One)** | 🇨🇭 European in Asia | SG office ~2011-13 + HK; ~9 APAC staff (2021) | Modular EAM/wealth platform + BPO | Modular licence (PM1); flat entry SaaS (AM-One); bank-sponsored variant | 278 integrations global; ~12+ automated in APAC (2021) | "Strong SG/HK IAM/MFO base" claimed; no named Asia client |
| **Wize by TeamWork** | 🇨🇭 European in Asia | SG regional HQ (2019); ~10 staff target | All-in-one EAM platform + BPO | Single flat all-in price; bank-subsidy precedent (Syz) | 250+ connectors global; Asia feeds undisclosed | 8 Asia clients (2020); HP Wealth Mgmt (SG) flagship |
| **Infront Assetmax** | 🇨🇭/🇳🇴 European, APAC nascent | No Asia office; Synpulse channel | EAM PMS (Swiss standard) | ● SaaS + Infront data bundling | 150+ feeds (Europe-weighted); OpenWealth-ready APAC (Apr 2026) | None named in Asia |
| **Etops** | 🇨🇭 European, no Asia | None | Ops BPO + platform | ● BPO retainer + SaaS | Parser/protocol-based; count undisclosed | None |
| **additiv** | 🇨🇭 European (→Temenos 2026) | SG (2018), Jakarta, Manila | Orchestration for banks/insurers | ● Enterprise SaaS ~CHF 1m+ ACV | No EAM feed network | No EAM clients; bank/insurer roster |
| **Avaloq** | 🇨🇭 European (NEC) | SG + HK + Manila; 20+ APAC institutions | Core banking / custodian-side | ● Multi-million bank-scale contracts | It *is* the custodian core (HSBC, LGT, DBS, Nomura…) | No direct EAM clients; reaches EAMs via banks + OpenWealth |
| **Performativ** | 🇩🇰/🇬🇧 European, no Asia | None | EAM/MFO operating system | ● Affordable modular SaaS | UBS, JB, Nordics; Europe-weighted; FIX | None in Asia; €100B+/1,500 advisors (self-reported, Europe) |
| **Edgelab (Evooq)** | 🇨🇭 European w/ SG office | SG office (entity since 2019) | Risk/suitability analytics engine | ● API/module subscription | N/A (consumes data, doesn't aggregate) | UOB, DBS, J.P. Morgan as clients; no named EAMs |
| **Masttro** | 🇺🇸/🇨🇭, no Asia | None | FO wealth aggregation (UHNW) | Flat fee + onboarding fee; explicitly not AUM-bps | 650–700 direct feeds, no scraping | ~0% Asia client share disclosed (2023) |
| **Landytech (Sesame)** | 🇬🇧 European, no Asia | None (London/Paris/Pune) | Reporting/analytics + data API | Config-based per portfolio/entity/feed | 500+ custodian + 10,000+ open-banking connections | None found |
| **Flanks** | 🇪🇸 European, no Asia | None | Custodian data API (aggregation infra) | ● Usage-based API subscription | 650–700 connections (feeds + credential retrieval + PDF) | None; EU-centric coverage |
| **PandaConnect** | 🇩🇰 European, no Asia | None | Investment admin BPO + software | ● Per-portfolio service fee | 140+ banks handled, 60+ integrated | None |

**Also credible in Asia (short profiles in Section C):** Addepar (SG hub Apr 2026 — the major new entrant), FinIQ (SG-native SP connectivity), Synpulse8 Wealth Cockpit (OpenWealth enabler), Eton Solutions (SG int'l HQ, MFO ERP), WMCockpit (SG-native, estate + wealth), SS&C Advent, InvestCloud, iCapital. **Defunct/exclude:** Bambu (shut Dec 2023).

### A2. Functional coverage matrix

Ratings: ●●● strong · ●● adequate · ● weak · — absent. (Evidence in individual profiles.)

| Capability | Easyview | Privé | Canopy | Expersoft | Wize | Assetmax | Performativ | Masttro | Landytech | Flanks | Panda-Connect | Edgelab | additiv | Avaloq* |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Consolidated reporting | ●●● | ●● | ●●● | ●●● | ●●● | ●●● | ●●● | ●●● | ●●● | ●● | ●●● | — | ● | — |
| Reconciliation / data quality | ●● | ● | ●●● | ●●● | ●●● | ●●/●●● | ●● | ●● | ●●/●●● | ●●● | ●●● | — | ● | ●●●† |
| Portfolio mgmt (adv + disc) | ●●● | ●●● | ● | ●●● | ●●● | ●●● | ●●● | ● | ●● | ● | ● | ●● | ●●● | ●●● |
| Order mgmt / execution | ●●● | ●●● | — | ●● | ●●● | ●●/●●● | ●●● | — | — | — | — | ● | ●● | ●●● |
| Compliance & suitability | ●● | ●●● | ● | ●●● | ●●● | ●● | ●● | ● | ● | — | ● | ●●●‡ | ●●● | ●●● |
| Onboarding / CRM | ●●● | ●● | ● | ●● | ●●● | ●● | ●● | — | ● | — | — | ● | ●●● | ●● |
| Structured products | ●●● | ●● | ●● | ●● | ●● | ●● | — | — | ● | ● | ●● | ●●●‡ | — | ●●● |
| Risk analytics | ●● | ●●/●●● | ●● | ●● | ●● | ●● | ●● | ●● | ●●/●●● | ● | ● | ●●● | ●● | ●●/●●● |
| Client portal / mobile | ●● | ●● | ●●● | ●● | ●●● | ●● | ●●● | ●●● | ●● | — | ●● | — | ●●● | ●●● |
| Retrocession / fee accounting | —/? | ●●● | — | ●●§ | ●●§ | ●●§ | ? | — | — | — | ●● | — | — | — |
| **Asian custodian feed depth** | ●● | ? | ●●● | ● | ? | ● | — | ? | ? | — | ? | n/a | — | ●●●† |
| **HK/SG local support** | ●●● | ●●● | ●●● | ●● | ●● | — | — | — | — | — | — | ●● | ●● | ●●● |

\* Avaloq rated as what an EAM could access *via a custodian's Avaloq-based EAM platform*, not as a directly purchasable product. † As the custodian's own core. ‡ Analytics/rule engine only, not workflow. § Swiss-style invoicing/retro modules exist; Asia-specific depth unverified. "?" = no public evidence either way.

---

## B. Provider Profiles

### B1. Easyview (Easy View Technology Pte. Ltd) — Hong Kong 🇭🇰 Asia-native

**Basics.** Founded 2020 by ex-private-wealth leaders; HQ 43/F Cosco Tower, Sheung Wan, HK; offices Shenzhen (engineering) and Singapore; 60–75 staff [easyview.com.hk/about; InvestHK profile, fetched Aug 2026]. No disclosed funding — INFERRED founder-owned/bootstrapped. **Note on the brief:** the "Alpha Omega" attribution could **not** be verified in any public source — no press, registry or site link between Easyview and an "Alpha Omega Team Limited" was found; possibly a legacy/internal legal name. Recommend a direct HK Companies Registry check before repeating that attribution.

**1. Commercial model — INFERRED.** No public pricing; no G2/Capterra presence. Product is modular ("All In One System", API, EasyConnect). Inference: flat per-firm SaaS licence plus module and likely per-feed setup fees, with the EasyConnect structured-product RFQ layer plausibly monetised on flow (issuer-side or per-transaction, as FinIQ/Leonteq do). Reasoning: 100+ institutional clients on ~60–70 staff and third-party revenue estimates (~US$8–15M) imply mid-four-to-five-figure USD annual contracts — an order of magnitude below Swiss-suite pricing [ZoomInfo estimate; InvestHK].

**2. Private bank relationships.** Claims to be "Asia's first and only certified PMS provider" on Julius Baer's approved list (Sep 2023) — consistent with JB's Digital Intermediaries Platform accepting third-party PMS via FIX [medium.com/@easyview, 27 Sep 2023; juliusbaer.com intermediaries page]. Connectivity: **20+ data interfaces with financial institutions; 5+ FIX transaction ports with private banks** [easyview.com.hk/about, Aug 2026]. No aggregator tie-ups, no OpenWealth membership [openwealth.ch community list, Aug 2026]. No named referral arrangements with UBS/LGT/BoS/Pictet.

**3. Client footprint.** 100+ institutions in HK/SG; 200+ active end clients; **US$10B assets under reporting** (site, undated; US$8B as of Dec 2022 [Businesswire, 15 Mar 2023]). Named client: **Noah International** (HNW arm of Noah Holdings) [Businesswire, 15 Mar 2023]. Awards: APB Tech Awards 2023 "Tech House of the Year" + "Best IAM/MFO Solution"; WealthBriefingAsia EAM Awards 2023 **and 2024** "Overall Pan-Asia Technology Solution Provider (External)" plus 2024 "Client Lifecycle Management (External)" [Medium 25 Apr 2024; clearviewpublishing.com 2024 winners]. Notably absent from 2025 award winner lists checked. Growth: HKMA Fintech Showcase 2024; team 60+→70+; hosts its own EAM industry events in HK/SG.

**4. Offering.** Consolidated reporting ●●● (incl. non-bankables); reconciliation ●● (only 20+ direct interfaces — the constraint); PM ●●●; OMS/execution ●●● (FIX to private banks, JB-certified); compliance/suitability ●●; onboarding/CRM ●●● (anchor product; 2024 award); **structured products ●●● (EasyConnect RFQ, price discovery, lifecycle — its sharpest differentiator)**; risk ●●; portal/mobile ●●. Lombard/retrocession: no public evidence.

**5. For a 5–30 RM Asian EAM.**
*Strengths:* (1) the only platform purpose-built around the HK/SG EAM revenue engine — structured product RFQ + execution + CRM in one; (2) genuine local depth — HK/SZ/SG teams, Chinese-language capability, same-timezone support; (3) execution connectivity rare at this price class (JB certification, 5+ FIX ports); (4) client-validated at scale for its niche (100+ firms, Noah).
*Weaknesses:* (1) thin custodian feed coverage (20+) — a 10-custodian book will have manual gaps; (2) small-company risk: no institutional funding, opaque ownership, unnamed founders; (3) minimal third-party/Western due-diligence footprint; (4) unproven outside the Greater China–SG corridor; no OpenWealth/European connectivity beyond JB.

### B2. Privé Technologies — Hong Kong 🇭🇰 Asia-native

**Basics.** Founded 2011 by ex-J.P. Morgan founders (Julian Schillinger; CEO since 2024: Paul Hodes, ex-Citi); HK HQ, offices SG, Taipei, Munich; ~136 staff; bootstrapped ("never taken outside money", 2018), with an unverified 2025 "M&A offer" datapoint on scraped databases [privetechnologies.com/about; Hubbis 5 Jul 2018 & 17 Sep 2024; GetLatka].

**1. Commercial model.** Enterprise SaaS, modular ("app store" of modules). AWS Marketplace listing confirms bespoke multi-year contracting (36-month terms, custom private offers) [aws.amazon.com/marketplace, Aug 2026]. **INFERRED:** ~US$100K+ average annual contract (est. US$8M revenue / ~75 customers [GetLatka]); per-module licence + implementation fees; bank robo deployments possibly per-account. Too heavy for the smallest EAMs; modules can be bought piecemeal.

**2. Private bank relationships.** The landmark deal — **Credit Suisse APAC offering Privé's platform to its HK/SG EAMs (Jun 2019)** [Hubbis, 4 Jun 2019] — effectively lapsed with the UBS absorption; no replacement EAM-desk channel visible since. Enterprise clients incl. Citibank, UOB, Generali, Bank of East Asia, SMBC Nikko [privetechnologies.com, Aug 2026]. Custodian feed network: **not disclosed anywhere** — the major gap; no OpenWealth membership; no aggregator partnerships found. Distinctive: a dedicated **fees & retrocession engine** built for bank↔EAM economics [privetechnologies.com blog, 15 Oct 2023].

**3. Client footprint.** 60–75 B2B clients, 75% of revenue from Asia (2018); EAM-specific count never disclosed — positioning is bank/insurer-heavy with FOs as one of five segments. No AUM-on-platform figure. Growth signals: senior ex-Citi leadership; ~90 awards claimed; headcount roughly flat (125→136, 2023–26) [Hubbis; GetLatka].

**4. Offering.** PM ●●● (patented AI portfolio construction); OMS ●●●; compliance/suitability ●●●; retrocession ●●●; consolidated reporting ●● (no aggregation infrastructure of its own); reconciliation ● (retro recon only); onboarding ●●; SP ●● (product explorer, no RFQ); risk ●●/●●●; portal ●●.

**5. For a 5–30 RM Asian EAM.**
*Strengths:* (1) deepest functional breadth of the Asia-native trio — advisory, optimisation, OMS, suitability, retrocession under one roof; (2) 14-year record with tier-1 logos — durability; (3) retrocession engine matches Asian EAM economics; (4) HK/SG/Taipei support with Greater China language fit.
*Weaknesses:* (1) custodian aggregation is not its core — multi-custody data must be solved separately; (2) enterprise sales/implementation motion is heavy for a boutique; (3) lost its CS EAM-desk distribution channel and hasn't replaced it; (4) leadership/ownership in flux (founder→Hodes; unverified M&A interest).

### B3. Canopy — Singapore 🇸🇬 Asia-native

**Basics.** Founded 2013/14 (as Mesitis) by Tanmai Sharma (ex-Deutsche MD); SG HQ + HK office (+ legacy Zurich); ~40–60 staff; ~US$23M raised incl. **Credit Suisse's 10% strategic stake (Dec 2017)** — fate under UBS unknown; possible leadership transition (a "Chen Mu, CEO" appears in Aug 2025 company content; Sharma's LinkedIn now shows New York) [Dealroom; fintechnews.sg 25 Sep 2018; canopyinsights.substack.com 21 Aug 2025].

**1. Commercial model.** The most transparent of the group: fees scale with **number of end-clients / custodian count / entities**, with a flat-fee variant; positioned "relatively low-cost" [Hubbis founder interview, 6 Mar 2019; canopy.cloud/platform, Aug 2026]. INFERRED: material onboarding fees for PDF backfill of historical data. Watch-out: pricing scaling with custodian count penalises exactly the multi-banked EAMs it serves best.

**2. Private bank relationships.** Credit Suisse was investor *and* distributor (Canopy embedded in CS Digital Private Banking APAC 2017–18, promoted with Roger Federer) [fintechnews.sg, 25 Sep 2018] — post-UBS status unknown. Bank of Singapore is a named client with a documented BoS feed procedure [finews.asia; support.canopy.cloud]. Connectivity is the moat: **250+ custodians via direct feeds, SWIFT and AI-parsed PDF statements in 7 languages; 100+ automated datafeeds; daily three-way reconciliation; full audit trace** [canopy.cloud/data-aggregation, Aug 2026]. Own aggregation stack — no reliance on Flanks/Salt Edge. Not an OpenWealth member.

**3. Client footprint.** **60+ institutional clients across 20+ countries; US$120B+ assets under reporting** (Aug 2026 site; $100B mid-2025; $20B 2019 — strong compounding). Named: Raffles Family Office, Corecam, Bank of Singapore, Credit Suisse. ISO 27001:2022. **Discrepancy flag:** our Module 12 cited "US$174B+" for Canopy — current public figure is US$120B+; the $174B claim could not be reproduced and Module 12 should be corrected.

**4. Offering.** Consolidated reporting ●●●; reconciliation ●●●; portal/mobile ●●●; accounting ●●/●●● (double-entry, GL export — differentiator); SP ●● (ingestion/monitoring incl. accumulators, no RFQ); risk ●●; PM ● (analytics only — no rebalancing/advisory workflow); OMS —; suitability ●; CRM ●. No retrocession engine.

**5. For a 5–30 RM Asian EAM.**
*Strengths:* (1) best multi-custodian aggregation in Asia — handles the long tail of HK/SG bank statements without waiting for feeds; (2) audit-grade data trust (3-way recon, traceability, ISO 27001, SG data residency); (3) Asia-proven at scale ($120B AUR, Raffles/BoS pedigree); (4) strong alternatives/non-bankables coverage for FO balance sheets.
*Weaknesses:* (1) not a front office — no OMS, no advisory workflow, no CRM: always a complement to a PMS, never a replacement; (2) no fee/retrocession accounting; (3) small team spread across an AI pivot, with CS/UBS shareholding and founder-transition ambiguity; (4) heavy onboarding where feeds don't exist, and per-custodian pricing grows with bank count.

### B4. Expersoft Systems (PM1 / AM-One) — Swiss 🇨🇭 in Asia since ~2011

**Basics.** Founded 1993, Zug; ~270–300 staff; offices incl. **Singapore (~2011-13) and Hong Kong**, plus a Singapore back-office BPO centre ("BOSS", ~2020); APAC team was 9 people in 2021 (current size unverified); privately held (INFERRED founder/management-owned) [expersoft.com/company; Hubbis 1 Oct 2020 & 1 Nov 2021]. Global scale: ~650 clients, CHF 3trn AuM touched, 278 custodian/core integrations, 30k active EAM users [expersoft.com, Aug 2026].

**1. Commercial model.** Two-tier: **PM1** = modular enterprise licence (implementation-heavy); **AM-One** = preconfigured multi-tenant SaaS bundle for small EAMs (software + hosting + compliance + back-office services) [financialit.net, 4 May 2017]; **BOSS** BPO on top; "adapted Swiss pricing for Asia" [Hubbis, 1 Nov 2021]. INFERRED: per-firm modular licence + implementation + per-feed charges (PM1); flat subscription (AM-One). Crucially, a **bank-sponsored distribution model exists in Asia**: an unnamed Swiss boutique private bank with SG APAC HQ funds AM-One for its HK/SG intermediaries, with ambition to onboard "100-plus IAMs" [Hubbis, 1 Nov 2021; profile matches Bordier & Cie — unconfirmed].

**2. Private bank relationships.** The unnamed sponsor bank above; 278 global custodian/core integrations but only **~12+ fully automated feeds in APAC (2021 figure)**; OpenWealth Association member since ~Apr 2025 [LinkedIn post, c. Apr 2025].

**3. Client footprint.** Claims a "strong customer base in Singapore and Hong Kong among IAMs and MFOs" [Hubbis, 1 Oct 2020] — but **no named Asian client anywhere**, and the company news page is stale (nothing since 2019). 2025 metrics on its site (15m transactions, +27% user growth) suggest the business runs, but market visibility is minimal.

**4. Offering.** Reporting ●●●; reconciliation ●●● (incl. BPO); PM ●●●; compliance ●●● (automated MAS reporting cited); OMS ●●; CRM ●●; SP ●● (INFERRED from Swiss heritage); risk ●●; portal ●●.

**5. For a 5–30 RM Asian EAM.**
*Strengths:* (1) longest-standing local vendor presence with in-timezone BPO; (2) AM-One lets a 5-RM shop start cheap — potentially bank-subsidised to near-free; (3) full functional breadth + MAS reporting automation; (4) 278 integrations of Swiss-grade plumbing.
*Weaknesses:* (1) near-zero market visibility since 2021 — hard to reference-check, momentum unclear; (2) thin APAC team for a 30-RM implementation; (3) Asian feed coverage (~12 automated, 2021) is a fraction of its European catalogue; (4) PM1 proper carries Swiss-suite implementation burden.

### B5. Wize by TeamWork — Swiss 🇨🇭, SG regional HQ since 2019

**Basics.** Built inside Geneva's TeamWork Group from 2010, launched 2012, "independent" since Jun 2022 (TeamWork Management SA — exact cap table opaque); 60+ specialists at independence; offices Geneva, Zurich, Luxembourg, **Singapore**, Montreal; Asia leadership Germain Chapart (Co-CEO Asia, SG-based) [wize.net; Hubbis 2 Jul 2020; HPWM press release 27 Jan 2021].

**1. Commercial model.** Its signature: **"one contract, one solution, one price"** — a single flat all-in platform fee covering all 250+ functions, explicitly positioned against modular per-module pricing; BPO middle-office services sold on top [Hubbis, 2 Jul 2020]. Proven custodian-subsidy precedent: **Bank Syz pays for Wize licences for EAMs custodising with Syz (from Sep 2023)** [syzgroup.com, 29 Aug 2023]. INFERRED: flat annual fee banded by size; modest implementation cost.

**2. Private bank relationships.** The Syz subsidy deal (Switzerland — the template Asian custodians could copy); platform clients include Banque Heritage, Bonhôte, Cité Gestion. **250+ custodian connectors globally** (80+ in 2020 — fast growth) via CSV/API/XML [wize.net/custodian-banks, Aug 2026]; Asian feed list (DBS/BoS/UOB KH/HSBC) not published; no OpenWealth evidence.

**3. Client footprint.** 120+ clients / 28 countries / **US$120bn+ on platform** globally [wize.net, Aug 2026]. Asia: 8 clients as of mid-2020; flagship named reference **HP Wealth Management (SG)** — live with PMS, reporting, AML, digital onboarding [HPWM/finews.asia, 27 Jan 2021]. Sponsor of WealthBriefingAsia EAM Awards 2026 — ongoing commitment signal [clearviewpublishing.com, Aug 2026].

**4. Offering.** Reporting ●●● (incl. PE, art, real estate); reconciliation ●●● (+BPO guarantee); PM ●●●; OMS ●●● (FIX STP, bulk orders); compliance ●●● (KYC/AML/MiFID); CRM/onboarding ●●●; portal/mobile ●●●; SP ●●; risk ●●.

**5. For a 5–30 RM Asian EAM.**
*Strengths:* (1) genuinely all-in-one at a predictable flat price — best TCO story in the segment; (2) SG regional HQ with implementation + BPO staff and a reference client that takes calls; (3) 250+ connectors and a replicable bank-subsidy model; (4) TeamWork Group delivery muscle behind it.
*Weaknesses:* (1) thin published Asia traction — one named client six years into the region; (2) Asian custodian feeds unevidenced — likely case-by-case builds; (3) no OpenWealth participation (unlike Expersoft/Assetmax); (4) post-2022 corporate structure opaque for procurement DD.

### B6. Infront Assetmax — Swiss/Norwegian 🇨🇭🇳🇴, APAC entry Apr 2026

Founded 2013 (Zurich); ~70 Swiss EAM/bank clients at acquisition; bought by **Infront (Oslo) in Sep 2022**; Infront itself taken private by **Inflexion PE (€170m, 2021)** [startupticker.ch, 26 Aug 2022; unquote.com 2021]. Certified Avaloq Standard Adapter (2020). **No Asia office, no named Asian client**; APAC entry is channel-led: declared "OpenWealth-ready in APAC" with Synpulse as implementation partner (PR datelined Singapore, **15 Apr 2026**) [prnewswire.com apac release]. 150+ custodian feeds, Europe/Germany-weighted parser library; FIX hub. Commercial model INFERRED: SaaS licence increasingly bundled with Infront market data (per-user + platform fee). Compliance content MiFID/FIDLEG-centric. **Assessment:** credible Swiss-standard PMS whose Asian proposition is one press release deep — a "watch" for 2027, not a 2026 shortlist name, unless the Synpulse/OpenWealth channel lands live SG custodian endpoints. Strengths: PE-backed stability, OpenWealth first-mover posture, Avaloq-core data affinity. Weaknesses: no local support, no Asian feeds evidenced, roadmap gravity toward European bundling.

### B7. Etops — Swiss 🇨🇭, effectively absent from Asia

Founded 2010 (Zug); BPO middle/back-office outsourcing + platform (Evolute-derived CRM/PM/KYC/OMS); ~100→140+ clients/staff; acquired Aug 2024 into a **Pollen Street Capital**-backed European wealthtech roll-up (with niiio/DSER, Patronas, fundsaccess); 275+ staff, 9 locations in 5 countries — **none in Asia**; strategy explicitly DACH-focused [etops.com Pollen blog, Aug 2024; etops 2025 year in review]. Connectivity is parser/protocol-based (EBICS/SWIFT/SFTP + AI statement parser), breadth unquantified. Commercial model INFERRED: BPO retainer scaled by portfolios/feeds + SaaS. **Assessment for Asia:** the ops-outsourcing depth is exactly what small Asian EAMs say they want (Module 13), but a CET-timezone recon service with zero APAC clients is a structural mismatch for daily T+1 operations in HK/SG. Include only as a model of what an Asian-timezone equivalent should look like.

### B8. additiv — Swiss 🇨🇭, acquired by Temenos (Jun–Jul 2026); banks-first, not an EAM platform

Founded 1998, Zurich; orchestration platform (addWealth etc.); SG office since 2018, Jakarta (Feb 2025) and Manila (Apr 2025) offices, APAC data hosted in SG; ~200 staff, 30 clients, NRR 138%; **Temenos announced 100% acquisition 8 Jun 2026, closed 17 Jul 2026** [temenos.com press releases]. Clients are banks/insurers (PostFinance, Coutts, CommBank Indonesia, ATRAM) — one Geneva wealth-manager logo (NS Partners), **no EAM/MFO clients in HK/SG, no custodian feed network, no EAM-desk integrations**. Commercial model INFERRED at ~CHF 1m+ ACV enterprise SaaS. OpenWealth member. **Assessment:** despite real APAC delivery presence, this is not a buyable option for a 5–30 RM EAM — wrong product (no multi-custody core), wrong price point, and post-acquisition gravity toward Temenos's bank base.

### B9. Avaloq (NEC) — the custodian-side incumbent; reaches EAMs through banks

Founded 1985, Zurich; NEC-owned (US$2.2bn, Dec 2020); 2,500+ staff; 170+ clients; CHF 4trn on platform; SG + HK offices, SG BPO centre (2015), Manila support; 20+ APAC institutions [avaloq.com/about; Hubbis 25 Aug 2020, 30 May 2023, 15 Apr 2026]. Asian private banks on Avaloq core include **HSBC GPB, Deutsche WM (SG/HK), LGT, Nomura, DBS, Maybank, CIMB, Kasikorn, CTBC, Cathay United** — i.e. many of the custodians whose EAM desks matter. Key development: **OpenWealth built into the Avaloq core, first live at LGT (Jun 2024) explicitly for EAM/MFO/trustee connectivity** [avaloq.com news, 20 Jun 2024] — every Avaloq-core custodian in SG/HK can in principle switch on standardised EAM feeds. No direct EAM product was found (**no evidence of any "EAM-on-cloud" offering — the claim in our Module 12 could not be verified and should be treated as unconfirmed**); EAM portfolio tooling is delegated to ecosystem partners (Infront Assetmax adapter). Commercial model: bank-scale (INFERRED ~CHF 3.5m average annual revenue per client). **Assessment:** not a vendor an EAM buys; the variable that matters is *which Asian custodians turn on Avaloq's OpenWealth endpoints* — that single decision could commoditise feed connectivity that Canopy/Easyview currently earn margins on.

### B10. Performativ — Danish/UK 🇩🇰🇬🇧; the right product, on the wrong continent

Founded 2020, Copenhagen (+London roles); **Series A US$14m led by Deutsche Börse Group, 28 Apr 2026** (after €5.5m seed, Nov 2023; ~US$20m total) [deutsche-boerse.com PR; eu-startups.com]. Core business *is* small/mid wealth managers and MFOs: multi-custody reporting, models/rebalancing, FIX OMS, private assets, white-label portal, AI agents; self-reported **€100bn+ across 1,500+ advisors** (unverified). Custodian integrations named: UBS, Julius Bär, Danske, Nordea — Europe-weighted; OpenWealth member. "Affordable" positioning — INFERRED cheapest credible full front-to-back option per RM. **Zero Asia presence**: no office, clients, feeds, MAS/SFC content, or APAC hiring; no structured-products lifecycle support — a material gap for Asian books. **Assessment:** the closest European analogue to what the Asian mid-market lacks; a future entrant to watch (Deutsche Börse capital could fund APAC entry), but today implementation and support would run on CET hours with every Asian feed a new build.

### B11. Edgelab / Evooq — Swiss 🇨🇭 risk & suitability engine with a real Singapore presence

Lausanne; consolidated under the **Evooq** brand (shared CEO Cédric Ullmo); **J.P. Morgan strategic investment Dec 2022**; ~285 staff; offices incl. **Singapore (entity since 2019)** [jpmorganchase.com PR Dec 2022; evooq.com/about]. Clients/logos: J.P. Morgan (risk engine rolled out to advisors incl. Asia), **UOB, DBS**, Banca Zarattini, NBK PB; distribution via Azqore/S2i (Indosuez — ~30 banks incl. SG bookings) and as first white-label partner inside Avaloq Wealth (2020). Not a platform: no aggregation, no OMS, no portal. Differentiators: **full non-linear repricing of structured products and suitability rule support for MAS and HKMA frameworks out of the box** [evooq.com/edgelab; evooq.com/prc]. Commercial model INFERRED: per-module/API subscription. Evooq also won "Best Front Office Solution", APB Tech Awards 2025. **Assessment:** for a mid-size EAM, an overlay to buy *alongside* a PMS when SP-heavy books and SFC/MAS suitability demand institutional-grade analytics — not a stack replacement; enterprise sales motion may resist small tickets.

### B12. Masttro — US/Swiss 🇺🇸🇨🇭 UHNW aggregation; no Asia footprint

Founded 2010 (family-office roots, Zurich→NY HQ 2020); **$43M from FTV Capital + Citi Ventures (Mar 2023)**; CEO Jay McNamara (ex-MSCI) since Jan 2025; ~120 staff (2023); 400+ FO/institutional clients, 10k+ users, 40+ countries — client mix 45% NA / 30% LatAm / 25% Europe = **~0% Asia disclosed** [Institutional Investor, 9 Mar 2023; Businesswire 6 Jan 2025; andsimple.co profile]. **650–700 direct custodian feeds, explicit no-scraping policy** (count varies by page: 550+ in 2023, 700+ on 2026 directory). Pricing: **flat feature-based fee + one-time onboarding; explicitly not AUM-bps** [masttro.com vs-Landytech page]. Strong: illiquids/alternatives (IRR/MOIC/DPI), document AI vault, security (Swiss Tier-4, client-held AES keys), portal ●●●. Absent: OMS, CRM, suitability, SP lifecycle. **Assessment:** a top-tier *family-office* reporting spine with privacy features that resonate in Asia, but no local presence/support and no RM front office — relevant to the MFO end of the market only, served from NY/Zurich.

### B13. Landytech (Sesame) — UK 🇬🇧 reporting/data platform; no Asia footprint

Founded 2018, London (+Paris, Pune); **$12M Series B (Aquiline, Feb 2023)** + £5M debt (CIBC, May 2024); 100+ staff; **$250bn+ AUM under reporting; 500+ custodian connections + 10,000+ open-banking connections** [landytech.com, Aug 2026; tech.eu 13 Feb 2023]. Two tiers: Sesame One (platform) and **Sesame Data (API-only)** — a cheap data-only entry. Pricing: configuration-based per portfolios/entities/feeds [per Masttro's comparison page — competitor source, treat with caution]. Award trail in client accounting/reporting (WealthBriefing Europe 2026; Hedgeweek risk 2024); trust/fiduciary DNA (Ocorian, Accuro). No OMS, thin compliance, no Asia office/clients; Asian feed depth unverified. **Assessment:** a modern, cheaper Masttro-adjacent reporting option whose trust-company DNA fits HK/SG trust-linked structures — but delivery from London/Pune with no APAC support.

### B14. Flanks — Spanish 🇪🇸 aggregation API; the "connectivity utility" model, EU-only today

Founded 2019, Barcelona (founders incl. ex-Santander PB global head Álvaro Morales); **€14M round led by Motive Ventures, 26 Feb 2025** (~€22M+ total); Bank-of-Spain-regulated AISP; 100+ staff [eu-startups.com, 26 Feb 2025; flanks.io]. **650–700 connections** via a mix of direct feeds, *reverse-engineered credential-based retrieval*, and PDF processing, with automated reconciliation; 100+ clients (CaixaBank win Apr 2026; WealthAi partnership Jul 2026); €39–43bn connected AUM. No Asia coverage claims, no APAC clients, EU-scoped licence. **Assessment:** matters to this report mainly as the *model* of the standalone connectivity utility Asia lacks — and as a caution: credential-based retrieval would face consent/compliance friction with HK/SG custodians. If Flanks (or an imitator) built Asian booking-centre coverage, every reporting vendor's moat would thin.

### B15. PandaConnect — Danish 🇩🇰 investment-admin BPO; no Asia footprint

Founded 1997 (ex-Nordea IM), founder-owned; Copenhagen + Vilnius + Lisbon (May 2026); **230+ clients / 2,100+ portfolios**; 140+ banks handled, ~60 with direct integrations; ISAE 3402/3000-audited; clients across Nordics/UK/CH/Brazil — none in Asia [pandaconnect.com/about-us; /news, Aug 2026]. Hybrid BPO + PandaCockpit software; true investment accounting/NAV capability (fits fund-wrapped/VCC-style structures conceptually). Pricing INFERRED: per-portfolio service fee. **Assessment:** same story as Etops — the outsourced-ops model Asian boutiques need, delivered from the wrong timezone with unknown Asian custodian handling.

---

## C. Other Credible Players (short profiles)

**Addepar — the major new entrant. 🇺🇸→🇸🇬** US reporting/analytics leader (~$9tn client assets, 1,400+ firms). **Established Singapore as its APAC hub, Marina Bay Financial Centre, announced 14 Apr 2026**, with R&D + go-to-market mandate; APAC clients served since 2019, regional client base +130% in two years; Singapore state investor EDBI joined its Series G (2025) [prnewswire.com APAC release, 14 Apr 2026; Citywire Asia; Hubbis]. Enterprise SaaS (INFERRED: platform fee scaled by assets/accounts). Best-in-class alternatives analytics. No OMS/CRM front office for EAM workflows. Direct threat to Canopy/Masttro/Landytech at the MFO/UHNW reporting end; expect it to pull the top of the market upward on price and analytics depth.

**FinIQ — SG-native structured-products connectivity. 🇸🇬** EQ Connect multi-issuer SP price discovery/order platform; **"Best Structured Products Solution", APB Technology Awards 2025**; LGT partnership for SP/derivatives automation; used by EAM desks and even Geneva boutiques [asianprivatebanker.com 2025 awards; privatebankerinternational.com; finews.com]. The incumbent Easyview's EasyConnect must displace; INFERRED per-seat/flow monetisation.

**Synpulse8 Wealth Cockpit — the OpenWealth kingmaker. 🇨🇭/🇸🇬** Synpulse's tech arm; unified EAM front-end (RM dashboard, CRM/PMS integration, custody connectivity); enabled **Swissquote Singapore's OpenWealth go-live for its 70+ SG/HK EAM/MFO clients (19 Nov 2025)**; APB 2025 "Best Integrated AI Solution"; co-published the May 2026 Asia EAM market report with AIWM + FOAHK (EAMs ≈ 7% of SG wealth, 9% of HK; 77%/72% of firms <$1bn AUM) [synpulse8.com; Hubbis 19 Nov 2025; prnewswire 26 May 2026]. Part consultant, part vendor — a channel every European entrant is using (Assetmax, Swissquote), and a potential platform player in its own right.

**Eton Solutions (AtlasFive) — MFO ERP with SG international HQ. 🇺🇸/🇸🇬** Family-office ERP; $1.4tn+ assets administered, 1,020+ families; **international HQ in Singapore** + Dubai; active Hubbis presence targeting Asian FOs [eton-solutions.com; Hubbis partner profile]. Accounting/admin-led rather than RM front office; relevant to the large-MFO end.

**WMCockpit — SG-native newcomer. 🇸🇬** Singapore + DIFC; wealth *and estate* platform for EAMs/advisors (aggregation + trust/holding-structure mapping + client-professional collaboration); **"Most Innovative Solution", APB Tech Awards 2025** [wmcockpit.com; asianprivatebanker.com]. Young and small; feed depth undisclosed; worth tracking as an Asia-native seed of the "estate + wealth" angle.

**SS&C Advent (Geneva/APX/Black Diamond).** Institutional PMS incumbent with HK/SG offices; appears in larger HK/SG EAM/MFO ops stacks (INFERRED from regional adoption; no public EAM client list). Bank-grade cost and implementation; the default at the >$1.5B AUM end (consistent with Module 12's barbell finding) [advent.com APAC blog].

**InvestCloud (ex-Finantix), Temenos Wealth, ERI OLYMPIC.** Bank-grade front/core platforms with real SG presence, sold to private banks and the very largest MFOs; too heavy for 5–30 RM firms — relevant here mainly as the ceiling of the market [Hubbis coverage; vendor sites].

**iCapital.** Alts/SP access layer (APB 2025 "Best Private Markets Solution"; SG/HK offices) increasingly used by EAMs — a product-shelf complement, not a platform [icapital.com].

**Checked and set aside (no credible HK/SG EAM traction as of Aug 2026):** Croesus, WealthArc, Altoo, QPLIX, Allocare, Swimbird, FundCount (SG presence unverified), Quantifeed (B2B2C robo infra, not EAM PMS). **Bambu: defunct** (shut Dec 2023) [fintechnews.sg].

---

## D. Synthesis — Where the White Space Is

### D1. The market structure in one picture

Plotting functional breadth (front office ↔ data layer) against Asian delivery depth (local presence, feeds, language, regulatory content) leaves the upper-right quadrant — *full front office + deep Asian delivery* — nearly empty:

- **Deep Asia, narrow function:** Canopy (data only), FinIQ (SP only), Edgelab/Evooq (risk only), Eton (admin only).
- **Broad function, thin Asia:** Wize (1 named client), Expersoft (invisible since 2021), Assetmax/Performativ (zero presence), Privé (broad but no data layer, lost its bank channel).
- **Broad function, deep Asia:** **Easyview alone** — and it is a 70-person firm with 20+ feeds and no institutional capital.

That is the core commercial fact of this landscape: **the segment's centre of gravity (5–30 RM firms, $300M–$3B AUM, 4–8 custodians, SP-heavy books) has no dominant, fully-credible supplier.**

### D2. Six specific white spaces

**1. The "full-stack with real Asian feeds" gap.** No vendor offers strong consolidated reporting *and* reconciliation *and* OMS/SP workflow *and* 100+ Asian-relevant custodian feeds. Canopy has the feeds and no front office; Easyview/Wize/Privé have front office and thin/undisclosed feeds. Today's practical answer is a two-vendor stack (e.g. Canopy + Easyview, or Canopy + Wize) — double contracts, double reconciliation of the reconcilers, integration burden on a firm with no IT team. First vendor to credibly close this — by building, partnering, or acquiring across the gap — takes the segment. An Easyview–Canopy style pairing (or acquisition by a funded consolidator) is the obvious structural move; none is announced [all profile sources above].

**2. Asian-timezone middle-office BPO.** Etops and PandaConnect prove demand for outsourced reconciliation/reporting ops in Europe; Expersoft's Singapore BOSS centre and Wize's SG BPO staff are the only in-timezone equivalents, both sub-scale and barely marketed. Module 13's operational-pain findings (recon burden, RM-assistant leverage) say this is the most monetisable unmet need for Segment 1–2 firms — an "ops-as-a-service" priced per portfolio, in HKT/SGT, with Cantonese/Mandarin-capable staff, does not exist at scale.

**3. The connectivity utility ("Flanks for Asia").** Europe now has three routes to custodian data an Asian EAM lacks: OpenWealth APIs (LGT via Avaloq Jun 2024; Swissquote SG Nov 2025 — the only live Asian instance), Flanks-style aggregation utilities, and mature direct-feed catalogues. In HK/SG, feed access still depends on bilateral EAM-desk arrangements, bank by bank. Whoever aggregates DBS/BoS/UOB KH/HSBC/local-broker connectivity into one API — vendor-neutral, consent-based (not scraped) — commoditises the plumbing every platform vendor currently rebuilds. The candidates best placed: Synpulse8 (custodian-side trust, OpenWealth playbook), Canopy (feeds exist, would have to unbundle its data layer as API), or an association-sponsored utility (AIWM's OpenWealth interest per Module 12). Nobody has claimed it [openwealth.ch; Hubbis 19 Nov 2025; Synpulse/AIWM report 26 May 2026].

**4. MAS/SFC-native compliance for small firms.** Suitability/compliance modules on offer are MiFID/FIDLEG-shaped (Assetmax, Performativ, Etops); Edgelab is the only vendor with out-of-the-box MAS/HKMA product-risk rule support, but sells engine-not-workflow to enterprises. A compliance workflow layer priced for a 5-RM firm — SFC Type 9/MAS FMC obligations, PI classification, cross-border (mainland client) rules, audit-ready trails — remains unbuilt. This compounds white space 2: the same in-timezone team could deliver both.

**5. Retrocession and fee-economics tooling.** Only Privé has a purpose-built retrocession engine; Easyview shows no public evidence; Canopy/Landytech/Masttro none. With Module 08 documenting retro-transparency pressure and hybrid fee models, EAMs are running their own P&L on spreadsheets. Small feature, high willingness-to-pay, near-zero competition.

**6. The abandoned bottom (1–10 RM boutiques).** Every European vendor is drifting up-market or bank-ward (Temenos–additiv, Infront bundling, Performativ's enterprise pivot post-Series A); Privé's ACV excludes boutiques; Canopy's per-custodian pricing punishes multi-banked small books. The proven distribution answer is **custodian-sponsored licensing** — Syz pays for Wize in Switzerland; an unnamed Swiss boutique bank sponsors Expersoft AM-One for HK/SG intermediaries; Julius Baer certifies Easyview. No Asian custodian (BoS, DBS, UOB KH, HSBC) has yet stood up a sponsored-platform scheme for its EAM desk — the first to do so buys loyalty from exactly the boutique segment platforms can't profitably reach direct, and the vendor chosen gets a locked-in channel. This is simultaneously the cheapest go-to-market in the landscape and the most defensible [syzgroup.com 29 Aug 2023; Hubbis 1 Nov 2021].

### D3. Competitive dynamics to watch (next 12–18 months)

- **Addepar's SG hub** (Apr 2026) pressures the reporting pole first — Canopy's UHNW/MFO accounts are the contested ground. Canopy's counter-moves (AI pivot, accounting depth) and its unresolved UBS/CS shareholding are the variables.
- **OpenWealth custodian adoption in Asia** is the single biggest potential dislocation: if two or three Avaloq-core custodians in SG/HK switch on EAM endpoints (following LGT/Swissquote), feed-count moats deflate and advantage shifts to workflow/front-office quality — helping Easyview/Wize/Privé, hurting pure aggregators.
- **Consolidation contagion:** Temenos–additiv and Pollen–Etops continue a pattern; the plausible next targets with Asia relevance are Privé (unverified 2025 M&A-offer datapoint), Canopy (strategic stake overhang), and Easyview (unfunded, sub-scale, prize asset for any European suite needing an Asia front door). An acquisition of Easyview by a European vendor would instantly create the missing "full-stack + Asian delivery" player.
- **Segment data now exists:** the Synpulse/AIWM/FOAHK May 2026 report (EAMs ≈ 7%/9% of SG/HK wealth; 77%/72% of firms <$1bn AUM) gives vendors a sizing baseline — expect sharper mid-market targeting from late 2026.

### D4. Practical shortlists (by buyer situation)

| Buyer situation | Realistic 2026 shortlist | Notes |
|---|---|---|
| 5–10 RM boutique, SP-heavy, HK-centric | Easyview; Expersoft AM-One (if sponsor-bank route available); + FinIQ if SP flow is the business | Easyview default; DD its ownership/continuity |
| 10–30 RM EAM, multi-custodian, SG-licensed | Wize; Easyview; Privé modules; Canopy as data layer under any of them | Two-vendor stack still likely |
| MFO with heavy alts/illiquids, trustee scrutiny | Canopy; Addepar (from 2026); Masttro/Landytech only if EU/US-served acceptable | Add Eton if fund/admin-led |
| Platform EAM (50+ RMs) building "own the glue" | SS&C Advent or Avaloq-adjacent core + Canopy data + Edgelab risk + FinIQ SP | Consistent with Module 12 barbell |
| Any firm with SFC/MAS suitability exposure on SP books | Add Edgelab/Evooq overlay | Only MAS/HKMA-native rules engine found |

---

## E. Source & Confidence Notes

- **Primary source classes used:** vendor sites and support/documentation portals; Hubbis, Asian Private Banker, WealthBriefingAsia/Clearview, Citywire Asia, finews/.asia; press releases (Businesswire, PR Newswire, Temenos, Deutsche Börse, J.P. Morgan, NEC, Syz, Avaloq); funding databases (Dealroom, Crunchbase-class, GetLatka — flagged where low-confidence); registries (Swiss Zefix-adjacent, SG UEN, InvestHK); OpenWealth Association member list. All URLs are embedded inline at point of claim; every claim carries its publication or fetch date.
- **Corrections to earlier modules:** (1) Module 12's Canopy figure "US$174B+" could not be reproduced — current public figure is **US$120B+ AUR** (canopy.cloud, Aug 2026); (2) Module 12's Avaloq "EAM-on-Cloud" product could not be verified in any Avaloq source — treat as unconfirmed; Avaloq's EAM play is OpenWealth-in-core plus the Infront Assetmax ecosystem adapter.
- **Confidence tiers:** company-disclosed metrics (feed counts, AUR, client counts) are self-reported marketing unless third-party corroborated, and several conflict across a vendor's own pages (Masttro 550/650/700 feeds; Flanks 600/650/700 connections; Canopy 100+/250+ custodians) — ranges are given where so. All pricing for all vendors is inferred except: Canopy's scaling logic (founder interview + site), Masttro's flat-fee/no-bps statements, Wize's "one price" positioning, and the Syz/AM-One sponsorship structures.
- **Known gaps:** Easyview↔"Alpha Omega" legal linkage; Privé's custodian connectivity and possible 2025 M&A event; Canopy's current CEO and CS-stake fate; Expersoft's current APAC headcount and sponsor-bank identity; Wize's live Asian feed list; WealthBriefingAsia 2025 technology-category winners (paywalled). Each is flagged in the relevant profile.

*End of Module 16.*


