import { fetchWithFallback } from "../utils/fetch-data";
import { vaServices as fallbackVAServices } from "../fallback-data/va-services";
import { Platform, VAService } from "@/types";

export async function getVAServices(options = { useFallback: false }) {
  const query = `*[_type == "platform"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    logo {
      asset-> {
        url
      }
    },
    vaServices[] {
      title,
      description,
      price,
      icon {
        asset-> {
          url
        }
      }
    }
  }`;

  // Transform fallback data to match the expected format
  const fallbackData = Object.keys(fallbackVAServices).map(key => {
    const platformName = key.charAt(0).toUpperCase() + key.slice(1);
    return {
      _id: key,
      name: platformName,
      slug: key,
      logo: {
        asset: {
          url: `/images/platforms/${key}.png`
        }
      },
      vaServices: fallbackVAServices[key as keyof typeof fallbackVAServices]
    };
  });

  return fetchWithFallback(query, fallbackData, {
    ...options,
    tags: ["va-services"],
    revalidate: 60
  });
}

export async function getAllVAServices(options = { useFallback: false }) {
  const query = `*[_type == "vaService"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    platform-> {
      _id,
      name,
      "slug": slug.current,
      logo {
        asset-> {
          url
        }
      }
    },
    icon {
      asset-> {
        url
      }
    },
    shortDescription,
    price,
    isReinstatement,
    order
  }`;

  // Create fallback data for general VA services
  const fallbackData = Object.keys(fallbackVAServices).flatMap(platformKey => {
    const platformName = platformKey.charAt(0).toUpperCase() + platformKey.slice(1);
    return fallbackVAServices[platformKey as keyof typeof fallbackVAServices].map((service, index) => ({
      _id: `${platformKey}-service-${index}`,
      name: service.title,
      slug: service.title.toLowerCase().replace(/\s+/g, '-'),
      platform: {
        _id: platformKey,
        name: platformName,
        slug: platformKey,
        logo: {
          asset: {
            url: `/images/platforms/${platformKey}.png`
          }
        }
      },
      icon: service.icon,
      shortDescription: service.description,
      price: service.price,
      isReinstatement: false,
      order: index
    }));
  });

  return fetchWithFallback(query, fallbackData, {
    ...options,
    cache: "no-store",
    tags: ["all-va-services"]
  });
}

export async function getVAServiceBySlug(slug: string, options = { useFallback: false }) {
  const query = `*[_type == "vaService" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    platform-> {
      _id,
      name,
      "slug": slug.current,
      logo {
        asset-> {
          url
        }
      }
    },
    icon {
      asset-> {
        url
      }
    },
    shortDescription,
    description,
    features[] {
      title,
      description,
      included,
      highlight
    },
    price,
    isReinstatement,
    seo
  }`;

  // For fallback, we'll return a generic service
  const fallbackService = {
    _id: `fallback-service-${slug}`,
    name: "Virtual Assistant Service",
    slug: slug,
    platform: {
      _id: "generic",
      name: "All Platforms",
      slug: "all-platforms",
      logo: {
        asset: {
          url: "/images/platforms/generic.png"
        }
      }
    },
    icon: {
      asset: {
        url: "/images/services/generic-service.png"
      }
    },
    shortDescription: "Professional virtual assistant services for e-commerce platforms.",
    description: [],
    features: [
      {
        title: "Professional Support",
        description: "Expert assistance from experienced professionals",
        included: true,
        highlight: true
      },
      {
        title: "Quick Turnaround",
        description: "Fast and efficient service delivery",
        included: true,
        highlight: false
      }
    ],
    price: "Contact for pricing",
    isReinstatement: false,
    seo: {
      title: "Virtual Assistant Service",
      description: "Professional virtual assistant services for e-commerce platforms."
    }
  };

  return fetchWithFallback(query, fallbackService, {
    ...options,
    params: { slug },
    cache: "no-store",
    tags: [`va-service-${slug}`]
  });
}

