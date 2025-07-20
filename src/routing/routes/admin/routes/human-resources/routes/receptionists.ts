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
    ["Show Tests Appointments", `/admin/tests?ReceptionistID=${ID}`],
    ["Show Tests", `/admin/tests?ReceptionistID=${ID}`],
    ["Show Patients", `/admin/tests?ReceptionistID=${ID}`],
    ["Show Doctors", `/admin/tests?ReceptionistID=${ID}`],
    ["Show Operartions", `/admin/tests?ReceptionistID=${ID}`],
    ["Show Payments", `/admin/tests?ReceptionistID=${ID}`],
    ["Show Insurances", `/admin/tests?ReceptionistID=${ID}`],
  ],
);
