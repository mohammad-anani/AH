import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { stringField } from "../../utils/filterReusableFields";
import type { RouteConfig } from "../../routeConfig";
import { receptionistFilterSelectorField } from "../../utils/RoleUtil";
import { department } from "../general/department";

import { DepartmentFormSelectCallBack } from "@/features/department/departmentSelectCallback";
import { DoctorFormSelectorCallback } from "@/features/doctor/doctorSelectCallback";
import { service } from "../../admin";

export const operation: RouteConfig<"Operation"> = {
  dataFields: ({
    Service,
    Name,
    Description,
    Department,
  }: typesObject["Operation"]) => [
    ["Name", Name],
    ["Description", Description],
    [
      "Department",
      Department,
      `/receptionist/general/departments/${Department.ID}`,
      "Department",
      department.selectorDisplay(Department),
    ],

    ...service["dataFields"](Service),
  ],
  filterFields: [
    stringField("Name"),
    stringField("Description"),
    receptionistFilterSelectorField("DepartmentID", "Department", department),
    ...service["filterFields"],
  ],
  formConfig: [
    ["Name", "Name", "string", "both"],
    ["Description", "Description", "string", "both"],
    [
      "Department",
      "DepartmentID",
      "custom",
      "add",
      DepartmentFormSelectCallBack,
    ],
    [
      "Doctor",
      "OperationDoctors",
      "custom",
      "both",
      DoctorFormSelectorCallback,
    ],
    ["Bill", "Amount", "money", "add"],
    ...service["formConfig"],
  ],
  selectorDisplay: ({ Name, PatientFullName, Status }) =>
    Name + " | Patient:" + PatientFullName + " | " + Status,

  rowTemplate: [
    ["Name", "Patient", "Status", "Is Paid"],
    ({ Name, PatientFullName, Status, IsPaid }) => [
      Name,
      PatientFullName,
      Status,
      IsPaid,
    ],
    [1, 1, 1, 1],
  ],
  subLinks: () => [["View Doctors", "doctors"]],
};
