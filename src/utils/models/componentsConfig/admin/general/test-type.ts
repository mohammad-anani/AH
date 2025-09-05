import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";
import {
  DepartmentFilterSelectCallBack,
  DepartmentFormSelectCallBack,
} from "@/features/department/departmentSelectCallback";
import { admingenerateAuditFields } from "../../utils/RoleUtil";
import { stringField, numberField } from "../../utils/filterReusableFields";
import type { RouteConfig } from "../../routeConfig";
import { department } from ".";
import { admin } from "..";
import { formatMoney } from "@/utils/formatters/formatMoney";

export const testType: RouteConfig<"TestType"> = {
  dataFields: ({
    Name,
    Department,
    Cost,
    CreatedByAdmin,
    CreatedAt,
  }: typesObject["TestType"]) => [
    ["Name", Name],
    [
      "Department",
      Department,
      `/admin/departments/${Department?.ID}`,
      "Department",
      department.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    ["Cost", `${formatMoney(Cost)}`],
    [
      "Created By",
      CreatedByAdmin,
      `/admin/human-resources/admins/${CreatedByAdmin?.ID}`,
      "Admin",
      admin.selectorDisplay as SelectorDisplay<EntityKey>,
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
      "Department",
      "custom",
      "both",
      DepartmentFormSelectCallBack,
    ],
    ["Cost", "Cost", "money", "both"],
  ],
  selectorDisplay: ({ Name, Cost }) => Name + " | " + formatMoney(Cost),

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
