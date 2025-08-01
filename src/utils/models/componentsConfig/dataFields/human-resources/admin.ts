import { employee } from "./employee";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { DataFields as DataFields } from "@/utils/models/types/utils/routeTypes";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

export const admin: DataFields<"Admin"> = ({
  Employee,
  CreatedByAdminID,
  CreatedAt,
}: typesObject["Admin"]) => [
  ...employee(Employee),
  CreatedByAdminID
    ? [
        "Created By",
        "View Admin",
        `/admin/human-resources/admins/${CreatedByAdminID}`,
        "Admin",
      ]
    : ["Created By", "System"],
  ["Created At", formatDateIsoToLocal(CreatedAt)],
];
