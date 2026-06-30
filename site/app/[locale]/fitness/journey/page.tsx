import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries/get-dictionary";
import { isLocale, locales } from "@/content/dictionaries/i18n-config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
import { getAllEntries } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EntryListItem } from "@/components/ui/EntryListItem";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/fitness/journey">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  return { title: `${dict.fitness.journey.label} · ${dict.meta.title}` };
}

export default async function JourneyPage({ params }: PageProps<"/[locale]/fitness/journey">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const entries = getAllEntries("journey", locale);

  return (
    <Section>
      <SectionLabel>{dict.fitness.journey.label}</SectionLabel>
      <p className="mb-10 max-w-[640px] text-base leading-relaxed text-muted">
        {dict.fitness.journey.intro}
      </p>
      {entries.length === 0 ? (
        <p className="text-sm text-muted">{dict.fitness.journey.empty}</p>
      ) : (
        entries.map((entry, index) => (
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
    </Section>
  );
}
