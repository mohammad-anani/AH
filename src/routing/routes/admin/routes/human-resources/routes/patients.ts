import { route } from "@/routing/entityRoute";
import { persondFields } from "@/utils/models/objectKeys";
import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";

export const patientsRoutes = route(
  "Patient",
  false,
  true,
  true,
  [
    ["Name", "Age", "Phone"],
    ({ Name, Age, Phone }) => [Name, Age, formatPhoneNumber(Phone)],
    [2, 1, 1],
  ],
  [...persondFields, ["CreatedAt", "datetime"], ["ReceptionistID", "number"]],
  ({ ID }) => [
    ["Show Appointments", `/admin/appointments?PatientID=${ID}`],
    ["Show Tests Appointments", `/admin/tests/appointments?PatientID=${ID}`],
    ["Show Operations", `/admin/operations?PatientID=${ID}`],
    ["Show Insurances", `/admin/insurances?PatientID=${ID}`],
  ],
);
