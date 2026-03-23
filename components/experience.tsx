"use client"

import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2022 — Present",
    title: "Senior Marketing Analyst",
    company: "TechCorp",
    companyUrl: "#",
    description: "Lead marketing analytics for a $50M annual budget. Build and maintain attribution models used across the organization.",
    skills: ["Python", "SQL", "Tableau", "BigQuery", "GA4"]
  },
  {
    period: "2019 — 2022",
    title: "Marketing Analyst",
    company: "RetailMax",
    companyUrl: "#",
    description: "Developed customer segmentation models and personalization strategies. Created automated reporting dashboards.",
    skills: ["R", "Adobe Analytics", "Salesforce", "A/B Testing"]
  },
  {
    period: "2017 — 2019",
    title: "Junior Data Analyst",
    company: "StartupXYZ",
    companyUrl: "#",
    description: "Built foundational dashboards and reports for marketing team. Implemented multi-touch attribution model.",
    skills: ["Excel", "Google Analytics", "Data Studio", "SQL"]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground">
            Where I&apos;ve{" "}
            <span className="font-serif italic">worked</span>
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <a
              key={index}
              href={exp.companyUrl}
              className="group block bg-background p-6 sm:p-8 rounded-2xl border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {exp.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-muted-foreground font-medium mb-3">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs font-medium rounded-full"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* View Resume Link */}
        <div className="text-center mt-12">
          <a 
            href="/resume.pdf" 
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors group"
          >
            View Full Resume
            <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
