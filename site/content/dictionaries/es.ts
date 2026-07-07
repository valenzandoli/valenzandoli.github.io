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
    interests: "Intereses",
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
    ctaSecondary: "Mis intereses",
  },
  about: {
    label: "Sobre mí",
    paragraphs: [
      "Soy <strong>Ingeniero Industrial</strong> con foco en operaciones, datos y mejora continua. Mi experiencia combina análisis cuantitativo con visión de negocio en entornos de alta velocidad.",
      "Trabajo en <strong>análisis operativo para negocios de alta velocidad</strong> — construyendo los reportes, dashboards y herramientas de decisión que ayudan a los equipos a moverse más rápido con mejor información.",
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
  interests: {
    label: "Intereses",
    intro:
      "Algunas cosas que me interesan genuinamente — más allá del trabajo. Algunas son áreas en las que quiero construir. Otras son simplemente parte de cómo vivo.",
    training: {
      title: "Entrenamiento & Gym",
      description:
        "El entrenamiento de fuerza, el trabajo híbrido y el culturismo son parte de mi vida hace años. Entreno con la misma mentalidad de seguimiento que uso con datos — registrando progreso, probando variables, iterando.",
      tags: ["Fuerza", "Hipertrofia", "Híbrido", "Culturismo", "Running"],
      journalLabel: "Diario de entrenamiento",
      logLabel: "Training log",
    },
    peptides: {
      title: "Péptidos & Optimización",
      description:
        "Estoy metido en optimización de performance — péptidos, protocolos de recuperación, salud hormonal. Lo abordo de manera analítica: qué dice la evidencia, qué funciona en la práctica, qué vale el riesgo.",
      tags: ["Péptidos", "Recuperación", "Protocolos", "Biohacking"],
    },
    wellness: {
      title: "Bienestar & Salud",
      description:
        "El sueño, la nutrición y la recuperación son la infraestructura detrás de la performance — en el gym y en el trabajo. Me interesa optimizar el sistema completo, no solo partes aisladas.",
      tags: ["Sueño", "Nutrición", "Recuperación", "Mindset", "Bienestar"],
    },
    business: {
      title: "Business & Emprendimiento",
      description:
        "La industria fitness es uno de los espacios de negocio más interesantes hoy — desatendida por operadores reales y pensamiento basado en datos. Me interesa construir acá: productos, marcas o ventures en la intersección de salud y negocios.",
      tags: ["Industria Fitness", "Producto", "Emprendimiento", "Marcas"],
    },
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
    log: {
      label: "Training Log",
      intro: "Cada sesión, registrada. Filtrá por tipo u ordená por fecha.",
      empty: "Todavía no hay sesiones registradas.",
      filterAll: "Todas",
      allMonths: "Todos los meses",
      sortNewest: "Más reciente",
      sortOldest: "Más antigua",
      feeling: "Feeling",
      bodyweight: "Peso corporal",
    },
  },
  blog: {
    label: "Blog",
    intro:
      "Notas sobre datos, negocios e industria fitness — y cómo pienso sobre el entrenamiento, la optimización y construir cosas.",
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
