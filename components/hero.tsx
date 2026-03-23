"use client"

import { ArrowDown, Linkedin, Mail, Twitter, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "archana.dharaneedharan@gmail.com",
    href: "mailto:archana.dharaneedharan@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/archana",
    href: "https://linkedin.com/in/archana"
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@archanaanalyst",
    href: "https://twitter.com/archanaanalyst"
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download PDF",
    href: "/resume.pdf"
  }
]

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel - Sticky on desktop */}
      <div className="lg:w-2/5 lg:fixed lg:h-screen lg:left-0 lg:top-0 flex flex-col justify-between p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-border overflow-y-auto">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 text-balance">
            Archana Dharaneedharan
          </h1>
          <p className="text-xl lg:text-2xl text-primary font-medium mb-6">
            Marketing Analyst
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-md">
            Transforming complex data into actionable marketing strategies.
            Specializing in consumer insights, campaign optimization, and predictive analytics.
          </p>

          {/* Contact Section */}
          <div className="mt-8 lg:mt-12">
            <h2 className="text-sm uppercase tracking-wider text-primary mb-4">Get in Touch</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {contactLinks.map((link, index) => (
                <a key={index} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  <Card className="group hover:border-primary transition-colors cursor-pointer h-full">
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors flex-shrink-0">
                        <link.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground mb-1">{link.label}</p>
                        <p className="text-sm text-foreground font-medium group-hover:text-primary transition-colors truncate">
                          {link.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex flex-col gap-4 my-8">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
            About
          </a>
          <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
            Experience
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
            Projects
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:archana.dharaneedharan@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Right Panel - Scrollable content */}
      <div className="lg:w-3/5 lg:ml-[40%]">
        {/* About Section */}
        <section id="about" className="min-h-screen flex flex-col justify-center p-8 lg:p-12 xl:p-16">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-wider text-primary mb-8">About</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                With over 7 years of experience in marketing analytics, I help brands understand their customers
                and optimize their marketing spend through data-driven insights. My approach combines statistical
                rigor with creative problem-solving.
              </p>
              <p>
                I've worked with Fortune 500 companies and fast-growing startups across retail, tech, and
                consumer goods industries. My expertise includes multi-touch attribution, customer segmentation,
                marketing mix modeling, and A/B testing frameworks.
              </p>
              <p>
                When I'm not diving into datasets, you can find me speaking at marketing conferences,
                mentoring aspiring analysts, or exploring the latest in machine learning applications for marketing.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-serif font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-foreground">$12M+</p>
                <p className="text-sm text-muted-foreground mt-1">Marketing ROI Generated</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground mt-1">Enterprise Clients</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-foreground">7+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
            </div>

            <button 
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-16 animate-bounce cursor-pointer hover:text-primary transition-colors"
              aria-label="Scroll to experience section"
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </button>
          </div>
        </section>
      </div>
    </section>
  )
}
