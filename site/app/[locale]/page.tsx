import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries/get-dictionary";
import { isLocale } from "@/content/dictionaries/i18n-config";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Divider } from "@/components/ui/Divider";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Divider />
      <About dict={dict} />
      <Divider />
      <Experience dict={dict} />
      <Divider />
      <Education dict={dict} />
      <Divider />
      <Contact dict={dict} />
    </>
  );
}
