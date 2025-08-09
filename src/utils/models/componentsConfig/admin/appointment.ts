import type { typesObject } from "@/utils/models/types/normal/typesObject";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

import {
  adminFilterSelectorField,
  admingenerateAuditFields,
} from "../utils/RoleUtil.ts";
import {
  datetimeField,
  stringField,
  uniselectField,
} from "../utils/filterReusableFields.ts";

import type { RouteConfig } from "../routeConfig.ts";
import { doctor } from "./human-resources/doctor.ts";

export const appointment: RouteConfig<"Appointment"> = {
  dataFields: ({
    PatientID,
    DoctorID,
    ScheduledDate,
    Reason,
    Status,
    Notes,
    CreatedByReceptionistID,
    CreatedAt,
    BillID,
  }: typesObject["Appointment"]) => [
    [
      "Patient",
      "View Patient",
      `/admin/human-resources/patients/${PatientID}`,
      "Patient",
    ],
    [
      "Doctor",
      "View Doctor",
      `/admin/human-resources/doctors/${DoctorID}`,
      "Doctor",
    ],
    ["Scheduled Date", formatDateIsoToLocal(ScheduledDate)],
    ["Reason", Reason],
    ["Status", Status],
    ["Notes", Notes?.length ? Notes : "N/A"],
    ["Bill", "View Bill", "/admin/bills/" + BillID, "Bill"],
    [
      "Receptionist",
      "View Receptionist",
      `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
      "Receptionist",
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],
  filterFields: [
    adminFilterSelectorField("DoctorID", "Doctor", doctor),
    datetimeField("ScheduledDate"),
    stringField("Reason"),
    uniselectField("Status", ["Accepted", "Rejected"]),
    stringField("Notes"),
    ...(admingenerateAuditFields("Receptionist") ?? []),
  ],
  formConfig: [],
  selectorDisplay: ({ DoctorName, PatientName }) =>
    DoctorName + "," + PatientName,
  rowTemplate: [
    ["Patient", "Doctor", "ScheduledDate", "Status", "Is Paid"],
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
