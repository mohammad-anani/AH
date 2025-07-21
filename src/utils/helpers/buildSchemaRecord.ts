import type z from "zod";

export default function buildSchemasRecord<
  T extends string,
  Prefix extends string,
  Suffix extends string,
>(
  namespace: Record<string, unknown>,
  prefix: Prefix,
  suffix: Suffix,
): Record<T, z.ZodObject<z.ZodRawShape>> {
  const result = {} as Record<T, z.ZodObject<z.ZodRawShape>>;

  for (const [key, schema] of Object.entries(namespace)) {
    if (key.startsWith(prefix) && key.endsWith(suffix)) {
      const entityKey = key.slice(
        prefix.length,
        key.length - suffix.length,
      ) as T;
      result[entityKey] = schema as z.ZodObject<z.ZodRawShape>;
    }
  }

  return result;
}
