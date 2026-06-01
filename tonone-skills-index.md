# Tonone Skills Index

Full index of all 100 agents and 214+ skills from [tonone-ai/tonone](https://github.com/tonone-ai/tonone).

**How to use:** Each skill can be ported standalone — ignore the agent structure entirely. Links point to the raw SKILL.md workflow file (what Claude actually executes) and the agent persona definition. Copy whichever you want and adapt.

**URL patterns:**
- Skill workflow: `github.com/tonone-ai/tonone/blob/main/skills/<name>/SKILL.md`
- Agent persona: `github.com/tonone-ai/tonone/blob/main/agents/<name>.md`

**You have?** column: `yes` = close equivalent exists in your stack, `partial` = yours covers it but theirs adds something specific, `no` = genuinely new.

---

## Engineering — Orchestration (Apex)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `apex` | Routes any engineering task to the right sub-skill | yes (`dev-team`) | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/apex/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/apex.md) |
| `apex-plan` | S/M/L scoping with specialist assignments, token estimates, cost projections — waits for user to pick before executing | partial — worth borrowing the gate pattern | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/apex-plan/SKILL.md) |
| `apex-recon` | 4-phase codebase orientation: env detection → structure → activity → health. 40-line CLI output with colour-coded health signals | partial (`dev-debugger` is deeper but different) | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/apex-recon/SKILL.md) |
| `apex-review` | Cross-cutting pre-launch review of completed work | yes (`code-review` covers this better) | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/apex-review/SKILL.md) |
| `apex-status` | Executive-level project tracking: completed / in-flight / upcoming | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/apex-status/SKILL.md) |
| `apex-takeover` | Structured codebase acquisition for inherited/acquired repos: map, assess, own | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/apex-takeover/SKILL.md) |

---

## Engineering — Architecture & Docs (Atlas)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `atlas` | Routes to sub-skill based on arg | partial (`project-doc`) | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/atlas/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/atlas.md) |
| `atlas-adr` | Writes Architecture Decision Records: decision, context, options, outcome, trade-offs | **no** — worth porting | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/atlas-adr/SKILL.md) |
| `atlas-changelog` | Writes structured changelogs from git history | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/atlas-changelog/SKILL.md) |
| `atlas-map` | Generates C4 architecture diagrams and Mermaid visualisations | partial (`project-doc` covers narrative arch, not diagrams) | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/atlas-map/SKILL.md) |
| `atlas-onboard` | Writes onboarding docs for new team members from codebase scan | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/atlas-onboard/SKILL.md) |
| `atlas-present` | Produces polished HTML release presentation for stakeholders | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/atlas-present/SKILL.md) |
| `atlas-recon` | Surveys existing docs for gaps, accuracy issues, and staleness | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/atlas-recon/SKILL.md) |
| `atlas-report` | Renders findings as styled HTML reports (overflow sink for 40-line CLI budget) | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/atlas-report/SKILL.md) |

---

## Engineering — Backend (Spine)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `spine` | Routes backend tasks | yes (`dev-backend`) | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/spine/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/spine.md) |
| `spine-api` | Generates complete REST API specs + implementations: contracts, error handling, auth, test coverage | partial | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/spine-api/SKILL.md) |
| `spine-recon` | Maps routes, middleware, models, auth — full backend codebase survey | partial | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/spine-recon/SKILL.md) |
| `spine-service` | Generates production-ready backend services with config management, health checks, graceful shutdown, structured logging | partial | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/spine-service/SKILL.md) |

---

## Engineering — Data & Databases (Flux)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `flux` | Routes data/database tasks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/flux/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/flux.md) |
| `flux-health` | Audits database performance: slow queries, missing indexes, connection pooling, replication lag | **no** — directly useful for TimescaleDB | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/flux-health/SKILL.md) |
| `flux-migrate` | Designs zero-downtime migration plans with rollback strategies | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/flux-migrate/SKILL.md) |
| `flux-pipeline` | Designs ETL/ELT data pipelines with transformation logic and scheduling | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/flux-pipeline/SKILL.md) |
| `flux-query` | Optimises SQL queries for performance, readability, and correctness | **no** — directly useful | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/flux-query/SKILL.md) |
| `flux-recon` | Maps entire database layer: schemas, migrations, ORM usage, query patterns | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/flux-recon/SKILL.md) |
| `flux-schema` | Designs normalised, production-ready schemas with indexes and constraints | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/flux-schema/SKILL.md) |

