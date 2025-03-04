"use client"

import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Ready to transform your brand? Get in touch with our team to discuss your project and discover how we can
              bring your vision to life.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-white/50">Email us at</p>
                <p className="text-lg">hello@blizzstudios.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-500/10">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription className="text-white/50">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-white/70">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-white/5 border-white/10 focus:border-cyan-400 transition-all duration-300 ease-in-out"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-white/70">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="bg-white/5 border-white/10 focus:border-cyan-400 transition-all duration-300 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-white/70">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      className="bg-white/5 border-white/10 focus:border-cyan-400 transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-white/70">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      className="bg-white/5 border-white/10 focus:border-cyan-400 min-h-[120px] transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 w-full transition-all duration-300 ease-in-out hover:scale-[1.02]">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

