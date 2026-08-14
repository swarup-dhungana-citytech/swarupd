import { useState } from "react";
import { decisions, workingStyle } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function DecisionLog() {
  const [open, setOpen] = useState<string | null>(decisions[0]?.id ?? null);

  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between border-b border-border pb-4">
          <h2 className="text-2xl font-medium tracking-tight">Decision log</h2>
          <span className="label-mono text-muted-foreground">Calls made, trade-offs accepted</span>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {decisions.map((d) => {
            const expanded = open === d.id;
            return (
              <article key={d.id}>
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? null : d.id)}
                  className="flex w-full items-baseline justify-between gap-6 py-6 text-left transition-colors hover:text-accent"
                >
                  <span className="max-w-[46ch] text-lg font-medium tracking-tight">
                    {d.question}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-muted-foreground">
                    {expanded ? "Close" : "Open"}
                  </span>
                </button>
                <div className={cn("grid gap-8 pb-8 md:grid-cols-3", expanded ? "grid" : "hidden")}>
                  <div>
                    <span className="label-mono text-accent">The call</span>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.call}</p>
                  </div>
                  <div>
                    <span className="label-mono text-accent">Trade-off accepted</span>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {d.tradeoff}
                    </p>
                  </div>
                  <div>
                    <span className="label-mono text-accent">What I carry forward</span>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {d.learned}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
          {workingStyle.map((w) => (
            <div key={w.label} className="border-t border-border pt-4">
              <span className="label-mono text-muted-foreground">{w.label}</span>
              <p className="mt-3 text-sm leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
