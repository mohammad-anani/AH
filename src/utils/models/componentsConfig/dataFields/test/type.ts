import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { dataFields as DataFields } from "@/utils/models/types/utils/routeTypes";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

export const testType: DataFields<"TestType"> = ({
  Name,
  DepartmentID,
  Cost,
  CreatedByAdminID,
  CreatedAt,
}: typesObject["TestType"]) => [
  ["Name", Name],
  [
    "Department",
    "View Department",
    `/admin/departments/${DepartmentID}`,
    "Department",
  ],
  ["Cost", `${Cost} $`],
  [
    "Created By",
    "View Admin",
    `/admin/human-resources/admins/${CreatedByAdminID}`,
    "Admin",
  ],
  ["Created At", formatDateIsoToLocal(CreatedAt)],
];
