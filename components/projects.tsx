"use client"

import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Multi-Touch Attribution Model",
    description: "Built a data-driven attribution model using Markov chains to accurately measure channel contribution, resulting in 23% better budget allocation across a $30M annual spend.",
    tags: ["Python", "BigQuery", "Markov Chains"],
    link: "#",
    featured: true
  },
  {
    title: "Customer Segmentation Engine",
    description: "Developed RFM-based segmentation with K-means clustering for a retail client, enabling personalized marketing that lifted revenue by 18%.",
    tags: ["R", "Machine Learning", "Clustering"],
    link: "#",
    featured: true
  },
  {
    title: "Social Sentiment Dashboard",
    description: "Created real-time sentiment tracking analyzing 100K+ social mentions daily to inform brand strategy and crisis management.",
    tags: ["NLP", "Python", "Tableau"],
    link: "#",
    featured: false
  },
  {
    title: "Marketing Mix Modeling",
    description: "Implemented Bayesian MMM to quantify offline and online marketing impact, optimizing media planning across channels.",
    tags: ["Bayesian Stats", "PyMC", "Media Planning"],
    link: "#",
    featured: false
  }
]

export function Projects() {
  return (
    <section id="projects" className="lg:ml-[420px] px-6 lg:px-20 py-20">
      <div className="max-w-xl">
        <div className="space-y-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group block p-6 -mx-6 rounded-lg transition-all hover:bg-card hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex flex-col">
                <h3 className="text-foreground font-medium flex items-center gap-1 group-hover:text-primary transition-colors">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-muted-foreground leading-relaxed mt-2 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Projects Link */}
        <a 
          href="#" 
          className="inline-flex items-center gap-2 mt-12 text-foreground font-medium hover:text-primary transition-colors group"
        >
          View Full Project Archive
          <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </section>
  )
}
