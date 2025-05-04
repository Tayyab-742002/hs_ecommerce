// app/api/sitemap.xml/route.ts
import { SitemapStream, streamToPromise } from "sitemap";

// Mark this route as dynamic to prevent static generation errors
export const dynamic = "force-dynamic";

// Static data for platforms and services
const platforms = [
  { slug: "amazon" },
  { slug: "ebay" },
  { slug: "walmart" },
  { slug: "etsy" },
  { slug: "tiktok" },
];

const services = [
  // { slug: "account-management" },
  { slug: "reinstatement" },
  { slug: "va-services" },
  // { slug: "account-creation" },
];

export async function GET() {
  try {
    // Create sitemap stream
    const smStream = new SitemapStream({
      hostname: "https://www.hsecommerce.store",
    });

    // Define the links
    const links = [
      { url: "/", changefreq: "weekly", priority: 1.0 },
      { url: "/about", changefreq: "monthly", priority: 0.8 },
      { url: "/contact", changefreq: "monthly", priority: 0.8 },
      { url: "/platforms", changefreq: "weekly", priority: 0.9 },
      { url: "/accounts", changefreq: "daily", priority: 0.9 },
      // { url: "/services", changefreq: "weekly", priority: 0.9 },
      { url: "/terms", changefreq: "yearly", priority: 0.5 },
      { url: "/privacy", changefreq: "yearly", priority: 0.5 },

      // Add platform pages
      ...platforms.map((platform) => ({
        url: `/platforms/${platform.slug}`,
        changefreq: "weekly",
        priority: 0.8,
      })),

      // Add service pages
      ...services.map((service) => ({
        url: `/services/${service.slug}`,
        changefreq: "weekly",
        priority: 0.7,
      })),
    ];

    // Add all links to the sitemap stream
    for (const link of links) {
      smStream.write(link);
    }

    // End the stream
    smStream.end();

    // Generate sitemap XML
    const sitemap = await streamToPromise(smStream);

    // Return the XML response
    return new Response(sitemap.toString(), {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Error generating sitemap", { status: 500 });
  }
}
