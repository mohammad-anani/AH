import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";
import {
  adminFilterSelectorField,
  admingenerateAuditFields,
} from "../utils/RoleUtil";
import { stringField, datetimeField } from "../utils/filterReusableFields";
import type { RouteConfig } from "../routeConfig";
import { patient } from "./human-resources";

export const operation: RouteConfig<"Operation"> = {
  dataFields: (operation: typesObject["Operation"]) => [
    ["Name", operation.Name],
    ["Description", operation.Description],

    [
      "Patient",
      "View Patient",
      `/admin/human-resources/patients/${operation.PatientID}`,
      "Patient",
    ],
    [
      "Department",
      "View Department",
      `/admin/departments/${operation.DepartmentID}`,
      "Department",
    ],

    ["Scheduled Date", formatDateIsoToLocal(operation.ScheduledDate)],
    ["Status", operation.Status],
    [
      "Bill",
      operation.BillID ? "View Bill" : "N/A",
      operation.BillID ? `/admin/bills/${operation.BillID}` : "",
    ],
    [
      "Created By",
      "View Receptionist",
      `/admin/human-resources/receptionists/${operation.CreatedByReceptionistID}`,
      "Receptionist",
    ],
    ["Created At", formatDateIsoToLocal(operation.CreatedAt)],
  ],
  filterFields: [
    stringField("Name"),
    stringField("Description"),
    adminFilterSelectorField("PatientID", "Patient", patient),
    ["Department", "custom", DepartmentSelectCallBack],
    datetimeField("Scheduled Date"),
    ["Status", "uniselect", ["Done", "UnDone"]],
    ...(admingenerateAuditFields("Receptionist") ?? []),
  ],
  formConfig: [],
  selectorConfig: {
    selectedDisplay: ({ ID }) => String(ID),
    path: "/admin/operations",
  },
  rowTemplate: [
    ["Name", "Patient"],
    ({ Name, PatientName }) => [Name, PatientName],
    [2, 2],
  ],
  subLinks: () => [["View Doctors", "doctors"]],
};
