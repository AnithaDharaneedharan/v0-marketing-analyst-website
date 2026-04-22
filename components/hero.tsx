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
 <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-0">
 <div className="max-w-4xl mx-auto py-20 lg:py-32">
 <div className="flex flex-col lg:flex-row items-center gap-12">
 {/* Photo */}
 <div className="flex-shrink-0 order-2 lg:order-1">
 <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-muted border-2 border-border shadow-2xl">
 <img
 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-23%20at%2021.22.16-al2qnWlKFyZlbRjXqOblbJQ5uQDGUm.jpeg"
 alt="Archana Dharaneedharan"
 className="w-full h-full object-cover object-top"
 />
 </div>
 </div>

 {/* Text */}
 <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
 {/* Availability badge */}
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-6">
 <span className="w-2 h-2 bg-green-500 rounded-full"></span>
 <span className="text-sm text-foreground">Open to opportunities</span>
 </div>

 {/* Name */}
 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
 Archana Dharaneedharan
 </h1>

 {/* Typing role */}
 <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-6 h-12">
 {displayed}
 <span className="animate-pulse">|</span>
 </p>

 {/* One-liner */}
 <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
 I turn messy data into campaigns that actually convert.
 </p>

 {/* Stat pills */}
 <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
 {["5+ yrs B2B", "36 markets", "+18% MQL conversion"].map(
 (stat) => (
 <div key={stat} className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-foreground">
 {stat}
 </div>
 ),
 )}
 </div>

 {/* CTAs */}
 <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
 <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:bg-opacity-90 transition-all">
 See my work <ArrowRight size={18} />
 </a>
 <a href="https://your-cv-link.com" className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-semibold hover:bg-secondary transition-all">
 Download CV <Download size={18} />
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
