import type { typesObject } from "@/utils/models/types/normal/typesObject";
import { moneyField, stringField } from "../../utils/filterReusableFields";
import { person } from "./person";
import type { RouteConfig } from "../../routeConfig";
import { formatMoney } from "@/utils/formatters/formatMoney";
import { employee } from ".";

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
    stringField("Specialization"),
    moneyField("Cost Per Appointment"),
  ],
  formConfig: [
    ...employee["formConfig"],
    ["Specialization", "Specialization", "string", "both"],
    ["Appointment Cost", "CostPerAppointment", "money", "both"],
  ],
  rowTemplate: [["Name"], (item) => [item.FullName], [2]],
  selectorDisplay: ({ FullName, Specialization }) =>
    FullName + " | " + Specialization,
  subLinks: ({ ID }) => [
    ["Show Appointments", `/admin/appointments?DoctorID=${ID}`],
    ["Show Operations", `/admin/operations?Doctors=${ID}`],
  ],
};