---

## Engineering — Infrastructure / Cloud (Forge)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `forge` | Routes infra tasks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/forge/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/forge.md) |
| `forge-audit` | Audits cloud infra: over-provisioning, security gaps, single points of failure | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/forge-audit/SKILL.md) |
| `forge-cost` | Cloud cost analysis: idle resources, rightsizing, reservation strategy | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/forge-cost/SKILL.md) |
| `forge-diagnose` | Root cause analysis for production infrastructure incidents | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/forge-diagnose/SKILL.md) |
| `forge-infra` | Generates IaC (Terraform/Pulumi) for target architecture | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/forge-infra/SKILL.md) |
| `forge-network` | Designs VPC topology, subnets, peering, firewalls, load balancers | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/forge-network/SKILL.md) |
| `forge-recon` | Inventories all cloud services, environments, regions, costs | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/forge-recon/SKILL.md) |

---

## Engineering — DevOps / CI-CD (Relay)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `relay` | Routes DevOps tasks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/relay/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/relay.md) |
| `relay-audit` | Examines CI/CD pipelines for bottlenecks, security gaps, reliability issues | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/relay-audit/SKILL.md) |
| `relay-deploy` | Generates complete deployment configs: Dockerfile, manifests, rollback procedures | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/relay-deploy/SKILL.md) |
| `relay-docker` | Generates production-ready multi-stage Dockerfiles with security hardening + docker-compose | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/relay-docker/SKILL.md) |

---

## Engineering — Security (Warden)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `warden` | Routes security tasks | yes (`dev-security-lead`) | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/warden/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/warden.md) |
| `warden-audit` | Scans for hardcoded secrets, vulnerable deps, IAM misconfigs, XSS/SQLi, CORS, rate limiting | partial — theirs is more structured | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/warden-audit/SKILL.md) |
| `warden-harden` | Audits then implements hardening: auth, rate limiting, input validation, security headers, secrets management | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/warden-harden/SKILL.md) |
| `warden-iam` | Designs least-privilege IAM with IaC output (roles, policies, service accounts) | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/warden-iam/SKILL.md) |
| `warden-recon` | Full security survey: secrets, IAM, auth, encryption, audit logging, compliance frameworks | partial | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/warden-recon/SKILL.md) |
| `warden-threat` | Structured threat model: assets, ranked threats by likelihood/impact, mitigations, risk acceptance decisions | **no** — worth porting | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/warden-threat/SKILL.md) |

---

## Engineering — Observability (Vigil)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `vigil` | Routes observability tasks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/vigil/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/vigil.md) |
| `vigil-alert` | Generates SLO-backed alert rules + paired runbooks for Prometheus, Datadog, Betterstack | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/vigil-alert/SKILL.md) |
| `vigil-recon` | Inventories monitoring infra, identifies blind spots across metrics/tracing/logging/alerting | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/vigil-recon/SKILL.md) |

---

## Engineering — Frontend / DX (Prism)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `prism` | Routes frontend tasks | yes (`dev-frontend`) | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/prism/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/prism.md) |
| `prism-audit` | Audits UI for performance, accessibility, component structure, bundle size | partial | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/prism-audit/SKILL.md) |
| `prism-chart` | Builds data visualisation components: charts, graphs, dashboards | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/prism-chart/SKILL.md) |
| `prism-component` | Builds reusable UI components with accessibility and design system compliance | partial | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/prism-component/SKILL.md) |
| `prism-dashboard` | Designs and builds admin/analytics dashboard layouts | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/prism-dashboard/SKILL.md) |
| `prism-recon` | Maps frontend codebase: stack, component tree, state management, bundler config | partial | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/prism-recon/SKILL.md) |
| `prism-stack` | Recommends and scaffolds frontend stack for new projects | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/prism-stack/SKILL.md) |
| `prism-ui` | Builds complete UI screens from spec or wireframe | partial | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/prism-ui/SKILL.md) |

---

