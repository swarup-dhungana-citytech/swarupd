export type PillarId = "acquiring" | "crypto" | "payroll" | "aiml";

export interface Pillar {
  id: PillarId;
  index: string;
  title: string;
  blurb: string;
  tags: string[];
}

export interface LedgerEntry {
  id: string;
  pillars: PillarId[];
  org: string;
  period: string;
  title: string;
  summary: string;
  metric: string;
  metricLabel: string;
  detail: {
    context: string;
    action: string[];
    outcome: string;
  };
  tags: string[];
  markets: string[];
}

export const pillars: Pillar[] = [
  {
    id: "acquiring",
    index: "PILLAR_01",
    title: "Merchant Acquiring",
    blurb:
      "Payment orchestration and POS terminal platforms rolled out across five banks, certified end to end for card-present acceptance.",
    tags: ["L3 EMV CERT", "PCI DSS", "POS SWITCH"],
  },
  {
    id: "crypto",
    index: "PILLAR_02",
    title: "Crypto & Stablecoins",
    blurb:
      "Stablecoin settlement rails for global disbursement, integrating Coinbase and evaluating regulatory posture market by market.",
    tags: ["STABLECOIN SETTLEMENT", "COINBASE", "COMPLIANCE"],
  },
  {
    id: "payroll",
    index: "PILLAR_03",
    title: "Cross-border Payroll",
    blurb:
      "Multi-currency payroll infrastructure and cross-border rails expanding payout coverage across LATAM and the EU.",
    tags: ["LATITUDE RAILS", "MULTI-CURRENCY", "PAYOUT COVERAGE"],
  },
  {
    id: "aiml",
    index: "PILLAR_04",
    title: "AI/ML Product Delivery",
    blurb:
      "Enterprise AI/ML delivery for European and US clients with distributed teams across Nepal, Kenya, and Germany.",
    tags: ["ISO 9001", "SLA FRAMEWORK", "DISTRIBUTED TEAMS"],
  },
];

