"use client";

import { ArrowUpRight } from "lucide-react";

const projects = [
 {
 title: "Fixing Analytics Blind Spots",
 client: "codebar.io · Marketing Analytics · Plausible",
 period: "Winter 2026",
 description:
 "codebar had analytics—but no answers. No funnels, no conversions, no visibility into user behaviour.\n\nI rebuilt the tracking strategy under strict constraints (privacy-first, no user-level data, OAuth gaps) to uncover where users actually drop off.\n\n→ The biggest problem wasn't what we couldn't measure—it's how we designed around it.",
 result: "Analytics under constraints",
 image: "/project-1.jpg",
 link: "https://www.notion.so/Case-Study-1-Marketing-Analytics-with-Plausible-34ab9e2d5ee2800d81b7e9fc8fa2d883",
 breakdown: "View Case Study",
 },
 {
 title: "18K Downloads. 17 Markets. One Campaign.",
 client: "Mercedes-Benz · Campaign Analytics · Global Launch",
 period: "Winter 2023",
 description:
 "Launching a flagship car globally means 17 markets, 458 assets, and zero room for off-brand execution.\n\nI delivered a post-campaign adaptation analysis for the E-Class W214 launch—tracking how markets adapted, what they ignored, and where consistency broke down. 91% adaptation rate. 88% headline compliance.\n\n→ Global campaigns don't fail on strategy. They fail on follow-through.",
 result: "18K+ downloads · 91% adaptation rate",
 image: "/project-2.jpg",
 link: "https://www.notion.so/Case-Study-2-Content-Marketing-34ab9e2d5ee28016aeb1e6c8d08e518c",
 breakdown: "View Case Study",
 },
 {
 title: "The Approval Process Had No Clock. I Built One.",
 client: "Mercedes-Benz · Process & Operations · Omnicom",
 period: "December 2024",
 description:
 "Mercedes-Benz's CGP approval process had no way to measure how long feedback actually took—across markets, tiers, or campaign types. Bottlenecks were invisible.\n\nI extracted data from individual Asana tickets, cleaned and structured it in Excel, and built a benchmark report comparing Q4 2024 against the full-year baseline—delivered directly to the MB RO.COS client team.\n\n→ October was the busiest month of the year. It was also the fastest. That told us the process had matured.",
 result: "33% faster approvals · 4.6-day avg. turnaround",
 image: "/project-3.jpg",
 link: "https://www.notion.so/Case-Study-3-Process-Analysis-and-Reporting-34ab9e2d5ee28044884aceb0da6c4142",
 breakdown: "View Case Study",
 },
 {
 title: "GTM Strategy Framework",
 client: "Commercial Work",
 period: "Spring 2023",
 description:
 "Designed comprehensive go-to-market strategy framework for SaaS product launch, achieving 150% of target MRR.",
 result: "$30M pipeline",
 image: "/project-1.jpg",
 link: "#",
 breakdown: "View Case Study",
 },
];

export function Projects() {
 return (
 <section id="projects" className="py-20 lg:py-32 px-6 lg:px-0">
 <div className="max-w-4xl mx-auto">
 {/* Section Header - Thibaut style */}
 <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-16">
 # Cool stuff I've done 
 </h2>

 {/* Projects List */}
 <div className="space-y-6">
 {projects.map((project, index) => (
 <a
 key={index}
 href={project.link}
 className="group block bg-secondary border border-border rounded-lg overflow-hidden hover:border-foreground/30 transition-all duration-300"
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
 <div className="absolute top-4 left-4 bg-primary text-background px-4 py-1.5 rounded-full text-sm font-semibold">
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
 <span>{project.client}</span>
 <span className="w-1 h-1 rounded-full bg-muted-foreground" />
 <span>{project.period}</span>
 </div>

 {/* Description */}
 <p className="text-muted-foreground leading-relaxed text-sm lg:text-base whitespace-pre-wrap">
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
 );
}
