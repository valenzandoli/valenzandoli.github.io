import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Locale } from "@/content/dictionaries/i18n-config";

export type Collection = "blog" | "journey";

export type ContentMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

export type ContentEntry = ContentMeta & { contentHtml: string };

function collectionDir(collection: Collection, locale: Locale) {
  return path.join(process.cwd(), "content", collection, locale);
}

export function getAllSlugs(collection: Collection, locale: Locale): string[] {
  const dir = collectionDir(collection, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllEntries(collection: Collection, locale: Locale): ContentMeta[] {
  return getAllSlugs(collection, locale)
    .map((slug) => {
      const file = fs.readFileSync(
        path.join(collectionDir(collection, locale), `${slug}.md`),
        "utf8"
      );
      const { data } = matter(file);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        tags: (data.tags as string[]) ?? [],
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getEntry(
  collection: Collection,
  locale: Locale,
  slug: string
): Promise<ContentEntry | null> {
  const filePath = path.join(collectionDir(collection, locale), `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    tags: (data.tags as string[]) ?? [],
    contentHtml: processed.toString(),
  };
}
