import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { DepartmentFilterSelectCallBack } from "@/features/department/departmentSelectCallback";

import { formatMoney } from "@/utils/formatters/formatMoney";
import type { RouteConfig } from "../../routeConfig";
import { numberField, stringField } from "../../utils/filterReusableFields";
import { department } from "./department";

export const testType: RouteConfig<"TestType"> = {
  dataFields: ({ Name, Department, Cost }: typesObject["TestType"]) => [
    ["Name", Name],
    [
      "Department",
      Department,
      `/doctor/departments/${Department.ID}`,
      "Department",
      department.selectorDisplay(Department),
    ],
    ["Cost", formatMoney(Cost)],
  ],
  filterFields: [
    stringField("Name"),
    numberField("Cost"),
    ["Department", "custom", DepartmentFilterSelectCallBack],
  ],
  selectorDisplay: ({ Name, Cost }) => Name + " | " + formatMoney(Cost),

  rowTemplate: [
    ["Name", "Department"],
    (item) => [item.Name, item.DepartmentName],
    [1, 1],
  ],
  subLinks: ({ ID }) => [
    ["Show Test Orders", `/doctors/tests/orders?TestTypeID=${ID}`],
  ],
};
