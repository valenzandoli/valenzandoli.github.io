export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded px-2 py-0.5 text-[11px] tracking-wide text-tag-text bg-tag-bg">
      {children}
    </span>
  );
}
