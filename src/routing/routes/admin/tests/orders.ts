import { route } from "@/routing/entityRoute";
import { adminRouteConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const testOrdersRoutes = route(
  "TestOrder",
  false,
  false,
  true,
  adminRouteConfigs["TestOrder"],
  true,
  undefined,
  undefined,
  false,
  true,
);
