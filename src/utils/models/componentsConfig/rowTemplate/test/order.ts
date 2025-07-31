import type { RowTemplate } from "../../routeConfig";

export const testOrderRowTemplate: RowTemplate<"TestOrder"> = [
  ["Patient", "Test"],
  (item) => [item.PatientName, item.TestName],
  [2, 2],
];
