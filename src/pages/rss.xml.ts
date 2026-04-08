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

  const featured = allProjects
    .filter((p) => p.data.featured)
    .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));

  return rss({
    title: site.title,
    description: site.description,
    site: context.site ?? site.url,
    trailingSlash: false,
    items: featured.map((project) => ({
      title: project.data.name,
      description: `${project.data.sector} — ${project.data.description}`,
      link: `/proyectos/${project.id.replace(/\.mdx?$/, "")}/`,
      pubDate: new Date(),
      categories: [project.data.type, project.data.sector],
      author: person.email,
      customData: `<tech>${project.data.tech.join(", ")}</tech>`,
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
