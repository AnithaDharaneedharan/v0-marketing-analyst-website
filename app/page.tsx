import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      {/* Main content area with padding for sticky sidebars */}
      <div className="lg:ml-64 lg:mr-64">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
