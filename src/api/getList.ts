import axios from "./axios";
import { listCache, createCacheKey } from "./cache";

interface GetListOptions {
  useCache?: boolean;
  cacheTtl?: number;
  filters?: Record<string, unknown>;
}

export default async function getList(
  url: string,
  options: GetListOptions = {},
): Promise<[unknown[], number]> {
  const { useCache = true, cacheTtl, filters } = options;

  // Extract entity type from URL for cache key
  const entityType = url.split("/").filter(Boolean).pop() || "unknown";
  const cacheKey = createCacheKey.list(entityType, filters);

  // Try to get from cache first
  if (useCache) {
    const cached = listCache.get<[unknown[], number]>(cacheKey);
    if (cached) {
      return cached;
    }
  }

  try {
    console.log(url);
    const response = await axios.get(url);
    const result: [unknown[], number] = [
      response.data.Items,
      response.data.Count,
    ];

    // Cache the result
    if (useCache) {
      listCache.set(cacheKey, result, cacheTtl);
    }

    return result;
  } catch (error) {
    // If cache exists and request fails, return stale data
    if (useCache) {
      const stale = listCache.get<[unknown[], number]>(cacheKey);
      if (stale) {
        if (import.meta.env.DEV) {
          console.warn(`Returning stale cache data for: ${entityType}`);
        }
        return stale;
      }
    }
    throw error;
  }
}
