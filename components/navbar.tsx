"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Linkedin, Twitter, Mail } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Works", href: "#projects" },
  { name: "About me", href: "#about" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter / X" },
  { icon: Linkedin, href: "https://linkedin.com/in/arch2025", label: "LinkedIn" },
  { icon: Mail, href: "mailto:archana.dharaneedharan@gmail.com", label: "Email" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"]
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
    <>
      {/* Desktop Sticky Sidebar - Left */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col justify-between p-8 z-50">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold text-foreground flex items-center gap-2">
          <div className="w-2 h-2 bg-foreground rounded-full" />
          archana
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`py-2 text-sm transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Popup Trigger */}
        <div className="relative">
          <button
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors text-left"
          >
            Prefer Email and Twitter DMs<br />
            <span className="underline">if you need a quick response!</span>
          </button>

          {/* Contact Popup */}
          {isContactOpen && (
            <div className="absolute bottom-full left-0 mb-4 bg-card border border-border rounded-2xl p-6 shadow-xl min-w-[240px]">
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Desktop Sticky Sidebar - Right */}
      <nav className="hidden lg:flex fixed right-0 top-0 h-screen w-64 flex-col justify-between p-8 z-50">
        <div />
        
        {/* Right Navigation - same links */}
        <div className="flex flex-col gap-1 items-end">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`py-2 text-sm transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div />
      </nav>

      {/* Mobile Header */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-6 h-16">
          <Link href="/" className="text-lg font-semibold text-foreground flex items-center gap-2">
            <div className="w-2 h-2 bg-foreground rounded-full" />
            archana
          </Link>

          <button
            className="p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-background border-b border-border px-6 py-6">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-lg text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-border flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
