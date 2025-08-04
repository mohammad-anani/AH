import { route } from "@/routing/entityRoute";
import { testAppointment } from "@/utils/models/componentsConfig/admin";

export const testAppointmentsRoutes = route(
  "TestAppointment",
  false,
  false,
  true,
  testAppointment,
  true,
);
