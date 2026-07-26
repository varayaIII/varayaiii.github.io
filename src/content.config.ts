import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Esquema para posts del blog.
// Si un post .md no cumple esto, Astro falla el build y te avisa qué falta.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160), // ideal para SEO / meta description
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false), // permite escribir sin publicar
    coverImage: z.string().optional(),
  }),
});

// Esquema para proyectos del portafolio.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]), // tecnologías usadas
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    featured: z.boolean().default(false), // para destacar en Home
    status: z.enum(['completado', 'en progreso', 'planeado']).default('completado'),
  }),
});

export const collections = { blog, projects };
