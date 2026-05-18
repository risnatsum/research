# IV Vendor & Market Data: Commercial Landscape for Structured Products Fintech

**Date:** 2026-05-17
**Research type:** Technology/Product + Market Landscape (Broad)
**Subject:** Implied volatility and options market data vendors for a fintech building a structured products pricing engine that sells to financial institutions.
**Context:** Company is a technology provider selling structured products pricing and analytics tools to private banks and wealth managers. Products are medium-to-long-dated (1–5 years). Currently uses EWMA historical vol; upgrading to implied volatility. Data will be used to generate derived metrics (IV surfaces, lifecycle event probabilities) shown to end clients — not raw data redistribution.

---

## 1. Synthesis

### The Licensing Layer Is the Product Risk — Not the Data Quality

The most common mistake a fintech building on implied volatility data makes is treating this as a data quality problem first and a licensing problem second. The research reverses that priority. Whatever data source this company chooses, the licensing architecture around it is the first-order decision — and it determines what the product can legally do before it reaches a single client.

Here is the central structural fact: Bloomberg and LSEG, which hold the institutional credibility that private banks expect, do not permit onward distribution of derived analytics under their standard licenses. A Bloomberg Terminal subscription — even at $31,980/year per seat — does not give a technology vendor the right to show Bloomberg-derived IV surfaces to their own clients. That requires a separate Data License negotiation (Bloomberg's DL or DL+), which is priced per legal entity, not per user, and structured as a bespoke enterprise agreement. The same applies to LSEG, which acknowledges that licensing requirements persist "even when outputs are derived." This means the credibility of the institutional source and the right to use it commercially are decoupled — you can afford one without the other.

The second structural fact concerns the exchange layer, which is invisible to most founders but unavoidable in production. OPRA — the consolidated feed covering all 17 US options exchanges — levies a $1,500/month redistributor fee the moment you show options data to anyone other than yourself, plus a $2,000/month non-display Category 2 fee for "calculations performed on behalf of customers." Computing implied volatility for a client is explicitly Category 2. These fees apply regardless of which data vendor supplies the underlying quotes. The minimum exchange cost for a real-time, client-facing analytics product is therefore $3,500/month before a single dollar of vendor subscription. This is the hidden floor that undercuts every "free tier" option.

Given these constraints, the right data strategy is a two-phase architecture rather than a single vendor decision. In the prototype phase, Databento's usage-based OPRA access ($125 free credit, then pay-per-use) is the cleanest starting point. Databento acts as vendor of record with exchanges — meaning the fintech does not need direct OPRA or exchange license agreements during development. Databento intentionally does not pre-compute IV (leaving that to the client), which is actually an advantage here: the company builds and owns the surface construction methodology, using an SSVI or Buehler framework. This avoids vendor methodology lock-in and positions the company's own analytics as the IP, not the data.

In the production phase, the calculus shifts. The choice is effectively between three paths: (1) negotiate a redistribution license with Bloomberg or LSEG, paying institutional-grade costs but gaining the credibility marker that private bank clients expect; (2) build on SpiderRock or a similar institutional specialist that acts as vendor of record and provides pre-computed surfaces, at lower cost but with the need to explain methodology divergence vs. Bloomberg; or (3) build on Cboe DataShop as the exchange-direct source, which carries natural authority for equity vol data and avoids a third-party data middleman.

The credibility angle deserves its own treatment. Private banks validate structured product pricing against Bloomberg OVML and OVME functions internally. When a vendor's IV surface differs from the bank's Bloomberg surface — which it will, especially at the 1–5 year tenors that medium-to-long-dated products require — the bank's quant team will ask for an explanation. That conversation goes better if the answer is "we source from Cboe DataShop directly and extrapolate using SSVI" than "we use iVolatility." This is not a formal requirement but a sales reality. The FCA's 2023 wholesale data market study found Bloomberg and LSEG to be the only firms covering all data types — a near-duopoly that reflects entrenchment, not just quality. A vendor selling to private banks needs a clear position on this.

The non-obvious insight: for medium-to-long-dated structured products, the data sourcing problem is less acute than it appears. Listed equity options provide reliable IV data out to roughly 2 years (LEAPS). Beyond that, every surface — including Bloomberg's — involves extrapolation from models, not direct market observation. A fintech with a rigorous surface construction methodology (SSVI for indices, arbitrage-free SABR for single names) and clean data hygiene can produce surfaces that are methodologically defensible at long tenors. The differentiator at 3–5 years is not who has better raw data — nobody has liquid 5-year options to observe — it is who has a better extrapolation model. That is proprietary IP, not a data vendor problem.

**Central tension / implication:** The institutional credibility required to sell to private banks (Bloomberg/LSEG sourcing) and the licensing framework required to actually show those analytics to clients (separate redistribution license, significant cost) are decoupled — forcing a choice between appearing credible and being commercially viable, unless the company negotiates its way into a proper Data License agreement from day one.

---

## 2. Topic Sections

### 2.1 Vendor Landscape

**Bloomberg** is the dominant one-stop-shop for institutional data, controlling approximately 33% of the financial data market (Source: [Wall Street Prep comparison](https://www.wallstreetprep.com/knowledge/bloomberg-vs-capital-iq-vs-factset-vs-thomson-reuters-eikon/)). It provides real-time IV surfaces, vol analytics via the OVML and OVME terminal functions, options chains, and structured product pricing tools via Terminal and the B-PIPE API feed. The Real-Time Volatilities service in B-PIPE allows downstream consumption of vol data for black-box and derived applications. (Source: [Bloomberg Real-Time Volatilities PDF](https://data.bloomberglp.com/professional/sites/10/750114_Real-Time-Volatilities.pdf))

**LSEG/Refinitiv** holds approximately 20% market share and is the second-largest player. It offers SVI-parametric vol surfaces calibrated in real time via the SURF application in Workspace and via the Instrument Pricing Analytics (IPA) API. Surfaces are updated continuously so market events are immediately reflected. Delivers real-time feeds and Datascope Select for historical data. (Source: [LSEG Volatility Surface page](https://www.lseg.com/en/data-analytics/financial-data/pricing-and-market-data/fixed-income-pricing-data/futures-options-derivatives/volatility-surface))

**OptionMetrics / IvyDB** is the academic standard for historical options data. IvyDB US covers every strike and expiration on 10,000+ underlying stocks and indices since 1996, with standardized constant-maturity vol surfaces computed daily. Academic institutions access it via WRDS (Wharton Research Data Services). Commercial licensing exists but prices are not published. The academic version is updated yearly; the commercial version is updated nightly. Commercial redistribution of the academic-licensed version is prohibited. (Source: [OptionMetrics](https://optionmetrics.com/), [WRDS](https://wrds-www.wharton.upenn.edu/pages/about/data-vendors/optionmetrics/))

**iVolatility** is a niche specialist in IV data, offering options price data, derivatives data, and implied volatility analytics. Retail plans start at $69/month (Backtest API Essential) and $149/month (Backtest API Plus). Pay-per-use is also available. Professional/commercial pricing requires direct contact. Key constraint: standard download terms are personal-use only; financial advisors, broker-dealers, and bank employees in securities roles are explicitly prohibited from retail terms. (Source: [iVolatility FAQ](https://www.ivolatility.com/faq/), [iVolatility Terms](https://www.ivolatility.com/data-download-terms-of-use/))

**Cboe DataShop** (includes the former Livevol platform) is the exchange-direct source. Products include: Option EOD Summary (with optional IV and Greeks "Calcs" add-on), Option Quotes (interval snapshots), Vol Surface Fitter parameters (the proprietary surface fit per option class), and Trade-by-Trade data. Pricing is not publicly listed. As an exchange operator, Cboe has full authority over its data licensing. (Source: [Cboe DataShop](https://datashop.cboe.com/data-products))

**SpiderRock Data & Analytics** is an institutional-grade vol surface provider. It offers VOL2G, which includes implied ATM volatilities and skew slopes for fixed-term expirations from 5 to 504 days, with EOD, 30-minute, and 5-minute interval histories going back to 2010. Crucially, SpiderRock describes itself as an "exchange vendor of record" capable of supporting market data distribution needs — meaning clients may not need direct exchange license agreements. (Source: [SpiderRock vol surfaces](https://spiderrock.net/data/historical-data-analytics/volatility-surfaces/))

**Databento** is a newer entrant providing raw OPRA data (covering all 17 US options exchanges) without pre-calculated IV or Greeks — intentionally, to avoid model dependency. It acts as vendor of record with exchanges. Pricing: $199/month (Standard), $1,399/month (Plus, annual), $3,500/month (Unlimited, annual). $125 free credit for new sign-ups. (Source: [Databento pricing](https://databento.com/pricing))

**Nasdaq Data Link** (formerly Quandl) aggregates datasets from multiple publishers. Options and vol datasets are available on an à la carte basis. Coverage varies by publisher; no single authoritative vol surface product is prominently featured.

**SIX Financial Information** is a Swiss-based provider with strength in European markets and reference data. Options/vol surface coverage for structured products exists but is not its primary focus.

**CME Group** is relevant for futures options data and CME CVOL volatility indexes. Applicable for interest rate and commodity underlyings. Direct licensing required for redistribution.

**Key Findings:**
- Bloomberg and LSEG are the only true one-stop-shops covering all data types — confirmed by the FCA's 2023 wholesale data market study.
- SpiderRock and Databento are the most startup-accessible institutional-grade options for vol surface and raw options data respectively, and both offer vendor-of-record arrangements.
- iVolatility and OptionMetrics are specialist providers but with licensing models that require careful scrutiny for commercial use.

---

### 2.2 Pricing and Cost Tiers

**Bloomberg:**
- Terminal: $31,980/seat/year (single seat), $28,320/seat at volume, $18,000–$20,000/seat for enterprise (50+ seats). 6.5% increase applied from January 2025. (Source: [costbench.com](https://costbench.com/software/financial-data-terminals/bloomberg-terminal/), [godeldiscount.com](https://godeldiscount.com/blog/bloomberg-terminal-cost-2026))
- B-PIPE API: estimated $2,000–$3,000/month additional. (Source: [bluegamma.io](https://www.bluegamma.io/post/bloomberg-terminal-pricing))
- Data License (for redistribution): separate negotiated enterprise agreement; not a published tier.
- Contract terms: 2-year minimum; 90-day cancellation notice required.

**LSEG/Refinitiv:**
- Small teams (<10 users): $75,000–$150,000/year
- Mid-market (10–25 users): $150,000–$400,000/year
- Enterprise (50+ users): >$1M/year
- Per-user range: $2,000–$3,500/month all-in
- Real-time feeds via API: $1,000–$10,000+/month; exchange fees add 20–50%
- Delayed feeds: $500–$3,000/month standard packages
- All pricing is negotiated; no published list prices. (Source: [Vendr](https://www.vendr.com/marketplace/refinitiv))

**OptionMetrics:**
- Academic (via WRDS): approximately $10,000–$30,000/year [UNVERIFIED — commonly cited in academic contexts, not confirmed by OptionMetrics]
- Commercial: not published; direct quote required.

**iVolatility:**
- Retail: $69–$149/month
- Professional: negotiated; likely $500–$5,000/month range [UNVERIFIED — inferred from product positioning]
- Commercial redistribution license: separate, undisclosed pricing.

**Cboe DataShop:**
- Not publicly listed; contact required. One-time downloads and subscriptions both available.

**SpiderRock:**
- Institutional only; pricing not disclosed.

**Databento:**
- Usage-based (historical, no subscription): pay-per-dataset accessed
- Standard: $199/month
- Plus: $1,399/month (annual contract)
- Unlimited: $3,500/month (annual contract)
- $125 free credit for new accounts. (Source: [Databento pricing](https://databento.com/pricing))

**OPRA Exchange Fees — vendor-agnostic and unavoidable for real-time US equity options:**
- Redistributor fee: $1,500/month flat (required whenever showing data to any third party)
- Non-professional user display: $1.25/user/month (volume discounts apply)
- Professional user display: $31.50/device/month
- Non-display Category 2 (calculations for customers — IV, Greeks, portfolio valuation): $2,000/month
- Historical data: exempt from these fees
- (Source: [marketdata.app OPRA fees guide](https://www.marketdata.app/education/options/opra-fees/))

**Key Findings:**
- Bloomberg Terminal is not accessible to early-stage fintechs as a data source for analytics — the cost, contract structure, and licensing complexity all argue against it.
- Databento is the most price-transparent and startup-accessible institutional-grade option.
- The OPRA exchange fee structure is the hidden cost floor that applies regardless of vendor choice once the product goes to real clients.

---

### 2.3 Redistribution and Licensing Rules

This section answers the critical question: Can a fintech use Bloomberg or Refinitiv data to generate IV surfaces and risk analytics, then show those derived outputs to financial institution clients?

**Bloomberg — No, not under standard terms:**
Bloomberg's Terms of Service prohibit redistribution or "broadcasting" of information, including "Resultant Information" (any derived output). The derived rights license covers only internal proprietary use for algorithm creation, price formation, or risk engines — and explicitly excludes financial instrument creation and any onward distribution. To show Bloomberg-derived analytics to clients, the company must negotiate a separate Data License (Bloomberg DL or DL+), priced per legal entity, as a bespoke enterprise agreement. A separate BDRSL (Bloomberg Data Distribution Licence) must be signed by all distributors before receiving a distribution licence. (Source: [Bloomberg Data License](https://professional.bloomberg.com/products/data/data-management/data-license/), [Bloomberg ToS](https://data.bloomberg.com/tos/), [BDRSL PDF](https://data.bloomberglp.com/professional/sites/10/BDRSL-Data-Fees-Public-Disclosure-.pdf))

**LSEG/Refinitiv — No, not under standard terms:**
LSEG defines derived data as outputs that are "unrecognisable, non-reversible, and cannot be traced back to the original content without exceptional effort." Even when this threshold is met, LSEG states that licensing requirements still apply. A separate redistribution agreement is required, not automatically included in standard Workspace or feed subscriptions. LSEG does work with fintechs on redistribution licensing through a formal data redistribution framework. (Source: [LSEG Data Redistribution](https://www.lseg.com/en/data-analytics/market-data/data-redistribution))

**OPRA / Exchanges — Non-display Category 2 applies:**
OPRA's Category 2 non-display license ($2,000/month) covers "calculations performed on behalf of customers," which explicitly includes computing IV, Greeks, or portfolio valuations using real-time options prices for display in a client-facing product. This applies regardless of which vendor delivers the underlying data. If real-time options prices are used to compute analytics shown to clients, this fee is mandatory — alongside the $1,500/month redistributor fee. Historical data is exempt from these fees. (Source: [marketdata.app](https://www.marketdata.app/education/options/opra-fees/))

**The "derived data" safe harbour — limited and audited:**
If derived outputs genuinely cannot be reverse-engineered to source data, some exchanges treat this as qualifying "derived data" with different (sometimes lower) licensing requirements. However: (1) the exchange retains sole discretion over this classification; (2) exchanges now conduct audits and pre-approval reviews; (3) if derived prices can be reverse-engineered to raw quotes, firms face a raw real-time data license at 300–400% more than the derived data rate. This is a material risk. (Source: [Markets Media](https://www.marketsmedia.com/complexities-expand-in-market-data-licensing/))

**Vendor of record — the compliance shortcut:**
A vendor of record handles exchange reporting obligations on behalf of the client. When using Databento or SpiderRock (both of which offer vendor-of-record arrangements), the fintech does not need direct exchange license agreements. This significantly reduces compliance overhead. However: vendor-of-record covers the exchange licensing layer only. It does not resolve the upstream vendor's own redistribution requirements (e.g., if the data is sourced from Bloomberg via a third-party). (Source: [Databento licensing blog](https://databento.com/blog/introduction-market-data-licensing), [SpiderRock](https://spiderrock.net/data/))

**iVolatility — personal use only under retail terms:**
Standard download terms explicitly prohibit use by broker-dealers, investment advisors, and bank employees in securities or futures roles. Commercial use requires a separately negotiated license. (Source: [iVolatility Terms](https://www.ivolatility.com/data-download-terms-of-use/))

**OptionMetrics — academic license prohibits commercial use:**
The academic license is "for research, teaching, and private study only" and prohibits commercial use. A commercial license is required for production use; redistribution rights are unclear without direct engagement. (Source: [OptionMetrics](https://optionmetrics.com/data-products/))

**Key Findings:**
- Standard Bloomberg and LSEG subscriptions do not permit showing derived analytics to clients. A separate negotiated redistribution license is required in both cases — this is not a tier upgrade, it is a separate commercial negotiation.
- The OPRA Category 2 non-display fee ($2,000/month) applies to any real-time-based IV calculation shown to clients, regardless of vendor.
- Vendor-of-record arrangements (Databento, SpiderRock) solve the exchange compliance layer but not the upstream data vendor redistribution question.
- Historical data avoids OPRA real-time fees entirely — a meaningful cost lever for a product focused on long-dated structured products where end-of-day data may be sufficient.

---

### 2.4 Prototype-Friendly and Low-Cost Alternatives

**Databento:**
The most startup-accessible institutional-grade option. Provides raw OPRA data for all 17 US options exchanges. Does not pre-compute IV or Greeks — the fintech builds its own surface. $125 free credit for new accounts; usage-based pricing for historical data. Acts as vendor of record. Strong documentation and code samples for IV estimation using Black-Scholes and Black-76. Best for: prototyping surface construction methodology on real market data. (Source: [Databento options](https://databento.com/options), [Databento pricing](https://databento.com/pricing))

**Tradier:**
Free sandbox tier includes options chains, Greeks, and IV data (15-minute delayed). Real-time requires a live brokerage account. API is brokerage-first — data licensing terms for redistribution in a commercial product are not clearly defined. Not suitable for production redistribution without direct commercial negotiation. Best for: prototyping options chain retrieval and interface development. (Source: [Tradier fintechs](https://tradier.com/businesses/fintechs))

**Polygon.io / Massive:**
Polygon.io rebranded to Massive in 2026. Options data API with tick-level chains, Greeks, and IV. Free tier: EOD data only, 5 API calls/minute. Standard: $199/month. Plus: $1,399/month (annual). Unlimited: $3,500/month (annual). Strong developer tooling. Commercial redistribution terms require review before production use. Best for: development and testing with a generous data model. (Source: [Massive pricing](https://massive.com/pricing))

**Alpha Vantage:**
Free tier: 5 API calls/minute, includes options with IV. Premium plans available. Not positioned for institutional redistribution. Best for: very early-stage exploration only.

**CBOE Public Data:**
cboe.com provides some free historical data, primarily VIX-related and aggregate market statistics. Not a full options chain dataset. Not sufficient for single-stock IV surface construction. Best for: index-level vol research and VIX context.

**OptionMetrics via WRDS (academic access):**
If the company has university affiliations or academic research partnerships, WRDS academic access to IvyDB provides the highest-quality historical options dataset available — US options since 1996 with clean pre-computed IV surfaces. Cannot be used in a commercial product. Best for: validating surface construction methodology against a gold-standard reference dataset.

**Key Findings:**
- None of the free-tier providers are suitable for production use in a commercial product shown to financial institution clients.
- Databento is the strongest prototype-to-production bridge: free for historical prototyping, usage-based for production, vendor-of-record compliance, and the same platform scales to live data.
- Historical data avoids the $3,500/month OPRA real-time fee floor — for a product focused on medium-to-long-dated instruments, end-of-day options data may be entirely sufficient for surface construction, dramatically lowering production costs.

---

### 2.5 What Financial Institutions Use

**Dominant platforms:**
Bloomberg and LSEG/Refinitiv dominate institutional financial data. Bloomberg controls approximately 33% of the financial data market; LSEG holds approximately 20%. The FCA's 2023 wholesale data market study found these two firms to be the only providers covering "all or most services and data types" — a regulatory finding confirming their near-duopoly status. (Source: [FCA Wholesale Data Market Study Annex 4](https://www.fca.org.uk/publication/market-studies/ms23-1-5-annex-4.pdf))

**Bloomberg in private banking:**
Bloomberg's OVML (Options Valuation and Market-Making) and OVME (Options Valuation) functions are standard tools for structured product pricing and validation at institutional desks. Bloomberg offers integrated structured product lifecycle management, valuation, and transaction reporting. Private banks use Bloomberg to validate structured product pricing — both at inception and through the product's life cycle. (Source: [Bloomberg Private Wealth Management](https://www.bloomberg.com/professional/solutions/private-wealth-management/private-banking/))

**LSEG/Refinitiv in European and Asian markets:**
Refinitiv is particularly strong in fixed income, FX, and European/Asian equity markets. Its Eikon Workspace provides volatility surface tools and is widely used in European institutional contexts. Less dominant than Bloomberg specifically for structured product pricing, but a credible alternative particularly for European private banks. (Source: [Wall Street Prep comparison](https://www.wallstreetprep.com/knowledge/bloomberg-vs-capital-iq-vs-factset-vs-thomson-reuters-eikon/))

**The credibility implication for a vendor:**
When a private bank's quant team validates pricing produced by an external technology vendor, they compare it against their Bloomberg terminal. Any divergence in IV surface values triggers a methodology question. For medium-to-long-dated products (1–5 year tenors), this surface divergence is most pronounced because:
1. Listed options liquidity thins rapidly beyond 18 months for most single-name underlyings.
2. Every surface at 3+ years involves model-based extrapolation — Bloomberg's included.
3. The choice of extrapolation model (SSVI, SABR, parametric) determines the surface shape, and different vendors make different choices.

Being able to tell a private bank "our data is sourced from Cboe DataShop (exchange direct) and we extrapolate using SSVI calibrated to market consensus" is a stronger position than "we use iVolatility." Being able to say "we license Bloomberg data" would be strongest but comes with the licensing complexity described above.

**The audit/due diligence angle:**
Financial institutions increasingly conduct vendor due diligence that includes data sourcing as a category. A technology vendor selling to regulated institutions should be prepared to disclose: (1) data vendor identity; (2) licensing status; (3) methodology for surface construction and extrapolation; (4) how surfaces are validated. An undisclosed or improperly licensed data source is a due diligence red flag.

**Key Findings:**
- Bloomberg is the reference standard in private banking for structured products pricing validation. LSEG is strong in European and Asian markets.
- Surface divergence at long tenors (1–5 years) is a real sales issue and requires a prepared methodology explanation regardless of data source.
- Due diligence processes at regulated institutions cover data sourcing — proper licensing is not just a legal requirement, it is a sales enabler.

---

## 3. Topic Scorecard

| Topic | Importance | Researchability | Research Quality | Notes |
|---|---|---|---|---|
| Vendor Landscape | 5 | 4 | 4/5 | Good coverage; SpiderRock and Databento well-documented; Cboe pricing opaque |
| Pricing & Cost Tiers | 5 | 3 | 3/5 | OPRA fees well-sourced; vendor fees largely opaque (negotiate-only); key figures are Vendr estimates for LSEG |
| Redistribution & Licensing Rules | 5 | 3 | 4/5 | Bloomberg and LSEG ToS clearly confirm restriction; OPRA fees confirmed via independent source; iVolatility terms confirmed directly |
| Prototype-Friendly Alternatives | 4 | 5 | 4/5 | Strong sourcing; Databento and Tradier well-covered; Polygon/Massive confirmed rebranded |
| What Financial Institutions Use | 4 | 3 | 3/5 | Directional evidence strong; no primary institution survey data; Bloomberg dominance confirmed via FCA study |

---

## 4. Key Signals

**Signal 1: The OPRA Category 2 fee is the unavoidable licensing floor — it applies regardless of which vendor you choose.**
The moment real-time options data is used to compute IV or Greeks for client display, OPRA's Category 2 non-display fee ($2,000/month) applies alongside the redistributor fee ($1,500/month). This $3,500/month exchange cost floor exists before any vendor subscription is added — and is vendor-agnostic. Most fintech founders budget only for the data vendor's subscription and miss this entirely.
(Confidence: High — OPRA fee schedule is public. Source: marketdata.app)

**Signal 2: Bloomberg and LSEG's standard licenses do not permit showing derived analytics to clients — a separate negotiated redistribution license is required in both cases.**
Standard Bloomberg Terminal subscriptions and LSEG Workspace subscriptions explicitly prohibit onward distribution of derived outputs. A company building analytics on either platform and showing them to paying clients is in breach until a separate Data License agreement is in place. This is a material legal risk that surfaces in institutional due diligence.
(Confidence: High — Bloomberg ToS and LSEG redistribution page both confirm this. Source: bloomberg.com, lseg.com)

**Signal 3: Vendor-of-record arrangements (Databento, SpiderRock) solve the exchange compliance layer — dramatically reducing startup regulatory overhead.**
Vendors acting as vendor of record handle exchange reporting on behalf of their clients. The fintech avoids direct OPRA/exchange license negotiations during development. This is the fastest path to production compliance. However, it does not resolve the upstream data vendor's own redistribution requirements.
(Confidence: High — Databento explicitly describes the vendor-of-record model. Source: databento.com/blog)

**Signal 4: For medium-to-long-dated structured products (1–5 years), the raw data problem is less acute than the model problem.**
Listed equity options provide observably liquid IV data to approximately 18 months, with LEAPS extending to 2–3 years on major names. Beyond that, every vol surface — Bloomberg's included — relies on model extrapolation. A rigorous SSVI or SABR implementation on clean Cboe/OPRA data can be methodologically competitive with Bloomberg at long tenors. The differentiator is the extrapolation model, which is proprietary IP, not a vendor advantage.
(Confidence: Medium — supported by quant finance literature from prior run 2026-05-16; specific vendor surface accuracy comparison at long tenors not directly evidenced)

**Signal 5: iVolatility's retail terms explicitly exclude financial professionals — a common gotcha for fintechs that prototype on it without reading the fine print.**
iVolatility's standard download terms bar broker-dealers, investment advisors, and bank employees in securities roles. A fintech that prototypes on iVolatility retail plans and then moves to production without a commercial license is in breach. Commercial pricing is undisclosed; the commercial license may represent a step-change in cost.
(Confidence: High — iVolatility terms page confirms this directly. Source: ivolatility.com/data-download-terms-of-use)

---

## 5. Critic Flags

The following issues were flagged by the critic pass and are noted for transparency:

- **[CRITIC FLAG — Minor]** Bloomberg OVML/OVME described as standard validation tools at private bank desks: directionally well-supported but no independent third-party citation from a private bank specifically confirming this practice.
- **[CRITIC FLAG — Minor]** "LEAPS provide reliable IV data out to roughly 2 years": correct directionally; single-name liquidity drops materially after 18 months in most cases; the figure should be treated as an approximation.
- **[CRITIC FLAG — Missing perspective]** European options data and European underlyings not covered. If the company's structured products use European underlyings (Eurostoxx, DAX, single-name European equities), LSEG and Euronext/Eurex licensing apply differently.
- **[CRITIC FLAG — Missing perspective]** FX and rates vol not addressed. If the product includes FX-linked or rates-linked payoffs (e.g., range accruals, rates barriers), Bloomberg and LSEG dominate and no alternatives are meaningfully covered.
- **[CRITIC FLAG — Logical leap]** Cboe DataShop described as carrying "natural authority for equity vol data": reasonable inference but not directly evidenced by client quotes or industry survey.
- **[CRITIC — Strongest objection]** A private bank's head of structured products could reasonably argue that even a methodologically rigorous surface extrapolation does not satisfy internal audit requirements, which may mandate an approved external pricing source — and Bloomberg is that approved source by policy, not by quality alone.

---

## 6. Further Inquiry

**1. European options data sourcing — what are the LSEG/Euronext/Eurex licensing terms for European underlyings?**
Relevant if the product covers European single-name equities or European index underlyings (Eurostoxx 50, DAX). Exchange licensing in Europe is governed by separate agreements (Euronext, Deutsche Börse/Eurex, Cboe Europe). Not covered in this run. Primary research: direct contact with LSEG's European data team or Eurex market data.

**2. Bloomberg Data License — what does it actually cost for a small fintech?**
The Bloomberg DL and DL+ are described as bespoke enterprise agreements. No independent pricing data was found. This is the critical unknown for the "institutional credibility" path. Primary research: direct Bloomberg sales engagement. One relevant signal: Bloomberg typically prices DL by use case and volume, starting well above $100,000/year for commercial redistribution rights [UNVERIFIED].

**3. Cboe DataShop pricing — what are actual costs for the Vol Surface Fitter and EOD options data with Calcs?**
Cboe DataShop does not publish prices. Understanding the cost of exchange-direct sourcing (including the Vol Surface Fitter product) would clarify whether Cboe is viable as a mid-tier option between Databento (low cost) and Bloomberg (high cost). Primary research: Cboe DataShop contact form.

**4. Surface quality at long tenors — how does SpiderRock or Cboe DataShop compare to Bloomberg at 2–5 year tenors?**
Signal 4 identifies this as the key quality question but evidence is thin. An academic or practitioner comparison of surface quality at long tenors across vendors would inform whether a non-Bloomberg source is credibly defensible to institutional clients. Likely requires primary research or access to multiple live surfaces for comparison.

**5. Private bank vendor due diligence standards — is Bloomberg data sourcing a hard requirement or a preference?**
The strongest critic objection concerns whether internal bank policy mandates Bloomberg as an approved pricing source. If it does, no amount of methodology quality changes the outcome. Answering this requires primary research: conversations with heads of structured products or vendor management at private banks. This gap has not appeared in prior runs.

---

## 7. Sources

| # | Title | URL | Type |
|---|---|---|---|
| 1 | Bloomberg Terminal Cost 2026 | https://costbench.com/software/financial-data-terminals/bloomberg-terminal/ | Secondary |
| 2 | Bloomberg Terminal Pricing 2026 (Godel Discount) | https://godeldiscount.com/blog/bloomberg-terminal-cost-2026 | Secondary |
| 3 | Bloomberg Terminal Pricing Guide (Blue Gamma) | https://www.bluegamma.io/post/bloomberg-terminal-pricing | Secondary |
| 4 | Bloomberg Data License | https://professional.bloomberg.com/products/data/data-management/data-license/ | Primary |
| 5 | Bloomberg Terms of Service | https://data.bloomberg.com/tos/ | Primary |
| 6 | Bloomberg BDRSL Data Fees Public Disclosure | https://data.bloomberglp.com/professional/sites/10/BDRSL-Data-Fees-Public-Disclosure-.pdf | Primary |
| 7 | Bloomberg Real-Time Volatilities | https://data.bloomberglp.com/professional/sites/10/750114_Real-Time-Volatilities.pdf | Primary |
| 8 | Bloomberg Private Wealth Management | https://www.bloomberg.com/professional/solutions/private-wealth-management/private-banking/ | Primary |
| 9 | LSEG Volatility Surface | https://www.lseg.com/en/data-analytics/financial-data/pricing-and-market-data/fixed-income-pricing-data/futures-options-derivatives/volatility-surface | Primary |
| 10 | LSEG Data Redistribution | https://www.lseg.com/en/data-analytics/market-data/data-redistribution | Primary |
| 11 | LSEG Pricing (Vendr) | https://www.vendr.com/marketplace/refinitiv | Secondary |
| 12 | OptionMetrics | https://optionmetrics.com/ | Primary |
| 13 | OptionMetrics WRDS | https://wrds-www.wharton.upenn.edu/pages/about/data-vendors/optionmetrics/ | Primary |
| 14 | iVolatility FAQ | https://www.ivolatility.com/faq/ | Primary |
| 15 | iVolatility Data Download Terms | https://www.ivolatility.com/data-download-terms-of-use/ | Primary |
| 16 | Cboe DataShop Data Products | https://datashop.cboe.com/data-products | Primary |
| 17 | SpiderRock Volatility Surfaces | https://spiderrock.net/data/historical-data-analytics/volatility-surfaces/ | Primary |
| 18 | Databento Pricing | https://databento.com/pricing | Primary |
| 19 | Databento OPRA Dataset | https://databento.com/datasets/OPRA.PILLAR | Primary |
| 20 | Databento Market Data Licensing (Part 1) | https://databento.com/blog/introduction-market-data-licensing | Primary |
| 21 | Massive (Polygon.io) Pricing | https://massive.com/pricing | Primary |
| 22 | OPRA Fees Guide (MarketData.app) | https://www.marketdata.app/education/options/opra-fees/ | Secondary |
| 23 | Exegy: Hidden Cost of OPRA at Scale | https://www.exegy.com/hidden-cost-options-market-data/ | Secondary |
| 24 | Complexities in Market Data Licensing (Markets Media) | https://www.marketsmedia.com/complexities-expand-in-market-data-licensing/ | Secondary |
| 25 | FCA Wholesale Data Market Study Annex 4 | https://www.fca.org.uk/publication/market-studies/ms23-1-5-annex-4.pdf | Primary |
| 26 | Wall Street Prep: Bloomberg vs FactSet vs Refinitiv | https://www.wallstreetprep.com/knowledge/bloomberg-vs-capital-iq-vs-factset-vs-thomson-reuters-eikon/ | Secondary |
| 27 | Tradier Fintech Page | https://tradier.com/businesses/fintechs | Primary |
| 28 | Datarade: Best Implied Volatility Providers 2026 | https://datarade.ai/data-categories/implied-volatility-data/providers | Secondary |
| 29 | Nasdaq Data Link | https://www.nasdaq.com/solutions/data/nasdaq-data-link | Primary |
