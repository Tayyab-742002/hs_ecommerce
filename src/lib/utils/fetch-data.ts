import { client } from "@/sanity/lib/client";

export async function fetchWithFallback(
  query: string,
  fallbackData: any,
  options: any = {}
) {
  const {
    useFallback = false,
    params = {},
    cache,
    tags,
    revalidate = 60,
  } = options;

  try {
    // Always try to fetch from Sanity first
    const data = await client.fetch(query, params, { cache, next: { tags } });

    // If we have valid data from Sanity, return it
    if (
      data &&
      (Array.isArray(data) ? data.length > 0 : Object.keys(data).length > 0)
    ) {
      console.log("Using Sanity data");
      return data;
    }

    // If Sanity data is empty and useFallback is true, return fallback data
    if (useFallback) {
      console.log("Using fallback data");
      return fallbackData;
    }

    // Otherwise return the empty Sanity data
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);

    // If there's an error and useFallback is true, return fallback data
    if (useFallback) {
      console.log("Using fallback data due to error");
      return fallbackData;
    }

    // Otherwise rethrow the error
    throw error;
  }
}
