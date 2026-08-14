import { useState } from "react";
import { markets } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function MarketRail() {
  const [active, setActive] = useState<string>(markets[0]?.name ?? "");
  const current = markets.find((m) => m.name === active);


  return (
    <section className="border-t border-border bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between border-b border-border pb-4">
          <h2 className="text-2xl font-medium tracking-tight">Deployment rail</h2>
          <span className="label-mono text-muted-foreground">Hover or tap a market</span>
        </div>

        <div className="flex flex-wrap gap-x-1 gap-y-3">
          {markets.map((m) => (
            <button
              key={m.name}
              type="button"
              onMouseEnter={() => setActive(m.name)}
              onFocus={() => setActive(m.name)}
              onClick={() => setActive(m.name)}
              className={cn(
                "flex items-center gap-2 rounded-sm px-3 py-2 text-sm transition-colors",
                active === m.name
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span
                className={cn(
                  "size-1.5 rounded-full",
                  active === m.name ? "bg-accent" : "bg-border",
                )}
              />
              {m.name}
            </button>
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <span className="label-mono text-muted-foreground">{current.name}</span>
          <p className="mt-2 max-w-[52ch] text-xl font-medium tracking-tight">{current.note}</p>
        </div>
      </div>
    </section>
  );
}
