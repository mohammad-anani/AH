import { route } from "@/routing/entityRoute";
import { personFields } from "@/utils/models/objectKeys";
import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";
import { personDataFields } from "@/utils/models/dataFields";

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
  [...personFields, ["CreatedAt", "datetime"], ["ReceptionistID", "number"]],
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
);
