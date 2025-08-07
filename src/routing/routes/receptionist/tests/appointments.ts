import { serviceRoute } from "@/routing/serviceRoute";
import { testAppointment } from "@/utils/models/componentsConfig/receptionist";

export const testAppointmentsRoutes = serviceRoute(
  "TestAppointment",
  testAppointment,
  [["Notes", "Notes", "text", "both"]],
  undefined,
  true,
  true,
  true,
);
