# valenzandoli.github.io — Sitio personal

Sitio personal de Valentin Zandoli. Portfolio profesional, blog, sección de fitness y training journal. Bilingüe inglés/español, con deploy automático en Vercel.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Vercel

---

## Estructura del repo

```
/
├── site/                        # App Next.js (toda la lógica del sitio)
│   ├── app/                     # Rutas y páginas (App Router)
│   │   ├── [locale]/            # Rutas bilingües /en y /es
│   │   │   ├── page.tsx         # Home (Hero, About, Experience, Education, Contact)
│   │   │   ├── projects/        # Página de proyectos
│   │   │   ├── blog/            # Blog (índice + posts)
│   │   │   ├── fitness/         # Sección fitness + training journey
│   │   │   └── layout.tsx       # Layout por locale (nav, footer, metadata)
│   │   ├── icon.tsx             # Favicon generado (VZ monograma)
│   │   ├── apple-icon.tsx       # Apple touch icon
│   │   ├── sitemap.ts           # Sitemap dinámico
│   │   └── robots.ts            # robots.txt
│   ├── components/
│   │   ├── nav/                 # Nav, Footer, LanguageSwitcher
│   │   ├── sections/            # Hero, About, Experience, Education, Contact, etc.
│   │   └── ui/                  # Componentes base: Tag, Button, TimelineItem, etc.
│   ├── content/
│   │   ├── dictionaries/        # Textos EN/ES (en.ts, es.ts)
│   │   ├── data/                # Datos no traducibles (contact.ts)
│   │   ├── blog/                # Posts del blog (en/ y es/)
│   │   └── journey/             # Entradas del training journal (en/ y es/)
│   ├── lib/
│   │   ├── content.ts           # Loader de markdown (blog y journey)
│   │   └── site.ts              # SITE_URL constante
│   └── proxy.ts                 # Detección de locale y redirect (Next.js 16 middleware)
├── vercel.json                  # Configuración de Vercel (rootDirectory: site)
├── GUIA.md                      # Guía de uso rápido
└── README.md                    # Este archivo
```

---

## Páginas disponibles

| Ruta | Descripción |
|---|---|
| `/en` · `/es` | Home: Hero, About, Experiencia, Educación, Contacto |
| `/en/projects` | Portfolio de proyectos |
| `/en/blog` | Índice del blog |
| `/en/blog/[slug]` | Post individual |
| `/en/fitness` | Sección fitness/lifestyle |
| `/en/fitness/journey` | Training journal (índice) |
| `/en/fitness/journey/[slug]` | Entrada individual del journal |

Todas las rutas tienen su equivalente en `/es/...`.

---

## Correr el sitio localmente

### Requisitos

- Node.js LTS (instalado via nvm)
- npm

### Instalación

```bash
# Desde la raíz del repo
cd site
npm install
```

### Dev server

```bash
cd site
npm run dev
# Abrir http://localhost:3000/en
```

Los cambios en archivos `.ts`, `.tsx` y `.md` se reflejan instantáneamente sin reiniciar.

### Build de producción

```bash
cd site
npm run build
npm run start
```

---

## Cómo hacer cambios de contenido

### Textos generales (hero, nav, about, etc.)

Todo el texto del sitio está en dos archivos, uno por idioma:

- `site/content/dictionaries/en.ts` — inglés
- `site/content/dictionaries/es.ts` — español

Abrís el archivo, buscás la sección y editás el string. **Siempre actualizar ambos archivos.**

```ts
// en.ts — ejemplo: cambiar el subtítulo del hero
hero: {
  titleLine1: "Valentin",
  titleLine2: "Zandoli.",
  titleMuted: "Ops & Data.",  // ← acá
  description: "...",
},
```

---

### Experiencia laboral

En `en.ts` y `es.ts`, sección `experience.items`. Cada trabajo es un objeto en el array (ordenados del más reciente al más antiguo):

```ts
experience: {
  items: [
    {
      dateRange: ["April 2026", "Present"],
      role: "Senior Operations Territory Analyst",
      company: "Rappi · Argentina",
      description: "Descripción breve del rol.",
      bullets: [
        "Logro o responsabilidad 1.",
        "Logro o responsabilidad 2.",
      ],
    },
    // más trabajos...
  ],
},
```

**Agregar trabajo nuevo:** copiar un objeto, pegarlo al inicio del array y editar los campos.

---

### Educación

En `en.ts` y `es.ts`, sección `education.items`. Misma estructura que experiencia:

