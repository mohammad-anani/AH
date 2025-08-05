import { admingenerateAuditFields } from "../../utils/RoleUtil";
import { employee } from "./employee";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { prefixFields } from "../../utils/formUtils";
import { person } from "./person";
import type { RouteConfig } from "../../routeConfig";

export const admin: RouteConfig<"Admin"> = {
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

  filterFields: [
    ...person["filterFields"],
    ...employee["filterFields"],
    ...(admingenerateAuditFields("Admin") ?? []),
  ],

  formConfig: [
    ...prefixFields<"Admin", "Employee">("Employee", employee["formConfig"]),
  ],

  rowTemplate: [["Name"], (item) => [item.Name], [2]],

  selectorDisplay: ({ Name }) => Name,
  subLinks: ({ ID }) => [
    ["Show Departments", `/admin/departments?AdminID=${ID}`],
    [
      "Show Receptionists",
      `/admin/human-resources/receptionists?AdminID=${ID}`,
    ],
    ["Show Admins", `/admin/human-resources/admins?AdminID=${ID}`],
    ["Show Test Types", `/admin/tests/types?AdminID=${ID}`],
    ["Show Doctors", `/admin/human-resources/doctors?AdminID=${ID}`],
  ],
};
