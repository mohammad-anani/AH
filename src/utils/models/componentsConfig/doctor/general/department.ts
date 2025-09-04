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
      `/receptionist/human-resources/doctors?DepartmentID=${ID}`,
    ],

    ["Show Tests", `/receptionist/tests/types?DepartmentID=${ID}`],
    ["Show Operations", `/receptionist/operations?DepartmentID=${ID}`],
  ],
  selectorDisplay: ({ Name, Phone }) => Name + " | " + Phone,
};