export const ledger: LedgerEntry[] = [
  {
    id: "stablecoin-rails",
    pillars: ["crypto", "payroll"],
    org: "Niural AI",
    period: "2026 — Present",
    title: "Stablecoin payment rails for global payroll",
    summary:
      "Product strategy for stablecoin-based disbursement supporting distributed workforces, with active expansion across LATAM and the EU.",
    metric: "LATAM + EU",
    metricLabel: "Active expansion",
    detail: {
      context:
        "Global payroll disbursement needed faster, more compliant payouts than correspondent banking could deliver for distributed workforces.",
      action: [
        "Led product strategy for stablecoin-based payment rails supporting global payroll disbursement.",
        "Drove integration of Coinbase for stablecoin settlement and Latitude for cross-border payment rail processing.",
        "Owned the roadmap for multi-currency payroll infrastructure with engineering, compliance, and regional teams.",
      ],
      outcome:
        "Faster, more compliant payouts with expanding payout coverage and reliability across new markets.",
    },
    tags: ["Stablecoin Settlement", "Coinbase", "Latitude", "Multi-currency", "Compliance"],
    markets: ["LATAM", "EU", "Global"],
  },
  {
    id: "regulatory-readiness",
    pillars: ["crypto"],
    org: "Niural AI",
    period: "2026 — Present",
    title: "Regulatory readiness for stablecoin disbursement",
    summary:
      "Evaluation of regulatory and compliance requirements across new markets to support safe, scalable rollout.",
    metric: "Market-by-market",
    metricLabel: "Compliance review",
    detail: {
      context:
        "Stablecoin disbursement crosses jurisdictions with materially different licensing and reporting obligations.",
      action: [
        "Evaluated regulatory and compliance requirements across target markets ahead of rollout.",
        "Partnered with compliance and regional teams to sequence market entry against readiness.",
      ],
      outcome: "A safe, scalable rollout path for stablecoin-based disbursement.",
    },
    tags: ["Regulatory", "Compliance", "Market Entry"],
    markets: ["LATAM", "EU"],
  },
  {
    id: "getpay-finpos",
    pillars: ["acquiring"],
    org: "Citytech Global",
    period: "2024 — 2026",
    title: "Getpay & finPOS across five banks",
    summary:
      "End-to-end lifecycle ownership for a payment orchestration platform and a payment terminal solution.",
    metric: "30%",
    metricLabel: "Fewer reconciliation issues",
    detail: {
      context:
        "Banks running fragmented acceptance stacks carried heavy manual reconciliation overhead.",
      action: [
        "Owned the end-to-end lifecycle for Getpay (payment orchestration) and finPOS (payment terminals).",
        "Oversaw Agency Banking suite integration into core-banking systems.",
        "Introduced maker-checker approval and workflow automation.",
      ],
      outcome:
        "Rolled out across 5 banks, reducing reconciliation issues by 30% and manual errors by 45%.",
    },
    tags: ["Payment Orchestration", "POS Switch", "Core Banking", "Maker-Checker"],
    markets: ["Nepal"],
  },
  {
    id: "emv-kcb",
    pillars: ["acquiring"],
    org: "Citytech Global × KCB Bank",
    period: "2024 — 2026",
    title: "L3 EMV certification and PCI DSS",
    summary:
      "Hardware validation and approval for Instantpay terminals, plus a compliant operational framework for multi-country transactions.",
    metric: "L3 EMV",
    metricLabel: "Certified with KCB Bank",
    detail: {
      context:
        "Terminal hardware could not be deployed in Kenya without Level 3 EMV certification and a PCI DSS compliant operating framework.",
      action: [
        "Led L3 EMV POS certification with KCB Bank (Kenya) for Instantpay's hardware validation and approval process.",
        "Completed PCI DSS certification establishing a compliant operational framework for multi-country transactions.",
      ],
      outcome: "Certified hardware and a compliance framework covering multi-country transactions.",
    },
    tags: ["L3 EMV", "PCI DSS", "Certification", "Terminals"],
    markets: ["Kenya"],
  },
  {
    id: "east-africa",
    pillars: ["acquiring", "payroll"],
    org: "Citytech Global × Instantpay",
    period: "2024 — 2026",
    title: "East Africa expansion via PSP partnership",
    summary:
      "Market entry through Instantpay (Tanzania), leveraging its PSP license for merchant acquisition and infrastructure rollout.",
    metric: "PSP license",
    metricLabel: "Route to market",
    detail: {
      context:
        "Entering East Africa directly would have required a licensing path measured in years.",
      action: [
        "Spearheaded Citytech's expansion into East Africa through a partnership with Instantpay (Tanzania).",
        "Leveraged the partner PSP license to drive merchant acquisition and payment infrastructure rollout.",
      ],
      outcome: "A licensed route to market and live payment infrastructure in East Africa.",
    },
    tags: ["PSP Licensing", "Merchant Acquisition", "Market Entry"],
    markets: ["Tanzania", "Kenya"],
  },
  {
    id: "gov-clients",
    pillars: ["acquiring"],
    org: "Citytech Global",
    period: "2024 — 2026",
    title: "Government payment and ticketing systems",
    summary:
      "Onboarded the Standard Gauge Railway Payment System (Kenya) and the Zanmalipo Ticketing Platform under the Zanzibar Tourism Board.",
    metric: "2",
    metricLabel: "Government clients",
    detail: {
      context:
        "Public-sector payment programmes demand auditability and uptime beyond typical merchant deployments.",
      action: [
        "Onboarded the Standard Gauge Railway Payment System (Kenya).",
        "Onboarded the Zanmalipo Ticketing Platform under the Zanzibar Tourism Board.",
      ],
      outcome: "Two national-scale public payment programmes live on the platform.",
    },
    tags: ["Public Sector", "Ticketing", "Transit Payments"],
    markets: ["Kenya", "Zanzibar"],
  },
  {
    id: "ukaid-grant",
    pillars: ["acquiring"],
    org: "UK Aid (FCDO)",
    period: "2024 — 2026",
    title: "USD 400K grant for finPOS Ultra",
    summary:
      "Secured donor funding for a mobile POS initiative advancing financial inclusion in Nepal.",
    metric: "USD 400K",
    metricLabel: "Grant secured",
    detail: {
      context:
        "Reaching micro-merchants in Nepal required a lower-cost mobile acceptance device than conventional terminals.",
      action: [
        "Built and defended the case for finPOS Ultra as a financial inclusion initiative.",
        "Secured a USD 400K grant from UK Aid (FCDO).",
      ],
      outcome: "Funded mobile POS programme advancing financial inclusion in Nepal.",
    },
    tags: ["Financial Inclusion", "Mobile POS", "Grant Funding"],
    markets: ["Nepal"],
  },
  {
    id: "merchant-analytics",
    pillars: ["acquiring", "aiml"],
    org: "Citytech Global",
    period: "2024 — 2026",
    title: "Merchant analytics and transaction monitoring",
    summary:
      "KPI dashboards for merchant analytics and transaction monitoring, plus workflow automation across operations.",
    metric: "45%",
    metricLabel: "Fewer manual errors",
    detail: {
      context: "Operations teams lacked a shared view of merchant and transaction health.",
      action: [
        "Built KPI dashboards in Looker Studio for merchant analytics and transaction monitoring.",
        "Introduced maker-checker approval and workflow automation.",
      ],
      outcome: "Manual errors reduced by 45% with monitoring available to operations teams.",
    },
    tags: ["Looker Studio", "SQL", "Analytics", "Workflow Automation"],
    markets: ["Nepal", "Kenya", "Tanzania"],
  },
  {
    id: "cloudfactory-delivery",
    pillars: ["aiml"],
    org: "CloudFactory",
    period: "2023 — 2024",
    title: "Enterprise AI/ML delivery across three continents",
    summary:
      "AI/ML delivery for enterprise clients in Europe and the United States, with distributed teams in Nepal, Kenya, and Germany.",
    metric: "3 regions",
    metricLabel: "Distributed delivery",
    detail: {
      context:
        "Enterprise AI/ML programmes were delivered by teams split across three countries and time zones.",
      action: [
        "Led AI/ML delivery for enterprise clients across Europe and the United States.",
        "Managed distributed teams in Nepal, Kenya, and Germany.",
        "Implemented ISO 9001 documentation and an SLA reporting framework.",
      ],
      outcome:
        "Standardised delivery tracking across teams; Stand-Out Performer Award (2023) for operational excellence.",
    },
    tags: ["ISO 9001", "SLA Reporting", "Delivery Management"],
    markets: ["Nepal", "Kenya", "Germany", "US"],
  },
  {
    id: "ontology-research",
    pillars: ["aiml"],
    org: "National Institute of Informatics, Tokyo",
    period: "2023",
    title: "Privacy compliance validation via applied ontology",
    summary:
      "Modelled the ISO/IEC 29187 privacy standard into a compliance validation system under ISO SC 36 supervision.",
    metric: "ISO 29187",
    metricLabel: "Standard modelled",
    detail: {
      context:
        "Privacy standards in learning and education are written for humans, not machine validation.",
      action: [
        "Modelled ISO/IEC 29187 into a compliance validation system using Applied Ontology, supervised by the ISO SC 36 committee.",
        "Co-authored an ontology framework applying SWRL and Prolog to model GDPR, PDPA, and ISO 29187 requirements.",
      ],
      outcome:
        "Ontology framework for privacy protection in learning and education, under review at Applied Ontology Journal.",
    },
    tags: ["Applied Ontology", "GDPR", "SWRL", "Research"],
    markets: ["Japan"],
  },
];

export const markets = [
  { name: "Nepal", note: "Getpay, finPOS, finPOS Ultra" },
  { name: "Kenya", note: "L3 EMV with KCB Bank, SGR payment system" },
  { name: "Tanzania", note: "Instantpay PSP partnership" },
  { name: "Zanzibar", note: "Zanmalipo ticketing platform" },
  { name: "LATAM", note: "Stablecoin payroll expansion" },
  { name: "EU", note: "Payout coverage and compliance" },
  { name: "Germany", note: "Distributed AI/ML delivery" },
  { name: "Japan", note: "ISO 29187 compliance research" },
];

export const profile = {
  name: "Swarup Raj Dhungana",
  role: "Senior Product Manager, Digital Payments and Fintech Expansion",
  location: "Kathmandu, Nepal",
  email: "swarupdhungana@gmail.com",
  linkedin: "https://linkedin.com/in/swarup2",
  linkedinLabel: "linkedin.com/in/swarup2",
  summary:
    "Product leader with 6+ years building and scaling payments and fintech infrastructure across South Asia, East Africa, LATAM, and the EU. Currently leading global payroll payment rails and stablecoin integration at Niural AI.",
};
