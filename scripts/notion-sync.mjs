import { Client } from "@notionhq/client";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
  console.error("Missing NOTION_TOKEN or NOTION_DATABASE_ID env vars.");
  process.exit(1);
}

const notion = new Client({ auth: NOTION_TOKEN });

const LOG_DIRS = [
  path.resolve("site/content/log/en"),
  path.resolve("site/content/log/es"),
];

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
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

function getSelect(selectProp) {
  return selectProp?.select?.name ?? "";
}

function getNumber(numberProp) {
  const val = numberProp?.number;
  return val != null ? String(val) : "";
}

async function processPage(page) {
  const props = page.properties;

  const title = getPlainText(props.Name?.title ?? props.Title?.title ?? []);
  const date = getDate(props.Date);
  const excerpt = getPlainText(props.Detalle?.rich_text ?? props.Excerpt?.rich_text ?? []);
  const tags = getTags(props.Tags);
  const feeling = getSelect(props.Feeling) || getPlainText(props.Feeling?.rich_text ?? []);
  const bodyweight = getNumber(props.Weight) || getNumber(props["Peso corporal"]);
  const slugProp = getPlainText(props.Slug?.rich_text ?? []);
  const slug = slugProp ? slugify(slugProp) : slugify(title);

  if (!title || !slug) {
    console.log("  Skipping page with no title or slug.");
    return;
  }

  console.log(`  Processing: ${title} (${slug})`);

  const tagsYaml = JSON.stringify(tags);
  const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
excerpt: "${excerpt.replace(/"/g, '\\"').replace(/\n/g, "\\n")}"
tags: ${tagsYaml}
feeling: "${feeling.replace(/"/g, '\\"')}"
bodyweight: "${bodyweight}"
---
`;

  for (const dir of LOG_DIRS) {
    const outputPath = path.join(dir, `${slug}.md`);
    writeFileSync(outputPath, frontmatter, "utf8");
    console.log(`  Written: ${outputPath}`);
  }
}

async function main() {
  for (const dir of LOG_DIRS) mkdirSync(dir, { recursive: true });

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
