import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-2">
          <div>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Our Mission
            </span>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Every parent deserves support
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              PreParenting was founded by a team of child psychologists,
              educators, and parents who believe that informed parenting leads to
              happier families. We distill complex research into practical,
              actionable guidance.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whether you are preparing for your first child or navigating the
              teen years, our resources adapt to your family's unique needs and
              values.
            </p>
            <Button asChild className="mt-8">
              <Link href="/signup">
                Join the Community
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <span className="text-3xl font-bold text-primary">12+</span>
              <p className="mt-1 text-sm text-muted-foreground">
                Years of child development research
              </p>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <span className="text-3xl font-bold text-primary">30+</span>
              <p className="mt-1 text-sm text-muted-foreground">
                Expert contributors and pediatricians
              </p>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <span className="text-3xl font-bold text-accent">98%</span>
              <p className="mt-1 text-sm text-muted-foreground">
                Of parents say they feel more confident
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
