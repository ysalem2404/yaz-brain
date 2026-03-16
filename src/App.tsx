import { useState, useEffect, useMemo } from "react";
import {
  Search, Moon, Sun, LayoutGrid, Columns3, Table2, Inbox,
  ExternalLink, Filter, X, Brain, Tag, ArrowUpRight
} from "lucide-react";
import type { BrainItem, ViewMode } from "./types";
import {
  TOPICS, TYPES, SOURCES,
  TOPIC_COLORS, TOPIC_IMAGES, TOPIC_EMOJIS
} from "./types";

const BASE = import.meta.env.BASE_URL;

function App() {
  const [items, setItems] = useState<BrainItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<ViewMode>("gallery");
  const [search, setSearch] = useState("");
  const [topicFilter, setTopicFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [isDark, setIsDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [selectedItem, setSelectedItem] = useState<BrainItem | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    fetch(`${BASE}data/brain.json`)
      .then((r) => r.json())
      .then((d: BrainItem[]) => {
        setItems(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    let result = items.filter(i => i.status !== "Archived");
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (i) =>
          i.title?.toLowerCase().includes(q) ||
          i.content?.toLowerCase().includes(q) ||
          i.summary?.toLowerCase().includes(q) ||
          i.tags?.toLowerCase().includes(q)
      );
    }
    if (topicFilter !== "all") result = result.filter((i) => i.topic === topicFilter);
    if (typeFilter !== "all") result = result.filter((i) => i.type === typeFilter);
    if (sourceFilter !== "all") result = result.filter((i) => i.source === sourceFilter);
    return result;
  }, [items, search, topicFilter, typeFilter, sourceFilter]);

  const stats = useMemo(() => {
    const active = items.filter(i => i.status !== "Archived");
    const topicCounts: Record<string, number> = {};
    active.forEach(i => {
      const t = i.topic || "Other";
      topicCounts[t] = (topicCounts[t] || 0) + 1;
    });
    const topTopics = Object.entries(topicCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([t]) => t);
    const inboxCount = active.filter(i => i.status === "Inbox").length;
    return { total: active.length, topTopics, inboxCount };
  }, [items]);

  const hasFilters = topicFilter !== "all" || typeFilter !== "all" || sourceFilter !== "all";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--bg-primary)" }}>
        <div className="flex items-center gap-3 text-[var(--text-secondary)]">
          <Brain className="w-6 h-6 animate-pulse" />
          <span className="text-lg font-medium">Loading Yaz Brain...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg-primary) 85%, transparent)" }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
                <Brain className="w-4.5 h-4.5 text-white" />
              </div>
              <div>
                <h1 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>Yaz Brain</h1>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-xs" style={{ color: "var(--text-secondary)" }}>
              <span className="font-medium">{stats.total} items</span>
              <span>Top: {stats.topTopics.join(", ")}</span>
              <span>{stats.inboxCount} in inbox</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg transition-colors hover:bg-[var(--bg-hover)]"
                style={{ color: "var(--text-secondary)" }}
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Controls */}
      <div className="sticky top-14 z-40 border-b" style={{ borderColor: "var(--border)", background: "var(--bg-primary)" }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* View switcher */}
            <div className="flex items-center rounded-lg p-0.5" style={{ background: "var(--bg-hover)" }}>
              {([
                ["gallery", LayoutGrid, "Gallery"],
                ["board", Columns3, "Board"],
                ["table", Table2, "Table"],
                ["inbox", Inbox, "Inbox"],
              ] as [ViewMode, typeof LayoutGrid, string][]).map(([v, Icon, label]) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    view === v
                      ? "bg-[var(--bg-card)] shadow-sm text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5" style={{ color: "var(--text-muted)" }} />
              <input
                type="text"
                placeholder="Search notes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg text-sm border bg-transparent outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all"
                style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-3.5 h-3.5" style={{ color: "var(--text-muted)" }} />
              <select
                value={topicFilter}
                onChange={(e) => setTopicFilter(e.target.value)}
                className="px-2 py-1.5 rounded-md text-xs border bg-transparent outline-none"
                style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
              >
                <option value="all">All Topics</option>
                {TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-2 py-1.5 rounded-md text-xs border bg-transparent outline-none"
                style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
              >
                <option value="all">All Types</option>
                {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <select
                value={sourceFilter}
                onChange={(e) => setSourceFilter(e.target.value)}
                className="px-2 py-1.5 rounded-md text-xs border bg-transparent outline-none"
                style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
              >
                <option value="all">All Sources</option>
                {SOURCES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              {hasFilters && (
                <button
                  onClick={() => { setTopicFilter("all"); setTypeFilter("all"); setSourceFilter("all"); }}
                  className="p-1.5 rounded-md hover:bg-[var(--bg-hover)] transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-2 text-xs" style={{ color: "var(--text-muted)" }}>
            {filtered.length} {filtered.length === 1 ? "item" : "items"}
            {hasFilters && " (filtered)"}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6">
        {view === "gallery" && <GalleryView items={filtered} onSelect={setSelectedItem} />}
        {view === "board" && <BoardView items={filtered} onSelect={setSelectedItem} />}
        {view === "table" && <TableView items={filtered} onSelect={setSelectedItem} />}
        {view === "inbox" && <InboxView items={filtered.filter(i => i.status === "Inbox")} onSelect={setSelectedItem} />}
      </main>

      {/* Detail overlay */}
      {selectedItem && (
        <DetailOverlay item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}

/* ─── Gallery View (Pinterest Masonry) ─────────────────────── */
function GalleryView({ items, onSelect }: { items: BrainItem[]; onSelect: (i: BrainItem) => void }) {
  if (!items.length) return <EmptyState />;
  return (
    <div className="masonry">
      {items.map((item) => (
        <MasonryCard key={item.id} item={item} onClick={() => onSelect(item)} />
      ))}
    </div>
  );
}

function MasonryCard({ item, onClick }: { item: BrainItem; onClick: () => void }) {
  const topic = item.topic || "Other";
  const topicImgSrc = TOPIC_IMAGES[topic] || TOPIC_IMAGES["Other"];
  const hasContent = item.content && item.content.length > 30;
  const hasImage = !!item.imageUrl;
  const tags = item.tags?.split(",").filter(Boolean) || [];

  return (
    <div
      className="masonry-item rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 border hover:shadow-lg"
      style={{ background: "var(--bg-card)", borderColor: "var(--border)", boxShadow: "var(--shadow)" }}
      onClick={onClick}
    >
      {/* Note image — show actual image from MyMind/Fabric */}
      {hasImage && (
        <div className="relative overflow-hidden">
          <img
            src={item.imageUrl!}
            alt={item.title}
            className="w-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
            style={{ maxHeight: "400px", background: "var(--bg-hover)" }}
            loading="lazy"
          />
          <span className={`absolute bottom-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-semibold ${TOPIC_COLORS[topic]}`}
            style={{ backdropFilter: "blur(8px)" }}
          >
            {topic}
          </span>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 p-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      )}

      {/* Topic image — only for items with short/no content and no note image */}
      {!hasImage && !hasContent && (
        <div className="relative h-36 overflow-hidden">
          <img
            src={`${BASE}${topicImgSrc}`}
            alt={topic}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <span className={`absolute bottom-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-semibold ${TOPIC_COLORS[topic]}`}
            style={{ backdropFilter: "blur(8px)" }}
          >
            {topic}
          </span>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 p-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      )}

      <div className="p-3.5">
        {hasContent && (
          <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold mb-2 ${TOPIC_COLORS[topic]}`}>
            {topic}
          </span>
        )}

        <h3 className="text-sm font-semibold leading-snug line-clamp-3 mb-1.5" style={{ color: "var(--text-primary)" }}>
          {item.title}
        </h3>

        {hasContent && (
          <p className="text-xs leading-relaxed line-clamp-4 mb-2" style={{ color: "var(--text-secondary)" }}>
            {item.content}
          </p>
        )}

        {!hasContent && item.summary && (
          <p className="text-xs leading-relaxed line-clamp-3 mb-2" style={{ color: "var(--text-secondary)" }}>
            {item.summary}
          </p>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded-full" style={{ background: "var(--bg-hover)", color: "var(--text-muted)" }}>
                #{tag.trim()}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-3 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
          <span className="text-[10px] font-medium" style={{ color: "var(--text-muted)" }}>
            {item.type || "Note"}
          </span>
          {item.dateAdded && (
            <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>
              {new Date(item.dateAdded).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Board View ───────────────────────────────────────────── */
function BoardView({ items, onSelect }: { items: BrainItem[]; onSelect: (i: BrainItem) => void }) {
  const groups = useMemo(() => {
    const map: Record<string, BrainItem[]> = {};
    TOPICS.forEach((t) => (map[t] = []));
    items.forEach((i) => {
      const t = i.topic || "Other";
      if (!map[t]) map[t] = [];
      map[t].push(i);
    });
    return Object.entries(map).filter(([, v]) => v.length > 0);
  }, [items]);

  if (!items.length) return <EmptyState />;

  return (
    <div className="flex gap-4 overflow-x-auto pb-4" style={{ minHeight: "60vh" }}>
      {groups.map(([topic, topicItems]) => (
        <div key={topic} className="flex-shrink-0 w-72">
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="text-base">{TOPIC_EMOJIS[topic] || "📌"}</span>
            <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
              {topic}
            </h3>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full font-medium" style={{ background: "var(--bg-hover)", color: "var(--text-muted)" }}>
              {topicItems.length}
            </span>
          </div>
          <div className="space-y-2">
            {topicItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelect(item)}
                className="p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <h4 className="text-xs font-medium line-clamp-2 mb-1" style={{ color: "var(--text-primary)" }}>
                  {item.title}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>{item.type}</span>
                  {item.tags && (
                    <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>
                      <Tag className="w-2.5 h-2.5 inline mr-0.5" />{item.tags.split(",")[0]?.trim()}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Table View ───────────────────────────────────────────── */
function TableView({ items, onSelect }: { items: BrainItem[]; onSelect: (i: BrainItem) => void }) {
  if (!items.length) return <EmptyState />;
  return (
    <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "var(--border)" }}>
      <table className="w-full text-xs">
        <thead>
          <tr style={{ background: "var(--bg-hover)" }}>
            {["Title", "Topic", "Type", "Tags", "Status", "Date"].map((h) => (
              <th key={h} className="px-3 py-2.5 text-left font-semibold uppercase tracking-wider" style={{ color: "var(--text-secondary)", fontSize: "10px" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.id}
              onClick={() => onSelect(item)}
              className="border-t cursor-pointer transition-colors hover:bg-[var(--bg-hover)]"
              style={{ borderColor: "var(--border)" }}
            >
              <td className="px-3 py-2.5 font-medium max-w-xs truncate" style={{ color: "var(--text-primary)" }}>
                <div className="flex items-center gap-2">
                  {item.title}
                  {item.url && <ArrowUpRight className="w-3 h-3 flex-shrink-0" style={{ color: "var(--text-muted)" }} />}
                </div>
              </td>
              <td className="px-3 py-2.5">
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${TOPIC_COLORS[item.topic || "Other"]}`}>
                  {item.topic}
                </span>
              </td>
              <td className="px-3 py-2.5" style={{ color: "var(--text-secondary)" }}>{item.type}</td>
              <td className="px-3 py-2.5" style={{ color: "var(--text-muted)" }}>
                {item.tags?.split(",").slice(0, 2).map(t => `#${t.trim()}`).join(" ")}
              </td>
              <td className="px-3 py-2.5" style={{ color: "var(--text-secondary)" }}>{item.status}</td>
              <td className="px-3 py-2.5 whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
                {item.dateAdded ? new Date(item.dateAdded).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Inbox View ───────────────────────────────────────────── */
function InboxView({ items, onSelect }: { items: BrainItem[]; onSelect: (i: BrainItem) => void }) {
  if (!items.length) {
    return (
      <div className="text-center py-20">
        <Inbox className="w-12 h-12 mx-auto mb-3" style={{ color: "var(--text-muted)" }} />
        <p className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Inbox is empty</p>
        <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>All items have been processed</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-2">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onSelect(item)}
          className="flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all hover:shadow-md group"
          style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm" style={{ background: "var(--bg-hover)" }}>
            {TOPIC_EMOJIS[item.topic || "Other"]}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium line-clamp-1" style={{ color: "var(--text-primary)" }}>
              {item.title}
            </h4>
            {item.content && (
              <p className="text-xs line-clamp-2 mt-0.5" style={{ color: "var(--text-secondary)" }}>
                {item.content}
              </p>
            )}
            <div className="flex items-center gap-2 mt-1.5">
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${TOPIC_COLORS[item.topic || "Other"]}`}>
                {item.topic}
              </span>
              <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>{item.type}</span>
            </div>
          </div>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[var(--bg-hover)]"
              style={{ color: "var(--text-secondary)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Detail Overlay ───────────────────────────────────────── */
function DetailOverlay({ item, onClose }: { item: BrainItem; onClose: () => void }) {
  const tags = item.tags?.split(",").filter(Boolean) || [];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className={`relative w-full ${item.imageUrl ? 'max-w-2xl' : 'max-w-lg'} max-h-[80vh] overflow-y-auto rounded-2xl border p-6`}
        style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-[var(--bg-hover)] transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <span className={`px-2 py-0.5 rounded-md text-xs font-semibold ${TOPIC_COLORS[item.topic || "Other"]}`}>
            {TOPIC_EMOJIS[item.topic || "Other"]} {item.topic}
          </span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>{item.type}</span>
          {item.rating && (
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>{item.rating}</span>
          )}
        </div>

        <h2 className="text-lg font-bold leading-tight mb-3" style={{ color: "var(--text-primary)" }}>
          {item.title}
        </h2>

        {item.imageUrl && (
          <div className="mb-4 rounded-lg overflow-hidden border" style={{ borderColor: "var(--border)" }}>
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full object-contain"
              style={{ maxHeight: "500px", background: "var(--bg-hover)" }}
            />
          </div>
        )}

        {item.content && (
          <div className="text-sm leading-relaxed mb-4 whitespace-pre-wrap" style={{ color: "var(--text-secondary)" }}>
            {item.content}
          </div>
        )}

        {item.summary && item.summary !== item.content && (
          <div className="text-xs leading-relaxed mb-4 p-3 rounded-lg" style={{ background: "var(--bg-hover)", color: "var(--text-secondary)" }}>
            <span className="font-semibold text-[var(--text-primary)]">Summary: </span>
            {item.summary}
          </div>
        )}

        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-600 hover:text-brand-700 mb-4"
          >
            <ExternalLink className="w-3 h-3" />
            Open link
          </a>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] px-2 py-1 rounded-full font-medium" style={{ background: "var(--bg-hover)", color: "var(--text-secondary)" }}>
                #{tag.trim()}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4 pt-3 border-t text-[10px]" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
          <span>Space: {item.space}</span>
          <span>Status: {item.status}</span>
          {item.dateAdded && (
            <span>Added: {new Date(item.dateAdded).toLocaleDateString()}</span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Empty State ──────────────────────────────────────────── */
function EmptyState() {
  return (
    <div className="text-center py-20">
      <Search className="w-12 h-12 mx-auto mb-3" style={{ color: "var(--text-muted)" }} />
      <p className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>No items found</p>
      <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>Try adjusting your search or filters</p>
    </div>
  );
}

export default App;
