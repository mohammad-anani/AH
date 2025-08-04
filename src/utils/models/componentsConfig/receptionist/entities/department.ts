import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";

import type { Config } from "../../routeConfig";

export const department: Config<"Department"> = {
  dataFields: ({ Name, Phone }) => [
    ["Name", Name],
    ["Phone", formatPhoneNumber(Phone)],
  ],
  filterFields: [],
  subLinks: ({ ID }) => [
    [
      "Show Doctors",
      `/receptionist/human-resources/doctors?DepartmentID=${ID}`,
    ],

    ["Show Tests", `/receptionist/tests/types?DepartmentID=${ID}`],
    ["Show Operations", `/receptionist/operations?DepartmentID=${ID}`],
  ],
  formConfig: [],
  rowTemplate: [[], () => [], []],
  selectorConfig: { selectedDisplay: () => "", path: "" },
};
