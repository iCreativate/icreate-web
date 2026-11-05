import Image from "next/image";
import Link from "next/link";
import { AppCard } from "@/components/AppCard";
import { JsonLd } from "@/components/JsonLd";
import { StatusBadge } from "@/components/StatusBadge";
import { loadApps, shortTitle } from "@/lib/apps";
import { pageMeta } from "@/lib/metadata";
import { SITE_NAME, SITE_TAGLINE, SITE_URL, zar, PRO_MONTHLY_ZAR } from "@/lib/site";

export const metadata = pageMeta({
  title: SITE_NAME,
  description:
    "Create without limits. No Adobe subscription. iCreate is a free photo, design and video suite for South Africa — Photoshop, Illustrator and Premiere stand-ins that run offline.",
  path: "/",
});

export default function HomePage() {
  const apps = loadApps();
  const featured = apps.slice(0, 6);

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is iCreate a free Photoshop alternative in South Africa?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "iCreate Photo is our Photoshop stand-in. The whole suite is free to install and use. It is beta software, not a feature-for-feature clone.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need an Adobe or iCreate account?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Apps install from the launcher and work offline. An optional iCreate account adds extras such as settings backup.",
              },
            },
            {
              "@type": "Question",
              name: "What does iCreate Pro cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: `Optional extras at ${zar(PRO_MONTHLY_ZAR)} a month, billed in rand through PayFast. The apps stay free.`,
              },
            },
          ],
        }}
      />

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-accent-ink uppercase">
            South Africa · offline-first · no Creative Cloud
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-ink-strong sm:text-6xl">
            {SITE_TAGLINE}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            iCreate is a desktop creative suite: photo, vector, video, layout,
            audio and more. Install what you need from one launcher. Pay nothing
            unless you want Pro extras. Priced in rand, not dollars.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/download" className="btn-primary px-6 py-3 text-base">
              Download the launcher
            </Link>
            <Link href="/switching-from-adobe" className="btn-ghost px-6 py-3 text-base">
              Switching from Adobe
            </Link>
          </div>
          <p className="mt-4 text-sm text-faint">
            macOS, Windows and Linux. No Adobe ID. No account required.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-sunken p-6">
          <Image
            src="/brand/icreate.png"
            alt="iCreate leaping-figure mark"
            width={280}
            height={280}
            className="mx-auto"
            priority
          />
          <p className="mt-4 text-center font-mono text-xs tracking-wide text-faint uppercase">
            Free to run · Pro extras from {zar(PRO_MONTHLY_ZAR)}/month
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-sunken/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3">
          {[
            {
              title: "One launcher",
              body: "Install Photo, Vector, Video and the rest from a single catalogue. Same apps.json the desktop app reads.",
            },
            {
              title: "Honest labels",
              body: "Alpha means early. Beta means usable with gaps. We do not call unfinished software a Photoshop killer.",
            },
            {
              title: "Rand, not dollars",
              body: `Every shipping app is free. Optional iCreate Pro is ${zar(PRO_MONTHLY_ZAR)} a month via PayFast.`,
            },
          ].map((item) => (
            <div key={item.title}>
              <h2 className="font-display text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold">
              A suite, not a single editor
            </h2>
            <p className="mt-2 text-muted">
              {apps.length} apps in the current catalogue. Status is taken from
              the launcher file, not from marketing copy.
            </p>
          </div>
          <Link href="/apps" className="btn-ghost">
            See all apps
          </Link>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {featured.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {apps.map((app) => (
            <li
              key={app.id}
              className="flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm"
            >
              {shortTitle(app)}
              <StatusBadge status={app.status} size="sm" />
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-2xl font-semibold">
            Looking for a free Photoshop alternative in South Africa?
          </h2>
          <p className="mt-3 max-w-3xl text-muted">
            Search engines send people here for that phrase. The straight
            answer: iCreate Photo is the Photoshop stand-in, in beta. Vector
            stands in for Illustrator, Video for Premiere Pro. None of them are
            Adobe, and we do not pretend otherwise. If that is enough,{" "}
            <Link href="/download" className="text-accent-ink underline">
              download the launcher
            </Link>
            . If you need a map of every Adobe app, use{" "}
            <Link href="/switching-from-adobe" className="text-accent-ink underline">
              Switching from Adobe
            </Link>
            .
          </p>
          <p className="mt-6 text-sm text-faint">
            Based on ArtCraft Launcher. Dual MIT or Apache-2.0. Details on the{" "}
            <Link href="/about" className="underline">
              About
            </Link>{" "}
            page. {SITE_URL.replace("https://", "")}
          </p>
        </div>
      </section>
    </div>
  );
}
