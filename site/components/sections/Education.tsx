import type { Dictionary } from "@/content/dictionaries/en";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Education({ dict }: { dict: Dictionary }) {
  return (
    <Section id="education">
      <SectionLabel>{dict.education.label}</SectionLabel>
      {dict.education.items.map((item, index) => (
        <TimelineItem key={item.role} {...item} isFirst={index === 0} />
      ))}
    </Section>
  );
}
