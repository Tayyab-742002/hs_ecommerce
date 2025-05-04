import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.hsecommerce.store/sitemap.xml",
    host: "https://www.hsecommerce.store",
  };
}

