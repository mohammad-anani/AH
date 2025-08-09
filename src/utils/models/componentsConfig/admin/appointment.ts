import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";
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
import { patient } from "./human-resources/patient.ts";
import { bill } from "./bill.ts";
import { receptionist } from "./human-resources/receptionist.ts";

export const appointment: RouteConfig<"Appointment"> = {
  dataFields: ({
    Patient,
    Doctor,
    ScheduledDate,
    Reason,
    Status,
    Notes,
    CreatedByReceptionist,
    CreatedAt,
    Bill,
  }: typesObject["Appointment"]) => [
    [
      "Patient",
      Patient,
      `/admin/human-resources/patients/${Patient.ID}`,
      "Patient",
      patient.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    [
      "Doctor",
      Doctor,
      `/admin/human-resources/doctors/${Doctor.ID}`,
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
      "/admin/bills/" + Bill.ID,
      "Bill",
      bill.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    [
      "Receptionist",
      CreatedByReceptionist,
      `/admin/human-resources/receptionists/${CreatedByReceptionist.ID}`,
      "Receptionist",
      receptionist.selectorDisplay as SelectorDisplay<EntityKey>,
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
