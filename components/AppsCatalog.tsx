"use client";

import { useMemo, useState } from "react";
import { AppCard } from "@/components/AppCard";
import { StatusBadge } from "@/components/StatusBadge";
import {
  STATUS_COPY,
  type CraftApp,
} from "@/lib/apps";

export function AppsCatalog({ apps }: { apps: CraftApp[] }) {
  const [category, setCategory] = useState<string | null>(null);
  const cats = useMemo(
    () => [...new Set(apps.map((app) => app.category))],
    [apps],
  );
  const visible = category
    ? apps.filter((app) => app.category === category)
    : apps;

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory(null)}
          className={`rounded-full border px-3 py-1.5 text-sm ${
            !category
              ? "border-accent bg-accent text-[#042436]"
              : "border-line text-muted hover:text-ink"
          }`}
        >
          All ({apps.length})
        </button>
        {cats.map((cat) => {
          const count = apps.filter((app) => app.category === cat).length;
          const active = category === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-3 py-1.5 text-sm ${
                active
                  ? "border-accent bg-accent text-[#042436]"
                  : "border-line text-muted hover:text-ink"
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {visible.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      <aside className="mt-12 grid gap-4 rounded-xl border border-line bg-sunken/50 p-5 sm:grid-cols-2">
        {(["beta", "alpha", "planned", "research"] as const).map((status) => (
          <div key={status}>
            <StatusBadge status={status} />
            <p className="mt-2 text-sm text-muted">{STATUS_COPY[status].meaning}</p>
          </div>
        ))}
      </aside>
    </>
  );
}
