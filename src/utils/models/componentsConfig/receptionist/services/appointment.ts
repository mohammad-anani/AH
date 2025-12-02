import type { typesObject } from "@/utils/models/types/normal/typesObject";

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
        doctor.selectorDisplay(Doctor),
      ],
      PreviousAppointment
        ? [
          "Previous Appointment",
          PreviousAppointment,
          PreviousAppointment
            ? `/receptionist/appointments/${PreviousAppointment.ID}`
            : undefined,
          "Appointment",
          appointment.selectorDisplay(PreviousAppointment),
        ]
        : ["Previous Appointment", "N/A"],

      ...service["dataFields"](Service),
    ],
  filterFields: [
    receptionistFilterSelectorField("DoctorID", "Doctor", doctor),
    ...service["filterFields"],
  ],
  formConfig: [
    receptionistFormSelectorField(
      "Doctor",
      "DoctorID",
      "Doctor",
      "add",
      doctor,
    ),
    ...service["formConfig"],
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
  subLinks: ({ Service, PreviousAppointment }) => [
    ["Show Test Orders", `test-orders`],
    ...(Service.Status === "Completed" && PreviousAppointment
      ? [["Reserve Follow-up", "reserve-follow-up"] as [string, string]]
      : []),
  ],
};
