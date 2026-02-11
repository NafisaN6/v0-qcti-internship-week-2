import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  MessageCircle,
  Shield,
  Clock,
  Smile,
  BookOpen,
  Lightbulb,
} from "lucide-react"

const tips = [
  {
    icon: MessageCircle,
    title: "Active Listening",
    description:
      "Give your child your full attention when they speak. Kneel to their level, make eye contact, and repeat back what they've said to show you understand.",
  },
  {
    icon: Shield,
    title: "Consistent Boundaries",
    description:
      "Children thrive with clear, predictable rules. Set age-appropriate boundaries and follow through consistently to build a sense of security.",
  },
  {
    icon: Clock,
    title: "Quality Time Daily",
    description:
      "Dedicate at least 15 uninterrupted minutes daily to connect with your child. No screens, just presence. These small moments build lasting bonds.",
  },
  {
    icon: Smile,
    title: "Positive Reinforcement",
    description:
      "Catch your child being good and praise specific behaviors. Instead of 'good job,' try 'I love how you shared your toys with your sister.'",
  },
  {
    icon: BookOpen,
    title: "Read Together",
    description:
      "Reading aloud to children of any age builds vocabulary, empathy, and imagination. Make it a daily ritual, even just 10 minutes before bedtime.",
  },
  {
    icon: Lightbulb,
    title: "Model Emotional Regulation",
    description:
      "Children learn to manage emotions by watching you. Narrate your own feelings: 'I'm feeling frustrated, so I'm going to take a deep breath.'",
  },
]

export function TipsSection() {
  return (
    <section id="tips" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Expert Advice
          </span>
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            Key Parenting Tips
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            Simple, research-backed strategies to strengthen your relationship
            with your child and support their development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip) => (
            <Card
              key={tip.title}
              className="group border-border transition-all duration-200 hover:border-primary/30 hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <tip.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {tip.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
