"use client"

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        {/* Section Header - Thibaut style */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground mb-12">
          # About{" "}
          <span className="font-serif italic">Me</span>
        </h2>

        {/* About Content */}
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            My name is <span className="text-foreground font-medium">Archana Dharaneedharan</span> - 
            a data-driven marketing strategist with a passion for turning complex analytics into actionable growth strategies.
          </p>

          <p>
            Based in the heart of the tech industry, I help brands{" "}
            <span className="text-foreground font-serif italic">grow smarter</span> (it rhymes).
          </p>

          <p>
            My work mainly focuses on <span className="text-foreground">marketing analytics</span>,{" "}
            <span className="text-foreground">consumer insights</span>, and{" "}
            <span className="text-foreground">campaign optimization</span>, to produce beautifully 
            data-driven strategies that deliver real results.
          </p>

          <p>
            I've honed my skills working with tools like{" "}
            <span className="text-foreground">Python, SQL, Tableau, BigQuery</span>, and{" "}
            <span className="text-foreground">Google Analytics</span>. I also love diving into 
            machine learning for customer segmentation and predictive modeling.
          </p>

          <p>
            If you're working on something that needs some{" "}
            <span className="font-serif italic text-foreground">analytics magic</span>, feel free to reach out.
          </p>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 p-8 bg-card rounded-3xl border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-6">Work Experience</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Over the past several years, I have worked as a Marketing Analyst at leading companies, 
            where I developed expertise in building attribution models, customer segmentation frameworks, 
            and real-time analytics dashboards. As a data enthusiast, I've built extensive reporting 
            pipelines and created optimized analytics workflows to deliver insights across organizations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This experience taught me to excel under tight deadlines and deliver actionable insights 
            that drive business decisions. I've gained extensive experience with tools like Python, R, 
            SQL, Tableau, and various marketing platforms.
          </p>
        </div>
      </div>
    </section>
  )
}
