import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

import {
  adminFilterSelectorField,
  admingenerateAuditFields,
} from "../../utils/RoleUtil";

import type { RouteConfig } from "../../routeConfig";
import { doctor } from "../human-resources/doctor";
import { service } from "./service";

export const appointment: RouteConfig<"Appointment"> = {
  dataFields: ({
    Service,
    Doctor,
    PreviousAppointment,
  }: typesObject["Appointment"]) => [
    [
      "Doctor",
      Doctor,
      `/admin/human-resources/doctors/${Doctor.ID}`,
      "Doctor",
      doctor.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    [
      "Previous Appointment",
      PreviousAppointment,
      PreviousAppointment
        ? `/admin/services/appointments/${PreviousAppointment.ID}`
        : undefined,
      "Appointment",
      appointment.selectorDisplay as SelectorDisplay<EntityKey>,
    ],

    ...service["dataFields"](Service),
  ],
  filterFields: [
    adminFilterSelectorField("DoctorID", "Doctor", doctor),
    ...service["filterFields"],
    ...(admingenerateAuditFields("Receptionist") ?? []),
  ],
  selectorDisplay: ({ DoctorFullName, PatientFullName, Status }) =>
    DoctorFullName + " | " + PatientFullName + " | " + Status,
  rowTemplate: [
    ["Patient", "Doctor", "ScheduledDate", "Status", "Is Paid"],
    (item) => [
      item.PatientFullName,
      item.DoctorFullName,
      formatDateIsoToLocal(item.ScheduledDate),
      item.Status,
      item.IsPaid,
    ],
    [1, 1, 1, 1, 1],
  ],
  subLinks: () => [["Show Test Orders", `test-orders`]],
};
