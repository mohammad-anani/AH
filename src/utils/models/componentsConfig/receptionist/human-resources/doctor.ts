import type { typesObject } from "@/utils/models/types/normal/typesObject";
import { stringField } from "../../utils/filterReusableFields";
import { employee } from "./employee";

import { person } from "./person";
import type { RouteConfig } from "../../routeConfig";

export const doctor: RouteConfig<"Doctor"> = {
  dataFields: ({ Employee, Specialization }: typesObject["Doctor"]) => [
    ...employee["dataFields"](Employee),
    ["Specialization", Specialization],
  ],
  filterFields: [
    ...person["filterFields"],
    ...employee["filterFields"],
    stringField("Specialization"),
  ],
  formConfig: [],
  rowTemplate: [["Name"], (item) => [item.Name], [2]],
  selectorConfig: {
    selectedDisplay: ({ Name }) => Name,
    path: "/receptionist/human-resources/doctors",
  },
  subLinks: () => [],
};
