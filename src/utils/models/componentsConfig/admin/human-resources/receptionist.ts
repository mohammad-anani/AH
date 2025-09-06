import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { person } from "./person";
import type { RouteConfig } from "../../routeConfig";
import { employeeAudit } from "./Audit/employeeAudit";

export const receptionist: RouteConfig<"Receptionist"> = {
  dataFields: ({ Employee }: typesObject["Receptionist"]) => [
    ...employeeAudit["dataFields"](Employee),
  ],

  filterFields: [...person["filterFields"], ...employeeAudit["filterFields"]],

  formConfig: [...employeeAudit["formConfig"]],

  rowTemplate: [["Name"], (item) => [item.FullName], [2]],

  selectorDisplay: ({ FullName }) => FullName,
  subLinks: ({ ID }) => [
    ["Show Appointments", `/admin/appointments?CreatedByReceptionistID=${ID}`],
    [
      "Show Tests Appointments",
      `/admin/tests/appointments?CreatedByReceptionistID=${ID}`,
    ],
    [
      "Show Patients",
      `/admin/human-resources/patients?CreatedByReceptionistID=${ID}`,
    ],
    ["Show Operartions", `/admin/operations?CreatedByReceptionistID=${ID}`],
  ],
};
