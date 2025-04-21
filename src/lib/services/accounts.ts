import { accounts as fallbackAccounts } from '../fallback-data'
import { fetchWithFallback } from '../utils/fetch-data'

export async function getAccounts(options = { useFallback: false }) {
  const query = `
    *[_type == "account"] | order(createdAt desc) {
      _id,
      platform-> {
        _id,
        name,
        logo {
          asset-> {
            url
          }
        }
      },
      category,
      price,
      features,
      metrics,
      status,
      createdAt
    }
  `

  return fetchWithFallback(query, fallbackAccounts, options)
}

export async function getAccountsByPlatform(platformId: string, options = { useFallback: false }) {
  const query = `
    *[_type == "account" && platform._ref == $platformId] | order(createdAt desc) {
      _id,
      platform-> {
        _id,
        name,
        logo {
          asset-> {
            url
          }
        }
      },
      category,
      price,
      features,
      metrics,
      status,
      createdAt
    }
  `

  const platformAccounts = fallbackAccounts.filter(account => account.platform._ref === platformId)
  return fetchWithFallback(query, platformAccounts, { ...options, tags: [`platform-${platformId}-accounts`] })
}