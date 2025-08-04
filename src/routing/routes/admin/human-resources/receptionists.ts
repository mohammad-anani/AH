import { route } from "@/routing/entityRoute";
import { adminRouteConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const receptionistsRoutes = route(
  "Receptionist",
  true,
  true,
  true,
  adminRouteConfigs["Receptionist"],
  true,
);
