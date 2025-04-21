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
  const { useFallback = false, tags = [], cache = 'force-cache' } = options

  if (useFallback) {
    return fallbackData
  }

  try {
    const data = await client.fetch<T>(query, {}, { 
      cache,
      next: { tags }
    })
    return data || fallbackData
  } catch (error) {
    console.error('Error fetching data:', error)
    return fallbackData
  }
}