"use client";

import { useState } from "react";
import { Linkedin, Mail, Copy, Check } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/arch2025",
    label: "LinkedIn",
    description: "Let's connect professionally",
  },
  {
    icon: Mail,
    href: "mailto:archana.dharaneedharan@gmail.com",
    label: "Email",
    description: "For detailed inquiries",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("archana.dharaneedharan@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        {/* Section Header - Thibaut style */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-12">
          # Let's <span className="font-sans">work together</span>
        </h2>

        {/* Contact Content */}
        <div className="space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Want to get in touch with me? The best way to reach out would be to{" "}
            <span className="text-foreground font-medium">email me!</span>
          </p>

          {/* Copy Email Button */}
          <button
            onClick={copyEmail}
            className="group flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-2xl hover:opacity-90 transition-opacity"
          >
            {copied ? (
              <>
                <Check className="h-5 w-5" />
                <span className="font-medium">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-5 w-5" />
                <span className="font-medium">Copy my E-mail</span>
              </>
            )}
          </button>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Feel free to reach out through{" "}
            <span className="text-foreground font-medium">
              LinkedIn or email
            </span>{" "}
            to get in touch!
          </p>

          {/* Social Links */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-card border border-border rounded-2xl hover:border-foreground/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <social.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {social.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {social.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
