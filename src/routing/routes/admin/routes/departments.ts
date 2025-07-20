import { route } from "@/routing/entityRoute";
import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";

export const departmentsRoutes = route(
  "Department",
  true,
  true,
  true,
  [
    ["Name", "Phone"],
    ({ Name, Phone }) => [Name, formatPhoneNumber(Phone)],
    [2, 1],
  ],
  [
    ["Name", "string"],
    ["Phone", "phone"],
    ["AdminID", "string"],
    ["CreatedAt", "datetime"],
  ],
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
);
