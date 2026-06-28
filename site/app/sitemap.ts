import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { locales } from "@/content/dictionaries/i18n-config";
import { getAllSlugs } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/projects", "/fitness", "/fitness/journey", "/blog"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const p of staticPaths) {
      entries.push({ url: `${SITE_URL}/${locale}${p}` });
    }
    for (const slug of getAllSlugs("blog", locale)) {
      entries.push({ url: `${SITE_URL}/${locale}/blog/${slug}` });
    }
    for (const slug of getAllSlugs("journey", locale)) {
      entries.push({ url: `${SITE_URL}/${locale}/fitness/journey/${slug}` });
    }
  }

  return entries;
}
