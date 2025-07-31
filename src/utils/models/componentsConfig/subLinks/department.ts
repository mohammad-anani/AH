import type { SubLinks } from "../../types/utils/routeTypes";

export const departmentSubLinks: SubLinks<"Department"> = ({ ID }) => [
  ["Show Doctors", `/admin/human-resources/doctors?DepartmentID=${ID}`],
  [
    "Show Receptionists",
    `/admin/human-resources/receptionists?DepartmentID=${ID}`,
  ],
  ["Show Admins", `/admin/human-resources/admins?DepartmentID=${ID}`],
  ["Show Tests", `/admin/tests/types?DepartmentID=${ID}`],
  ["Show Operations", `/admin/operations?DepartmentID=${ID}`],
];
