import { cacheLife, cacheTag } from "next/cache";
import type { LauncherRelease } from "@/lib/github";
import { LAUNCHER_REPO } from "@/lib/site";

type GithubAsset = {
  name: string;
  browser_download_url: string;
  size: number;
};

type GithubRelease = {
  tag_name: string;
  name: string | null;
  published_at: string | null;
  html_url: string;
  assets: GithubAsset[];
};

async function fetchLatestReleaseFromGitHub(): Promise<LauncherRelease | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${LAUNCHER_REPO}/releases/latest`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "icreate-web",
        },
        // Download API must not serve a stale ArtCraft-named asset for hours.
        cache: "no-store",
      },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as GithubRelease;
    return {
      tag: data.tag_name,
      name: data.name ?? data.tag_name,
      publishedAt: data.published_at,
      htmlUrl: data.html_url,
      assets: (data.assets ?? []).map((asset) => ({
        name: asset.name,
        url: asset.browser_download_url,
        size: asset.size,
      })),
    };
  } catch {
    return null;
  }
}

/** Fresh release metadata — used by `/api/download/*` so renames go live immediately. */
export async function getLatestReleaseLive(): Promise<LauncherRelease | null> {
  return fetchLatestReleaseFromGitHub();
}

/** Cached for the download page UI. */
export async function getLatestRelease(): Promise<LauncherRelease | null> {
  "use cache";
  cacheLife("minutes");
  cacheTag("github-release");
  return fetchLatestReleaseFromGitHub();
}
