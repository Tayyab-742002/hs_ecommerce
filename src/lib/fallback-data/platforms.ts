export type Platform = {
  _id: string
  name: string
  slug: string
  logo?: {
    asset: {
      url: string
    }
  }
  banner?: {
    asset: {
      url: string
    }
  }
  description?: any[] // Portable Text format
  features: {
    title: string
    description?: string
    icon?: {
      asset: {
        url: string
      }
    }
    order?: number
  }[]
  accountCategories: string[]
  order?: number
}

export const platforms: Platform[] = [
  {
    _id: 'platform-1',
    name: 'Instagram',
    slug: 'instagram',
    logo: {
      asset: {
        url: '/images/platforms/instagram-logo.png'
      }
    },
    features: [
      {
        title: 'High Engagement',
        description: 'Get more likes and comments on your posts',
        order: 1
      },
      {
        title: 'Brand Building',
        description: 'Build your brand presence effectively',
        order: 2
      },
      {
        title: 'Direct Messaging',
        description: 'Connect directly with your audience',
        order: 3
      }
    ],
    accountCategories: ['new', 'aged', 'professional'],
    order: 1
  },
  // Add more platforms as needed
]