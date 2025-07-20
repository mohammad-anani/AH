import { route } from "@/routing/entityRoute";
import { employeeFields, persondFields } from "@/utils/models/objectKeys";

export const adminsRoutes = route(
  "Admin",
  true,
  true,
  true,
  [["Name"], ({ Name }) => [Name], [2]],
  [...persondFields, ...employeeFields, ["CreatedAt", "datetime"]],
  ({ ID }) => [
    ["Show Departments", `/admins/departments?AdminID=${ID}`],
    ["Show Tests", `/admin/tests?AdminID=${ID}`],
    [
      "Show Receptionists",
      `/admin/human-resources/receptionists?AdminID=${ID}`,
    ],
    ["Show Admins", `/admin/human-resources/admins?AdminID=${ID}`],
    ["Show Tests", `/admin/tests/types?AdminID=${ID}`],
  ],
);
