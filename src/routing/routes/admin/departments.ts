import { route } from "@/routing/entityRoute";
import { adminRouteConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const departmentsRoutes = route(
  "Department",
  true,
  true,
  true,
  adminRouteConfigs["Department"],
);
