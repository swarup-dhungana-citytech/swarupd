import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

const title = "About — Swarup Raj Dhungana | Payments Product Leader";
const description =
  "Education, awards, publications and languages of Swarup Raj Dhungana, senior product manager for digital payments and fintech expansion.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

const education = [
  {
    school: "Asian Institute of Technology, Bangkok",
    detail: "Master's, Information Management — GPA 3.83, His Majesty the King's Scholarship",
    period: "2021 — 2023",
  },
  {
    school: "Leeds Beckett University, UK",
    detail: "Master's, Information Technology — Distinction",
    period: "2021 — 2022",
  },
  {
    school: "Leeds Beckett University, UK",
    detail: "BSc Computer Science — First Class Honours",
    period: "2016 — 2019",
  },
];

const awards = [
  "Stand-Out Performer Award, CloudFactory (2023)",
  "His Majesty the King's Scholarship, Asian Institute of Technology (2021)",
  "Running Scholarship",
  "First Class Honours, Leeds Beckett University (2019)",
];

const competencies = [
  {
    label: "Fintech and payments",
    items:
      "Payment Orchestration, Stablecoin Settlement, Cross-Border Payment Rails, Merchant Management, EMV L3 Certification, Settlement and Reconciliation, Open Banking APIs, PCI DSS Compliance, POS Switch Integration",
  },
  {
    label: "Product leadership",
    items:
      "Agile/Scrum, Roadmap Planning, Stakeholder Engagement, Data-Driven Prioritization, GTM Strategy, UX Collaboration",
  },
  { label: "Tools and analytics", items: "Jira, ClickUp, Power BI, Looker Studio, SQL, REST APIs" },
  { label: "Technical familiarity", items: "Python, SQL, Java (Spring Boot)" },
];

function AboutPage() {
  return (
    <main>
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="label-mono text-accent">Profile</span>
          <h1 className="mt-4 max-w-[22ch] text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Engineering background, product discipline, payments focus.
          </h1>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
            {profile.summary} Background spans software engineering and applied research before
            moving into product, which shapes a technical, first-principles approach to product
            decisions.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-2xl font-medium tracking-tight">Core competencies</h2>
          <dl className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {competencies.map((c) => (
              <div key={c.label} className="border-t border-border pt-4">
                <dt className="label-mono text-muted-foreground">{c.label}</dt>
                <dd className="mt-3 text-sm leading-relaxed">{c.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-2xl font-medium tracking-tight">Education</h2>
            <ul className="divide-y divide-border border-y border-border">
              {education.map((e) => (
                <li key={e.detail} className="py-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-medium">{e.school}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="mb-8 text-2xl font-medium tracking-tight">Honours and awards</h2>
              <ul className="divide-y divide-border border-y border-border">
                {awards.map((a) => (
                  <li key={a} className="py-4 text-sm">
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-medium tracking-tight">Publications</h2>
              <p className="text-sm text-muted-foreground">
                Ontology Framework for Privacy Protection in Learning and Education — under review,
                Applied Ontology Journal.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-medium tracking-tight">Languages</h2>
              <p className="text-sm text-muted-foreground">
                English (full professional), Nepali (native), Hindi (professional working), Spanish
                (elementary).
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
