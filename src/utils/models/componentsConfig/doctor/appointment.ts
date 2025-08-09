import type { typesObject } from "@/utils/models/types/normal/typesObject";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

import {
  datetimeField,
  stringField,
  uniselectField,
} from "../utils/filterReusableFields.ts";

import type { RouteConfig } from "../routeConfig.ts";
import { receptionistFilterSelectorField } from "../utils/RoleUtil.ts";

import { patient } from "./human-resources/patient.ts";

export const appointment: RouteConfig<"Appointment"> = {
  dataFields: ({
    Patient,

    ScheduledDate,
    Reason,
    Status,
    Notes,
  }: typesObject["Appointment"]) => [
    [
      "Patient",
      Patient,
      `/receptionist/human-resources/patients/${Patient.ID}`,
      "Patient",
      patient,
    ],

    ["Scheduled Date", formatDateIsoToLocal(ScheduledDate)],
    ["Reason", Reason],
    ["Status", Status],
    ["Notes", Notes?.length ? Notes : "N/A"],
  ],
  filterFields: [
    receptionistFilterSelectorField("PatientID", "Patient", patient),
    datetimeField("ScheduledDate"),
    stringField("Reason"),
    uniselectField("Status", ["Accepted", "Rejected"]),
    stringField("Notes"),
  ],
  formConfig: [],
  selectorDisplay: ({ DoctorName, PatientName }) =>
    DoctorName + "," + PatientName,
  rowTemplate: [
    ["Patient", "Scheduled Date", "Status", "Is Paid"],
    (item) => [
      item.PatientName,

      formatDateIsoToLocal(item.ScheduledDate),
      item.Status,
      item.IsPaid,
    ],
    [1, 1, 1, 1],
  ],
  subLinks: () => [["Show Test Orders", `test-orders`]],
};
