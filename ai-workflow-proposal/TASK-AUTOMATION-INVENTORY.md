# Partnerships Role — Task Automation Inventory
**Owner:** Mus | **Updated:** 2026-05-03  
**Purpose:** Detailed map of daily/weekly tasks against automation potential, tooling options, and effort to implement.

---

## How to read this

Each task is rated on two axes:
- **Automation potential** — how much of this can realistically be removed from your plate
- **Implementation effort** — how hard is it to set up (Low = works today with a prompt/tool, High = needs custom build)

---

## 1. Meeting Admin

### 1.1 Post-meeting follow-up email
**What you do now:** After each external meeting, write a recap email — action items, next steps, who owns what.  
**Time cost:** 20–30 min per meeting × 2 meetings/day = up to 1 hr/day  
**Automation potential:** Very high — best-evidenced use case in the field  
**How:** Fireflies or Fellow.ai records and transcribes → Claude reads transcript → generates follow-up email draft in your voice → you review and send from Gmail  
**Tools:** Fireflies Business ($19/mo) + Claude Pro + Gmail MCP  
**Implementation effort:** Low — works today  
**Residual manual work:** Review + send (2–3 min)

---

### 1.2 Post-meeting tracker update
**What you do now:** After a meeting, update your notes on a partner — what was discussed, what changed, what's next.  
**Time cost:** 5–10 min per meeting  
**Automation potential:** High  
**How:** Same transcript → Claude extracts deal status, key decisions, next steps → writes a structured update → you paste into Notion/Google Sheets partner tracker  
**Tools:** Fireflies + Claude + Notion MCP (if Notion) or a Google Sheet  
**Implementation effort:** Low–Medium (needs a tracker template to write into)  
**Residual manual work:** Verify accuracy, especially on nuanced conversations

---

### 1.3 Pre-call research brief
**What you do now:** For important meetings, spend time researching the partner/company beforehand.  
**Time cost:** 5–15 min per meeting depending on importance  
**Automation potential:** High for standard briefs; lower for strategic calls where you need your own framing  
**How:** The night before or morning of — Claude searches the web for company overview, recent news, known products/partnerships → formats as a 1-page brief  
**Tools:** Claude Pro with web search (already available), or Perplexity API  
**Implementation effort:** Low — a saved Claude prompt template works today  
**Residual manual work:** Add your own strategic angle ("what do I want from this call")

---

### 1.4 Morning stand-up (CEO-led sales meeting)
**What you do now:** Attend passively. Limited participation.  
**Automation potential:** Low for attendance itself. Medium for acting on outputs.  
**How:** If there's a recording or notes shared, Claude can extract anything relevant to partnerships and surface it in a morning briefing  
**Tools:** Google Meet + Gemini (already licensed) or manual paste  
**Implementation effort:** Low  
**Note:** Google Workspace already includes Meet recording — this may be free to automate

---

## 2. Active Partner Conversation Management

### 2.1 Tracking 10 active partner conversations
**What you do now:** Mentally track where each partner is — last contact, what was agreed, what's overdue.  
**Time cost:** Diffuse — cognitive load, not a discrete task. Probably 30–60 min/week in checking back through emails/notes.  
**Automation potential:** High  
**How:** A simple Google Sheet (or Notion DB) as the source of truth. Claude (via a morning routine prompt) reads the tracker and surfaces: who you haven't contacted in 7+ days, who has a pending action from you, what's at risk.  
**Tools:** Claude + Google Sheets MCP or Notion MCP  
**Implementation effort:** Medium — you need to build the tracker once, then maintain it lightly  
**Residual manual work:** You still update the tracker (though this can be partially automated via meeting follow-ups)

---

### 2.2 Conference follow-up backlog
**What you do now:** Have a pile of contacts from the recent conference that need follow-up.  
**Time cost:** This is a one-time batch job — but it's likely stalling because it's tedious  
**Automation potential:** High for drafting; low for the decision of who to prioritise  
**How:** Feed Claude a list of contacts + your notes → Claude drafts personalised follow-up emails for each → you review in batch → send  
**Tools:** Claude Pro (already have it) — no additional tooling needed  
**Implementation effort:** Low — can do this in one session today  
**Note:** Claude can help you triage too — "which of these are worth prioritising given our current partner strategy?"

