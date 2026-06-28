import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries/get-dictionary";
import { isLocale } from "@/content/dictionaries/i18n-config";
import { getAllEntries } from "@/lib/content";
import { FitnessSection } from "@/components/sections/FitnessSection";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/fitness">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  return { title: `${dict.fitness.label} · ${dict.meta.title}` };
}

export default async function FitnessPage({ params }: PageProps<"/[locale]/fitness">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const journeyEntries = getAllEntries("journey", locale).slice(0, 2);

  return <FitnessSection locale={locale} dict={dict} journeyEntries={journeyEntries} />;
}
