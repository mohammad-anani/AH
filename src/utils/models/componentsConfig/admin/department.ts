import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";
import { admingenerateAuditFields } from "../utils/RoleUtil";
import { stringField, phoneField } from "../utils/filterReusableFields";
import type { RouteConfig } from "../routeConfig";

export const department: RouteConfig<"Department"> = {
  dataFields: ({ Name, Phone, CreatedByAdminID, CreatedAt }) => [
    ["Name", Name],
    ["Phone", formatPhoneNumber(Phone)],
    [
      "Created By",
      "View Admin",
      `/admin/human-resources/admins/${CreatedByAdminID}`,
      "Admin",
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],
  filterFields: [
    stringField("Name"),
    phoneField("Phone"),
    ...(admingenerateAuditFields("Admin") ?? []),
  ],
  formConfig: [
    ["Name", "Name", "string", "both"],
    ["Phone", "Phone", "phone", "both"],
  ],
  selectorConfig: {
    selectedDisplay: ({ Name }) => Name,
    path: "/admin/departments",
  },
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
