# Guía de uso — Sitio personal Valentin Zandoli

Todo el contenido del sitio vive en la carpeta `site/`. Para ver los cambios en tiempo real, el servidor de desarrollo tiene que estar corriendo:

```bash
cd "/Users/valenzandoli/Desktop/Personal page/site"
npm run dev
# Abrir http://localhost:3000/en
```

**Sitio en producción:** [valenzandoli.vercel.app](https://valenzandoli.vercel.app)

---

## Mapa del sitio

| URL | Qué es | Cómo se edita |
| --- | --- | --- |
| `/en` · `/es` | Home (hero, experiencia, educación, contacto) | Diccionarios `en.ts` / `es.ts` |
| `/en/projects` | Proyectos | Diccionarios |
| `/en/blog` | Blog | Archivos `.md` en `site/content/blog/` |
| `/en/interests` | Intereses | Diccionarios |
| `/en/fitness` | Fitness (hub) | Diccionarios |
| `/en/fitness/journey` | Journey — entradas narrativas estilo blog | Archivos `.md` en `site/content/journey/` |
| `/en/fitness/log` | **Training Log — sesiones de gym** | **Desde Notion (automático)** |

---

## Training Log — cargar sesiones desde Notion

Esta es la parte más automática del sitio. Las sesiones de gym se cargan en una base de datos de Notion y aparecen solas en `/fitness/log`.

### Cómo cargar una sesión

En la base de datos de Notion, creá una fila nueva con estas propiedades:

| Propiedad | Tipo | Qué va |
| --- | --- | --- |
| **Name** | Título | Nombre de la sesión (ej. "Push", "Pull", "Legs") |
| **Date** | Date | Fecha de la sesión |
| **Detalle** | Text | Los ejercicios, uno por línea (ej. `jalon 110x8`) |
| **Feeling** | Select | Cómo te sentiste (ej. "💪 Excelente") |
| **Weight** | Number | Peso corporal del día (ej. `103.5`) |
| **Tags** | Multi-select | Tipo de sesión (opcional, sirve para filtrar) |
| **Published** | Checkbox | ✅ **Tiene que estar tildado para que aparezca** |
| **Slug** | Text | Opcional — se genera solo desde el nombre si lo dejás vacío |

### Cómo llega del Notion a la página

```text
Notion  →  GitHub Action (cada 15 min)  →  site/content/log/data.json  →  Vercel redeploya  →  página actualizada
```

1. Una GitHub Action (`.github/workflows/notion-sync.yml`) corre **cada 15 minutos** y lee la base de Notion.
2. Escribe las sesiones publicadas en `site/content/log/data.json` y commitea si hay cambios.
3. Ese commit dispara un deploy automático de Vercel (~1 minuto).

En total: una sesión nueva tarda **como máximo ~20 minutos** en aparecer en el sitio.

### Si no querés esperar los 15 minutos

Podés disparar el sync a mano desde GitHub:

1. Ir al repo → pestaña **Actions** → workflow **Notion Sync**
2. Click en **Run workflow** → **Run workflow**

O correrlo localmente (necesita las variables de entorno del token de Notion):

```bash
cd "/Users/valenzandoli/Desktop/Personal page"
NOTION_TOKEN=... NOTION_DATABASE_ID=... node scripts/notion-sync.mjs
git add site/content/log/data.json && git commit -m "sync: training log" && git push
```

Los valores de `NOTION_TOKEN` y `NOTION_DATABASE_ID` están guardados como **secrets del repo en GitHub** (Settings → Secrets and variables → Actions).

### Si una sesión no aparece

- ¿Está tildado **Published** en Notion?
- ¿Tiene **Name** y **Date**?
- ¿Ya pasaron los 15 minutos del sync + 1 minuto del deploy?
- Revisá la pestaña **Actions** en GitHub: si el último "Notion Sync" está en rojo, ahí está el error.

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

> Regla general: cualquier texto que cambies, cambialo en **ambos archivos** (`en.ts` y `es.ts`).

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

## Fitness Journey — entradas narrativas

Distinto del Training Log: acá van entradas **estilo blog** sobre el proceso (reflexiones, cambios de plan, hitos), no el registro diario de sesiones.

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

## Deploy — cómo se publica el sitio

El proyecto de Vercel está **conectado al repo de GitHub**. No hay que hacer nada manual:

```
1. Editás archivos localmente
2. git add / git commit / git push
3. Vercel detecta el push y deploya solo (~1 minuto)
4. Los cambios quedan en https://valenzandoli.vercel.app
```

**Detalles de la configuración (por si algo se rompe):**

- Proyecto Vercel: `valenzandoli` (team `valen-zandoli-s-projects`)
- El **Root Directory** del proyecto está seteado en `site` desde la configuración del proyecto en Vercel (Settings → General). No va en `vercel.json` — ponerlo ahí rompe todos los deploys con un error de schema.
- Para ver el estado de los deploys: dashboard de Vercel, o `npx vercel ls` desde `site/`.

**Deploy manual de emergencia** (si el automático falla):

```bash
cd "/Users/valenzandoli/Desktop/Personal page/site"
npx vercel --prod
```

---

## Flujo general de cambios

```
1. Editás el archivo correspondiente
2. Guardás
3. El browser en localhost:3000 se actualiza solo
4. Si algo se rompe, revisás la consola del terminal donde corre npm run dev
5. Conforme con todo → commit + push → Vercel deploya automáticamente
```

**Antes de pushear, verificá que el build pase:**

```bash
cd "/Users/valenzandoli/Desktop/Personal page/site"
npm run build
```

Si el build falla localmente, también va a fallar en Vercel.
