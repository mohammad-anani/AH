import { route } from "@/routing/entityRoute";
import { employeeDataFields } from "@/utils/models/dataFields";

export const receptionistsRoutes = route(
  "Receptionist",
  true,
  true,
  true,

  ({ ID }) => [
    ["Show Appointments", `/admin/appointments?ReceptionistID=${ID}`],
    [
      "Show Tests Appointments",
      `/admin/tests/appointments?ReceptionistID=${ID}`,
    ],

    ["Show Patients", `/admin/human-resources/patients?ReceptionistID=${ID}`],
    ["Show Doctors", `/admin/human-resources/doctors?ReceptionistID=${ID}`],
    ["Show Operartions", `/admin/operations?ReceptionistID=${ID}`],
  ],
  ({ Employee, CreatedByAdminID, CreatedAt }) => [
    ...employeeDataFields(Employee),
    CreatedByAdminID
      ? [
          "Created By",
          "View Admin",
          `/admin/human-resources/admins/${CreatedByAdminID}`,
        ]
      : ["Created By", "System"],
    ["Created At", CreatedAt],
  ],
);
