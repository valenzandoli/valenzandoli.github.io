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
  allMonths: string;
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
  const [activeType, setActiveType] = useState<string | null>(null);
  const [activeMonth, setActiveMonth] = useState<string | null>(null);
  const [sortDesc, setSortDesc] = useState(true);

  const allTypes = Array.from(new Set(sessions.map((s) => s.title.trim()))).sort();
  const allMonths = Array.from(new Set(sessions.map((s) => s.date.slice(0, 7))))
    .sort()
    .reverse();

  const formatMonth = (month: string) =>
    new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(
      new Date(month + "-15T12:00:00")
    );

  const filtered = sessions
    .filter((s) => activeType === null || s.title.trim() === activeType)
    .filter((s) => activeMonth === null || s.date.startsWith(activeMonth))
    .sort((a, b) => {
      const cmp = b.date.localeCompare(a.date);
      return sortDesc ? cmp : -cmp;
    });

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveType(null)}
            className={`rounded px-3 py-1 text-[12px] tracking-wide transition-colors ${
              activeType === null ? "bg-tag-bg text-accent2" : "text-muted hover:text-text"
            }`}
          >
            {labels.filterAll}
          </button>
          {allTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(activeType === type ? null : type)}
              className={`rounded px-3 py-1 text-[12px] tracking-wide transition-colors ${
                activeType === type ? "bg-tag-bg text-accent2" : "text-muted hover:text-text"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <select
            value={activeMonth ?? ""}
            onChange={(e) => setActiveMonth(e.target.value || null)}
            className={`cursor-pointer appearance-none rounded bg-transparent text-[12px] tracking-wide transition-colors ${
              activeMonth === null ? "text-muted hover:text-text" : "text-accent2"
            }`}
          >
            <option value="">{labels.allMonths}</option>
            {allMonths.map((month) => (
              <option key={month} value={month}>
                {formatMonth(month)}
              </option>
            ))}
          </select>
          <button
            onClick={() => setSortDesc((d) => !d)}
            className="text-[12px] text-muted transition-colors hover:text-text"
          >
            ↕ {sortDesc ? labels.sortNewest : labels.sortOldest}
          </button>
        </div>
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
                key={`${session.slug}-${session.date}-${index}`}
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
