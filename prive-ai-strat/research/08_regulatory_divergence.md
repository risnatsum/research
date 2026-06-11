# Module 8: Regulatory Divergence — HKMA vs. MAS vs. EU AI Act

## [Regulatory Divergence — HKMA vs. MAS vs. EU AI Act]

### Introduction: The Wealth Management AI Paradox

The rapid integration of Artificial Intelligence (AI) and Machine Learning (ML) into wealth management—ranging from hyper-personalized robo-advisory services to sophisticated risk modeling and automated compliance—has prompted a global regulatory response that is as diverse as it is complex. Wealth management sits at a unique intersection of fiduciary duty, complex financial products, and high-stakes consumer outcomes. The "AI Paradox" in this sector is clear: while AI offers the promise of democratizing high-quality financial advice and optimizing portfolio returns, it introduces opaque "black box" risks that can lead to systematic bias, market instability, and a fundamental erosion of trust if not properly governed.

For wealth management firms operating at the intersection of international financial hubs, the landscape is currently defined by a "regulatory patchwork." The European Union (EU) leads with prescriptive, horizontal legislation that treats AI as a safety and rights issue. In contrast, Hong Kong and Singapore maintain principle-based, sector-specific oversight that treats AI as an evolution of existing financial risks. This module provides an exhaustive deep-dive into the regulatory requirements across these three primary target regions, mapping the divergence in compliance mandates, historical evolution, and strategic implications for global wealth managers.

### 1. Hong Kong: Principle-Based Oversight and the "Human-in-the-Loop" Mandate

In Hong Kong, the regulatory approach is led by the Hong Kong Monetary Authority (HKMA) and the Securities and Futures Commission (SFC). Unlike the EU, Hong Kong does not have a standalone "AI Act." Instead, AI is regulated through a series of thematic circulars and high-level principles that are technology-neutral and grounded in existing banking and investment frameworks. This "principle-based" approach allows the HKMA to adapt to the fast-moving tech landscape without needing to pass new legislation every time a new model like GPT-4 emerges.

#### 1.1 The Foundational 12 Principles (2019): A Historical Pivot
The HKMA’s foundational stance was established on November 1, 2019, with the release of the circular "High-level Principles on Artificial Intelligence." Historically, this pivot was driven by the launch of virtual banks in Hong Kong and the increasing use of Big Data Analytics (BDA) in credit scoring. The HKMA recognized that traditional risk management tools were insufficient for models that could process thousands of non-traditional data points.

The 12 core principles are divided into three pillars:

**Pillar A: Governance and Accountability**
1.  **Board and Senior Management Accountability**: The Board is not permitted to delegate its ultimate responsibility for AI outcomes. A designated senior manager must be "the face" of AI compliance.
2.  **Adequate Resources and Training**: Firms must prove they have the technical talent to understand the models they deploy—a major challenge in the talent-scarce wealth tech market.
3.  **Third-Party Risk Management**: If a wealth manager uses a vendor (like Addepar or Envestnet) for AI modules, the firm remains 100% liable for any "hallucination" or error.

**Pillar B: Application Design and Development**
4.  **Explainability and Interpretability**: This is the "No Black Box" rule. For wealth management, if an AI recommends shifting a client from 60/40 equity-bond split to 80/20, the firm must be able to explain the "why" to the regulator.
5.  **Data Quality and Integrity**: Models must be trained on data that is relevant and unbiased.
6.  **Fairness and Non-discrimination**: Algorithmic bias in credit scoring or product suitability is a primary concern.
7.  **Rigorous Validation and Testing**: Before a model goes live, it must undergo "back-testing" (how would it have performed in 2008?) and "stress-testing."

**Pillar C: Ongoing Monitoring and Maintenance**
8.  **Periodic Reviews**: Models are not "set and forget." They must be audited for "model drift" as market conditions change.
9.  **Contingency Planning**: Firms must have a "kill switch"—a manual override if the AI begins to behave erratically.
10. **Cybersecurity and Data Privacy**: Protecting the high-value data of HNWIs (High Net Worth Individuals) from AI-powered breaches.

#### 1.2 Generative AI and Consumer Protection (2024): The "Human-in-the-Loop" Mandate
With the rise of Large Language Models (LLMs), the HKMA issued updated guidance in August 2024 ("Consumer Protection in respect of Use of Generative AI"). This circular introduced the "Human-in-the-loop" requirement for high-risk use cases. 

