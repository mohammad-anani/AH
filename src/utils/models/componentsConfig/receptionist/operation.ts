import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";
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
import { department } from "./department";
import { bill } from "./bill";

export const operation: RouteConfig<"Operation"> = {
  dataFields: (operation: typesObject["Operation"]) => [
    ["Name", operation.Name],
    ["Description", operation.Description],

    [
      "Patient",
      operation.Patient,
      `/receptionist/human-resources/patients/${operation.Patient.ID}`,
      "Patient",
      patient.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    [
      "Department",
      operation.Department,
      `/receptionist/departments/${operation.Department.ID}`,
      "Department",
      department.selectorDisplay as SelectorDisplay<EntityKey>,
    ],

    ["Scheduled Date", formatDateIsoToLocal(operation.ScheduledDate)],
    ["Status", operation.Status],
    ["Notes", operation.Notes?.length ? operation.Notes : "N/A"],
    [
      "Bill",
      operation.Bill || "N/A",
      operation.Bill ? `/receptionist/bills/${operation.Bill.ID}` : "",
      "Bill",
      bill.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
  ],
  filterFields: [
    stringField("Name"),
    stringField("Description"),
    receptionistFilterSelectorField("Patient", "Patient", patient),
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
      "Department.ID",
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
