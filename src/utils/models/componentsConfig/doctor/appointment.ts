import type { typesObject } from "@/utils/models/types/normal/typesObject";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

import {
  datetimeField,
  stringField,
  uniselectField,
} from "../utils/filterReusableFields.ts";

import type { RouteConfig } from "../routeConfig.ts";
import {
  receptionistFilterSelectorField,
  receptionistFormSelectorField,
} from "../utils/RoleUtil.ts";
import { doctor } from "./human-resources/doctor.ts";
import { patient } from "./human-resources/patient.ts";

export const appointment: RouteConfig<"Appointment"> = {
  dataFields: ({
    PatientID,

    Time,
    Reason,
    Status,
    Notes,
  }: typesObject["Appointment"]) => [
    [
      "Patient",
      "View Patient",
      `/receptionist/human-resources/patients/${PatientID}`,
      "Patient",
    ],

    ["Time", formatDateIsoToLocal(Time)],
    ["Reason", Reason],
    ["Status", Status],
    ["Notes", Notes?.length ? Notes : "N/A"],
  ],
  filterFields: [
    receptionistFilterSelectorField("PatientID", "Patient", patient),
    datetimeField("Time"),
    stringField("Reason"),
    uniselectField("Status", ["Accepted", "Rejected"]),
    stringField("Notes"),
  ],
  formConfig: [],
  selectorDisplay: ({ DoctorName, PatientName }) =>
    DoctorName + "," + PatientName,
  rowTemplate: [
    ["Patient", "Time", "Status", "Is Paid"],
    (item) => [
      item.PatientName,

      formatDateIsoToLocal(item.Time),
      item.Status,
      item.IsPaid,
    ],
    [1, 1, 1, 1],
  ],
  subLinks: () => [["Show Test Orders", `test-orders`]],
};
