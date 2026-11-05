import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { pageMeta } from "@/lib/metadata";
import { ARTCRAFT_LAUNCHER, COMPANY } from "@/lib/site";

export const metadata = pageMeta({
  title: "About",
  description:
    "iCreate is built by iCreativate, based on ArtCraft Launcher, dual-licensed MIT or Apache-2.0. Credits, trademarks and third-party licences.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <PageIntro kicker="About" title="iCreate by iCreativate">
        <p>
          iCreate is a free creative suite: a launcher plus photo, design,
          video, document and CAD apps you install on your own computer. It is
          built in South Africa. It is not Adobe, and it does not require an
          Adobe subscription.
        </p>
      </PageIntro>

      <section className="prose-icreate mt-10">
        <h2 className="font-display text-xl font-semibold">Based on ArtCraft Launcher</h2>
        <p className="mt-3 leading-relaxed text-muted">
          The launcher is a fork of{" "}
          <a href={ARTCRAFT_LAUNCHER} className="text-accent-ink underline">
            ArtCraft Launcher
          </a>{" "}
          (also known as craft-launcher) by the ArtCraft Team and contributors.
          We kept the install, update and checksum behaviour. We replaced
          ArtCraft names, logos and marks in the interface with iCreate
          branding. The ArtCraft name, wordmark, logo and “A” mark are
          trademarks of the ArtCraft Team and are not included in this fork.
        </p>
      </section>

      <section className="prose-icreate mt-10">
        <h2 className="font-display text-xl font-semibold">Open-source licences</h2>
        <p className="mt-3 leading-relaxed text-muted">
          The launcher is dual-licensed under the MIT Licence or the Apache
          Licence, Version 2.0, at your option — the same choice as upstream.
          Copyright remains with the ArtCraft Team, ArtCraft Launcher
          contributors, and {COMPANY}. You must keep the copyright and licence
          notices. The licence texts ship as LICENSE-MIT and LICENSE-APACHE in
          the launcher repository. NOTICE records the ArtCraft credit and the
          third-party list; ATTRIBUTION.md names authors, sources and licences
          per file.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
          <li>DM Sans, Syne and Source Code Pro — SIL Open Font Licence 1.1</li>
          <li>
            Craft App Suite icons — from each app repository, MIT OR
            Apache-2.0, Copyright 2026 ArtCraft Team and the app contributors
          </li>
          <li>Simple Icons social glyphs — CC0 1.0 (where used in the launcher)</li>
          <li>
            iCreate name and leaping-figure mark — trademarks of {COMPANY}
          </li>
        </ul>
      </section>

      <section className="prose-icreate mt-10">
        <h2 className="font-display text-xl font-semibold">What this website is</h2>
        <p className="mt-3 leading-relaxed text-muted">
          icreate.co.za is the public site for the suite. The Apps page reads
          the same <code className="font-mono text-ink">apps.json</code> as the
          launcher. Installers download from this site’s download page.
          Optional Pro billing (rand, PayFast) happens in the desktop app, not
          here.
        </p>
        <p className="mt-3 leading-relaxed text-muted">
          Adobe, Photoshop, Illustrator, Premiere Pro, After Effects, Lightroom,
          Acrobat, InDesign, Audition, Adobe XD, Substance and Firefly are
          trademarks of Adobe. Microsoft Word, Excel and PowerPoint are
          trademarks of Microsoft. We use those names only to say what each
          iCreate app stands in for.
        </p>
      </section>

      <p className="mt-10 text-sm text-faint">
        Questions about licences or credits: start from the{" "}
        <Link href="/learn" className="underline">
          Learn
        </Link>{" "}
        guides and the launcher NOTICE file.
      </p>
    </div>
  );
}
