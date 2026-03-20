import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Senior Marketing Analyst",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description: "Leading marketing analytics for a $50M annual marketing budget. Built attribution models that improved ROAS by 34%.",
    skills: ["Python", "SQL", "Tableau", "Google Analytics 4", "BigQuery"]
  },
  {
    title: "Marketing Analyst",
    company: "RetailMax",
    period: "2019 - 2022",
    description: "Developed customer segmentation models and personalization strategies that increased email conversion rates by 28%.",
    skills: ["R", "Adobe Analytics", "Salesforce Marketing Cloud", "A/B Testing"]
  },
  {
    title: "Junior Data Analyst",
    company: "StartupXYZ",
    period: "2017 - 2019",
    description: "Built dashboards and reports for marketing team. Implemented first attribution model for the organization.",
    skills: ["Excel", "Google Analytics", "Data Studio", "SQL"]
  }
]

export function Experience() {
  return (
    <section id="experience" className="lg:ml-[40%] p-8 lg:p-12 xl:p-16 border-t border-border">
      <div className="max-w-2xl">
        <h2 className="text-sm uppercase tracking-wider text-primary mb-12">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-primary mb-3">{exp.company}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="text-lg font-semibold text-foreground mb-6">Education</h3>
          <div className="space-y-4">
            <div>
              <p className="text-foreground font-medium">M.S. Business Analytics</p>
              <p className="text-muted-foreground">University of California, Berkeley - 2017</p>
            </div>
            <div>
              <p className="text-foreground font-medium">B.S. Marketing</p>
              <p className="text-muted-foreground">University of Michigan - 2015</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-lg font-semibold text-foreground mb-6">Certifications</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Google Analytics Certified</Badge>
            <Badge variant="outline">Tableau Desktop Specialist</Badge>
            <Badge variant="outline">HubSpot Marketing Software</Badge>
            <Badge variant="outline">Meta Marketing Analytics</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
