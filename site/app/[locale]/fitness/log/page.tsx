import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries/get-dictionary";
import { isLocale, locales } from "@/content/dictionaries/i18n-config";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LogTable } from "@/components/ui/LogTable";
import logData from "@/content/log/data.json";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/fitness/log">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  return { title: `${dict.fitness.log.label} · ${dict.meta.title}` };
}

export default async function LogPage({ params }: PageProps<"/[locale]/fitness/log">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <Section>
      <SectionLabel>{dict.fitness.log.label}</SectionLabel>
      <p className="mb-10 max-w-[640px] text-base leading-relaxed text-muted">
        {dict.fitness.log.intro}
      </p>
      <LogTable
        sessions={logData}
        labels={{
          filterAll: dict.fitness.log.filterAll,
          allMonths: dict.fitness.log.allMonths,
          sortNewest: dict.fitness.log.sortNewest,
          sortOldest: dict.fitness.log.sortOldest,
          empty: dict.fitness.log.empty,
          feeling: dict.fitness.log.feeling,
          bodyweight: dict.fitness.log.bodyweight,
        }}
        locale={locale}
      />
    </Section>
  );
}
