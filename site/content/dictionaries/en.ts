const dictionary = {
  meta: {
    title: "Valentin Zandoli — Ops & Data",
    description:
      "Industrial Engineer specializing in operations analytics for logistics and delivery. I turn data into decisions and processes into scalable systems.",
  },
  nav: {
    about: "About",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    fitness: "Fitness",
    blog: "Blog",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Buenos Aires, Argentina",
    titleLine1: "Valentin",
    titleLine2: "Zandoli.",
    titleMuted: "Ops & Data.",
    description:
      "Industrial Engineer specializing in operations analytics for logistics and delivery. I turn data into decisions and processes into scalable systems.",
    ctaPrimary: "View experience",
    ctaSecondary: "Contact",
  },
  about: {
    label: "About me",
    paragraphs: [
      "I'm an <strong>Industrial Engineer</strong> focused on operations, data, and continuous improvement. My background combines quantitative analysis with business judgment in high-velocity environments.",
      "At Rappi, I work on <strong>courier performance, delivery times, and city-level metrics</strong> across Argentina — building reports, dashboards, and tools that speed up decision-making for Regional General Managers.",
      "I'm drawn to the intersection of <strong>data, operations, and product</strong>: automating the repetitive, scaling what works, and finding the insight that moves the needle.",
    ],
    skills: {
      dataAndSql: { label: "Data & SQL", tags: ["Snowflake", "SQL", "Python"] },
      visualization: {
        label: "Visualization",
        tags: ["Looker", "Tableau", "Looker Studio", "Google Sheets"],
      },
      operations: {
        label: "Operations",
        tags: ["Delivery", "Logistics", "KPIs", "Process improvement"],
      },
      tools: {
        label: "Tools",
        tags: ["Excel", "Power BI", "Blue Prism", "ARIS"],
      },
      languages: {
        label: "Languages",
        tags: ["Spanish (native)", "English (B2/C1)"],
      },
    },
  },
  experience: {
    label: "Experience",
    present: "Present",
    items: [
      {
        dateRange: ["April 2026", "Present"],
        role: "Senior Operations Territory Analyst",
        company: "Rappi · Argentina",
        description:
          "Operational analysis of couriers (RT) and orders across Argentine cities, with a focus on Buenos Aires. Building reports and decision-making tools for Regional General Managers.",
        bullets: [
          "Track core delivery KPIs — courier utilization, delivery times (ATA/SLA), and zone/city coverage — across 33 Argentine cities.",
          "Build weekly city-level performance reports using Snowflake, Google Sheets, and Looker, used directly by Regional General Managers.",
          "Write complex SQL queries against order and courier productivity tables in Snowflake to support operational decisions.",
          "Analyze RappiTendero cancellations and storekeeper acquisition metrics to inform retention strategy.",
          "Automate reporting workflows and pilot AI tools to streamline operations analysis.",
          "Maintain an operational knowledge base with city mappings and critical data rules for 33 Argentine cities.",
        ],
      },
      {
        dateRange: ["March 2025", "March 2026"],
        role: "Operations & Process Analyst",
        company: "BEDEME SA · Marca Exclusivo",
        description:
          "Operations and process analysis in a manufacturing environment, focused on production planning, KPIs, and continuous improvement.",
        bullets: [
          "Planned and controlled production using Excel models covering orders, inventory, consumption, and deliveries.",
          "Analyzed deviations in operational KPIs and built performance reports for management.",
          "Standardized and documented operational and administrative processes.",
          "Supported implementation of an ISO 22000 quality management system.",
        ],
      },
      {
        dateRange: ["June 2024", "February 2025"],
        role: "Process Analyst",
        company: "Grupo Asegurador La Segunda · Internship",
        description:
          "End-to-end functional process analysis in a financial services environment, focused on operational efficiency and automation.",
        bullets: [
          "Analyzed operational data and built dashboards with Excel, SQL, and Looker Studio.",
          "Wrote functional documentation for RPA automations built with Blue Prism.",
          "Mapped and documented business processes using ARIS.",
          "Supported ISO 9001 initiatives and continuous improvement efforts.",
        ],
      },
    ],
  },
  education: {
    label: "Education",
    items: [
      {
        dateRange: ["2018", "2025"],
        role: "Industrial Engineering",
        company: "National University of Rosario · GPA 7.8/10",
        bullets: [
          "Data Mining: exploratory analysis and predictive models with Python.",
          "Data & Visual Analytics: dashboards in Tableau, SQL, APIs, and data preprocessing.",
        ],
      },
    ],
  },
  projects: {
    label: "Projects",
    intro:
      "Selected projects applying data, operations, and automation skills — built to sharpen the same tools I use at work, with more added as I build them.",
    statusLabels: {
      concept: "Concept",
      inProgress: "In progress",
      planned: "Planned",
    },
    items: [
      {
        title: "Delivery Performance Dashboard",
        status: "concept",
        description:
          "A Looker/Snowflake dashboard concept tracking courier utilization, delivery times (ATA/SLA), and city-level coverage — generalized from the reporting work I do at Rappi.",
        tags: ["Snowflake", "SQL", "Looker", "KPIs"],
      },
      {
        title: "Operational Workflow Automation",
        status: "concept",
        description:
          "An RPA/Python automation concept for repetitive operational tasks, building on my experience documenting Blue Prism automations and exploring AI tools for ops.",
        tags: ["Python", "RPA", "Blue Prism", "Automation"],
      },
      {
        title: "City-Level Reporting Pipeline",
        status: "planned",
        description:
          "A Python + SQL pipeline to automate the weekly city-by-city performance reports, replacing manual spreadsheet work with a scheduled, repeatable process.",
        tags: ["Python", "SQL", "Automation", "APIs"],
      },
    ],
  },
  fitness: {
    label: "Fitness & Lifestyle",
    intro:
      "Beyond work, I train. Strength, hybrid training, and bodybuilding are where I apply the same discipline and tracking mindset I use with data — just pointed at my own progress.",
    training: {
      label: "Training",
      tags: [
        "Hybrid training",
        "Bodybuilding",
        "Strength",
        "Hypertrophy",
        "Running",
        "Mobility",
      ],
    },
    gear: {
      label: "Gear & tech",
      tags: ["Apparel", "Wearables", "Training apps", "Recovery tools"],
    },
    journey: {
      label: "Training journal",
      intro:
        "A running log of my training journey — progress, goals, and lessons along the way. Less about reach, more about keeping an honest record (and maybe being useful to someone on a similar path).",
      readMore: "Read entry",
      viewAll: "View all entries",
      empty: "New entries coming soon.",
    },
  },
  blog: {
    label: "Blog",
    intro:
      "Notes on data, operations, automation, and the occasional detour into training and tech.",
    readMore: "Read more",
    empty: "First posts coming soon.",
    backToBlog: "Back to blog",
  },
  contact: {
    label: "Contact",
    email: "Email",
    linkedin: "LinkedIn",
    twitter: "Twitter / X",
    instagram: "Instagram",
    tiktok: "TikTok",
  },
  footer: {
    text: "Valentin Zandoli · Buenos Aires · 2026",
  },
} as const;

export default dictionary;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

export type Dictionary = Widen<typeof dictionary>;
