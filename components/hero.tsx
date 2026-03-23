"use client"

import { Linkedin, Twitter, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/arch2025", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:archana.dharaneedharan@gmail.com", label: "Email" },
]

export function Hero() {
  return (
    <section className="min-h-screen pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-20 py-12 lg:py-20">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            {/* Social Links - Vertical on desktop */}
            <div className="flex lg:flex-col gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground leading-tight tracking-tight">
              <span className="block text-3xl sm:text-4xl lg:text-5xl mb-2 text-primary font-serif">Archana Dharaneedharan</span>
              Marketing analytics{" "}
              <br className="hidden sm:block" />
              done <span className="font-serif italic">right</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-2 text-sm text-muted-foreground font-medium">Data-Driven Marketing Strategist</p>

            {/* Description */}
            <p className="mt-6 text-muted-foreground text-lg max-w-md leading-relaxed">
              I help brands grow with data-driven strategies, turning complex insights into clear actions that drive real results.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Button 
                size="lg" 
                className="rounded-full px-8 gap-2 group"
                asChild
              >
                <a href="#contact">
                  Book a call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden bg-muted">
              <Image
                src="/profile.jpg"
                alt="Archana Dharaneedharan"
                fill
                className="object-cover"
                priority
              />
              {/* Decorative element */}
              <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-background flex items-center justify-center">
                <span className="text-2xl">✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
