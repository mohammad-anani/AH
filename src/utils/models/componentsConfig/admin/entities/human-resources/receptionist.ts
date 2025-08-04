import { employee } from "./employee";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { prefixFields } from "../../../utils/formUtils";
import { person } from "./person";

import { admingenerateAuditFields } from "../../../utils/RoleUtil";
import type { Config } from "../../../routeConfig";

export const receptionist: Config<"Receptionist"> = {
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
  filterFields: [
    ...person["filterFields"],
    ...employee["filterFields"],
    ...admingenerateAuditFields("Admin"),
  ],
  formConfig: [
    ...prefixFields<"Receptionist", "Employee">(
      "Employee",
      employee["formConfig"],
    ),
  ],
  selectorConfig: {
    selectedDisplay: ({ Name }) => Name,
    path: "/admin/human-resources/receptionists",
  },
  rowTemplate: [["Name"], (item) => [item.Name], [2]],
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
