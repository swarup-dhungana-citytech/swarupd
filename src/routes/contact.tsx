import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

const title = "Contact Swarup Raj Dhungana | Payments Product Manager";
const description =
  "Get in touch with Swarup Raj Dhungana about payments, stablecoin settlement, cross-border payroll and product roles.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="label-mono text-accent">Open channel</span>
        <h1 className="mt-4 max-w-[20ch] text-4xl font-medium leading-tight tracking-tight md:text-5xl">
          Let's talk payment rails.
        </h1>
        <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-muted-foreground">
          Available to discuss payment orchestration, merchant acquiring, stablecoin settlement, and
          cross-border payroll infrastructure.
        </p>

        <div className="mt-16 divide-y divide-border border-y border-border">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center justify-between gap-6 py-8 transition-colors hover:bg-surface"
          >
            <span className="label-mono text-muted-foreground">Email</span>
            <span className="text-xl font-medium tracking-tight">{profile.email}</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-6 py-8 transition-colors hover:bg-surface"
          >
            <span className="label-mono text-muted-foreground">LinkedIn</span>
            <span className="text-xl font-medium tracking-tight">{profile.linkedinLabel}</span>
          </a>
          <div className="flex items-center justify-between gap-6 py-8">
            <span className="label-mono text-muted-foreground">Location</span>
            <span className="text-xl font-medium tracking-tight">{profile.location}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
