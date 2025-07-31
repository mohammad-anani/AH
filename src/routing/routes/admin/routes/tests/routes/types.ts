import { route } from "@/routing/entityRoute";
import { routeConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const testTypesRoutes = route(
  "TestType",
  true,
  true,
  true,
  routeConfigs["TestType"],
);
