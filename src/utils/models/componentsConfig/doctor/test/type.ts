import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";
import { DepartmentFilterSelectCallBack } from "@/features/department/departmentSelectCallback";

import { stringField, numberField } from "../../utils/filterReusableFields";
import type { RouteConfig } from "../../routeConfig";
import { department } from "../department";

export const testType: RouteConfig<"TestType"> = {
  dataFields: ({ Name, Department, Cost }: typesObject["TestType"]) => [
    ["Name", Name],
    [
      "Department",
      Department,
      `/receptionist/departments/${Department.ID}`,
      "Department",
      department.selectorDisplay as SelectorDisplay<EntityKey>,
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
    ["Show Test Orders", `/doctors/tests/orders?TestTypeID=${ID}`],
  ],
};
