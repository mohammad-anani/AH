import type { SubLinks } from "@/utils/models/types/utils/routeTypes";

export const testTypeSubLinks: SubLinks<"TestType"> = ({ ID }) => [
  ["Show Test Appointments", `/admin/tests/appointments?TestTypeID=${ID}`],
  ["Show Test Orders", `/admin/tests/orders?TestTypeID=${ID}`],
];
