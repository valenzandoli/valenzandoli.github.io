# Guía de uso — Sitio personal Valentin Zandoli

Todo el contenido del sitio vive en la carpeta `site/`. Para ver los cambios en tiempo real, el servidor de desarrollo tiene que estar corriendo:

```bash
cd "/Users/valenzandoli/Desktop/Personal page/site"
npm run dev
# Abrir http://localhost:3000/en
```

---

## Textos generales (títulos, descripciones, nav)

Los textos están en dos archivos, uno por idioma:

- `site/content/dictionaries/en.ts` — inglés
- `site/content/dictionaries/es.ts` — español

Abrís el archivo, buscás la sección y editás el string. Los cambios se reflejan al guardar.

**Ejemplo — cambiar el subtítulo del hero:**
```ts
// en.ts
hero: {
  titleLine1: "Valentin",
  titleLine2: "Zandoli.",
  titleMuted: "Ops & Data.",  // ← acá
```

---

## Experiencia laboral

En `en.ts` y `es.ts`, buscá la sección `experience`. Cada trabajo es un objeto dentro del array `items`:

```ts
experience: {
  items: [
    {
      dateRange: ["April 2026", "Present"],   // rango de fechas
      role: "Senior Operations Territory Analyst",  // cargo
      company: "Rappi · Argentina",           // empresa
      description: "...",                     // descripción breve
      bullets: [                              // logros / tareas
        "Primero...",
        "Segundo...",
      ],
    },
    // más trabajos...
  ],
},
```

**Para agregar un trabajo nuevo:** copiás uno de los objetos existentes, lo pegás al inicio del array (más reciente primero) y editás los campos.

**Para editar uno existente:** encontrás el objeto por el nombre del `role` o `company` y modificás lo que necesites.

Acordate de hacer el cambio en **ambos archivos** (`en.ts` y `es.ts`).

---

## Educación

Misma estructura que experiencia. En `en.ts`/`es.ts`, buscá la sección `education`:

```ts
education: {
  items: [
    {
      dateRange: ["2018", "2025"],
      role: "Industrial Engineering",      // título / carrera
      company: "National University of Rosario · GPA 7.8/10",
      bullets: [
        "Materia destacada 1...",
        "Materia destacada 2...",
      ],
    },
  ],
},
```

---

## Proyectos

En `en.ts`/`es.ts`, buscá la sección `projects`. Cada proyecto tiene esta forma:

```ts
projects: {
  statusLabels: {
    concept: "Concept",      // etiquetas de estado (no tocar)
    inProgress: "In progress",
    planned: "Planned",
  },
  items: [
    {
      title: "Nombre del proyecto",
      status: "inProgress",   // "concept" | "inProgress" | "planned"
      description: "Descripción breve del proyecto.",
      tags: ["Python", "SQL", "Automation"],  // tecnologías usadas
    },
    // más proyectos...
  ],
},
```

**Para agregar un proyecto:** copiás un objeto del array, lo pegás y editás los campos.

**Estados disponibles:**
- `"concept"` — idea todavía no empezada
- `"inProgress"` — en desarrollo
- `"planned"` — planificado

---

## Blog — agregar una entrada

Cada post es un archivo `.md` dentro de:
- `site/content/blog/en/` — versión en inglés
- `site/content/blog/es/` — versión en español

**Pasos:**

1. Creás un archivo nuevo, por ejemplo `mi-post.md`, en **ambas** carpetas.
2. El nombre del archivo se convierte en la URL: `mi-post.md` → `/en/blog/mi-post`
3. El archivo tiene que empezar con un bloque frontmatter entre `---`:

```markdown
---
title: "Título del post"
date: "2026-07-01"
excerpt: "Resumen corto que aparece en el índice del blog."
tags: ["data", "operations"]
---

El contenido del post va acá, en Markdown normal.

## Subtítulo

Párrafo de texto. Podés usar **negrita**, _cursiva_, listas, etc.

- Item 1
- Item 2
```

**El post aparece automáticamente** en `/en/blog` y `/es/blog` al guardar, sin tocar ningún otro archivo.

---

## Training Journey — agregar una entrada

Igual que el blog, pero los archivos van en:
- `site/content/journey/en/`
- `site/content/journey/es/`

Y se acceden desde `/en/fitness/journey`.

```markdown
---
title: "Semana 12 — nuevo PR en sentadilla"
date: "2026-07-01"
excerpt: "Resumen de la semana, qué cambié y qué aprendí."
tags: ["powerlifting", "squat"]
---

Contenido de la entrada...
```

---

## Redes sociales y contacto

Archivo: `site/content/data/contact.ts`

```ts
export const contactLinks = {
  email:     { href: "mailto:...", value: "..." },
  linkedin:  { href: "https://linkedin.com/in/...", value: "Valentin Zandoli" },
  twitter:   { href: "https://x.com/...", value: "@..." },
  instagram: { href: "https://instagram.com/...", value: "@..." },
  tiktok:    { href: "https://tiktok.com/@...", value: "@..." },
}
```

Editás el `href` y el `value` del campo que necesites.

---

## Flujo general de cambios

```
1. Editás el archivo correspondiente
2. Guardás
3. El browser en localhost:3000 se actualiza solo
4. Si algo se rompe, revisás la consola del terminal donde corre npm run dev
```

Cuando estés conforme con los cambios y el sitio esté deployado en Vercel, alcanza con hacer un commit y push — Vercel detecta el cambio y redeploya automáticamente en ~1 minuto.
