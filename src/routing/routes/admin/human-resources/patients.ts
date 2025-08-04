import { route } from "@/routing/entityRoute";
import { adminRouteConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const patientsRoutes = route(
  "Patient",
  false,
  false,
  true,
  adminRouteConfigs["Patient"],
  true,
);
