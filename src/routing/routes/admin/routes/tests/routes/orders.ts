import { route } from "@/routing/entityRoute";
import { routeConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const testOrdersRoutes = route(
  "TestOrder",
  false,
  false,
  true,
  routeConfigs["TestOrder"],
);
