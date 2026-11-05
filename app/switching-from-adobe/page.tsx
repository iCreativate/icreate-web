import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { StatusBadge } from "@/components/StatusBadge";
import { adobeRows, officeRows } from "@/lib/adobe";
import { iconSrc, shortTitle, STATUS_COPY } from "@/lib/apps";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Switching from Adobe",
  description:
    "Map Photoshop, Illustrator, Premiere Pro, After Effects and the rest of Creative Cloud to iCreate apps, with honest alpha and beta labels.",
  path: "/switching-from-adobe",
  keywords: [
    "switch from Adobe South Africa",
    "Photoshop to iCreate",
    "Premiere Pro alternative South Africa",
  ],
});

export default function SwitchingPage() {
  const rows = adobeRows();
  const office = officeRows();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <PageIntro kicker="From Adobe" title="What stands in for what — and how ready it is">
        <p>
          iCreate is not Creative Cloud with a different logo. Each row below
          is a stand-in, labelled with the same status the launcher ships.
          Alpha is an early preview. Beta is usable with gaps. None of these
          apps are marked stable yet.
        </p>
      </PageIntro>

      <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted">
        <span>
          <StatusBadge status="beta" /> {STATUS_COPY.beta.short}
        </span>
        <span>
          <StatusBadge status="alpha" /> {STATUS_COPY.alpha.short}
        </span>
        <span>
          <StatusBadge status="none" /> We do not have this yet
        </span>
      </div>

      <ul className="mt-8 grid gap-3 lg:hidden">
        {rows.map((row) => (
          <li key={row.adobe} className="rounded-xl border border-line p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">{row.adobe}</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-muted">
                  {row.app ? (
                    <Image
                      src={iconSrc(row.app)}
                      alt=""
                      width={24}
                      height={24}
                      className="rounded"
                    />
                  ) : null}
                  {row.icreate}
                </p>
              </div>
              <StatusBadge status={row.status} />
            </div>
            <p className="mt-3 text-sm text-muted">{row.note}</p>
          </li>
        ))}
      </ul>

      <div className="mt-8 hidden overflow-x-auto rounded-xl border border-line lg:block">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-line bg-sunken/80 font-mono text-xs tracking-wide text-faint uppercase">
            <tr>
              <th className="px-4 py-3 font-medium">Adobe app</th>
              <th className="px-4 py-3 font-medium">iCreate app</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Honest take</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.adobe} className="border-t border-line align-top">
                <td className="px-4 py-4 font-medium">{row.adobe}</td>
                <td className="px-4 py-4">
                  {row.app ? (
                    <span className="flex items-center gap-2">
                      <Image
                        src={iconSrc(row.app)}
                        alt=""
                        width={28}
                        height={28}
                        className="rounded"
                      />
                      {row.icreate}
                    </span>
                  ) : (
                    <span className="text-muted">{row.icreate}</span>
                  )}
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-4 py-4 text-muted">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold">Office apps, same launcher</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          These are not Adobe, but they live in the same catalogue if you are
          leaving a Microsoft 365 bundle at the same time.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {office.map((app) => (
            <li key={app.id} className="rounded-xl border border-line p-4">
              <p className="font-display font-semibold">{shortTitle(app)}</p>
              <p className="mt-1 text-sm text-muted">Stands in for {app.replaces}</p>
              <div className="mt-2">
                <StatusBadge status={app.status} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 text-sm text-muted">
        Ready to try the beta apps?{" "}
        <Link href="/download" className="text-accent-ink underline">
          Download the launcher
        </Link>
        . Read{" "}
        <Link href="/learn/alpha-and-beta" className="text-accent-ink underline">
          what the labels mean
        </Link>{" "}
        before you move a paying job.
      </p>
    </div>
  );
}
