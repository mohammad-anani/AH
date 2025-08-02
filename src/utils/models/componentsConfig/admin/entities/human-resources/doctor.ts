import type { typesObject } from "@/utils/models/types/normal/typesObject";
import { admingenerateAuditFields } from "../../utils/adminRoleUtil";
import { stringField } from "../../utils/reusableFields";
import { prefixFields } from "../../utils/formUtils";
import { employee } from "./employee";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import { person } from "./person";
import type { Config } from "../../../routeConfig";

export const doctor: Config<"Doctor"> = {
  dataFields: ({
    Employee,
    Specialization,
    CreatedByAdminID,
    CreatedAt,
  }: typesObject["Doctor"]) => [
    ...employee["dataFields"](Employee),
    ["Specialization", Specialization],
    [
      "Created By",
      "View Admin",
      `/admin/human-resources/admins/${CreatedByAdminID}`,
      "Admin",
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],
  filterFields: [
    ...person["filterFields"],
    ...employee["filterFields"],
    stringField("Specialization"),
    ...admingenerateAuditFields("Admin"),
  ],
  formConfig: [
    ...prefixFields<"Doctor", "Employee">("Employee", employee["formConfig"]),
    ["Specialization", "Specialization", "string", "both"],
  ],
  rowTemplate: [["Name"], (item) => [item.Name], [2]],
  selectorConfig: {
    selectedDisplay: ({ Name }) => Name,
    path: "/admin/human-resources/doctors",
  },
  subLinks: ({ ID }) => [
    ["Show Appointments", `/admin/appointments?DoctorID=${ID}`],
    ["Show Operations", `/admin/operations?DoctorID=${ID}`],
  ],
};
