import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { DepartmentFilterSelectCallBack } from "@/features/department/departmentSelectCallback";
import { DoctorFilterSelectorCallback } from "@/features/doctor/doctorSelectCallback";
import type { RouteConfig } from "../../routeConfig";
import { datetimeField, stringField } from "../../utils/filterReusableFields";
import { department } from "../general/department";
import { service } from "./service";

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
        department.selectorDisplay(Department),
      ],

      ...service["dataFields"](Service),
    ],
  filterFields: [
    stringField("Name"),
    stringField("Description"),
    ["Department", "custom", DepartmentFilterSelectCallBack],
    datetimeField("Scheduled Date"),
    ...service["filterFields"],
    ["Doctors", "custom", DoctorFilterSelectorCallback],
  ],
  formConfig: [],
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
    [2, 2, 2, 2],
  ],
  subLinks: () => [["View Doctors", "doctors"]],
};
