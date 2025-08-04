import { route } from "@/routing/entityRoute";
import { receptionistRouteConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const doctorsRoutes = route(
  "Doctor",
  false,
  false,
  false,
  receptionistRouteConfigs["Doctor"],
  true,
  undefined,
  undefined,
  true,
  true,
  "human-resources/",
);
