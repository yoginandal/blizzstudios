"use client"
import { ServiceCard } from "@/app/components/cards/service-card"

const services = [
  {
    title: "Brand Identity",
    description:
      "We craft distinctive visual identities that capture your brand's essence and resonate with your audience.",
    icon: "✦",
  },
  {
    title: "Web Design & Development",
    description:
      "Creating immersive, responsive websites that combine stunning aesthetics with seamless functionality.",
    icon: "◎",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that enhances engagement and creates intuitive, delightful digital experiences.",
    icon: "◈",
  },
  {
    title: "Motion Graphics",
    description: "Dynamic visual storytelling that brings your brand to life through animation and video.",
    icon: "⟡",
  },
  {
    title: "Digital Marketing",
    description: "Strategic campaigns that amplify your brand's voice and connect with your target audience.",
    icon: "⬡",
  },
  {
    title: "3D Visualization",
    description: "Immersive three-dimensional experiences that push the boundaries of digital design.",
    icon: "◉",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Our Expertise
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We blend creativity with strategy to deliver exceptional digital experiences that elevate brands and drive
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

