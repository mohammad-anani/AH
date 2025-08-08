import { listCache, entityCache, metadataCache } from "../../api/cache";

/**
 * Cache management utilities for the application
 */
export const cacheManager = {
  /**
   * Clean up expired entries from all caches
   */
  cleanup: () => {
    const results = {
      listCache: listCache.cleanup(),
      entityCache: entityCache.cleanup(),
      metadataCache: metadataCache.cleanup(),
    };

    if (import.meta.env.DEV) {
      const total = Object.values(results).reduce(
        (sum, count) => sum + count,
        0,
      );
      if (total > 0) {
        // removed console.log
      }
    }

    return results;
  },

  /**
   * Clear all caches
   */
  clearAll: () => {
    listCache.clear();
    entityCache.clear();
    metadataCache.clear();

    if (import.meta.env.DEV) {
      // removed console.log
    }
  },

  /**
   * Get cache statistics
   */
  getStats: () => {
    return {
      listCache: listCache.getStats(),
      entityCache: entityCache.getStats(),
      metadataCache: metadataCache.getStats(),
    };
  },

  /**
   * Clear cache for a specific entity type
   */
  clearEntityType: (entityType: string) => {
    // Clear entity cache entries
    const entityStats = entityCache.getStats();
    let cleared = 0;

    entityStats.keys.forEach((key: string) => {
      if (key.includes(`:${entityType}:`)) {
        entityCache.delete(key);
        cleared++;
      }
    });

    // Clear list cache entries
    const listStats = listCache.getStats();
    listStats.keys.forEach((key: string) => {
      if (key.startsWith(`list:${entityType}:`)) {
        listCache.delete(key);
        cleared++;
      }
    });

    if (import.meta.env.DEV) {
      // removed console.log
    }

    return cleared;
  },

  /**
   * Initialize cache cleanup interval
   */
  startCleanupInterval: (intervalMs: number = 5 * 60 * 1000) => {
    // Run cleanup every 5 minutes by default
    const intervalId = setInterval(cacheManager.cleanup, intervalMs);

    if (import.meta.env.DEV) {
      // removed console.log
    }

    return intervalId;
  },
};
