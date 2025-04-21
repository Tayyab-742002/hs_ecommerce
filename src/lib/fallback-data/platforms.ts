export type Platform = {
  _id: string
  name: string
  slug: string
  color?: string
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
    _id: 'platform-amazon',
    name: 'Amazon',
    slug: 'amazon',
    color: 'var(--color-amazon)',
    logo: {
      asset: {
        url: '/images/platforms/amazon-logo.png'
      }
    },
    features: [
      {
        title: 'Seller Accounts',
        description: 'Professional and individual seller accounts available',
        order: 1
      },
      {
        title: 'Multiple Country Options',
        description: 'US, UK, EU, Canada, Japan and more',
        order: 2
      },
      {
        title: 'Account Management',
        description: 'Full service VA support for listing and account management',
        order: 3
      },
      {
        title: 'Reinstatement Service',
        description: 'Help with suspended accounts and appeals',
        order: 4
      }
    ],
    accountCategories: ['seller', 'buyer', 'professional', 'individual'],
    order: 1
  },
  {
    _id: 'platform-ebay',
    name: 'eBay',
    slug: 'ebay',
    color: 'var(--color-ebay)',
    logo: {
      asset: {
        url: '/images/platforms/ebay-logo.png'
      }
    },
    features: [
      {
        title: 'Seller Accounts',
        description: 'Standard and Store subscription accounts available',
        order: 1
      },
      {
        title: 'Global Reach',
        description: 'Sell in all major eBay marketplaces',
        order: 2
      },
      {
        title: 'Inventory Management',
        description: 'Tools and services for listing and stock control',
        order: 3
      },
      {
        title: 'Account Restoration',
        description: 'Help with suspended accounts and restrictions',
        order: 4
      }
    ],
    accountCategories: ['seller', 'buyer', 'store', 'business'],
    order: 2
  },
  {
    _id: 'platform-walmart',
    name: 'Walmart',
    slug: 'walmart',
    color: 'var(--color-walmart)',
    logo: {
      asset: {
        url: '/images/platforms/walmart-logo.png'
      }
    },
    features: [
      {
        title: 'Seller Accounts',
        description: 'US and Canada marketplace accounts',
        order: 1
      },
      {
        title: 'Fulfillment Services',
        description: 'WFS (Walmart Fulfillment Services) setup assistance',
        order: 2
      },
      {
        title: 'Account Management',
        description: 'Expert help with catalog setup and management',
        order: 3
      },
      {
        title: 'Performance Improvement',
        description: 'Help with metrics and account health',
        order: 4
      }
    ],
    accountCategories: ['seller', 'supplier', 'fulfillment'],
    order: 3
  },
  {
    _id: 'platform-tiktok',
    name: 'TikTok',
    slug: 'tiktok',
    color: 'var(--color-tiktok)',
    logo: {
      asset: {
        url: '/images/platforms/tiktok-logo.png'
      }
    },
    features: [
      {
        title: 'TikTok Shop Accounts',
        description: 'Seller accounts for TikTok Shop marketplace',
        order: 1
      },
      {
        title: 'Creator Accounts',
        description: 'Monetized creator accounts with shop integration',
        order: 2
      },
      {
        title: 'Content Management',
        description: 'VA services for content creation and scheduling',
        order: 3
      },
      {
        title: 'Growth Strategy',
        description: 'Expert help with growing followers and sales',
        order: 4
      }
    ],
    accountCategories: ['tiktok shop', 'business', 'creator'],
    order: 4
  },
  {
    _id: 'platform-etsy',
    name: 'Etsy',
    slug: 'etsy',
    color: 'var(--color-etsy)',
    logo: {
      asset: {
        url: '/images/platforms/etsy-logo.png'
      }
    },
    features: [
      {
        title: 'Seller Accounts',
        description: 'New and aged accounts for handmade and vintage items',
        order: 1
      },
      {
        title: 'Store Setup',
        description: 'Complete shop design and listing assistance',
        order: 2
      },
      {
        title: 'Product Photography',
        description: 'Enhancement services for professional product images',
        order: 3
      },
      {
        title: 'Review Management',
        description: 'Expert help with improving shop ratings',
        order: 4
      }
    ],
    accountCategories: ['seller', 'pattern', 'handmade', 'vintage'],
    order: 5
  }
]