import { Tag } from "./Tag";

type TimelineItemProps = {
  dateRange: readonly string[];
  role: string;
  company: string;
  description?: string;
  bullets?: readonly string[];
  tags?: readonly string[];
  isFirst?: boolean;
};

export function TimelineItem({
  dateRange,
  role,
  company,
  description,
  bullets,
  tags,
  isFirst,
}: TimelineItemProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-2 border-b-[0.5px] border-border py-7 sm:grid-cols-[160px_1fr] sm:gap-8 ${
        isFirst ? "border-t-[0.5px]" : ""
      }`}
    >
      <div className="pt-[3px] text-xs leading-relaxed text-muted">
        {dateRange.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>
      <div>
        <div className="mb-0.5 font-syne text-base font-bold text-text">{role}</div>
        <div className="mb-2.5 text-[13px] text-accent2">{company}</div>
        {description ? (
          <p className="mb-2.5 text-sm leading-relaxed text-muted">{description}</p>
        ) : null}
        {bullets?.length ? (
          <ul className="mb-3 flex flex-col gap-1.5">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="relative pl-3.5 text-[13px] leading-relaxed text-muted before:absolute before:left-0 before:top-0.5 before:text-[11px] before:text-accent before:content-['—']"
              >
                {bullet}
              </li>
            ))}
          </ul>
        ) : null}
        {tags?.length ? (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
