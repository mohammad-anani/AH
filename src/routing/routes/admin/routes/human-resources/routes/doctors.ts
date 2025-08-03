import { route } from "@/routing/entityRoute";
import { routeConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const doctorsRoutes = route(
  "Doctor",
  true,
  true,
  true,
  routeConfigs["Doctor"],
  true,
);
