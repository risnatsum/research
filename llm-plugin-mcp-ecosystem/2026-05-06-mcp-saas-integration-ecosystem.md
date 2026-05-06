# LLM Plugin & MCP Ecosystem: SaaS Integration Guide

**Date:** 2026-05-06
**Research type:** Technology/Product + Cross-Provider Standardisation
**Mode:** Broad
**Audience:** SaaS company product and technical leadership

---

## Synthesis

### MCP Won the Standard; The Work Just Moved

The protocol war ended quietly and most SaaS leaders missed it. In the eighteen months between Anthropic's November 2024 launch and the Linux Foundation taking governance in December 2025, MCP went from one vendor's proposal to shared infrastructure across Anthropic, OpenAI, Google, Microsoft, AWS, Block, Bloomberg, and Cloudflare. SDK downloads went from roughly 100,000 a month to 97 million — a 970x curve that represents an installed base, not a hype cycle. OpenAI's older function-calling format now sits underneath MCP rather than competing with it; GitHub killed its own Copilot Extensions framework in November 2025 and told developers to ship MCP servers instead; Google's Responses API and Gemini SDKs speak MCP natively. There is no second standard to hedge against. The question is no longer "which protocol" but "what to build on top of it."

That's where the research gets uncomfortable. The visible cost of an MCP server — wiring tools to an existing REST API — is both the cheap part and the wrong part. Notion's public rebuild is the clearest evidence: their first version mapped 22 REST endpoints one-to-one and burned tokens badly enough that it had to be replaced with 18 higher-level tools emitting Markdown. Stripe, GitHub, and Atlassian shipped curated tool sets from day one rather than full API surfaces. The pattern across these cases is consistent: MCP is not an integration layer. It is a separate product surface with its own information architecture, and letting backend engineers port the REST API is the single most reliable way to ship a broken agent experience. Stripe's `search_stripe_documentation` tool extends this logic in a direction most teams will overlook — the server should expose not just actions but the knowledge needed to use them correctly, because hallucinated API usage is now a support cost.

The harder hidden cost is identity. Only 8.5% of public MCP servers implement OAuth and 52% are abandoned, but every credible enterprise server — Stripe, GitHub, HubSpot, Atlassian Rovo, Salesforce, Linear — launched on OAuth 2.1 with PKCE, RFC 8707, and RFC 9728, and none have been deprecated. The auth bar is the moat. A team budgeting an MCP server as a tools-and-schemas project will under-resource the work that actually separates a shipped enterprise integration from the 52% graveyard.

Distribution rewards this investment unevenly. Anthropic's directory takes open submissions via clau.de/mcp-directory-submission, and the same MCP server simultaneously serves directory users, power users adding a custom connector URL, and API developers using the MCP Connector beta — three channels from one build. Microsoft works similarly: ship the server, you're done for Copilot. OpenAI and Google are messier. ChatGPT Apps require a separate manual submission on top of the MCP server, consumer Gemini remains closed to third parties, and Gemini Enterprise admits SaaS products only through a curated partner channel currently naming Oracle, Salesforce, and ServiceNow. The practical read: Anthropic and Microsoft surfaces convert engineering work into distribution almost automatically; OpenAI and Google still require GTM motion on top.

The broader shift is that MCP collapses the historical gap between "we have an API" and "we have a distribution channel." For fifteen years, a public API meant developers might build on you. An MCP server in 2026 means the AI assistants tens of millions of knowledge workers already use can transact against your product directly, with the user's own credentials, inside someone else's chat window. That reframes MCP from an engineering deliverable into a go-to-market surface — one that, in most SaaS organisations, is currently owned by the wrong team.

**Central tension / implication:** MCP is now safe to commit to as a single standard, but treating it as an API port rather than a new product surface — with its own tool design, OAuth-grade auth investment, and GTM ownership — is how SaaS companies will waste the build and miss the distribution.

---

## Topic Scorecard

| Topic | Importance | Researchability | Research Quality | Notes |
|---|---|---|---|---|
| MCP Protocol Architecture & Building Blocks | 5 | 5 | 5 | Excellent primary sources; spec, SDK docs, production guides all available |
| Claude Plugins, Tools & Claude.ai Integration Ecosystem | 5 | 5 | 5 | Comprehensive — all six surfaces documented with primary Anthropic sources |
| Cross-Provider Standardisation: MCP as Emerging Standard | 5 | 3 | 5 | Strong — AAIF confirmation and all provider adoption verified with primary sources |
| SaaS Companies Shipping MCP Servers: Case Studies | 4 | 4 | 4 | Strong on enterprise vendors; no adoption/MAU metrics available from any public source |
| OpenAI, Gemini & GitHub Copilot — Provider-Specific Beyond MCP | 5 | 4 | 4 | Copilot and OpenAI well-sourced; Gemini consumer surface sparsely documented |

---

## Key Signals

1. **MCP has become the de facto cross-provider standard in under 18 months**
   All four major LLM providers plus AWS, Block, Bloomberg and Cloudflare are platinum members of the Linux Foundation AAIF that took over MCP governance in December 2025, with no competing standard emerging.
   *Why it matters:* SaaS leadership can commit to building one MCP server as the primary AI distribution surface without hedging across rival protocols — the standardisation risk is gone.
   *Confidence:* High

