import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Hackathons } from "@/components/hackathons"
import { Leadership } from "@/components/leadership"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Hackathons />
        <Leadership />
        <Education />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </footer>
    </div>
  )
}
