import { Suspense } from "react";
import { DownloadButtons } from "@/components/DownloadButtons";
import { PageIntro } from "@/components/PageIntro";
import { getLatestRelease } from "@/lib/github-release";
import { pageMeta } from "@/lib/metadata";
import { GITHUB_RELEASES, GITHUB_REPO_URL, LAUNCHER_REPO } from "@/lib/site";

export const metadata = pageMeta({
  title: "Download",
  description:
    "Download the iCreate launcher for macOS, Windows or Linux. We highlight the build that matches your computer and link to the latest GitHub release.",
  path: "/download",
});

async function ReleasePanel() {
  const release = await getLatestRelease();

  return (
    <div className="mt-10">
      {release ? (
        <p className="mb-4 text-sm text-muted">
          Latest release{" "}
          <a href={release.htmlUrl} className="text-accent-ink underline">
            {release.name}
          </a>
          {release.publishedAt
            ? ` · ${new Date(release.publishedAt).toLocaleDateString("en-ZA")}`
            : null}
          . Direct files come from GitHub ({LAUNCHER_REPO}).
        </p>
      ) : (
        <p className="mb-4 rounded-lg border border-warn/40 bg-sunken p-4 text-sm text-muted">
          No GitHub release is published yet for{" "}
          <a href={GITHUB_REPO_URL} className="text-accent-ink underline">
            {LAUNCHER_REPO}
          </a>
          . When the first launcher build is tagged, this page will link the
          macOS, Windows and Linux files automatically. Until then the buttons
          open the releases page.
        </p>
      )}
      <DownloadButtons release={release} />
      <p className="mt-6 text-sm text-faint">
        Prefer to browse?{" "}
        <a href={GITHUB_RELEASES} className="underline">
          All releases on GitHub
        </a>
        . Intel and Apple silicon Macs share one universal disk image. Linux
        users who want a .deb will find it on the same release.
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
          <p className="mt-10 text-sm text-muted">Checking GitHub for the latest build…</p>
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
          The first GitHub releases are not Apple-notarised or Authenticode-signed.
          macOS Gatekeeper and Windows SmartScreen will warn. Download only from{" "}
          <a href={GITHUB_RELEASES} className="text-accent-ink underline">
            iCreativate/icreate-launcher
          </a>
          .
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
