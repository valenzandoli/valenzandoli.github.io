import Link from "next/link";
import { Tag } from "./Tag";

type EntryListItemProps = {
  href: string;
  date: string;
  title: string;
  excerpt: string;
  tags: readonly string[];
  readMoreLabel: string;
  isFirst?: boolean;
};

export function EntryListItem({
  href,
  date,
  title,
  excerpt,
  tags,
  readMoreLabel,
  isFirst,
}: EntryListItemProps) {
  return (
    <article
      className={`grid grid-cols-1 gap-2 border-b-[0.5px] border-border py-7 sm:grid-cols-[160px_1fr] sm:gap-8 ${
        isFirst ? "border-t-[0.5px]" : ""
      }`}
    >
      <div className="pt-[3px] text-xs leading-relaxed text-muted">{date}</div>
      <div>
        <h3 className="mb-2 font-syne text-base font-bold text-text">
          <Link href={href} className="transition-colors hover:text-accent2">
            {title}
          </Link>
        </h3>
        <p className="mb-3 text-sm leading-relaxed text-muted">{excerpt}</p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <Link href={href} className="text-[13px] text-accent2 hover:text-accent">
          {readMoreLabel} →
        </Link>
      </div>
    </article>
  );
}
