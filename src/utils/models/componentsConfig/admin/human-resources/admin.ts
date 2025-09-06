import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { person } from "./person";
import type { RouteConfig } from "../../routeConfig";
import { employeeAudit } from "./Audit/employeeAudit";

export const admin: RouteConfig<"Admin"> = {
  dataFields: ({ Employee }: typesObject["Admin"]) => [
    ...employeeAudit["dataFields"](Employee),
  ],

  filterFields: [...person["filterFields"], ...employeeAudit["filterFields"]],

  formConfig: [...employeeAudit["formConfig"]],

  rowTemplate: [["Name"], (item) => [item.FullName], [2]],

  selectorDisplay: ({ FullName }) => FullName,
  subLinks: ({ ID }) => [
    ["Show Departments", `/admin/departments?CreatedByAdminID=${ID}`],
    [
      "Show Receptionists",
      `/admin/human-resources/receptionists?CreatedByAdminID=${ID}`,
    ],
    ["Show Admins", `/admin/human-resources/admins?CreatedByAdminID=${ID}`],
    ["Show Test Types", `/admin/tests/types?CreatedByAdminID=${ID}`],
    ["Show Doctors", `/admin/human-resources/doctors?CreatedByAdminID=${ID}`],
  ],
};
