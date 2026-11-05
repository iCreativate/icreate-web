import { AppsCatalog } from "@/components/AppsCatalog";
import { PageIntro } from "@/components/PageIntro";
import { loadApps } from "@/lib/apps";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Apps",
  description:
    "Every iCreate app from the same catalogue as the launcher: Photo, Vector, Video, Light, PDF and more, with honest alpha and beta labels.",
  path: "/apps",
  keywords: [
    "free Illustrator alternative South Africa",
    "free video editor South Africa",
  ],
});

export default function AppsPage() {
  const apps = loadApps();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <PageIntro kicker="Catalogue" title="The same apps.json as the launcher">
        <p>
          This list is copied from the desktop catalogue at build time. If an
          app is alpha in the launcher, it is alpha here. Nothing is hidden
          behind a paywall.
        </p>
      </PageIntro>
      <AppsCatalog apps={apps} />
    </div>
  );
}
