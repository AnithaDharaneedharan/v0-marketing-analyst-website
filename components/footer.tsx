import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-0 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-sm font-medium text-foreground flex items-center gap-2"
          >
            <div className="w-2 h-2 bg-foreground rounded-full" />
            archana
          </Link>

          {/* Copyright */}
        </div>
      </div>
    </footer>
  );
}
