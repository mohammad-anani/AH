import { serviceRoute } from "@/routing/serviceRoute";
import { testAppointment } from "@/utils/models/componentsConfig/receptionist";

export const testAppointmentsRoutes = serviceRoute(
  "TestAppointment",
  testAppointment,

  [
    ["Result", "Result", "text", new Set(["Complete"])],
    ["Notes", "Notes", "text", "All"],
    ["Schedule Date", "ScheduledDate", "datetime", new Set(["Reschedule"])],
  ],
  undefined,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  undefined,
  true,
  true,
  undefined,
  true,
);

