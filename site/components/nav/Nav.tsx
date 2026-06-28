import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries/en";
import type { Locale } from "@/content/dictionaries/i18n-config";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Nav({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const home = `/${locale}`;

  const links = [
    { href: `${home}#about`, label: dict.nav.about },
    { href: `${home}#experience`, label: dict.nav.experience },
    { href: `${home}#education`, label: dict.nav.education },
    { href: `${home}/projects`, label: dict.nav.projects },
    { href: `${home}/fitness`, label: dict.nav.fitness },
    { href: `${home}/blog`, label: dict.nav.blog },
    { href: `${home}#contact`, label: dict.nav.contact },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-100 border-b-[0.5px] border-border bg-bg/85 px-6 py-4 backdrop-blur-md sm:px-12">
      <div className="flex items-center justify-between">
        <Link href={home} className="font-syne text-lg font-extrabold tracking-tight text-text">
          VZ.
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="hidden flex-wrap items-center gap-x-5 gap-y-2 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] tracking-wide text-muted transition-colors hover:text-text"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher locale={locale} />
          <details className="group relative md:hidden">
            <summary className="flex h-7 w-7 cursor-pointer list-none items-center justify-center text-text">
              <span className="sr-only">Menu</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.5]">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </summary>
            <ul className="absolute right-0 top-9 flex w-44 flex-col gap-1 rounded-lg border-[0.5px] border-border bg-bg2 p-2 shadow-lg">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-[13px] text-muted transition-colors hover:bg-bg3 hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </nav>
  );
}
