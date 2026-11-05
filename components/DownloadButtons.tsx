"use client";

import { useSyncExternalStore } from "react";
import type { Platform } from "@/lib/github";
import { PLATFORM_LABEL } from "@/lib/github";
import {
  siteDownloadPath,
  type DownloadOffers,
} from "@/lib/downloads";

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

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function DownloadButtons({
  offers,
}: {
  offers: DownloadOffers | null;
}) {
  const platform = useSyncExternalStore(subscribe, detectPlatform, () => null);
  const platforms: Platform[] = ["mac", "windows", "linux"];

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {platforms.map((id) => {
        const asset = offers?.platforms[id] ?? null;
        const recommended = platform === id;
        const available = Boolean(asset);
        const className = [
          "justify-center py-4 text-center",
          available
            ? recommended
              ? "btn-primary"
              : "btn-ghost"
            : "btn-ghost pointer-events-none opacity-50",
        ].join(" ");

        if (!available || !asset) {
          return (
            <div key={id} className={className} aria-disabled="true">
              <span className="block font-display text-lg">
                {PLATFORM_LABEL[id]}
              </span>
              <span className="mt-1 block text-xs opacity-80">
                Installer not published yet
              </span>
            </div>
          );
        }

        return (
          <a
            key={id}
            href={siteDownloadPath(id)}
            className={className}
            download={asset.name}
          >
            <span className="block font-display text-lg">
              Download for {PLATFORM_LABEL[id]}
            </span>
            <span className="mt-1 block text-xs opacity-80">
              {recommended ? "Recommended for this device · " : ""}
              {asset.name}
              {asset.size ? ` · ${formatSize(asset.size)}` : ""}
            </span>
          </a>
        );
      })}
    </div>
  );
}
