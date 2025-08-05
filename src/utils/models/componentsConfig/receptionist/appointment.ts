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
    DoctorID,
    Time,
    Reason,
    Status,
    Notes,
    BillID,
  }: typesObject["Appointment"]) => [
    [
      "Patient",
      "View Patient",
      `/receptionist/human-resources/patients/${PatientID}`,
      "Patient",
    ],
    [
      "Doctor",
      "View Doctor",
      `/receptionist/human-resources/doctors/${DoctorID}`,
      "Doctor",
    ],
    ["Time", Time],
    ["Reason", Reason],
    ["Status", Status],
    ["Notes", Notes],
    ["Bill", "View Bill", "/receptionist/bills/" + BillID, "Bill"],
  ],
  filterFields: [
    receptionistFilterSelectorField("PatientID", "Patient", patient),
    receptionistFilterSelectorField("DoctorID", "Doctor", doctor),
    datetimeField("Time"),
    stringField("Reason"),
    uniselectField("Status", ["Accepted", "Rejected"]),
    stringField("Notes"),
  ],
  formConfig: [
    receptionistFormSelectorField(
      "Patient",
      "PatientID",
      "Patient",
      "add",
      patient,
    ),
    receptionistFormSelectorField(
      "Doctor",
      "DoctorID",
      "Doctor",
      "add",
      doctor,
    ),
    ["Time", "Time", "datetime", "both"],
    ["Reason", "Reason", "string", "both"],
    ["Notes", "Notes", "string", "both"],
  ],
  selectorConfig: {
    selectedDisplay: ({ DoctorName, PatientName }) =>
      DoctorName + "," + PatientName,
    path: "/receptionist/appointments",
  },
  rowTemplate: [
    ["Patient", "Doctor", "Time"],
    (item) => [
      item.PatientName,
      item.DoctorName,
      formatDateIsoToLocal(item.Time),
    ],
    [1, 1, 1],
  ],
  subLinks: () => [["Show Test Orders", `test-orders`]],
};
