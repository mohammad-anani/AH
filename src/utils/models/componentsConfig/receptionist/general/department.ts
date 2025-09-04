import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";

import type { RouteConfig } from "../../routeConfig";
import { phoneField, stringField } from "../../utils/filterReusableFields";

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
  selectorDisplay: (dep) => dep.Name,

  filterFields: [stringField("Name"), phoneField("Phone")],
  formConfig: [
    ["Name", "Name", "string", "both"],
    ["Phone", "Phone", "phone", "both"],
  ],

  rowTemplate: [
    ["Name", "Phone"],
    (item) => [item.Name, formatPhoneNumber(item.Phone)],
    [2, 1],
  ],
};
