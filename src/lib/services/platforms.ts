import { platforms as fallbackPlatforms } from "../fallback-data";
import { vaServices as fallbackVAServices } from "../fallback-data/va-services";
import { fetchWithFallback } from "../utils/fetch-data";

export async function getPlatforms(options = { useFallback: false }) {
  const query = `*[_type == "platform"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    logo {
      asset-> {
        url
      }
    },
    banner {
      asset-> {
        url
      }
    },
    description,
    features[] {
      title,
      description,
      icon {
        asset-> {
          url
        }
      },
      order
    },
    accountCategories,
    order
  }`;

  return fetchWithFallback(query, fallbackPlatforms, {
    ...options,
    tags: ["platforms"],
    revalidate: 60,
  });
}

export async function getPlatformBySlug(
  slug: string,
  options = { useFallback: false }
) {
  // Decode URL-encoded slug and normalize it
  const decodedSlug = decodeURIComponent(slug).toLowerCase();

  // Extract the main platform name from complex slugs like "amazon seller central"
  const normalizedSlug = extractPlatformSlug(decodedSlug);

  const query = `*[_type == "platform" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    logo {
      asset-> {
        url
      }
    },
    banner {
      asset-> {
        url
      }
    },
    description,
    features[] {
      title,
      description,
      icon {
        asset-> {
          url
        }
      },
      order
    },
    accountCategories,
    vaServices[] {
      title,
      description,
      price,
      icon {
        asset-> {
          url
        }
      }
    },
    accountRequirementFields[] {
      label,
      fieldType,
      options,
      required
    }
  }`;

  // Set useFallback to false to prioritize Sanity data
  const modifiedOptions = { ...options, useFallback: false };

  // Try to find platform with normalized slug first, then fallback to original slug
  let platform =
    fallbackPlatforms.find((p) => p.slug === normalizedSlug) ||
    fallbackPlatforms.find((p) => p.slug === decodedSlug) ||
    fallbackPlatforms.find((p) => p.slug === slug);

  if (!platform) {
    console.error(
      `Platform not found. Tried slugs: ${normalizedSlug}, ${decodedSlug}, ${slug}`
    );
    console.error(
      "Available platforms:",
      fallbackPlatforms.map((p) => p.slug)
    );
    throw new Error(
      `Platform with slug ${slug} not found in fallback data. Available platforms: ${fallbackPlatforms.map((p) => p.slug).join(", ")}`
    );
  }

  // If the platform doesn't have vaServices in fallback data, add them from the vaServices fallback
  if (!platform.vaServices || platform.vaServices.length === 0) {
    const fallbackServices =
      fallbackVAServices[normalizedSlug as keyof typeof fallbackVAServices] ||
      fallbackVAServices[decodedSlug as keyof typeof fallbackVAServices] ||
      fallbackVAServices[slug as keyof typeof fallbackVAServices];
    if (fallbackServices) {
      platform.vaServices = fallbackServices;
    }
  }

  return fetchWithFallback(query, platform, {
    ...modifiedOptions,
    params: { slug: normalizedSlug },
    cache: "no-store",
    tags: [`platform-${normalizedSlug}`],
  });
}

// Helper function to extract main platform name from complex slugs
function extractPlatformSlug(slug: string): string {
  // Define mapping for complex slugs to main platform slugs
  const slugMappings: Record<string, string> = {
    "amazon seller central": "amazon",
    "amazon-seller-central": "amazon",
    "ebay seller": "ebay",
    "ebay-seller": "ebay",
    "walmart marketplace": "walmart",
    "walmart-marketplace": "walmart",
    "tiktok shop": "tiktok",
    "tiktok-shop": "tiktok",
    "etsy shop": "etsy",
    "etsy-shop": "etsy",
  };

  // Check if the slug matches any mapping
  if (slugMappings[slug]) {
    return slugMappings[slug];
  }

  // Extract the first word as the platform name for other cases
  const firstWord = slug.split(/[\s-]+/)[0].toLowerCase();

  // Check if the first word is a known platform
  const knownPlatforms = ["amazon", "ebay", "walmart", "tiktok", "etsy"];
  if (knownPlatforms.includes(firstWord)) {
    return firstWord;
  }

  // Return the original slug if no mapping found
  return slug;
}
