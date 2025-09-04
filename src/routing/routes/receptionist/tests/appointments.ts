import { serviceRoute } from "@/routing/serviceRoute";
import { testAppointment } from "@/utils/models/componentsConfig/receptionist";

export const testAppointmentsRoutes = serviceRoute(
  "TestAppointment",
  testAppointment,

  [
    ["Result", "Service.Result", "text", new Set(["Complete"])],
    ["Notes", "Service.Notes", "text", "All"],
    [
      "Schedule Date",
      "Service.ScheduledDate",
      "datetime",
      new Set(["Reschedule"]),
    ],
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

//finish actions and processes
