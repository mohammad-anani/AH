import type { typesObject } from "@/utils/models/types/normal/typesObject";
import { moneyField, stringField } from "../../utils/filterReusableFields";
import { prefixFields } from "../../utils/formUtils";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import { person } from "./person";
import type { RouteConfig } from "../../routeConfig";
import { formatMoney } from "@/utils/formatters/formatMoney";
import { adminAudit } from "./Audit/adminAudit";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";

export const doctor: RouteConfig<"Doctor"> = {
  dataFields: ({
    Employee,
    Specialization,
    CreatedByAdmin,
    CreatedAt,
    CostPerAppointment: AppointmentCost,
  }: typesObject["Doctor"]) => [
    ["Specialization", Specialization],
    ["Appointment Cost", formatMoney(AppointmentCost)],
    [
      "Created By",
      CreatedByAdmin,
      `/admin/human-resources/admins/${CreatedByAdmin.ID}`,
      "Admin",
      adminAudit.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],
  filterFields: [
    ...person["filterFields"],
    stringField("Specialization"),
    moneyField("AppointmentCost"),
  ],
  formConfig: [
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
