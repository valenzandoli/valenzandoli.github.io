export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-12 flex items-center gap-2.5 text-[11px] tracking-[0.15em] text-accent2 uppercase">
      {children}
      <span className="h-[0.5px] flex-1 bg-border" />
    </div>
  );
}
