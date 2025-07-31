import { route } from "@/routing/entityRoute";
import { routeConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const adminsRoutes = route(
  "Admin",
  true,
  true,
  true,
  routeConfigs["Admin"],
);
