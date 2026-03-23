"use client"

import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Multi-Touch Attribution",
    type: "Commercial Work",
    period: "Summer 2024",
    description: "Built a data-driven attribution model using Markov chains to accurately measure channel contribution across the entire customer journey.",
    result: "+23% ROI",
    image: "/project-1.jpg",
    link: "#",
    breakdown: "View Case Study"
  },
  {
    title: "Customer Segmentation",
    type: "Commercial Work", 
    period: "Winter 2023",
    description: "Developed RFM-based segmentation with K-means clustering enabling personalized marketing campaigns and improved targeting.",
    result: "+18% Revenue",
    image: "/project-2.jpg",
    link: "#",
    breakdown: "View Case Study"
  },
  {
    title: "Sentiment Dashboard",
    type: "Personal Project",
    period: "Fall 2023",
    description: "Created real-time sentiment tracking dashboard analyzing 100K+ social mentions daily with NLP and predictive analytics.",
    result: "100K+ daily",
    image: "/project-3.jpg",
    link: "#",
    breakdown: "View Case Study"
  },
  {
    title: "GTM Strategy Framework",
    type: "Commercial Work",
    period: "Spring 2023",
    description: "Designed comprehensive go-to-market strategy framework for SaaS product launch, achieving 150% of target MRR.",
    result: "$30M pipeline",
    image: "/project-1.jpg",
    link: "#",
    breakdown: "View Case Study"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        {/* Section Header - Thibaut style */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-16">
          # Cool stuff I've{" "}
          <span className="font-serif italic">done</span>
        </h2>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group block bg-card rounded-3xl overflow-hidden border border-border hover:border-foreground/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="relative lg:w-2/5 h-64 lg:h-80 bg-muted overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Result Badge */}
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                    {project.result}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    {/* Title Row */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-xl lg:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                      <span>{project.type}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      <span>{project.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Breakdown Link */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <span className="text-sm text-primary font-medium group-hover:underline">
                      {project.breakdown}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
