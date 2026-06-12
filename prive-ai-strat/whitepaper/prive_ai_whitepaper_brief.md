# Privé AI Capabilities — Whitepaper Input Brief

> **Purpose:** Structured input for the AI in Wealth Management whitepaper. Use as a reference layer — link to Privé capabilities where relevant rather than embedding product descriptions inline. This document sets the narrative architecture and key claims.

---

## 1. The Market Context

### Where the Industry Is

- AI is reshaping wealth management, but adoption is uneven and largely cosmetic at the top
- Even tier-1 players (JP Morgan, Goldman Sachs, Morgan Stanley) are only now beginning to roll out AI chatbots and AI-enabled workflows at scale — globally, not just pilots
- The majority of regional banks, smaller private banks, and EAMs/MFOs are still stuck at the **data layer** — focused on normalisation, cleansing, and enrichment
- The operative principle: **garbage in, garbage out** — AI is only as good as the underlying data infrastructure
- Web 3.0 and the AI revolution are convergent forces redefining the client experience layer across financial services

### The Asia Dimension

- Asian wealth management markets operate under materially different processes, compliance frameworks, and sales cycles compared to Europe and the US
- Even well-capitalised global technology players (e.g. Palantir, Snowflake) lack both the **domain depth** and the **Asia-specific expertise** to serve this market well
- Privé has been operating in Asia since inception, with multi-market enterprise deployments and deep understanding of regional nuance
- This is a genuine and defensible competitive moat — not a marketing claim

---

## 2. The AI Architecture Framework

> **Narrative anchor for the whitepaper:** To enable AI in wealth management, firms must think in four layers. Most firms are only engaging with one or two. The whitepaper should use this framework to assess where different player types sit and what they need to do.

### Layer 1 — Infrastructure

**What it is:** The foundational plumbing. Data sources, custodian aggregations, normalisation, security, and cloud architecture.

**What belongs here:**
- Multi-custodian data aggregation and normalisation
- Market data integration
- Cloud-native, cloud-agnostic architecture (AWS, GCP, etc.)
- Data privacy and security: tokenisation, masking prior to any cloud or LLM transmission
- Regulatory and compliance data requirements (especially Asia-specific)
- Governance framework: access controls, audit trails, data lineage

**Privé capability hooks:**
- 15+ years of custodian integrations — proprietary normalised database and data strategy
- Active data strategy advisory: helping Tier 2 clients normalise data lakes
- AWS APN partner; cloud-agnostic deployment
- Tokenisation (Ubiq Security) — data masked before leaving client environment

---

### Layer 2 — Intelligence

**What it is:** The analytical and quantitative engine layer. This is **not** where LLMs do the work — it is where validated, enterprise-grade calculation engines operate.

**What belongs here:**
- Portfolio analytics engines (cost basis, performance attribution, risk metrics)
- Quantitative models built and validated over time
- Structured products analytics
- Compliance and reporting calculation engines
- Machine learning models (not generative AI — predictive, classification, anomaly detection)

**Key principle:** The intelligence layer produces reliable, auditable outputs. LLMs do not replace this layer — they sit above it.

**Privé capability hooks:**
- Quant engines deployed for enterprise clients across multiple markets over 15 years
- Machine learning and AI capabilities in production since 2016–2017
- API-first architecture: all capabilities exposed as APIs
- All capabilities MCP-enabled — connectable to any orchestration layer or AI agent

---

### Layer 3 — Orchestration

**What it is:** The connective tissue. How tools, models, agents, and data sources are connected and coordinated.

**What belongs here:**
- MCP (Model Context Protocol) server architecture
- API gateway and workflow routing
- Agent orchestration (multi-agent frameworks, task decomposition)
- LLM model selection and routing (including regional model deployment)
- Integration with external systems: CRM, order management, custodian portals

**Key principle:** Orchestration is the layer that makes intelligence accessible and composable. Without it, the intelligence layer is siloed.

**Privé capability hooks:**
- Full MCP enablement across Privé's capability suite
- AWS Bedrock integration: run any LLM model in any region — supports data residency requirements
- Any model, any cloud, any region — without re-engineering the underlying intelligence layer

---

### Layer 4 — Experience

**What it is:** The layer that faces clients, relationship managers, and analysts. This is where AI creates visible value.

