import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

import type { RouteConfig } from "../../routeConfig";
import {
  receptionistFilterSelectorField,
  receptionistFormSelectorField,
} from "../../utils/RoleUtil";
import { doctor } from "../human-resources/doctor";
import { service } from "../../admin/services/service";

export const appointment: RouteConfig<"Appointment"> = {
  dataFields: ({
    Service,
    Doctor,
    PreviousAppointment,
  }: typesObject["Appointment"]) => [
    [
      "Doctor",
      Doctor,
      `/receptionist/human-resources/doctors/${Doctor.ID}`,
      "Doctor",
      doctor.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    [
      "Previous Appointment",
      PreviousAppointment,
      PreviousAppointment
        ? `/receptionist/services/appointments/${PreviousAppointment.ID}`
        : undefined,
      "Appointment",
      appointment.selectorDisplay as SelectorDisplay<EntityKey>,
    ],

    ...service["dataFields"](Service),
  ],
  filterFields: [
    receptionistFilterSelectorField("Doctor.ID", "Doctor", doctor),
    ...service["filterFields"],
  ],
  formConfig: [
    receptionistFormSelectorField(
      "Doctor",
      "Doctor.ID",
      "Doctor",
      "add",
      doctor,
    ),
  ],
  selectorDisplay: ({ DoctorFullName, PatientFullName, Status }) =>
    DoctorFullName + " | " + PatientFullName + " | " + Status,
  rowTemplate: [
    ["Patient", "Doctor", "Scheduled Date", "Status", "Is Paid"],
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
