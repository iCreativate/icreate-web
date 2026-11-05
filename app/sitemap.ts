import type { MetadataRoute } from "next";
import { GUIDES } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/apps",
    "/download",
    "/pricing",
    "/learn",
    "/about",
    "/switching-from-adobe",
    ...GUIDES.map((guide) => `/learn/${guide.slug}`),
  ];
  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/switching-from-adobe" ? 0.9 : 0.7,
  }));
}
