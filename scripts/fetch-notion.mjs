#!/usr/bin/env node
/**
 * Fetch all items from Notion "Yaz Brain" database and write to public/data/brain.json
 *
 * Usage:
 *   NOTION_TOKEN=secret_xxx node scripts/fetch-notion.mjs
 *
 * Environment variables:
 *   NOTION_TOKEN - Notion integration token (required)
 *   NOTION_DATABASE_ID - Database ID (default: 2cb930af-7f0d-4242-a19d-b66f36cebde9)
 */

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DATABASE_ID = process.env.NOTION_DATABASE_ID || "2cb930af-7f0d-4242-a19d-b66f36cebde9";

if (!NOTION_TOKEN) {
  console.error("Error: NOTION_TOKEN environment variable is required.");
  console.error("Create an integration at https://www.notion.so/my-integrations");
  console.error("Then share your database with the integration.");
  process.exit(1);
}

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_FILE = join(__dirname, "..", "public", "data", "brain.json");

async function queryNotion(startCursor) {
  const body = {
    page_size: 100,
    sorts: [{ property: "Date Added", direction: "descending" }],
    filter: {
      property: "Status",
      select: { does_not_equal: "Archived" },
    },
  };
  if (startCursor) body.start_cursor = startCursor;

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      "Notion-Version": "2025-09-03",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Notion API error ${res.status}: ${text}`);
  }

  return res.json();
}

function extractText(richTextArray) {
  if (!richTextArray || !Array.isArray(richTextArray)) return "";
  return richTextArray.map((t) => t.plain_text || "").join("");
}

function parseItem(page, index) {
  const p = page.properties;

  return {
    id: index + 1,
    notionId: page.id.replace(/-/g, ""),
    title: extractText(p.Title?.title) || "Untitled",
    content: p.Content?.rich_text ? extractText(p.Content.rich_text) : "",
    summary: p.Summary?.rich_text ? extractText(p.Summary.rich_text) : "",
    url: p["URL"]?.url || "",
    topic: p.Topic?.select?.name || "Other",
    type: p.Type?.select?.name || "Note",
    source: p.Source?.select?.name || "Manual",
    space: p.Space?.select?.name || "Personal",
    status: p.Status?.select?.name || "Inbox",
    rating: p.Rating?.select?.name || "",
    tags: (p.Tags?.multi_select || []).map((t) => t.name).join(","),
    imageUrl: p["Image URL"]?.url || "",
    dateAdded: page.created_time || "",
    lastEdited: page.last_edited_time || "",
  };
}

async function main() {
  console.log("Fetching items from Notion...");

  let allPages = [];
  let hasMore = true;
  let startCursor = undefined;

  while (hasMore) {
    const response = await queryNotion(startCursor);
    allPages = allPages.concat(response.results);
    hasMore = response.has_more;
    startCursor = response.next_cursor;
    console.log(`  Fetched ${allPages.length} items so far...`);
  }

  const items = allPages.map((page, i) => parseItem(page, i));

  mkdirSync(dirname(OUT_FILE), { recursive: true });
  writeFileSync(OUT_FILE, JSON.stringify(items, null, 2));

  console.log(`Done! Wrote ${items.length} items to ${OUT_FILE}`);
}

main().catch((err) => {
  console.error("Failed:", err.message);
  process.exit(1);
});
