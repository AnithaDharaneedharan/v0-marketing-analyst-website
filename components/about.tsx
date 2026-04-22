"use client";

export function About() {
  return (
    <section id="about" className="py-12 lg:py-20 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-12">
          # About <span className="font-sans">Me</span>
        </h2>

        {/* About Content */}
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm{" "}
            <span className="text-foreground font-medium">
              Archana Dharaneedharan
            </span>{" "}
            — a Growth Marketer with{" "}
            <span className="text-foreground font-medium">
              5+ years of B2B experience
            </span>{" "}
            driving full-funnel demand generation, campaign strategy, and
            performance marketing across{" "}
            <span className="text-foreground">EMEA and DACH markets</span>.
          </p>

          <p>
            I combine proven execution in{" "}
            <span className="text-foreground">
              Paid Media, SEO, and Event Marketing
            </span>{" "}
            with hands-on technical skills — including AI-powered content
            automation with <span className="text-foreground">Claude AI</span>,
            custom analytics infrastructure using{" "}
            <span className="text-foreground">
              Plausible, GA4, and Looker Studio
            </span>
            , and workflow automation via{" "}
            <span className="text-foreground">n8n and Zapier</span>.
          </p>

          <p>
            I've increased{" "}
            <span className="text-foreground font-medium">
              MQL-to-SQL conversion by 18%
            </span>
            , delivered{" "}
            <span className="text-foreground font-medium">
              +35% conference attendance lifts
            </span>
            , and led multi-channel campaign strategy for Mercedes-Benz across{" "}
            <span className="text-foreground font-medium">
              36 EMEA and global markets
            </span>
            .
          </p>

          <p>
            My engineering background gives me a fast ramp on technical products
            — and my German language skills (B2.2, Goethe Institut certified)
            mean I can operate natively across{" "}
            <span className="text-foreground">DACH markets</span>.
          </p>

          <p>
            Based in <span className="text-foreground font-medium">Berlin</span>
            . If you're working on something that needs sharper analytics,
            cleaner campaign strategy, or someone who can turn data into action
            — <span className="text-foreground font-medium">let's talk</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
