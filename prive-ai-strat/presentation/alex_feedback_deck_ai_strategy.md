# Alex's Feedback & Direction — Deck + AI Strategy
**Source:** Alexandre / Mustansir meetings, 22 Jun 2026 (09:28 & 15:01)
**Reference deck:** Privé AI Solutions 2026 (Prive_AI_Solutions_2026.pdf)

---

## Deck / Presentation Updates

- **Rename or remove "AI" label** from client-facing slides where current features are deterministic quantitative analytics (portfolio optimisers, health checks, scenario analysis). These are not generative AI and should not be presented as such. Reframe as "deterministic quantitative analytics."
- **Review previous AI solution presentations** and update current slides + markdown file to incorporate decisions from both meetings. Alex explicitly requested this; Mus committed to completing by Thursday.
- **Use the four-quadrant framework** to align current capabilities and differentiators on the roadmap slides. The slide structure should reflect the table stakes vs differentiators split.
- **Incorporate the AI solution link and transcripts** from previous sessions into the updated roadmap slides.

---

## AI Strategy Direction

### Build vs Buy
- Prioritise **internal development** for the product backlog.
- Use **external/third-party providers as an interim** where internal resource is insufficient — not as a long-term strategy.
- Do not discard current foundational work (audit trails, governance, compliance steps) — these are in SIT phase and should continue.

### Terminology Clarification
- Portfolio Optimiser, Health Checks, and Scenario Analysis are **deterministic, rule-based tools** — not generative AI.
- Alex's position: misleading stakeholders by calling these "AI" creates commercial and regulatory risk. Fix the language in all materials.

### Dual Product Strategy
- Maintain and upgrade **"Preview Managers"** with incremental AI features.
- Simultaneously build a **separate, independent AI platform** for user-driven (wealth manager) construction. This is the key differentiator and USP.

### Product Roadmap Framework
- Adopt the **table stakes vs differentiators** split for all roadmap communication:
  - **Table stakes** (expected within 12–18 months, offered by competitors): dashboarding with alerts, portfolio summaries, CIO view, automated client reporting, document intelligence, AI-assisted RM tools (next-action prompts), NL query interface.
  - **Differentiators** (build switching costs, early mover): development workspace for wealth managers to build custom tools, conversational onboarding, RM Pathfinder, predictive client risk alerts.
- Use this framework to justify R&D spend to stakeholders.

### Governance & Compliance (for slides)
- Platform needs a **compliance table** for the sales process showing how capabilities map to MiFID II, FCA, SFC, and MAS.
- Build a **governance admin portal** inside the existing platform interface, toggled by module. Authorised users (e.g. head of desk) can access governance controls.
- Three regulators (MAS, SFC, FCA) share one common requirement: **human oversight of AI decisions**. This framing should be reflected in compliance materials.

### AI Stack
- Alex provided current internal standards to formalise:
  - **Model provider (clients):** Anthropic via AWS Bedrock
  - **Internal projects:** Gemini
  - **Orchestration:** N8N
- Formalise these into a documented AI stack to prevent ad-hoc tool selection and technical friction across teams.
- Alex noted disagreement remains on standardised AI stack documentation given existing technical debt — flag as open item.

### Cost Management
- Token costs have risen sharply: **USD 15/month in January → USD 600 by 10 Jun** due to AI-assisted coding tools.
- Strategy: **build small functionalities first** to measure token costs before setting commercial pricing for clients.
- For enterprise / AI-heavy products (e.g. Nexus): allow clients to **supply their own API keys** to manage token costs directly.
- For smaller tier-3 clients (where Privé bears costs): continue testing to build solid commercial model before committing pricing.

### Customer Segmentation & Minimum Viable AI
- Tier 1 clients: likely only need to integrate standalone tools or APIs — lower support overhead.
- Tier 3 clients: may require support with data hygiene and strategy — higher resource demand.
- Internal resourcing needs to reflect this — assess whether forward-deployed engineers or outcome-based project structures are required.

---

## Open Items / Unresolved

- AI Stack standardisation: **still in disagreement** — feasibility contested given existing technical debt. Needs resolution before slides are finalised.
- Internal resource assessment for diverse client tiers not yet completed.

---

---

## Current Deck Audit — What Needs to Change

This maps the Privé AI Solutions 2026 deck slide by slide against Alex's direction.

### Slide 1 — Cover: "AI-Driven. Scalable. Future-Proof."
- **Flag:** The subtitle "AI-Driven" is a broad claim. Alex's direction is to be precise about what is and isn't generative AI. Consider qualifying or replacing with language that reflects the actual capability mix (deterministic analytics + emerging generative layer).

### Slide 3 — Agenda
- **Flag:** "AI GO - Portfolio Optimizer" and "Portfolio Real-time Health Checks" are listed as AI products. Per Alex, these are deterministic quantitative analytics — not generative AI. Either rename or add a qualifier in the agenda to set accurate expectations before the audience sees the detail.

