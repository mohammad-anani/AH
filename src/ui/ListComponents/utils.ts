export function convertStringToType(type: string, value: string) {
  if (value === "" && type !== "boolean") return type === "string" ? "" : null;

  switch (type) {
    case "number":
      return Number(value);
    case "string":
    case "phone":
      return value;
    case "boolean":
      return value !== "" ? value : "all";
    case "array":
      if (value) return value.split(",");
      break;
    default:
      return null;
  }
}

export function isTemporalType(type: string) {
  return ["date", "datetime", "time"].includes(type);
}

export const temporals = ["date", "datetime", "time"];

export function generateLabel(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .replace(/_/g, " ");
}

export function getTemporalValue(key: string, filter: Record<string, unknown>) {
  return {
    from: (filter[key + "From"] as string) || "",
    to: (filter[key + "To"] as string) || "",
  };
}
