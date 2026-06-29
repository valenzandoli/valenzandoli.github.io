"use client";

import { useState } from "react";
import { Tag } from "./Tag";

type LogSession = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  feeling?: string;
  bodyweight?: string;
};

type LogTableLabels = {
  filterAll: string;
  sortNewest: string;
  sortOldest: string;
  empty: string;
  feeling: string;
  bodyweight: string;
};

export function LogTable({
  sessions,
  labels,
  locale,
}: {
  sessions: LogSession[];
  labels: LogTableLabels;
  locale: string;
}) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [sortDesc, setSortDesc] = useState(true);

  const allTags = Array.from(new Set(sessions.flatMap((s) => s.tags))).sort();

  const filtered = sessions
    .filter((s) => activeTag === null || s.tags.includes(activeTag))
    .sort((a, b) => {
      const cmp = b.date.localeCompare(a.date);
      return sortDesc ? cmp : -cmp;
    });

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`rounded px-3 py-1 text-[12px] tracking-wide transition-colors ${
              activeTag === null ? "bg-tag-bg text-accent2" : "text-muted hover:text-text"
            }`}
          >
            {labels.filterAll}
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`rounded px-3 py-1 text-[12px] tracking-wide transition-colors ${
                activeTag === tag ? "bg-tag-bg text-accent2" : "text-muted hover:text-text"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <button
          onClick={() => setSortDesc((d) => !d)}
          className="text-[12px] text-muted transition-colors hover:text-text"
        >
          ↕ {sortDesc ? labels.sortNewest : labels.sortOldest}
        </button>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted">{labels.empty}</p>
      ) : (
        <div>
          {filtered.map((session, index) => {
            const formattedDate = new Intl.DateTimeFormat(locale, {
              dateStyle: "medium",
            }).format(new Date(session.date + "T12:00:00"));

            return (
              <article
                key={session.slug}
                className={`grid grid-cols-1 gap-3 border-b-[0.5px] border-border py-7 sm:grid-cols-[140px_1fr] sm:gap-8 ${
                  index === 0 ? "border-t-[0.5px]" : ""
                }`}
              >
                <div className="flex flex-col gap-2 pt-[3px]">
                  <span className="text-xs leading-relaxed text-muted">{formattedDate}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {session.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-syne text-base font-bold text-text">
                    {session.title}
                  </h3>
                  {session.excerpt && (
                    <p className="mb-3 text-sm leading-relaxed text-muted whitespace-pre-line">
                      {session.excerpt}
                    </p>
                  )}
                  {(session.feeling || session.bodyweight) && (
                    <div className="flex flex-wrap gap-4 text-[12px] text-muted">
                      {session.feeling && (
                        <span>
                          <span className="text-muted/50">{labels.feeling}: </span>
                          <span className="text-text">{session.feeling}</span>
                        </span>
                      )}
                      {session.bodyweight && (
                        <span>
                          <span className="text-muted/50">{labels.bodyweight}: </span>
                          <span className="text-text">{session.bodyweight} kg</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