## Engineering — QA & Testing (Proof)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `proof` | Routes QA tasks | yes (`dev-qa-lead`) | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/proof/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/proof.md) |
| `proof-api` | Builds API test suites: endpoints, contracts, load testing | partial | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/proof-api/SKILL.md) |
| `proof-audit` | Evaluates test suite quality: flaky tests, coverage gaps, anti-patterns | partial | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/proof-audit/SKILL.md) |
| `proof-design` | Writes test specs for new features including edge cases | partial | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/proof-design/SKILL.md) |
| `proof-e2e` | Builds E2E tests for critical user journeys using Playwright or Cypress | **no** — worth porting | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/proof-e2e/SKILL.md) |
| `proof-recon` | Catalogs existing tests, frameworks, coverage metrics, CI integration | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/proof-recon/SKILL.md) |
| `proof-strategy` | Writes comprehensive test strategy: risk assessment, testing types, coverage targets, CI config | partial | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/proof-strategy/SKILL.md) |

---

## Engineering — Platform Engineering (Pave)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `pave` | Routes platform engineering tasks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/pave/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/pave.md) |
| `pave-audit` | Audits developer experience: golden paths, friction points, tooling gaps | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/pave-audit/SKILL.md) |
| `pave-catalog` | Builds internal service catalog with ownership, dependencies, runbooks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/pave-catalog/SKILL.md) |
| `pave-contribute` | Designs contribution guidelines, PR templates, review standards | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/pave-contribute/SKILL.md) |
| `pave-env` | Designs local dev environment setup: Docker, env vars, seed data, scripts | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/pave-env/SKILL.md) |
| `pave-golden` | Designs golden paths (scaffolding, templates, standards) that make the right thing the easy thing | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/pave-golden/SKILL.md) |
| `pave-recon` | Surveys developer experience: tooling, processes, pain points, time-to-first-PR | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/pave-recon/SKILL.md) |

---

## Engineering — ML/AI (Cortex)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `cortex` | Routes ML/AI engineering tasks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/cortex/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/cortex.md) |
| `cortex-eval` | Designs LLM evaluation harnesses: benchmark suites, automated regression, human eval orchestration | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/cortex-eval/SKILL.md) |
| `cortex-integrate` | Designs and deploys LLM feature integrations in existing systems | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/cortex-integrate/SKILL.md) |
| `cortex-model` | Builds end-to-end ML workflows: data prep, training, deployment | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/cortex-model/SKILL.md) |
| `cortex-prompt` | Designs production prompting systems with evaluation frameworks and edge case handling | **no** — relevant if adding Claude features | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/cortex-prompt/SKILL.md) |
| `cortex-recon` | Audits existing ML pipelines, data infra, and observability | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/cortex-recon/SKILL.md) |

---

## Engineering — Mobile (Touch)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `touch` | Routes mobile engineering tasks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/touch/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/touch.md) |
| `touch-app` | Produces complete mobile app architecture: platform, navigation, state, data layer, key screens | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/touch-app/SKILL.md) |
| `touch-recon` | Analyses app stack, architecture, dependencies, and health | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/touch-recon/SKILL.md) |

---

## Engineering — Embedded/IoT (Volt)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `volt` | Routes embedded/IoT engineering tasks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/volt/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/volt.md) |
| `volt-recon` | Inventories MCU, peripherals, RTOS, protocols, OTA, code quality — flags security/stability risks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/volt-recon/SKILL.md) |

---

## Product — Head of Product (Helm)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `helm` | Routes product tasks | yes (`product-owner`) | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/helm/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/helm.md) |
| `helm-arbiter` | Resolves product/engineering scope disagreements with a structured decision framework | **no** — interesting | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/helm-arbiter/SKILL.md) |
| `helm-brief` | Creates structured product briefs: problem, users, success metrics, constraints | partial (`product-owner` does this) | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/helm-brief/SKILL.md) |
| `helm-handoff` | Transfers product brief to engineering via a formal 6-field schema (structured cross-agent handoff) | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/helm-handoff/SKILL.md) |
| `helm-plan` | Sequences product initiatives by coordinating research, strategy, and design work | partial | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/helm-plan/SKILL.md) |
| `helm-recon` | Surveys existing briefs, strategy docs, and team output before initiating new work | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/helm-recon/SKILL.md) |

---

## Product — Strategy (Crest)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `crest` | Routes product strategy tasks | yes (`strategy-consultant`) | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/crest/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/crest.md) |
| `crest-compete` | Competitive landscape analysis and positioning strategy | partial (`strat-competitive-analyst`) | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/crest-compete/SKILL.md) |
| `crest-narrative` | Writes strategy memos: product direction, investment priorities | partial | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/crest-narrative/SKILL.md) |
| `crest-okr` | Develops OKR frameworks with North Star metrics and supporting metrics trees | **no** — worth porting | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/crest-okr/SKILL.md) |
| `crest-recon` | Surveys existing roadmaps, OKRs, competitor docs before new strategy work | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/crest-recon/SKILL.md) |
| `crest-roadmap` | Creates sequenced product roadmaps with explicit trade-off analysis | **no** — worth porting | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/crest-roadmap/SKILL.md) |

