import { route } from "@/routing/entityRoute";
import { adminRouteConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const testAppointmentsRoutes = route(
  "TestAppointment",
  false,
  false,
  true,
  adminRouteConfigs["TestAppointment"],
  true,
);
