import type { RowTemplate } from "./routeConfig";
import type { EntityKey } from "../types/utils/entityKeys";
import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

export const rowTemplates: {
  [K in EntityKey]: RowTemplate<K>;
} = {
  Department: [
    ["Name", "Phone"],
    (item) => [item.Name, formatPhoneNumber(item.Phone)],
    [2, 1],
  ],
  Admin: [["Name"], (item) => [item.Name], [2]],
  Receptionist: [["Name"], (item) => [item.Name], [2]],
  Doctor: [["Name"], (item) => [item.Name], [2]],
  Patient: [["Name", "Age"], (item) => [item.Name, item.Age], [2, 1]],
  TestType: [
    ["Name", "Department"],
    (item) => [item.Name, item.DepartmentName],
    [1, 1],
  ],
  TestOrder: [
    ["Patient", "Test"],
    (item) => [item.PatientName, item.TestName],
    [2, 2],
  ],
  TestAppointment: [
    ["Patient", "Test", "Date"],
    (item) => [
      item.PatientName,
      item.TestName,
      formatDateIsoToLocal(item.Date),
    ],
    [1, 1, 1],
  ],
  Insurance: [
    ["Provider", "Coverage", "status"],
    (item) => [
      item.ProviderName,
      item.Coverage * 100 + "%",
      item.isActive ? "Active" : "Inactive",
    ],
    [1, 1, 1],
  ],
  Appointment: [
    ["Patient", "Doctor", "Time"],
    (item) => [
      item.PatientName,
      item.DoctorName,
      formatDateIsoToLocal(item.Time),
    ],
    [1, 1, 1],
  ],
  Operation: [
    ["Name", "Patient"],
    ({ Name, PatientName }) => [Name, PatientName],
    [2, 2],
  ],
};
