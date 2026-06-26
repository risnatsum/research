# Section 05: Track A — Slides 9–13

---

## Slide 9: Track A: What the Upgraded Preview Managers Platform Delivers
**Type:** Content | **Section:** Track A
**Intent:** Describe the Track A scope as a coherent upgrade story — hardened quantitative analytics with explicit governance, AI-native features with human oversight built in, and a platform automation layer that reduces the operational burden wealth managers carry today.

### Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  Track A: The Upgraded Preview Managers Platform                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Three layers, one coherent upgrade:                                │
│                                                                     │
│  ┌───────────────────────┐  ┌────────────────────────────────────┐  │
│  │ QUANTITATIVE          │  │ AI-NATIVE FEATURES                 │  │
│  │ ANALYTICS             │  │                                    │  │
│  │                       │  │ Portfolio IQ                       │  │
│  │ Portfolio Optimiser   │  │ Client Lifecycle Agent             │  │
│  │ Health Checks         │  │ Privé Agent                        │  │
│  │ Scenario Analysis     │  │                                    │  │
│  │                       │  │ Human oversight built in           │  │
│  │ Deterministic.        │  │ Governance layer active            │  │
│  │ Auditable. Live.      │  │                                    │  │
│  └───────────────────────┘  └────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │ PLATFORM AUTOMATION                                         │    │
│  │ Asset onboarding · Fund document updates · Data freshness   │    │
│  │ Manual workflows replaced with auditable, automated flows   │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Content

**Headline:** Track A is not a feature drop — it is a platform architecture upgrade with three distinct capability layers.

**Body:**

Track A upgrades the existing Preview Managers platform across three layers, each with a distinct role:

- **Deterministic Quantitative Analytics** — Portfolio Optimiser, Health Checks, and Scenario Analysis. Rules-based, reproducible, explainable. Live with institutional clients today.
- **AI-Native Features** — Portfolio IQ, Client Lifecycle Agent, and Privé Agent. Generative AI capabilities with a purpose-built human oversight and governance layer. Designed to meet regulatory requirements from the ground up, not retrofitted.
- **Platform Automation** — Asset onboarding, fund document updates, data freshness signalling. Manual operational processes replaced with validated, automated flows. No AI involved — pure rules-based automation.

The layers are designed to be independent: quantitative analytics does not require the AI governance layer. Automation does not depend on AI features being active. Each layer delivers standalone value and compounds when operating together.

**Speaker notes:**
The architecture choice here is deliberate — three layers means three different accountability models, and clients can engage with each independently. The quantitative analytics layer is the most production-hardened and requires no AI governance conversation to deploy. The AI-native layer carries additional compliance requirements, which are addressed in the compliance section later in the deck. Platform automation is often the fastest operational win — it removes manual work without touching the client-facing experience at all.

---

## Slide 10: Deterministic Quantitative Analytics: The Three Live Features
**Type:** Content | **Section:** Track A
**Intent:** Name and describe Portfolio Optimiser, Health Checks, and Scenario Analysis with precision — rules-based, deterministic, no generative output. Explain why that distinction is a feature, not a limitation: it means outputs are auditable, reproducible, and explainable to regulators without an AI governance layer.

### Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  Deterministic Quantitative Analytics — Three Live Features         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌──────────────────────┐ ┌─────────────────────┐ ┌─────────────┐  │
│  │ PORTFOLIO OPTIMISER  │ │ HEALTH CHECKS        │ │ SCENARIO    │  │
│  │                      │ │                      │ │ ANALYSIS    │  │
│  │ Constrained          │ │ Rules-based signal   │ │             │  │
│  │ optimisation         │ │ detection against    │ │ Forward-    │  │
│  │ algorithm            │ │ live portfolio data  │ │ looking     │  │
│  │                      │ │                      │ │ what-if     │  │
│  │ Rebalancing recs     │ │ Flags: drift,        │ │ simulations │  │
│  │ vs. client risk      │ │ threshold breaches,  │ │             │  │
│  │ profile and mandate  │ │ mandate violations   │ │ Model-      │  │
│  │                      │ │                      │ │ driven      │  │
│  │ Same inputs →        │ │ No LLM involved      │ │ outcome     │  │
│  │ same output.         │ │                      │ │ projection  │  │
│  │ Always.              │ │                      │ │             │  │
│  └──────────────────────┘ └─────────────────────┘ └─────────────┘  │
│                                                                     │
│  ▶ No generative output. No AI governance layer required.           │
│    Outputs are auditable, reproducible, and regulator-explainable.  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Content

