import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { prefixFields } from "../../utils/formUtils";
import { person } from "./person";
import type { RouteConfig } from "../../routeConfig";
import { employeeAudit } from "./Audit/employeeAudit";

export const receptionist: RouteConfig<"Receptionist"> = {
  dataFields: ({ Employee }: typesObject["Receptionist"]) => [
    ...employeeAudit["dataFields"](Employee),
  ],

  filterFields: [...person["filterFields"], ...employeeAudit["filterFields"]],

  formConfig: [
    ...prefixFields<"Receptionist", "Employee">(
      "Employee",
      employeeAudit["formConfig"],
    ),
  ],

  rowTemplate: [["Name"], (item) => [item.FullName], [2]],

  selectorDisplay: ({ FullName }) => FullName,
  subLinks: ({ ID }) => [
    ["Show Appointments", `/admin/appointments?ReceptionistID=${ID}`],
    [
      "Show Tests Appointments",
      `/admin/tests/appointments?ReceptionistID=${ID}`,
    ],
    ["Show Patients", `/admin/human-resources/patients?ReceptionistID=${ID}`],
    ["Show Operartions", `/admin/operations?ReceptionistID=${ID}`],
  ],
};
