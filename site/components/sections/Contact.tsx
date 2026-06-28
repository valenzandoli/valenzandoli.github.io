import type { Dictionary } from "@/content/dictionaries/en";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactCard } from "@/components/ui/ContactCard";
import { contactLinks } from "@/content/data/contact";

const iconClass = "h-4 w-4 fill-none stroke-accent2 stroke-[1.5]";

export function Contact({ dict }: { dict: Dictionary }) {
  return (
    <Section id="contact">
      <SectionLabel>{dict.contact.label}</SectionLabel>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ContactCard
          href={contactLinks.email.href}
          label={dict.contact.email}
          value={contactLinks.email.value}
          icon={
            <svg viewBox="0 0 24 24" className={iconClass}>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 7l10 7 10-7" />
            </svg>
          }
        />
        <ContactCard
          href={contactLinks.linkedin.href}
          target="_blank"
          label={dict.contact.linkedin}
          value={contactLinks.linkedin.value}
          icon={
            <svg viewBox="0 0 24 24" className={iconClass}>
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          }
        />
        <ContactCard
          href={contactLinks.twitter.href}
          target="_blank"
          label={dict.contact.twitter}
          value={contactLinks.twitter.value}
          icon={
            <svg viewBox="0 0 24 24" className={iconClass}>
              <path d="M4 4l16 16M20 4L4 20" />
            </svg>
          }
        />
        <ContactCard
          href={contactLinks.instagram.href}
          target="_blank"
          label={dict.contact.instagram}
          value={contactLinks.instagram.value}
          icon={
            <svg viewBox="0 0 24 24" className={iconClass}>
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" className="fill-accent2 stroke-none" />
            </svg>
          }
        />
        <ContactCard
          href={contactLinks.tiktok.href}
          target="_blank"
          label={dict.contact.tiktok}
          value={contactLinks.tiktok.value}
          icon={
            <svg viewBox="0 0 24 24" className={iconClass}>
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          }
        />
      </div>
    </Section>
  );
}
