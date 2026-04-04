// src/pages/rss.xml.ts
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { person, projects, site } from "../data/portfolio";

export async function GET(context: APIContext) {
  return rss({
    title: site.title,
    description: site.description,
    site: context.site ?? site.url,
    trailingSlash: false,
    items: projects
      .filter((p) => p.featured)
      .map((project) => ({
        title: project.name,
        description: `${project.sector} — ${project.description}`,
        link: `/proyectos/${project.slug}/`,
        pubDate: new Date(), // Idealmente cada proyecto tendría una fecha real
        categories: [project.type, project.sector],
        author: person.email,
        customData: `<tech>${project.tech.join(", ")}</tech>`,
      })),
    customData: `
      <language>es</language>
      <managingEditor>${person.email} (${person.name})</managingEditor>
      <webMaster>${person.email} (${person.name})</webMaster>
      <copyright>© ${new Date().getFullYear()} ${person.handle}. Todos los derechos reservados.</copyright>
      <category>Portfolio, UX/UI, Desarrollo Web</category>
      <generator>Astro + @astrojs/rss</generator>
    `,
  });
}
