---
# Section 3: Insight — Slides 5–6

**Narrative role:** The insight section is the intellectual pivot of the deck. It reframes the problem the client already recognises — AI is hard to get right — into a more precise diagnosis: the issue is not a shortage of AI features, it is how those features are architected and governed. Slide 5 names the structural failure mode. Slide 6 introduces the conceptual distinction that underpins everything Privé does differently.

---

## Slide 5: Why AI Additions to Wealth Platforms Often Fall Short
**Type:** Content | **Section:** Insight
**Intent:** Reframe the problem: bolt-on AI creates a compliance patchwork — uneven governance, disconnected data layers, and no clear line between rules-based outputs and generative AI. The issue is not AI availability; it is AI architecture.

### Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  Why AI Additions to Wealth Platforms Often Fall Short              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  The problem is not a shortage of AI features.                      │
│  It is how those features are bolted on.                            │
│                                                                     │
│  ┌──────────────────────┐  ┌──────────────────────┐                │
│  │  BOLT-ON AI          │  │  ARCHITECTED AI       │               │
│  │                      │  │                       │               │
│  │ ▶ Features added     │  │ ▶ Governance designed │               │
│  │   post-hoc           │  │   at the platform     │               │
│  │                      │  │   layer               │               │
│  │ ▶ Each module with   │  │                       │               │
│  │   its own audit      │  │ ▶ Unified data layer  │               │
│  │   trail (or none)    │  │   with consistent     │               │
│  │                      │  │   lineage             │               │
│  │ ▶ No separation of   │  │                       │               │
│  │   deterministic vs   │  │ ▶ Explicit separation │               │
│  │   generative output  │  │   of output types     │               │
│  └──────────────────────┘  └──────────────────────┘               │
│                                                                     │
│  Compliance risk does not come from using AI.                       │
│  It comes from not knowing which kind of AI produced a given output.│
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Content

**Headline:** The compliance risk in wealth AI is not feature risk — it is architecture risk.

**Body:**

When wealth platforms add AI incrementally — a summarisation tool here, a screening assistant there — three structural problems emerge:

- **Uneven governance.** Each feature arrives with its own (or absent) audit mechanism. There is no consistent standard for what gets logged, reviewed, or overridden.
- **Disconnected data layers.** AI modules pulling from different data sources produce outputs that cannot be reconciled or traced back to a single source of truth — a problem when a regulator asks why a portfolio flag was raised.
- **No separation of output types.** The most consequential gap: platforms present deterministic, rules-based outputs and generative AI outputs side by side, with no signal to the wealth manager — or the client — about which type of reasoning produced the result. That distinction has direct regulatory and liability implications.

The question for any wealth platform is not "do we have AI?" It is: "can we account for every AI output, and do our clients know what kind of output they are acting on?"

**Speaker notes:**
Most wealth platforms we speak to have AI — but it has arrived as a series of additions rather than a considered architecture. The consequence is a compliance patchwork: different audit standards for different features, data that cannot be reconciled across modules, and — critically — no clear line between outputs a model computed deterministically and outputs a language model generated. That last gap is where regulatory exposure concentrates. Regulators under MAS, SFC, and FCA are not asking whether you use AI. They are asking whether you can explain, reproduce, and override what it produced. Bolt-on architecture makes that question difficult to answer.

---

## Slide 6: A Distinction That Matters: Quantitative Analytics vs. Generative AI
**Type:** Content | **Section:** Insight
**Intent:** Correct a common conflation that matters commercially and regulatorily: Portfolio Optimiser, Health Checks, and Scenario Analysis are deterministic, rules-based quantitative analytics. Generative AI — with its different governance requirements — applies only to Portfolio IQ use cases, the Client Lifecycle Agent, and Privé Agent capabilities. Clients need to know which type of output they are acting on.

### Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  A Distinction That Matters: Quantitative Analytics vs. Generative AI│
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  These are not the same thing. Calling both "AI" creates            │
│  commercial and regulatory confusion.                               │
│                                                                     │
│  ┌───────────────────────────────┐  ┌──────────────────────────┐   │
│  │  QUANTITATIVE ANALYTICS       │  │  GENERATIVE AI           │   │
│  │  Deterministic · Rules-based  │  │  LLM-powered · Inferential│  │
│  ├───────────────────────────────┤  ├──────────────────────────┤   │
│  │                               │  │                          │   │
│  │  Portfolio Optimiser          │  │  Portfolio IQ            │   │
│  │  → Constraint-based           │  │  → LLM-generated         │   │
│  │    allocation; same inputs     │  │    commentary, narrative │   │
│  │    always produce same output  │  │    insights, synthesis   │   │
│  │                               │  │                          │   │
│  │  Health Checks                │  │  Client Lifecycle Agent  │   │
│  │  → Rule-triggered flags;      │  │  → AI-driven engagement; │   │
│  │    fully auditable without     │  │    outputs vary by model │   │
│  │    an LLM governance layer     │  │    and prompt context    │   │
│  │                               │  │                          │   │
│  │  Scenario Analysis            │  │  Privé Agent             │   │
│  │  → Parametric modelling;      │  │  → Natural language      │   │
│  │    reproducible under any      │  │    interface; generative │   │
│  │    audit standard              │  │    interpretation        │   │
│  │                               │  │                          │   │
│  │  Governance requirement:       │  │  Governance requirement: │   │
│  │  Standard model validation    │  │  LLM oversight layer:    │   │
│  │  and audit logging             │  │  logging, confidence     │   │
│  │                               │  │  scoring, human override  │   │
│  └───────────────────────────────┘  └──────────────────────────┘   │
│                                                                     │
│  A wealth manager acting on a Portfolio Optimiser output            │
│  and one acting on Portfolio IQ commentary are taking on            │
│  different regulatory obligations. They should know which is which. │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Content

**Headline:** Not all platform "AI" is the same — and the difference is a regulatory and commercial fact, not a technical footnote.

**Body:**

The wealth technology market routinely markets quantitative analytics tools as AI. This creates a conflation that matters in two directions:

**What is deterministic quantitative analytics (not generative AI):**

| Feature | How it works | Governance implication |
|---|---|---|
| Portfolio Optimiser | Constraint-based allocation model; same inputs always produce the same output | Auditable and reproducible without an LLM governance layer |
| Health Checks | Rule-triggered flags against portfolio parameters | Fully explainable to a regulator as a rules-based system |
| Scenario Analysis | Parametric modelling across defined stress scenarios | Reproducible under any audit standard; no stochastic output |

**What is generative AI (and requires an LLM governance layer):**

| Feature | How it works | Governance implication |
|---|---|---|
| Portfolio IQ | LLM-generated portfolio commentary, narrative insights, recommendation synthesis | Outputs vary; requires logging, confidence scoring, and human override capability |
| Client Lifecycle Agent | AI-driven client engagement and communication automation | Generative output requires oversight and audit trail per FCA/MAS/SFC expectations |
| Privé Agent | Natural language interface across platform; LLM interprets and executes | Generative interpretation layer requires full LLM governance stack |

The commercial implication: vendors who call all of this "AI" uniformly invite clients to apply the same governance standard to both categories — either under-governing the generative tools or over-engineering the quantitative ones. Both are costly errors.

**Speaker notes:**
This is a distinction we see collapsed repeatedly in the market, and it matters in a specific way. Portfolio Optimiser, Health Checks, and Scenario Analysis are deterministic — run them twice with the same inputs and you get the same output. A regulator can examine, reproduce, and challenge that output using standard model validation procedures. No language model governance layer required. Portfolio IQ, the Client Lifecycle Agent, and Privé Agent are generative — their outputs are shaped by an LLM and will vary based on model state, prompt context, and retrieval. Those outputs require a different governance architecture: logging every invocation, attaching a confidence signal, creating a structured decision record, and giving the wealth manager an explicit override mechanism. Privé treats these as two distinct categories because they are. Conflating them is not just a technical imprecision — it is a compliance risk for any institution that adopts the platform and then has to explain its AI governance to a regulator.

---
