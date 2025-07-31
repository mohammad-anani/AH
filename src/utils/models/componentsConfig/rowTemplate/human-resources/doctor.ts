import type { RowTemplate } from "../../routeConfig";

export const doctorRowTemplate: RowTemplate<"Doctor"> = [
  ["Name"],
  (item) => [item.Name],
  [2],
];
