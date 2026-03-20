import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Multi-Touch Attribution Model",
    description: "Built a data-driven attribution model using Markov chains to accurately measure channel contribution, resulting in 23% better budget allocation.",
    image: "/projects/attribution.jpg",
    tags: ["Python", "BigQuery", "Markov Chains"],
    link: "#"
  },
  {
    title: "Customer Segmentation Engine",
    description: "Developed RFM-based segmentation with K-means clustering for a retail client, enabling personalized marketing that lifted revenue by 18%.",
    image: "/projects/segmentation.jpg",
    tags: ["R", "Machine Learning", "Clustering"],
    link: "#"
  },
  {
    title: "Social Sentiment Analysis",
    description: "Created real-time sentiment tracking dashboard analyzing 100K+ social mentions daily to inform brand strategy and crisis management.",
    image: "/projects/sentiment.jpg",
    tags: ["NLP", "Python", "Tableau"],
    link: "#"
  },
  {
    title: "Marketing Mix Modeling",
    description: "Implemented Bayesian MMM to quantify offline and online marketing impact, helping optimize a $30M annual media budget.",
    image: "/projects/mmm.jpg",
    tags: ["Bayesian Statistics", "PyMC", "Media Planning"],
    link: "#"
  }
]

export function Projects() {
  return (
    <section id="projects" className="lg:ml-[40%] p-8 lg:p-12 xl:p-16 border-t border-border">
      <div className="max-w-2xl">
        <h2 className="text-sm uppercase tracking-wider text-primary mb-12">Featured Projects</h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link}
              className="group block"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden mb-6 bg-secondary">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ArrowUpRight className="h-8 w-8 text-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2 flex items-center gap-2">
                {project.title}
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
