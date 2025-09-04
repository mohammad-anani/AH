import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";
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
      department.selectorDisplay as SelectorDisplay<EntityKey>,
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
