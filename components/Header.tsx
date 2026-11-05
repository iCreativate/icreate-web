import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { href: "/apps", label: "Apps" },
  { href: "/download", label: "Download" },
  { href: "/pricing", label: "Pricing" },
  { href: "/learn", label: "Learn" },
  { href: "/switching-from-adobe", label: "From Adobe" },
  { href: "/about", label: "About" },
] as const;

function NavLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      {LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-sunken hover:text-ink"
        >
          {link.label}
        </Link>
      ))}
      <Link href="/download" className="btn-primary md:ml-2">
        Get the launcher
      </Link>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
        >
          <Image
            src="/brand/icreate.png"
            alt=""
            width={32}
            height={32}
            className="rounded-sm"
            priority
          />
          <span>
            iCreate
            <span className="sr-only"> home</span>
          </span>
        </Link>
        <details className="group ml-auto md:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-line px-3 py-1.5 text-sm text-ink marker:content-none [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <nav
            className="absolute top-full right-0 left-0 z-20 flex flex-col gap-1 border-b border-line bg-bg px-4 py-3 shadow-lg"
            aria-label="Mobile"
          >
            <NavLinks className="flex flex-col gap-1" />
          </nav>
        </details>
        <nav className="ml-auto hidden md:block" aria-label="Primary">
          <NavLinks className="flex items-center gap-1" />
        </nav>
      </div>
    </header>
  );
}
