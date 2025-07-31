import type { RowTemplate } from "../../routeConfig";

export const testTypeRowTemplate: RowTemplate<"TestType"> = [
  ["Name", "Department"],
  (item) => [item.Name, item.DepartmentName],
  [1, 1],
];
