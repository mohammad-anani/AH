import axios from "./axios";
import { entityCache, createCacheKey } from "./cache";

interface FindByIDOptions {
  useCache?: boolean;
  cacheTtl?: number;
}

export default async function findByID(
  url: string,
  options: FindByIDOptions = {},
): Promise<unknown> {
  const { useCache = true, cacheTtl } = options;

  // Extract entity type and ID from URL for cache key
  const urlParts = url.split("/").filter(Boolean);
  const entityType = urlParts[urlParts.length - 2] || "unknown";
  const entityId = urlParts[urlParts.length - 1] || "unknown";
  const cacheKey = createCacheKey.entity(entityType, entityId);

  // Try to get from cache first
  if (useCache) {
    const cached = entityCache.get<unknown>(cacheKey);
    if (cached) {
      return cached;
    }
  }

  try {
    const response = await axios.get(url);
    const result = response.data[0] || undefined;

    // Cache the result
    if (useCache && result) {
      entityCache.set(cacheKey, result, cacheTtl);
    }

    return result;
  } catch (error) {
    // If cache exists and request fails, return stale data
    if (useCache) {
      const stale = entityCache.get<unknown>(cacheKey);
      if (stale) {
        if (import.meta.env.DEV) {
          console.warn(
            `Returning stale cache data for: ${entityType}:${entityId}`,
          );
        }
        return stale;
      }
    }
    throw error;
  }
}
