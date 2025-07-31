import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { RowTemplate } from "../../routeConfig";

export const testAppointmentRowTemplate: RowTemplate<"TestAppointment"> = [
  ["Patient", "Test", "Date"],
  (item) => [item.PatientName, item.TestName, formatDateIsoToLocal(item.Date)],
  [1, 1, 1],
];
