import { route } from "@/routing/entityRoute";
import { receptionistRouteConfigs } from "@/utils/models/componentsConfig/routeConfig";

export const testAppointmentsRoutes = route(
  "TestAppointment",
  true,
  true,
  false,
  receptionistRouteConfigs["TestAppointment"],
  true,
  undefined,
  undefined,
  true,
  true,
  "tests/",
);
