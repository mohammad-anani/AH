import { employee } from "./employee";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { prefixFields } from "../../utils/formUtils";
import { person } from "./person";

import { admingenerateAuditFields } from "../../utils/RoleUtil";
import type { RouteConfig } from "../../routeConfig";
import { admin } from "./admin";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";

export const receptionist: RouteConfig<"Receptionist"> = {
  dataFields: ({
    Employee,
    CreatedByAdmin,
    CreatedAt,
  }: typesObject["Receptionist"]) => [
    ...employee["dataFields"](Employee),
    CreatedByAdmin
      ? [
          "Created By",
          CreatedByAdmin,
          `/admin/human-resources/admins/${CreatedByAdmin.ID}`,
          "Admin",
          admin.selectorDisplay as SelectorDisplay<EntityKey>,
        ]
      : ["Created By", "System"],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],
  filterFields: [
    ...person["filterFields"],
    ...employee["filterFields"],
    ...(admingenerateAuditFields("Receptionist") ?? []),
  ],
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
    ["Show Operartions", `/admin/operations?ReceptionistID=${ID}`],
  ],
};