**Headline:** Deterministic means auditable — same inputs, same output, every time, with no AI governance layer required.

**Body:**

**Portfolio Optimiser**
Constrained optimisation algorithm that surfaces rebalancing recommendations against a client's risk profile and mandate. The algorithm is deterministic: given identical portfolio data and mandate parameters, it will produce an identical output. No inference, no generation, no probabilistic output. A regulator asking "why did this system recommend reducing Equity X by 4.2%" gets a complete, traceable answer from the algorithm logic alone.

**Health Checks**
Rules-based signal detection running against live portfolio data. Flags portfolio drift, threshold breaches, and mandate violations as they occur. There is no LLM in this feature — detection logic is explicit, version-controlled, and independently auditable. Every flag can be traced to a specific rule and the data point that triggered it.

**Scenario Analysis**
Forward-looking what-if simulations across asset classes. Model-driven outcome projection using defined parameters. Deterministic — the same scenario inputs produce the same projected outcomes. Wealth managers can run multiple scenarios, compare outputs, and present the basis for a recommendation without any AI audit trail.

**Why determinism is a feature, not a limitation:**
These tools can be deployed, demonstrated to regulators, and integrated into client-facing workflows without engaging the firm's AI governance process. That is a meaningful commercial and operational advantage — particularly for institutions where internal AI approval cycles are measured in months, not weeks.

**Speaker notes:**
The distinction we are drawing here is not semantic — it has real compliance consequences. MAS, FCA, and SFC guidelines on AI in financial services apply to systems that generate probabilistic outputs, make inferences, or use machine learning. These three features do none of that. They execute defined algorithms against structured data. That means they sit outside most AI governance frameworks entirely and can move to production significantly faster than generative AI features. For clients at institutions with active internal AI governance reviews, this is a meaningful unlock.

---

## Slide 11: AI-Native Features: Portfolio IQ and the Client Lifecycle Agent
**Type:** Content | **Section:** Track A
**Intent:** Describe the genuinely generative AI features: Portfolio IQ (LLM-generated portfolio commentary, narrative insights, recommendation synthesis) and Client Lifecycle Agent (AI-driven client engagement automation). Distinguish from the quantitative tools — these carry different governance requirements, which are addressed in the compliance section.

### Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  AI-Native Features — Generative AI with Governance Built In        │
├──────────────────────────────────────┬──────────────────────────────┤
│  PORTFOLIO IQ                        │  CLIENT LIFECYCLE AGENT      │
│  LLM-generated portfolio intelligence│  AI-driven client engagement │
├──────────────────────────────────────┼──────────────────────────────┤
│                                      │                              │
│  UC-1: Portfolio Summary             │  CRM-integrated engagement   │
│  UC-2: CIO View                      │  automation                  │
│  UC-3: AI Insights                   │                              │
│  UC-4: Risk Insights                 │  Proactive opportunity        │
│  UC-5: Composition Insights          │  identification              │
│                                      │                              │
│  LLM generates natural language      │  Product proposal drafting   │
│  output from live portfolio data     │  surfaced to RM for review   │
│                                      │                              │
│  → In SIT. Audit trail active.       │  → Differentiator capability │
│    Override UI: accept/modify/reject │    Forward-looking roadmap   │
│                                      │                              │
├──────────────────────────────────────┴──────────────────────────────┤
│  ▶ These features call LLMs. Different governance tier applies.      │
│    Human oversight architecture — detailed in compliance section.   │
└─────────────────────────────────────────────────────────────────────┘
```

### Content

**Headline:** Portfolio IQ and the Client Lifecycle Agent are genuine generative AI — and are governed accordingly.

**Body:**

**Portfolio IQ — Five Use Cases, All LLM-Generated**

Portfolio IQ calls a large language model to generate natural language output from live portfolio data. There is no pre-written template — the system produces original narrative each time, grounded in the underlying data.

- **UC-1: Portfolio Summary** — Plain-language summary of current portfolio composition and performance
- **UC-2: CIO View** — Strategic framing of the portfolio against current market conditions, reflecting CIO positioning
- **UC-3: AI Insights** — Synthesised observations across portfolio holdings, surfacing patterns and anomalies
- **UC-4: Risk Insights** — Narrative articulation of risk exposure, concentration, and mandate-relative positioning
- **UC-5: Composition Insights** — Asset class and sector-level analysis presented in accessible language for client review

Portfolio IQ is in system integration testing (SIT). The audit trail infrastructure — logging hook, confidence scorer, decision record, audit store — is active. Wealth managers have explicit accept, modify, or reject control over every output before it is surfaced to a client.

**Client Lifecycle Agent — AI-Driven Engagement Automation**

The Client Lifecycle Agent applies AI to client relationship management: identifying engagement opportunities, surfacing product proposals, and drafting outreach — all integrated with the CRM and routed through the RM before reaching a client. This capability is positioned as a forward-looking differentiator on the platform roadmap, not a feature currently in production.

**Governance note:** Both features invoke LLMs and carry different regulatory requirements than the deterministic quantitative analytics tools. The compliance architecture covering these features — including the human oversight layer and audit record structure — is covered in detail in the compliance section.

**Speaker notes:**
The governance tier separation is not a caveat — it is part of the design. We built the compliance layer specifically because these features generate probabilistic outputs and require it. Portfolio IQ is in SIT right now, which means the governance infrastructure is being stress-tested, not planned. The Client Lifecycle Agent is a differentiator capability we are building toward — we are naming it explicitly because it represents the direction of the platform, and clients who engage now have the opportunity to shape what that looks like for their context.

---

## Slide 12: Privé Agent: Natural Language Intelligence Across the Platform
**Type:** Content | **Section:** Track A
**Intent:** Present the Privé Agent capability — natural language interface and task-execution layer built into the platform. Position it as the connective tissue between wealth manager workflows and platform intelligence, enabling RMs to query, act, and escalate without leaving their working context.

### Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  Privé Agent — Natural Language Across the Platform                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  RM asks a question in plain language                               │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │ "Show me clients with equity concentration above mandate     │    │
│  │  and flag any with a review due this quarter."              │    │
│  └──────────────────────┬──────────────────────────────────────┘    │
│                         │                                           │
│                         ▼                                           │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  PRIVÉ AGENT                                                 │   │
│  │                                                              │   │
│  │  Interprets intent → Queries platform data                   │   │
│  │  → Returns structured result → Executes task if instructed   │   │
│  └──────────────────────┬─────────────────────────────────────-┘   │
│                         │                                           │
│         ┌───────────────┼───────────────┐                           │
│         ▼               ▼               ▼                           │
│   ┌──────────┐   ┌──────────────┐  ┌───────────────┐               │
│   │ Portfolio│   │ Health Check │  │ Task execution│               │
│   │ data     │   │ flags        │  │ (schedule,    │               │
│   │          │   │              │  │  flag, draft) │               │
│   └──────────┘   └──────────────┘  └───────────────┘               │
│                                                                     │
│  ▶ RM stays in working context. No system switching required.       │
└─────────────────────────────────────────────────────────────────────┘
```

### Content

**Headline:** Privé Agent is the natural language layer that connects wealth manager intent to platform intelligence and action.

**Body:**

Privé Agent is a generative AI capability built into the platform that allows relationship managers to interact with platform data and functions in plain language — without navigating between screens, running reports manually, or switching context.

**What it enables:**

- **Query** — Ask plain-language questions across portfolio data, client records, health check flags, and scenario outputs. The agent interprets intent, queries the relevant data layer, and returns a structured result.
- **Act** — Instruct the agent to execute tasks: schedule a review, flag a client for follow-up, draft a portfolio summary for RM review. Actions are logged and attributed.
- **Escalate** — Where the agent surfaces an output that requires RM judgment, it presents the result with a clear escalation path — not a silent recommendation.

