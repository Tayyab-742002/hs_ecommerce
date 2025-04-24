import { platforms as fallbackPlatforms } from '../fallback-data'
import { fetchWithFallback } from '../utils/fetch-data'

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
  }`

  return fetchWithFallback(query, fallbackPlatforms, {
    ...options,
    cache: 'no-store' // Disable cache during development
  })
}

export async function getPlatformBySlug(slug: string, options = { useFallback: false }) {
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
  }`

  const platform = fallbackPlatforms.find(p => p.slug === slug)
  if (!platform) {
    throw new Error(`Platform with slug ${slug} not found in fallback data`)
  }

  return fetchWithFallback(query, platform, {
    ...options,
    cache: 'no-store',
    tags: [`platform-${slug}`]
  })
}
