"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface TestimonialCardProps {
  testimonial: {
    name: string
    company: string
    quote: string
    image: string
  }
  index: number
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-500/10">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <CardTitle className="text-lg">{testimonial.name}</CardTitle>
              <CardDescription className="text-white/50">{testimonial.company}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-white/70 italic">"{testimonial.quote}"</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

