"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const serviceOptions = [
  "Data Analytics",
  "Growth Strategy",
  "Campaign Optimization",
  "All Services"
]

const budgetOptions = [
  "Under $5K",
  "$5K-$10K",
  "$10K-$25K",
  "$25K+"
]

export function Contact() {
  const [selectedService, setSelectedService] = useState("")
  const [selectedBudget, setSelectedBudget] = useState("")

  return (
    <section id="contact" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Text */}
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Book a call
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6">
              Let&apos;s get{" "}
              <br className="hidden sm:block" />
              <span className="font-serif italic">started</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-8">
              Ready to transform your marketing data? Get in touch and we&apos;ll show you what&apos;s possible for your brand.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-muted border-2 border-card"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-accent">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Trusted by 15+ clients
                </p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-background rounded-3xl p-8 lg:p-10 border border-border">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="rounded-xl h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@company.com" 
                    className="rounded-xl h-12"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <Label>What services are you interested in?</Label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                        selectedService === service
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Selection */}
              <div className="space-y-2">
                <Label>Project budget?</Label>
                <div className="flex flex-wrap gap-2">
                  {budgetOptions.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                        selectedBudget === budget
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your business... *</Label>
                <Textarea 
                  id="message" 
                  placeholder="Share your goals and challenges..."
                  className="rounded-xl min-h-[120px] resize-none"
                />
              </div>

              {/* Submit */}
              <Button 
                type="submit" 
                size="lg" 
                className="w-full rounded-full h-12 gap-2 group"
              >
                Book a call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to our{" "}
                <a href="#" className="underline hover:text-foreground">terms & conditions</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
