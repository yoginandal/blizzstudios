"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PortfolioItemProps {
  item: {
    title: string
    category: string
    image: string
  }
  index: number
}

export function PortfolioItem({ item, index }: PortfolioItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl"
      whileHover={{ scale: 1.02 }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          width={800}
          height={600}
          className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end p-6">
        <p className="text-cyan-400 text-sm mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          {item.category}
        </p>
        <h3 className="text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out delay-75">
          {item.title}
        </h3>
        <Button
          variant="link"
          className="text-white p-0 w-fit transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-150"
        >
          View Project <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}

