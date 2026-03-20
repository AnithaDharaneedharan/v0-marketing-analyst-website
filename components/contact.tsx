import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Twitter, FileText } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "sarah@example.com",
    href: "mailto:sarah@example.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/sarahmitchell",
    href: "https://linkedin.com/in/sarahmitchell"
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@sarahanalytics",
    href: "https://twitter.com/sarahanalytics"
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download PDF",
    href: "/resume.pdf"
  }
]

export function Contact() {
  return (
    <section id="contact" className="lg:ml-[40%] p-8 lg:p-12 xl:p-16 border-t border-border">
      <div className="max-w-2xl">
        <h2 className="text-sm uppercase tracking-wider text-primary mb-4">Get in Touch</h2>
        <p className="text-2xl lg:text-3xl font-serif text-foreground mb-8 text-balance">
          {"Let's discuss how data can drive your marketing success."}
        </p>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((link, index) => (
            <a key={index} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              <Card className="group hover:border-primary transition-colors cursor-pointer h-full">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                    <link.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{link.label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {link.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