**What belongs here:**
- Client-facing AI interfaces (chatbots, advisory tools, portfolio explainers)
- RM-facing productivity tools (meeting prep, portfolio review, client insights)
- Explainability: translating quantitative outputs into natural language
- Agent tools: how agents are built, how clients interact with them, how they learn
- Feedback loops and continuous improvement (experience learning)

**Key principle for the whitepaper:** For wealth management, **the experience layer is where differentiation lives**. Infrastructure and intelligence can be outsourced or bought. The experience layer — how clients engage, how RMs work, how tools behave — is where firms build lasting competitive advantage.

**Privé capability hooks:**
- **AgentBuilder**: low-code platform for business analysts and product users to design experience layer solutions
  - Pulls from Privé MCPs (infrastructure + intelligence + orchestration pre-connected)
  - Supports external plugins and third-party data sources
  - User selects LLM, workflows, and logic — no engineering required
  - Designed for non-technical product and business users
- LLM layer used for explainability and client-facing output — not for calculation
- Roadmap: experience learning (how apps and agent tools improve through client interaction)

---

## 3. Strategic Recommendations by Player Type

### Tier-1 Global Banks (JP Morgan, Goldman, Morgan Stanley, etc.)
- Already investing across all layers — but integration is still immature
- Risk: AI chatbots as front-end with legacy infrastructure underneath; brittle at the seams
- Focus: orchestration coherence and governance across the stack

### Regional and Mid-Tier Private Banks
- Typically stuck in Layer 1 — data quality and normalisation remain the blocker
- Cannot yet benefit from AI capability without fixing the foundation
- Recommendation: prioritise data strategy before AI tooling investment
- Privé can accelerate Layer 1 maturity (data advisory, normalisation, custodian integrations)

### EAMs and MFOs (External Asset Managers, Multi-Family Offices)
- Should **not** try to build Layers 1–3 themselves — specialist providers exist and the economics don't work for this segment
- Recommendation: outsource infrastructure, intelligence, and orchestration to specialist providers; focus own effort entirely on the experience layer
- Privé's stack (API + MCP + AgentBuilder) is specifically designed for this use case

---

## 4. Governance — The Cross-Cutting Imperative

> Governance is not a single layer — it runs through all four layers and is often the deciding factor in enterprise adoption.

**Key governance dimensions:**
- **Data governance:** lineage, access control, normalisation standards (Layer 1)
- **Model governance:** auditability of calculations, explainability of outputs, version control (Layer 2)
- **Orchestration governance:** which models are used, where data goes, regional compliance (Layer 3)
- **Experience governance:** client consent, interaction logging, regulatory alignment (Layer 4)

**Privé positioning:** Governance-by-design — tokenisation, regional model deployment, masked data flows, and audit-ready calculation engines address governance requirements at each layer without imposing them as afterthoughts.

---

## 5. Privé's Founding Thesis (for whitepaper context)

- Tech-first company since inception — not a retrofit
- Machine learning and AI in production since 2016–2017
- API-first architecture — all capabilities connectable
- MCP-enabled — all capabilities accessible to any orchestration or agent layer
- Multi-market Asia expertise — a genuine differentiator against global technology generalists
- Data strategy built from hundreds of custodian integrations — clients benefit from Privé's institutional knowledge, not just the technology

---

## 6. Whitepaper Structure Suggestion

1. **The AI Moment in Wealth Management** — market framing, what's changed, what's coming
2. **Where Players Actually Are** — honest assessment by segment; the data problem; the chatbot illusion
3. **The Four-Layer Framework** — infrastructure → intelligence → orchestration → experience
4. **Governance as a Foundation, Not an Add-On** — cross-cutting requirements
5. **What Different Players Should Do** — segment-by-segment strategic guidance
6. **The Experience Layer Is the Battleground** — why this is where differentiation will be won or lost
7. **How Privé Enables This** — capabilities linked to each layer; AgentBuilder as the experience enabler
8. **Asia Is Not Europe. Asia Is Not the US.** — why domain and regional expertise matters
9. **What to Do Next** — practical starting points for each segment

---

*Confirmed interpretations:*
- "Freeway" throughout = **Privé** (voice-to-text substitution) ✓
- "RAC" = **RAG** (Retrieval-Augmented Generation) ✓
- "Level 2s / Learn Level 2s" = **Tier 2 clients** ✓
