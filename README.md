# victor-portfolio

Portafolio personal, blog técnico y vitrina profesional de Victor Araya — de Telecomunicaciones/NOC hacia DevOps, automatización y cloud.

Construido con [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), contenido en Markdown, desplegado automáticamente con GitHub Actions.

## Cómo correrlo localmente

**Opción A — con Node instalado:**
```bash
npm install
npm run dev
```
Abre http://localhost:4321

**Opción B — con Docker (no necesitas instalar Node):**
```bash
docker compose up
```
Abre http://localhost:4321

## Cómo escribir un post nuevo

1. Crea un archivo en `src/content/blog/tu-slug.md`
2. Copia el frontmatter de `bienvenida.md` como plantilla:
   ```yaml
   ---
   title: "Tu título"
   description: "Resumen corto, máximo 160 caracteres"
   pubDate: 2026-08-01
   tags: ["ansible", "laboratorio"]
   draft: false
   ---
   ```
3. Escribe el contenido en Markdown debajo del frontmatter
4. Haz commit y push a `main` — el deploy es automático

## Cómo agregar un proyecto nuevo

Mismo proceso en `src/content/projects/tu-slug.md`. Revisa `proyecto-ejemplo.md` para ver los campos disponibles (`stack`, `repoUrl`, `demoUrl`, `status`, `featured`).

## Estructura del proyecto

```
src/
├── components/     → piezas reutilizables (AuthorCard, Header, Footer, tarjetas)
├── content/        → tu contenido real (blog/ y projects/), en Markdown
├── layouts/        → plantillas que envuelven las páginas
├── pages/          → cada archivo = una URL del sitio
└── styles/         → CSS global
```

## Deploy

El deploy a GitHub Pages es automático vía `.github/workflows/deploy.yml` en cada push a `main`. Pasos para activarlo la primera vez:

1. Sube este proyecto a un repositorio de GitHub
2. Ve a **Settings → Pages** en el repo
3. En "Build and deployment", selecciona **Source: GitHub Actions**
4. Haz push a `main` — el workflow se encarga del resto

### Dominio personalizado

El archivo `public/CNAME` ya apunta a `varaya.dev`. Cuando compres el dominio:

1. En tu proveedor de DNS, agrega un registro `CNAME` apuntando `varaya.dev` (o `www`) a `TU_USUARIO.github.io`
2. En **Settings → Pages** del repo, confirma el dominio personalizado
3. Activa "Enforce HTTPS" una vez que el DNS propague (puede tardar hasta 24h)

## Pendientes de contenido

Busca `TODO` y `TU_USUARIO` en el proyecto — son los puntos donde falta reemplazar contenido de ejemplo por el real:
- `src/components/AuthorCard.astro` — tus datos reales (GitHub, LinkedIn, email)
- `src/components/Footer.astro` — mismos enlaces
- `src/pages/about.astro` — tu historia
- `src/pages/cv.astro` — tu experiencia
- `public/cv.pdf` — tu CV real (no está incluido)
