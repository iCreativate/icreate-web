export type Platform = "mac" | "windows" | "linux";

export type ReleaseAsset = {
  name: string;
  url: string;
  size: number;
};

export type LauncherRelease = {
  tag: string;
  name: string;
  publishedAt: string | null;
  htmlUrl: string;
  assets: ReleaseAsset[];
};

export const PLATFORM_LABEL: Record<Platform, string> = {
  mac: "macOS",
  windows: "Windows",
  linux: "Linux",
};

function scoreAsset(name: string, platform: Platform) {
  const n = name.toLowerCase();
  if (n.endsWith(".blockmap") || n.endsWith(".sha256") || n.endsWith(".yml") || n.endsWith(".zsync")) {
    return 0;
  }
  // Prefer the iCreate-named stem over leftover ArtCraft-named assets.
  const brandBonus = n.startsWith("icreate-launcher")
    ? 10
    : n.startsWith("artcraft-launcher")
      ? 0
      : 5;
  if (platform === "mac") {
    if (n.includes("mac") || n.includes("darwin") || n.endsWith(".dmg")) {
      if (n.includes("universal")) return brandBonus + 5;
      if (n.includes("arm64") || n.includes("aarch64")) return brandBonus + 4;
      if (n.endsWith(".dmg")) return brandBonus + 3;
      return brandBonus + 2;
    }
  }
  if (platform === "windows") {
    if (n.includes("win") || n.endsWith(".msi") || n.endsWith(".exe")) {
      if (n.endsWith(".msi")) return brandBonus + 5;
      if (n.endsWith(".exe")) return brandBonus + 4;
      return brandBonus + 2;
    }
  }
  if (platform === "linux") {
    if (
      n.includes("linux") ||
      n.endsWith(".appimage") ||
      n.endsWith(".deb") ||
      n.endsWith(".rpm")
    ) {
      if (n.endsWith(".appimage")) return brandBonus + 5;
      if (n.endsWith(".deb")) return brandBonus + 4;
      return brandBonus + 2;
    }
  }
  return 0;
}

export function pickAsset(release: LauncherRelease | null, platform: Platform) {
  if (!release) return null;
  let best: ReleaseAsset | null = null;
  let bestScore = 0;
  for (const asset of release.assets) {
    const score = scoreAsset(asset.name, platform);
    if (score > bestScore) {
      best = asset;
      bestScore = score;
    }
  }
  return best;
}
