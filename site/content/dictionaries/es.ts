import type { Dictionary } from "./en";

const dictionary: Dictionary = {
  meta: {
    title: "Valentin Zandoli — Business & Fitness",
    description:
      "Ingeniero Industrial trabajando en operaciones y business analytics. Con interés en construir en la industria fitness desde el lado del negocio y el producto. Rendimiento, disciplina y mejora continua.",
  },
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    education: "Educación",
    projects: "Proyectos",
    fitness: "Fitness",
    blog: "Blog",
    contact: "Contacto",
  },
  hero: {
    eyebrow: "Buenos Aires, Argentina",
    titleLine1: "Valentin",
    titleLine2: "Zandoli.",
    titleMuted: "Business & Fitness.",
    description:
      "Ingeniero Industrial trabajando en operaciones y business analytics. Con interés en construir en la industria fitness desde el lado del negocio y el producto. Rendimiento, disciplina y mejora continua.",
    ctaPrimary: "Ver experiencia",
    ctaSecondary: "Contacto",
  },
  about: {
    label: "Sobre mí",
    paragraphs: [
      "Soy <strong>Ingeniero Industrial</strong> con foco en operaciones, datos y mejora continua. Mi experiencia combina análisis cuantitativo con visión de negocio en entornos de alta velocidad.",
      "En Rappi trabajo sobre <strong>métricas de repartidores, tiempos de entrega y performance de ciudades</strong> en Argentina, construyendo reportes, dashboards y herramientas que aceleran la toma de decisiones.",
      "Más allá del análisis, me atrae la <strong>industria del fitness</strong> — no como coach ni entrenador, sino desde el lado del negocio: cómo escalan las empresas, cómo se construyen productos, y dónde los datos pueden mover la aguja en salud y performance.",
    ],
    skills: {
      dataAndSql: { label: "Datos & SQL", tags: ["Snowflake", "SQL", "Python"] },
      visualization: {
        label: "Visualización",
        tags: ["Looker", "Tableau", "Looker Studio", "Google Sheets"],
      },
      operations: {
        label: "Operaciones",
        tags: ["Delivery", "Logística", "KPIs", "Mejora de procesos"],
      },
      tools: {
        label: "Herramientas",
        tags: ["Excel", "Power BI", "Blue Prism", "ARIS"],
      },
      languages: {
        label: "Idiomas",
        tags: ["Español (nativo)", "Inglés (B2/C1)"],
      },
    },
  },
  experience: {
    label: "Experiencia",
    present: "Presente",
    items: [
      {
        dateRange: ["Abril 2026", "Presente"],
        role: "Senior Operations Territory Analyst",
        company: "Rappi · Argentina",
        description:
          "Análisis operativo de repartidores (RT) y órdenes en ciudades argentinas, con foco en Buenos Aires. Desarrollo de reportes y herramientas de toma de decisiones para Regional General Managers.",
        bullets: [
          "Seguimiento de métricas clave de delivery — utilización de RT, tiempos de entrega (ATA/SLA) y cobertura por zona y ciudad — en 33 ciudades argentinas.",
          "Construcción de reportes semanales de performance por ciudad usando Snowflake, Google Sheets y Looker, utilizados directamente por los Regional General Managers.",
          "Desarrollo de queries SQL complejas sobre tablas de órdenes y productividad de repartidores en Snowflake para sustentar decisiones operativas.",
          "Análisis de cancelaciones de RappiTenderos y métricas de adquisición de storekeepers para informar la estrategia de retención.",
          "Automatización de flujos de reporte y exploración de herramientas de IA para operaciones.",
          "Gestión de knowledge base operativa con mappings de 33 ciudades argentinas y reglas críticas de datos.",
        ],
      },
      {
        dateRange: ["Marzo 2025", "Marzo 2026"],
        role: "Analista de Operaciones y Procesos",
        company: "BEDEME SA · Marca Exclusivo",
        description:
          "Análisis de operaciones productivas y logísticas en entorno industrial, con foco en planificación, KPIs y mejora continua.",
        bullets: [
          "Planeamiento y control de producción con modelos Excel (pedidos, inventarios, consumos y entregas).",
          "Análisis de desvíos de KPIs operativos y elaboración de reportes de desempeño para management.",
          "Estandarización y documentación de procesos operativos y administrativos.",
          "Implementación de Sistema de Gestión de Calidad ISO 22000.",
        ],
      },
      {
        dateRange: ["Junio 2024", "Febrero 2025"],
        role: "Analista de Procesos",
        company: "Grupo Asegurador La Segunda · Pasantía",
        description:
          "Análisis funcional de procesos end-to-end en entorno de servicios financieros, con foco en eficiencia operativa y automatización.",
        bullets: [
          "Análisis de datos operativos y desarrollo de dashboards con Excel, SQL y Looker Studio.",
          "Documentación funcional de automatizaciones RPA con Blue Prism.",
          "Mapeo y documentación de procesos con ARIS.",
          "Soporte en iniciativas ISO 9001 y mejora continua.",
        ],
      },
    ],
  },
  education: {
    label: "Educación",
    items: [
      {
        dateRange: ["2018", "2025"],
        role: "Ingeniería Industrial",
        company: "Universidad Nacional de Rosario · Promedio 7.8/10",
        bullets: [
          "Minería de Datos: análisis exploratorio y modelos predictivos con Python.",
          "Datos y Analítica Visual: dashboards en Tableau, SQL, APIs y preprocesamiento de datos.",
        ],
      },
    ],
  },
  projects: {
    label: "Proyectos",
    intro:
      "Proyectos seleccionados aplicando habilidades de datos, operaciones y automatización — construidos para afilar las mismas herramientas que uso en el trabajo, sumando más a medida que los desarrollo.",
    statusLabels: {
      concept: "Concepto",
      inProgress: "En progreso",
      planned: "Planeado",
    },
    items: [
      {
        title: "Delivery Performance Dashboard",
        status: "concept",
        description:
          "Un concepto de dashboard en Looker/Snowflake para seguir utilización de repartidores, tiempos de entrega (ATA/SLA) y cobertura por ciudad — generalizado a partir del trabajo de reporting que hago en Rappi.",
        tags: ["Snowflake", "SQL", "Looker", "KPIs"],
      },
      {
        title: "Operational Workflow Automation",
        status: "concept",
        description:
          "Un concepto de automatización RPA/Python para tareas operativas repetitivas, basado en mi experiencia documentando automatizaciones con Blue Prism y explorando herramientas de IA para operaciones.",
        tags: ["Python", "RPA", "Blue Prism", "Automatización"],
      },
      {
        title: "City-Level Reporting Pipeline",
        status: "planned",
        description:
          "Un pipeline en Python + SQL para automatizar los reportes semanales de performance por ciudad, reemplazando el trabajo manual en planillas por un proceso programado y repetible.",
        tags: ["Python", "SQL", "Automatización", "APIs"],
      },
    ],
  },
  fitness: {
    label: "Fitness & Lifestyle",
    intro:
      "Más allá del trabajo, entreno. El entrenamiento híbrido y el culturismo son donde aplico la misma disciplina y mentalidad de seguimiento que uso con datos — pero apuntada a mi propio progreso.",
    training: {
      label: "Entrenamiento",
      tags: [
        "Entrenamiento híbrido",
        "Culturismo",
        "Fuerza",
        "Hipertrofia",
        "Running",
        "Movilidad",
      ],
    },
    gear: {
      label: "Equipamiento & tech",
      tags: ["Indumentaria", "Wearables", "Apps de entrenamiento", "Recuperación"],
    },
    journey: {
      label: "Diario de entrenamiento",
      intro:
        "Un registro de mi recorrido en el gimnasio — progreso, objetivos y aprendizajes en el camino. Más que buscar alcance, es mantener un registro honesto (y quizás servir de ayuda a alguien en un camino parecido).",
      readMore: "Leer entrada",
      viewAll: "Ver todas las entradas",
      empty: "Próximamente nuevas entradas.",
    },
  },
  blog: {
    label: "Blog",
    intro:
      "Notas sobre datos, operaciones, automatización y alguna que otra incursión en entrenamiento y tecnología.",
    readMore: "Leer más",
    empty: "Próximamente los primeros posts.",
    backToBlog: "Volver al blog",
  },
  contact: {
    label: "Contacto",
    email: "Email",
    linkedin: "LinkedIn",
    twitter: "Twitter / X",
    instagram: "Instagram",
    tiktok: "TikTok",
  },
  footer: {
    text: "Valentin Zandoli · Buenos Aires · 2026",
  },
};

export default dictionary;