2. **Direct API-to-MCP lifts produce broken agent UX — Notion proved it publicly**
   Notion's first MCP version mapped 22 REST endpoints 1:1 and burned tokens; the rebuild used 18 higher-level tools with Markdown output. Stripe, GitHub and Atlassian all shipped curated tool sets, not full API surfaces.
   *Why it matters:* MCP design is a separate product surface — don't let backend engineers port the REST API.
   *Confidence:* High

3. **OAuth is the real build cost, and the bar separates serious vendors from hobbyists**
   Only 8.5% of public MCP servers use OAuth and 52% are abandoned — but every major SaaS vendor uses OAuth 2.1 + PKCE + RFC 8707 + RFC 9728 from day one, and none have deprecated.
   *Why it matters:* Auth/identity is the dominant engineering effort; budget accordingly.
   *Confidence:* High

4. **Stripe's documentation-search tool is an underappreciated pattern**
   Stripe ships a `search_stripe_documentation` tool inside its MCP server, letting AI assistants answer API questions without leaving the agent context.
   *Why it matters:* Reframes MCP from "expose actions" to "expose actions plus the knowledge to use them correctly" — reduces hallucinated API usage and support load.
   *Confidence:* Medium (single-vendor example, but mechanism generalises)

5. **Anthropic's connector directory is open-submission, not invite-only**
   Any SaaS can apply via clau.de/mcp-directory-submission; the same MCP server simultaneously serves directory users, custom connector users, and API developers via the MCP Connector beta.
   *Why it matters:* One build yields three distribution channels — higher ROI than a typical single-platform integration.
   *Confidence:* High on openness; Medium on yield (approval rate and review timelines unverified)

---

## Analyst Sections

### 1. MCP Protocol Architecture & Building Blocks