---

## Product — User Research (Echo)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `echo` | Routes user research tasks | partial (`research_team` does secondary research only) | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/echo/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/echo.md) |
| `echo-feedback` | Synthesises customer feedback from surveys, reviews, support tickets into themes | **no** — complementary | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/echo-feedback/SKILL.md) |
| `echo-interview` | Designs user interview guides and synthesises findings into insights | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/echo-interview/SKILL.md) |
| `echo-jobs` | Runs Jobs-to-be-Done analysis: identifies functional, social, and emotional jobs | **no** — worth porting | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/echo-jobs/SKILL.md) |
| `echo-recon` | Surveys existing user research, feedback repos, and persona docs | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/echo-recon/SKILL.md) |
| `echo-segment` | Builds customer segmentation models with personas and behavioural profiles | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/echo-segment/SKILL.md) |

---

## Product — Product Analytics (Lumen)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `lumen` | Routes product analytics tasks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/lumen/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/lumen.md) |
| `lumen-abtest` | Designs rigorous A/B tests: hypothesis, sample size, metrics, significance thresholds | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/lumen-abtest/SKILL.md) |
| `lumen-funnel` | Maps and analyses conversion funnels, identifies drop-off points | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/lumen-funnel/SKILL.md) |
| `lumen-instrument` | Designs event tracking schemas and analytics instrumentation plans | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/lumen-instrument/SKILL.md) |
| `lumen-metrics` | Defines metric frameworks: North Star, leading/lagging indicators, guardrail metrics | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/lumen-metrics/SKILL.md) |
| `lumen-recon` | Audits existing analytics setup: coverage, consistency, data quality | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/lumen-recon/SKILL.md) |

---

## Product — UX Design (Draft)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `draft` | Routes UX design tasks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/draft/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/draft.md) |
| `draft-flow` | Maps user flows and task journeys end-to-end | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/draft-flow/SKILL.md) |
| `draft-ia` | Designs information architecture: nav structure, hierarchy, labelling | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/draft-ia/SKILL.md) |
| `draft-landing` | Designs landing page structure and copy hierarchy for conversion | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/draft-landing/SKILL.md) |
| `draft-patterns` | Documents reusable UX patterns library for the product | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/draft-patterns/SKILL.md) |
| `draft-recon` | Surveys existing UX: flows, IA, patterns, pain points | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/draft-recon/SKILL.md) |
| `draft-review` | Critiques UX designs against usability heuristics and user needs | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/draft-review/SKILL.md) |
| `draft-wireframe` | Produces text-based wireframe specs for screens and components | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/draft-wireframe/SKILL.md) |

---

## Product — Visual Design (Form)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `form` | Routes visual design tasks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/form/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/form.md) |
| `form-audit` | Audits design consistency: spacing, colour, type, component usage | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/form-audit/SKILL.md) |
| `form-brand` | Develops brand identity: visual language, tone, personality | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/form-brand/SKILL.md) |
| `form-brief` | Creates design briefs from product requirements | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/form-brief/SKILL.md) |
| `form-component` | Designs component specs for a design system | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/form-component/SKILL.md) |
| `form-deck` | Designs presentation deck layouts and visual hierarchy | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/form-deck/SKILL.md) |
| `form-email` | Designs email templates (transactional and marketing) | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/form-email/SKILL.md) |
| `form-exam` | Audits design files for consistency and system compliance | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/form-exam/SKILL.md) |
| `form-logo` | Designs logo concepts with usage rules | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/form-logo/SKILL.md) |
| `form-mobile` | Designs mobile-specific UI with platform conventions | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/form-mobile/SKILL.md) |
| `form-palette` | Builds colour systems with semantic tokens and WCAG compliance | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/form-palette/SKILL.md) |
| `form-social` | Designs social media asset templates and brand standards | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/form-social/SKILL.md) |
| `form-style` | Writes style guides for typography, colour, spacing, and components | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/form-style/SKILL.md) |
| `form-tokens` | Defines design token systems connecting design decisions to code variables | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/form-tokens/SKILL.md) |
| `form-web` | Designs web UI layouts with responsive behaviour | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/form-web/SKILL.md) |

