import type { Metadata } from "next";
import { absUrl, SITE_NAME, SITE_TAGLINE, ZA_KEYWORDS } from "@/lib/site";

export function pageMeta({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = absUrl(path);
  const fullTitle = title === SITE_NAME ? `${SITE_NAME} — ${SITE_TAGLINE}` : title;
  return {
    title,
    description,
    keywords: [...ZA_KEYWORDS, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_ZA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
