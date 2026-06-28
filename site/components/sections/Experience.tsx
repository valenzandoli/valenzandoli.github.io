import type { Dictionary } from "@/content/dictionaries/en";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Experience({ dict }: { dict: Dictionary }) {
  return (
    <Section id="experience">
      <SectionLabel>{dict.experience.label}</SectionLabel>
      {dict.experience.items.map((item, index) => (
        <TimelineItem key={item.role} {...item} isFirst={index === 0} />
      ))}
    </Section>
  );
}
