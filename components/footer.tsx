export function Footer() {
  return (
    <footer className="lg:ml-[40%] p-8 lg:p-12 border-t border-border">
      <div className="max-w-2xl">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sarah Mitchell. Built with Next.js.
        </p>
      </div>
    </footer>
  )
}
