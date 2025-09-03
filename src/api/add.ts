import axios from "./axios";
import { listCache, createCacheKey } from "./cache";

export default async function add(data: unknown, url: string) {
  const response = await axios.post(url, data);

  // Invalidate related cache entries after successful add
  const entityType = url.split("/").filter(Boolean).pop() || "unknown";

  // Clear list cache for this entity type
  const listCacheKey = createCacheKey.list(entityType);
  listCache.delete(listCacheKey);

  // Clear any list cache with filters (they all start with the same pattern)
  const stats = listCache.getStats();
  stats.keys.forEach((key) => {
    if (key.startsWith(`list:${entityType}:`)) {
      listCache.delete(key);
    }
  });

  if (import.meta.env.DEV) {
    // removed console.log
  }

  return response.data?.["ID"];
}
