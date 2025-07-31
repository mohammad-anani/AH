import type { RowTemplate } from "../routeConfig";

export const insuranceRowTemplate: RowTemplate<"Insurance"> = [
  ["Provider", "Coverage", "status"],
  (item) => [
    item.ProviderName,
    item.Coverage * 100 + "%",
    item.isActive ? "Active" : "Inactive",
  ],
  [1, 1, 1],
];
