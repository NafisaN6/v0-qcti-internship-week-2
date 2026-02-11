import React from "react"
import Link from "next/link"

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary-foreground"
              aria-hidden="true"
            >
              <path d="M9 12h.01" />
              <path d="M15 12h.01" />
              <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
              <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            PreParenting
          </span>
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">{children}</div>
      </main>

      <footer className="px-6 py-6 text-center">
        <p className="text-xs text-muted-foreground">
          2026 PreParenting. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
