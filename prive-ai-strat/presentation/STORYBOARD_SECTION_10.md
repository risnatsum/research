---
# Storyboard Section 10 — Proof
**Slides:** 22
**Generated:** 2026-06-26

---

## Slide 22: What Is Live and What Is in Progress
**Type:** Content | **Section:** Proof
**Intent:** Establish the current production state without overstating it: three quantitative analytics features live with institutional clients including Citi and UOB tier; Portfolio IQ and governance layer in SIT phase with active audit trail infrastructure; compliance architecture in progress. Separate what is live from what is coming.

### Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│  Where We Are Today                                                  │
├───────────────────────────────┬──────────────────────────────────────┤
│  LIVE IN PRODUCTION           │  IN TESTING / IN PROGRESS           │
│                               │                                      │
│  ▶ Portfolio Optimiser        │  ▶ Portfolio IQ (UC-1 to UC-5)      │
│    Constrained optimisation   │    LLM outputs — in SIT              │
│    Deterministic, auditable   │                                      │
│                               │  ▶ Governance layer                  │
│  ▶ Health Checks              │    Logging Hook, Confidence Scorer,  │
│    Rules-based signal         │    Audit Store, Override UI          │
│    detection                  │    — built, in integration testing   │
│                               │                                      │
│  ▶ Scenario Analysis          │  ▶ Compliance table (MiFID II /      │
│    Deterministic forward-     │    FCA / SFC / MAS) — in progress    │
│    looking simulations        │                                      │
│                               │  ▶ Client Lifecycle Agent            │
│  Deployed with clients at     │    — upcoming                        │
│  Citi and UOB tier            │                                      │
│                               │  ▶ Track B independent AI platform  │
│                               │    — in design                       │
└───────────────────────────────┴──────────────────────────────────────┘
```

### Content

**Headline:** Three quantitative features are live with institutional clients today. The AI layer is in testing — not yet production.

**Body:**

**In production now:**

| Feature | Type | Status |
|---|---|---|
| Portfolio Optimiser | Deterministic constrained optimisation | Live with clients at Citi and UOB tier |
| Health Checks (Portfolio Health Monitoring) | Rules-based signal detection | Live with clients at Citi and UOB tier |
| Scenario Analysis | Deterministic forward-looking simulation | Live with clients at Citi and UOB tier |

These three features are deterministic and rules-based. No generative AI output is involved. Outputs are reproducible and do not require an AI governance layer.

**In SIT (System Integration Testing) — built, not yet in production:**

- **Portfolio IQ (UC-1 through UC-5):** LLM-generated portfolio commentary, narrative insights, and recommendation synthesis. Built. Undergoing integration testing. Required before any production deployment to clients.
- **Governance layer:** Logging Hook, Confidence Scorer, Decision Record Writer, Audit Store, and Override UI are all built and being tested as an integrated system. This is the audit trail infrastructure that Portfolio IQ depends on before it can go live.

**In progress / upcoming:**

- Compliance mapping table (MiFID II / FCA / SFC / MAS) — in progress
- Client Lifecycle Agent — upcoming differentiator, not yet in testing
- Track B independent AI platform — in design and early development
- Token cost commercial model — being tested internally

**Speaker notes:**
The two columns here are not a roadmap — they are a statement of current fact. Three quantitative analytics features are already running in production with clients at the Citi and UOB tier; that is the live baseline. Portfolio IQ and the governance layer exist and are being tested, but they are not in production yet — SIT means the work is done but has not cleared integration testing. The compliance architecture and the Client Lifecycle Agent are further out. The reason to be explicit about this sequencing is simple: institutional clients have seen enough vendors blur the line between "built" and "live." We are not doing that here.

---