```ts
education: {
  items: [
    {
      dateRange: ["2018", "2025"],
      role: "Industrial Engineering",
      company: "National University of Rosario · GPA 7.8/10",
      bullets: [
        "Materia o logro destacado 1.",
        "Materia o logro destacado 2.",
      ],
    },
  ],
},
```

---

### Proyectos

En `en.ts` y `es.ts`, sección `projects.items`:

```ts
projects: {
  statusLabels: {
    concept: "Concept",       // no modificar estas keys
    inProgress: "In progress",
    planned: "Planned",
  },
  items: [
    {
      title: "Nombre del proyecto",
      status: "inProgress",   // "concept" | "inProgress" | "planned"
      description: "Descripción breve del proyecto.",
      tags: ["Python", "SQL", "Automation"],
    },
    // más proyectos...
  ],
},
```

**Estados disponibles:**
- `"concept"` — idea sin empezar
- `"inProgress"` — en desarrollo activo
- `"planned"` — planificado para el futuro

---

### Blog — agregar un post

Los posts son archivos `.md` en:
- `site/content/blog/en/` — versión en inglés
- `site/content/blog/es/` — versión en español

**Pasos:**

1. Crear un archivo nuevo en **ambas** carpetas con el mismo nombre, ej. `mi-primer-post.md`
2. El nombre del archivo define la URL: `mi-primer-post.md` → `/en/blog/mi-primer-post`
3. El archivo debe empezar con un bloque frontmatter:

```markdown
---
title: "Título del post"
date: "2026-07-01"
excerpt: "Resumen corto que aparece en el índice del blog."
tags: ["data", "operations"]
---

El contenido del post va acá, en Markdown estándar.

## Subtítulo

Párrafo de texto. Se puede usar **negrita**, _cursiva_, listas, código, etc.

- Item 1
- Item 2
```

El post aparece automáticamente en `/en/blog` y `/es/blog` al guardar. No hace falta tocar ningún otro archivo.

---

### Training Journal — agregar una entrada

Igual que el blog, pero los archivos van en:
- `site/content/journey/en/`
- `site/content/journey/es/`

Se acceden desde `/en/fitness/journey`.

```markdown
---
title: "Semana 12 — nuevo PR en sentadilla"
date: "2026-07-01"
excerpt: "Resumen de la semana, qué cambié y qué aprendí."
tags: ["powerlifting", "squat", "progress"]
---

Contenido de la entrada en Markdown...
```

---

### Redes sociales y contacto

Archivo: `site/content/data/contact.ts`

```ts
export const contactLinks = {
  email:     { href: "mailto:tu@email.com",              value: "tu@email.com" },
  linkedin:  { href: "https://linkedin.com/in/usuario",  value: "Valentin Zandoli" },
  twitter:   { href: "https://x.com/usuario",            value: "@usuario" },
  instagram: { href: "https://instagram.com/usuario",    value: "@usuario" },
  tiktok:    { href: "https://tiktok.com/@usuario",      value: "@usuario" },
}
```

Editar `href` y `value` del campo correspondiente.

---

## Deploy

El sitio se deploya automáticamente en Vercel cada vez que se hace un push a `main`.

### Flujo de trabajo habitual

```bash
# 1. Hacer los cambios en los archivos correspondientes
# 2. Stagear los archivos modificados
git add site/content/dictionaries/en.ts site/content/dictionaries/es.ts

# 3. Crear el commit
git commit -m "update: actualizo experiencia laboral"

# 4. Pushear — Vercel detecta el push y redeploya solo (~1 min)
git push origin main
```

No hace falta tocar el dashboard de Vercel para actualizaciones normales.

### Variables de entorno (Vercel)

| Variable | Valor | Descripción |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://valenzandoli.vercel.app` | URL de producción usada en sitemap y OG metadata |

Se configura en Vercel Dashboard → Settings → Environment Variables.

---

## Diseño

- **Paleta:** fondo oscuro `#111318`, acento slate `#7b9cbf` / `#a8c4db`, texto `#e2e4e9`
- **Tipografía:** Syne (headings) + Inter (body) via `next/font`
- **Tokens:** definidos en `site/app/globals.css` como CSS custom properties (`--bg`, `--accent`, `--text`, etc.)
- **i18n:** custom sin librerías externas — diccionarios planos + rutas `[locale]`
- **Markdown:** `gray-matter` (frontmatter) + `remark` + `remark-html`
