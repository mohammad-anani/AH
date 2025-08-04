import { employee } from "../employee";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { prefixFields } from "../../../utils/formUtils";
import { person } from "../person";
import type { RouteConfig } from "@/utils/models/componentsConfig/routeConfig";

export const adminAudit: RouteConfig<"Admin"> = {
  dataFields: ({
    Employee,
    CreatedByAdminID,
    CreatedAt,
  }: typesObject["Admin"]) => [
    ...employee["dataFields"](Employee),
    CreatedByAdminID
      ? [
          "Created By",
          "View Admin",
          `/admin/human-resources/admins/${CreatedByAdminID}`,
          "Admin",
        ]
      : ["Created By", "System"],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],

  filterFields: [...person["filterFields"], ...employee["filterFields"]],

  formConfig: [
    ...prefixFields<"Admin", "Employee">("Employee", employee["formConfig"]),
  ],

  rowTemplate: [["Name"], (item) => [item.Name], [2]],

  selectorConfig: {
    selectedDisplay: ({ Name }) => Name,
    path: "/admin/human-resources/admins",
  },

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
