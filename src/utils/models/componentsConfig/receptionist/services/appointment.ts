import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";
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
import { bill } from "./bill.ts";

export const appointment: RouteConfig<"Appointment"> = {
  dataFields: ({
    Patient,
    Doctor,
    ScheduledDate,
    Reason,
    Status,
    Notes,
    Bill,
  }: typesObject["Appointment"]) => [
    [
      "Patient",
      Patient,
      `/receptionist/human-resources/patients/${Patient.ID}`,
      "Patient",
      patient.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    [
      "Doctor",
      Doctor,
      `/receptionist/human-resources/doctors/${Doctor.ID}`,
      "Doctor",
      doctor.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    ["Scheduled Date", formatDateIsoToLocal(ScheduledDate)],
    ["Reason", Reason],
    ["Status", Status],
    ["Notes", Notes?.length ? Notes : "N/A"],
    [
      "Bill",
      Bill,
      "/receptionist/bills/" + Bill.ID,
      "Bill",
      bill.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
  ],
  filterFields: [
    receptionistFilterSelectorField("PatientID", "Patient", patient),
    receptionistFilterSelectorField("DoctorID", "Doctor", doctor),
    datetimeField("ScheduledDate"),
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
    ["Scheduled Date", "ScheduledDate", "datetime", "add"],
    ["Reason", "Reason", "string", "both"],
    ["Notes", "Notes", "text", "both"],
  ],
  selectorDisplay: ({ DoctorName, PatientName }) =>
    DoctorName + "," + PatientName,
  rowTemplate: [
    ["Patient", "Doctor", "Scheduled Date", "Status", "Is Paid"],
    (item) => [
      item.PatientName,
      item.DoctorName,
      formatDateIsoToLocal(item.ScheduledDate),
      item.Status,
      item.IsPaid,
    ],
    [1, 1, 1, 1, 1],
  ],
  subLinks: () => [["Show Test Orders", `test-orders`]],
};
