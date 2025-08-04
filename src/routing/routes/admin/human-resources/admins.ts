import { route } from "@/routing/entityRoute";
import { adminRouteConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const adminsRoutes = route(
  "Admin",
  true,
  true,
  true,
  adminRouteConfigs["Admin"],
  true,
);
