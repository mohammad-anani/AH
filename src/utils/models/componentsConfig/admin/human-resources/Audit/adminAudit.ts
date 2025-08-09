import { employee } from "../employee";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { prefixFields } from "../../../utils/formUtils";
import { person } from "../person";
import type { RouteConfig } from "@/utils/models/componentsConfig/routeConfig";
import type { rowTypesObject } from "@/utils/models/types/row/rowTypesObject";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";

export const adminAudit: RouteConfig<"Admin"> = {
  dataFields: ({
    Employee,
    CreatedByAdmin,
    CreatedAt,
  }: typesObject["Admin"]) => [
    ...employee["dataFields"](Employee),
    CreatedByAdmin?.ID
      ? [
          "Created By",
          CreatedByAdmin,
          `/admin/human-resources/admins/${CreatedByAdmin?.ID}`,
          "Admin",
          ((admin: rowTypesObject["Admin"]) =>
            admin?.Name) as SelectorDisplay<EntityKey>,
        ]
      : ["Created By", "System"],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],

  filterFields: [...person["filterFields"], ...employee["filterFields"]],

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
  ],
};
