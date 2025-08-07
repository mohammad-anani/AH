interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}

interface CacheConfig {
  ttl?: number; // Time to live in milliseconds
  maxSize?: number; // Maximum cache size
}

class ApiCache {
  private cache = new Map<string, CacheEntry<unknown>>();
  private defaultTtl = 5 * 60 * 1000; // 5 minutes default
  private maxSize = 100; // Maximum 100 cached entries

  constructor(config?: CacheConfig) {
    if (config?.ttl) this.defaultTtl = config.ttl;
    if (config?.maxSize) this.maxSize = config.maxSize;
  }

  set<T>(key: string, data: T, ttl?: number): void {
    // Enforce cache size limit
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) this.cache.delete(firstKey);
    }

    const currentTime = Date.now();
    const timeToLive = ttl ?? this.defaultTtl;

    this.cache.set(key, {
      data,
      timestamp: currentTime,
      expiresAt: currentTime + timeToLive,
    });
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key) as CacheEntry<T> | undefined;

    if (!entry) return null;

    // Check if entry has expired
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;

    // Check if expired
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  // Get cache statistics
  getStats() {
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      keys: Array.from(this.cache.keys()),
    };
  }

  // Clean up expired entries
  cleanup(): number {
    const now = Date.now();
    let cleaned = 0;

    for (const [key, entry] of this.cache.entries()) {
      if (now > entry.expiresAt) {
        this.cache.delete(key);
        cleaned++;
      }
    }

    return cleaned;
  }
}

// Create cache instances for different data types
export const listCache = new ApiCache({ ttl: 2 * 60 * 1000, maxSize: 50 }); // 2 minutes for lists
export const entityCache = new ApiCache({ ttl: 5 * 60 * 1000, maxSize: 200 }); // 5 minutes for entities
export const metadataCache = new ApiCache({ ttl: 15 * 60 * 1000, maxSize: 20 }); // 15 minutes for metadata

// Cache key generators
export const createCacheKey = {
  list: (entityType: string, filters?: Record<string, unknown>) => {
    const filterStr = filters ? JSON.stringify(filters) : "";
    return `list:${entityType}:${filterStr}`;
  },
  entity: (entityType: string, id: string) => `entity:${entityType}:${id}`,
  metadata: (type: string) => `metadata:${type}`,
};
