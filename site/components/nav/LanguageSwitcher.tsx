"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/content/dictionaries/i18n-config";

const flags: Record<string, string> = {
  en: "🇺🇸",
  es: "🇦🇷",
};

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc) => (
        <Link
          key={loc}
          href={`/${loc}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
          title={loc.toUpperCase()}
          className={`text-lg leading-none transition-opacity ${
            loc === locale ? "opacity-100" : "opacity-35 hover:opacity-70"
          }`}
        >
          {flags[loc]}
        </Link>
      ))}
    </div>
  );
}