---

## Product — Growth (Surge)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `surge` | Routes growth engineering tasks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/surge/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/surge.md) |
| `surge-recon` | Audits onboarding, acquisition channels, conversion funnels, and experiments | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/surge-recon/SKILL.md) |
| `surge-retention` | Analyses retention curves, identifies churn patterns, delivers prioritised intervention plan | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/surge-retention/SKILL.md) |

---

## Product — Marketing (Pitch)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `pitch` | Routes product marketing tasks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/pitch/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/pitch.md) |
| `pitch-copy` | Writes marketing copy: headlines, value props, feature descriptions | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/pitch-copy/SKILL.md) |
| `pitch-landing` | Designs and writes landing page copy with conversion-focused structure | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/pitch-landing/SKILL.md) |
| `pitch-launch` | Plans product launch: timeline, channels, messaging, assets | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/pitch-launch/SKILL.md) |
| `pitch-message` | Develops core messaging framework: positioning, differentiators, proof points | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/pitch-message/SKILL.md) |
| `pitch-position` | Writes positioning statement and competitive differentiation | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/pitch-position/SKILL.md) |
| `pitch-recon` | Surveys competitor messaging, market positioning, and language patterns | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/pitch-recon/SKILL.md) |

---

## Product — Content Marketing (Ink)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `ink` | Routes content marketing tasks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/ink/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/ink.md) |
| `ink-calendar` | Plans content calendar with topics, formats, channels, publish schedule | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/ink-calendar/SKILL.md) |
| `ink-case` | Writes case studies from customer success data | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/ink-case/SKILL.md) |
| `ink-post` | Writes blog posts and thought leadership articles | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/ink-post/SKILL.md) |
| `ink-recon` | Audits existing content: coverage, SEO performance, gaps | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/ink-recon/SKILL.md) |
| `ink-seo` | Develops SEO strategy: keyword research, content gaps, on-page recommendations | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/ink-seo/SKILL.md) |

---

## Product — PR & Community (Buzz)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `buzz` | Routes PR and community tasks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/buzz/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/buzz.md) |
| `buzz-community` | Designs community strategy: platforms, engagement, moderation, growth | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/buzz-community/SKILL.md) |
| `buzz-launch` | Writes launch press materials: press release, media kit, journalist outreach | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/buzz-launch/SKILL.md) |
| `buzz-pitch` | Writes targeted journalist pitches for specific story angles | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/buzz-pitch/SKILL.md) |
| `buzz-recon` | Surveys media coverage, community sentiment, competitor PR activity | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/buzz-recon/SKILL.md) |
| `buzz-social` | Writes social media content strategy and post templates | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/buzz-social/SKILL.md) |

---

## Product — Customer Success (Keep)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `keep` | Routes customer success tasks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/keep/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/keep.md) |
| `keep-expand` | Designs expansion playbook: upsell triggers, success milestones, account growth | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/keep-expand/SKILL.md) |
| `keep-health` | Builds customer health scoring model with leading indicators | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/keep-health/SKILL.md) |
| `keep-onboard` | Designs customer onboarding journey with milestones and success criteria | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/keep-onboard/SKILL.md) |
| `keep-playbook` | Writes CS playbooks for onboarding, escalation, renewal, and churn risk | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/keep-playbook/SKILL.md) |
| `keep-recon` | Surveys existing CS processes, tools, health data, and churn patterns | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/keep-recon/SKILL.md) |

---

## Product — Sales (Deal)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `deal` | Routes sales tasks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/deal/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/deal.md) |
| `deal-close` | Designs closing playbook: objection handling, negotiation, contract process | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/deal-close/SKILL.md) |
| `deal-pipeline` | Designs sales pipeline stages, qualification criteria, CRM structure | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/deal-pipeline/SKILL.md) |
| `deal-playbook` | Writes complete sales playbook: ICP, discovery questions, demo flow, objections | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/deal-playbook/SKILL.md) |
| `deal-pricing` | Designs pricing strategy: tiers, packaging, discounting rules, value metrics | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/deal-pricing/SKILL.md) |
| `deal-recon` | Surveys existing pipeline, win/loss patterns, deal velocity, competitor pricing | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/deal-recon/SKILL.md) |

---

## Product — Data Analytics & BI (Lens)

