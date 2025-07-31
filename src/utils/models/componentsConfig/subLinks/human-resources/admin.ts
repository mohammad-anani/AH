import type { SubLinks } from "@/utils/models/types/utils/routeTypes";

export const adminSubLinks: SubLinks<"Admin"> = ({ ID }) => [
  ["Show Departments", `/admin/departments?AdminID=${ID}`],
  ["Show Receptionists", `/admin/human-resources/receptionists?AdminID=${ID}`],
  ["Show Admins", `/admin/human-resources/admins?AdminID=${ID}`],
  ["Show Test Types", `/admin/tests/types?AdminID=${ID}`],
];
