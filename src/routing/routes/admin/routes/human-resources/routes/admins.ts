import { route } from "@/routing/entityRoute";
import { employeeDataFields } from "@/utils/models/dataFields";
import { employeeFields, personFields } from "@/utils/models/objectKeys";

export const adminsRoutes = route(
  "Admin",
  true,
  true,
  true,
  [["Name"], ({ Name }) => [Name], [2]],
  [...personFields, ...employeeFields, ["CreatedAt", "datetime"]],
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
  ({ Employee, CreatedByAdminID, CreatedAt }) => [
    ...employeeDataFields(Employee),
    CreatedByAdminID
      ? [
          "Created By",
          "View Admin",
          `/admin/human-resources/admins/${CreatedByAdminID}`,
        ]
      : ["Created By", "System"],
    ["Created At", CreatedAt],
  ],
);
