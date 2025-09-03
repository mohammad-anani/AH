import { person } from "./person";

import type { typesObject } from "@/utils/models/types/normal/typesObject";

import { prefixFields } from "../../utils/formUtils";
import type { RouteConfig } from "../../routeConfig";

export const patient: RouteConfig<"Patient"> = {
  dataFields: ({ Person }: typesObject["Patient"]) => [
    ...person["dataFields"](Person),
  ],
  subLinks: ({ ID }) => [
    ["Show Appointments", `/receptionist/appointments?PatientID=${ID}`],
    [
      "Show Tests Appointments",
      `/receptionist/tests/appointments?PatientID=${ID}`,
    ],
    ["Show Operations", `/receptionist/operations?PatientID=${ID}`],
    ["Show Insurances", `/receptionist/insurances?PatientID=${ID}`],
    ["Add Insurance", `/receptionist/insurances/add`, { PatientID: ID }],
  ],
  filterFields: [...person["filterFields"]],
  rowTemplate: [["Name", "Age"], (item) => [item.FullName, item.Age], [2, 1]],
  formConfig: [
    ...prefixFields<"Patient", "Person">("Person", person["formConfig"]),
  ],
  selectorDisplay: ({ FullName: Name }) => Name,
};
