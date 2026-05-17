# Scope of Work: Compliance Transaction Monitoring & Review UI

## 1. Executive Summary & Relevance

The regulatory landscape for Swiss External Asset Managers (EAMs) is undergoing a fundamental transformation, shifting from periodic, portfolio-level reporting to continuous, event-sourced transaction monitoring. Driven by the convergence of the EU’s Single Rulebook (AMLR, MiFID III) and Swiss AMLA revisions, the era of passive monitoring and manual sampling has ended. 

Critically, **FINMA Guidance 08/2024** explicitly mandates "Human-in-the-Loop" oversight for automated monitoring systems. Simultaneously, the revised **Swiss Federal Act on Data Protection (nDSG)** introduces personal criminal liability—fines of up to CHF 250,000—for Compliance Officers who intentionally violate data duties. This creates a regulatory pincer: firms must use high-performance automated alerting to handle new thresholds (e.g., EU MiFID III €10k CDD, €3k cash limits), but require a localized, "Swiss Finish" human review layer to remain audit-defensible and protect their officers from personal liability.

The **Compliance Transaction Monitoring & Review UI** is designed to be this "Defensible Audit Trail." It transitions Prive’s offering from a basic data engine to an **Explainable Case Management** system, providing immutable, timestamped proof that a "Knowledgeable Third Party" reviewed and rationalized flagged transactions (per AMLO-FINMA Art 17 and AMLA Art 6).

## 2. Market Sizing & Competitive Landscape

**Addressable Market:**
*   **TAM (Total Addressable Market):** $1.4B–$2.1B/year for the broader European advisory market.
*   **SAM (Serviceable Addressable Market):** $115M–$165M/year, targeting ~3,500–5,000 firms in the $200M–$2B AUM band.
*   **High-Urgency Beachhead:** **IFA Consolidators.** With UK deal values surging from £2.1B to £9.3B in 2024, consolidators are inheriting massive compliance debt across acquired books. They represent a "pull-market" needing standardized MiFID III infrastructure.
*   **Current State:** 38% of Family Offices still rely on fully manual processes, and 80% utilize Excel for core compliance tracking (with an estimated 88% error rate).

**Competitive Landscape:**
*   **Incumbents:** Etops (whose "E-Compliance" module focuses on standard workflows), Landytech, and Objectway.
*   **The "Silent Gap":** As of May 2026, major players like Aladdin Wealth and Temenos have *not* publicly announced MiFID III compliance automation. This creates a ~12-month uncontested window for a focused entrant.
*   **Aggregators:** Flanks and Pretim capture end-of-day balances but lack the timestamped, intraday mid-price data required for arrival-price Transaction Cost Analysis (TCA).

**The Prive Value Proposition:**
1.  **Bridging the Swiss Custodian Reporting Gap (RTS 22):** When a Swiss EAM uses a Swiss-only custodian for an EU client, the MiFIR RTS 22 "transmission exemption" breaks, snapping transaction reporting liability back to the EAM. Prive’s UI acts as the indispensable execution and reporting ledger to fill this blind spot.
2.  **PRIIPs Arrival-Price TCA:** Mandatory since January 2025, PRIIPs requires cost calculations based on the exact market mid-price at the order timestamp. Prive can differentiate strongly here against standard aggregators (Flanks/Pretim) by integrating this data directly into the compliance review flow.
3.  **Pricing Benchmark:** Target pricing of **€300–€800/month per seat** (avg. €550) or **0.02–0.05bps AUM** tiers, aligning with consumption-based hybrid models favored by boutique firms.

---

## 3. Business Analysis: User Stories

`[REFERENCE GAP: product-scope, nfr, api-reference]`

### Definition of Done
- [ ] Acceptance criteria fully met and verified by a reviewer.
- [ ] Unit and integration tests written and passing.
- [ ] No regressions in related flows.
- [ ] Error, empty, and loading states handled.
- [ ] Code reviewed and merged.
- [ ] Meets WCAG AA accessibility standards.

---

### [COMP-1] Compliance Dashboard: High-Value Flag View
**Type:** Story
**Epic:** COMP
**Priority:** High
**Story Size:** M

**User Story:**
As a Compliance Officer, I want to view a sortable list of flagged transactions (e.g., >€10k Transfers/Withdrawals) so that I can prioritize my daily review queue.

**Acceptance Criteria:**
- [ ] Dashboard displays a table with: Date, Account, Client Entity, Transaction Type, Amount, CCY, Risk Score, and Aging (days in queue).
- [ ] Table is sortable by Risk Score, Amount, and Aging.
- [ ] Flagged transactions include the reason code (e.g., "AMLA Art 6 - High Cash", "MiFID III CDD").

**Sub-tasks:**
- Build grid component.
- Integrate with transaction flagging API.
- Implement sorting/filtering logic.

**Out of Scope:**
- Automated auto-closure of flags (human-in-the-loop is strictly required).

---

### [COMP-2] Transaction Review Drawer & Commenting Workflow
**Type:** Story
**Epic:** COMP
**Priority:** High
**Story Size:** L

