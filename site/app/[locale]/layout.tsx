import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { Nav } from "@/components/nav/Nav";
import { Footer } from "@/components/nav/Footer";
import { getDictionary } from "@/content/dictionaries/get-dictionary";
import { isLocale, locales } from "@/content/dictionaries/i18n-config";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        es: "/es",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${syne.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Nav locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}
