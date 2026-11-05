import { NextResponse } from "next/server";
import { pickAsset, type Platform } from "@/lib/github";
import { getLatestReleaseLive } from "@/lib/github-release";

const PLATFORMS = new Set<Platform>(["mac", "windows", "linux"]);

type Params = { params: Promise<{ platform: string }> };

export async function GET(_request: Request, { params }: Params) {
  const { platform: raw } = await params;
  const platform = raw.toLowerCase() as Platform;
  if (!PLATFORMS.has(platform)) {
    return NextResponse.json(
      { error: "Unknown platform. Use mac, windows or linux." },
      { status: 404 },
    );
  }

  const release = await getLatestReleaseLive();
  const asset = pickAsset(release, platform);
  if (!asset) {
    return NextResponse.json(
      {
        error: "No installer is published for this platform yet.",
        platform,
      },
      { status: 404 },
    );
  }

  // First-party URL for users; the file is fetched from the release CDN.
  return NextResponse.redirect(asset.url, 302);
}
