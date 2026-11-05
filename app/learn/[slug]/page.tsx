import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, GUIDES } from "@/lib/guides";
import { pageMeta } from "@/lib/metadata";

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMeta({
    title: guide.title,
    description: guide.summary,
    path: `/learn/${guide.slug}`,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <p className="font-mono text-xs tracking-[0.2em] text-accent-ink uppercase">
        <Link href="/learn" className="hover:underline">
          Learn
        </Link>
        <span className="text-faint"> / {guide.minutes} min</span>
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-strong sm:text-4xl">
        {guide.title}
      </h1>
      <p className="mt-4 text-lg text-muted">{guide.summary}</p>
      <div className="prose-icreate mt-10 space-y-10">
        {guide.body.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-xl font-semibold">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
