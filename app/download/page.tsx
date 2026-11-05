import { Suspense } from "react";
import { DownloadButtons } from "@/components/DownloadButtons";
import { PageIntro } from "@/components/PageIntro";
import { toDownloadOffers } from "@/lib/downloads";
import { getLatestRelease } from "@/lib/github-release";
import { pageMeta } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";

export const metadata = pageMeta({
  title: "Download",
  description:
    "Download the iCreate launcher for macOS, Windows or Linux. We highlight the build that matches your computer.",
  path: "/download",
});

async function ReleasePanel() {
  const offers = toDownloadOffers(await getLatestRelease());

  return (
    <div className="mt-10">
      {offers ? (
        <p className="mb-4 text-sm text-muted">
          Latest build <span className="text-ink">{offers.name}</span>
          {offers.publishedAt
            ? ` · ${new Date(offers.publishedAt).toLocaleDateString("en-ZA")}`
            : null}
          . Files download from this site — you stay on {SITE_NAME}.
        </p>
      ) : (
        <p className="mb-4 rounded-lg border border-warn/40 bg-sunken p-4 text-sm text-muted">
          No launcher installer is published yet. The buttons below unlock
          automatically when a macOS, Windows or Linux build is available.
        </p>
      )}
      <DownloadButtons offers={offers} />
      <p className="mt-6 text-sm text-faint">
        Intel and Apple silicon Macs share one universal disk image. On Linux we
        serve the AppImage by default; a .deb is on the same release when you
        need a package manager install.
      </p>
    </div>
  );
}

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <PageIntro kicker="Desktop" title="Get the launcher, then install apps">
        <p>
          The website does not run the editors in a browser. Download iCreate
          for your operating system, then install Photo, Vector, Video and the
          rest from the catalogue — the same list as on this site.
        </p>
      </PageIntro>
      <Suspense
        fallback={
          <p className="mt-10 text-sm text-muted">
            Checking for the latest build…
          </p>
        }
      >
        <ReleasePanel />
      </Suspense>
      <ol className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          "Install the launcher for macOS, Windows or Linux.",
          "Pick an app in the catalogue and install it. Checksums come with the download.",
          "Work offline. Updates wait in the launcher until you apply them.",
        ].map((step, index) => (
          <li key={step} className="rounded-xl border border-line p-4">
            <p className="font-mono text-xs text-accent-ink">0{index + 1}</p>
            <p className="mt-2 text-sm text-muted">{step}</p>
          </li>
        ))}
      </ol>
      <section className="mt-12 rounded-xl border border-warn/40 bg-sunken/50 p-5">
        <h2 className="font-display text-xl font-semibold">
          Opening unsigned builds
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted">
          Early builds are not Apple-notarised or Authenticode-signed. macOS
          Gatekeeper and Windows SmartScreen will warn. Only install files you
          downloaded from this {SITE_NAME} download page.
        </p>
        <ul className="mt-4 grid gap-4 text-sm text-muted sm:grid-cols-3">
          <li>
            <p className="font-display font-semibold text-ink">macOS</p>
            <p className="mt-1">
              Drag iCreate to Applications. In Finder, Control-click it → Open →
              Open. Or:{" "}
              <code className="font-mono text-xs text-ink">
                xattr -cr /Applications/iCreate.app
              </code>
            </p>
          </li>
          <li>
            <p className="font-display font-semibold text-ink">Windows</p>
            <p className="mt-1">
              Run the .msi. If SmartScreen appears, More info → Run anyway. The
              installer is per-user; no Administrator prompt.
            </p>
          </li>
          <li>
            <p className="font-display font-semibold text-ink">Linux</p>
            <p className="mt-1">
              chmod +x the AppImage and run it, or install the .deb with apt.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
