import { route } from "@/routing/entityRoute";
import { adminRouteConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const testTypesRoutes = route(
  "TestType",
  true,
  true,
  true,
  adminRouteConfigs["TestType"],
  true,
);
