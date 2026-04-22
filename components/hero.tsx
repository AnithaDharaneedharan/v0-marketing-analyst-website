"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";

const roles = [
  "Growth Marketer",
  "Analytics Strategist",
  "Campaign Lead",
  "SEO Specialist",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center px-6 lg:px-0">
      <div className="max-w-4xl mx-auto w-full py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-muted border-2 border-border shadow-2xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-23%20at%2021.22.16-al2qnWlKFyZlbRjXqOblbJQ5uQDGUm.jpeg"
                alt="Archana Dharaneedharan"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-sm text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open to opportunities
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight mb-3">
              Archana Dharaneedharan
            </h1>

            {/* Typing role */}
            <p className="text-xl sm:text-2xl text-primary font-medium mb-4 h-8">
              {displayed}
              <span className="animate-pulse">|</span>
            </p>

            {/* One-liner */}
            <p className="text-muted-foreground text-lg mb-8">
              I turn messy data into campaigns that actually convert.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              {["5+ yrs B2B", "36 markets", "+18% MQL conversion"].map(
                (stat) => (
                  <span
                    key={stat}
                    className="px-4 py-1.5 rounded-full bg-secondary text-foreground text-sm font-medium"
                  >
                    {stat}
                  </span>
                ),
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                See my work <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/archana-dharaneedharan-cv.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-foreground text-sm font-medium hover:border-foreground/30 transition-colors"
              >
                Download CV <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
