import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";

import { stringField, datetimeField } from "../../utils/reusableFields";
import type { Config } from "../../routeConfig";
import { receptionistFilterSelectorField } from "../../utils/RoleUtil";
import { patient } from "./human-resources";

export const operation: Config<"Operation"> = {
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
    [
      "Bill",
      operation.BillID ? "View Bill" : "N/A",
      operation.BillID ? `/receptionist/bills/${operation.BillID}` : "",
    ],
  ],
  filterFields: [
    stringField("Name"),
    stringField("Description"),
    receptionistFilterSelectorField(
      "PatientID",
      "Patient",
      patient["filterFields"],
      patient["selectorConfig"],
      patient["rowTemplate"],
      patient["dataFields"],
    ),
    ["Department", "custom", DepartmentSelectCallBack],
    datetimeField("Scheduled Date"),
    ["Status", "uniselect", ["Done", "UnDone"]],
  ],
  formConfig: [],
  selectorConfig: {
    selectedDisplay: ({ ID }) => String(ID),
    path: "/receptionist/operations",
  },
  rowTemplate: [
    ["Name", "Patient"],
    ({ Name, PatientName }) => [Name, PatientName],
    [2, 2],
  ],
  subLinks: () => [["View Doctors", "doctors"]],
};
