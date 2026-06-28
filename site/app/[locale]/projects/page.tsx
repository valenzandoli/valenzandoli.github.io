import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries/get-dictionary";
import { isLocale } from "@/content/dictionaries/i18n-config";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  return { title: `${dict.projects.label} · ${dict.meta.title}` };
}

export default async function ProjectsPage({ params }: PageProps<"/[locale]/projects">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <Section>
      <SectionLabel>{dict.projects.label}</SectionLabel>
      <p className="mb-10 max-w-[640px] text-base leading-relaxed text-muted">
        {dict.projects.intro}
      </p>
      <ProjectsGrid dict={dict} />
    </Section>
  );
}