---

### 2.3 HSBC Asset Management project — status updates and partner comms
**What you do now:** Disproportionate time managing a difficult partner. Involves regular check-ins, chasing, writing updates, documenting issues.  
**Automation potential:** Medium — the problem is relational, not informational. But the admin around it is automatable.  
**How:**  
- Weekly status update email template → Claude drafts from bullet points you feed it  
- Risk log → Google Doc that Claude helps you keep updated  
- Internal escalation notes → Claude drafts from your voice notes  
**Tools:** Claude Pro + Gmail  
**Implementation effort:** Low for templates; Medium if you want structured logging  
**Note:** Consider documenting this partner's history properly so it's defensible if the project is ever reviewed or you want to escalate internally

---

## 3. Business Development

### 3.1 Inbound BD lead qualification and response
**What you do now:** New leads come in via email or LinkedIn. You assess them, decide whether to pursue, and respond.  
**Time cost:** 15–30 min per lead for research + draft response  
**Automation potential:** High for research and first draft; low for the strategic decision itself  
**How:** Lead comes in → Claude researches the company → gives you a 1-paragraph "is this worth pursuing?" assessment + a draft response email  
**Tools:** Claude Pro + Gmail MCP  
**Implementation effort:** Low  
**Residual manual work:** Final decision + send

---

### 3.2 Outbound partner prospecting
**What you do now:** Identify potential partners, research them, build an outreach narrative.  
**Time cost:** Variable — likely 10% of week in theory, less in practice  
**Automation potential:** Medium — research and first draft is automatable; strategy is not  
**How:** Claude can generate a prospect list from a brief, research each one, and draft outreach messages  
**Tools:** Perplexity (research) + Claude (drafting) — you already use these  
**Implementation effort:** Low for individual cases; Medium for a systematic pipeline

---

### 3.3 Partner strategy planning and board reporting
**What you do now:** Periodic reports to the board, goal tracking, partner strategy documents.  
**Time cost:** High effort, low frequency  
**Automation potential:** Medium — structure and language is automatable; insights and decisions are not  
**How:** Claude pulls from your tracker data and recent meeting notes to draft a status update. You add the strategic narrative.  
**Tools:** Claude + Google Sheets/Docs  
**Implementation effort:** Medium — needs your tracker to be clean first

---

## 4. Artifact Creation

### 4.1 Partner one-pagers and pitch decks
**What you do now:** Create Google Slides/Docs to pitch or brief partners.  
**Time cost:** 1–3 hrs per artifact  
**Automation potential:** Medium — Claude can produce a strong first draft of the content; design/formatting still manual  
**How:** Feed Claude the brief ("this is who we're pitching, what we want, what we offer") → Claude produces a structured outline or draft content → you build in Slides  
**Tools:** Claude Pro (already have it)  
**Implementation effort:** Low  
**Residual manual work:** Formatting, visuals, final polish

---

### 4.2 Referral/partnership agreement review
**What you do now:** Read partnership agreements, flag issues, draft redlines or summaries.  
**Time cost:** 30 min–2 hrs depending on complexity  
**Automation potential:** High for initial review and summary; lower for complex negotiation  
**How:** Upload agreement PDF → Claude flags non-standard clauses, summarises key terms, suggests questions to raise with legal  
**Tools:** Claude Pro (already have it — drag-and-drop PDF works today)  
**Implementation effort:** None — works today  
**Note:** Claude is not a lawyer. Use this to save your own reading time, not to replace legal review.

---

### 4.3 Internal update Slack messages / emails
**What you do now:** Write updates to product and sales teams about partner activity, opportunities, project status.  
**Time cost:** 10–20 min per update  
**Automation potential:** High  
**How:** Bullet point your update → Claude rewrites it as a clear, professional Slack/email message  
**Tools:** Claude Pro (already have it) — or the `/mus-email-voice` skill already set up  
**Implementation effort:** None — you already have this

