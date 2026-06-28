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
    getAllSlugs("blog", locale).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/blog/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const post = await getEntry("blog", locale, slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: PageProps<"/[locale]/blog/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const post = await getEntry("blog", locale, slug);
  if (!post) notFound();

  return (
    <Section>
      <Link href={`/${locale}/blog`} className="mb-8 inline-block text-[13px] text-accent2 hover:text-accent">
        ← {dict.blog.backToBlog}
      </Link>
      <div className="mb-2 text-xs text-muted">
        {new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(new Date(post.date))}
      </div>
      <h1 className="mb-4 font-syne text-3xl font-extrabold text-text sm:text-4xl">
        {post.title}
      </h1>
      <div className="mb-8 flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div
        className="prose prose-invert prose-headings:font-syne prose-a:text-accent2 max-w-none prose-p:text-muted prose-li:text-muted"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </Section>
  );
}
