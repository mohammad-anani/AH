import { route } from "@/routing/entityRoute";
import { employeeDataFields } from "@/utils/models/dataFields";
import { employeeFields, personFields } from "@/utils/models/objectKeys";

export const doctorsRoutes = route(
  "Doctor",
  false,
  true,
  true,
  [
    ["Name", "Specialization"],
    ({ Name, Specialization }) => [Name, Specialization],
    [2, 1],
  ],
  [
    ...personFields,
    ...employeeFields,
    ["Specialization", "string"],
    ["CreatedAt", "datetime"],
    ["ReceptionistID", "number"],
  ],
  ({ ID }) => [
    ["Show Appointments", `/admin/appointments?DoctorID=${ID}`],
    ["Show Operations", `/admin/operations?DoctorID=${ID}`],
  ],
  ({ Employee, Specialization, CreatedByReceptionistID, CreatedAt }) => [
    ...employeeDataFields(Employee),
    ["Specialization", Specialization],
    [
      "Created By",
      "View Receptionist",
      `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
    ],
    ["Created At", CreatedAt],
  ],
);
