import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";
import type { DataFields } from "../../types/utils/routeTypes";

export const department: DataFields<"Department"> = ({
  Name,
  Phone,
  CreatedByAdminID,
  CreatedAt,
}) => [
  ["Name", Name],
  ["Phone", formatPhoneNumber(Phone)],
  [
    "Created By",
    "View Admin",
    `/admin/human-resources/admins/${CreatedByAdminID}`,
    "Admin",
  ],
  ["Created At", formatDateIsoToLocal(CreatedAt)],
];
