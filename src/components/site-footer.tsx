import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="bg-ink py-24 text-ink-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-24">
        <div>
          <h2 className="mb-8 text-xl font-medium">Operational profile</h2>
          <p className="max-w-[46ch] text-sm leading-relaxed text-ink-muted">
            {profile.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["PCI DSS", "L3 EMV", "ISO 9001", "Stablecoin Settlement", "Open Banking APIs"].map(
              (tag) => (
                <span
                  key={tag}
                  className="border border-ink-border px-2 py-1 font-mono text-[10px] text-ink-muted"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between border-b border-ink-border pb-2">
              <span className="label-mono text-ink-muted">Email</span>
              <a
                href={`mailto:${profile.email}`}
                className="font-mono text-xs transition-colors hover:text-accent"
              >
                {profile.email}
              </a>
            </div>
            <div className="flex justify-between border-b border-ink-border pb-2">
              <span className="label-mono text-ink-muted">LinkedIn</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs transition-colors hover:text-accent"
              >
                {profile.linkedinLabel}
              </a>
            </div>
            <div className="flex justify-between border-b border-ink-border pb-2">
              <span className="label-mono text-ink-muted">Based in</span>
              <span className="font-mono text-xs">{profile.location}</span>
            </div>
          </div>
          <p className="mt-12 font-mono text-[10px] uppercase text-ink-muted">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
