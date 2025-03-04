"use client"

import { useState, useEffect, useCallback } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const handleScroll = useCallback(() => {
    const sections = ["home", "services", "work", "about", "contact"]
    const scrollPosition = window.scrollY

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        const offsetTop = element.offsetTop
        const height = element.offsetHeight

        if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + height - 100) {
          setActiveSection(section)
        }
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600" />
        <span className="text-xl font-bold tracking-tight">BlizzStudios</span>
      </div>

      <button className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav
        className={`fixed md:relative top-0 right-0 h-screen md:h-auto w-64 md:w-auto bg-black/90 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none transform ${menuOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out z-40 flex flex-col md:flex-row items-start md:items-center justify-center md:justify-end p-10 md:p-0 gap-8 md:gap-6`}
      >
        {["Home", "Services", "Work", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`relative text-lg font-medium hover:text-cyan-400 transition-colors ${activeSection === item.toLowerCase() ? "text-cyan-400" : "text-white/80"}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
            {activeSection === item.toLowerCase() && (
              <motion.span layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400" />
            )}
          </a>
        ))}
        <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
          Get in Touch
        </Button>
      </nav>
    </header>
  )
}

