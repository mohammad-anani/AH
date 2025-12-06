import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";

import type { RouteConfig } from "../../routeConfig";

export const department: RouteConfig<"Department"> = {
  dataFields: ({ Name, Phone }) => [
    ["Name", Name],
    ["Phone", formatPhoneNumber(Phone)],
  ],
  subLinks: ({ ID }) => [
    [
      "Show Doctors",
      `/doctor/human-resources/doctors?DepartmentID=${ID}`,
    ],

    ["Show Tests", `/doctor/tests/types?DepartmentID=${ID}`],
    ["Show Operations", `/doctor/operations?DepartmentID=${ID}`],
  ],
  selectorDisplay: ({ Name, Phone }) => Name + " | " + Phone,
};
