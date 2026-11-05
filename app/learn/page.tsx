import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { GUIDES } from "@/lib/guides";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Learn",
  description:
    "iCreate tutorials and guides: install the launcher, switch from Photoshop, and read what alpha and beta actually mean.",
  path: "/learn",
});

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <PageIntro kicker="Learn" title="Guides now. Videos when they exist.">
        <p>
          We have not published tutorial videos yet. Until a first recording
          lands, these written guides cover install, Photoshop, status labels
          and billing. No fake YouTube embeds.
        </p>
      </PageIntro>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold">Written guides</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/learn/${guide.slug}`}
              className="rounded-xl border border-line bg-sunken/40 p-5 transition-colors hover:border-line-strong"
            >
              <p className="font-mono text-[11px] tracking-wide text-faint uppercase">
                {guide.minutes} min read
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold">
                {guide.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{guide.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-dashed border-line p-6">
        <h2 className="font-display text-xl font-semibold">Tutorial videos</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          This slot is empty on purpose. When we publish walkthroughs they will
          be listed here with titles, length and a transcript. If someone
          emailed you a “iCreate masterclass” that is not linked from this
          page, it is not ours.
        </p>
      </section>
    </div>
  );
}
