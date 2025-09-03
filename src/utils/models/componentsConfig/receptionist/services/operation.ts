import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";

import { stringField } from "../../utils/filterReusableFields";
import type { RouteConfig } from "../../routeConfig";
import {
  receptionistFilterSelectorField,
  receptionistFormSelectorField,
} from "../../utils/RoleUtil";
import { department } from "../general/department";
import { service } from "../../admin/services/service";

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
      department.selectorDisplay as SelectorDisplay<EntityKey>,
    ],

    ...service["dataFields"](Service),
  ],
  filterFields: [
    stringField("Name"),
    stringField("Description"),
    receptionistFilterSelectorField("Department.ID", "Department", department),
    ...service["filterFields"],
  ],
  formConfig: [
    ["Name", "Name", "string", "both"],
    ["Description", "Description", "text", "both"],
    receptionistFormSelectorField(
      "Department",
      "Department.ID",
      "Department",
      "add",
      department,
    ),
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
