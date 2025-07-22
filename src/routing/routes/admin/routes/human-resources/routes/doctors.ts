import { route } from "@/routing/entityRoute";
import { employeeDataFields } from "@/utils/models/dataFields";

export const doctorsRoutes = route(
  "Doctor",
  false,
  true,
  true,
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
