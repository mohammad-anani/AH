import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

import type { typesObject } from "@/utils/models/types/normal/typesObject";
import {
  DepartmentFilterSelectCallBack,
  DepartmentFormSelectCallBack,
} from "@/features/department/departmentSelectCallback";
import { admingenerateAuditFields } from "../../utils/RoleUtil";
import { stringField, numberField } from "../../utils/filterReusableFields";
import type { RouteConfig } from "../../routeConfig";

export const testType: RouteConfig<"TestType"> = {
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
    ["Department", "custom", DepartmentFilterSelectCallBack],
    stringField("Name"),
    numberField("Cost"),
    ...(admingenerateAuditFields("Admin") ?? []),
  ],
  formConfig: [
    ["Name", "Name", "string", "both"],
    [
      "Department",
      "DepartmentID",
      "custom",
      "add",
      DepartmentFormSelectCallBack,
    ],
    ["Cost", "Cost", "money", "both"],
  ],
  selectorDisplay: ({ Name }) => Name,

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
