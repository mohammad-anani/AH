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
  rowTemplate: [
    ["Name", "Specialization"],
    (item) => [item.FullName, item.Specialization],
    [2],
  ],
  selectorDisplay: ({ FullName }) => FullName,
  subLinks: ({ ID }) => [
    ["Show Appointments", `/receptionist/appointments?DoctorID=${ID}`],
    ["Show Operations", `/receptionist/operations?DoctorID=${ID}`],
  ],
};
