import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <Link href="/" className="text-lg font-bold text-foreground">
            PreParenting
          </Link>
          <p className="mt-1 text-sm text-muted-foreground">
            Empowering families with evidence-based parenting guidance.
          </p>
        </div>

        <div className="flex gap-6">
          <Link
            href="/#tips"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Tips
          </Link>
          <Link
            href="/#styles"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Styles
          </Link>
          <Link
            href="/#about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/signin"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign In
          </Link>
        </div>

        <p className="text-xs text-muted-foreground">
          2026 PreParenting. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
