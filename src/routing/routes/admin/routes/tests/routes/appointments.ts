import { route } from "@/routing/entityRoute";

export const testAppointmentsRoutes = route(
  "TestAppointment",
  false,
  true,
  true,

  () => [],
  ({
    TestOrderID,
    PatientID,
    ScheduledDate,
    Status,
    Result,
    ResultDate,
    CreatedByReceptionistID,
    CreatedAt,
  }) => [
    TestOrderID
      ? ["Test Order", "View Test Order", `/admin/tests/orders/${TestOrderID}`]
      : ["Test Order", "None"],

    ["Patient", "View Patient", `/admin/human-resources/patients/${PatientID}`],
    ["Scheduled Date", ScheduledDate],
    ["Status", Status],
    ["Result", Result],
    ["Result Date", ResultDate || "N/A"],
    [
      "Created By",
      "View Receptionist",
      `/admin/human-resources/receptionists/${CreatedByReceptionistID}`,
    ],
    ["Created At", CreatedAt],
  ],
);
