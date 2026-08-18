import { createFileRoute, Link } from "@tanstack/react-router";
import { PillarExplorer } from "@/components/pillar-explorer";
import { MarketRail } from "@/components/market-rail";
import { ExecutiveBrief } from "@/components/executive-brief";
import { HowIWork } from "@/components/how-i-work";
import { DecisionLog } from "@/components/decision-log";
import { profile } from "@/data/portfolio";

const title = "Swarup Raj Dhungana, Payments & Fintech Product Manager";
const description =
  "Portfolio of Swarup Raj Dhungana: merchant acquiring, crypto and stablecoins, cross-border payroll, and AI/ML product delivery across South Asia, East Africa, LATAM and the EU.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="animate-settle flex flex-col gap-4">
            <span className="label-mono text-accent">New York, USA / Global deployment</span>
            <h1 className="max-w-[24ch] text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              {profile.role}
            </h1>
            <p className="max-w-[56ch] text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
              Specialising in the clean movement of value: payment orchestration, stablecoin
              settlement, and multi-currency payroll infrastructure across frontier and emerging
              markets.
            </p>
            <div className="mt-4 flex items-center gap-6">
              <Link
                to="/"
                hash="pillars"
                className="rounded-sm bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Explore the four pillars
              </Link>
              <span className="font-mono text-xs text-muted-foreground">
                Select a pillar to filter the ledger
              </span>
            </div>
          </div>
        </div>
      </section>

      <ExecutiveBrief />
      <HowIWork />
      <PillarExplorer />
      <MarketRail />
      <DecisionLog />
    </main>
  );
}
