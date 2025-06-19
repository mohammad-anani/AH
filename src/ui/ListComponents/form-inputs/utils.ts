/**
 * Generates a human-readable label from a camelCase field key
 * @param key - The field key in camelCase
 * @returns A formatted label with spaces
 */
export function generateLabel(key: string): string {
  return key.replace(/([a-z])([A-Z])/g, "$1 $2") + ":";
}

/**
 * Checks if a field type is temporal (date, datetime, time)
 * @param type - The field type
 * @returns True if the type is temporal
 */
export function isTemporalType(type: string): boolean {
  return ["date", "datetime", "time"].includes(type);
}

/**
 * Gets the temporal value object for a field
 * @param key - The field key
 * @param filter - The current filter object
 * @returns An object with 'from' and 'to' properties
 */
export function getTemporalValue(key: string, filter: Record<string, unknown>) {
  return {
    from: (filter[key + "From"] as string) || "",
    to: (filter[key + "To"] as string) || "",
  };
}
