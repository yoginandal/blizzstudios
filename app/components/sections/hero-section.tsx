"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 z-10"
    >
      <motion.div style={{ opacity, scale }} className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl transition-all duration-700 ease-in-out" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-500">
          CRAFTING DIGITAL
          <br />
          <span className="text-6xl md:text-8xl lg:text-9xl">WONDERS</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
          Where imagination meets innovation. We transform brands through cutting-edge design and immersive digital
          experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 text-lg py-6 px-8 transition-all duration-300 ease-in-out hover:scale-105">
            Explore Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 text-lg py-6 px-8 transition-all duration-300 ease-in-out hover:scale-105"
          >
            Our Process
          </Button>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/50" />
      </div>
    </section>
  )
}

