import { Route } from "@/routing/entityRoute";
import { testAppointment } from "@/utils/models/componentsConfig/doctor";

export const testAppointmentsRoutes = Route(
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