| Skill | What it does | You have? | Links |
|---|---|---|---|
| `lens` | Routes analytics and BI tasks | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/lens/SKILL.md) · [agent](https://github.com/tonone-ai/tonone/blob/main/agents/lens.md) |
| `lens-audit` | Audits analytics setup: coverage, consistency, data quality, dashboard proliferation | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/lens-audit/SKILL.md) |
| `lens-chart` | Designs charts and visualisations with correct encoding choices | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/lens-chart/SKILL.md) |
| `lens-dashboard` | Builds analytics dashboards for a specific audience and decision type | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/lens-dashboard/SKILL.md) |
| `lens-metrics` | Defines business metrics framework with ownership and alerting | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/lens-metrics/SKILL.md) |
| `lens-recon` | Inventories existing dashboards, data sources, and reporting tools | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/lens-recon/SKILL.md) |
| `lens-report` | Produces written analytical reports from data findings | **no** | [skill](https://github.com/tonone-ai/tonone/blob/main/skills/lens-report/SKILL.md) |

---

## Operations

| Agent | What it does | You have? | Links |
|---|---|---|---|
| `brace` | Support engineering: ticket workflow, SLA architecture, knowledge base, escalation paths | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/brace.md) |
| `folk` | People/HR: org design, hiring pipelines, compensation frameworks, onboarding, performance management | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/folk.md) |
| `keel` | Operations: process design, vendor management, OKR execution, cross-functional coordination | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/keel.md) |
| `mint` | Finance: P&L, runway, unit economics, fundraising, board reporting, cap table management | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/mint.md) |

---

## Legal (agent definitions only — no skill sub-directories)

| Agent | What it does | You have? | Links |
|---|---|---|---|
| `audit` | Internal controls review, legal risk register, audit trail documentation | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/audit.md) |
| `bind` | Implements compliance frameworks: SOC2, GDPR, HIPAA, ISO 27001 via gap analysis and remediation | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/bind.md) |
| `brief` | Drafts contracts from scratch: NDAs, MSAs, employment agreements, SLAs, vendor contracts | **no** — worth having | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/brief.md) |
| `cite` | Synthesises case law and regulatory guidance to identify legal risks | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/cite.md) |
| `clause` | Contract clause analysis: redlining, risk scoring, negotiation playbooks | **no** — worth having | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/clause.md) |
| `frame` | Drafts board resolutions, equity plans, and corporate governance documents | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/frame.md) |
| `lodge` | Prepares regulatory filings, disclosures, and government submissions | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/lodge.md) |
| `scope` | Clears trademarks, maps patent landscapes, audits open source licence compliance | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/scope.md) |
| `shield` | Evaluates regulatory risk: GDPR, CCPA, FTC, financial regulation, export controls | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/shield.md) |
| `terms` | Writes GDPR-compliant privacy policies, Terms of Service, and data processing agreements | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/terms.md) |

---

## Design (agent definitions only)

| Agent | What it does | You have? | Links |
|---|---|---|---|
| `axe` | Accessibility engineering: WCAG audits, keyboard nav, screen reader testing, ARIA | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/axe.md) |
| `copy` | UX writing: microcopy, error messages, onboarding flows, UI content strategy | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/copy.md) |
| `cut` | Designs and manages icon systems, custom illustrations, and optimised SVGs | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/cut.md) |
| `glyph` | Typography system design: font pairing, type scale, hierarchy, readability tokens | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/glyph.md) |
| `grid` | Designs spacing scales, responsive grids, breakpoints, and layout primitives | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/grid.md) |
| `hue` | Colour palette design: semantic tokens, dark/light mode, WCAG contrast compliance | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/hue.md) |
| `mark` | Visual identity stewardship: logo usage rules, brand guidelines | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/mark.md) |
| `move` | Motion systems: animation principles, transition timing, micro-interaction specs | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/move.md) |
| `tone` | Design token infrastructure connecting design decisions to code | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/tone.md) |
| `wire` | Prototyping and handoff: interactive flow docs, component specs, developer handoff | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/wire.md) |

---

## Data Science (agent definitions only)

