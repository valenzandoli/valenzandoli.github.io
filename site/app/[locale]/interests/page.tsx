import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/content/dictionaries/get-dictionary";
import { isLocale, locales } from "@/content/dictionaries/i18n-config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/interests">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  return { title: `${dict.interests.label} · ${dict.meta.title}` };
}

export default async function InterestsPage({ params }: PageProps<"/[locale]/interests">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const { interests } = dict;

  const blocks: {
    key: string;
    data: { title: string; description: string; tags: readonly string[] };
    journalHref?: string;
    journalLabel?: string;
    logHref?: string;
    logLabel?: string;
  }[] = [
    {
      key: "training",
      data: interests.training,
      journalHref: `/${locale}/fitness/journey`,
      journalLabel: interests.training.journalLabel,
      logHref: `/${locale}/fitness/log`,
      logLabel: interests.training.logLabel,
    },
    { key: "peptides", data: interests.peptides },
    { key: "wellness", data: interests.wellness },
    { key: "business", data: interests.business },
  ];

  return (
    <Section>
      <SectionLabel>{interests.label}</SectionLabel>
      <p className="mb-12 max-w-[580px] text-base leading-relaxed text-muted">
        {interests.intro}
      </p>
      <div className="grid gap-px border-[0.5px] border-border bg-border sm:grid-cols-2">
        {blocks.map(({ key, data, journalHref, journalLabel, logHref, logLabel }) => (
          <div key={key} className="flex flex-col gap-4 bg-bg p-8">
            <h2 className="font-syne text-lg font-bold text-text">{data.title}</h2>
            <p className="text-sm leading-relaxed text-muted">{data.description}</p>
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            {(journalHref && journalLabel) || (logHref && logLabel) ? (
              <div className="mt-auto flex flex-col gap-1 pt-2">
                {journalHref && journalLabel && (
                  <Link
                    href={journalHref}
                    className="text-[13px] text-muted/60 transition-colors hover:text-accent2"
                  >
                    {journalLabel} →
                  </Link>
                )}
                {logHref && logLabel && (
                  <Link
                    href={logHref}
                    className="text-[13px] text-muted/60 transition-colors hover:text-accent2"
                  >
                    {logLabel} →
                  </Link>
                )}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}