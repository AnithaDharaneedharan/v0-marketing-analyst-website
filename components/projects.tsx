"use client"

import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "Multi-Touch Attribution",
    client: "TechCorp",
    category: "Analytics",
    year: "2024",
    description: "Built a data-driven attribution model using Markov chains to accurately measure channel contribution.",
    result: "+23% ROI",
    tags: ["Python", "BigQuery", "Markov Chains"],
    image: "/project-1.jpg",
    link: "#"
  },
  {
    title: "Customer Segmentation",
    client: "RetailMax",
    category: "Machine Learning",
    year: "2023",
    description: "Developed RFM-based segmentation with K-means clustering enabling personalized marketing.",
    result: "+18% Revenue",
    tags: ["R", "Machine Learning", "Clustering"],
    image: "/project-2.jpg",
    link: "#"
  },
  {
    title: "Sentiment Dashboard",
    client: "BrandCo",
    category: "NLP",
    year: "2023",
    description: "Created real-time sentiment tracking analyzing 100K+ social mentions daily.",
    result: "100K+ daily",
    tags: ["NLP", "Python", "Tableau"],
    image: "/project-3.jpg",
    link: "#"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Case Studies
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground">
            Featured{" "}
            <span className="font-serif italic">projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group block bg-card rounded-3xl overflow-hidden border border-border hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="relative lg:w-1/2 h-64 lg:h-auto bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Result Badge */}
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-accent text-accent-foreground rounded-full px-4 py-1.5 text-sm font-semibold">
                      {project.result}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span>{project.client}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span>{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4 flex items-center gap-2 group-hover:text-accent transition-colors">
                    {project.title}
                    <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs font-medium rounded-full"
                      >
                        {tag}
                      </Badge>
                    ))}
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
