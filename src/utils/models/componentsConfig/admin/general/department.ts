import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";
import {
  stringField,
  phoneField,
  generateAuditFields,
} from "../../utils/filterReusableFields";
import type { RouteConfig } from "../../routeConfig";
import type { rowTypesObject } from "../../../types/row/rowTypesObject";

import { adminAudit } from "../human-resources/Audit/adminAudit";

export const department: RouteConfig<"Department"> = {
  dataFields: ({ Name, Phone, CreatedByAdmin, CreatedAt }) => [
    ["Name", Name],
    ["Phone", formatPhoneNumber(Phone)],
    [
      "Created By",
      CreatedByAdmin,
      `/admin/human-resources/admins/${CreatedByAdmin.ID}`,
      "Admin",
      ((admin: rowTypesObject["Admin"]) =>
        admin?.FullName) as SelectorDisplay<EntityKey>,
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],
  filterFields: [stringField("Name"), phoneField("Phone")],
  ...generateAuditFields("Admin", adminAudit, "Admin"),
  formConfig: [
    ["Name", "Name", "string", "both"],
    ["Phone", "Phone", "phone", "both"],
  ],
  selectorDisplay: ({ Name }) => Name,

  rowTemplate: [
    ["Name", "Phone"],
    (item) => [item.Name, formatPhoneNumber(item.Phone)],
    [2, 1],
  ],
  subLinks: ({ ID }) => [
    ["Show Doctors", `/admin/human-resources/doctors?DepartmentID=${ID}`],
    [
      "Show Receptionists",
      `/admin/human-resources/receptionists?DepartmentID=${ID}`,
    ],
    ["Show Admins", `/admin/human-resources/admins?DepartmentID=${ID}`],
    ["Show Tests", `/admin/tests/types?DepartmentID=${ID}`],
    ["Show Operations", `/admin/operations?DepartmentID=${ID}`],
  ],
};
