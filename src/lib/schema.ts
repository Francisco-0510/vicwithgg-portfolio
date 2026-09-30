// src/lib/schema.ts
import { person, site } from "@/data/portfolio";

type SchemaType = "Person" | "Organization" | "BreadcrumbList" | "Project";
type SocialValue = (typeof person.social)[keyof typeof person.social];

interface SchemaOptions {
  type?: SchemaType;
  description?: string;
  image?: string;
  name?: string;
  url?: string;
}

const absoluteUrl = (value: string) => {
  if (value.startsWith("http")) {
    return value;
  }

  return new URL(value, site.url).href;
};

const socialLinks = Object.values(person.social).filter((value): value is SocialValue =>
  value.startsWith("http"),
);

export function generateSchema(options: SchemaOptions = {}) {
  const type = options.type ?? "Person";

  if (type === "Organization") {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: options.name ?? "VGG Design & Dev",
      url: options.url ?? site.url,
      description: options.description ?? site.description,
      founder: {
        "@type": "Person",
        name: person.name,
      },
      sameAs: socialLinks,
    };
  }

  if (type === "Project") {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: options.name ?? site.title,
      description: options.description ?? site.description,
      url: options.url ?? site.url,
      image: options.image ? absoluteUrl(options.image) : undefined,
      creator: {
        "@type": "Person",
        name: person.name,
        url: site.url,
      },
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    url: site.url,
    email: `mailto:${person.email}`,
    jobTitle: person.roles.join(" / "),
    description: options.description ?? site.description,
    image: absoluteUrl(person.photo),
    address: {
      "@type": "PostalAddress",
      addressLocality: person.location,
      addressCountry: "MX",
    },
    sameAs: socialLinks,
  };

  /*  const baseSchema = {
    "@context": "https://schema.org",
  };

  switch (type) {
    case "Person":
      return {
        ...baseSchema,
        "@type": "Person",
        name: person.name,
        jobTitle: person.roles.join(", "),
        url: site.url,
        email: person.email,
        location: {
          "@type": "Place",
          name: person.location,
        },
        sameAs: Object.values(person.social).filter((url) => typeof url === "string"),
        image: `${site.url}${person.photo}`,
      };
    case "Organization":
      return {
        ...baseSchema,
        "@type": "Organization",
        name: "VGG Design & Dev",
        url: site.url,
        description: site.description,
        founder: {
          "@type": "Person",
          name: person.name,
        },
        sameAs: Object.values(person.social).filter((url) => typeof url === "string"),
      };
    default:
      return baseSchema;
  } */
}
