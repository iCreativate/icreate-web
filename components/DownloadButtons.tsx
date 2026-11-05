"use client";

import { useSyncExternalStore } from "react";
import {
  PLATFORM_LABEL,
  pickAsset,
  type LauncherRelease,
  type Platform,
} from "@/lib/github";
import { GITHUB_RELEASES } from "@/lib/site";

function detectPlatform(): Platform | null {
  const ua = navigator.userAgent;
  if (/Mac|iPhone|iPad/.test(ua)) return "mac";
  if (/Win/.test(ua)) return "windows";
  if (/Linux/.test(ua) && !/Android/.test(ua)) return "linux";
  return null;
}

function subscribe() {
  return () => {};
}

export function DownloadButtons({
  release,
}: {
  release: LauncherRelease | null;
}) {
  const platform = useSyncExternalStore(
    subscribe,
    detectPlatform,
    () => null,
  );

  const platforms: Platform[] = ["mac", "windows", "linux"];

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {platforms.map((id) => {
        const asset = pickAsset(release, id);
        const recommended = platform === id;
        const href = asset?.url ?? GITHUB_RELEASES;
        return (
          <a
            key={id}
            href={href}
            className={
              recommended
                ? "btn-primary justify-center py-4 text-center"
                : "btn-ghost justify-center py-4 text-center"
            }
          >
            <span className="block font-display text-lg">
              {PLATFORM_LABEL[id]}
            </span>
            <span className="mt-1 block text-xs opacity-80">
              {recommended ? "Detected on this device · " : ""}
              {asset ? asset.name : "Open latest GitHub release"}
            </span>
          </a>
        );
      })}
    </div>
  );
}
