import { route } from "@/routing/entityRoute";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";

export const departmentsRoutes = route(
  "Department",
  true,
  true,
  true,
  ({ ID }) => [
    ["Show Doctors", `/admin/human-resources/doctors?Department=${ID}`],
    [
      "Show Receptionists",
      `/admin/human-resources/receptionists?Department=${ID}`,
    ],
    ["Show Admins", `/admin/human-resources/admins?Department=${ID}`],
    ["Show Tests", `/admin/tests/types?Department=${ID}`],
    ["Show Operations", `/admin/operations?Department=${ID}`],
  ],
  ({ Name, Phone, CreatedByAdminID, CreatedAt }) => [
    ["Name", Name],
    ["Phone", formatPhoneNumber(Phone)],
    [
      "Created By",
      "View Admin",
      `/admin/human-resources/admins/${CreatedByAdminID}`,
    ],
    ["Created At", formatDateIsoToLocal(CreatedAt)],
  ],
);
