"use client"

import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-0">
      <div className="max-w-4xl mx-auto text-center py-20 lg:py-32">
        {/* Main Heading - Thibaut style large text */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground leading-tight tracking-tight">
          <span className="font-serif text-primary">Archana Dharaneedharan,</span>{" "}
          <span className="text-muted-foreground">
            Data-Driven Marketing Strategist who transforms insights into{" "}
            <span className="font-serif italic text-foreground">growth.</span>
          </span>
          <br className="hidden lg:block" />
          <span className="text-muted-foreground">
            Your analytics partner, with more{" "}
            <span className="font-serif italic text-foreground">impact.</span>
          </span>
        </h1>

        {/* Profile Image - Below text like thibaut.cool */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-muted border-4 border-background shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-23%20at%2021.22.16-al2qnWlKFyZlbRjXqOblbJQ5uQDGUm.jpeg"
              alt="Archana Dharaneedharan"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
