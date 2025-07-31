import type { RowTemplate } from "../../routeConfig";

export const patientRowTemplate: RowTemplate<"Patient"> = [
  ["Name", "Age"],
  (item) => [item.Name, item.Age],
  [2, 1],
];
