export function convertToType(type: string, value: string) {
  if (value === "") return type === "string" ? "" : null;

  switch (type) {
    case "number":
      return Number(value);
    case "string":
    case "phone":
      return value;
    case "boolean":
      return value === "true" ? true : value === "false" ? false : null;
    default:
      return null;
  }
}
