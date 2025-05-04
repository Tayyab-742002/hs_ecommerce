import { SitemapStream, streamToPromise } from "sitemap";
import { getPlatforms } from "@/lib/services/platforms";
import { getAccounts } from "@/lib/services/accounts";
import { getAllServices } from "@/lib/services/all-services";
import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     // Create sitemap stream
//     const smStream = new SitemapStream({
//       hostname: "https://www.hsecommerce.store",
//     });

//     // Add static pages
//     const staticPages = [
//       { url: "/", changefreq: "weekly", priority: 1.0 },
//       { url: "/about", changefreq: "monthly", priority: 0.8 },
//       { url: "/contact", changefreq: "monthly", priority: 0.8 },
//       { url: "/platforms", changefreq: "weekly", priority: 0.9 },
//       { url: "/accounts", changefreq: "daily", priority: 0.9 },
//       { url: "/services", changefreq: "weekly", priority: 0.9 },
//       { url: "/terms", changefreq: "yearly", priority: 0.5 },
//       { url: "/privacy", changefreq: "yearly", priority: 0.5 },
//     ];

//     // Add static pages to sitemap
//     staticPages.forEach((page) => {
//       smStream.write(page);
//     });

//     try {
//       // Fetch dynamic data
//       const [platforms, accounts, services] = await Promise.all([
//         getPlatforms(),
//         getAccounts({ useFallback: true }),
//         getAllServices({ useFallback: true }),
//       ]);

//       // Add platform pages
//       platforms.forEach((platform) => {
//         smStream.write({
//           url: `/platforms/${platform.slug}`,
//           changefreq: "weekly",
//           priority: 0.8,
//         });
//       });

//       // Add service pages
//       services.forEach((service) => {
//         smStream.write({
//           url: `/services/${service.slug}`,
//           changefreq: "weekly",
//           priority: 0.7,
//         });
//       });
//     } catch (error) {
//       console.error("Error fetching dynamic content:", error);
//       // Continue with static pages if dynamic content fails
//     }

//     // End the stream
//     smStream.end();

//     // Generate sitemap from stream
//     const sitemap = await streamToPromise(smStream).then((sm) => sm.toString());

//     // Return the XML response
//     return new NextResponse(sitemap, {
//       headers: {
//         "Content-Type": "application/xml",
//         "Cache-Control": "public, s-maxage=1200, stale-while-revalidate=600",
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     return new NextResponse("Error generating sitemap", { status: 500 });
//   }
// }
import { MetadataRoute } from "next";
import { headers } from "next/headers";

// Static data for platforms and services
const platforms = [
  { slug: "amazon" },
  { slug: "ebay" },
  { slug: "walmart" },
  { slug: "etsy" },
  { slug: "tiktok" },
];

const services = [{ slug: "reinstatement" }, { slug: "va-services" }];

// Add this to make the route dynamic (since we're using headers())
export const dynamic = "force-dynamic";

export async function GET(): Promise<Response> {
  const headersList = headers();

  try {
    // Create the sitemap XML content
    const sitemap = generateSitemap();

    // Return the XML response
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, s-maxage=1200, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("Error generating sitemap", { status: 500 });
  }
}

function generateSitemap(): string {
  const baseUrl = "https://www.hsecommerce.store";
  const now = new Date().toISOString();

  // Static pages
  const staticPages = [
    { url: "/", changefreq: "weekly", priority: 1.0 },
    { url: "/about", changefreq: "monthly", priority: 0.8 },
    { url: "/contact", changefreq: "monthly", priority: 0.8 },
    { url: "/platforms", changefreq: "weekly", priority: 0.9 },
    { url: "/accounts", changefreq: "daily", priority: 0.9 },
    { url: "/terms", changefreq: "yearly", priority: 0.5 },
    { url: "/privacy", changefreq: "yearly", priority: 0.5 },
  ];

  // Platform pages
  const platformPages = platforms.map((platform) => ({
    url: `/platforms/${platform.slug}`,
    changefreq: "weekly",
    priority: 0.8,
  }));

  // Service pages
  const servicePages = services.map((service) => ({
    url: `/services/${service.slug}`,
    changefreq: "weekly",
    priority: 0.7,
  }));

  // Combine all pages
  const allPages = [...staticPages, ...platformPages, ...servicePages];

  // Generate XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add each URL
  allPages.forEach((page) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}${page.url}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += "  </url>\n";
  });

  xml += "</urlset>";

  return xml;
}
