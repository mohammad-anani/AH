import { route } from "@/routing/entityRoute";
import { testAppointment } from "@/utils/models/componentsConfig/receptionist";

export const testAppointmentsRoutes = route(
  "TestAppointment",
  true,
  true,
  false,
  testAppointment,
  false,
  undefined,
  undefined,
  true,
  true,
);
