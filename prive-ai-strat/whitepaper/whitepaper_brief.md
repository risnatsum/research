# BRIEF: AI in Wealth Management Whitepaper

> **Purpose of this file:** Master brief for Claude Code to write the full whitepaper. Read this entire file before writing anything. The audience guardrails and weighting rules override any instinct to be comprehensive or technical. Use the existing research files in this repo as source material — this brief defines structure, voice, and constraints.

---

## 1. Project Context

- **Deliverable:** A market-facing whitepaper on AI in wealth management, published by Privé Technologies.
- **Strategic intent:** Position Privé as the domain-expert partner for AI enablement in wealth management — especially in Asia — without the paper reading as a product pitch. The market narrative is the spine; Privé capabilities appear as evidence within it.
- **Reader takeaway:** "I now understand where the AI market in wealth management is going, where my firm should play, and Privé is clearly the credible partner to help me do it."

---

## 2. Audience & Readability Guardrails (apply to ALL sections — these are hard constraints)

### Who this is for
- Primary reader: C-level execs, MDs, business heads at private banks, regional banks, EAMs, and MFOs — people accountable for AI strategy, not the people building it.
- Assume: strategic literacy, commercial fluency, low-to-moderate technical depth.
- Do NOT assume: familiarity with AI architecture terms (MCP, RAG, orchestration, Bedrock, tokenisation) or wealth-tech plumbing (custodian feeds, data normalisation).

### Writing rules
1. **One idea per paragraph.** If a paragraph carries two concepts, split it.
2. **Plain English first, term second.** Introduce every technical concept by what it does in business terms before naming it. E.g. "a standard way for AI tools to plug into existing systems (known as MCP)" — never the acronym cold.
3. **Acronym budget: max ~5 acronyms in the entire paper, each defined on first use.** If a term isn't essential, drop it.
4. **Every section answers "so what?" within its first 3 sentences** — why this matters to the reader's P&L, risk, or client experience. Architecture detail follows; it never leads.
5. **One consistent analogy for the four-layer stack** — building a house: foundations (infrastructure), utilities (intelligence), wiring (orchestration), the rooms people live in (experience). Reuse it throughout. No competing metaphors.
6. **Sentence discipline:** average sentence length under 20 words; no sentence over 35 words; no triple-stacked clauses.
7. **Diagrams over prose for structure.** The layer model is a labelled diagram with one plain-English line per layer; surrounding prose discusses implications, not mechanics. Insert diagram placeholders as `[DIAGRAM: description]`.
8. **Each major section ends with a "What this means for you" box** — 2–3 bullets, segmented where relevant (large bank vs regional bank vs EAM/MFO).

### Tone
- Confident, advisory, non-salesy. UK English.
- No vendor jargon ("API-first", "cloud-native", "low-code") without a one-line translation of the benefit.
- Privé is referenced as evidence and proof points inside the narrative — never a standalone "About our product" section until the closing.

### Quality gate (run on the full draft before final output)
- [ ] Could a non-technical MD read any section once and explain the point to a colleague?
- [ ] Flesch reading ease ≥ 40; flag any section below it.
- [ ] Zero undefined terms or cold acronyms.
- [ ] Every section opens with "so what", not "what".
- [ ] House analogy used consistently; no metaphor drift.
- [ ] Privé mentions read as proof, not pitch.

---

## 3. Structure & Weighting (hard hierarchy — do not flatten)

| Block | Share of paper | Role |
|---|---|---|
| Market narrative & "where to play" | ~60% | The spine. Where the market is going, what each player type should do. |
| Privé capabilities as evidence | ~30% | Woven into the narrative as proof points, plus closing section. |
| Technical architecture | ~10% | One diagram + business implications. Compressed, never expanded. |

### Section outline

**1. Executive Summary** (1 page max)
- The AI moment in wealth management in plain terms; the three things every leader should do; one-line layer model preview.

