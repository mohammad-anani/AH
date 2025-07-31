import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { RowTemplate } from "../routeConfig";

export const appointmentRowTemplate: RowTemplate<"Appointment"> = [
  ["Patient", "Doctor", "Time"],
  (item) => [
    item.PatientName,
    item.DoctorName,
    formatDateIsoToLocal(item.Time),
  ],
  [1, 1, 1],
];
