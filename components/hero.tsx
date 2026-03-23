"use client"

import { useState, useEffect } from "react"
import { Linkedin, Mail, Github, Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/archana", label: "LinkedIn" },
  { icon: Mail, href: "mailto:archana.dharaneedharan@gmail.com", label: "Email" },
]

export function Hero() {
  const [activeSection, setActiveSection] = useState("about")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="lg:flex">
      {/* Fixed Sidebar - Desktop */}
      <aside className="hidden lg:flex lg:flex-col lg:justify-between lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[420px] lg:px-16 lg:py-20">
        <div>
          <h1 className="text-5xl font-bold text-foreground tracking-tight mb-3">
            Archana Dharaneedharan
          </h1>
          <p className="text-xl font-medium text-primary mb-6">
            Marketing Analyst
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-xs">
            I build accessible, data-driven marketing strategies that blend analytics with creative storytelling.
          </p>

          {/* Navigation */}
          <nav className="mt-16 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group flex items-center gap-4 py-3 transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  className={`h-px transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "w-16 bg-foreground"
                      : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                  }`}
                />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-lg font-bold text-foreground">Archana Dharaneedharan</h1>
            <p className="text-sm text-primary">Marketing Analyst</p>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="px-6 pb-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="lg:ml-[420px] pt-24 lg:pt-0">
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center px-6 lg:px-20 py-20">
          <div className="max-w-xl">
            <p className="text-muted-foreground leading-relaxed mb-6">
              I&apos;m a passionate marketing analyst focused on crafting{" "}
              <span className="text-foreground font-medium">accessible, data-driven</span>{" "}
              marketing strategies. My work lies at the intersection of analytics and creative storytelling,
              creating campaigns that not only perform but{" "}
              <span className="text-foreground font-medium">resonate with audiences</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Currently, I&apos;m a Senior Marketing Analyst at{" "}
              <a href="#" className="text-primary hover:underline font-medium">TechCorp</a>,
              specializing in attribution modeling. I build and maintain analytical frameworks
              that power marketing decisions across the organization, ensuring our strategies
              meet both performance and ROI standards.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In the past, I&apos;ve had the opportunity to analyze marketing data across a variety of
              settings — from{" "}
              <span className="text-foreground font-medium">Fortune 500 companies</span>{" "}
              and{" "}
              <span className="text-foreground font-medium">fast-growing startups</span>{" "}
              to{" "}
              <span className="text-foreground font-medium">e-commerce brands</span>.
              I also mentor aspiring analysts and speak at industry conferences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not diving into datasets, you&apos;ll find me exploring new visualization
              techniques, reading about behavioral economics, or hiking with my camera.
            </p>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Get in Touch
              </h3>
              <div className="space-y-3">
                <a 
                  href="mailto:archana.dharaneedharan@gmail.com" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>archana.dharaneedharan@gmail.com</span>
                </a>
                <a 
                  href="https://linkedin.com/in/archana" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>linkedin.com/in/archana</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
