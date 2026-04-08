// src/content.config.ts
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const urlOrPath = z.string().min(1);

const proyectos = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/proyectos" }),
  schema: z.object({
    name: z.string().min(2),
    sector: z.string(),
    description: z.string(),
    thumbnail: z.string().min(1),
    tech: z.array(z.string()),
    links: z
      .object({
        live: urlOrPath.optional(),
        github: urlOrPath.optional(),
        figma: urlOrPath.optional(),
      })
      .default({}),
    featured: z.boolean().default(false),
    type: z.enum(["app", "web", "design"]),
    order: z.number().optional(),
    draft: z.boolean().default(false),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { proyectos };
