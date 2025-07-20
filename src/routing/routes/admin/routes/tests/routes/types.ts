import { route } from "@/routing/entityRoute";

export const testTypesRoutes = route(
  "TestType",
  true,
  true,
  true,
  [
    ["Name", "DepartmentName"],
    ({ Name, DepartmentName }) => [Name, DepartmentName],
    [2, 1, 1],
  ],
  [
    ["ID", "number"],
    ["DepartmentID", "number"],
    ["Name", "string"],
    ["Cost", "number"],
    ["AdminID", "number"],
    ["CreatedAt", "datetime"],
  ],
  ({ ID }) => [
    ["Show Test Appointments", `/admin/tests/appointments?TestTypeID=${ID}`],
    ["Show Test Orders", `/admin/tests/orders?TestTypeID=${ID}`],
  ],
);
