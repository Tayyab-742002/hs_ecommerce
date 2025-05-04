import { fetchWithFallback } from '../utils/fetch-data'

// Fallback data for reinstatement services
const fallbackReinstatementServices = [
  {
    _id: 'fallback-amazon-reinstatement',
    title: 'Amazon Account Reinstatement',
    slug: 'amazon-account-reinstatement',
    platform: {
      _id: 'amazon',
      name: 'Amazon',
      logo: {
        asset: {
          url: '/images/platforms/amazon-logo.png'
        }
      }
    },
    description: 'Get your suspended Amazon Seller Central account back online with our expert reinstatement service.',
    features: [
      'Full case analysis and suspension reason identification',
      'Professional Plan of Action (POA) creation',
      'Communication with Amazon Seller Performance team',
      'Ongoing support until resolution',
      'Preventative compliance recommendations'
    ],
    successRate: '85%',
    turnaroundTime: '3-14 days',
    price: '$299'
  },
  {
    _id: 'fallback-ebay-reinstatement',
    title: 'eBay Account Reinstatement',
    slug: 'ebay-account-reinstatement',
    platform: {
      _id: 'ebay',
      name: 'eBay',
      logo: {
        asset: {
          url: '/images/platforms/ebay-logo.png'
        }
      }
    },
    description: 'Restore your suspended eBay seller account with our specialized reinstatement service.',
    features: [
      'Complete account audit',
      'Customized appeal letter writing',
      'Direct communication with eBay support',
      'Policy compliance guidance',
      'Account optimization after reinstatement'
    ],
    successRate: '80%',
    turnaroundTime: '7-21 days',
    price: '$249'
  },
  {
    _id: 'fallback-walmart-reinstatement',
    title: 'Walmart Account Reinstatement',
    slug: 'walmart-account-reinstatement',
    platform: {
      _id: 'walmart',
      name: 'Walmart',
      logo: {
        asset: {
          url: '/images/platforms/walmart-logo.png'
        }
      }
    },
    description: 'Get your Walmart Marketplace seller account back in good standing with our reinstatement specialists.',
    features: [
      'Suspension cause analysis',
      'Strategic appeal preparation',
      'Performance metrics improvement',
      'Walmart policy compliance review',
      'Long-term account health monitoring'
    ],
    successRate: '75%',
    turnaroundTime: '10-30 days',
    price: '$299'
  }
]

export async function getReinstatementServices(options = { useFallback: false }) {
  const query = `*[_type == "reinstatementService"] | order(order asc) {
    _id,
    title,
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
    description,
    image {
      asset-> {
        url
      }
    },
    features,
    successRate,
    turnaroundTime,
    price,
    order
  }`

  return fetchWithFallback(query, fallbackReinstatementServices, {
    ...options,
    tags: ["reinstatement-services"],
    revalidate: 60
  })
}

export async function getReinstatementServiceBySlug(slug: string, options = { useFallback: false }) {
  const query = `*[_type == "reinstatementService" && slug.current == $slug][0] {
    _id,
    title,
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
    description,
    image {
      asset-> {
        url
      }
    },
    features,
    successRate,
    turnaroundTime,
    price
  }`

  const service = fallbackReinstatementServices.find(s => s.slug === slug)
  if (!service) {
    throw new Error(`Reinstatement service with slug ${slug} not found in fallback data`)
  }

  return fetchWithFallback(query, service, {
    ...options,
    params: { slug },
    tags: [`reinstatement-${slug}`],
    revalidate: 60
  })
}

export async function getReinstatementServicesByPlatform(platformId: string, options = { useFallback: false }) {
  const query = `*[_type == "reinstatementService" && references($platformId)] | order(order asc) {
    _id,
    name,
    description,
    price,
    features,
    platformId,
    order
  }`

  // Filter fallback reinstatement services by platformId
  const filteredServices = fallbackReinstatementServices.filter(
    (service) => service.platformId === platformId
  )

  return fetchWithFallback(query, filteredServices, {
    ...options,
    params: { platformId }, // Ensure platformId is passed as a parameter
    cache: 'no-store',
    tags: [`reinstatement-${platformId}`]
  })
}
