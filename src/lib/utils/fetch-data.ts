import { client } from '@/sanity/lib/client'
import { platforms } from '../fallback-data'

type FetchOptions = {
  useFallback?: boolean
  tags?: string[]
  cache?: RequestCache
}

export async function fetchWithFallback<T>(
  query: string,
  fallbackData: T,
  options: FetchOptions = {}
): Promise<T> {
  const { useFallback = false, tags = [], cache = 'no-store' } = options

  if (useFallback) {
    return fallbackData
  }

  try {
    console.log('Fetching Sanity data with query:', query)
    const data = await client.fetch<T>(query, {}, {
      cache,
      next: { tags }
    })

    if (!data) {
      console.log('No data returned from Sanity, using fallback')
      return fallbackData
    }

    console.log('Sanity data fetched successfully:', data)
    return data
  } catch (error) {
    console.error('Error fetching data from Sanity:', error)
    return fallbackData
  }
}
