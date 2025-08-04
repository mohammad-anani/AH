import { route } from "@/routing/entityRoute";
import { receptionistRouteConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const departmentsRoutes = route(
  "Department",
  false,
  false,
  false,
  receptionistRouteConfigs["Department"],
);
