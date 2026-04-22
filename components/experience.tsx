"use client";

import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "03/2025 — 09/2025",
    title: "Marketing Specialist (Contract)",
    company: "Software & Support Media · Berlin, Germany",
    description:
      "Designed and executed full-funnel B2B demand generation campaigns for software conferences, driving qualified pipeline through events, webinars, and paid digital channels. Increased MQL-to-SQL conversion by 18% through audience segmentation refinement and A/B-tested landing page CTAs. Achieved +35% conference attendance lift via integrated multi-channel promotion. Set up Looker Studio & GA4 to track campaign ROI, funnel velocity, and engagement KPIs.",
    skills: [
      "Google Ads",
      "LinkedIn Ads",
      "GA4",
      "Looker Studio",
      "A/B Testing",
      "Salesforce",
    ],
    featured: true,
  },
  {
    period: "02/2023 — 12/2024",
    title: "Marketing Specialist – Content & Campaign Lead",
    company: "RAPP UK (Omnicom Media Group) · London, United Kingdom",
    description:
      "Led multi-channel campaign strategy and performance analysis for Mercedes-Benz EQV campaigns across 36 EMEA and global markets. Improved cross-market delivery efficiency by 20% through process redesign and structured reporting frameworks. Conducted post-campaign performance analysis surfacing insights that directly informed future budget reallocation. Led end-to-end localisation for DACH and EMEA markets across digital, OOH, and print.",
    skills: [
      "Campaign Analytics",
      "EMEA Localisation",
      "Performance Reporting",
      "Asana",
      "Stakeholder Management",
    ],
  },
  {
    period: "02/2023 — 09/2023",
    title: "Marketing Manager (Contract)",
    company: "Tjarks and Tjarks Design Group · London, United Kingdom",
    description:
      "Executed localised growth campaigns for German-speaking markets, managing content workflows end-to-end from brief to delivery. Reduced campaign turnaround time by 25% through structured stakeholder alignment, approval workflows, and process documentation.",
    skills: [
      "Content Strategy",
      "Localisation",
      "Campaign Management",
      "German",
    ],
  },
  {
    period: "09/2020 — 08/2021",
    title: "Localisation Manager",
    company: "Tag · Chennai, India",
    description:
      "Managed localisation of global B2B marketing campaigns across 15+ language markets including EMEA, ensuring message accuracy and cultural relevance at scale.",
    skills: ["Localisation", "B2B Marketing", "EMEA", "Project Management"],
  },
  {
    period: "12/2018 — 08/2020",
    title: "Technical Translator – German",
    company: "Vestas R&D · Chennai, India",
    description:
      "Produced bilingual (EN/DE) technical reports and supported DACH client communications for wind energy feasibility and performance projects with TÜV Nord and DNV.",
    skills: ["German", "Technical Writing", "Translation", "DACH"],
  },
  {
    period: "09/2014 — 12/2018",
    title: "Business Development Sales Executive",
    company: "Häfele · Chennai, India",
    description:
      "Identified new market opportunities and secured strategic partnerships, achieving 20% revenue growth and a 25% improvement in customer retention through consultive sales and tailored solutions.",
    skills: ["B2B Sales", "Business Development", "CRM", "Market Strategy"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-16">
          Where I've <span className="font-sans">worked</span>
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
                  <h3
                    className={`text-xl font-semibold mb-2 flex items-center gap-2 ${
                      exp.featured ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {exp.title}
                    {exp.featured && <ArrowUpRight className="h-4 w-4" />}
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    {exp.company}
                  </p>
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
  );
}
