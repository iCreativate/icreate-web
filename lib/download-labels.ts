import type { Platform } from "@/lib/github";

/** User-facing download label — never show ArtCraft / raw cargo names. */
export function launcherDownloadLabel(platform: Platform, assetName: string) {
  const lower = assetName.toLowerCase();
  if (platform === "mac") {
    return lower.includes("universal")
      ? "iCreate Launcher · macOS (Intel & Apple silicon)"
      : "iCreate Launcher · macOS";
  }
  if (platform === "windows") {
    return lower.endsWith(".msi")
      ? "iCreate Launcher · Windows installer"
      : "iCreate Launcher · Windows";
  }
  if (lower.endsWith(".deb")) return "iCreate Launcher · Linux (.deb)";
  if (lower.endsWith(".appimage")) return "iCreate Launcher · Linux (AppImage)";
  return "iCreate Launcher · Linux";
}

export function launcherSaveAsName(platform: Platform, assetName: string) {
  const lower = assetName.toLowerCase();
  if (platform === "mac") return "iCreate-Launcher-macOS.dmg";
  if (platform === "windows") {
    return lower.endsWith(".zip")
      ? "iCreate-Launcher-Windows-portable.zip"
      : "iCreate-Launcher-Windows.msi";
  }
  if (lower.endsWith(".deb")) return "iCreate-Launcher-Linux.deb";
  return "iCreate-Launcher-Linux.AppImage";
}
