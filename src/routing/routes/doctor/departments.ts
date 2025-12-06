import { Route } from "@/routing/entityRoute";
import { department } from "@/utils/models/componentsConfig/doctor";

export const departmentsRoutes = Route(
  "Department",
  false,
  false,
  false,
  department,
);
