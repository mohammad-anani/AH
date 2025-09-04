import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";

import { DepartmentFilterSelectCallBack } from "@/features/department/departmentSelectCallback";
import { admingenerateAuditFields } from "../../utils/RoleUtil";
import { stringField, datetimeField } from "../../utils/filterReusableFields";
import type { RouteConfig } from "../../routeConfig";
import { department } from "../general";
import { DoctorFilterSelectorCallback } from "@/features/doctor/doctorSelectCallback";
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
      Department,
      `/admin/departments/${Department.ID}`,
      "Department",
      department.selectorDisplay as SelectorDisplay<EntityKey>,
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
    ...(admingenerateAuditFields("Receptionist") ?? []),
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
    [2, 2, 2, 2],
  ],
  subLinks: () => [["View Doctors", "doctors"]],
};
