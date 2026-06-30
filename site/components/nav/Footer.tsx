import type { Dictionary } from "@/content/dictionaries/en";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t-[0.5px] border-border px-6 py-8 text-center text-xs text-muted">
      {dict.footer.text}
      <div className="mt-2 text-[10px] text-muted/40">
        Fully AI made · Long live Claude
      </div>
    </footer>
  );
}
