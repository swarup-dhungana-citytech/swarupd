import { scaleSignals, principles } from "@/data/portfolio";

export function ExecutiveBrief() {
  return (
    <section className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between border-b border-border pb-4">
          <h2 className="text-2xl font-medium tracking-tight">Scope at a glance</h2>
          <span className="label-mono text-muted-foreground">Verified from delivery record</span>
        </div>

        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3">
          {scaleSignals.map((s) => (
            <div key={s.label} className="border-t border-border pt-4">
              <dt className="text-3xl font-medium tracking-tight tabular-nums">{s.value}</dt>
              <dd className="mt-2 max-w-[26ch] text-sm leading-relaxed text-muted-foreground">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-20">
          <h3 className="mb-8 text-2xl font-medium tracking-tight">Operating principles</h3>
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {principles.map((p, i) => (
              <div key={p.title} className="border-t border-border pt-4">
                <span className="font-mono text-[10px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-2 max-w-[38ch] font-medium">{p.title}</h4>
                <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