For wealth management, the implications are profound:
- **Investment Research**: GenAI can summarize 500-page analyst reports, but a human analyst must verify the summary before it is used for client recommendations.
- **Suitability Checks**: If a chatbot profile a client’s risk appetite, a human advisor must sign off on that profile before any trades are executed.
- **Transparency Disclosures**: Every AI interaction must be clearly labeled. The HKMA expects a "This is an AI Assistant" watermark or verbal disclaimer.

#### 1.3 SFC and the "High-Risk" Designation for Investment Advisory
The SFC has taken an even more granular approach. In November 2024, the SFC explicitly classified AI-driven investment recommendations and automated trading as "high risk." This triggers enhanced validation requirements, including:
- **Algorithm Audit Trails**: Every recommendation must be logged with the specific data inputs and model version used.
- **Client Opt-Out**: Clients have the right to request a human review of any AI-generated recommendation.
- **Market Impact Assessment**: For large wealth managers, the SFC requires an assessment of whether their automated rebalancing algorithms could cause market flash crashes.

#### 1.4 The HKMA Sandbox++: Accelerating Wealth Tech (2026)
In March 2026, the HKMA expanded its "GenAI Sandbox" into "Sandbox++," specifically targeting asset and wealth management. This allows firms to test "Agentic AI"—AI that can autonomously execute trades—in a risk-controlled environment. The Sandbox++ provides a "safe harbor" where firms can receive real-time feedback from regulators without the immediate threat of enforcement actions, provided they maintain strict capital and liquidity buffers. (Source: [HKMA Sandbox++ Expansion Announcement](https://www.hkma.gov.hk/eng/news-and-media/press-releases/2026/03/20260305-1/))

#### 1.5 Historical Context: The Evolution of HKMA AI Policy
The HKMA’s journey toward AI regulation was not accidental; it was a calibrated response to the transformation of Hong Kong as a FinTech hub.
- **2017-2018**: The launch of the "Smart Banking" era. HKMA announced seven initiatives, including the Open API Framework and the launch of Virtual Banking licenses. This period saw a surge in algorithmic credit scoring by non-traditional players (e.g., WeLab, Livi Bank).
- **2019**: The release of the "High-level Principles." This was timed with the actual commencement of virtual bank operations. The regulator wanted to ensure that these "digital-first" entities didn't use AI to engage in predatory lending or opaque risk management.
- **2021-2022**: The "Regtech" push. HKMA realized that banks were struggling with the *cost* of compliance. They began encouraging the use of AI *for* compliance (AML/KYC), leading to the Volume 1 and Volume 2 Regtech Case Studies.
- **2023-2024**: The Generative AI Explosion. The rapid adoption of ChatGPT by retail consumers forced the HKMA to issue the August 2024 circular. The concern shifted from "traditional bias" to "hallucinatory risk" and the potential for GenAI to mis-sell products through highly persuasive but inaccurate chatbots.

### 2. Singapore: Innovation-First and the Veritas Framework

Singapore’s approach, led by the Monetary Authority of Singapore (MAS), is characterized by an "innovation-first" philosophy that prioritizes industry collaboration over prescriptive mandates. The goal is to establish Singapore as a global hub for "Responsible AI" without stifling the development of the wealth tech sector. This strategy is embodied in the FEAT Principles and the Veritas Initiative.

#### 2.1 The FEAT Principles (2018): The "North Star" of Singapore AI
Released in November 2018, the FEAT Principles (Fairness, Ethics, Accountability, and Transparency) were the first of their kind globally for the financial sector. Unlike the EU's broad rights-based approach, FEAT was co-created with a committee of banks and insurers to be practical.

**Fairness (F)**
In wealth management, fairness is defined as the absence of systematic bias. MAS expects firms to verify that their AIDA (Artificial Intelligence and Data Analytics) models do not exclude certain demographics (e.g., by age, gender, or nationality) from high-quality investment opportunities unless justified by a verifiable risk factor.

**Ethics (E)**
AI must align with the firm's core values. If a wealth manager promotes "ESG Investing," its AI algorithms must not "greenwash" by prioritizing high-fee funds that do not meet ESG criteria.

**Accountability (A)**
MAS requires a clear hierarchy of responsibility. For large firms, this often involves an "AI Risk Committee" that reports directly to the Chief Risk Officer (CRO). Accountability cannot be outsourced to a black-box model.

**Transparency (T)**
This focuses on "Transparency on Request." If a client is denied a specific credit limit or wealth product by an AI, the firm must be able to provide a clear, plain-English explanation of the data points that led to that decision.

#### 2.2 The Veritas Initiative: From Principles to Code
While FEAT provided the *what*, the industry struggled with the *how*. MAS launched the **Veritas Initiative** in 2019 to operationalize these principles through open-source software and standardized methodologies.

**Phase 1 & 2 (2020-2022): The Fairness Metrics**
Veritas initially focused on high-impact areas like **Customer Marketing** and **Credit Scoring**. For wealth managers, the Fairness methodology identifies two critical metrics:
- **Disparate Impact**: Measuring if the AI-driven selection rate for a "protected group" (e.g., female investors) is significantly lower than for the "privileged group" (e.g., male investors).
- **Equal Opportunity**: Ensuring that among all qualified investors, the AI has an equal probability of correctly identifying them for a specific product recommendation.

**Phase 3: Veritas Toolkit 2.0 (June 2023)**
The release of Toolkit 2.0 was a milestone, adding assessment modules for Ethics, Accountability, and Transparency. This allows wealth managers to run an "AI Audit" that generates a compliance score for every algorithm in their inventory. (Source: [MAS Veritas Toolkit 2.0 Technical Documentation](https://www.mas.gov.sg/publications/monographs-or-information-papers/2023/veritas-toolkit-2-0))

#### 2.3 Project MindForge and GenAI Risk Taxonomy (2024-2025)
As GenAI shifted from a novelty to a strategic tool, MAS launched **Project MindForge**. In 2024, it published a comprehensive **GenAI Risk Taxonomy** for the financial sector, identifying three primary risks for wealth advisors:
1.  **Hallucinations in Market Data**: LLMs generating "fake" historical returns or analyst ratings.
2.  **Prompt Injection & Data Leakage**: Clients potentially "tricking" an AI advisor into revealing sensitive firm data or other clients' investment strategies.
3.  **Model Brittleness**: The risk that an AI advisor fails to respond correctly to a "Black Swan" market event (like a sudden geopolitical conflict) because it wasn't in the training data.

#### 2.5 Technical Deep-Dive: Veritas Toolkit 2.0 Fairness Metrics
To understand how wealth managers in Singapore are expected to "prove" fairness, one must look at the specific mathematical metrics supported by Veritas Toolkit 2.0. MAS does not mandate a single metric, but expects firms to justify their choice based on the use case.

- **Statistical Parity Difference (SPD)**: This is the "Equality of Outcome" metric. For a wealth manager, it measures the difference in the rate of "High Yield Product" recommendations between two groups (e.g., local citizens vs. foreign residents). If the SPD exceeds a threshold (typically 0.1 or 0.2), the model is flagged for "Disparate Impact."
- **Average Odds Difference (AOD)**: This measures "Equality of Accuracy." It ensures that the model is equally good at identifying "Qualified" individuals across all groups. This is critical for wealth management, as a model that is "lazy" and just gives everyone a low-risk score might appear fair in SPD but fail in AOD because it misses high-potential clients in minority groups.
- **Counterfactual Fairness**: This is an advanced metric supported in Toolkit 2.0. It asks: "If this specific client were exactly the same but had a different gender/nationality, would the AI have given the same recommendation?" If the answer is no, the model is considered biased at an individual level.

#### 2.6 Historical Context: The Evolution of Singapore’s Veritas Initiative
Singapore’s approach has always been tied to its "National AI Strategy" (NAIS).
- **2014**: Launch of the "Smart Nation" initiative. MAS began exploring how to move away from paper-based banking.
- **2018**: Release of the FEAT Principles. This was a "wait and see" period where MAS observed how the industry self-regulated.
- **2019**: The realization that self-regulation was inconsistent. The Veritas Initiative was born to provide the "yardstick" for FEAT.
- **2021-2023**: The "Veritas Phase 1-3" rollout. This was a response to the increasing complexity of "Deep Learning" models which banks claimed were "un-auditable." Veritas proved that even complex models could be tested for fairness.
- **2024**: Project MindForge. This was a direct response to the "Agentic AI" trend, ensuring that as AI takes more autonomy in wealth management, the human remains the "ultimate stop."

### 3.5 EU AI Act Annex IV: The Documentation "Mountain"
One of the most significant burdens for non-EU firms using high-risk AI is the Technical Documentation requirement under **Annex IV**. This is not a simple user manual; it is an exhaustive architectural blueprint.

**Required Components of Annex IV Documentation:**
1.  **AI System Description**: A general description of the system’s intended purpose, the interactions with other systems, and the "human oversight" strategy.
2.  **Detailed Design and Development**: This includes a description of the "logic" of the AI (even for black boxes, the architecture—e.g., Transformer, CNN, RNN—must be disclosed).
3.  **Data Governance Policies**: Detailed records of how the training and validation datasets were selected, cleaned, and tested for "data poisoning" or "bias."
4.  **Risk Management System**: A record of every "foreseeable risk" identified (e.g., "The model might fail during a period of high inflation") and the specific technical mitigation applied.
5.  **Performance Metrics**: A disclosure of the model’s accuracy, robustness, and cybersecurity resilience scores.

For a global wealth manager, maintaining this documentation for every "high-risk" model is a massive administrative task, often requiring specialized "AI Compliance Officers" who sit between the Data Science and Legal teams.

### 3.6 AI in AML/KYC: The Convergence and Divergence
Anti-Money Laundering (AML) and Know Your Customer (KYC) are areas where AI is most aggressively deployed.

- **HKMA (9 Sep 2024 Circular)**: Formally encourages banks to move from rule-based to AI-powered transaction monitoring. HKMA is particularly focused on **"Network Analysis"**—using Graph AI to find "mule account" networks. They allow for "lighter" explainability if the AI is used solely for *alert generation* rather than *final de-risking* decisions.
- **EU AI Act (The Fraud Exception)**: The EU AI Act explicitly excludes "AI systems used for the purpose of detecting, preventing and investigating fraud" from the high-risk classification of Annex III 5(b). This creates a "Regulatory Sweet Spot": a firm can use a "black box" AI for fraud detection in London, but if they use the *same data* to decide if a client can open a margin account, it suddenly becomes high-risk.
- **MAS (Veritas in Fraud)**: MAS released a specific case study on applying FEAT to Fraud Detection. The core challenge is "False Positives." If an AI unfairly blocks the accounts of foreign HNWIs more often than locals, it violates the Fairness principle, even if the "total accuracy" is high.

### 4. Strategic Divergence and Conflict Analysis

The primary divergence between these regimes lies in their philosophical foundation. The EU approach is grounded in the "Precautionary Principle," aiming to prevent harm before it occurs through ex-ante (before-the-fact) regulation. In contrast, the HKMA and MAS take an "Outcome-Based" approach, focusing on managing risks as they manifest within the existing financial framework (ex-post or principle-led oversight).

#### 4.1 Friction Points: Extraterritoriality and Liability "Ghosting"
The conflict between the EU’s prescriptive rules and Asia’s flexible principles is most evident in liability. Under the EU AI Act, "providers" of high-risk AI carry heavy legal liability for system failures. However, for a global wealth manager, this creates a phenomenon I call **"Liability Ghosting"**:
- **Scenario**: A wealth manager in Singapore uses a US-built AI portfolio optimizer for its EU-resident clients. 
- **Conflict**: The EU AI Act demands that the US provider performs a conformity assessment. If the US provider refuses to comply (due to cost or trade secrets), the Singaporean wealth manager (the "Deployer") may be forced to assume full legal liability as if they were the "Provider" under **Article 28** of the Act.
- **The Asian Contrast**: In Hong Kong and Singapore, the liability remains squarely with the financial institution’s Board. The regulator does not "reach back" to the US software developer in the same prescriptive way. This creates a "split liability" model where the same software has different legal owners across jurisdictions.

#### 4.2 Data Sharing vs. Data Sovereignty
The EU AI Act mandates high-quality, representative datasets (Art. 10). For a global AI to be "unbiased," it needs data from all regions. However:
- **HKMA/MAS Constraints**: Both Hong Kong and Singapore have strict "Banking Secrecy" and increasing "Data Localization" expectations. 
- **The Paradox**: To prove an AI isn't biased against EU clients, a bank might need to "mix" EU data with global data. But transferring that data out of Hong Kong to an EU-based "Conformity Assessment Body" could violate HKMA’s data residency guidelines.
- **Strategic Solution**: Firms are increasingly adopting **Federated Learning**, where the model "travels" to the data in each region, learns, and then aggregates the insights without the raw data ever leaving its home jurisdiction.

### 5. Strategic Implications: The "Modular Governance" Implementation Guide

For the modern wealth manager, compliance cannot be treated as a siloed activity. To navigate this divergence, firms must move beyond "Checklist Compliance" to a **Modular Governance Architecture**.

#### 5.1 Step 1: The "Global AI Inventory"
Firms must catalog every algorithm, from simple Excel-based macros to complex neural networks.
- **Data Points**: Purpose, Model Type (Traditional vs. GenAI), Data Sources, Target Jurisdictions, and "Materiality" (How much money does this touch?).
- **The "Materiality Squeeze"**: MAS and HKMA allow for lighter oversight of low-materiality models. The EU AI Act does not; if it’s in Annex III, it’s high-risk regardless of the dollar amount.

#### 5.2 Step 2: Tiered Risk Classification (The "Gold Standard" Core)
Identify the "highest common denominator." 
- **Recommendation**: Adopt the EU AI Act’s "High-Risk" standards (data governance, documentation, human oversight) as the global internal baseline. This ensures that any AI output "leaking" into the EU is already compliant.
- **Exception Modules**: Add "APAC Modules" for specific local quirks, such as the HKMA’s 2024 "Human-in-the-loop" requirement for investment advice, which is more specific than the EU's general human oversight rule.

#### 5.3 Step 3: Vendor "Hardening" and Due Diligence
Wealth managers are increasingly reliant on "black box" vendors.
- **Contractual Claw-backs**: Contracts with AI vendors must include clauses that require the vendor to provide the "Technical Documentation" required by the EU AI Act.
- **The "Right to Audit"**: Firms must have the right to audit the vendor’s training data for bias—a requirement under the Veritas Phase 2 framework.

#### 5.4 Step 4: The "AI Kill Switch" and Human Escalation
Both the HKMA (2024) and MAS (MindForge) emphasize the need for human intervention.
- **Implementation**: Every robo-advisory interface must have a "Request a Human" button that is easily accessible.
- **Technical Guardrail**: For Agentic AI, firms should implement "Threshold Alerts." If an AI rebalancing trade exceeds 5% of a client’s portfolio value, the system should automatically "freeze" until a human reviews the trade.

### 6. Case Study: The "Cross-Border Robo-Advisor" Conflict

Consider a hypothetical firm, **Axiom Wealth**, headquartered in Singapore with offices in Hong Kong and London.

1.  **London (EU AI Act Influence)**: Axiom’s London office uses a GenAI chatbot for client onboarding. Because it profiles clients and offers life insurance (Annex III 5c), it is labeled "High-Risk." Axiom must hire an external auditor to perform a conformity assessment, costing €150,000.
2.  **Hong Kong (HKMA/SFC Influence)**: The HK office uses the same chatbot. The SFC labels it "High Risk" for investment advice. They don't require an external auditor, but they demand a "qualified person" (a licensed Type 4 advisor) to review 10% of all chatbot transcripts weekly.
3.  **Singapore (MAS Influence)**: The Singapore office uses the same chatbot. MAS requires them to run the **Veritas Toolkit 2.0** to prove the chatbot doesn't offer lower-risk products to younger investors simply due to age-bias in the training data.

**The Divergence Result**: Axiom Wealth is running the *same software* but has three different compliance teams performing three different types of audits (Conformity Assessment vs. Manual Review vs. Veritas Tool). This "compliance friction" adds an estimated 22% to the total cost of ownership (TCO) for the AI system. (Source: [Clifford Chance "Global AI Divergence" Report 2025](https://www.cliffordchance.com/insights/resources/ai-divergence-2025.html))

### 8. Detailed Regulatory Divergence: Wealth Management Edge Cases

In the practical world of wealth management, several "edge cases" highlight the friction between these three regulatory regimes.

#### 8.1 The "Shadow AI" Problem in Wealth Management
Wealth advisors often use unauthorized AI tools (e.g., free versions of ChatGPT or Claude) to draft client communications or summarize market trends. This practice, known as "Shadow AI," creates massive regulatory exposure.
- **EU AI Act**: Strictly prohibits this for high-risk activities. Under Article 26, the "Deployer" (the firm) must ensure only authorized, documented AI systems are used. Fines apply even for "unintentional" use if it touches a process like client profiling.
- **HKMA/MAS**: Focus on "Accountability." They don't explicitly ban specific tools, but if an advisor uses an unapproved AI and it results in a suitability error or data breach, the Board is held responsible for "failing to maintain adequate internal controls."

#### 8.2 High-Frequency Trading (HFT) and Market Stability
While HFT is common in institutional markets, AI-driven HFT is increasingly used in "High Net Worth" discretionary portfolios for tactical asset allocation.
- **SFC (Hong Kong)**: Focuses on "Market Integrity." They require algorithmic traders to have "kill switches" and "circuit breakers" that are tested quarterly. The SFC’s 2024 update specifically highlights the risk of "AI Collusion," where different firms' AI models inadvertently learn to coordinate trades.
- **EU AI Act**: HFT is generally *not* high-risk under Annex III. It is instead regulated under **MiFID II**. This creates a divergence where a bank's HFT bot is a "General Financial System" issue in the EU but an "AI Governance" issue in Hong Kong.

#### 8.3 ESG and AI "Greenwashing"
AI is often used to "score" companies for ESG (Environmental, Social, Governance) compliance, which then drives portfolio allocation.
- **MAS**: Through the **Project Guardian**, MAS is looking at "Verifiable ESG AI." They expect wealth managers to be able to "audit the audit"—i.e., explain the specific data points (satellite imagery, carbon reports) the AI used to give a company an "A" rating.
- **EU AI Act**: If an ESG AI is used to price a "Green Life Insurance" product, it becomes high-risk under Annex III 5(c). This makes the EU the only region where an ESG algorithm could trigger the same level of compliance as a credit scoring model.

### 9. Strategic Implementation: The "Global AI Compliance Office" (GAICO)

To handle this complexity, global firms are shifting from "Legal Departments" to a dedicated **Global AI Compliance Office**.

**Key Functions of GAICO:**
1.  **Algorithmic Forensics**: A team of data scientists who run Veritas-style tests on new models to identify bias before they are deployed globally.
2.  **Regulatory Mapping**: A legal team that updates the "Modular Governance" stack every time a new circular is released (e.g., the HKMA 2026 Sandbox++ updates).
3.  **Vendor Certification**: A procurement arm that refuses to buy any AI tool that doesn't provide an **EU AI Act Annex IV**-style technical file.
4.  **Explainability Desk**: A customer service arm that handles "Explainability Requests" from clients, ensuring that the firm meets the "Transparency on Request" mandates of MAS and the EU.

### 10. Conclusion: The Future of Regulatory Convergence

While the current landscape is one of divergence, we are seeing the first signs of "Regulatory Convergence" in the form of **Equivalence Agreements**. 
- **The APAC Corridor**: There are ongoing discussions between HKMA and MAS to recognize each other's AI sandboxes, allowing a wealth tech firm to "passport" its AI from Singapore to Hong Kong with minimal additional testing.
- **The EU vs. The World**: The EU AI Act is likely to become the "de facto" global standard for technical robustness, while Asia will continue to lead on "use-case specific" ethical implementation. For wealth management, this means the future belongs to firms that can balance the **rigidity of the EU** with the **agility of Asia**.

**Data Table: Regulatory Divergence Metric Mapping**

| Metric | EU AI Act | HKMA (Hong Kong) | MAS (Singapore) |
|---|---|---|---|
| **Primary Goal** | Rights/Safety | Consumer Protection | Innovation/Ethics |
| **High-Risk Scope** | Fixed List (Annex III) | Materiality-based | Use-case/Veritas-based |
| **Human Review** | Ex-post Oversight | Mandatory Review (Advisory) | Accountability-led |
| **Extraterritoriality** | Extreme (Output-based) | Limited (Entity-based) | Limited (Entity-based) |
| **Sandbox Access** | Restricted (Government) | Proactive (Sandbox++) | Industry-led (Veritas) |
| **Transparency** | Mandatory Disclosure | Mandatory Disclosure | Transparency on Request |
| **Data Residency** | EU Data Center (often) | HK Data Residency | SG Data Localization |
| **Max Penalty** | 7% Global Turnover | Supervisory Sanction | Supervisory Sanction/Fine |
| **Model Registration** | EU Database (High-Risk) | Internal Inventory | Internal Inventory |

#### 2.7 Technical Specifications: Accuracy and Robustness in Wealth AI
While "Fairness" is often the headline, "Accuracy" and "Robustness" are the technical bedrock of MAS and HKMA requirements.

**Accuracy Metrics for Wealth Models:**
- **Mean Absolute Error (MAE)**: Used for AI that predicts asset prices. MAS expects firms to define a "Maximum Tolerable MAE" for each portfolio class.
- **Confusion Matrix Analysis**: For AI that classifies clients (e.g., "Conservative" vs. "Aggressive"), firms must report the "False Positive Rate" (recommending aggressive products to conservative clients) separately from the "False Negative Rate." In wealth management, a False Positive is considered a major suitability violation.
- **Robustness against "Adversarial Attacks"**: Both HKMA and EU AI Act (Art 15) require models to be resilient against malicious inputs. For wealth management, this means an AI shouldn't be "tricked" into recommending a specific stock because a malicious actor flooded the training data with fake sentiment.
