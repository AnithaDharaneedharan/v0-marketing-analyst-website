"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Works", href: "#projects" },
  { name: "About me", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"]
      const scrollPosition = window.scrollY + 120

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

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      {/* Desktop pill nav - dark pill on dark bg like thibaut.cool */}
      <nav className="hidden sm:flex items-center bg-secondary border border-border rounded-2xl px-2 py-2 gap-1 shadow-2xl backdrop-blur-sm">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace("#", "")
          return (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`px-6 py-2 rounded-xl text-sm transition-all duration-200 font-sans ${
                isActive
                  ? "bg-foreground text-background font-semibold"
                  : "text-white hover:text-foreground font-normal"
              }`}
            >
              {link.name}
            </button>
          )
        })}
      </nav>

      {/* Mobile nav */}
      <div className="sm:hidden w-full">
        <div className="flex items-center justify-between bg-secondary border border-border rounded-2xl px-5 py-3 shadow-2xl">
          <span className="text-foreground text-sm font-semibold font-sans">archana</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-2 bg-secondary border border-border rounded-2xl px-2 py-2 shadow-2xl flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "")
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full text-left px-5 py-3 rounded-xl text-sm transition-all duration-200 font-sans ${
                    isActive
                      ? "bg-foreground text-background font-semibold"
                      : "text-white hover:text-foreground"
                  }`}
                >
                  {link.name}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </header>
  )
}
