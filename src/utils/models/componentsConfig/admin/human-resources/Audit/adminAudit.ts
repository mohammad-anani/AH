import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { person } from "../person";
import type { RouteConfig } from "@/utils/models/componentsConfig/routeConfig";
import { employeeAudit as employee } from "./employeeAudit";

export const adminAudit: RouteConfig<"Admin"> = {
  dataFields: ({ Employee }: typesObject["Admin"]) => [
    ...employee["dataFields"](Employee),
  ],

  filterFields: [...person["filterFields"], ...employee["filterFields"]],

  formConfig: [...employee["formConfig"]],

  rowTemplate: [["Name"], (item) => [item.FullName], [2]],

  selectorDisplay: ({ FullName }) => FullName,

  subLinks: ({ ID }) => [
    ["Show Departments", `/admin/departments?AdminID=${ID}`],
    [
      "Show Receptionists",
      `/admin/human-resources/receptionists?AdminID=${ID}`,
    ],
    ["Show Admins", `/admin/human-resources/admins?AdminID=${ID}`],
    ["Show Test Types", `/admin/tests/types?AdminID=${ID}`],
  ],
};