**2. The Market Shift**
- The AI revolution and the new class of tools now available.
- What the next phase of the internet/AI era actually means for wealth management (avoid hype framing; translate "Web 3.0" talk into practical terms or cut it if it doesn't earn its place).
- Reality check: even the leaders (JP Morgan, Goldman Sachs, Morgan Stanley) are only recently rolling out AI chatbots and AI solutions at global scale. Most of the market is far earlier.
- Where smaller players actually are: regional banks, EAMs, and MFOs are still stuck at the data transformation and organisation step. "Garbage in, garbage out" — AI is only as good as the data feeding it. Normalised, standardised, cleaned, enriched data is the unglamorous prerequisite.
- **"What this means for you" box** segmented by player type.

**3. The Four Layers of AI Enablement** (the house analogy carries this whole section)
- `[DIAGRAM: four-layer stack — infrastructure / intelligence / orchestration / experience, one plain-English line each]`
- **Infrastructure (foundations):** data sources, modules, aggregation across custodians and market data — the plumbing.
- **Intelligence (utilities):** the analytics and engines — how insight is generated (including retrieval of firm knowledge; introduce RAG here only if it earns its acronym slot).
- **Orchestration (wiring):** how AI tools connect to existing systems (MCP introduced here in plain English first).
- **Experience (the rooms):** how apps work, how clients interact with AI-driven tools, how those tools get built.
- **Key argument:** wealth managers should differentiate at the experience layer. The bottom three layers should be sourced from specialists. Don't build foundations; design rooms.
- **Governance runs through the bottom three layers** — data privacy, security, model controls. Make this explicit and prominent; it is the C-suite's biggest worry.
- **"What this means for you" box.**

**4. Where Each Player Should Play**
- Large/global banks: scale advantages, but slow; in-house builds make sense only at the experience layer plus selective intelligence.
- Regional banks: fix data first; partner for the bottom three layers.
- EAMs & MFOs: do not build any of the bottom three layers. Specialise providers exist. Focus entirely on client experience.
- **"What this means for you" box.**

**5. How Privé Enables This** (evidence-led, not pitch-led)
- API-first approach realised: all capabilities are also MCP-enabled — e.g. connect directly to Privé's portfolio analytics to calculate cost basis.
- The quant engines doing the calculations were built and battle-tested over 15 years with enterprise clients across multiple markets. **Critical framing: the LLM does not do the maths.** Deterministic, proven engines calculate; the AI layer sits on top for experience and explainability — explaining results to clients in plain language.
- Aggregation across custodians and market data: the plumbing is already built.
- Cloud-agnostic and cloud-native: works with AWS, GCP, or whichever provider the client mandates.
- AWS Bedrock implementation: run any model in any region — including locally — for data residency and regulatory comfort.
- Data privacy by design: tokenisation and masking mean information is protected before it ever reaches a public cloud or an LLM.
- Data strategy heritage: Privé has worked with hundreds of custodians historically and maintains its own normalised database. Clients inherit that expertise rather than rebuilding it. Privé actively helps clients normalise their data lakes. *(Note: dictation referenced a partner in this work — "Learn Level 2s" [CONFIRM proper noun] — include once confirmed.)*
- Regional depth: Asia is genuinely different from Europe and the US — processes, flows, compliance requirements, sales cycles. Generalist data/tech players (Palantir, Snowflake) lack both wealth-management domain expertise and Asia specificity. Privé has both, and has been applying machine learning in production since 2016–17 — this is not a pivot.
- **AgentBuilder:** the experience-layer product. Business analysts and product users design their own AI experiences — choosing models, plugins, and workflows — in a low-code, intuitive way, with all of Privé's infrastructure, intelligence, and orchestration layers piped in underneath. Frame as: "your team designs the rooms; the house is already built."
- **"What this means for you" box.**

**6. Closing: The Decision in Front of You**
- Recap the three-part decision: fix your data, source the bottom layers, own the experience.
- Soft call to action — a conversation, not a demo request.

---

## 4. Using Existing Research

- Wherever a claim, statistic, or capability is referenced, link to the supporting research file or prior capability document in this repo using relative links.
- Do not invent statistics. If the market narrative needs a number the research doesn't support, insert `[RESEARCH NEEDED: description]` rather than fabricating.
- Prior Privé capability documents are linkable assets — reference them, don't reproduce them.

---

## 5. Open Items to Confirm Before Final Draft (dictated proper nouns — verify, do not guess)

1. **"Freeway"** — dictation referred to "what Freeway is doing" / "Freeway's API MCP". Confirm whether this is a Privé platform/product name or a mishearing of "Privé". Use `[CONFIRM: Freeway]` in draft.
2. **"RAC"** — assumed to mean **RAG** (retrieval-augmented generation). Confirm.
3. **"Learn Level 2s"** — unclear partner/entity name in the data normalisation work. Use `[CONFIRM: partner name]` in draft.
4. Whether the "Web 3.0" framing stays — recommend cutting unless it earns its place for this audience.

---

## 6. Output Specification

- Single markdown file: `whitepaper_draft_v1.md`.
- Diagram placeholders as `[DIAGRAM: ...]`, research gaps as `[RESEARCH NEEDED: ...]`, unconfirmed names as `[CONFIRM: ...]`.
- Target length: 3,000–4,500 words (excluding boxes and diagram placeholders). Shorter and clearer beats longer and denser.
- Run the Quality Gate checklist (Section 2) on the full draft and append the results as a comment block at the end of the file.
