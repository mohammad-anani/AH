import { route } from "@/routing/entityRoute";
import { testAppointment } from "@/utils/models/componentsConfig/doctor";

export const testAppointmentsRoutes = route(
  "TestAppointment",
  false,
  false,
  false,
  testAppointment,
  true,
  undefined,
  undefined,
  false,
  false,
);
