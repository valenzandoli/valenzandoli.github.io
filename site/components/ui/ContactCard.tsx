type ContactCardProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  target?: "_blank";
};

export function ContactCard({ href, icon, label, value, target }: ContactCardProps) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 transition-colors"
    >
      <div className="text-muted transition-colors group-hover:text-accent2">{icon}</div>
      <div>
        <div className="mb-px text-[11px] uppercase tracking-widest text-muted">{label}</div>
        <div className="text-sm text-text transition-colors group-hover:text-accent2">{value}</div>
      </div>
    </a>
  );
}
