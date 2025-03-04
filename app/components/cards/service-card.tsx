"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  service: {
    title: string
    description: string
    icon: string
  }
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 ease-in-out h-full hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1">
        <CardHeader>
          <div className="text-4xl mb-4 text-cyan-400 transition-transform duration-500 ease-in-out group-hover:scale-110">
            {service.icon}
          </div>
          <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70">{service.description}</p>
        </CardContent>
        <CardFooter>
          <Button
            variant="link"
            className="text-cyan-400 p-0 group-hover:translate-x-2 transition-transform duration-300 ease-in-out"
          >
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

