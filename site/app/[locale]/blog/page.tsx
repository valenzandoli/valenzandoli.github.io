import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries/get-dictionary";
import { isLocale } from "@/content/dictionaries/i18n-config";
import { getAllEntries } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EntryListItem } from "@/components/ui/EntryListItem";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/blog">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  return { title: `${dict.blog.label} · ${dict.meta.title}` };
}

export default async function BlogPage({ params }: PageProps<"/[locale]/blog">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const posts = getAllEntries("blog", locale);

  return (
    <Section>
      <SectionLabel>{dict.blog.label}</SectionLabel>
      <p className="mb-10 max-w-[640px] text-base leading-relaxed text-muted">
        {dict.blog.intro}
      </p>
      {posts.length === 0 ? (
        <p className="text-sm text-muted">{dict.blog.empty}</p>
      ) : (
        posts.map((post, index) => (
          <EntryListItem
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            date={new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(
              new Date(post.date)
            )}
            title={post.title}
            excerpt={post.excerpt}
            tags={post.tags}
            readMoreLabel={dict.blog.readMore}
            isFirst={index === 0}
          />
        ))
      )}
    </Section>
  );
}
