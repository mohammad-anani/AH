import { route } from "@/routing/entityRoute";

import { routeConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const paymentsRoutes = route(
  "Payment",
  false,
  false,
  true,
  routeConfigs["Payment"],
  false,
  undefined,
  undefined,
  false,
  true,
);