| Agent | What it does | You have? | Links |
|---|---|---|---|
| `cast` | Time series forecasting: demand prediction, trend analysis, seasonal decomposition | **no** — relevant to quant/pricing work | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/cast.md) |
| `clean` | Data validation, cleaning, and quality monitoring pipelines for model training | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/clean.md) |
| `drift` | ML monitoring: data drift, concept drift, model degradation in production | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/drift.md) |
| `eval` | Designs statistically rigorous A/B tests, multi-armed bandits, and causal studies | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/eval.md) |
| `feat` | Feature engineering: transforms raw data into model-ready features with minimal leakage | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/feat.md) |
| `fit` | Model training: algorithm selection, hyperparameter tuning, training infrastructure | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/fit.md) |
| `plot` | Data visualisation: chart design, encoding selection, dashboard clarity | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/plot.md) |
| `score` | Model evaluation: metrics design, statistical significance, model comparison | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/score.md) |
| `tune` | LLM fine-tuning: PEFT/LoRA, RLHF, instruction tuning, prompt optimisation | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/tune.md) |
| `vect` | Embeddings and vector search: semantic search, RAG pipelines, vector database design | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/vect.md) |

---

## Security Operations (agent definitions only)

| Agent | What it does | You have? | Links |
|---|---|---|---|
| `blue` | Designs detection rules, hardening playbooks, and SOC operating procedures | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/blue.md) |
| `chain` | Software supply chain security: SBOM generation, dependency scanning, third-party risk | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/chain.md) |
| `hunt` | Threat hunting: hypothesis-driven hunting, compromise assessment, IOC analysis | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/hunt.md) |
| `patch` | Vulnerability triage and patching programs prioritised by exploitability and asset criticality | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/patch.md) |
| `phish` | Phishing simulations, security awareness training, social engineering assessments | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/phish.md) |
| `red` | Penetration test design, red team exercises, attack simulation documentation | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/red.md) |
| `resp` | Incident response playbooks, containment procedures, post-incident review processes | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/resp.md) |
| `sast` | Application security: SAST/DAST scanning, code security review, secure SDLC design | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/sast.md) |
| `siem` | Logging infrastructure and detection rules powering security operations | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/siem.md) |
| `zero` | Zero trust network architecture: replaces implicit trust with explicit verification at every layer | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/zero.md) |

---

## AI Operations (agent definitions only)

| Agent | What it does | You have? | Links |
|---|---|---|---|
| `budget` | LLM spending tracking, token efficiency auditing, cost alerts | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/budget.md) |
| `deploy` | Model serving, inference APIs, blue/green rollouts, canary releases, rollback | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/deploy.md) |
| `embed` | Embedding model selection, vector pipeline design, similarity search, RAG systems | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/embed.md) |
| `evals` | LLM eval harness design, benchmark suites, automated regression, human eval orchestration | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/evals.md) |
| `guard` | AI safety and guardrails: input/output filters, PII detection, content moderation, runtime policy | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/guard.md) |
| `prompt` | Designs, versions, and optimises system prompts with production rigour | partial — no structured skill equivalent | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/prompt.md) |
| `rank` | Retrieval reranking, relevance scoring, learning-to-rank, result quality evaluation | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/rank.md) |
| `token` | Context window optimisation, token counting, truncation, chunking patterns | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/token.md) |
| `trace` | LLM observability: tracing, span capture, prompt/completion logging, cost attribution | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/trace.md) |

---

## Developer Experience (agent definitions only)

| Agent | What it does | You have? | Links |
|---|---|---|---|
| `bench` | API performance benchmarking: latency profiling, throughput testing, regression detection | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/bench.md) |
| `change` | Documents API changes, deprecations, and migrations to prevent breaking changes surprising developers | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/change.md) |
| `compat` | Detects breaking changes before they ship, designs deprecation processes | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/compat.md) |
| `gate` | CI gates enforcing API quality: linting, style, breaking changes, schema completeness | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/gate.md) |
| `guide` | Writes and audits API reference docs, integration guides, SDK documentation | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/guide.md) |
| `mock` | Designs mock servers and contract tests enabling development without real API dependency | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/mock.md) |
| `onboard` | Designs developer onboarding to first successful API call in under 5 minutes | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/onboard.md) |
| `port` | Designs multi-language SDKs with native idioms while maintaining cross-language consistency | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/port.md) |
| `sample` | Writes working code examples and tutorials that get developers to first success fast | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/sample.md) |
| `schema` | Designs API schemas (OpenAPI, GraphQL, gRPC) for consistency and developer ergonomics | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/schema.md) |

---

## Infrastructure Specialists (agent definitions only)

