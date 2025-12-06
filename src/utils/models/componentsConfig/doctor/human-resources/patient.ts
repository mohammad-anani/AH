import { person } from "./person";

import type { typesObject } from "@/utils/models/types/normal/typesObject";

import type { RouteConfig } from "../../routeConfig";

export const patient: RouteConfig<"Patient"> = {
  dataFields: ({ Person }: typesObject["Patient"]) => [
    ...person["dataFields"](Person),
  ],
  subLinks: ({ ID }) => [
    ["Show Appointments", `/doctor/appointments?PatientID=${ID}`],
    [
      "Show Tests Appointments",
      `/doctor/tests/appointments?PatientID=${ID}`,
    ],
    ["Show Operations", `/doctor/operations?PatientID=${ID}`],
  ],
  filterFields: [...person["filterFields"]],
  rowTemplate: [["Name", "Age"], (item) => [item.FullName, item.Age], [2, 1]],
  selectorDisplay: ({ FullName: Name }) => Name,
};
