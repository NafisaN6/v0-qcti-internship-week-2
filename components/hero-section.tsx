import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, BookOpen, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
            <Heart className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by 50,000+ parents worldwide
            </span>
          </div>

          <h1 className="max-w-3xl text-balance font-serif text-4xl font-normal leading-tight text-foreground md:text-6xl md:leading-tight">
            Raise confident kids with the right parenting approach
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Discover evidence-based parenting styles and practical tips
            tailored to your family. Because great parenting starts with
            the right guidance.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="text-base">
              <Link href="/signup">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
              <Link href="/#styles">Explore Styles</Link>
            </Button>
          </div>

          <div className="mt-16 grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 rounded-xl bg-card p-6 shadow-sm">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold text-foreground">200+</span>
              <span className="text-sm text-muted-foreground">Expert Tips</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-xl bg-card p-6 shadow-sm">
              <Users className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold text-foreground">4</span>
              <span className="text-sm text-muted-foreground">Parenting Styles</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-xl bg-card p-6 shadow-sm">
              <Heart className="h-6 w-6 text-accent" />
              <span className="text-2xl font-bold text-foreground">50K+</span>
              <span className="text-sm text-muted-foreground">Happy Families</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