| Agent | What it does | You have? | Links |
|---|---|---|---|
| `cache` | Application-level caching strategies that eliminate redundant computation and database load | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/cache.md) |
| `chaos` | Controlled failure experiments that find resilience gaps before production incidents | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/chaos.md) |
| `edge` | CDN configuration, edge function deployments, global distribution strategies | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/edge.md) |
| `finop` | Cloud cost optimisation: rightsizing, reservation strategy, cost attribution | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/finop.md) |
| `kube` | Kubernetes cluster architecture, workload configurations, operational procedures | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/kube.md) |
| `mesh` | Service mesh design: mTLS, traffic management, observability across microservices | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/mesh.md) |
| `multi` | Multi-cloud strategy: portability, cost, and operational complexity trade-offs | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/multi.md) |
| `queue` | Message queuing and event streaming: decoupling services, handling backpressure | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/queue.md) |
| `serv` | Serverless architecture: scale-to-zero, cold start optimisation, event-driven systems | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/serv.md) |
| `terra` | Terraform and IaC: module structures, state management, infrastructure-as-code best practices | **no** | [agent](https://github.com/tonone-ai/tonone/blob/main/agents/terra.md) |

---

## Quick pick list — highest value to port standalone

Ordered by relevance to your current context (NBA engine, solo founder, quant/pricing):

| Priority | Skill | Why |
|---|---|---|
| 1 | [atlas-adr](https://github.com/tonone-ai/tonone/blob/main/skills/atlas-adr/SKILL.md) | ADRs for NBA engine — architectural choices need a paper trail |
| 2 | [flux-health](https://github.com/tonone-ai/tonone/blob/main/skills/flux-health/SKILL.md) | TimescaleDB performance audit — directly applicable |
| 3 | [flux-query](https://github.com/tonone-ai/tonone/blob/main/skills/flux-query/SKILL.md) | SQL/JPQL query optimisation — directly applicable |
| 4 | [warden-threat](https://github.com/tonone-ai/tonone/blob/main/skills/warden-threat/SKILL.md) | Threat modelling is genuinely different from a security audit |
| 5 | [proof-e2e](https://github.com/tonone-ai/tonone/blob/main/skills/proof-e2e/SKILL.md) | E2E test construction you don't have |
| 6 | [apex-status](https://github.com/tonone-ai/tonone/blob/main/skills/apex-status/SKILL.md) | Executive project tracking across what's done / in-flight / upcoming |
| 7 | [crest-okr](https://github.com/tonone-ai/tonone/blob/main/skills/crest-okr/SKILL.md) | Structured OKR framework you don't have |
| 8 | [crest-roadmap](https://github.com/tonone-ai/tonone/blob/main/skills/crest-roadmap/SKILL.md) | Sequenced roadmap with trade-off analysis |
| 9 | [cast](https://github.com/tonone-ai/tonone/blob/main/agents/cast.md) | Time series forecasting — adjacent to quant/pricing work |
| 10 | [brief](https://github.com/tonone-ai/tonone/blob/main/agents/brief.md) · [clause](https://github.com/tonone-ai/tonone/blob/main/agents/clause.md) | Contract drafting and redlining as a founder |
| 11 | [helm-arbiter](https://github.com/tonone-ai/tonone/blob/main/skills/helm-arbiter/SKILL.md) | Scope dispute resolution — useful when product vs eng thinking conflicts |
| 12 | [echo-jobs](https://github.com/tonone-ai/tonone/blob/main/skills/echo-jobs/SKILL.md) | Jobs-to-be-Done framework if doing any customer/product work |
| 13 | [apex-takeover](https://github.com/tonone-ai/tonone/blob/main/skills/apex-takeover/SKILL.md) | Codebase acquisition — useful when inheriting or reviewing unfamiliar code |
| 14 | [vigil-alert](https://github.com/tonone-ai/tonone/blob/main/skills/vigil-alert/SKILL.md) | SLO-backed alerts — if you ever add production monitoring |
| 15 | [relay-docker](https://github.com/tonone-ai/tonone/blob/main/skills/relay-docker/SKILL.md) · [relay-deploy](https://github.com/tonone-ai/tonone/blob/main/skills/relay-deploy/SKILL.md) | Docker + deployment config generation |

## Skip list — not relevant to your context

- `touch`, `volt` — mobile and embedded, no crossover
- `form` suite (all 15) — visual design, not applicable
- `move`, `glyph`, `grid`, `hue`, `cut` — design system atoms, no crossover
- `buzz` suite — PR/community, premature at current stage
- `tune`, `evals`, `guard`, `rank`, `embed`, `trace` — AI ops, only relevant if adding LLM features to NBA engine
