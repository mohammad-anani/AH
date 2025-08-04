import { route } from "@/routing/entityRoute";
import { receptionistRouteConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const testOrdersRoutes = route(
  "TestOrder",
  true,
  true,
  false,
  receptionistRouteConfigs["TestOrder"],
  true,
  undefined,
  undefined,
  true,
  true,
  "tests/",
);
