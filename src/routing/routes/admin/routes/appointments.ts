import { route } from "@/routing/entityRoute";
import { routeConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const appointmentsRoutes = route(
  "Appointment",
  false,
  false,
  true,
  routeConfigs["Appointment"],
);
