import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/studio/", // Disallow Sanity Studio
        "/api/", // Disallow API routes
        "/admin/", // Disallow admin routes if any
        "/_next/", // Disallow Next.js system files
        "/private/", // Disallow private content if any
      ],
    },
    sitemap: "https://www.hsecommerce.store/api/sitemap.xml",
    host: "https://www.hsecommerce.store",
  };
}
