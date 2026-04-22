"use client";

import {
  BarChart3,
  TrendingUp,
  Target,
  Search,
  Bot,
  Globe,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: TrendingUp,
    title: "Demand Generation & Campaign Strategy",
    description:
      "Full-funnel B2B demand generation across paid media, events, and webinars. I design campaigns that move prospects from awareness to pipeline — not just impressions.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Performance Tracking",
    description:
      "Custom analytics infrastructure using Plausible, GA4, and Looker Studio. I build dashboards that give you real visibility into funnel velocity, campaign ROI, and where users drop off.",
  },
  {
    icon: Target,
    title: "Conversion Rate Optimisation",
    description:
      "Audience segmentation, landing page A/B testing, and messaging alignment with sales. I find the bottlenecks and fix them — like increasing MQL-to-SQL conversion by 18%.",
  },
  {
    icon: Search,
    title: "SEO & Technical Audits",
    description:
      "Comprehensive technical SEO audits covering Core Web Vitals, crawlability, site architecture, and on-page optimisation — with a prioritised remediation roadmap for measurable gains.",
  },
  {
    icon: Bot,
    title: "AI-Powered Content & Automation",
    description:
      "Using Claude AI to build content pipelines that maintain brand voice at scale. Workflow automation via n8n and Zapier to cut production time — like reducing content effort by 70%.",
  },
  {
    icon: Globe,
    title: "EMEA & DACH Market Localisation",
    description:
      "End-to-end localisation for digital, OOH, and print across 15+ language markets. Native-level German (B2.2 Goethe certified) for DACH campaigns that actually land.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            How I can help <br className="hidden sm:block" />
            you <span className="font-sans">grow</span>
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
  );
}
