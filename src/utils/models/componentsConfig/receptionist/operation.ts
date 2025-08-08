import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import {
  DoctorFilterSelectorCallback,
  DoctorFormSelectorCallback,
} from "@/features/doctor/doctorSelectCallback";

import {
  DepartmentFilterSelectCallBack,
  DepartmentFormSelectCallBack,
} from "@/features/department/departmentSelectCallback";

import { stringField, datetimeField } from "../utils/filterReusableFields";
import type { RouteConfig } from "../routeConfig";
import {
  receptionistFilterSelectorField,
  receptionistFormSelectorField,
} from "../utils/RoleUtil";
import { patient } from "./human-resources/patient";

export const operation: RouteConfig<"Operation"> = {
  dataFields: (operation: typesObject["Operation"]) => [
    ["Name", operation.Name],
    ["Description", operation.Description],

    [
      "Patient",
      "View Patient",
      `/receptionist/human-resources/patients/${operation.PatientID}`,
      "Patient",
    ],
    [
      "Department",
      "View Department",
      `/receptionist/departments/${operation.DepartmentID}`,
      "Department",
    ],

    ["Scheduled Date", formatDateIsoToLocal(operation.ScheduledDate)],
    ["Status", operation.Status],
    ["Notes", operation.Notes?.length ? operation.Notes : "N/A"],
    [
      "Bill",
      operation.BillID ? "View Bill" : "N/A",
      operation.BillID ? `/receptionist/bills/${operation.BillID}` : "",
    ],
  ],
  filterFields: [
    stringField("Name"),
    stringField("Description"),
    receptionistFilterSelectorField("PatientID", "Patient", patient),
    ["Doctors", "custom", DoctorFilterSelectorCallback],
    ["Department", "custom", DepartmentFilterSelectCallBack],
    datetimeField("Scheduled Date"),
    ["Status", "uniselect", ["Done", "UnDone"]],
  ],
  formConfig: [
    ["Name", "Name", "string", "both"],
    ["Description", "Description", "string", "both"],
    receptionistFormSelectorField(
      "Patient",
      "PatientID",
      "Patient",
      "add",
      patient,
    ),
    [
      "Department",
      "DepartmentID",
      "custom",
      "add",
      DepartmentFormSelectCallBack,
    ],
    ["Doctors", "Doctors", "custom", "both", DoctorFormSelectorCallback],
    ["Scheduled Date", "ScheduledDate", "datetime", "both"],
  ],
  selectorDisplay: ({ ID }) => String(ID),

  rowTemplate: [
    ["Name", "Patient", "Status", "Is Paid"],
    ({ Name, PatientName, Status, IsPaid }) => [
      Name,
      PatientName,
      Status,
      IsPaid,
    ],
    [1, 1, 1, 1],
  ],
  subLinks: () => [["View Doctors", "doctors"]],
};
