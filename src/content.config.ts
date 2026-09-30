// src/content.config.ts
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const urlOrPath = z.string().trim().min(1).url().optional();

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
        live: urlOrPath,
        github: urlOrPath,
        figma: urlOrPath,
      })
      .default({}),
    featured: z.boolean().default(false),
    type: z.enum(["app", "web", "design"]),
    order: z.number().int().nonnegative().optional(),
    draft: z.boolean().default(false),
    publishedDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    seoTitle: z.string().min(1).optional(),
    seoDescription: z.string().min(1).optional(),
    seoKeywords: z.array(z.string().min(1)).default([]),
    //date: z.coerce.date().optional(),
  }),
});

export const collections = { proyectos };
