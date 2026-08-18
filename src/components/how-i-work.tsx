import { howIWork } from "@/data/portfolio";
import { DocudaiDemo } from "@/components/docudai-demo";

export function HowIWork() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between border-b border-border pb-4">
          <h2 className="text-2xl font-medium tracking-tight">How I work</h2>
          <span className="label-mono text-muted-foreground">First principles, applied with AI</span>
        </div>

        <p className="max-w-[70ch] text-sm leading-relaxed text-muted-foreground md:text-base">
          {howIWork.intro}
        </p>

        <div className="mt-10 flex max-w-[62ch] flex-col gap-4">
          {howIWork.practices.map((p) => (
            <div
              key={p.label}
              className="border-l-2 border-border pl-4 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="font-medium text-foreground">{p.label}.</span> {p.body}
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-[62ch] border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-accent">Docudai.</span> {howIWork.docudaiIntro}
        </div>

        <div className="mt-6 max-w-2xl">
          <DocudaiDemo />
        </div>
      </div>
    </section>
  );
}
