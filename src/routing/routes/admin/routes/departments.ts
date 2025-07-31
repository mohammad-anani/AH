import { route } from "@/routing/entityRoute";
import { routeConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const departmentsRoutes = route(
  "Department",
  true,
  true,
  true,
  routeConfigs["Department"],
);
