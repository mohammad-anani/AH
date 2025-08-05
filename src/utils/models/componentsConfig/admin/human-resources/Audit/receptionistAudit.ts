import { employee } from "../employee";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { prefixFields } from "../../../utils/formUtils";
import { person } from "../person";
import type { RouteConfig } from "@/utils/models/componentsConfig/routeConfig";

export const receptionistAudit: RouteConfig<"Receptionist"> = {
  dataFields: ({
    Employee,
    CreatedByAdminID,
    CreatedAt,
  }: typesObject["Receptionist"]) => [
    ...employee["dataFields"](Employee),
    CreatedByAdminID
      ? [
          "Created By",
          "View Admin",
          `/admin/human-resources/admins/${CreatedByAdminID}`,
          "Admin",
        ]
      : ["Created By", "System"],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],

  filterFields: [...person["filterFields"], ...employee["filterFields"]],

  formConfig: [
    ...prefixFields<"Receptionist", "Employee">(
      "Employee",
      employee["formConfig"],
    ),
  ],

  selectorDisplay: ({ Name }) => Name,

  rowTemplate: [["Name"], (item) => [item.Name], [2]],

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
