import { route } from "@/routing/entityRoute";

export const appointmentsRoutes = route(
  "Appointment",
  false,
  true,
  false,

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
