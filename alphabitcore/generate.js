const {
  Document, Packer, Paragraph, TextRun, HeadingLevel,
  Table, TableRow, TableCell, WidthType, BorderStyle,
  AlignmentType, ShadingType
} = require("docx");
const fs = require("fs");

const BRAND_BLUE = "1F3864";
const LIGHT_BLUE = "D6E4F0";
const ACCENT = "2E75B6";
const GRAY = "595959";

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 160 },
    children: [new TextRun({ text, color: BRAND_BLUE, bold: true, size: 32 })],
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 120 },
    children: [new TextRun({ text, color: ACCENT, bold: true, size: 26 })],
  });
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 80 },
    children: [new TextRun({ text, color: GRAY, bold: true, size: 22 })],
  });
}

function body(text, options = {}) {
  return new Paragraph({
    spacing: { before: 60, after: 100 },
    children: [new TextRun({ text, size: 22, color: "000000", ...options })],
  });
}

function bullet(text, bold = false) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { before: 40, after: 40 },
    children: [new TextRun({ text, size: 22, bold, color: "000000" })],
  });
}

function subbullet(text) {
  return new Paragraph({
    bullet: { level: 1 },
    spacing: { before: 20, after: 20 },
    children: [new TextRun({ text, size: 20, color: "000000" })],
  });
}

function divider() {
  return new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "CCCCCC" } },
    spacing: { before: 200, after: 200 },
    children: [],
  });
}

function callout(label, text) {
  return new Paragraph({
    spacing: { before: 120, after: 120 },
    shading: { type: ShadingType.CLEAR, fill: LIGHT_BLUE },
    children: [
      new TextRun({ text: `${label}  `, bold: true, color: ACCENT, size: 22 }),
      new TextRun({ text, size: 22, color: "000000" }),
    ],
  });
}

function makeTable(headers, rows) {
  const headerCells = headers.map(h =>
    new TableCell({
      shading: { type: ShadingType.CLEAR, fill: BRAND_BLUE },
      children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: h, bold: true, color: "FFFFFF", size: 20 })],
      })],
    })
  );

  const dataRows = rows.map((row, i) =>
    new TableRow({
      children: row.map(cell =>
        new TableCell({
          shading: { type: ShadingType.CLEAR, fill: i % 2 === 0 ? "FFFFFF" : "EBF3FB" },
          children: [new Paragraph({
            children: [new TextRun({ text: cell, size: 20, color: "000000" })],
          })],
        })
      ),
    })
  );

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [new TableRow({ children: headerCells }), ...dataRows],
  });
}

