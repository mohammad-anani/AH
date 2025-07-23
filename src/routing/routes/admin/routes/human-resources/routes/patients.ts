import { route } from "@/routing/entityRoute";

import { personDataFields } from "@/utils/models/dataFields";

export const patientsRoutes = route(
  "Patient",
  false,
  true,
  true,

  ({ ID }) => [
    ["Show Appointments", `/admin/appointments?PatientID=${ID}`],
    ["Show Tests Appointments", `/admin/tests/appointments?PatientID=${ID}`],
    ["Show Operations", `/admin/operations?PatientID=${ID}`],
    ["Show Insurances", `/admin/insurances?PatientID=${ID}`],
  ],
  ({ Person, CreatedByReceptionistID, CreatedAt }) => [
    ...personDataFields(Person),
    [
      "Created By",
      "View Receptionist",
      `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
    ],
    ["Created At", CreatedAt],
  ],
  true,
);
