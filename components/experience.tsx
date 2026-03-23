"use client"

import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2022 — Present",
    title: "Senior Marketing Analyst",
    company: "TechCorp",
    description: "Lead marketing analytics for a $50M annual budget. Build and maintain attribution models used across the organization.",
    skills: ["Python", "SQL", "Tableau", "BigQuery", "GA4"],
    featured: true
  },
  {
    period: "2019 — 2022",
    title: "Marketing Analyst",
    company: "RetailMax",
    description: "Developed customer segmentation models and personalization strategies. Created automated reporting dashboards.",
    skills: ["R", "Adobe Analytics", "Salesforce", "A/B Testing"]
  },
  {
    period: "2017 — 2019",
    title: "Junior Data Analyst",
    company: "StartupXYZ",
    description: "Built foundational dashboards and reports for marketing team. Implemented multi-touch attribution model.",
    skills: ["Excel", "Google Analytics", "Data Studio", "SQL"]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
          Experience
        </div>

        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-16">
          Where I've{" "}
          <span className="font-sans">worked</span>
        </h2>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border rounded-3xl hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold mb-2 flex items-center gap-2 ${
                    exp.featured ? "text-accent" : "text-foreground"
                  }`}>
                    {exp.title}
                    {exp.featured && <ArrowUpRight className="h-4 w-4" />}
                  </h3>
                  <p className="text-muted-foreground font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-secondary text-foreground rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
