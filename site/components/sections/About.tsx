import type { Dictionary } from "@/content/dictionaries/en";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";

export function About({ dict }: { dict: Dictionary }) {
  const { skills } = dict.about;
  const skillRows = [
    skills.dataAndSql,
    skills.visualization,
    skills.operations,
    skills.tools,
    skills.languages,
  ];

  return (
    <Section id="about">
      <SectionLabel>{dict.about.label}</SectionLabel>
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-4 text-base leading-loose text-muted">
          {dict.about.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="[&_strong]:font-medium [&_strong]:text-text"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3.5">
          {skillRows.map((row) => (
            <div key={row.label} className="flex flex-col gap-1.5">
              <div className="text-[11px] tracking-[0.08em] text-muted uppercase">
                {row.label}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {row.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
