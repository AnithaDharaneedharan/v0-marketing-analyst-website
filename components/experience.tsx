"use client"

import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2022 — Present",
    title: "Senior Marketing Analyst",
    company: "TechCorp",
    companyUrl: "#",
    description: "Lead marketing analytics for a $50M annual budget. Build and maintain attribution models used across the organization. Work closely with cross-functional teams to implement and advocate for data-driven decision making.",
    skills: ["Python", "SQL", "Tableau", "BigQuery", "GA4"]
  },
  {
    period: "2019 — 2022",
    title: "Marketing Analyst",
    company: "RetailMax",
    companyUrl: "#",
    description: "Developed customer segmentation models and personalization strategies. Created automated reporting dashboards that reduced manual reporting time by 60%.",
    skills: ["R", "Adobe Analytics", "Salesforce", "A/B Testing"]
  },
  {
    period: "2017 — 2019",
    title: "Junior Data Analyst",
    company: "StartupXYZ",
    companyUrl: "#",
    description: "Built foundational dashboards and reports for marketing team. Implemented the organization's first multi-touch attribution model.",
    skills: ["Excel", "Google Analytics", "Data Studio", "SQL"]
  }
]

const education = [
  {
    degree: "M.S. Business Analytics",
    school: "University of California, Berkeley",
    year: "2017"
  },
  {
    degree: "B.S. Marketing",
    school: "University of Michigan",
    year: "2015"
  }
]

const certifications = [
  "Google Analytics Certified",
  "Tableau Desktop Specialist",
  "HubSpot Marketing Software",
  "Meta Marketing Analytics"
]

export function Experience() {
  return (
    <section id="experience" className="lg:ml-[420px] px-6 lg:px-20 py-20">
      <div className="max-w-xl">
        {/* Experience */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <a
              key={index}
              href={exp.companyUrl}
              className="group block p-6 -mx-6 rounded-lg transition-all hover:bg-card hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap pt-1 sm:w-32 shrink-0">
                  {exp.period}
                </span>
                <div className="flex-1">
                  <h3 className="text-foreground font-medium flex items-center gap-1 group-hover:text-primary transition-colors">
                    {exp.title} · {exp.company}
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mt-2 text-sm">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Education */}
        <div className="mt-20 pt-12 border-t border-border">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="group">
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {edu.degree}
                </p>
                <p className="text-muted-foreground text-sm">
                  {edu.school} · {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        {/* View Full Resume Link */}
        <a 
          href="/resume.pdf" 
          className="inline-flex items-center gap-2 mt-12 text-foreground font-medium hover:text-primary transition-colors group"
        >
          View Full Resume
          <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </section>
  )
}
