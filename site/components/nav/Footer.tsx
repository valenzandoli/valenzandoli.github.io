import type { Dictionary } from "@/content/dictionaries/en";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t-[0.5px] border-border px-6 py-8 text-center text-xs text-muted">
      {dict.footer.text}
    </footer>
  );
}
