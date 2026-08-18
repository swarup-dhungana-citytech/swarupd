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
    period: "2026 to Present",
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
        "Set up statutory payment handling for the EU and lined up payment rails through partnerships with multiple providers.",
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
    period: "2026 to Present",
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
    period: "2024 to 2026",
    title: "Getpay, built zero to one as founding PM",
    summary:
      "Founding product manager for Getpay, a payment orchestration platform built and shipped from scratch, plus market expansion for finPOS, Citytech's existing terminal product.",
    metric: "30%",
    metricLabel: "Fewer reconciliation issues",
    detail: {
      context:
        "Citytech had finPOS, a payment terminal product, but no orchestration layer connecting it to banks. Fragmented acceptance stacks carried heavy manual reconciliation overhead.",
      action: [
        "Built and shipped Getpay from zero to one as founding product manager, the orchestration layer connecting merchants, banks, and terminals.",
        "Led market expansion for finPOS, Citytech's existing terminal product.",
        "Oversaw Agency Banking suite integration into core-banking systems.",
        "Introduced maker-checker approval and workflow automation.",
      ],
      outcome:
        "Rolled out across 5 banks, reducing reconciliation issues by 30% and manual errors by 45%.",
    },
    tags: ["Founding PM", "Payment Orchestration", "POS Switch", "Core Banking", "Maker-Checker"],
    markets: ["Nepal"],
  },
  {
    id: "emv-kcb",
    pillars: ["acquiring"],
    org: "Citytech Global × KCB Bank",
    period: "2024 to 2026",
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
    period: "2024 to 2026",
    title: "East Africa expansion via PSP partnership",
    summary:
      "Market entry through Instantpay (Tanzania), leveraging its PSP license for merchant acquisition, POS expansion, and PCI DSS-certified infrastructure rollout.",
    metric: "PSP license",
    metricLabel: "Route to market",
    detail: {
      context:
        "Entering East Africa directly would have required a licensing path measured in years.",
      action: [
        "Spearheaded Citytech's expansion into East Africa through a partnership with Instantpay (Tanzania).",
        "Leveraged the partner PSP license to drive merchant acquisition and expand POS terminal deployment.",
        "Completed PCI DSS certification establishing a compliant operational framework for multi-country transactions.",
      ],
      outcome: "A licensed route to market and live, PCI DSS-certified payment infrastructure in East Africa.",
    },
    tags: ["PSP Licensing", "Merchant Acquisition", "Market Entry", "POS Switch", "PCI DSS"],
    markets: ["Tanzania", "Kenya"],
  },
  {
    id: "gov-clients",
    pillars: ["acquiring"],
    org: "Citytech Global",
    period: "2024 to 2026",
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
    period: "2024 to 2026",
    title: "USD 400K grant for finPOS Ultra",
    summary:
      "Secured donor funding for a mobile POS initiative advancing financial inclusion in Nepal.",
    metric: "USD 400K",
    metricLabel: "Grant secured",
    detail: {
      context:
        "Reaching micro-merchants in Nepal required a lower-cost mobile acceptance device than conventional terminals.",
      action: [
        "Conceived finPOS Ultra, a cost-efficient, powerful device built for financial inclusion in the Nepali market, plus the technology to support it.",
        "Secured a USD 400K grant from UK Aid (FCDO) to fund the initiative.",
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
    period: "2024 to 2026",
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
    period: "2023 to 2024",
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
  {
    id: "lodz-research",
    pillars: ["aiml"],
    org: "Lodz University of Technology",
    period: "2018",
    title: "Applied ML research in image processing",
    summary:
      "Research internship applying TensorFlow to image-processing and machine learning models at the AI Research Department.",
    metric: "CNN / Mask R-CNN",
    metricLabel: "Models applied",
    detail: {
      context:
        "An early-career research chapter, before the move into product, applying computer vision techniques to real image-processing problems.",
      action: [
        "Applied TensorFlow and Java to image-processing and machine learning models.",
        "Worked with CNN and Mask R-CNN architectures at the AI Research Department.",
      ],
      outcome:
        "Foundational applied-ML experience that still shapes a technical, first-principles approach to product decisions.",
    },
    tags: ["TensorFlow", "CNN", "Mask R-CNN", "Research"],
    markets: ["Poland"],
  },
  {
    id: "ait-research",
    pillars: ["aiml"],
    org: "Asian Institute of Technology",
    period: "2021 to 2023",
    title: "Master's, research, and teaching at AIT",
    summary:
      "Master's in Information Management, plus research and teaching roles applying data modeling to a live university platform.",
    metric: "3.83",
    metricLabel: "Masters GPA, King's Scholarship",
    detail: {
      context:
        "Formalising the shift from engineering into product and information-systems thinking, on His Majesty the King's Scholarship.",
      action: [
        "Completed a Master's in Information Management, GPA 3.83, on His Majesty the King's Scholarship.",
        "Redesigned the database schema for AIT's Technology-Enabled Active Learning (TEAL) platform as Research Assistant.",
        "Taught Data Modeling & Management to 50+ students as Teaching Assistant.",
      ],
      outcome:
        "A master's degree plus two applied research and teaching roles that shaped a systems-first approach to product work.",
    },
    tags: ["Research", "Data Modeling", "Teaching"],
    markets: ["Thailand"],
  },
];

export const markets = [
  { name: "Nepal", note: "Getpay, finPOS, finPOS Ultra" },
  { name: "Kenya", note: "L3 EMV with KCB Bank, SGR payment system" },
  { name: "Tanzania", note: "Instantpay PSP partnership, POS expansion, PCI DSS certified" },
  { name: "Zanzibar", note: "Zanmalipo ticketing platform" },
  { name: "LATAM", note: "Stablecoin payroll expansion" },
  { name: "EU", note: "Statutory payments and payment rails, partnered with multiple providers" },
  { name: "Germany", note: "Distributed AI/ML delivery" },
  { name: "Japan", note: "ISO 29187 compliance research" },
  { name: "Poland", note: "Applied ML research, Lodz University" },
  { name: "Thailand", note: "Master's, research & teaching at AIT" },
];

export const profile = {
  name: "Swarup Raj Dhungana",
  role: "Senior Product Manager, Digital Payments and Fintech Expansion",
  location: "New York, USA",
  email: "swarupdhungana@gmail.com",
  linkedin: "https://linkedin.com/in/swarup2",
  linkedinLabel: "linkedin.com/in/swarup2",
  summary:
    "Product leader with 6+ years working across the intersection of technology, product, and people, scaling systems across South Asia, East Africa, LATAM, and the EU. Currently leading global payroll payment rails and stablecoin integration at Niural AI.",
};

export const scaleSignals = [
  { value: "6+", label: "Years in payments and fintech product" },
  { value: "5", label: "Bank acquirers live on platform" },
  { value: "10", label: "Markets shipped into across four continents" },
  { value: "2", label: "National government payment programmes" },
  { value: "USD 400K", label: "Donor funding secured and delivered" },
  { value: "40+", label: "Engineers, compliance and ops partners led" },
];

export interface Principle {
  title: string;
  body: string;
}

export const principles: Principle[] = [
  {
    title: "Compliance is a design input, not a gate at the end",
    body: "L3 EMV, PCI DSS and licensing timelines get sequenced into the roadmap on day one. Certification lead times drive release dates, not the other way round.",
  },
  {
    title: "Ship through partners when licensing is the bottleneck",
    body: "In East Africa a direct licence path was measured in years, so market entry ran on a partner PSP licence. Route to market beats purity of ownership.",
  },
  {
    title: "Reconciliation quality is the real product metric",
    body: "Authorisation rate and TPS are visible; break rates and manual touchpoints are what operations teams live with. I instrument those first.",
  },
  {
    title: "Write the operating model, not just the spec",
    body: "Maker-checker, SLA reporting and ISO 9001 documentation are what keep a platform running once the launch team moves on.",
  },
];

export interface DecisionEntry {
  id: string;
  question: string;
  call: string;
  tradeoff: string;
  learned: string;
}

export const decisions: DecisionEntry[] = [
  {
    id: "psp-partner",
    question: "Own the licence or partner into East Africa?",
    call: "Entered Tanzania and Kenya on Instantpay's PSP licence rather than pursuing direct authorisation.",
    tradeoff:
      "Gave up margin and some control of the merchant relationship in exchange for roughly two years of time to market and a lower regulatory capital ask.",
    learned:
      "Partner economics must be renegotiated before volume scales, not after. I now build the step-down pricing schedule into the first agreement.",
  },
  {
    id: "stablecoin-sequencing",
    question: "Which markets get stablecoin payout first?",
    call: "Sequenced LATAM and EU corridors by regulatory readiness and banking partner appetite rather than by demand volume.",
    tradeoff:
      "Slower revenue ramp in the loudest corridors, but no rework and no frozen funds when supervisory expectations shifted.",
    learned:
      "Treasury and compliance need to sit in the same prioritisation review as sales. Demand-led sequencing on crypto rails is how teams end up unwinding launches.",
  },
  {
    id: "terminal-cost",
    question: "Certify a full terminal or build a lower-cost mobile device?",
    call: "Backed finPOS Ultra for micro-merchants and funded it through a UK Aid grant instead of core P&L.",
    tradeoff:
      "Added donor reporting overhead and a narrower feature set, but opened a merchant segment that conventional terminal economics could not serve.",
    learned:
      "Grant funding buys a real option on a segment. The discipline it imposes on impact measurement is worth more than the cash.",
  },
];

export const workingStyle = [
  {
    label: "Stakeholders I work with",
    body: "Bank sponsors and acquirer risk teams, scheme and certification bodies, treasury, compliance and legal, distributed engineering, field operations and merchant support.",
  },
  {
    label: "How I run a roadmap",
    body: "Quarterly outcome themes tied to settlement, acceptance and payout metrics. Weekly delivery review with engineering and compliance in the same room. Certification and audit milestones tracked as first-class roadmap items.",
  },
  {
    label: "What I look for next",
    body: "Payments or payroll infrastructure where regulatory complexity is the moat, the corridor mix is genuinely cross-border, and the product team owns unit economics rather than feature output.",
  },
];

export const howIWork = {
  intro:
    "Product decisions here start from first principles, not from what a competitor shipped last quarter. The standard craft is standard: roadmap ownership, agile delivery, stakeholder alignment, data-driven prioritization. What's less standard is how AI shows up inside that craft, as a working part of the job, not a buzzword.",
  practices: [
    {
      label: "AI Prototyping",
      body: "Turning an idea into something clickable before it reaches engineering or design.",
    },
    {
      label: "AI Coding Agent",
      body: "Ships working prototypes by directing an AI coding agent through conversation, not hand-coded line by line.",
    },
  ],
  docudaiIntro:
    "Docudai is an AI agent I built and trained to draft PRDs conversationally, and to review one you upload. What's below is a scripted walkthrough of the real tool, not a live model call.",
};
