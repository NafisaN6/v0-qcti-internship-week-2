"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle } from "lucide-react"

const styles = [
  {
    name: "Authoritative",
    tagline: "Recommended",
    description:
      "Balanced warmth with clear expectations. This evidence-backed style combines responsiveness with firm, fair boundaries.",
    pros: [
      "Builds self-esteem and independence",
      "Children develop strong social skills",
      "Encourages open communication",
    ],
    cons: [
      "Requires more time and energy",
      "Can be difficult to stay consistent",
    ],
    color: "bg-primary/10 text-primary border-primary/20",
    recommended: true,
  },
  {
    name: "Authoritarian",
    tagline: "Strict",
    description:
      "High expectations with less warmth. Rules are non-negotiable and obedience is the primary value in this approach.",
    pros: [
      "Clear structure and expectations",
      "Children understand rules quickly",
      "Consistent discipline",
    ],
    cons: [
      "May lower self-esteem",
      "Can harm parent-child relationship",
      "Children may become rebellious",
    ],
    color: "bg-accent/10 text-accent border-accent/20",
    recommended: false,
  },
  {
    name: "Permissive",
    tagline: "Lenient",
    description:
      "High warmth with few boundaries. Permissive parents are nurturing and communicative but avoid confrontation and rules.",
    pros: [
      "Strong emotional bond",
      "Children feel loved and accepted",
      "Open communication",
    ],
    cons: [
      "Children may lack self-discipline",
      "Difficulty with authority figures",
      "May struggle with boundaries",
    ],
    color: "bg-secondary text-secondary-foreground border-border",
    recommended: false,
  },
  {
    name: "Uninvolved",
    tagline: "Hands-Off",
    description:
      "Low warmth and low expectations. Parents provide basic needs but are generally disengaged from the child's daily life.",
    pros: [
      "Children may become self-reliant early",
      "Independence is developed quickly",
    ],
    cons: [
      "Children may feel neglected",
      "Higher risk of behavioral issues",
      "Weakened parent-child bond",
      "Poor academic performance",
    ],
    color: "bg-muted text-muted-foreground border-border",
    recommended: false,
  },
]

export function StylesSection() {
  const [activeStyle, setActiveStyle] = useState(0)

  return (
    <section id="styles" className="bg-card px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Understand Your Approach
          </span>
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            4 Parenting Styles Explained
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            Each style affects your child differently. Learn about all four
            approaches so you can make intentional choices for your family.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {styles.map((style, index) => (
            <button
              key={style.name}
              type="button"
              onClick={() => setActiveStyle(index)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeStyle === index
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {style.name}
              {style.recommended && (
                <span className="ml-2 inline-block text-xs opacity-75">
                  *
                </span>
              )}
            </button>
          ))}
        </div>

        <Card className="mx-auto max-w-3xl border-border">
          <CardHeader>
            <div className="flex items-center gap-3">
              <CardTitle className="text-2xl font-serif">
                {styles[activeStyle].name}
              </CardTitle>
              <Badge className={styles[activeStyle].color} variant="outline">
                {styles[activeStyle].tagline}
              </Badge>
            </div>
            <CardDescription className="mt-2 text-base leading-relaxed">
              {styles[activeStyle].description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Strengths
                </h4>
                <ul className="flex flex-col gap-2">
                  {styles[activeStyle].pros.map((pro) => (
                    <li
                      key={pro}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <XCircle className="h-4 w-4 text-destructive" />
                  Challenges
                </h4>
                <ul className="flex flex-col gap-2">
                  {styles[activeStyle].cons.map((con) => (
                    <li
                      key={con}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
