import { MetadataRoute } from "next";

const BASE_URL = "https://www.hsecommerce.store";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const platforms = [
    { slug: "amazon" },
    { slug: "ebay" },
    { slug: "walmart" },
    { slug: "tiktok" },
    { slug: "etsy" },
  ];

  const services = [{ slug: "va-services" }, { slug: "reinstatement" }];

  // Static routes
  const staticRoutes = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/platforms`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/va-services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Platform routes
  const platformRoutes = platforms.map((platform: any) => ({
    url: `${BASE_URL}/platforms/${platform.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Service routes
  const serviceRoutes = services.map((service: any) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...platformRoutes, ...serviceRoutes];
}
