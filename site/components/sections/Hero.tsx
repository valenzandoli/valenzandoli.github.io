import type { Dictionary } from "@/content/dictionaries/en";
import { Button } from "@/components/ui/Button";

export function Hero({ locale, dict }: { locale: string; dict: Dictionary }) {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen max-w-[900px] flex-col justify-center px-6 pt-32 sm:px-12"
    >
      <div className="mb-6 flex items-center gap-2 text-xs tracking-[0.15em] text-accent2 uppercase">
        <span className="block h-px w-6 bg-accent" />
        {dict.hero.eyebrow}
      </div>
      <h1 className="mb-6 font-syne text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-none tracking-tight text-text">
        {dict.hero.titleLine1}
        <br />
        {dict.hero.titleLine2}
        <br />
        <span className="text-muted">{dict.hero.titleMuted}</span>
      </h1>
      <p className="mb-10 max-w-[520px] text-[17px] leading-relaxed text-muted">
        {dict.hero.description}
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <Button href={`/${locale}#experience`} variant="primary">
          {dict.hero.ctaPrimary}
        </Button>
      </div>
    </section>
  );
}
