export function Footer() {
  return (
    <footer className="lg:ml-[420px] px-6 lg:px-20 py-12 border-t border-border">
      <div className="max-w-xl">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Loosely designed in{" "}
          <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            Figma
          </a>{" "}
          and coded in{" "}
          <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            Visual Studio Code
          </a>
          . Built with{" "}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            Next.js
          </a>{" "}
          and{" "}
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            Tailwind CSS
          </a>
          , deployed with{" "}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            Vercel
          </a>
          .
        </p>
        <p className="text-xs text-muted-foreground mt-4">
          © {new Date().getFullYear()} Archana Dharaneedharan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
