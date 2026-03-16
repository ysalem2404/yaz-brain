# 🧠 Yaz Brain — AI Notes Hub

A Pinterest-style personal knowledge hub powered by Notion as the backend. Browse, search, and filter your AI notes, bookmarks, highlights, and links across topics like AI, Investment, Health, Cybersecurity, and more.

![Gallery View](https://img.shields.io/badge/view-gallery-blue)
![Board View](https://img.shields.io/badge/view-board-green)
![Table View](https://img.shields.io/badge/view-table-orange)
![Dark Mode](https://img.shields.io/badge/theme-dark%20mode-black)

## Features

- **Pinterest-style masonry gallery** with topic cover images
- **Board view** grouped by topic with item counts
- **Table view** with sortable columns
- **Inbox view** for unprocessed items
- **Full-text search** across titles, content, summaries, and tags
- **Filters** by Topic, Type, and Source
- **Dark mode** with system preference detection
- **Detail overlay** — click any card to see full content
- **Auto-sync** from Notion via GitHub Actions (daily at 2am ET)

## Architecture

```
Notion Database ──→ GitHub Actions ──→ Static JSON ──→ React App ──→ GitHub Pages
     (backend)        (daily sync)       (data)       (frontend)      (hosting)
```

- **Notion** stores all your notes, bookmarks, and metadata
- **GitHub Actions** runs daily to fetch data from Notion API → generates `brain.json`
- **React + Vite** renders the static site with all views
- **GitHub Pages** hosts the app for free

## Setup

### 1. Create a Notion Integration

1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Create a new integration, name it "Yaz Brain Sync"
3. Copy the **Internal Integration Token**
4. Share your "Yaz Brain" database with the integration

### 2. Add GitHub Secret

1. Go to your repo → Settings → Secrets and variables → Actions
2. Add a new secret: `NOTION_TOKEN` = your integration token

### 3. Deploy

Push to `main` — GitHub Actions will:
1. Fetch latest data from Notion
2. Build the React app
3. Deploy to GitHub Pages

### Manual Refresh

To refresh data outside the daily schedule:
- Go to Actions → "Deploy to GitHub Pages" → Run workflow

## Local Development

```bash
# Install dependencies
npm install

# Fetch data from Notion (requires NOTION_TOKEN env var)
NOTION_TOKEN=secret_xxx node scripts/fetch-notion.mjs

# Start dev server
npm run dev
```

## Project Structure

```
├── public/
│   ├── data/brain.json      # Auto-generated from Notion
│   └── img/topic-*.jpg      # Topic cover images
├── src/
│   ├── App.tsx               # Main app with all views
│   ├── types.ts              # TypeScript types & constants
│   ├── index.css             # Tailwind + custom styles
│   └── main.tsx              # Entry point
├── scripts/
│   └── fetch-notion.mjs      # Notion API → brain.json
└── .github/workflows/
    └── deploy.yml             # Auto-deploy + daily Notion sync
```

## Adding Content

Add notes directly in your [Notion database](https://www.notion.so/2cb930af7f0d4242a19db66f36cebde9):
- Set **Title**, **Content**, **Topic**, **Type**, and **Tags**
- Changes appear on the site after the next sync (daily, or trigger manually)

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v3
- Lucide React icons
- Notion API (via fetch script)
- GitHub Pages + GitHub Actions
