"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { useScroll, useTransform } from "framer-motion"
import { CustomCursor } from "@/app/components/ui/custom-cursor"
import { AnimatedBackground } from "@/app/components/ui/animated-background"
import { Navbar } from "@/app/components/navigation/navbar"
import { Footer } from "@/app/components/navigation/footer"
import { HeroSection } from "@/app/components/sections/hero-section"
import { ServicesSection } from "@/app/components/sections/services-section"
import { PortfolioSection } from "@/app/components/sections/portfolio-section"
import { TestimonialsSection } from "@/app/components/sections/testimonials-section"
import { ContactSection } from "@/app/components/sections/contact-section"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorHidden, setCursorHidden] = useState(true)
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
      setCursorHidden(false)
    }

    const handleMouseLeave = () => {
      setCursorHidden(true)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

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

  const portfolioItems = [
    {
      title: "Neon Dreams",
      category: "Brand Identity",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Quantum Leap",
      category: "Web Design",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Ethereal",
      category: "UI/UX Design",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Pulse",
      category: "Motion Graphics",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const testimonials = [
    {
      name: "Alex Johnson",
      company: "TechVision Inc.",
      quote:
        "BlizzStudios transformed our brand identity with their innovative approach. Their team's creativity and attention to detail exceeded our expectations.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sarah Williams",
      company: "Elevate Marketing",
      quote:
        "Working with BlizzStudios was a game-changer for our digital presence. Their designs are not just beautiful but strategically crafted to drive results.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Michael Chen",
      company: "Fusion Dynamics",
      quote:
        "The team at BlizzStudios has an incredible ability to understand our vision and translate it into stunning visual experiences that resonate with our audience.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}

