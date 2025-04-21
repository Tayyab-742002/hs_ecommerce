export type Account = {
  _id: string
  platform: {
    _ref: string
    name: string
    logo?: {
      asset: {
        url: string
      }
    }
  }
  category: string
  price: number
  features: string[]
  metrics?: {
    followers?: number
    engagement?: number
    posts?: number
    age?: number
  }
  status: 'available' | 'sold' | 'pending'
  createdAt: string
}

export const accounts: Account[] = [
  {
    _id: 'account-1',
    platform: {
      _ref: 'platform-1',
      name: 'Instagram',
      logo: {
        asset: {
          url: '/images/platforms/instagram-logo.png'
        }
      }
    },
    category: 'aged',
    price: 299.99,
    features: [
      '2+ years old',
      'Real followers',
      'High engagement rate',
      'Complete profile'
    ],
    metrics: {
      followers: 5000,
      engagement: 4.5,
      posts: 120,
      age: 25
    },
    status: 'available',
    createdAt: '2024-03-20T12:00:00Z'
  },
  {
    _id: 'account-2',
    platform: {
      _ref: 'platform-1',
      name: 'Instagram',
      logo: {
        asset: {
          url: '/images/platforms/instagram-logo.png'
        }
      }
    },
    category: 'professional',
    price: 599.99,
    features: [
      'Verified account',
      'Business profile',
      'High-quality content',
      'Established brand'
    ],
    metrics: {
      followers: 15000,
      engagement: 5.2,
      posts: 300,
      age: 36
    },
    status: 'available',
    createdAt: '2024-03-19T15:30:00Z'
  }
]