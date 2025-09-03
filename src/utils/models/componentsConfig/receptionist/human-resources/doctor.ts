import type { typesObject } from "@/utils/models/types/normal/typesObject";
import { moneyField, stringField } from "../../utils/filterReusableFields";
import { employee } from "./employee";

import { person } from "./person";
import type { RouteConfig } from "../../routeConfig";
import { formatMoney } from "@/utils/formatters/formatMoney";

export const doctor: RouteConfig<"Doctor"> = {
  dataFields: ({
    Employee,
    Specialization,
    CostPerAppointment: AppointmentCost,
  }: typesObject["Doctor"]) => [
    ...employee["dataFields"](Employee),
    ["Specialization", Specialization],
    ["Appointment Cost", formatMoney(AppointmentCost)],
  ],
  filterFields: [
    ...person["filterFields"],
    ...employee["filterFields"],
    stringField("Specialization"),
    moneyField("AppointmentCost"),
  ],
  formConfig: [],
  rowTemplate: [["Name"], (item) => [item.FullName], [2]],
  selectorDisplay: ({ Name }) => Name,
  subLinks: () => [],
};
