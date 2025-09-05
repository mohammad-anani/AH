export function toKebabCase(input: string): string {
  return input
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2") // insert dash between lower+upper
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2") // split consecutive capitals correctly
    .toLowerCase();
}
