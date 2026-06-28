import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries/en";
import type { ContentMeta } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { EntryListItem } from "@/components/ui/EntryListItem";

export function FitnessSection({
  locale,
  dict,
  journeyEntries,
}: {
  locale: string;
  dict: Dictionary;
  journeyEntries: ContentMeta[];
}) {
  return (
    <Section>
      <SectionLabel>{dict.fitness.label}</SectionLabel>
      <p className="mb-12 max-w-[640px] text-base leading-relaxed text-muted">
        {dict.fitness.intro}
      </p>

      <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <div className="text-[11px] tracking-[0.08em] text-muted uppercase">
            {dict.fitness.training.label}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {dict.fitness.training.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-[11px] tracking-[0.08em] text-muted uppercase">
            {dict.fitness.gear.label}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {dict.fitness.gear.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t-[0.5px] border-border pt-12">
        <div className="mb-2 flex items-baseline justify-between gap-4">
          <h2 className="font-syne text-lg font-bold text-text">{dict.fitness.journey.label}</h2>
          <Link href={`/${locale}/fitness/journey`} className="text-[13px] text-accent2 hover:text-accent">
            {dict.fitness.journey.viewAll} →
          </Link>
        </div>
        <p className="mb-6 max-w-[640px] text-sm leading-relaxed text-muted">
          {dict.fitness.journey.intro}
        </p>
        {journeyEntries.length === 0 ? (
          <p className="text-sm text-muted">{dict.fitness.journey.empty}</p>
        ) : (
          journeyEntries.map((entry, index) => (
            <EntryListItem
              key={entry.slug}
              href={`/${locale}/fitness/journey/${entry.slug}`}
              date={new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(
                new Date(entry.date)
              )}
              title={entry.title}
              excerpt={entry.excerpt}
              tags={entry.tags}
              readMoreLabel={dict.fitness.journey.readMore}
              isFirst={index === 0}
            />
          ))
        )}
      </div>
    </Section>
  );
}
