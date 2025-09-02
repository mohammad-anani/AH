import { person } from "./person";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { RouteConfig } from "../../routeConfig";
import { receptionist } from "./receptionist";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { SelectorDisplay } from "@/utils/models/types/utils/selectorTypes";

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
      receptionist.selectorDisplay as SelectorDisplay<EntityKey>,
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],
  subLinks: ({ ID }) => [
    ["Show Appointments", `/admin/appointments?PatientID=${ID}`],
    ["Show Tests Appointments", `/admin/tests/appointments?PatientID=${ID}`],
    ["Show Operations", `/admin/operations?PatientID=${ID}`],
    ["Show Insurances", `/admin/insurances?PatientID=${ID}`],
  ],
  filterFields: [...person["filterFields"]],
  rowTemplate: [["Name", "Age"], (item) => [item.Name, item.Age], [2, 1]],
  formConfig: [],
  selectorDisplay: ({ Name }) => Name,
};
