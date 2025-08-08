import axios from "./axios";
import { listCache, entityCache, createCacheKey } from "./cache";

export default async function update(data: unknown, url: string) {
  const response = await axios.patch(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Invalidate related cache entries after successful update
  const urlParts = url.split("/").filter(Boolean);
  const entityType = urlParts[urlParts.length - 2] || "unknown";
  const entityId = urlParts[urlParts.length - 1] || "unknown";

  // Clear specific entity cache
  const entityCacheKey = createCacheKey.entity(entityType, entityId);
  entityCache.delete(entityCacheKey);

  // Clear list cache for this entity type
  const listCacheKey = createCacheKey.list(entityType);
  listCache.delete(listCacheKey);

  // Clear any list cache with filters
  const stats = listCache.getStats();
  stats.keys.forEach((key) => {
    if (key.startsWith(`list:${entityType}:`)) {
      listCache.delete(key);
    }
  });

  if (import.meta.env.DEV) {
    // removed console.log
  }

  return response.status === 200;
}
