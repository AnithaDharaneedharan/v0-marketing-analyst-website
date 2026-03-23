"use client"

import { BarChart3, TrendingUp, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Deep-dive into your marketing data to uncover insights that drive smarter decisions and better ROI.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Develop data-backed strategies that scale your marketing efforts and accelerate business growth.",
  },
  {
    icon: Target,
    title: "Campaign Optimization",
    description: "Optimize your campaigns with A/B testing, attribution modeling, and performance analytics.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground">
            How I can help{" "}
            <br className="hidden sm:block" />
            you <span className="font-serif italic">grow</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-foreground/20 rounded-2xl"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <service.icon className="h-7 w-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
