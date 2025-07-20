import { route } from "@/routing/entityRoute";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

export const appointmentsRoutes = route(
  "Appointment",
  false,
  true,
  false,
  [
    ["Patient", "Doctor", "Time"],
    ({ PatientName, DoctorName, Time }) => [
      PatientName,
      DoctorName,
      formatDateIsoToLocal(Time),
    ],
    [1, 1, 1],
  ],
  [
    ["DoctorID", "number"],
    ["PatientID", "number"],
    ["Time", "datetime"],
    ["Reason", "string"],
    ["Status", "select", ["Accepted", "Rejected"]],
    ["Notes", "string"],
    ["ReceptionistID", "number"],
    ["CreatedAt", "datetime"],
  ],
  ({ ID }) => [
    ["Show Prescriptions", "prescriptions"],
    ["Show Test Orders", `/admin/tests/orders?AppointmentID=${ID}`],
  ],
);
