import { route } from "@/routing/entityRoute";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

export const testAppointmentsRoutes = route(
  "TestAppointment",
  false,
  true,
  true,
  [
    ["PatientName", "TestName", "Date"],
    ({ PatientName, TestName, ScheduledDate }) => [
      PatientName,
      TestName,
      formatDateIsoToLocal(ScheduledDate),
    ],
    [1, 1, 1],
  ],
  [
    ["TestOrderID", "number"],
    ["PatientID", "number"],
    ["ScheduledDate", "datetime"],
    ["Status", "select", ["Cancelled", "Accepted"]],
    ["Result", "string"],
    ["ResultDate", "datetime"],
    ["ReceptionistID", "number"],
    ["CreatedAt", "datetime"],
  ],
  () => [], // No sublinks in Card
);
