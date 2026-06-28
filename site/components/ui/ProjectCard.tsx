import { Tag } from "./Tag";

type ProjectCardProps = {
  title: string;
  statusLabel: string;
  description: string;
  tags: readonly string[];
};

export function ProjectCard({ title, statusLabel, description, tags }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-3 border-t border-border pt-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-syne text-base font-bold text-text">{title}</h3>
        <span className="whitespace-nowrap text-[11px] uppercase tracking-widest text-muted">
          {statusLabel}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}