### Slides 4–5 — AIGO Portfolio Optimizer
- **Flag:** The product name "AIGO" and section header "AI GO - Portfolio Optimizer" carry an "AI" label. Alex confirmed this is a constrained optimisation algorithm (deterministic) — not generative AI. Recommend renaming to drop or qualify the AI prefix, e.g. "Portfolio Optimiser" or "Quantitative Portfolio Optimiser."
- **Keep:** The genetic algorithm explanation (fitness levels, crossover logic) is accurate and technically sound — retain this content, just reframe the AI branding.

### Slides 6–12 — Portfolio IQ ("Prive's AI assistant")
- **Mixed:** This section contains both deterministic use cases and genuine generative AI use cases. They need to be clearly separated:
  - **Generative AI (legitimate "AI" label):** UC-1 (Portfolio Summary), UC-2 (CIO View), UC-3 (AI Insights), UC-4 (Risk Insights), UC-5 (Composition Insights) — these all call LLMs to generate natural language output. Keep the AI label for these.
  - **Note on UC-3, UC-4, UC-5:** Slides already flag these need to go through the Data Pipeline for PII management and compliance logging. This aligns with Alex's governance requirements — ensure this is not presented as "already done" but as "in progress / required before production."
- **Add:** The governance intercept layer (Logging Hook, Confidence Scorer, Decision Record Writer, Audit Store) discussed with Alex is missing from this section entirely. Add a slide or callout showing that Portfolio IQ use cases will route through this compliance layer — this directly addresses regulator requirements (MAS, SFC, FCA).

### Slide 13 — Compliance: PII Never Reaches LLM
- **Good:** This slide addresses a core regulatory requirement and should be retained. It directly supports the compliance story Alex wants to tell.
- **Enhance:** Alex wants a full compliance table (MiFID II, FCA, SFC, MAS) for the sales process. This slide covers PII/data handling but does not address the broader regulatory mapping. Add or link to the compliance table once built.

### Slides 14–15 — Real-time Portfolio Health Checks
- **Flag:** This is a rules-based, signal-detection system (threshold monitoring, mandate breach alerts) — not generative AI. Alex was explicit that health checks do not require a human-override mechanism and are deterministic. Remove or qualify the AI framing here.
- **Rename suggestion:** "Portfolio Health Monitoring" or "Real-time Portfolio Monitoring" — drop "AI" from the section title.

### Slides 16–22 — Client Lifecycle Research Agent / Privé Agent
- **Retain:** This section covers genuine generative AI use cases (LLM-based client profile interpretation, NL queries, proactive opportunity alerts via agent). This is the right area to apply the "AI" label.
- **Flag:** The Client Lifecycle Agent slide (p.17) mentions CRM + social media integration and automatic product proposals. This is a more forward-looking capability — ensure it is positioned on the roadmap as upcoming/differentiator, not live, unless confirmed otherwise.
- **Align with roadmap framework:** The Privé Agent capability (NL query, proactive alerts, conversational onboarding flow visible in slides 21–22) maps directly to what Alex classified as **differentiators** in the table stakes vs differentiators framework. Position it explicitly in that context.

### Slides 19–20 — Privé AI Hub Architecture
- **Retain:** The AI Hub architecture diagram (MCP + LLMs + Prive APIs) is a strong technical anchor. Keep this.
- **Update:** The slide lists "Gemini, Claude, etc" as LLMs. Alex confirmed the current stack is Anthropic via AWS Bedrock for client-facing use and Gemini for internal. Update the diagram to reflect the actual stack once the AI Stack document is formalised.

### Missing Slides — Add These
- **Compliance table slide:** MiFID II / FCA / SFC / MAS mapped to platform capabilities. Alex committed Mus to building this for the sales process.
- **Four-quadrant roadmap slide:** Table stakes vs differentiators framework, with current features mapped to each quadrant and a timeline.
- **Governance layer slide:** Show the intercept architecture (Logging Hook → Confidence Scorer → Decision Record Writer → Audit Store → Override UI) as a single shared layer across Scenario Analysis, Portfolio Optimiser, and Health Checks. This was a key diagram from Alex's working session (WS3 — Governance).
- **Situation / Complication slide:** Alex's deck included a "Three live features. Zero AI capability infrastructure." framing — consider whether a version of this belongs in the updated deck to set honest context before showing the roadmap.

---

## Mus's Committed Actions (from Alex's requests)

| Action | Deadline |
|--------|----------|
| Create compliance table (MiFID II, FCA, SFC, MAS) | — |
| Update roadmap slides using AI solution link + session transcripts | Thursday |
| Define approved AI stack (models, orchestration, tools) | — |
| Prioritise automation roadmap matrix | — |
| Assess regulatory requirements to define internal compliance standards | — |
| Book 30-min follow-up at 3 PM to finalise strategy | Done (15:01 session) |
