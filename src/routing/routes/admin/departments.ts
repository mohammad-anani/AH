import { route } from "@/routing/entityRoute";
import { department } from "@/utils/models/componentsConfig/admin";

export const departmentsRoutes = route(
  "Department",
  true,
  true,
  true,
  department,
);
