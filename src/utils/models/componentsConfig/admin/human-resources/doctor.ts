import type { typesObject } from "@/utils/models/types/normal/typesObject";
import { admingenerateAuditFields } from "../../utils/RoleUtil";
import { moneyField, stringField } from "../../utils/filterReusableFields";
import { prefixFields } from "../../utils/formUtils";
import { employee } from "./employee";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import { person } from "./person";
import type { RouteConfig } from "../../routeConfig";
import { formatMoney } from "@/utils/formatters/formatMoney";

export const doctor: RouteConfig<"Doctor"> = {
  dataFields: ({
    Employee,
    Specialization,
    CreatedByAdminID,
    CreatedAt,
    AppointmentCost,
  }: typesObject["Doctor"]) => [
    ...employee["dataFields"](Employee),
    ["Specialization", Specialization],
    ["Appointment Cost", formatMoney(AppointmentCost)],
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
    moneyField("AppointmentCost"),
    ...(admingenerateAuditFields("Admin") ?? []),
  ],
  formConfig: [
    ...prefixFields<"Doctor", "Employee">("Employee", employee["formConfig"]),
    ["Specialization", "Specialization", "string", "both"],
    ["Appointment Cost", "AppointmentCost", "money", "both"],
  ],
  rowTemplate: [["Name"], (item) => [item.Name], [2]],
  selectorDisplay: ({ Name }) => Name,
  subLinks: ({ ID }) => [
    ["Show Appointments", `/admin/appointments?DoctorID=${ID}`],
    ["Show Operations", `/admin/operations?DoctorID=${ID}`],
  ],
};
