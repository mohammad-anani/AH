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
  ({
    PatientID,
    DoctorID,
    Time,
    Reason,
    Status,
    Notes,
    CreatedByReceptionistID,
    CreatedAt,
  }) => [
    ["Patient", "View Patient", `/admin/human-resources/patients/${PatientID}`],
    ["Doctor", "View Doctor", `/admin/human-resources/doctors/${DoctorID}`],
    ["Time", Time],
    ["Reason", Reason],
    ["Status", Status],
    ["Notes", Notes],
    [
      "Receptionist",
      "View Receptionist",
      `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
    ],
    ["Created At", CreatedAt],
  ],
);
