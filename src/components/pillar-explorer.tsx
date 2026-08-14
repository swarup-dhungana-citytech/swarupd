import { useMemo, useState } from "react";
import { ledger, pillars, type PillarId } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Filter = PillarId | "all";

export function PillarExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const [tag, setTag] = useState<string | null>(null);
  const [open, setOpen] = useState<string | null>(null);

  const byPillar = useMemo(
    () => (filter === "all" ? ledger : ledger.filter((e) => e.pillars.includes(filter))),
    [filter],
  );

  const availableTags = useMemo(() => {
    const set = new Set<string>();
    byPillar.forEach((e) => e.tags.forEach((t) => set.add(t)));
    return [...set].sort();
  }, [byPillar]);

  const entries = useMemo(
    () => (tag ? byPillar.filter((e) => e.tags.includes(tag)) : byPillar),
    [byPillar, tag],
  );

  const selectPillar = (next: Filter) => {
    setFilter((prev) => (prev === next ? "all" : next));
    setTag(null);
    setOpen(null);
  };

  const selectTag = (next: string) => {
    setTag((prev) => (prev === next ? null : next));
    setOpen(null);
  };

  return (
    <>
      <section id="pillars" className="scroll-mt-16 bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex items-end justify-between border-b border-border pb-4">
            <h2 className="text-2xl font-medium tracking-tight">Core domain pillars</h2>
            <span className="label-mono text-muted-foreground">
              {filter === "all" ? "04 sectors, select to filter" : "1 selected"}
            </span>
          </div>

          <div className="hairline-grid grid grid-cols-1 overflow-hidden rounded-sm ring-1 ring-border md:grid-cols-2">
            {pillars.map((pillar) => {
              const active = filter === pillar.id;
              const count = ledger.filter((e) => e.pillars.includes(pillar.id)).length;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => selectPillar(pillar.id)}
                  className={cn(
                    "group flex flex-col p-8 text-left transition-colors",
                    active
                      ? "bg-surface-raised ring-1 ring-inset ring-accent"
                      : "bg-background hover:bg-surface-raised",
                  )}
                >
                  <span className="mb-6 flex items-center justify-between font-mono text-xs text-muted-foreground">
                    {pillar.index}
                    <span className={cn("transition-opacity", active ? "text-accent" : "opacity-0 group-hover:opacity-100")}>
                      {count} entries
                    </span>
                  </span>
                  <h3 className="mb-3 text-xl font-medium">{pillar.title}</h3>
                  <p className="mb-8 max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
                    {pillar.blurb}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-2">
                    {pillar.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-sm bg-muted px-2 py-1 font-mono text-[10px] font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="ledger" className="scroll-mt-16 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-medium tracking-tight">Outcome ledger</h2>
            <span className="label-mono text-muted-foreground">
              {entries.length} of {ledger.length} entries
            </span>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {availableTags.map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={tag === t}
                onClick={() => selectTag(t)}
                className={cn(
                  "rounded-sm border px-2 py-1 font-mono text-[10px] uppercase tracking-wide transition-colors",
                  tag === t
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
                )}
              >
                {t}
              </button>
            ))}
          </div>

          {(filter !== "all" || tag) && (
            <button
              type="button"
              onClick={() => {
                setFilter("all");
                setTag(null);
              }}
              className="mb-8 font-mono text-[10px] uppercase tracking-widest text-accent underline underline-offset-4"
            >
              Clear filters
            </button>
          )}

          <div className="divide-y divide-border border-y border-border">
            {entries.map((entry) => {
              const expanded = open === entry.id;
              return (
                <article key={entry.id} className="animate-settle">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? null : entry.id)}
                    className="grid w-full grid-cols-1 items-start gap-6 py-8 text-left transition-colors hover:bg-surface md:grid-cols-12"
                  >
                    <div className="md:col-span-3">
                      <span className="label-mono block text-muted-foreground">{entry.org}</span>
                      <span className="mt-1 block font-mono text-[10px] text-muted-foreground">
                        {entry.period}
                      </span>
                    </div>
                    <div className="md:col-span-6">
                      <h3 className="mb-2 text-xl font-medium">{entry.title}</h3>
                      <p className="max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
                        {entry.summary}
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-4 md:col-span-3 md:flex-col md:items-end md:justify-start">
                      <div className="flex flex-col md:items-end">
                        <span className="text-2xl font-medium text-accent">{entry.metric}</span>
                        <span className="label-mono text-muted-foreground">{entry.metricLabel}</span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:mt-4">
                        {expanded ? "Collapse" : "+ Expand"}
                      </span>
                    </div>
                  </button>

                  {expanded && (
                    <div className="animate-settle grid grid-cols-1 gap-8 border-t border-border bg-surface px-6 py-8 md:grid-cols-12">
                      <div className="md:col-span-3">
                        <span className="label-mono text-muted-foreground">Markets</span>
                        <ul className="mt-3 space-y-1">
                          {entry.markets.map((m) => (
                            <li key={m} className="font-mono text-xs">
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-6 md:col-span-9">
                        <div>
                          <span className="label-mono text-muted-foreground">Context</span>
                          <p className="mt-2 max-w-[68ch] text-sm leading-relaxed">
                            {entry.detail.context}
                          </p>
                        </div>
                        <div>
                          <span className="label-mono text-muted-foreground">Action</span>
                          <ul className="mt-2 max-w-[68ch] space-y-2">
                            {entry.detail.action.map((a) => (
                              <li key={a} className="flex gap-3 text-sm leading-relaxed">
                                <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="label-mono text-muted-foreground">Outcome</span>
                          <p className="mt-2 max-w-[68ch] text-sm leading-relaxed">
                            {entry.detail.outcome}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {entry.tags.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => selectTag(t)}
                              className="rounded-sm border border-border px-2 py-1 font-mono text-[10px] uppercase transition-colors hover:border-foreground"
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {entries.length === 0 && (
            <p className="py-16 text-center text-sm text-muted-foreground">
              No entries match that combination.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
