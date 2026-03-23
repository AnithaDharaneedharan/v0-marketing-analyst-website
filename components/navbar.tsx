"use client"

import { useEffect, useState } from "react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Works", href: "#projects" },
  { name: "About me", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
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
      {/* Pill nav - always visible */}
      <nav className="flex items-center bg-secondary border border-border rounded-2xl px-2 py-2 gap-1 shadow-2xl backdrop-blur-sm flex-wrap justify-center max-w-fit">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace("#", "")
          return (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm transition-all duration-200 font-sans ${
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
    </header>
  )
}
