import { route } from "@/routing/entityRoute";
import { routeConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const testAppointmentsRoutes = route(
  "TestAppointment",
  false,
  false,
  true,
  routeConfigs["TestAppointment"],
);
