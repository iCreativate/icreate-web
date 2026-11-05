import Image from "next/image";
import {
  iconSrc,
  isCatalogueOnly,
  rgb,
  shortTitle,
  type CraftApp,
} from "@/lib/apps";
import { StatusBadge } from "@/components/StatusBadge";

export function AppCard({ app }: { app: CraftApp }) {
  const title = shortTitle(app);
  return (
    <article
      className="flex gap-3 rounded-xl border border-line bg-sunken/60 p-4"
      style={{ borderColor: `${rgb(app.color)}44` }}
    >
      <Image
        src={iconSrc(app)}
        alt=""
        width={48}
        height={48}
        className="h-12 w-12 shrink-0 rounded-lg"
      />
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-base font-semibold">{title}</h3>
          <StatusBadge status={app.status} size="sm" />
        </div>
        <p className="mt-1 text-sm text-muted">{app.description}</p>
        {app.replaces ? (
          <p className="mt-2 font-mono text-[11px] tracking-wide text-faint uppercase">
            Stands in for {app.replaces}
          </p>
        ) : null}
        {app.licence ? (
          <p className="mt-1 font-mono text-[11px] tracking-wide text-faint">
            Licence: {app.licence}
          </p>
        ) : null}
        {isCatalogueOnly(app.status) ? (
          <p className="mt-2 text-xs text-faint">
            No download yet — installer arrives when a real release exists.
          </p>
        ) : null}
      </div>
    </article>
  );
}
