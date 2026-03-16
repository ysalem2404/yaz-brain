#!/usr/bin/env node
/**
 * Import Fabric space images into Notion "Yaz Brain" database.
 * Uses the Notion REST API directly with the correct data source.
 * 
 * Usage:
 *   NOTION_TOKEN=secret_xxx node scripts/import-fabric-images.mjs
 */

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DATABASE_ID = "2cb930af-7f0d-4242-a19d-b66f36cebde9";

if (!NOTION_TOKEN) {
  console.error("Error: NOTION_TOKEN required");
  process.exit(1);
}

const GITHUB_BASE = "https://ysalem2404.github.io/yaz-brain/img/notes/";

// Fabric images manifest
const FABRIC_IMAGES = [
  { space: "AI_Era", filename: "IMG_2578.jpeg", dest: "fabric-ai-era-IMG_2578.jpeg" },
  { space: "AI_Era", filename: "IMG_2579.jpeg", dest: "fabric-ai-era-IMG_2579.jpeg" },
  { space: "AI_Era", filename: "IMG_2581.jpeg", dest: "fabric-ai-era-IMG_2581.jpeg" },
  { space: "AI_Era", filename: "IMG_2590.jpeg", dest: "fabric-ai-era-IMG_2590.jpeg" },
  { space: "AI_Era", filename: "IMG_2591.jpeg", dest: "fabric-ai-era-IMG_2591.jpeg" },
  { space: "AI_Era", filename: "IMG_2605.jpeg", dest: "fabric-ai-era-IMG_2605.jpeg" },
  { space: "AI_Era", filename: "photo-1.jpg", dest: "fabric-ai-era-photo-1.jpg" },
  { space: "Automation", filename: "IMG_2580.jpeg", dest: "fabric-automation-IMG_2580.jpeg" },
  { space: "BitLoop_LLC", filename: "IMG_2582.jpeg", dest: "fabric-bitloop-llc-IMG_2582.jpeg" },
  { space: "BitLoop_LLC", filename: "IMG_2592.jpeg", dest: "fabric-bitloop-llc-IMG_2592.jpeg" },
  { space: "BitLoop_LLC", filename: "IMG_2593.jpeg", dest: "fabric-bitloop-llc-IMG_2593.jpeg" },
  { space: "BitLoop_LLC", filename: "IMG_2597.jpeg", dest: "fabric-bitloop-llc-IMG_2597.jpeg" },
  { space: "BitLoop_LLC", filename: "IMG_2652.jpeg", dest: "fabric-bitloop-llc-IMG_2652.jpeg" },
  { space: "Health", filename: "IMG_2588.jpeg", dest: "fabric-health-IMG_2588.jpeg" },
  { space: "Health", filename: "IMG_2630.jpeg", dest: "fabric-health-IMG_2630.jpeg" },
  { space: "Invest_", filename: "IMG_2621.jpeg.jpeg", dest: "fabric-invest--IMG_2621.jpeg" },
  { space: "Invest_", filename: "IMG_2622.jpeg", dest: "fabric-invest--IMG_2622.jpeg" },
  { space: "Invest_", filename: "IMG_2623.jpeg.jpeg", dest: "fabric-invest--IMG_2623.jpeg" },
  { space: "Invest_", filename: "IMG_2624.jpeg", dest: "fabric-invest--IMG_2624.jpeg" },
  { space: "Invest_", filename: "IMG_2625.jpeg", dest: "fabric-invest--IMG_2625.jpeg" },
  { space: "Invest_", filename: "IMG_2626.jpeg", dest: "fabric-invest--IMG_2626.jpeg" },
  { space: "Invest_", filename: "IMG_2627.jpeg", dest: "fabric-invest--IMG_2627.jpeg" },
  { space: "Inbox", filename: "IMG_2629.jpeg", dest: "fabric-inbox-IMG_2629.jpeg" },
  { space: "Inbox", filename: "IMG_2638.jpeg", dest: "fabric-inbox-IMG_2638.jpeg" },
  { space: "Inbox", filename: "IMG_2646.jpeg", dest: "fabric-inbox-IMG_2646.jpeg" },
  { space: "Inbox", filename: "IMG_2672.jpeg", dest: "fabric-inbox-IMG_2672.jpeg" },
  { space: "Inbox", filename: "IMG_2682.jpeg", dest: "fabric-inbox-IMG_2682.jpeg" },
  { space: "Inbox", filename: "IMG_2683.jpeg", dest: "fabric-inbox-IMG_2683.jpeg" },
  { space: "Inbox", filename: "IMG_2687.jpeg", dest: "fabric-inbox-IMG_2687.jpeg" },
  { space: "Inbox", filename: "IMG_2689.jpeg", dest: "fabric-inbox-IMG_2689.jpeg" },
];

