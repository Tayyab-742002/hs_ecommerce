import { accounts as fallbackAccounts } from "../fallback-data";
import { fetchWithFallback } from "../utils/fetch-data";

export async function getAccounts(options = { useFallback: false }) {
  const query = `
    *[_type == "account"] | order(createdAt desc) {
      _id,
      title,
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
  `;

  return fetchWithFallback(query, fallbackAccounts, options);
}

export async function getAccountsByPlatform(
  platformId: string,
  options = { useFallback: false }
) {
  const query = `*[_type == "account" && platform._ref == $platformId] | order(price asc) {
     _id,
      title,
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
  }`;

  // Filter fallback accounts by platformId
  const filteredAccounts = fallbackAccounts.filter(
    (account) => account.platform._ref === platformId
  );

  return fetchWithFallback(query, filteredAccounts, {
    ...options,
    params: { platformId },
    cache: "no-store",
    tags: [`accounts-${platformId}`],
  });
}
