import catalog from "@/content/apps.json";

export type AppStatus = "alpha" | "beta" | "stable" | "planned" | "research";

export type CraftApp = {
  id: string;
  name: string;
  display_name?: string;
  replaces?: string;
  description: string;
  icon: string;
  repo: string;
  status: AppStatus;
  category: string;
  kind?: string;
  publisher?: string;
  site?: string;
  color: [number, number, number];
  ink_light: [number, number, number];
  ink_dark: [number, number, number];
  early_access?: boolean;
  licence?: string;
};

type CatalogFile = { apps: CraftApp[] };

export const STATUS_COPY: Record<
  AppStatus,
  { label: string; short: string; meaning: string }
> = {
  alpha: {
    label: "Alpha",
    short: "Early preview",
    meaning:
      "Early preview. Expect missing tools, crashes and unfinished workflows. Fine to try; not a daily driver yet.",
  },
  beta: {
    label: "Beta",
    short: "Usable, unfinished",
    meaning:
      "Usable for real work, with gaps. Save often. Not a feature-for-feature match of the app it replaces.",
  },
  stable: {
    label: "Stable",
    short: "Production ready",
    meaning: "Ready for daily production use.",
  },
  planned: {
    label: "Planned",
    short: "Announced",
    meaning:
      "Announced in the catalogue. No installer or download yet — we never show a fake Install button.",
  },
  research: {
    label: "Research",
    short: "Exploring",
    meaning:
      "Exploring foundations and scope. No installer or download yet.",
  },
};

/** True when the catalogue must not offer Install/Download for this status. */
export function isCatalogueOnly(status: AppStatus) {
  return status === "planned" || status === "research";
}

export function loadApps(): CraftApp[] {
  return (catalog as CatalogFile).apps;
}

export function shortTitle(app: CraftApp) {
  return (app.display_name ?? app.name).replace(
    /\s*\(powered by .+\)\s*$/i,
    "",
  );
}

export function engineName(app: CraftApp) {
  const match = (app.display_name ?? "").match(/powered by (.+)\)$/i);
  return match?.[1] ?? app.name;
}

export function categories(apps = loadApps()) {
  return [...new Set(apps.map((app) => app.category))];
}

export function rgb(triplet: [number, number, number]) {
  return `rgb(${triplet[0]} ${triplet[1]} ${triplet[2]})`;
}

export function iconSrc(app: CraftApp) {
  return `/apps/${app.icon}`;
}
