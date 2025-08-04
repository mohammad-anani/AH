import type { typesObject } from "@/utils/models/types/normal/typesObject";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

import {
  datetimeField,
  stringField,
  uniselectField,
} from "../../utils/reusableFields.ts";

import type { Config } from "../../routeConfig.ts";
import { receptionistFilterSelectorField } from "../../utils/RoleUtil.ts";
import { doctor } from "./human-resources/doctor.ts";

export const appointment: Config<"Appointment"> = {
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
    receptionistFilterSelectorField(
      "DoctorID",
      "Doctor",
      doctor["filterFields"],
      doctor["selectorConfig"],
      doctor["rowTemplate"],
      doctor["dataFields"],
    ),
    datetimeField("Time"),
    stringField("Reason"),
    uniselectField("Status", ["Accepted", "Rejected"]),
    stringField("Notes"),
  ],
  formConfig: [],
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