function spacer() {
  return new Paragraph({ children: [], spacing: { before: 100, after: 100 } });
}

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Calibri", size: 22 },
      },
    },
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 1080, bottom: 1080, left: 1080, right: 1080 },
      },
    },
    children: [
      // Cover
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 800, after: 200 },
        children: [new TextRun({ text: "AlphaBitCore", bold: true, size: 56, color: BRAND_BLUE })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "Technology & Market Assessment", size: 34, color: ACCENT })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 100, after: 600 },
        children: [new TextRun({ text: "Prepared for Prive Technologies  |  May 2026", size: 22, color: GRAY })],
      }),

      callout("Context", "This report assesses AlphaBitCore as a potential vendor for Prive Technologies — a B2B Wealth Tech SaaS building AI agents and automated workflows for wealth managers and family offices. It draws on independent sources where available and flags claims that originate solely from AlphaBitCore's own website."),

      divider(),

      // Section 1
      h1("1. What AlphaBitCore Is"),

      h2("Core Product"),
      body("AlphaBitCore builds an AI Control Plane — a runtime governance and policy enforcement layer that sits above whatever AI agents you have already built. It does not replace LangChain, CrewAI, or AutoGen. It wraps them and enforces rules, audit, and identity across all of them from a single point."),
      body("As of December 2025 they positioned this as an MCP Federated Access Platform, built on Anthropic's Model Context Protocol (MCP) standard — a growing industry standard for how agents communicate with tools and data sources."),

      h2("Technical Architecture"),
      body("Five core components:"),
      spacer(),
      makeTable(
        ["Component", "What It Does"],
        [
          ["Gateway", "Single enforcement point — all policy decisions route through here"],
          ["Event Stream", "Append-only, cryptographically sealed execution log (tamper-proof)"],
          ["Planner / Orchestrator", "Decides which agents run and in what order"],
          ["Agent Runtime", "Executes the actual agent tasks"],
          ["Skills & Tool Registry", "Catalogue of tools agents are permitted to call"],
        ]
      ),
      spacer(),
      body("Integrates on top of: LangGraph, AWS Bedrock, Azure AI Foundry, CrewAI, AutoGen, Temporal. Identity via Okta / Entra. Secrets via CyberArk / HashiCorp Vault. Observability via Splunk, Sentinel, OpenTelemetry."),

      h2("Performance Claims"),
      callout("Note", "These are self-reported prototype measurements. No independent benchmarking has been found."),
      bullet("~2.7ms added latency per execution"),
      bullet("~4.4% overhead on 50-way concurrent batches"),
      bullet("10,000 / 10,000 injected attack traces rejected (zero false positives)"),

      h2("Maturity & Stage"),
      body("Pre-GA (General Availability). Running an Early Access Program with design partners under NDA. Estimated 0–10 active design partners at the time of writing. No public pricing, no announced GA date."),

      divider(),

      // Section 2
      h1("2. Where AlphaBitCore Fits in the AI Agent Ecosystem"),

      h2("Architecture Position"),
      body("AlphaBitCore sits at the governance layer — not the agent building layer. The stack looks like this:"),
      spacer(),
      bullet("LLM providers (OpenAI, Anthropic, Azure)"),
      bullet("Agent frameworks (LangGraph, CrewAI, AutoGen)"),
      bullet("AlphaBitCore Control Plane  ←  policy enforcement, audit, identity", true),
      bullet("Enterprise systems (CRM, ERP, compliance tools)"),
      spacer(),
      body("Generic frameworks help you build agents. AlphaBitCore governs whatever you have already built, regardless of which framework produced them."),

      h2("What It Does That Generic Frameworks Don't"),
      bullet("Runtime blocking of bad agent actions — not just logging them after the fact"),
      bullet("Cryptographically sealed, deterministically replayable execution traces — you can re-run a past agent session exactly as it happened, which is what regulators require"),
      bullet("Compliance controls pre-mapped to SR 11-7, FINRA 2026, and NIST AI RMF"),
      bullet("Cross-framework governance — one control plane across agents built in different tools"),

      h2("DIY Equivalent"),
      body("The closest build-it-yourself alternative would be OPA (Open Policy Agent) + LangSmith + a custom cryptographic audit ledger. AlphaBitCore packages this combination with financial-services regulatory mappings already built in."),

      h2("Technical Credibility"),
      body("The founders published a real arXiv paper (2603.15666, March 2026) on Atlas — an agent memory architecture. This confirms genuine R&D activity. The paper covers agent memory, not the control plane itself; the 'formal soundness proofs' claimed on their website could not be independently verified from papers found."),

      divider(),

      // Section 3
      h1("3. Fit for Prive Technologies"),

      h2("Use Case Mapping"),
      spacer(),
      makeTable(
        ["Prive Use Case", "AlphaBitCore Capability"],
        [
          ["Automated rebalancing recommendations", "Policy gates enforce investment mandate constraints before any action executes"],
          ["Regulatory reporting automation", "Sealed, replayable traces satisfy FINRA 2026 books-and-records requirements"],
          ["Client communication workflows", "Identity-scoped permissions — agent can message client X but cannot access client Y's data"],
          ["Multi-agent workflows (data → report → approval)", "Orchestrator audits the full chain, not just individual steps"],
        ]
      ),
      spacer(),

      h2("Integration Path"),
      body("API/SDK-first overlay on your existing agent stack. This is an engineering integration — not a no-code tool. If Prive is building on LangGraph or AWS Bedrock, AlphaBitCore slots in without replacing those choices."),

      h2("Regulatory Fit"),
      callout("Strongest angle for Prive", "AlphaBitCore explicitly maps to SR 11-7, FINRA 2026, NIST AI RMF, OCC/FFIEC. Prive's clients (wealth managers, family offices) will ask these compliance questions. This gives Prive a credible answer that most generic agent frameworks cannot provide."),
      body("Specific regulatory coverage:"),
      bullet("SR 11-7 — Model risk management governance and audit requirements"),
      bullet("FINRA 2026 — All four agentic AI risk categories: supervisory substitution, books-and-records integrity, auditability, scope and authority"),
      bullet("NIST AI RMF — Risk lifecycle controls"),
      bullet("OCC / FFIEC — Banking and insurance AI governance rules"),

      h2("Pricing & Commercial Model"),
      body("Not publicly disclosed. Enterprise sales model — expect six-figure ACV minimum based on founder background and buyer profile. No self-serve or developer-tier pricing found. Directed to sales contact."),
      callout("Buyer fit signal", "The AlphaBitCore website explicitly lists 'wealth platform' and 'US TAMP' as design partner categories under NDA. Prive is exactly this buyer profile."),

      divider(),

      // Section 4
      h1("4. Competitive Landscape"),

      h2("Direct Competitors — AI Governance Targeting Financial Services"),
      spacer(),
      makeTable(
        ["Vendor", "Positioning", "Maturity vs AlphaBitCore"],
        [
          ["Cranium", "AI security & governance, 11 Gartner Hype Cycle mentions. Broader than FS; focuses on AI risk and vulnerability management rather than runtime agent execution control.", "More mature, named clients"],
          ["Holistic AI", "End-to-end AI lifecycle governance, bias/fairness testing. Less focused on real-time agent enforcement; more pre-deployment and policy management.", "Comparable stage, different focus"],
          ["IBM watsonx.governance", "Full orchestration + governance, explicit FS compliance. Heavy to implement. IBM has named enterprise clients.", "Enterprise-ready, significantly heavier"],
        ]
      ),
      spacer(),

      h2("Indirect Competitors — Generic Platforms"),
      bullet("LangSmith (LangChain) — Observability and tracing. Cheap, widely deployed, but no runtime enforcement and no compliance mapping."),
      bullet("Arize / Weights & Biases — ML observability, not agent governance."),
      bullet("ServiceNow AI Governance — Wins in IT-heavy enterprise organizations."),

      h2("Build vs Buy vs Partner"),
      spacer(),
      makeTable(
        ["Option", "Path", "Risk"],
        [
          ["Build", "Assemble OPA + OpenTelemetry + custom audit ledger. Feasible but 6–12 months of engineering. Regulators will scrutinise bespoke designs.", "High engineering cost; regulatory scrutiny risk"],
          ["Buy — AlphaBitCore", "Fast path to regulatory-credible governance. Lightweight overlay on existing stack.", "Pre-GA; vendor viability unproven"],
          ["Buy — Cranium / IBM", "More mature, but less agent-specific. IBM is heavyweight for a scale-up.", "Overbuilt; slower integration"],
          ["Partner (recommended)", "Build on LangGraph; add AlphaBitCore as governance overlay once GA is confirmed and a named FS client is announced.", "Balanced — no roadmap dependency, maintains optionality"],
        ]
      ),
      spacer(),

      h2("Where AlphaBitCore Wins vs Where Alternatives Win"),
      h3("AlphaBitCore wins when:"),
      bullet("Financial-services compliance framing is a buying requirement"),
      bullet("You want a lightweight overlay that doesn't force a full platform migration"),
      bullet("Founder domain credibility matters to your procurement or legal team"),

      h3("Alternatives win when:"),
      bullet("You need production-proven vendor references today (IBM, Cranium)"),
      bullet("You are already on LangChain and LangSmith covers your observability needs at lower cost"),
      bullet("Your clients are IBM shops already invested in watsonx"),

      divider(),

      // Section 5
      h1("5. Independent Signal Check"),

      h2("Named Clients & Production Deployments"),
      body("None publicly named. The website describes four design partner categories (major credit ratings agency, financial data provider, wealth platform, US TAMP) — all under NDA. This is standard for a pre-GA enterprise startup, but means zero independently verifiable production usage exists at the time of writing."),

      h2("Founder Credibility"),
      callout("Signal strength: Strong — independently verified", "The founders have elite-tier backgrounds for this specific problem."),
      bullet("James Rhodes — Former President of Morningstar's Data, Research & Enterprise Solutions (~$800M P&L), former Morningstar CTO, 13 years at IBM Research with 30+ patents, former CTO at Rocaton Investment Advisors. Source: Crunchbase, Morningstar IR, Metis Strategy interview."),
      bullet("George Kang — Keynote speaker at AI Reasoning Day at KDD 2025 (top ML conference). Research cited in former Bank of Canada governor Mark Carney's AI policy work. Source: LinkedIn."),

      h2("Technical Credibility Signals"),
      bullet("Real arXiv paper by the founders (2603.15666) — confirms genuine research activity"),
      bullet("No public GitHub repository found for AlphaBitCore"),
      bullet("Zero G2, Capterra, or Gartner Peer Insights reviews — expected for a pre-GA product"),
      bullet("Zero Hacker News or Reddit discussion — no organic developer community signal"),
      bullet("All media coverage is from a single December 2025 PR Newswire syndication — no TechCrunch, The Information, or FinancialNews coverage found"),

      h2("Red Flags"),
      bullet("Performance claims are prototype self-measurements with no independent verification"),
      bullet("'Formal soundness proofs published on arXiv' claim could not be verified from papers found"),
      bullet("No GA date or pricing announced five months after Early Access launch"),
      bullet("Zero follow-up media coverage since the December 2025 press release"),

      h2("Overall Credibility Rating"),
      spacer(),
      makeTable(
        ["Dimension", "Rating", "Notes"],
        [
          ["Founder credibility", "5 / 5", "Elite-tier backgrounds for this specific problem — independently verified"],
          ["Technical thesis", "4 / 5", "Governance-as-infrastructure is a sound and well-timed position"],
          ["Product maturity", "2 / 5", "Pre-GA, no public pricing, no GA date"],
          ["Independent validation", "1 / 5", "Zero named clients, zero third-party coverage, zero developer community"],
          ["Overall", "2.5 / 5", "Watch-and-engage tier; not build-your-roadmap-around-this tier yet"],
        ]
      ),
      spacer(),

      divider(),

      // Section 6
      h1("6. Recommendation for Prive"),

      h2("Do Now"),
      bullet("Engage the Early Access Program. Prive matches AlphaBitCore's exact design partner profile (wealth platform / TAMP). Low cost to engage; high upside if Prive helps shape product direction and secures favourable early pricing."),

      h2("Don't Do Yet"),
      bullet("Make AlphaBitCore a dependency in Prive's core product roadmap. Pre-GA vendor risk is real — if the company pivots or fails to reach GA, any integration work is stranded."),

      h2("Watch For"),
      bullet("Named client announcement — first independent proof of production usage"),
      bullet("GA launch and public pricing — signals the product is ready for production commitments"),
      bullet("Funding announcement — signals investor conviction and extends runway"),
      body("Any of these three events would materially upgrade the credibility rating and make a deeper partnership decision more defensible."),

      divider(),

      // Sources
      h1("Sources"),
      body("All sources listed below. Items marked [Independent] were not produced by AlphaBitCore. Items marked [Self-reported] originate from AlphaBitCore's own marketing site or press releases."),
      spacer(),
      bullet("AlphaBitCore platform launch — PR Newswire APAC, December 2025  [Self-reported]"),
      bullet("AlphaBitCore platform launch — Manila Times, December 2025  [Self-reported wire pickup]"),
      bullet("Atlas: Compiled Memory for Language Agents — arXiv 2603.15666, Rhodes & Kang, March 2026  [Independent]"),
      bullet("James Rhodes — The Org profile  [Independent]"),
      bullet("James Rhodes — Metis Strategy interview  [Independent]"),
      bullet("James Rhodes — LinkedIn post announcing AlphaBitCore  [Self-reported]"),
      bullet("George Kang — LinkedIn profile  [Independent]"),
      bullet("Cranium AI — cranium.ai  [Independent]"),
      bullet("Holistic AI — holisticai.com  [Independent]"),
      bullet("Gartner AI Governance Platform reviews  [Independent]"),
      bullet("Splunk Blog — Best AI Governance Platforms 2026  [Independent]"),
      bullet("CIO.com — AI Governance Platforms overview  [Independent]"),

      spacer(),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 400 },
        children: [new TextRun({ text: "Prepared May 2026  |  For internal review only  |  Not for external distribution", size: 18, color: GRAY, italics: true })],
      }),
    ],
  }],
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("C:\\dev\\research\\alphabitcore\\AlphaBitCore-Assessment-Prive.docx", buffer);
  console.log("Done: AlphaBitCore-Assessment-Prive.docx");
});
