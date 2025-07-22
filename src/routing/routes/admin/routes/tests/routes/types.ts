import { route } from "@/routing/entityRoute";

export const testTypesRoutes = route(
  "TestType",
  true,
  true,
  true,
  ({ ID }) => [
    ["Show Test Appointments", `/admin/tests/appointments?TestTypeID=${ID}`],
    ["Show Test Orders", `/admin/tests/orders?TestTypeID=${ID}`],
  ],
  ({ Name, DepartmentID, Cost, CreatedByAdminID, CreatedAt }) => [
    ["Name", Name],
    ["Department", "View Department", `/admin/departments/${DepartmentID}`],
    ["Cost", `${Cost} $`],
    [
      "Created By",
      "View Admin",
      `/admin/human-resources/admins/${CreatedByAdminID}`,
    ],
    ["Created At", CreatedAt],
  ],
);
