import type { SubLinks } from "@/utils/models/types/utils/routeTypes";

export const doctorSubLinks: SubLinks<"Doctor"> = ({ ID }) => [
  ["Show Appointments", `/admin/appointments?DoctorID=${ID}`],
  ["Show Operations", `/admin/operations?DoctorID=${ID}`],
];