**Why this matters operationally:**

The friction in most wealth manager workflows is not data access — it is context-switching. An RM working a client review should not need to open four separate screens to answer a mandate compliance question. Privé Agent reduces that to a single natural language query inside the working context the RM already occupies.

Privé Agent is a generative AI feature. It operates within the same governance architecture as Portfolio IQ — every interaction is logged, and task execution actions produce an auditable record.

**Speaker notes:**
The value of Privé Agent is not the novelty of natural language interfaces — that expectation is now table stakes. The value is that this is built into the platform natively, which means it has access to live portfolio data, health check signals, and client records in the same session. An externally bolted-on chat interface does not have that. The task-execution layer is what makes this genuinely useful — querying is convenience, acting is productivity. And because every action is logged, the RM is not trading operational speed for audit risk.

---

## Slide 13: Platform Automation: Removing the Manual Layer
**Type:** Content | **Section:** Track A
**Intent:** Show what automation delivers operationally: asset onboarding, fund document updates, and data freshness checks — the manual processes that consume wealth manager and operations time — converted to automated, auditable flows with no change to the client-facing experience.

### Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  Platform Automation — Three Manual Processes, Automated            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  BEFORE                    │  AFTER                         │    │
│  ├────────────────────────────┼────────────────────────────────┤    │
│  │                            │                                │    │
│  │  Asset onboarding:         │  Validated automated intake    │    │
│  │  Manual field entry,       │  with structured validation    │    │
│  │  error-prone, untracked    │  and full audit trail          │    │
│  │                            │                                │    │
│  │  Fund document updates:    │  Automated freshness detection │    │
│  │  Manual monitoring of      │  against external sources;     │    │
│  │  external sources,         │  platform flags when document  │    │
│  │  inconsistent cadence      │  version changes               │    │
│  │                            │                                │    │
│  │  Data freshness checks:    │  Platform-level metadata flag; │    │
│  │  Manual lookup to confirm  │  last-updated signal surfaced  │    │
│  │  when data was last        │  inline — no lookup required   │    │
│  │  refreshed                 │                                │    │
│  │                            │                                │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  ▶ Rules-based automation. No AI. Client experience unchanged.      │
│    Operations team load reduced. Audit trail created automatically. │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Content

**Headline:** The highest-friction operational tasks are not complex — they are repetitive. Automation eliminates them without touching the client experience.

**Body:**

Platform automation in Track A targets three specific manual processes that consume operations and wealth manager time at consistent, predictable points in the workflow. None of these use AI — they are rules-based, deterministic automation flows.

**Asset Onboarding**
Manual field entry for new asset onboarding — historically error-prone and reliant on individual operator attention — is replaced by a validated automated intake flow. Each onboarding event is logged with a complete audit trail. Errors are caught at intake, not discovered downstream.

**Fund Document Updates**
Fund documents change. Keeping platform records current against external sources was a manual monitoring task with no consistent cadence. Automated freshness detection checks external document sources and flags the platform when a version change is detected. Operations teams are notified; no manual polling required.

**Data Freshness Signals**
Confirming when data was last refreshed previously required a manual lookup — a small friction that compounds across dozens of daily decisions. A platform-level metadata flag now surfaces the last-updated signal inline, at the point of use, without requiring the RM or operations team to leave their current context.

**What changes and what does not:**
These automation flows are invisible to the end client. The client-facing experience is unchanged. What changes is the operational layer beneath it: less manual work, fewer error vectors, and an automatic audit record for each process event.

**Speaker notes:**
Automation is often underestimated in a pitch context because it is not a headline capability — but it is frequently the highest-value near-term unlock for operations teams. These three flows map directly to tasks that wealth managers and operations staff describe as consistent points of friction. The fact that none of these require AI is a feature in this context: they can be deployed, audited, and demonstrated to internal risk teams without an AI governance review. For clients who are earlier in their AI adoption journey, platform automation is often the fastest path to measurable operational impact.

---
