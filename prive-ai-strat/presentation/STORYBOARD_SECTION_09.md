---
# Storyboard Section 09 — Commercial
**Slides:** 21
**Section theme:** Token Cost Management — honest, structured cost architecture as a credibility signal
**Audience:** Wealth managers and institutional clients at banks including Citi and UOB

---

## Slide 21: Token Cost Management: How We Handle AI Pricing at Scale
**Type:** Content | **Section:** Commercial
**Intent:** Address cost structure honestly: usage has scaled from USD 15/month to USD 600/month as AI adoption grows, driven primarily by AI-assisted development tools. Strategy: build small, measure token costs before setting commercial pricing, and offer enterprise clients the option to supply their own API keys for AI-intensive products. This is structured cost architecture, not a pricing caveat.

### Layout

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  AI COST ARCHITECTURE: HOW PRIVÉ HANDLES TOKEN PRICING AT SCALE             │
│  We don't pass on unplanned usage costs. Here's the structure behind that.  │
├───────────────────────────┬─────────────────────────────────────────────────┤
│  INTERNAL GROWTH SIGNAL   │  COMMERCIAL PRICING APPROACH                    │
│                           │                                                 │
│  Jan 2026:  USD 15/mo     │  Build small → measure → price                 │
│       ↓                   │                                                 │
│  Jun 2026:  USD 600/mo    │  No pricing commitment until token              │
│                           │  behaviour is understood at scale               │
│  40x in 5 months          │                                                 │
│  (driven by dev tooling)  │                                                 │
├───────────────────────────┴─────────────────────────────────────────────────┤
│  CLIENT TIER STRUCTURE                                                       │
├──────────────────────────────┬──────────────────────────────────────────────┤
│  ENTERPRISE / AI-INTENSIVE   │  TIER 3 / SMALLER CLIENTS                   │
│  (e.g. Nexus platform)       │                                              │
│                              │                                              │
│  ▶ Client supplies own       │  ▶ Privé bears token cost                   │
│    API keys                  │                                              │
│  ▶ Client controls usage     │  ▶ Active testing underway to               │
│    and cost directly         │    build commercial model                   │
│  ▶ No overage surprise       │    before committing pricing                │
│    from Privé side           │                                              │
└──────────────────────────────┴──────────────────────────────────────────────┘
```

### Content

**Headline:** Privé has done the cost architecture work so clients don't inherit the uncertainty.

**Body:**

**What the internal trajectory tells us:**
- Token costs grew from USD 15/month in January 2026 to USD 600/month by June 2026 — a 40x increase over five months
- This growth was driven primarily by AI-assisted development tooling, not client-facing features
- The trajectory is a signal, not a problem: it shows what rapid AI adoption looks like internally, and it informs how Privé thinks about commercial pricing before committing to clients

**How this translates into commercial structure:**

| Client scenario | Token cost model | Rationale |
|---|---|---|
| Enterprise / AI-intensive products (e.g. Nexus) | Client supplies own API keys | Client controls usage directly; no pass-through risk from Privé |
| Smaller or tier-3 clients | Privé bears cost during active testing phase | No pricing commitment until token behaviour is understood at this tier |
| Tier 1 clients integrating standalone tools or APIs | Lower token exposure; standard pricing applies | Limited generative AI surface area, lower support overhead |

**The principle:**
Build small functionalities first. Measure token costs under real usage. Then price. Privé does not lock clients into AI usage charges before the cost model is validated.

**Speaker notes:**
The 40x internal cost increase sounds alarming — it isn't. It reflects the speed at which Privé's own teams adopted AI-assisted development tooling, and it gave us early, concrete data on what unconstrained AI usage actually costs at scale. That data is now structural input into how we price for clients. For enterprise clients running AI-intensive workflows — Nexus being the clearest example — the answer is straightforward: they supply their own API keys and own their usage costs directly. For smaller clients where Privé absorbs the cost, we are still in the testing phase, and we will not commit to a pricing model until that testing produces a number we can stand behind. The message is not that pricing is unsettled — it is that we have the discipline to measure before we quote.

---