**User Story:**
As a Compliance Officer, I want to open a flagged transaction, view its details, and add timestamped comments so that I can formally document my "Knowledgeable Third Party" review.

**Acceptance Criteria:**
- [ ] Clicking a row in the dashboard opens a detailed drawer/modal.
- [ ] Drawer displays full trade/transfer details (including execution vs. arrival price for PRIIPs TCA if applicable).
- [ ] User can add rich-text comments.
- [ ] User can change status to: 'In Review', 'Clarification Required', 'Approved', 'Rejected'.
- [ ] All status changes and comments are appended to a read-only activity feed with the user's ID and an immutable timestamp.

**Sub-tasks:**
- Design and build Drawer component.
- Implement comment API POST/GET.
- Implement state machine for status changes.

---

### [COMP-3] Immutable History Export (Audit Trail)
**Type:** Story
**Epic:** COMP
**Priority:** High
**Story Size:** M

**User Story:**
As a Compliance Officer, I want to export the complete lifecycle of a flagged transaction to a tamper-evident format so that I can easily provide it during a FINMA/ESMA audit.

**Acceptance Criteria:**
- [ ] "Export Audit Trail" button is available in the Review Drawer.
- [ ] Generates a PDF containing transaction data, original flag reason, full comment history, and final decision.
- [ ] PDF includes a system-generated timestamp footer.

**Notes / Dependencies:**
- Relies on immutable database logging for activity history.

---
### Assumptions
1. Prive backend already stores the "flag reason" metadata and risk scoring needed for COMP-1.
2. "Tamper-evident" for the MVP phase means a system-generated PDF export; advanced cryptographic/WORM storage is handled at the DB layer, out of scope for the UI.

---

## 4. UI/UX Design Specifications

`[DESIGN GAP: no design system defined; using generic standard tokens]`

### Screen: Compliance Dashboard

**Purpose:** A centralized queue for Compliance Officers to monitor and prioritize flagged transactions requiring human intervention.

**Layout:**
- **Header:** Global navigation, User Profile, Global Search.
- **Main Content Area:** Full-width Data Grid / Table.
- **Filters/Controls:** Top bar above the table containing date pickers, risk tier toggles (High/Med/Low), and status tabs (Pending, In Review, Clarified).

**Components:**
- **Data Grid:**
  - Type: Table.
  - Columns: Date, Client ID, Tx Type, Amount, CCY, Rule Trigger, Status, Aging.
  - States: Default, Hover (row highlight), Empty (illustration: "No pending alerts").
- **Status Badge:**
  - Type: Pill/Tag.
  - States: Red (Pending), Orange (In Review/Clarification), Green (Approved).

**Typography & Colours:**
- Text: Primary (Dark Grey), Secondary (Mid Grey for aging/timestamps).
- Accents: System Error Red (for high risk flags), Warning Orange, Success Green.

**Interaction & States:**
- **Loading:** Skeleton loader for the table rows.
- **Empty state:** "All clear" message with a green checkmark icon.

**Accessibility:**
- **Colour contrast:** Ensure all status badges meet WCAG AA text-to-background contrast.
- **Keyboard navigation:** Arrow keys navigate table rows; Enter opens the review drawer.

**Responsive behaviour:**
- Desktop-first. On Tablet, collapse less critical columns (e.g., Client ID) behind an expandable row chevron. Mobile view is out of scope.

---

### Screen: Transaction Review Drawer

**Purpose:** A focused side-panel for reviewing a specific flagged transaction, documenting findings, and making a final compliance decision without losing context of the main queue.

**Layout:**
- **Slide-out Drawer:** Anchored to the right side of the screen, covering 40% of viewport width.
- **Top:** Transaction Header (Amount, CCY, Flag Reason).
- **Middle:** Tabbed view: `Details` (execution data, arrival price) vs `Client KYC summary`.
- **Bottom:** Activity Feed (history) and Comment Input Box.
- **Sticky Footer:** Action buttons (Approve, Clarify, Reject).

**Components:**
- **Activity Feed Item:**
  - Type: List item.
  - Properties: Avatar, User Name, Timestamp, Action/Comment Text.
- **Action Button Group:**
  - Type: Button row.
  - Primary Action: Approve (Green).
  - Secondary Actions: Clarify (Outline), Reject (Red).

**Interaction & States:**
- **Validation:** If "Reject" or "Clarify" is clicked, require text in the comment box before submitting.

**Accessibility:**
- **ARIA roles:** `role="dialog"` for the drawer, `aria-modal="true"`.
- **Focus management:** Trap focus inside the drawer while open.

**Responsive behaviour:**
- On tablet, the drawer covers 80% of the screen.

**Out of Scope:**
- Real-time collaborative editing of comments (append-only is sufficient).
- Motion/transitions: Standard 200ms ease-in-out slide for the drawer.

---

## 5. PO Sign-off Block

## PO Sign-off — APPROVED
All tickets and design specs reviewed. Business value clearly maps to mitigating FINMA/AMLA regulatory risk and addressing the RTS 22 / PRIIPs competitive gap. No outstanding issues.