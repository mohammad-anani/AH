import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";

import { DepartmentFilterSelectCallBack } from "@/features/department/departmentSelectCallback";
import {
  adminFilterSelectorField,
  admingenerateAuditFields,
} from "../utils/RoleUtil";
import { stringField, datetimeField } from "../utils/filterReusableFields";
import type { RouteConfig } from "../routeConfig";
import { patient } from "./human-resources";
import { department } from "./department";
import { bill } from "./bill";
import { receptionist } from "./human-resources/receptionist";
import { DoctorFilterSelectorCallback } from "@/features/doctor/doctorSelectCallback";

export const operation: RouteConfig<"Operation"> = {
  dataFields: (operation: typesObject["Operation"]) => [
    ["Name", operation.Name],
    ["Description", operation.Description],

    [
      "Patient",
      operation.Patient,
      `/admin/human-resources/patients/${operation.Patient.ID}`,
      "Patient",
      patient.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    [
      "Department",
      operation.Department,
      `/admin/departments/${operation.Department.ID}`,
      "Department",
      department.selectorDisplay as SelectorDisplay<EntityKey>,
    ],

    ["Scheduled Date", formatDateIsoToLocal(operation.ScheduledDate)],
    ["Status", operation.Status],
    ["Notes", operation.Notes?.length ? operation.Notes : "N/A"],
    operation.Bill
      ? [
          "Bill",
          operation.Bill,
          `/admin/bills/${operation.Bill.ID}`,
          "Bill",
          bill.selectorDisplay as SelectorDisplay<EntityKey>,
        ]
      : ["Bill", "N/A"],
    [
      "Created By",
      operation.CreatedByReceptionist,
      `/admin/human-resources/receptionists/${operation.CreatedByReceptionist.ID}`,
      "Receptionist",
      receptionist.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    ["Created At", formatDateIsoToLocal(operation.CreatedAt)],
  ],
  filterFields: [
    stringField("Name"),
    stringField("Description"),
    adminFilterSelectorField("PatientID", "Patient", patient),
    ["Department", "custom", DepartmentFilterSelectCallBack],
    datetimeField("Scheduled Date"),
    ["Doctors", "custom", DoctorFilterSelectorCallback],
    ["Status", "uniselect", ["Done", "UnDone"]],
    ...(admingenerateAuditFields("Receptionist") ?? []),
  ],
  formConfig: [],
  selectorDisplay: ({ ID }) => String(ID),

  rowTemplate: [
    ["Name", "Patient", "Status", "Is Paid"],
    ({ Name, PatientName, Status, IsPaid }) => [
      Name,
      PatientName,
      Status,
      IsPaid,
    ],
    [2, 2, 2, 2],
  ],
  subLinks: () => [["View Doctors", "doctors"]],
};
