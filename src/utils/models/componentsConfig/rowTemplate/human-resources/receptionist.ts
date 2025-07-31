import type { RowTemplate } from "../../routeConfig";

export const receptionistRowTemplate: RowTemplate<"Receptionist"> = [
  ["Name"],
  (item) => [item.Name],
  [2],
];
