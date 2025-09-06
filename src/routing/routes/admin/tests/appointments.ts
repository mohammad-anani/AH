import { Route } from "@/routing/entityRoute";
import { testAppointment } from "@/utils/models/componentsConfig/admin";

export const testAppointmentsRoutes = Route(
  "TestAppointment",
  false,
  false,
  true,
  testAppointment,
  true,
);