const SPACE_TOPICS = {
  AI_Era: "AI Era",
  Automation: "Productivity",
  BitLoop_LLC: "Tech Infrastructure",
  Health: "Health",
  Invest_: "Investment",
  Inbox: "Other",
};

const SPACE_NAMES = {
  AI_Era: "Research",
  Automation: "Work",
  BitLoop_LLC: "Work",
  Health: "Personal",
  Invest_: "Research",
  Inbox: "Personal",
};

const TAGS_MAP = {
  AI_Era: ["ai"],
  Automation: ["automation"],
  BitLoop_LLC: ["cloud"],
  Health: ["health"],
  Invest_: ["stocks"],
  Inbox: [],
};

async function createPage(image) {
  const space = image.space;
  const topic = SPACE_TOPICS[space] || "Other";
  const spaceName = SPACE_NAMES[space] || "Personal";
  const tags = TAGS_MAP[space] || [];
  
  const fname = image.filename.split(".")[0];
  const title = `${fname.replace(/_/g, " ")} (${space.replace(/_/g, " ")})`;
  const imageUrl = `${GITHUB_BASE}${image.dest}`;

  const properties = {
    Title: { title: [{ text: { content: title } }] },
    Type: { select: { name: "Image" } },
    Source: { select: { name: "Fabric" } },
    Topic: { select: { name: topic } },
    Status: { select: { name: "Inbox" } },
    Space: { select: { name: spaceName } },
    "Image URL": { url: imageUrl },
  };

  if (tags.length > 0) {
    properties.Tags = { multi_select: tags.map((t) => ({ name: t })) };
  }

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: DATABASE_ID },
      properties,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to create "${title}": ${res.status} ${text}`);
  }

  return res.json();
}

async function checkExisting() {
  // Check if Fabric Image entries already exist
  const res = await fetch(`https://api.notion.com/v1/data_sources/2c2e3d75-3aef-4be1-9ba8-26055fb9b8a0/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      "Notion-Version": "2025-09-03",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      page_size: 10,
      filter: {
        and: [
          { property: "Source", select: { equals: "Fabric" } },
          { property: "Type", select: { equals: "Image" } },
        ],
      },
    }),
  });

  if (!res.ok) {
    console.log("  Could not check existing entries, will proceed with import");
    return 0;
  }

  const data = await res.json();
  return data.results?.length || 0;
}

async function main() {
  console.log("Checking for existing Fabric Image entries...");
  const existing = await checkExisting();
  
  if (existing > 0) {
    console.log(`  Found ${existing} existing Fabric Image entries. Skipping import.`);
    return;
  }

  console.log(`Importing ${FABRIC_IMAGES.length} Fabric space images to Notion...`);

  let created = 0;
  for (const img of FABRIC_IMAGES) {
    try {
      await createPage(img);
      created++;
      if (created % 5 === 0) {
        console.log(`  Created ${created}/${FABRIC_IMAGES.length}...`);
      }
      // Rate limit: max 3 requests/second
      await new Promise((r) => setTimeout(r, 350));
    } catch (err) {
      console.error(`  Error: ${err.message}`);
    }
  }

  console.log(`Done! Created ${created}/${FABRIC_IMAGES.length} Fabric image entries.`);
}

main().catch((err) => {
  console.error("Failed:", err.message);
  process.exit(1);
});
