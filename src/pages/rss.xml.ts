// src/pages/rss.xml.ts
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { person, site } from "../data/portfolio"; // ← módulo separado post-refactor

export async function GET(context: APIContext) {
  const allProjects = await getCollection(
    "proyectos",
    ({ data }) => !data.draft,
  );

  // Todos los proyectos publicados, ordenados por fecha descendente
  // Featured primero, luego por order, luego el resto
  const publishedProjects = allProjects.sort((a, b) => {
    // Si tienen publishedDate, ordenar por fecha real
    if (a.data.publishedDate && b.data.publishedDate) {
      return (
        new Date(b.data.publishedDate).getTime() -
        new Date(a.data.publishedDate).getTime()
      );
    }
    // Fallback: featured primero, luego por order
    if (a.data.featured !== b.data.featured) {
      return a.data.featured ? -1 : 1;
    }
    return (a.data.order ?? 99) - (b.data.order ?? 99);
  });
  const feedSite = (context.site?.toString() ?? site.url).replace(/\/$/, "");

  return rss({
    title: site.title,
    description: site.description,
    site: feedSite,
    trailingSlash: false,
    items: publishedProjects.map((project) => {
      // Fecha real desde frontmatter, o fecha epoch como fallback explícito
      const pubDate = project.data.publishedDate
        ? new Date(project.data.publishedDate)
        : new Date("2024-01-01"); // fallback fijo, no new Date()

      // Descripción enriquecida con tech incluida (sin customData no-estándar)
      const description = [
        project.data.description,
        `Stack: ${project.data.tech.join(", ")}`,
        project.data.sector,
      ]
        .filter(Boolean)
        .join(" · ");

      return {
        title: project.data.name,
        description,
        // project.id en Content Collections v2 ya no incluye extensión
        link: `/proyectos/${project.id}/`,
        pubDate,
        categories: [project.data.type, project.data.sector],
        author: `${person.email} (${person.name})`,
      };
    }),
    customData: `
      <language>es-MX</language>
      <managingEditor>${person.email} (${person.name})</managingEditor>
      <webMaster>${person.email} (${person.name})</webMaster>
      <copyright>© ${new Date().getFullYear()} ${person.handle}. Todos los derechos reservados.</copyright>
      <category>Portfolio</category>
      <category>UX/UI Design</category>
      <category>Desarrollo Web</category>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <ttl>10080</ttl>
    `.trim(),
  });
}
