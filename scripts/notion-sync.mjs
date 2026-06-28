import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { createWriteStream } from "fs";
import { get as httpsGet } from "https";
import { get as httpGet } from "http";
import path from "path";

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
  console.error("Missing NOTION_TOKEN or NOTION_DATABASE_ID env vars.");
  process.exit(1);
}

const notion = new Client({ auth: NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

const JOURNEY_DIR = path.resolve("site/content/journey/en");
const IMAGES_DIR = path.resolve("site/public/images/journey");

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const get = url.startsWith("https") ? httpsGet : httpGet;
    const file = createWriteStream(dest);
    get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        downloadImage(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
    }).on("error", reject);
  });
}

function getPlainText(richText) {
  return richText?.map((t) => t.plain_text).join("") ?? "";
}

function getDate(dateProp) {
  return dateProp?.date?.start ?? new Date().toISOString().slice(0, 10);
}

function getTags(multiSelect) {
  return multiSelect?.multi_select?.map((t) => t.name) ?? [];
}

async function processPage(page) {
  const props = page.properties;

  const title = getPlainText(props.Name?.title ?? props.Title?.title ?? []);
  const date = getDate(props.Date);
  const excerpt = getPlainText(props.Excerpt?.rich_text ?? []);
  const tags = getTags(props.Tags);
  const slugProp = getPlainText(props.Slug?.rich_text ?? []);
  const slug = slugProp || slugify(title);

  if (!title || !slug) {
    console.log("  Skipping page with no title or slug.");
    return;
  }

  console.log(`  Processing: ${title} (${slug})`);

  // Get markdown blocks
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  let mdContent = n2m.toMarkdownString(mdBlocks).parent;

  // Download images and replace URLs
  const imageDir = path.join(IMAGES_DIR, slug);
  const imageRegex = /!\[([^\]]*)\]\((https?:\/\/[^)]+)\)/g;
  let match;
  let imageIndex = 0;
  const downloads = [];

  const replacements = [];
  while ((match = imageRegex.exec(mdContent)) !== null) {
    const [fullMatch, alt, url] = match;
    const ext = url.includes(".png") ? "png" : url.includes(".gif") ? "gif" : "jpg";
    const filename = `${imageIndex++}.${ext}`;
    const localPath = `/images/journey/${slug}/${filename}`;
    replacements.push({ fullMatch, alt, url, filename, localPath });
    downloads.push({ url, filename });
  }

  if (downloads.length > 0) {
    mkdirSync(imageDir, { recursive: true });
    for (const { url, filename } of downloads) {
      const dest = path.join(imageDir, filename);
      try {
        await downloadImage(url, dest);
        console.log(`    Downloaded image: ${filename}`);
      } catch (e) {
        console.warn(`    Failed to download image: ${url} — ${e.message}`);
      }
    }
    for (const { fullMatch, alt, localPath } of replacements) {
      mdContent = mdContent.replace(fullMatch, `![${alt}](${localPath})`);
    }
  }

  const tagsYaml = JSON.stringify(tags);
  const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
excerpt: "${excerpt.replace(/"/g, '\\"')}"
tags: ${tagsYaml}
---

`;

  const outputPath = path.join(JOURNEY_DIR, `${slug}.md`);
  writeFileSync(outputPath, frontmatter + mdContent, "utf8");
  console.log(`  Written: ${outputPath}`);
}

async function main() {
  mkdirSync(JOURNEY_DIR, { recursive: true });
  mkdirSync(IMAGES_DIR, { recursive: true });

  console.log("Querying Notion database...");
  const response = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  console.log(`Found ${response.results.length} published entries.`);

  for (const page of response.results) {
    await processPage(page);
  }

  console.log("Sync complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
