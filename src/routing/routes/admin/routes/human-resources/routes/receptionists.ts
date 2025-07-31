import { route } from "@/routing/entityRoute";
import { routeConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const receptionistsRoutes = route(
  "Receptionist",
  true,
  true,
  true,
  routeConfigs["Receptionist"],
);
