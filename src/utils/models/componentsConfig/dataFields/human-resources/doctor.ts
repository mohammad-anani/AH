import { employee } from "./employee";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { dataFields as DataFields } from "@/utils/models/types/utils/routeTypes";
import type { typesObject } from "@/utils/models/types/normal/typesObject";

export const doctor: DataFields<"Doctor"> = ({
  Employee,
  Specialization,
  CreatedByAdminID,
  CreatedAt,
}: typesObject["Doctor"]) => [
  ...employee(Employee),
  ["Specialization", Specialization],
  [
    "Created By",
    "View Admin",
    `/admin/human-resources/admins/${CreatedByAdminID}`,
    "Admin",
  ],
  ["Created At", formatDateIsoToLocal(CreatedAt)],
];
