import type { Dictionary } from "@/content/dictionaries/en";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function ProjectsGrid({ dict }: { dict: Dictionary }) {
  const { items, statusLabels } = dict.projects;

  return (
    <div className="flex flex-col">
      {items.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          statusLabel={statusLabels[project.status as keyof typeof statusLabels]}
          description={project.description}
          tags={project.tags}
        />
      ))}
    </div>
  );
}
