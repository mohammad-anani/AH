import type { typesObject } from "@/utils/models/types/normal/typesObject";
import { employee } from "./employee";

import type { RouteConfig } from "../../routeConfig";

export const doctor: RouteConfig<"Doctor"> = {
  dataFields: ({
    Employee,
    Specialization,
    CostPerAppointment,
  }: typesObject["Doctor"]) => [
    ...employee["dataFields"](Employee),
    ["Specialization", Specialization],
    ["Cost Per Appointment", CostPerAppointment],
  ],
  rowTemplate: [
    ["Name", "Specialization"],
    (item) => [item.FullName, item.Specialization],
    [2, 1],
  ],
  selectorDisplay: ({ FullName }) => FullName,
};
