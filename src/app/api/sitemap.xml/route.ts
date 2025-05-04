// app/api/sitemap.xml/route.ts
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

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
  { slug: "account-management" },
  { slug: "reinstatement" },
  { slug: "va-services" },
  { slug: "account-creation" },
];

export async function GET() {
  try {
    // Define the links
    const links = [
      { url: "/", changefreq: "weekly", priority: 1.0 },
      { url: "/about", changefreq: "monthly", priority: 0.8 },
      { url: "/contact", changefreq: "monthly", priority: 0.8 },
      { url: "/platforms", changefreq: "weekly", priority: 0.9 },
      { url: "/accounts", changefreq: "daily", priority: 0.9 },
      { url: "/services", changefreq: "weekly", priority: 0.9 },
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

    // Create a stream to write to
    const stream = new SitemapStream({
      hostname: "https://www.hsecommerce.store",
    });

    // Return a promise that resolves with your XML
    const smStream = new Readable({
      read() {
        links.forEach((link) => this.push(link));
        this.push(null);
      },
    });

    // Pipe the readable stream to the sitemap stream and get the result
    const pipeline = smStream.pipe(stream);
    const xml = await streamToPromise(pipeline);

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Content-Length": String(xml.length),
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Error generating sitemap", { status: 500 });
  }
}
