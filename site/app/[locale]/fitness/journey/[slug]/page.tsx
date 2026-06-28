import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/content/dictionaries/get-dictionary";
import { isLocale, locales } from "@/content/dictionaries/i18n-config";
import { getAllSlugs, getEntry } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllSlugs("journey", locale).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/fitness/journey/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const entry = await getEntry("journey", locale, slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.excerpt };
}

export default async function JourneyEntryPage({
  params,
}: PageProps<"/[locale]/fitness/journey/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const entry = await getEntry("journey", locale, slug);
  if (!entry) notFound();

  return (
    <Section>
      <Link
        href={`/${locale}/fitness/journey`}
        className="mb-8 inline-block text-[13px] text-accent2 hover:text-accent"
      >
        ← {dict.fitness.journey.label}
      </Link>
      <div className="mb-2 text-xs text-muted">
        {new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(new Date(entry.date))}
      </div>
      <h1 className="mb-4 font-syne text-3xl font-extrabold text-text sm:text-4xl">
        {entry.title}
      </h1>
      <div className="mb-8 flex flex-wrap gap-1.5">
        {entry.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div
        className="prose prose-invert prose-headings:font-syne prose-a:text-accent2 max-w-none prose-p:text-muted prose-li:text-muted"
        dangerouslySetInnerHTML={{ __html: entry.contentHtml }}
      />
    </Section>
  );
}
