import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TipsSection } from "@/components/tips-section"
import { StylesSection } from "@/components/styles-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main
        role="main"
        aria-label="Homepage content"
        className="min-h-screen bg-background">
        <HeroSection />
        <TipsSection />
        <StylesSection />
        <AboutSection />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
