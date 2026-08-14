import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-accent animate-node" />
          <span className="font-mono text-sm font-medium tracking-tight uppercase">
            Swarup Dhungana
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/"
            hash="pillars"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Pillars
          </Link>
          <Link
            to="/"
            hash="ledger"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Ledger
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="rounded-sm bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
