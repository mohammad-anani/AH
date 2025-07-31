import type { SubLinks } from "@/utils/models/types/utils/routeTypes";

export const testOrderSubLinks: SubLinks<"TestOrder"> = ({ ID }) => [
  ["Show Test Appointments", `/admin/tests/appointments?TestOrderID=${ID}`],
];
