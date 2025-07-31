import { route } from "@/routing/entityRoute";
import { routeConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const operationsRoutes = route(
  "Operation",
  false,
  false,
  true,
  routeConfigs["Operation"],
);
