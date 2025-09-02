import { admingenerateAuditFields } from "../../utils/RoleUtil";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";

import { prefixFields } from "../../utils/formUtils";
import { person } from "./person";
import type { RouteConfig } from "../../routeConfig";
import { employeeAudit } from "./Audit/employeeAudit";

export const admin: RouteConfig<"Admin"> = {
  dataFields: ({
    Employee,
    CreatedByAdmin,
    CreatedAt,
  }: typesObject["Admin"]) => [
    ...employeeAudit["dataFields"](Employee),
    CreatedByAdmin
      ? [
          "Created By",
          CreatedByAdmin,
          `/admin/human-resources/admins/${CreatedByAdmin?.ID}`,
          "Admin",
          admin.selectorDisplay as SelectorDisplay<EntityKey>,
        ]
      : ["Created By", "System"],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],

  filterFields: [...person["filterFields"], ...employeeAudit["filterFields"]],

  formConfig: [
    ...prefixFields<"Admin", "Employee">(
      "Employee",
      employeeAudit["formConfig"],
    ),
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
