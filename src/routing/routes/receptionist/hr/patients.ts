import { route } from "@/routing/entityRoute";
import { receptionistRouteConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const patientRoutes = route(
  "Patient",
  true,
  true,
  false,
  receptionistRouteConfigs["Patient"],
  true,
  undefined,
  undefined,
  true,
  true,
  "human-resources/",
);
