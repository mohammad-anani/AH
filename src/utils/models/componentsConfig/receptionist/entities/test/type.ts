import type { typesObject } from "@/utils/models/types/normal/typesObject";
import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";

import { stringField, numberField } from "../../../utils/filterReusableFields";
import type { Config } from "../../../routeConfig";

export const testType: Config<"TestType"> = {
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
    ["Department", "custom", DepartmentSelectCallBack],
    stringField("Name"),
    numberField("Cost"),
  ],
  formConfig: [],
  selectorConfig: {
    selectedDisplay: ({ Name }) => Name,
    path: "/receptionist/tests/types",
  },
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
