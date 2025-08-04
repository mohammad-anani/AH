import { route } from "@/routing/entityRoute";
import { adminRouteConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const doctorsRoutes = route(
  "Doctor",
  true,
  true,
  true,
  adminRouteConfigs["Doctor"],
  true,
);