---

## 5. Side Project — Vibe Coding / AI API Frontend

### 5.1 Vibe coding sessions
**What you do now:** Build a frontend using your company's APIs + AI coding tools to prototype for a partner request.  
**Automation potential:** Medium — Claude Code handles the implementation; the design decisions are still yours  
**How:** You're already doing this. Key upgrade: use Claude Code's `/dev-team` skill to have a full agent team (architect → backend → frontend → QA) work through a feature brief.  
**Tools:** Claude Code (already using)  
**Implementation effort:** Low — just a different way to prompt

---

## 6. Third-Party Tools Worth Subscribing To

| Tool | Cost | Best for | Notes |
|---|---|---|---|
| **Fireflies Business** | $19/mo | Meeting recording, transcription, CRM push | Best evidenced for your use case |
| **Fellow.ai** | ~$7–15/mo | Meeting notes + Anthropic-verified Claude connector | Worth evaluating as Fireflies alternative |
| **Notion** | $10–16/mo | Partner tracker, meeting notes, strategy docs | Only worth it if company doesn't already license |
| **Perplexity Pro** | $20/mo | Deep research, web sources | You're already using it — formalise the subscription |
| **n8n** (optional) | $20/mo | Automation pipelines (e.g. Gmail → Sheets → Slack) | Only if you want to automate multi-step workflows without coding |
| **Clay** (optional) | $149/mo | Outbound prospecting at scale | Overkill for a 1-person team right now; worth knowing about |

**Recommended immediate stack:** Fireflies ($19) + Claude Pro ($20) + Perplexity Pro ($20) = **$59/month**  
This covers 80% of the automation value with zero engineering.

---

## 7. The Session Limit Problem — What's Happening and How to Fix It

### What's happening
Claude Pro has a **5-hour rolling usage window**. You're hitting the cap because:
- Long research sessions consume a lot of tokens
- Pasting large documents (transcripts, agreements, decks) into Claude burns context fast
- Multi-step work in one session accumulates cost

### Fixes — in order of effort

**Fix 1 — Use `/compact` mid-session (free, works today)**  
Type `/compact` in Claude Code when you feel a session getting long. It compresses the conversation history into a summary, freeing up context window without losing continuity. Do this after each major task within a session.

**Fix 2 — One session per task (no cost, habit change)**  
Start a new Claude session for each discrete task — pre-call brief, follow-up email, agreement review. Don't chain them. Each session starts fresh with full quota.  
Your tasks are naturally atomic — this is the single highest-leverage fix.

**Fix 3 — Upgrade to Claude Pro Max ($100/month)**  
5× more usage than standard Pro. If you're consistently hitting limits across multiple days, this is the right answer. At $100/month vs. the time you're losing to hitting limits and interrupting your flow — it likely pays for itself in the first week.

**Fix 4 — Claude API (pay per use, no session cap)**  
No rolling window, you pay per token. Economical if your usage is bursty. Requires more technical setup (no GUI). Not recommended unless you want to build custom tooling.

### Immediate recommendation
**Do Fix 2 now** (session-per-task discipline) + **upgrade to Pro Max** if you're still hitting limits after a week. The limit friction is directly costing you time and breaking your flow — that has real cost.

---

## Summary — Highest-ROI automations to action first

| Priority | Task | Est. time saved/week | Effort to set up |
|---|---|---|---|
| 1 | Conference follow-up batch drafting | 2–3 hrs (one-time) | None — do today |
| 2 | Post-meeting follow-up emails | 3–5 hrs/week | Low (Fireflies + prompt) |
| 3 | Post-meeting tracker updates | 1–2 hrs/week | Medium (needs tracker) |
| 4 | Pre-call research briefs | 1–2 hrs/week | None — saved prompt |
| 5 | Agreement review first pass | 1–2 hrs/week | None — works today |
| 6 | Internal Slack/email updates | 1 hr/week | None — `/mus-email-voice` |
| 7 | Morning partner status briefing | 30 min/day | Medium (needs tracker) |
