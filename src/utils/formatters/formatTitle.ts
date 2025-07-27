export function formatTitle(entity: string) {
  return entity.startsWith("Test") ? entity.replace("Test", "Test ") : entity;
}
