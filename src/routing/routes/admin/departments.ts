import { Route } from "@/routing/entityRoute";
import { department } from "@/utils/models/componentsConfig/admin";

export const departmentsRoutes = Route(
  "Department",
  true,
  true,
  true,
  department,
);
