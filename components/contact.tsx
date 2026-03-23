import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="lg:ml-[420px] px-6 lg:px-20 py-20">
      <div className="max-w-xl">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
          Contact
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          If you would like to discuss a project, have a question, or just want to say hi,
          I&apos;m always happy to chat. Feel free to reach out!
        </p>
        
        <Button asChild className="rounded-full">
          <a href="mailto:archana.dharaneedharan@gmail.com" className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Say Hello
          </a>
        </Button>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-muted-foreground">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest">Mail</span>
              <p className="mt-1">
                <a href="mailto:archana.dharaneedharan@gmail.com" className="hover:text-primary transition-colors">
                  archana.dharaneedharan@gmail.com
                </a>
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest">LinkedIn</span>
              <p className="mt-1">
                <a href="https://linkedin.com/in/archana" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  @archana
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
