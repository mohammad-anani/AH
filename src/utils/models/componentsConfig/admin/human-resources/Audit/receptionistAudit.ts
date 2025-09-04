import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { person } from "../person";
import type { RouteConfig } from "@/utils/models/componentsConfig/routeConfig";
import { employeeAudit } from "./employeeAudit";

export const receptionistAudit: RouteConfig<"Receptionist"> = {
  dataFields: ({ Employee }: typesObject["Receptionist"]) => [
    ...employeeAudit["dataFields"](Employee),
  ],

  filterFields: [...person["filterFields"]],

  formConfig: [],

  selectorDisplay: ({ FullName }) => FullName,

  rowTemplate: [["Name"], (item) => [item.FullName], [2]],

  subLinks: ({ ID }) => [
    ["Show Appointments", `/admin/appointments?ReceptionistID=${ID}`],
    [
      "Show Tests Appointments",
      `/admin/tests/appointments?ReceptionistID=${ID}`,
    ],
    ["Show Patients", `/admin/human-resources/patients?ReceptionistID=${ID}`],
    ["Show Doctors", `/admin/human-resources/doctors?ReceptionistID=${ID}`],
    ["Show Operartions", `/admin/operations?ReceptionistID=${ID}`],
  ],
};
