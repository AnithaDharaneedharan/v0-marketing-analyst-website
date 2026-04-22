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
 <section id="services" className="py-20 lg:py-32 px-6 lg:px-0">
 <div className="max-w-6xl mx-auto">
 {/* Section Header */}
 <div className="mb-16">
 <p className="text-primary font-semibold text-sm mb-2">Services</p>
 <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
 How I can help <br className="hidden lg:block" />
 you grow
 </h2>
 </div>

 {/* Services Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {services.map((service, index) => (
 <Card key={index} className="bg-secondary border border-border hover:border-foreground transition-colors">
 <CardContent className="pt-6">
 {/* Icon */}
 <div className="mb-4">
 <service.icon className="w-8 h-8 text-primary" />
 </div>

 {/* Title */}
 <h3 className="text-xl font-semibold text-foreground mb-3">
 {service.title}
 </h3>

 {/* Description */}
 <p className="text-sm text-muted-foreground leading-relaxed">
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
