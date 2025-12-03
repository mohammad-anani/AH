import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import {
  datetimeField,
  stringField,
  uniselectField,
} from "../../utils/filterReusableFields.ts";

import type { RouteConfig } from "../../routeConfig.ts";
import { receptionistFilterSelectorField } from "../../utils/RoleUtil.ts";

import { doctor, patient } from "../human-resources";
import { service } from "./service.ts";

export const appointment: RouteConfig<"Appointment"> = {
  dataFields: ({
    Service,
    Doctor,
    PreviousAppointment,
  }: typesObject["Appointment"]) =>
    [
      PreviousAppointment ?
        [
          "Previous Appointment",
          PreviousAppointment,
          PreviousAppointment
            ? `/doctor/appointments/${PreviousAppointment.ID}`
            : undefined,
          "Appointment",
          appointment.selectorDisplay(PreviousAppointment),
        ] : ["Previous Appointment", "N/A"],
      ["Doctor", doctor.selectorDisplay(Doctor)],
      ...service["dataFields"](Service),
    ],
  filterFields: [
    receptionistFilterSelectorField("PatientID", "Patient", patient),
    datetimeField("ScheduledDate"),
    stringField("Reason"),
    uniselectField("Status", ["Accepted", "Rejected"]),
    stringField("Notes"),
  ],
  selectorDisplay: ({ DoctorFullName, PatientFullName }) =>
    "Doc: " + DoctorFullName + " | Pat: " + PatientFullName,
  rowTemplate: [
    ["Patient", "Scheduled Date", "Status", "Is Paid"],
    (item) => [
      item.PatientFullName,

      formatDateIsoToLocal(item.ScheduledDate),
      item.Status,
      item.IsPaid,
    ],
    [1, 1, 1, 1],
  ],
  subLinks: () => [["Show Test Orders", `test-orders`]],
};
