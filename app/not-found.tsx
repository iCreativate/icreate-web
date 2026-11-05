import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="font-mono text-xs tracking-[0.2em] text-accent-ink uppercase">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold">
        That page is not in the catalogue
      </h1>
      <p className="mt-3 text-muted">
        Try the home page, the app list, or download the launcher.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn-primary">
          Home
        </Link>
        <Link href="/apps" className="btn-ghost">
          Apps
        </Link>
      </div>
    </div>
  );
}
