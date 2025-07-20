import { route } from "@/routing/entityRoute";
import { employeeFields, persondFields } from "@/utils/models/objectKeys";

export const receptionistsRoutes = route(
  "Receptionist",
  true,
  true,
  true,
  [["Name"], ({ Name }) => [Name], [2]],
  [
    ...persondFields,
    ...employeeFields,
    ["CreatedAt", "datetime"],
    ["AdminID", "number"],
  ],
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
);
