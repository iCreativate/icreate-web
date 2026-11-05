import Link from "next/link";
import { COMPANY, SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">{SITE_NAME}</p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            A free creative suite from {COMPANY}. Based on ArtCraft Launcher.
            Made to be used in South Africa without a dollar subscription.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs tracking-widest text-faint uppercase">
            Product
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/apps" className="hover:text-accent-ink">
                Apps
              </Link>
            </li>
            <li>
              <Link href="/download" className="hover:text-accent-ink">
                Download
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-accent-ink">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/switching-from-adobe" className="hover:text-accent-ink">
                Switching from Adobe
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs tracking-widest text-faint uppercase">
            Housekeeping
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/learn" className="hover:text-accent-ink">
                Learn
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent-ink">
                About &amp; licences
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-line px-4 py-4 text-center text-xs text-faint">
        © 2026 {COMPANY}. {SITE_NAME} is not affiliated with Adobe. Photoshop,
        Illustrator, Premiere Pro and other Adobe names are trademarks of Adobe.
      </p>
    </footer>
  );
}
