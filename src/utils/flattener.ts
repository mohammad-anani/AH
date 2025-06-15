/* eslint-disable @typescript-eslint/no-explicit-any */
export default function flattenOneLevel<T extends Record<string, any>>(
  obj: T
): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.assign(result, value);
    } else {
      result[key] = value;
    }
  }

  return result;
}
