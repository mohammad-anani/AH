import { route } from "@/routing/entityRoute";
import { employeeFields, persondFields } from "@/utils/models/objectKeys";

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
    ...persondFields,
    ...employeeFields,
    ["Specialization", "string"],
    ["CreatedAt", "datetime"],
    ["ReceptionistID", "number"],
  ],
  ({ ID }) => [
    ["Show Appointments", `/admin/appointments?DoctorID=${ID}`],
    ["Show Operations", `/admin/operations?DoctorID=${ID}`],
  ],
);