Model Context Protocol (MCP) is an open standard built on **JSON-RPC 2.0**. Every message — request, response, or notification — is a UTF-8 encoded JSON-RPC 2.0 object. A request includes `jsonrpc: "2.0"`, a unique `id`, a `method` string (e.g. `tools/call`), and optional `params`. The protocol is stateful: a session begins with a capability negotiation handshake where client and server exchange `initialize` / `InitializeResult` messages. Only after the client sends `notifications/initialized` does data flow begin (Source: https://modelcontextprotocol.io/docs/learn/architecture).

The architecture has three named roles: the **MCP Host** (the AI app — Claude Desktop, Cursor, VS Code), the **MCP Client** (a component the host creates per server connection), and the **MCP Server** (the program exposing capabilities, local or remote).

**The three core primitives:**

- **Tools** are executable functions the AI invokes — query a database, call an API. Described by name, description, and a JSON Schema. Accessed via `tools/list` and `tools/call`. Tools = actions.
- **Resources** are read-only data sources providing context — file contents, schemas. Accessed via `resources/list` and `resources/read`. Resources = context.
- **Prompts** are reusable interaction templates — system prompts, few-shot examples. Retrieved via `prompts/list` and `prompts/get`. Prompts = optional usage templates.

**Transport options:**

The spec (version `2025-06-18`) defines two official transports (Source: https://modelcontextprotocol.io/specification/2025-06-18/basic/transports):

- **Stdio** — client spawns the MCP server as a subprocess. JSON-RPC messages are newline-delimited on stdin/stdout. Local-only, zero network overhead. Suitable for developer tools and CLI integrations.
- **Streamable HTTP** — introduced March 2025, replacing the deprecated HTTP+SSE transport. A single HTTP endpoint supports both POST (client-to-server messages) and GET (server-to-client SSE stream). Session continuity via an `Mcp-Session-Id` header. **This is the correct transport for any remote, cloud-hosted MCP server.**

WebSocket is proposed (GitHub issue #1288) but not yet in the specification [UNVERIFIED: timeline].

**Authentication and authorisation:**

Auth is optional for stdio but mandatory for any production remote server. The spec mandates **OAuth 2.1** + **PKCE (S256, mandatory)** + **RFC 9728** (Protected Resource Metadata) + **RFC 8707** (Resource Indicators) (Source: https://modelcontextprotocol.io/specification/draft/basic/authorization).

Full auth flow: client hits server unauthenticated → gets 401 with resource metadata URL → fetches metadata → discovers auth server → runs OAuth 2.1 + PKCE → gets bearer token → attaches as `Authorization: Bearer <token>` on every subsequent request.

**SDKs:**

- **TypeScript** (`@modelcontextprotocol/sdk`) — most mature; ships server/client libraries, auth helpers, all transports
- **Python** (`mcp[cli]`) — includes `FastMCP`, a high-level decorator-based abstraction that auto-generates tool definitions from type hints and docstrings. Requires Python 3.10+.
- **Go** (`github.com/modelcontextprotocol/go-sdk/mcp`) — stable
- **Java/Kotlin** and **C#** — official SDKs exist, less documented [UNVERIFIED: parity with TypeScript/Python]

Minimum viable server (responds to `initialize`, lists tools, executes calls) can be built in ~50 lines of Python using FastMCP. Production adds OAuth, observability, and scaling.

**What "done" looks like for a production remote MCP server:**
1. Streamable HTTP endpoint (POST + GET)
2. Capability negotiation (`initialize` / `InitializeResult`)
3. At least one tool primitive (`tools/list` + `tools/call` dispatcher)
4. OAuth 2.1 + PKCE + Protected Resource Metadata + Resource Indicators
5. Origin header validation (DNS rebinding prevention) and HTTPS-only
6. Session-ID-based state management
7. Structured error handling (JSON-RPC error objects)
8. Containerised deployment (Docker)

**Key Findings:**
- MCP is JSON-RPC 2.0 over two transports: stdio for local processes, Streamable HTTP for cloud-hosted servers. Old SSE-only transport is deprecated — don't build on it.
- The three primitives map cleanly to SaaS product surfaces: Tools = your API actions, Resources = your read-only data, Prompts = optional usage templates. Most SaaS integrations will only need Tools.
- Auth for remote servers is non-trivial: OAuth 2.1 + PKCE + RFC 8707 + RFC 9728 are all required. This is significantly more complex than typical REST API auth.

**Could Not Verify:**
- WebSocket transport inclusion timeline in the official MCP spec (GitHub issue #1288 open as of mid-2026)
- Feature parity of official Java/Kotlin and C# SDKs relative to TypeScript/Python

**Sources:**
| # | Title | URL | Type |
|---|---|---|---|
| 1 | Architecture Overview — Model Context Protocol | https://modelcontextprotocol.io/docs/learn/architecture | Primary |
| 2 | Transports — MCP Specification 2025-06-18 | https://modelcontextprotocol.io/specification/2025-06-18/basic/transports | Primary |
| 3 | Authorization — MCP Specification (Draft) | https://modelcontextprotocol.io/specification/draft/basic/authorization | Primary |
| 4 | Build an MCP Server — Model Context Protocol | https://modelcontextprotocol.io/docs/develop/build-server | Primary |
| 5 | TypeScript SDK — modelcontextprotocol/typescript-sdk | https://github.com/modelcontextprotocol/typescript-sdk | Primary |
| 6 | Python SDK — modelcontextprotocol/python-sdk | https://github.com/modelcontextprotocol/python-sdk | Primary |
| 7 | MCP SDK Comparison: Python vs TypeScript vs Go | https://www.stainless.com/mcp/mcp-sdk-comparison-python-vs-typescript-vs-go-implementations | Secondary |
| 8 | SEP-1288: WebSocket Transport (GitHub Issue) | https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1288 | Primary |
| 9 | 15 Best Practices for Building MCP Servers in Production | https://thenewstack.io/15-best-practices-for-building-mcp-servers-in-production/ | Secondary |
| 10 | MCP Servers in Production — systemprompt.io | https://systemprompt.io/guides/mcp-servers-production-deployment | Secondary |
| 11 | MCP Spec Updates June 2025 (Auth deep-dive) — Auth0 Blog | https://auth0.com/blog/mcp-specs-update-all-about-auth/ | Secondary |

---

### 2. Claude Plugins, Tools & Claude.ai Integration Ecosystem

Anthropic has built six distinct integration surfaces. Understanding which is relevant depends on whether you're targeting end users inside claude.ai, developers building on the Claude API, or power users running Claude Desktop or Claude Code.

**Surface 1: Claude.ai Connectors (formerly "Integrations")**

Launched July 2025, the connectors directory has grown to 200+ listed integrations as of early 2026 (Source: https://max-productive.ai/blog/claude-ai-connectors-guide-2025/). Partners span productivity (Notion, Canva, Asana, Google Drive, Gmail, Slack, Microsoft 365), consumer services (Uber, Spotify, Instacart, TripAdvisor, Booking.com), creative tools (Figma, Ableton, Blender), and finance (Stripe, Intuit TurboTax, Credit Karma).

On January 26, 2026, Anthropic added "interactive apps" that render live interfaces inside Claude conversations, with Slack, Canva, and Figma as launch partners (Source: https://www.pymnts.com/news/artificial-intelligence/2026/anthropic-turns-claude-into-a-front-door-for-daily-apps/).

Every connector is a remote MCP server. The directory has an open submission process at https://clau.de/mcp-directory-submission. Requirements: OAuth 2.0 authentication, tool annotations, Origin header validation, public documentation, and privacy policy. Anthropic reviews submissions; status queries to mcp-review@anthropic.com (Source: https://claude.com/docs/connectors/building/submission).

**Surface 2: Custom Connectors (Remote MCP)**

Users can add any remote MCP server as a "custom connector" via Settings > Connectors > Add Custom Connector — providing a name and HTTPS URL. No approval required. A SaaS can be used immediately by users who know its URL, before directory listing (Source: https://platform.claude.com/docs/en/agents-and-tools/remote-mcp-servers).

Desktop Extensions (June 2025) package MCP server config for one-click installation in Claude Desktop (Source: https://www.anthropic.com/engineering/desktop-extensions).

**Surface 3: Claude API — tool_use (Function Calling)**

Developer-facing function calling. Developer defines tools as JSON schemas in the `tools` array of a Messages API request. Claude invokes tools, returns `tool_use` blocks with structured inputs, developer executes and returns `tool_result`. No Anthropic approval, no external server. Designed for developers building products on Claude, not for exposing integrations to claude.ai end users (Source: https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview).

**Surface 4: Claude API — MCP Connector (beta)**

Extends the Messages API so API developers can point Claude at any remote MCP server URL directly inside their API call. Developer passes an `mcp_servers` array (URL, name, OAuth token) and Anthropic mediates the connection. One MCP server serves both directory users and API developers (Source: https://platform.claude.com/docs/en/agents-and-tools/mcp-connector). Note: does not support Zero Data Retention.

**Surface 5: Claude Code Plugins**

Claude Code (the CLI) has its own plugin system — modular extensions with slash commands, agent definitions, and skills, optionally backed by an MCP server. Official directory at github.com/anthropics/claude-plugins-official (18.6k stars as of research date). Submission via https://clau.de/plugin-directory-submission (Source: https://github.com/anthropics/claude-plugins-official).

**Surface 6: Claude Marketplace (March 2026)**

Enterprise-only commercial billing consolidation layer, not a technical integration surface. Partners include GitLab, Harvey, Lovable, Replit, Rogo, and Snowflake. Requires Anthropic account relationship (Source: https://venturebeat.com/technology/anthropic-launches-claude-marketplace-giving-enterprises-access-to-claude/).

**Is there a distinct "Claude plugin" concept?**

No. Anthropic has consolidated the integration story under MCP — connectors are MCP servers, the API MCP connector uses MCP servers, and Claude Code plugins can optionally include an MCP server. The term "plugin" survives only in Claude Code. There is no separate "Claude plugin" concept analogous to the now-discontinued OpenAI plugin store.

**Key Findings:**
- Anthropic has consolidated its integration strategy around MCP. tool_use (function calling) remains a separate, simpler API primitive for developers who don't need to expose a standalone server.
- The connectors directory is open-application — any SaaS can submit — but approval is not guaranteed and review timelines vary. The same MCP server can simultaneously serve directory users and API developers.
- Claude Marketplace (March 2026) is a separate enterprise commercial layer requiring an Anthropic account relationship — not a technical integration surface.

**Could Not Verify:**
- Exact approval rate or median review time for connectors directory submissions
- Whether "interactive apps" rendering is accessible to all third-party developers or only launch partners

**Sources:**
| # | Title | URL | Type |
|---|---|---|---|
| 1 | Set up Claude integrations — Claude Help Center | https://support.claude.com/en/articles/10168395-set-up-claude-integrations | Primary |
| 2 | Submitting to the Connectors Directory — Claude Developer Docs | https://claude.com/docs/connectors/building/submission | Primary |
| 3 | Remote MCP servers — Claude API Docs | https://platform.claude.com/docs/en/agents-and-tools/remote-mcp-servers | Primary |
| 4 | MCP connector — Claude API Docs | https://platform.claude.com/docs/en/agents-and-tools/mcp-connector | Primary |
| 5 | Tool use with Claude — Claude API Docs | https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview | Primary |
| 6 | Desktop Extensions — Anthropic Engineering | https://www.anthropic.com/engineering/desktop-extensions | Primary |
| 7 | claude-plugins-official — GitHub (Anthropic) | https://github.com/anthropics/claude-plugins-official | Primary |
| 8 | Anthropic launches Claude Marketplace — VentureBeat | https://venturebeat.com/technology/anthropic-launches-claude-marketplace-giving-enterprises-access-to-claude | News |
| 9 | Anthropic launches the connectors directory — Data Studios | https://www.datastudios.org/post/anthropic-launches-the-connectors-directory-for-claude-linking-apps-like-notion-canva-and-stripe | News |
| 10 | Anthropic Turns Claude Into a Front Door for Daily Apps — PYMNTS | https://www.pymnts.com/news/artificial-intelligence/2026/anthropic-turns-claude-into-a-front-door-for-daily-apps/ | News |

---

### 3. Cross-Provider Standardisation: MCP as Emerging Standard

By May 2026, MCP has decisively crossed the threshold from "Anthropic project" to genuine cross-provider standard.

**Provider adoption timeline:**
- **Anthropic**: launched MCP November 2024 (Source: https://en.wikipedia.org/wiki/Model_Context_Protocol)
- **OpenAI**: adopted March 2025 — Sam Altman confirmed support across Agents SDK, Responses API, and ChatGPT desktop. Assistants API sunset announced for mid-2026. Later extended to ChatGPT Developer Mode and Codex (Source: https://www.infoq.com/news/2025/10/chat-gpt-mcp/, https://developers.openai.com/codex/mcp)
- **Google**: built-in MCP support in Gemini API and SDK at I/O 2025; 50+ Google-managed MCP servers (BigQuery, GCE, GKE, Maps) by late 2025 (Source: https://cloud.google.com/blog/products/ai-machine-learning/google-managed-mcp-servers-are-available-for-everyone)
- **Microsoft/GitHub**: joined MCP steering committee at Build 2025 on May 19, 2025 (Source: https://techcrunch.com/2025/05/19/github-microsoft-embrace-anthropics-spec-for-connecting-ai-models-to-data-sources/). MCP GA in VS Code July 14, 2025 (Source: https://github.blog/changelog/2025-07-14-model-context-protocol-mcp-support-in-vs-code-is-generally-available/). MCP GA in Copilot Studio and M365 Copilot declarative agents (Source: https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/model-context-protocol-mcp-is-now-generally-available-in-microsoft-copilot-studio/)

**IDE coverage (near-universal):** Cursor, Windsurf/Cascade, Zed, JetBrains (IntelliJ IDEA 2025.2+), Claude Code, Cline, VS Code (Source: https://www.jetbrains.com/help/idea/mcp-server.html)

**Governance:** Anthropic donated MCP to the Linux Foundation Agentic AI Foundation (AAIF) in December 2025. Platinum members: AWS, Anthropic, Block, Bloomberg, Cloudflare, Google, Microsoft, OpenAI (Source: https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation). This is the strongest possible signal of cross-provider neutrality.

**Competing standards:** None with provider backing. OpenAI's function-calling JSON-schema format and GPT plugin system predate MCP but are being layered under MCP rather than positioned against it. No serious counter-protocol has emerged (Source: https://www.merge.dev/blog/model-context-protocol-alternatives).

**Realistic reach today:** Native MCP client support spans Claude, ChatGPT/Codex (OpenAI), Gemini/Gemini CLI (Google), Copilot/VS Code/Copilot Studio/M365 Copilot (Microsoft), plus Cursor, Windsurf, Zed, JetBrains, and Cline — effectively the entire commercially relevant AI assistant and AI-IDE user base. [UNVERIFIED: no public single-source market-share figure aggregates all these clients]

**Key Findings:**
- All four major LLM providers plus AWS, Block, Bloomberg and Cloudflare are AAIF platinum members — MCP is no longer an Anthropic-only spec.
- Native MCP client support exists across all major AI assistants and IDEs — building one MCP server reaches essentially all major platforms.
- No competing cross-provider standard has emerged; existing formats are converging on MCP, not competing with it.

**Could Not Verify:**
- Quantitative market-share percentage of AI-assistant users reachable via a single MCP server
- Whether OpenAI and Google have contributed code/spec changes upstream beyond foundation membership

**Sources:**
| # | Title | URL | Type |
|---|---|---|---|
| 1 | Model Context Protocol — Wikipedia | https://en.wikipedia.org/wiki/Model_Context_Protocol | Secondary |
| 2 | OpenAI Adds Full MCP Support to ChatGPT Developer Mode (InfoQ) | https://www.infoq.com/news/2025/10/chat-gpt-mcp/ | News |
| 3 | Model Context Protocol — Codex, OpenAI Developers | https://developers.openai.com/codex/mcp | Primary |
| 4 | Google-managed MCP servers available for everyone — Google Cloud Blog | https://cloud.google.com/blog/products/ai-machine-learning/google-managed-mcp-servers-are-available-for-everyone | Primary |
| 5 | GitHub, Microsoft embrace Anthropic's spec — TechCrunch | https://techcrunch.com/2025/05/19/github-microsoft-embrace-anthropics-spec-for-connecting-ai-models-to-data-sources/ | News |
| 6 | MCP support in VS Code is GA — GitHub Changelog | https://github.blog/changelog/2025-07-14-model-context-protocol-mcp-support-in-vs-code-is-generally-available/ | Primary |
| 7 | MCP GA in Microsoft Copilot Studio | https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/model-context-protocol-mcp-is-now-generally-available-in-microsoft-copilot-studio/ | Primary |
| 8 | MCP Server — IntelliJ IDEA Documentation | https://www.jetbrains.com/help/idea/mcp-server.html | Primary |
| 9 | Governance and Stewardship — modelcontextprotocol.io | https://modelcontextprotocol.io/community/governance | Primary |
| 10 | Linux Foundation announces Agentic AI Foundation (AAIF) | https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation | Primary |
| 11 | 6 MCP alternatives to consider in 2026 — Merge | https://www.merge.dev/blog/model-context-protocol-alternatives | Secondary |

---

### 4. SaaS Companies Shipping MCP Servers: Case Studies

By May 2026, shipping an MCP server has become a standard go-to-market motion for SaaS companies with developer audiences. All major named companies have live, vendor-maintained remote MCP servers.

**Shipped servers (timeline):**
- **Stripe**: February 20, 2025. Remote at mcp.stripe.com (OAuth) + local `@stripe/mcp` npm package (Source: https://www.pulsemcp.com/servers/stripe-agent-toolkit)
- **GitHub**: Public preview April 2025, GA September 2025 (Source: https://github.blog/changelog/2025-09-04-remote-github-mcp-server-is-now-generally-available/)
- **HubSpot**: Public beta May 6, 2025, GA later in 2025 (Source: https://developers.hubspot.com/changelog/remote-hubspot-mcp-server-is-now-generally-available)
- **Atlassian Rovo**: GA February 4, 2026 — Jira, Confluence, Bitbucket Cloud (Source: https://www.atlassian.com/blog/announcements/atlassian-rovo-mcp-ga)
- **Salesforce**: GA April 2026 (Source: https://developer.salesforce.com/blogs/2026/04/salesforce-hosted-mcp-servers-are-now-generally-available)
- **Linear**: Remote-only at mcp.linear.app (Source: https://linear.app/docs/mcp)
- **Notion**: Hosted at developers.notion.com. See design retrospective below.

**Design case studies:**

*Stripe* is the most frequently cited reference architecture. 25 tools across 13 resource categories (customers, products, subscriptions, invoices, payment links, refunds, disputes, prices, balance retrieval). Notably includes a `search_stripe_documentation` tool — the AI can answer API questions without leaving the context window. Dual distribution: remote (mcp.stripe.com) + local npm package (Source: https://chatforest.com/reviews/stripe-mcp-server/).

*Notion* is the most instructive design retrospective. First version: 22 tools mapping REST API 1:1 — excessive token consumption due to Notion's hierarchical block JSON structure. Rebuilt version: 18 tools with Markdown-based responses (Source: https://www.notion.com/blog/notions-hosted-mcp-server-an-inside-look). **Key lesson:** a direct API-to-MCP lift produces poor agent UX. The right architecture restructures the tool surface to match how an AI navigates content, not how the API is organised.

*GitHub* treats its MCP surface as a first-class product with a roadmap. Four documented capability expansions in 8 months: GitHub Projects support (October), server instructions + `X-MCP-Tools` header for tool filtering (December), CI/CD monitoring, and Dependabot/security alert access (Source: https://github.blog/changelog/2025-12-10-the-github-mcp-server-adds-support-for-tool-specific-configuration-and-more/).

*Atlassian* took 9 months from announcement to GA but claims 15+ named AI platform clients (AWS, ChatGPT, Claude, Cursor, Devin, Docker, Figma, GitHub Copilot, Google, Lovable, Mistral, Postman, VS Code, others). Focused tool set: semantic search across Jira/Confluence, Confluence page creation/editing, Jira issue/epic creation — restrained by design. Deprecated HTTP+SSE in favour of Streamable HTTP; SSE removal scheduled June 30, 2026 (Source: https://community.atlassian.com/forums/Atlassian-Remote-MCP-Server/HTTP-SSE-Deprecation-Notice/ba-p/3205484).

**Registry and discovery:**
Official MCP registry (registry.modelcontextprotocol.io) launched preview September 8, 2025 (Source: https://blog.modelcontextprotocol.io/posts/2025-09-08-mcp-registry-preview/). Third-party directories: PulseMCP 12,520+ servers, Glama 22,838, mcp.so 20,702+, Smithery 7,000+. GitHub MCP Registry: 44 verified entries (Source: https://github.blog/ai-and-ml/generative-ai/how-to-find-install-and-manage-mcp-servers-with-the-github-mcp-registry/). Discovery happens through four channels: official registry, Claude Desktop config, IDE one-click installs, vendor documentation pages.

**Business impact signals:**
MCP SDK downloads reached 97 million monthly by March 2026, up from ~100,000 in November 2024 — 970x in 16 months (Source: https://www.digitalapplied.com/blog/mcp-adoption-statistics-2026-model-context-protocol). Block reports employees saving 50–75% of time on common tasks using MCP-backed agents. Only 8.5% of analysed public MCP servers use OAuth; 53% use static API keys. 52% of public MCP servers are abandoned — almost entirely community/indie servers; no major SaaS vendor has deprecated (Source: https://rapidclaw.dev/blog/mcp-servers-dead-what-it-means-2026, https://medium.com/data-science-collective/why-your-mcp-server-is-a-security-disaster-waiting-to-happen-660577d8077c).

**What works vs what doesn't:**
Works well: discrete, nameable actions with bounded responses (Stripe, GitHub). Failure mode: deeply nested hierarchical data exposed 1:1 from API (Notion's initial version, Jira's object model, Salesforce's object graph). Fix: fewer, higher-level tools with AI-optimised (Markdown/simplified) output.

**Key Findings:**
- Every major SaaS has shipped — MCP server is now a standard developer GTM motion.
- Notion's public design retrospective is the clearest evidence that a direct API-to-MCP lift produces bad agent UX.
- Distribution is converging on remote hosted servers with OAuth — dramatically reduces user onboarding friction vs local stdio servers.

**Could Not Verify:**
- Slack's exact tool count (47 cited in secondary sources; no primary Slack developer docs confirmed)
- Exact live server count in official MCP registry (loads dynamically)
- Individual MCP server MAU or activation data for any specific vendor

**Sources:**
| # | Title | URL | Type |
|---|---|---|---|
| 1 | Stripe MCP Documentation | https://docs.stripe.com/mcp | Primary |
| 2 | Official Stripe MCP Server — PulseMCP | https://www.pulsemcp.com/servers/stripe-agent-toolkit | Secondary |
| 3 | Remote GitHub MCP Server — GA | https://github.blog/changelog/2025-09-04-remote-github-mcp-server-is-now-generally-available/ | Primary |
| 4 | GitHub MCP Server — Tool Configuration Update | https://github.blog/changelog/2025-12-10-the-github-mcp-server-adds-support-for-tool-specific-configuration-and-more/ | Primary |
| 5 | Atlassian Rovo MCP Server — GA | https://www.atlassian.com/blog/announcements/atlassian-rovo-mcp-ga | Primary |
| 6 | Atlassian HTTP+SSE Deprecation Notice | https://community.atlassian.com/forums/Atlassian-Remote-MCP-Server/HTTP-SSE-Deprecation-Notice/ba-p/3205484 | Primary |
| 7 | HubSpot Remote MCP Server — GA | https://developers.hubspot.com/changelog/remote-hubspot-mcp-server-is-now-generally-available | Primary |
| 8 | Salesforce Hosted MCP Servers — GA | https://developer.salesforce.com/blogs/2026/04/salesforce-hosted-mcp-servers-are-now-generally-available | Primary |
| 9 | Linear MCP Server Documentation | https://linear.app/docs/mcp | Primary |
| 10 | Notion MCP Server — Inside Look | https://www.notion.com/blog/notions-hosted-mcp-server-an-inside-look | Primary |
| 11 | Official MCP Registry | https://registry.modelcontextprotocol.io/ | Primary |
| 12 | Introducing the MCP Registry (September 2025) | https://blog.modelcontextprotocol.io/posts/2025-09-08-mcp-registry-preview/ | Primary |
| 13 | GitHub MCP Registry — How Discovery Works | https://github.blog/ai-and-ml/generative-ai/how-to-find-install-and-manage-mcp-servers-with-the-github-mcp-registry/ | Primary |
| 14 | MCP Adoption Statistics 2026 | https://www.digitalapplied.com/blog/mcp-adoption-statistics-2026-model-context-protocol | Secondary |
| 15 | 52% of MCP Servers Are Dead (2026) — Rapid Claw | https://rapidclaw.dev/blog/mcp-servers-dead-what-it-means-2026 | Secondary |
| 16 | MCP Server Security — Auth Patterns 2026 | https://medium.com/data-science-collective/why-your-mcp-server-is-a-security-disaster-waiting-to-happen-660577d8077c | Secondary |
| 17 | MCP Auth / Authorization — Stack Overflow Blog | https://stackoverflow.blog/2026/01/21/is-that-allowed-authentication-and-authorization-in-model-context-protocol/ | Secondary |

---

### 5. OpenAI, Gemini & GitHub Copilot: What's Provider-Specific Beyond MCP

**OpenAI: a dual-track system**

OpenAI's GPT plugin ecosystem was fully shut down by April 9, 2024 (Source: https://community.openai.com/t/error-plugins-are-no-longer-supported/715523). The replacement: Custom GPTs with GPT Actions (OpenAPI schema-based, published to GPT Store) for one track, and the new **ChatGPT Apps directory** (December 2025, at chatgpt.com/apps) for the other.

Getting into the ChatGPT Apps directory requires: app name, logo, privacy policy, MCP server URL, tool definitions, test prompts, screenshots — then manual review by OpenAI (Source: https://developers.openai.com/apps-sdk/deploy/submission). HubSpot was the first third-party CRM listed, confirmed as built on a remote MCP server. No self-serve listing — every app requires approval.

On the API side, the older **Chat Completions API** retains traditional function calling (model returns JSON blob, your backend executes, multiple round-trips). The newer **Responses API** is the current recommendation for all new projects: an agentic loop where the model calls tools including remote MCP servers within a single API request. Integrate MCP by passing `type: "mcp"` with a remote server URL in the tools array (Source: https://platform.openai.com/docs/guides/tools-remote-mcp). Functionally analogous to Anthropic's MCP Connector beta.

**Bottom line for OpenAI:** API users only need the MCP server (Responses API handles it natively). For ChatGPT end users, you need the MCP server plus a separate ChatGPT Apps directory submission. The GPT Store (Custom GPTs) may still be a parallel track [UNVERIFIED: whether GPT Store and ChatGPT Apps are separate submissions or unified].

**Google Gemini: fragmented surfaces**

Consumer Gemini chatbot extensions: first-party only (Gmail, Docs, Drive, YouTube, Maps, Flights, Hotels). No open third-party directory. No published submission process [UNVERIFIED: whether Google plans to open this in 2026] (Source: https://9to5google.com/2024/11/27/heres-the-full-list-of-gemini-extensions-and-what-they-can-do/).

Gemini API: supports both traditional function calling (model returns JSON, developer executes) and native MCP via Python/JS SDKs with built-in MCP client support and automatic tool calling (Source: https://ai.google.dev/gemini-api/docs/function-calling). Developers don't need to implement both — the SDK abstracts it.

Gemini Enterprise Agent Platform (December 2025): fully managed remote MCP servers for BigQuery, Cloud Run, Maps, GKE, etc. Third-party SaaS can integrate through a curated enterprise partner channel (Oracle, Salesforce, ServiceNow named). Not open (Source: https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-agent-platform).

Gemini CLI (October 2025): open extensions framework, no Google approval required. Partners include Figma, Stripe, Dynatrace, Snyk, Shopify. Extensions live on public GitHub repos (Source: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-cli-extensions/).

**Bottom line for Gemini:** Consumer Gemini is closed. Gemini Enterprise requires a partner relationship. Gemini CLI is the only fully open surface. Gemini API handles MCP natively for developers.

**GitHub Copilot: MCP is the complete replacement**

GitHub App-based Copilot Extensions are fully deprecated. New extension creation was blocked September 24, 2025; all existing extensions stopped working November 10, 2025 (Source: https://github.blog/changelog/2025-09-24-deprecate-github-copilot-extensions-github-apps/). The explicit reason: MCP provides a universal standard.

For Copilot users, configure via VS Code's `mcp.json` or `.vscode/mcp.json` (Source: https://code.visualstudio.com/docs/copilot/customization/mcp-servers). MCP tools are only accessible when Copilot Chat is in **Agent mode** — invisible in Ask or Edit mode (discoverability consideration). VS Code Extensions Marketplace surfaces MCP servers via the `@mcp` filter tag — some discoverability without a review gate.

**Bottom line for Copilot:** Build an MCP server and you're done. No separate submission, no approval process.

**Key Findings:**
- OpenAI has the most structured provider-specific layer: building for ChatGPT end users requires both the MCP server and a separate ChatGPT Apps directory submission (manual review). API users only need the MCP server.
- GitHub Copilot is the cleanest MCP-only path: App-based extensions are gone, MCP is the only integration mechanism, no approval required.
- Google Gemini is the most fragmented: consumer Gemini is closed to third parties, Gemini Enterprise is a curated partner channel, Gemini CLI is open but developer-targeted. Pick which Gemini surface you actually care about and treat each differently.

**Could Not Verify:**
- Whether Google plans to open consumer Gemini extensions to third-party SaaS
- Whether Custom GPTs (GPT Store) and ChatGPT Apps directory are separate submission tracks or unified
- Exact approval timeline/SLA for ChatGPT Apps directory submissions

**Sources:**
| # | Title | URL | Type |
|---|---|---|---|
| 1 | Error: Plugins are no longer supported (OpenAI Community) | https://community.openai.com/t/error-plugins-are-no-longer-supported/715523 | Primary |
| 2 | Developers can now submit apps to ChatGPT | https://openai.com/index/developers-can-now-submit-apps-to-chatgpt/ | Primary |
| 3 | Apps in ChatGPT (OpenAI Help Center) | https://help.openai.com/en/articles/11487775-connectors-in-chatgpt | Primary |
| 4 | Submit and maintain your app — Apps SDK | https://developers.openai.com/apps-sdk/deploy/submission | Primary |
| 5 | New tools and features in the Responses API | https://openai.com/index/new-tools-and-features-in-the-responses-api/ | Primary |
| 6 | Remote MCP server tool (OpenAI Docs) | https://platform.openai.com/docs/guides/tools-remote-mcp | Primary |
| 7 | Full list of Gemini extensions | https://9to5google.com/2024/11/27/heres-the-full-list-of-gemini-extensions-and-what-they-can-do/ | Secondary |
| 8 | Function calling with the Gemini API | https://ai.google.dev/gemini-api/docs/function-calling | Primary |
| 9 | Introducing Gemini Enterprise Agent Platform | https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-agent-platform | Primary |
| 10 | Gemini CLI extensions for developers | https://blog.google/innovation-and-ai/technology/developers-tools/gemini-cli-extensions/ | Primary |
| 11 | Sunset notice: GitHub App-based Copilot Extensions | https://github.blog/changelog/2025-09-24-deprecate-github-copilot-extensions-github-apps/ | Primary |
| 12 | Add and manage MCP servers in VS Code | https://code.visualstudio.com/docs/copilot/customization/mcp-servers | Primary |
| 13 | MCP support in VS Code GA — GitHub Changelog | https://github.blog/changelog/2025-07-14-model-context-protocol-mcp-support-in-vs-code-is-generally-available/ | Primary |

---

## Further Inquiry

1. **Actual adoption metrics for MCP-based integrations** — No SaaS vendor has published MAU, activation, or usage data for their MCP server. This is the biggest open gap: the research confirms MCP is available and shipped, but not that it drives material user behaviour at scale. Primary research (vendor interviews, beta user surveys) is the only path. *Flagged by critic as the strongest objection to the synthesis's central argument.*

2. **Anthropic connector directory: approval rate and review timeline** — The submission process is open, but approval is not guaranteed and timelines are unpublished. This directly affects whether directory inclusion should be planned as a baseline GTM outcome or a stretch goal. Developer forum threads, partner post-mortems, and direct inquiry to mcp-review@anthropic.com would surface real numbers.

3. **Interactive apps (live-interface rendering in Claude conversations)** — Launched January 2026 with Slack, Canva, and Figma as exclusive partners. No open submission path published. Whether this surface becomes available to all approved connector partners is unknown and would significantly change the distribution calculus.

4. **Consumer Gemini third-party surface** — Google has not announced plans to open consumer Gemini extensions to third parties. This is the largest unresolved surface gap. Watch Google I/O and Gemini product announcements.

5. **Tool design best practices across API types** — Notion's rebuild and Stripe's documentation-search tool both suggest that MCP tool design is a distinct craft from API design. No published playbook exists. The most productive primary research would be structured interviews with teams who have shipped and iterated on production MCP servers (Notion, GitHub, Atlassian are the most public).

---

## Consolidated Sources

All sources are listed inline within their respective analyst sections above.
