import { route } from "@/routing/entityRoute";
import { routeConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const patientsRoutes = route(
  "Patient",
  false,
  false,
  true,
  routeConfigs["Patient"],
  true,
);
