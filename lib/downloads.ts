import { pickAsset, type LauncherRelease, type Platform } from "@/lib/github";

export type PlatformOffer = {
  name: string;
  size: number;
};

/** Client-safe download info — no GitHub URLs. */
export type DownloadOffers = {
  tag: string;
  name: string;
  publishedAt: string | null;
  platforms: Record<Platform, PlatformOffer | null>;
};

export function toDownloadOffers(
  release: LauncherRelease | null,
): DownloadOffers | null {
  if (!release) return null;
  const platforms = {
    mac: null,
    windows: null,
    linux: null,
  } as Record<Platform, PlatformOffer | null>;

  for (const id of ["mac", "windows", "linux"] as const) {
    const asset = pickAsset(release, id);
    platforms[id] = asset
      ? { name: asset.name, size: asset.size }
      : null;
  }

  return {
    tag: release.tag,
    name: release.name,
    publishedAt: release.publishedAt,
    platforms,
  };
}

export function siteDownloadPath(platform: Platform) {
  return `/api/download/${platform}`;
}
