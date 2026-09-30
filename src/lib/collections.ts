// src/lib/collections.ts
import { getCollection } from "astro:content";

export async function getPublishedProjects() {
  const projects = await getCollection("proyectos", ({ data }) => data.draft !== true);

  return projects.sort((a, b) => {
    const orderA = a.data.order ?? Number.MAX_SAFE_INTEGER;
    const orderB = b.data.order ?? Number.MAX_SAFE_INTEGER;

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    const dateA = a.data.publishedDate?.getTime() ?? 0;
    const dateB = b.data.publishedDate?.getTime() ?? 0;

    return dateB - dateA;
  });
}

export async function getFeaturedProjects() {
  const projects = await getPublishedProjects();

  return projects.filter(({ data }) => data.featured);
}

export const getProjectSlug = (id: string) => id.replace(/\.mdx?$/, "");
