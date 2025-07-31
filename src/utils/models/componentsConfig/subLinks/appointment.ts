import type { SubLinks } from "../../types/utils/routeTypes";

export const appointmentSubLinks: SubLinks<"Appointment"> = ({ ID }) => [
  ["Show Test Orders", `/admin/tests/orders?AppointmentID=${ID}`],
];
