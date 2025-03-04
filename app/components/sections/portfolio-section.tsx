"use client"
import { Button } from "@/components/ui/button"
import { PortfolioItem } from "@/app/components/cards/portfolio-item"

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

export function PortfolioSection() {
  return (
    <section id="work" className="relative py-20 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Featured Work
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Explore our portfolio of award-winning projects that showcase our creative approach and technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} item={item} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 ease-in-out hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

