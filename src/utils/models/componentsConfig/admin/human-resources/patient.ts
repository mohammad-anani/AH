import { person } from "./person";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { RouteConfig } from "../../routeConfig";
import { receptionist } from "./receptionist";

import { generateAuditFields } from "../../utils/filterReusableFields";

export const patient: RouteConfig<"Patient"> = {
  dataFields: ({
    Person,
    CreatedByReceptionist,
    CreatedAt,
  }: typesObject["Patient"]) => [
    ...person["dataFields"](Person),
    [
      "Created By",
      CreatedByReceptionist,
      `/admin/human-resources/receptionists/${CreatedByReceptionist.ID}`,
      "Receptionist",
      receptionist.selectorDisplay(CreatedByReceptionist),
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],
  subLinks: ({ ID }) => [
    ["Show Appointments", `/admin/appointments?PatientID=${ID}`],
    ["Show Tests Appointments", `/admin/tests/appointments?PatientID=${ID}`],
    ["Show Operations", `/admin/operations?PatientID=${ID}`],
    ["Show Insurances", "insurances"],
  ],
  filterFields: [
    ...person["filterFields"],
    ...generateAuditFields("Receptionist", receptionist, "Admin"),
  ],
  rowTemplate: [["Name", "Age"], (item) => [item.FullName, item.Age], [2, 1]],
  selectorDisplay: ({ FullName: Name }) => Name,
};
