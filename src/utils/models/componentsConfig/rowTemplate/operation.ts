import type { RowTemplate } from "../routeConfig";

export const operationRowTemplate: RowTemplate<"Operation"> = [
  ["Name", "Patient"],
  ({ Name, PatientName }) => [Name, PatientName],
  [2, 2],
];
