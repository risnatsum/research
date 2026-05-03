# AI Tooling Proposal for Partnerships — STATUS

**Project:** Internal budget proposal for AI workflow automation tooling  
**Owner:** Mus (Head of Partnerships)  
**Sponsor target:** Julian (President)  
**Last updated:** 2026-05-03 — Session 2

---

## Current phase

**Pivot from proposal:** Goal shifted from writing a Julian-facing proposal to building a detailed task automation inventory. Proposal is parked — inventory is the primary output now.

Task inventory written: `TASK-AUTOMATION-INVENTORY.md`

---

## What was done — Research + Framing, Session 1

| Area | Status | Notes |
|---|---|---|
| Practitioner research | Complete | Web search across GitHub, Reddit, HN, MindStudio, practitioner blogs |
| Fireflies vs Notion AI comparison | Complete | Clear verdict reached (see below) |
| Proposal skeleton | Drafted | In conversation — not yet written to a file |
| Final proposal document | NOT DONE | Needs Mus's numbers plugged in |

**Key research findings:**
- Best-evidenced time saving: post-meeting follow-up 20–30 min → ~2 min (multiple independent sources)
- Pre-call brief: 5–8 min → <30 sec per call (SyncGTM/Close CRM study)
- Personal CRM replacement: Claude Pro + MCP = 90% of CRM value at $20/month
- Stale contact tracking: Claude Routines + HubSpot/Notion MCP — no hard metric but well-documented pattern

**Fireflies vs Notion AI verdict:**
- Notion AI Meeting Notes ≠ Fireflies replacement — it's audio-only, no bot, no CRM push, no speaker ID
- Fireflies Business ($19/month) is the right call for Zoom/Teams + CRM needs
- Fellow.ai flagged as worth evaluating — Anthropic-verified, captures all platforms, has Claude MCP connector
- Recommended stack: Fireflies Business ($19) + Claude Pro ($20) + Notion (if already licensed) = ~$39–55/month total

**Proposal skeleton drafted (in session):**
- Frame: ROI-first, ~$50/month recovers 6–8 hrs/week
- Three anchor use cases: meeting admin, stale partner tracking, pre-call brief
- No headcount, no engineering time required — that's the key ask differentiator

---

## What is NOT done yet / blockers

- [ ] Final proposal document not written — needs Mus's inputs:
  - Monthly salary cost (or placeholder) to calculate ROI
  - Number of external calls per week (currently estimated 4–5)
  - Whether Notion is already company-licensed
  - Whether Fellow.ai should replace Fireflies as the single-tool option (worth a quick eval)
- [ ] Tooling decision not finalised — Fireflies vs Fellow.ai still open
- [ ] Workflow design not done — specific Claude MCP setup for Mus's use case not designed
- [ ] Proposal not reviewed or sent to Julian

---

## What comes next

1. Confirm Mus's inputs above (salary placeholder, call volume, Notion licence status)
2. Decide: Fireflies or Fellow.ai — check Fellow.ai pricing and whether it also pushes to a tracker
3. Write the final Julian-facing proposal as a Notion page or one-pager (user to decide format)
4. Design the actual Claude workflow: which MCP connectors, what Mus types each morning, what gets automated
5. Decide on partner tracking home — Notion DB structure for active partners + follow-up cadence
6. Consider whether Mus wants a custom Claude skill for morning briefing / EOD shutdown routine

---

## Context and constraints

- Mus is a one-man partnerships team, no reliable resourcing, CEO blocks headcount
- Political cover from Julian — proposal should go to Julian directly, not through CEO
- ADHD (medicated) — workflow design must reduce context switching, not add to it
- Company provides Gemini (Google Workspace) but it only works with Google Meet — useless for Zoom/Teams
- Fireflies was previously company-sponsored — lapsed subscription, needs reactivation or replacement
- Design constraint: workflow must be modular and portable across employers/tool stacks
- Financial pressure to stay in role — needs to demonstrate value and indispensability

---

## Research sources (key ones)

- [Tactiq — Can Claude AI take meeting notes](https://tactiq.io/learn/can-claude-ai-take-meeting-notes)
- [Zoom + Claude MCP integration announcement](https://news.zoom.com/zoom-meeting-intelligence-in-claude/)
- [Fellow.ai — Claude connector](https://fellow.ai/blog/connect-claude-to-meeting-notes/)
- [Growth Unhinged — Personal AI CRM](https://www.growthunhinged.com/p/personal-ai-crm)
- [SyncGTM — Claude Code + Close CRM](https://syncgtm.com/blog/claude-code-close-crm)
- [MindStudio — Claude Routines for business automation](https://www.mindstudio.ai/blog/claude-code-routines-scheduled-tasks-business-automation)
- [Harper Reed — Claude Code email pipeline](https://harper.blog/2025/12/03/claude-code-email-productivity-mcp-agents/)
- [n8n Zoom AI Meeting Assistant template](https://n8n.io/workflows/2800-zoom-ai-meeting-assistant-creates-mail-summary-clickup-tasks-and-follow-up-call/)
- [Fireflies pricing](https://fireflies.ai/pricing) | [Notion AI Meeting Notes](https://www.notion.com/product/ai-meeting-notes)
- [Circleback — Notion vs Fireflies comparison](https://circleback.ai/compare/notion-meeting-recorder-vs-fireflies-ai)
