import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { DepartmentFilterSelectCallBack } from "@/features/department/departmentSelectCallback";

import { stringField, numberField } from "../../utils/filterReusableFields";
import type { RouteConfig } from "../../routeConfig";
import { department } from "./department";
import { formatMoney } from "@/utils/formatters/formatMoney";

export const testType: RouteConfig<"TestType"> = {
  dataFields: ({ Name, Department, Cost }: typesObject["TestType"]) => [
    ["Name", Name],
    [
      "Department",
      Department,
      `/receptionist/departments/${Department.ID}`,
      "Department",
      department.selectorDisplay(Department),
    ],
    ["Cost", formatMoney(Cost)],
  ],
  filterFields: [
    ["Department", "custom", DepartmentFilterSelectCallBack],
    stringField("Name"),
    numberField("Cost"),
  ],
  selectorDisplay: ({ Name, Cost }) => Name + " | " + formatMoney(Cost),

  rowTemplate: [
    ["Name", "Department", "Cost"],
    (item) => [item.Name, item.DepartmentName, formatMoney(item.Cost)],
    [1, 1],
  ],
  subLinks: ({ ID }) => [
    [
      "Show Test Appointments",
      `/receptionist/tests/appointments?TestTypeID=${ID}`,
    ],
    ["Show Test Orders", `/receptionist/tests/orders?TestTypeID=${ID}`],
  ],
};
