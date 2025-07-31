import type { RowTemplate } from "@/utils/models/types/utils/routeTypes";

export const adminRowTemplate: RowTemplate<"Admin"> = [
  ["Name"],
  (item) => [item.Name],
  [2],
];
