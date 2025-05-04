import { fetchWithFallback } from "../utils/fetch-data";
import { allServices as fallbackAllServices } from "../fallback-data/all-services";

export async function getAllServices(options = { useFallback: false }) {
  const query = `*[_type == "allService"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
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

  return fetchWithFallback(query, fallbackAllServices, {
    ...options,
    tags: ["all-services"],
    revalidate: 60
  });
}

export async function getServiceBySlug(
  slug: string,
  options = { useFallback: false }
) {
  const query = `*[_type == "allService" && slug.current == $slug][0] {
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

  return fetchWithFallback(query, fallbackAllServices, {
    ...options,
    params: { slug },
    tags: [`service-${slug}`],
    revalidate: 60
  });
}

