export interface BrainItem {
  id: number;
  notionId: string;
  title: string;
  content: string | null;
  summary: string | null;
  url: string | null;
  topic: string | null;
  type: string | null;
  source: string | null;
  space: string | null;
  status: string | null;
  rating: string | null;
  tags: string | null;
  dateAdded: string | null;
  lastEdited: string | null;
}

export type ViewMode = "gallery" | "board" | "table" | "inbox";

export const TOPICS = [
  "AI Era", "Investment", "Health", "Cybersecurity",
  "Career", "Tech Infrastructure", "Real Estate", "Finance",
  "Productivity", "Other",
] as const;

export const TYPES = [
  "Note", "Bookmark", "Highlight", "Quote", "Link",
  "YouTube Summary", "LinkedIn Page", "Article", "Image", "PDF",
] as const;

export const SOURCES = ["Manual", "MyMind", "Fabric", "Web Clipper"] as const;

export const TOPIC_COLORS: Record<string, string> = {
  "AI Era": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "Investment": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "Health": "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  "Cybersecurity": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  "Career": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  "Tech Infrastructure": "bg-slate-500/10 text-slate-600 dark:text-slate-400",
  "Real Estate": "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  "Finance": "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  "Productivity": "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  "Other": "bg-gray-500/10 text-gray-600 dark:text-gray-400",
};

export const TOPIC_IMAGES: Record<string, string> = {
  "AI Era": "img/topic-ai.jpg",
  "Investment": "img/topic-investment.jpg",
  "Finance": "img/topic-investment.jpg",
  "Health": "img/topic-health.jpg",
  "Cybersecurity": "img/topic-cybersecurity.jpg",
  "Career": "img/topic-career.jpg",
  "Tech Infrastructure": "img/topic-cloud.jpg",
  "Productivity": "img/topic-automation.jpg",
  "Real Estate": "img/topic-projects.jpg",
  "Other": "img/topic-general.jpg",
};

export const TOPIC_EMOJIS: Record<string, string> = {
  "AI Era": "🤖",
  "Investment": "💰",
  "Health": "🏥",
  "Cybersecurity": "🔒",
  "Career": "💼",
  "Tech Infrastructure": "🏗️",
  "Real Estate": "🏠",
  "Finance": "💵",
  "Productivity": "⚡",
  "Other": "📌",
};
