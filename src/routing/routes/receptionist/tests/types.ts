import { route } from "@/routing/entityRoute";
import { receptionistRouteConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const testTypesRoutes = route(
  "TestType",
  false,
  false,
  false,
  receptionistRouteConfigs["TestType"],
  true,
  undefined,
  undefined,
  true,
  true,
  "tests/",
);
