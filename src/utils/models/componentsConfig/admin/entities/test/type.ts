import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

import type { typesObject } from "@/utils/models/types/normal/typesObject";
import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";
import { admingenerateAuditFields } from "../../../utils/RoleUtil";
import { stringField, numberField } from "../../../utils/filterReusableFields";
import type { Config } from "../../../routeConfig";

export const testType: Config<"TestType"> = {
  dataFields: ({
    Name,
    DepartmentID,
    Cost,
    CreatedByAdminID,
    CreatedAt,
  }: typesObject["TestType"]) => [
    ["Name", Name],
    [
      "Department",
      "View Department",
      `/admin/departments/${DepartmentID}`,
      "Department",
    ],
    ["Cost", `${Cost} $`],
    [
      "Created By",
      "View Admin",
      `/admin/human-resources/admins/${CreatedByAdminID}`,
      "Admin",
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],
  filterFields: [
    ["Department", "custom", DepartmentSelectCallBack],
    stringField("Name"),
    numberField("Cost"),
    ...admingenerateAuditFields("Admin"),
  ],
  formConfig: [
    ["Name", "Name", "string", "both"],
    ["Department", "DepartmentID", "custom", "both", DepartmentSelectCallBack],
    ["Cost", "Cost", "money", "both"],
  ],
  selectorConfig: {
    selectedDisplay: ({ Name }) => Name,
    path: "/admin/tests/types",
  },
  rowTemplate: [
    ["Name", "Department"],
    (item) => [item.Name, item.DepartmentName],
    [1, 1],
  ],
  subLinks: ({ ID }) => [
    ["Show Test Appointments", `/admin/tests/appointments?TestTypeID=${ID}`],
    ["Show Test Orders", `/admin/tests/orders?TestTypeID=${ID}`],
  ],
};
