import { route } from "@/routing/entityRoute";

export const departmentsRoutes = route(
  "Departments",
  true,
  true,
  true,
  [["Name", "Phone"], ({ Name, Phone }) => [Name, Phone], [2, 1]],
  [
    ["Name", "string"],
    ["Phone", "phone"],
    ["AdminID", "string"],
    ["CreatedAt", "datetime"],
  ],
);
