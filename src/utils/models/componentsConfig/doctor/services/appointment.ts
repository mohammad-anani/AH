import type { typesObject } from "@/utils/models/types/normal/typesObject";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

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
  }: typesObject["Appointment"]) => [
    ...(PreviousAppointment
      ? [
          "Previous Appointment",
          appointment.selectorDisplay(PreviousAppointment),
        ]
      : []),
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
    "Doctor:" + DoctorFullName + " | Patient:" + PatientFullName,
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
