import type { typesObject } from "@/utils/models/types/normal/typesObject";
import { DepartmentFilterSelectCallBack } from "@/features/department/departmentSelectCallback";

import { stringField, numberField } from "../../utils/filterReusableFields";
import type { RouteConfig } from "../../routeConfig";

export const testType: RouteConfig<"TestType"> = {
  dataFields: ({ Name, DepartmentID, Cost }: typesObject["TestType"]) => [
    ["Name", Name],
    [
      "Department",
      "View Department",
      `/receptionist/departments/${DepartmentID}`,
      "Department",
    ],
    ["Cost", `${Cost} $`],
  ],
  filterFields: [
    ["Department", "custom", DepartmentFilterSelectCallBack],
    stringField("Name"),
    numberField("Cost"),
  ],
  formConfig: [],
  selectorDisplay: ({ Name }) => Name,

  rowTemplate: [
    ["Name", "Department"],
    (item) => [item.Name, item.DepartmentName],
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
